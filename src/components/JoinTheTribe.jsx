import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARTICLE_COUNT = 6000; // Increased massively for maximum physical density
const CIRCLE_RADIUS = 90;

/* ── Offscreen canvas: sample pixel coords from "ALUMNEST" text ── */
function sampleTextPositions(canvasW, canvasH, count) {
  const off = document.createElement('canvas');
  off.width = canvasW;
  off.height = canvasH;
  const ctx = off.getContext('2d');

  const fontSize = Math.floor(canvasW / 8.5);
  ctx.fillStyle = '#fff';
  ctx.font = `700 ${fontSize}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ALUMNEST', canvasW / 2, canvasH / 2 - 40); // slightly offset up to make room for CTA

  const { data } = ctx.getImageData(0, 0, canvasW, canvasH);
  const hits = [];
  const stride = 4; // every N pixels to avoid too many samples
  for (let y = 0; y < canvasH; y += stride) {
    for (let x = 0; x < canvasW; x += stride) {
      const idx = (y * canvasW + x) * 4;
      if (data[idx + 3] > 128) hits.push({ x, y });
    }
  }

  // Fallback if no hits
  if (hits.length === 0) hits.push({ x: canvasW / 2, y: canvasH / 2 });

  // Randomly pick `count` positions from all valid hits
  const selected = [];
  for (let i = 0; i < count; i++) {
    selected.push(hits[Math.floor(Math.random() * hits.length)]);
  }
  return selected;
}

export default function JoinTheTribe() {
  const sectionRef = useRef(null);
  const canvasRef  = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    // Use window dimensions since it will be pinned 100vh
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;

    const ctx = canvas.getContext('2d');

    // 1. Initial particles on edges
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const edge = Math.floor(Math.random() * 4);
      let sx, sy;
      if (edge === 0) { sx = Math.random() * W; sy = -10; }
      else if (edge === 1) { sx = W + 10; sy = Math.random() * H; }
      else if (edge === 2) { sx = Math.random() * W; sy = H + 10; }
      else { sx = -10; sy = Math.random() * H; }
      
      const z = Math.random(); // 0 (far background) to 1 (close foreground)
      
      // Star size scaling (mostly tiny specs, rare larger stars)
      const isLargeStar = Math.random() > 0.95;
      const r = isLargeStar 
        ? (Math.random() * 0.8 + 0.4) * (1 + z * 1.5) 
        : (Math.random() * 0.2 + 0.1) * (1 + z);
        
      const alpha = Math.random() * 0.4 + 0.1 + (z * 0.5);
      
      // Star Color palette: 70% pure white, 15% icy blue, 15% warm golden/amber
      const colorRoll = Math.random();
      let rC, gC, bC;
      if (colorRoll > 0.30) { rC = 255; gC = 255; bC = 255; } // Pure Star White
      else if (colorRoll > 0.15) { rC = 200; gC = 220; bC = 255; } // Icy Blue
      else { rC = 255; gC = 210; bC = 140; } // Warm Gold
      
      return { 
        baseX: sx, baseY: sy, 
        x: sx, y: sy, 
        r, baseAlpha: alpha, z,
        rC, gC, bC, // color
        hoverOffset: Math.random() * Math.PI * 2,
        hoverSpeed: Math.random() * 0.05 + 0.02, // ultra-slow cosmic drift
        hoverRadius: Math.random() * 10 + 2,
        twinkleSpeed: Math.random() * 3 + 1.0, // sharper twinkle
      };
    });

    // 2. Targets: Circle
    const circleTargets = particles.map((_, i) => {
      const a = (i / PARTICLE_COUNT) * Math.PI * 2;
      return {
        x: cx + Math.cos(a) * CIRCLE_RADIUS + (Math.random() - 0.5) * 30,
        y: cy + Math.sin(a) * CIRCLE_RADIUS + (Math.random() - 0.5) * 30,
      };
    });

    // 3. Targets: Text
    const textTargets = sampleTextPositions(W, H, PARTICLE_COUNT);

    // 4. Interaction tracking
    let mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Pre-render glowing dots offscreen (3 distinct colors for variety)
    const createStarGlow = (r, g, b) => {
      const glowW = 20, glowH = 20; // tighter star cores
      const canvas = document.createElement('canvas');
      canvas.width = glowW; canvas.height = glowH;
      const gctx = canvas.getContext('2d');
      const grad = gctx.createRadialGradient(glowW/2, glowH/2, 0, glowW/2, glowH/2, glowW/2);
      grad.addColorStop(0, `rgba(255,255,255,1)`); // blinding white center for sharp stars
      grad.addColorStop(0.15, `rgba(${r},${g},${b},0.9)`);
      grad.addColorStop(0.4, `rgba(${r},${g},${b},0.3)`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, glowW, glowH);
      return canvas;
    };
    
    const glowWhite = createStarGlow(255, 255, 255);
    const glowIcy = createStarGlow(200, 220, 255);
    const glowWarm = createStarGlow(255, 210, 140);

    // 6. Render loop (always running while component is mounted)
    let rafId;
    const tick = () => {
      const time = Date.now() * 0.001; // time in seconds
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'screen'; // energetic additive blending
      
      particles.forEach(p => {
        // Apply slow continuous hover offset
        let targetX = p.baseX + Math.sin(time * p.hoverSpeed + p.hoverOffset) * p.hoverRadius;
        let targetY = p.baseY + Math.cos(time * p.hoverSpeed + p.hoverOffset) * p.hoverRadius;

        // Mouse Repel Physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;

        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          targetX -= (dx / dist) * force * 100;
          targetY -= (dy / dist) * force * 100;
        }

        // Depth-based travel speed (stars should snap in slowly)
        const travelSpeed = 0.02 + p.z * 0.04; 
        p.x += (targetX - p.x) * travelSpeed;
        p.y += (targetY - p.y) * travelSpeed;

        // Twinkle amplitude using sine wave over time (sharper blinks for stars)
        const twinkle = Math.sin(time * p.twinkleSpeed + p.hoverOffset);
        const currentAlpha = p.baseAlpha * (0.5 + 0.5 * Math.pow(twinkle, 3)); // Math.pow curves the blink drastically

        // Draw size drastically reduced, scaling heavily by radius
        const drawSize = Math.max(1, p.r * 12);
        ctx.globalAlpha = Math.max(0, currentAlpha);
        
        let sprite = glowWhite;
        if (p.rC === 200) sprite = glowIcy;
        else if (p.rC === 255 && p.gC === 210) sprite = glowWarm;
        
        ctx.drawImage(sprite, p.x - drawSize / 2, p.y - drawSize / 2, drawSize, drawSize);
      });
      
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      rafId = requestAnimationFrame(tick);
    };
    tick();

    // 7. ScrollTrigger Timeline (scrubs through sequence)
    // Initialize GSAP animatable properties
    gsap.set(ctaRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom', // scrub through 500vh wrapper
        scrub: 1.5, // 1.5s lag smoothing for buttery scrubbing
      }
    });

    // Phase 1 -> cluster from edges into circle (0 to 3s on timeline)
    tl.to(particles, {
      duration: 3,
      ease: 'power2.inOut',
      baseX: (i) => circleTargets[i].x,
      baseY: (i) => circleTargets[i].y,
    }, 0);

    // Phase 2 -> morph from circle to text (3.5s to 6.5s)
    tl.to(particles, {
      duration: 3,
      ease: 'power3.inOut',
      baseX: (i) => {
        const angle = Math.random() * Math.PI * 2;
        // 94% of particles strictly form the text with minimal variance (3px) for absolute density
        const isCore = Math.random() < 0.94;
        const dist = isCore ? Math.random() * 3 : Math.pow(Math.random(), 2) * 200 + 4; 
        return textTargets[i].x + Math.cos(angle) * dist;
      },
      baseY: (i) => {
        const angle = Math.random() * Math.PI * 2;
        const isCore = Math.random() < 0.94;
        const dist = isCore ? Math.random() * 3 : Math.pow(Math.random(), 2) * 200 + 4; 
        return textTargets[i].y + Math.sin(angle) * dist;
      },
    }, "+=0.5");

    // Phase 3 -> fade + slide up CTA button (6.5s to 8.5s)
    tl.to(ctaRef.current, {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    }, "+=0");

    // Handle Resize (simple refresh GSAP pinning)
    const onResize = () => { ScrollTrigger.refresh(); };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      tl.kill(); // automatically kills the ScrollTrigger too
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        height: '500vh', // 100vh viewport + 400vh scroll travel
        background: '#000000',
      }}
    >
      {/* Sticky viewport wrapper */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
      <style>{`
        @keyframes pulseAmber {
          0%   { box-shadow: 0 0 0 0px rgba(239,159,39,0.7); }
          100% { box-shadow: 0 0 0 14px rgba(239,159,39,0); }
        }
        @keyframes sparkSpin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .cta-btn {
          position: relative;
          padding: 18px 48px;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #fff;
          background: rgba(239,159,39,0.08);
          border: 1px solid rgba(239,159,39,0.5);
          border-radius: 8px;
          cursor: pointer;
          text-transform: uppercase;
          outline: none;
          transition: background 0.3s ease, transform 0.2s ease;
          animation: pulseAmber 2s ease-out infinite;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          inset: -1.5px;
          border-radius: 9px;
          background: conic-gradient(from var(--angle), transparent 0%, transparent 75%, #EF9F27 87%, transparent 100%);
          animation: sparkSpin 1.6s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover {
          background: rgba(239,159,39,0.14);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Particle canvas — fills the whole section */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* CTA content — scrubbed via GSAP */}
      <div
        ref={ctaRef}
        style={{
          position: 'absolute', // pinned inside wrapper
          bottom: '18%', 
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <button className="cta-btn" onClick={() => window.open('https://alumnest.in', '_blank')}>
          Request Early Access
        </button>

        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.12em',
            fontFamily: 'var(--nav-font, monospace)',
          }}
        >
          alumnest.in &nbsp;|&nbsp; For the Tribe
        </p>
      </div>
      </div>
    </section>
  );
}
