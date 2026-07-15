import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLATFORMS = [
  { name: 'Community Identity',  color: '#7F77DD' },
  { name: 'No Fakes',            color: '#EF9F27' },
  { name: 'Shared Marketplace',  color: '#25D366' },
  { name: 'Authentic Connections', color: '#1DA1F2' },
  { name: 'Curated Inclusivity', color: '#E4405F' },
];

const PARTICLES_PER_CLUSTER = 140;

export default function UnificationHero() {
  const containerRef  = useRef(null);
  const canvasRef     = useRef(null);
  const logoRefs      = useRef([]);
  const centerLogoRef = useRef(null);
  const progressRef   = useRef(0);
  const particlesRef  = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!canvas || !container) return;

    /* ─── Canvas sizing ─── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const ctx = canvas.getContext('2d');

    /* ─── Pre-render Star Sprites ─── */
    const hexToRGB = (hex) => {
      const cleanHex = hex.replace('#', '');
      return {
        r: parseInt(cleanHex.substring(0, 2), 16),
        g: parseInt(cleanHex.substring(2, 4), 16),
        b: parseInt(cleanHex.substring(4, 6), 16),
      };
    };

    const createStarGlow = (r, g, b) => {
      const glowW = 24, glowH = 24; 
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
    
    const clusterSprites = PLATFORMS.map(plat => {
      const { r, g, b } = hexToRGB(plat.color);
      return createStarGlow(r, g, b);
    });
    const targetSprite = createStarGlow(127, 119, 221); // Unification purple

    /* ─── Build particles once ─── */
    const buildParticles = () => {
      const W = canvas.width;
      const H = canvas.height;
      const CX = W / 2;
      const CY = H / 2;
      const RX = W * 0.28;   
      const RY = H * 0.28;   
      const particles = [];

      PLATFORMS.forEach((platform, ci) => {
        const angle    = (ci / PLATFORMS.length) * Math.PI * 2 - Math.PI / 2;
        const clusterX = CX + Math.cos(angle) * RX;
        const clusterY = CY + Math.sin(angle) * RY;

        for (let j = 0; j < PARTICLES_PER_CLUSTER; j++) {
          const z = Math.random(); // 0 (far) to 1 (close)
          particles.push({
            clusterX, clusterY,
            orbitR:     Math.random() * 110 + 30,  
            orbitAngle: Math.random() * Math.PI * 2,
            orbitSpeed: (Math.random() * 0.018 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            size:       (Math.random() * 1.5 + 1) * (1 + z * 2), // scaling size with Z
            z:          z,
            spriteIdx:  ci,
            twinkleSpeed: Math.random() * 3 + 1.0, 
            hoverOffset: Math.random() * Math.PI * 2,
          });
        }
      });
      return { particles, CX, CY };
    };

    let { particles, CX, CY } = buildParticles();
    particlesRef.current = particles;

    /* ─── Render loop (always runs) ─── */
    let rafId;
    const draw = () => {
      const p   = progressRef.current;
      const W   = canvas.width;
      const H   = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // Standard drawing logic for clearing
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);

      // Additive blending for starry glow
      ctx.globalCompositeOperation = 'screen';

      const time = Date.now() * 0.001;

      particles.forEach((pt) => {
        pt.orbitAngle += pt.orbitSpeed;

        const orbitScale = 1 - p * 0.85;
        const ox = Math.cos(pt.orbitAngle) * pt.orbitR * orbitScale;
        const oy = Math.sin(pt.orbitAngle) * pt.orbitR * orbitScale * 0.6;

        // Position: lerp cluster → center
        const x = pt.clusterX * (1 - p) + CX * p + ox;
        const y = pt.clusterY * (1 - p) + CY * p + oy;

        // Twinkle and Opacity Math
        const twinkle = Math.sin(time * pt.twinkleSpeed + pt.hoverOffset);
        const activeTwinkle = 0.5 + 0.5 * Math.pow(twinkle, 3);
        const baseAlpha = 0.3 + (pt.z * 0.4); 
        
        // Final opacity fades slightly as it merges, but stays bright
        const currentAlpha = baseAlpha * activeTwinkle;
        const drawSize = pt.size * 6; // scaling to match sprite bounds

        // Crossfade from cluster color to purple target color based on scroll progress
        if (p < 1) {
          ctx.globalAlpha = Math.max(0, currentAlpha * (1 - p));
          ctx.drawImage(clusterSprites[pt.spriteIdx], x - drawSize / 2, y - drawSize / 2, drawSize, drawSize);
        }
        if (p > 0) {
          ctx.globalAlpha = Math.max(0, currentAlpha * p);
          ctx.drawImage(targetSprite, x - drawSize / 2, y - drawSize / 2, drawSize, drawSize);
        }
      });

      rafId = requestAnimationFrame(draw);
    };
    draw();

    /* ─── ScrollTrigger: scrub controls progress ─── */
    // No pin: true here — CSS sticky on the inner div handles visual locking.
    // GSAP pin would add a spacer element creating blank space.
    const st = ScrollTrigger.create({
      trigger: container,
      start:   'top top',
      end:     'bottom bottom',
      scrub:   1.2,
      onUpdate: (self) => {
        progressRef.current = self.progress;

        const p = self.progress;

        const RX = window.innerWidth * 0.28;
        const RY = window.innerHeight * 0.28;

        // Platform text: move to center, shrink, and fade out
        logoRefs.current.forEach((el, i) => {
          if (!el) return;
          
          const angle = (i / PLATFORMS.length) * Math.PI * 2 - Math.PI / 2;
          
          // Use vw/vh for flawless responsiveness instantly
          const currentOffsetX = Math.cos(angle) * 28 * (1 - p);
          const currentOffsetY = Math.sin(angle) * 28 * (1 - p);
          
          const scale = Math.max(0, 1 - p * 1.5); // shrinking perfectly synchronously
          const opacity = Math.max(0, 1 - p * 1.5); // fade mirrors shrink perfectly
          
          el.style.opacity = opacity;
          el.style.transform = `translate(calc(-50% + ${currentOffsetX}vw), calc(-50% + ${currentOffsetY}vh)) scale(${scale})`;
        });

        // Brand logo: fade in from 60% to 100%, stays at 1
        if (centerLogoRef.current) {
          const rev = Math.max(0, Math.min(1, (p - 0.6) / 0.4));
          centerLogoRef.current.style.opacity   = rev;
          centerLogoRef.current.style.transform = `scale(${0.85 + rev * 0.15})`;
        }
      },
    });

    /* ─── Resize ─── */
    const onResize = () => {
      resize();
      const rebuilt = buildParticles();
      particles = rebuilt.particles;
      CX = rebuilt.CX;
      CY = rebuilt.CY;
      particlesRef.current = particles;
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
      st.kill();
    };
  }, []);

  const getLogoStyle = (ci) => {
    const angle = (ci / PLATFORMS.length) * 360 - 90;
    const rad   = angle * (Math.PI / 180);
    const offsetX = Math.cos(rad) * 28; // 28vw offset
    const offsetY = Math.sin(rad) * 28; // 28vh offset

    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      // Native viewport units eliminate initialization glitches
      transform: `translate(calc(-50% + ${offsetX}vw), calc(-50% + ${offsetY}vh)) scale(1)`,
      pointerEvents: 'none',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
  };

  return (
    <section
      ref={containerRef}
      style={{
        /* 200vh = 100vh visible + 100vh of scroll travel.
           The pin keeps the viewport locked while your scroll
           moves through that extra 100vh, driving the animation.
           When you've scrolled 100vh past the top, pin releases
           and Our Team scrolls in immediately — no dead space. */
        height: '200vh',
        position: 'relative',
        background: '#000',
      }}
    >
      {/* Sticky viewport wrapper */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>

        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', top: 0, left: 0, display: 'block' }}
        />

        {/* Platform keywords replacing circles */}
        {PLATFORMS.map((platform, i) => (
          <div key={platform.name} ref={(el) => (logoRefs.current[i] = el)} style={getLogoStyle(i)}>
            <span style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', 
              fontWeight: 400,
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}>
              {platform.name}
            </span>
          </div>
        ))}

        {/* Brand logo — reveals at end */}
        <div
          ref={centerLogoRef}
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none', zIndex: 20, opacity: 0,
          }}
        >
          <img
            src="/alumnest-logo-new.jpg"
            alt="Alumnest"
            style={{ width: 'clamp(220px, 38vw, 500px)', height: 'auto', objectFit: 'contain' }}
          />
          <p style={{
            marginTop: '1.5rem',
            fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}>
            All channels. One tribe.
          </p>
        </div>
      </div>
    </section>
  );
}
