import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const team = [
  { name: 'Jitesh Jha',    role: 'CEO & Founder',      initials: 'JJ', image: '/team/jitesh_jha.jpeg' },
  { name: 'Dadan Yadav',   role: 'COO & Co-Founder',   initials: 'DY', image: '/team/dadan_yadav.jpeg' },
  { name: 'Lucky Kumar',   role: 'CMO & Co-Founder',   initials: 'LK', image: '/team/lucky_kumar.jpeg' },
  { name: 'Shourya Pandey',role: 'CFO & Co-Founder',   initials: 'SP', image: '/team/shourya_pandey.jpeg' },
  { name: 'Nishant Raj',   role: 'CTO & Co-Founder',   initials: 'NR', image: '/team/nishant_raj.jpeg' },
  { name: 'Aditya Vinod',  role: 'Product Manager',    initials: 'AV', image: '/team/aditya_vinod.jpeg' },
];

const SCRAMBLE_POOL = ['VISIONARY','ARCHITECT','DIRECTOR','STRATEGIST','OPERATOR','INNOVATOR','PIONEER','CATALYST','NAVIGATOR','BUILDER'];
const REVOLUTION_SPEED_MS = 15000;
const SLANT_ANGLE = -15 * (Math.PI / 180);
const SPHERE_SIZE = 160;
const CARD_W = 200;
const CARD_H = 260;

/* ── Card face shown on hover ── */
function FounderCard({ member, wrapperRef }) {
  const cardRef = useRef(null);
  const [displayRole, setDisplayRole] = useState(member.role);

  /* GSAP magnetic quickTo */
  useEffect(() => {
    const xTo = gsap.quickTo(cardRef.current, 'x', { duration: 0.7, ease: 'power3' });
    const yTo = gsap.quickTo(cardRef.current, 'y', { duration: 0.7, ease: 'power3' });

    const onMove = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 120) {
        xTo((e.clientX - cx) * 0.15);
        yTo((e.clientY - cy) * 0.1);
      } else {
        gsap.to(cardRef.current, { x: 0, y: 0, duration: 1.2, ease: 'elastic.out(1,0.4)' });
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      gsap.to(cardRef.current, { x: 0, y: 0, duration: 1.2, ease: 'elastic.out(1,0.4)' });
    };
  }, [wrapperRef]);

  /* Role scramble on mount */
  useEffect(() => {
    let count = 0;
    const total = 15;
    const iv = setInterval(() => {
      count++;
      setDisplayRole(SCRAMBLE_POOL[Math.floor(Math.random() * SCRAMBLE_POOL.length)]);
      if (count >= total) { clearInterval(iv); setDisplayRole(member.role); }
    }, 40);
    return () => clearInterval(iv);
  }, [member.role]);

  return (
    <div
      ref={cardRef}
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        willChange: 'transform',
      }}
    >
      {/* Conic glow border */}
      <div style={{
        position: 'absolute', inset: '-50%',
        background: 'conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(127,119,221,0.7) 75%, transparent 100%)',
        animation: 'spinConic 2.5s linear infinite',
        zIndex: 0,
      }} />

      {/* Glass cap to clip conic overflow */}
      <div style={{
        position: 'absolute', inset: '1px',
        background: 'rgba(13,15,20,0.92)',
        borderRadius: 15,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        padding: '28px 20px 24px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        {/* Badge */}
        <div style={{
          background: '#EF9F27', color: '#000',
          fontSize: '9px', fontWeight: 700,
          padding: '3px 10px', borderRadius: 20,
          letterSpacing: '0.08em',
          marginBottom: 20,
        }}>
          Founding Team
        </div>

        {/* Avatar */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(127,119,221,0.12)',
          border: '1px solid rgba(127,119,221,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 700, color: '#7F77DD',
          boxShadow: '0 0 24px rgba(127,119,221,0.25)',
          marginBottom: 18,
          flexShrink: 0,
        }}>
          {member.initials}
        </div>

        {/* Name */}
        <h3 style={{
          fontSize: 17, fontWeight: 600, color: '#fff',
          margin: '0 0 6px', textAlign: 'center', lineHeight: 1.2,
        }}>
          {member.name}
        </h3>

        {/* Role */}
        <p style={{
          fontSize: 11, color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.06em', margin: 0,
          textAlign: 'center',
          minHeight: 16,
        }}>
          {displayRole}
        </p>
      </div>
    </div>
  );
}

export default function TeamDraggable() {
  const containerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [angleOffset, setAngleOffset] = useState(0);
  const lastTimeRef = useRef(null);

  /* Orbit loop — pauses while any card is hovered */
  useEffect(() => {
    let requestRef;
    const animate = (time) => {
      if (lastTimeRef.current !== null && hoveredIdx === null) {
        const delta = time - lastTimeRef.current;
        setAngleOffset(prev => (prev + (delta / REVOLUTION_SPEED_MS) * 360) % 360);
      }
      lastTimeRef.current = time;
      requestRef = requestAnimationFrame(animate);
    };
    requestRef = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef);
  }, [hoveredIdx]);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const textScale   = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 1.2]);

  /* One ref per orbital wrapper for magnetic distance calc */
  const wrapperRefs = useRef(team.map(() => React.createRef()));

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative', height: '120vh', width: '100vw',
        background: 'var(--bg-primary)', overflow: 'hidden',
        transition: 'var(--transition-theme)',
        borderBottom: '1px solid var(--border-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <style>{`
        @keyframes spinConic {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Sticky "Our Team" headline */}
      <div style={{
        position: 'sticky', top: 0, height: '100vh', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5,
      }}>
        <motion.h1 style={{
          fontFamily: 'var(--display-font)',
          fontSize: 'clamp(100px, 20vw, 360px)',
          color: 'var(--text-primary)',
          opacity: textOpacity, scale: textScale,
          letterSpacing: '-0.04em', lineHeight: 1,
          fontWeight: 500, fontStyle: 'italic',
          pointerEvents: 'none',
          textShadow: '0 0 30px rgba(255,255,255,0.05)',
        }}>
          Our Team
        </motion.h1>
      </div>

      {/* Orbital ring */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
      }}>
        {team.map((member, i) => {
          const baseAngle  = (angleOffset + i * 60) * (Math.PI / 180);
          const radiusX    = 400;
          const radiusY    = 180;
          const xBase      = Math.cos(baseAngle) * radiusX;
          const yBase      = Math.sin(baseAngle) * radiusY;
          const x          = xBase * Math.cos(SLANT_ANGLE) - yBase * Math.sin(SLANT_ANGLE);
          const y          = xBase * Math.sin(SLANT_ANGLE) + yBase * Math.cos(SLANT_ANGLE);
          const isBehind   = Math.sin(baseAngle) < 0;
          const depthScale = isBehind ? 0.75 : 1;
          const isHovered  = hoveredIdx === i;

          return (
            <motion.div
              key={i}
              ref={wrapperRefs.current[i]}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{
                x, y,
                scale: isHovered ? 1.0 : depthScale, // card is already full-size; don't double-scale
                zIndex: isHovered ? 50 : isBehind ? 1 : 15,
                filter: !isHovered && isBehind ? 'blur(4px) brightness(0.6)' : 'blur(0px) brightness(1)',
                opacity: !isHovered && isBehind ? 0.6 : 1,
              }}
              transition={{
                x: { duration: 0 }, y: { duration: 0 },
                scale: { type: 'spring', stiffness: 120, damping: 18 },
                filter: { duration: 0.4 },
                opacity: { duration: 0.3 },
              }}
              style={{ position: 'absolute', cursor: 'pointer' }}
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  /* ── CARD FACE ── */
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <FounderCard member={member} wrapperRef={wrapperRefs.current[i]} />
                  </motion.div>
                ) : (
                  /* ── SPHERE ── */
                  <motion.div
                    key="sphere"
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="glass-sphere team-card"
                    style={{
                      width: SPHERE_SIZE,
                      height: SPHERE_SIZE,
                    }}
                  >
                    <img src={member.image} alt={member.name} className="team-portrait" />
                    {/* Name tag beneath sphere */}
                    <div style={{
                      position: 'absolute', bottom: -28, left: '50%',
                      transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap',
                      textAlign: 'center',
                    }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--nav-font)', letterSpacing: '0.05em' }}>
                        {member.name}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Section label */}
      <div style={{ position: 'absolute', top: '120px', left: '48px', zIndex: 100 }}>
        <span className="label-text" style={{ color: 'var(--text-dim)' }}>/ 04 — ECOSYSTEM</span>
      </div>

      <div style={{
        position: 'absolute', bottom: '80px', right: '48px', zIndex: 100,
        maxWidth: '300px', textAlign: 'right',
      }}>
        <p className="body-text" style={{ fontSize: '11px', opacity: 0.6, lineHeight: 1.6 }}>
          Building collective excellence through shared gravitational pull. Hover to anchor the system and explore individual focus.
        </p>
      </div>

      <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, right: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
    </section>
  );
}
