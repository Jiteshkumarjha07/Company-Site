import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const STATS = [
  {
    label: 'Universities',
    displayNum: '1,000',
    rawValue: 1000,
    suffix: '+',
    color: '#EF9F27',
    desc: 'Institutions across India covered by the Alumnest network.',
    barPct: 30,
  },
  {
    label: 'Colleges',
    displayNum: '42,000',
    rawValue: 42000,
    suffix: '+',
    color: '#7F77DD',
    desc: 'Affiliated colleges poised to connect their alumni digitally.',
    barPct: 60,
  },
  {
    label: 'Alumni Pool',
    displayNum: '500M',
    rawValue: 500,   // We count to 500 (display as "500M")
    suffix: 'M+',
    color: '#1D9E75',
    desc: 'Potential alumni members ready to be unified on one platform.',
    barPct: 85,
  },
  {
    label: 'Market Size',
    displayNum: '$5B',
    rawValue: 5,     // Count to 5 (display as "$5B")
    suffix: 'B+',
    prefix: '$',
    color: '#ffffff',
    desc: 'Total addressable alumni engagement market across India.',
    barPct: 100,
  },
];

/* ── Particle burst canvas ── */
function ParticleBurst({ color, trigger }) {
  const canvasRef = useRef(null);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!trigger || firedRef.current) return;
    firedRef.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const particles = Array.from({ length: 40 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 3;
      return {
        x: W / 2, y: H / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        alpha: 1,
        radius: 2 + Math.random() * 1.5,
        life: 0,
      };
    });

    const gravity = 0.08;
    const lifetime = 72; // ~1.2s at 60fps

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      let alive = false;
      particles.forEach(p => {
        p.life++;
        p.vy += gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.max(0, 1 - p.life / lifetime);
        if (p.alpha > 0) {
          alive = true;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
      if (alive) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, color]);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={140}
      style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  );
}

/* ── Single stat card ── */
function StatCard({ stat, animate }) {
  const numRef = useRef(null);
  const suffixRef = useRef(null);
  const barRef = useRef(null);
  const [burst, setBurst] = useState(false);
  const tweenedRef = useRef(false);

  useEffect(() => {
    if (!animate || tweenedRef.current) return;
    tweenedRef.current = true;

    const obj = { val: 0 };
    const formatter = new Intl.NumberFormat('en-IN');

    // Initialize hidden elements
    if (suffixRef.current) gsap.set(suffixRef.current, { opacity: 0, scale: 0 });
    if (barRef.current) gsap.set(barRef.current, { width: '0%' });

    // Count up
    gsap.to(obj, {
      val: stat.rawValue,
      duration: 2.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (!numRef.current) return;
        const rounded = Math.floor(obj.val);
        const display = stat.rawValue >= 100
          ? formatter.format(rounded)
          : rounded;
        numRef.current.textContent = (stat.prefix || '') + display;
      },
      onComplete: () => {
        // Lock final display text
        numRef.current.textContent = (stat.prefix || '') + stat.displayNum;
        // Suffix pulse
        if (suffixRef.current) {
          gsap.fromTo(suffixRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1.2, opacity: 1, duration: 0.2, ease: 'power2.out',
              onComplete: () => gsap.to(suffixRef.current, { scale: 1, duration: 0.15, ease: 'power2.in' })
            }
          );
        }
        // Particle burst
        setBurst(true);
      }
    });

    // Progress bar
    gsap.fromTo(barRef.current, 
      { width: '0%' },
      { width: `${stat.barPct}%`, duration: 1.8, ease: 'power1.inOut', delay: 0.3 }
    );

  }, [animate, stat]);

  return (
    <div style={{
      position: 'relative',
      background: 'rgba(255,255,255,0.03)',
      border: '0.5px solid rgba(255,255,255,0.1)',
      borderRadius: '20px',
      padding: '48px 40px 40px',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      overflow: 'visible',
    }}>
      <ParticleBurst color={stat.color} trigger={burst} />

      {/* Coloured accent dot */}
      <div style={{
        width: 10, height: 10, borderRadius: '50%',
        background: stat.color,
        boxShadow: `0 0 12px ${stat.color}88`,
      }} />

      {/* Number */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', whiteSpace: 'nowrap' }}>
        <span
          ref={numRef}
          className="stat-num"
          style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', // Scaled down to prevent overflow
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {stat.prefix || ''}0
        </span>
        <span
          ref={suffixRef}
          style={{
            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
            fontWeight: 700,
            color: stat.color,
            lineHeight: 1.2,
            display: 'inline-block',
          }}
          className="stat-suffix"
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p style={{
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: stat.color,
        fontWeight: 600,
        margin: 0,
      }}>
        {stat.label}
      </p>

      {/* Description */}
      <p style={{
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.6,
        margin: 0,
        flexGrow: 1,
      }}>
        {stat.desc}
      </p>

      {/* Progress bar */}
      <div style={{
        height: '3px',
        background: 'rgba(255,255,255,0.08)',
        borderRadius: '99px',
        overflow: 'hidden',
        marginTop: '8px',
      }}>
        <div
          ref={barRef}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${stat.color}88, ${stat.color})`,
            borderRadius: '99px',
            boxShadow: `0 0 8px ${stat.color}66`,
          }}
          className="stat-bar"
        />
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Stats() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#000000',
        padding: '120px 48px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '80px' }}>
          <span style={{
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.4)',
          }}>
            / 05 — METRICS
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#fff',
            marginTop: '16px',
            letterSpacing: '-0.02em',
          }}>
            Engineered for Scale.
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '480px',
            lineHeight: 1.6,
            marginTop: '12px',
          }}>
            The numbers that define the Alumnest opportunity in India's higher education landscape.
          </p>
        </div>

        {/* 2×2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
