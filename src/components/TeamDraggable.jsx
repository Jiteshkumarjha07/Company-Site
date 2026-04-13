import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const team = [
  { name: 'Jitesh Jha', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop' },
  { name: 'Dadan Yadav', role: 'COO & Co-Founder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop' },
  { name: 'Lucky Kumar', role: 'CDO & Co-Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop' },
  { name: 'Shourya Pandey', role: 'CFO & Co-Founder', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300&auto=format&fit=crop' },
  { name: 'Nishant Raj', role: 'CTO & Co-Founder', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&h=300&auto=format&fit=crop' },
  { name: 'Aditya Vinod', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=300&auto=format&fit=crop' },
];

const REVOLUTION_SPEED_MS = 15000;
const SPHERE_SIZE = 160;
const SLANT_ANGLE = -15 * (Math.PI / 180); // Radian for slant

export default function TeamDraggable() {
  const containerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [angleOffset, setAngleOffset] = useState(0);
  const lastTimeRef = useRef(null);

  // Animation Loop for Global Rotation
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1, 1.2]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        position: 'relative',
        height: '160vh',
        width: '100vw',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
        transition: 'var(--transition-theme)',
        borderBottom: '1px solid var(--border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Central Anchor Text (Sun) */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5
      }}>
        <motion.h1
          style={{
            fontFamily: 'var(--display-font)',
            fontSize: 'clamp(100px, 20vw, 360px)',
            color: 'var(--text-primary)',
            opacity: textOpacity,
            scale: textScale,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            fontWeight: 500,
            fontStyle: 'italic',
            pointerEvents: 'none',
            textShadow: '0 0 30px rgba(255,255,255,0.05)'
          }}
        >
          Our Team
        </motion.h1>
      </div>

      {/* Expansive Orbital Ring */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        zIndex: 10
      }}>
        {team.map((member, i) => {
          // Calculation for expansive slanted ellipse
          const baseAngle = (angleOffset + (i * 60)) * (Math.PI / 180);
          const radiusX = 400; // Expansive laptop-view width
          const radiusY = 180; // Ellipse height

          // Base Coordinates
          const xBase = Math.cos(baseAngle) * radiusX;
          const yBase = Math.sin(baseAngle) * radiusY;

          // Rotate by SLANT_ANGLE (Applying slant)
          const x = xBase * Math.cos(SLANT_ANGLE) - yBase * Math.sin(SLANT_ANGLE);
          const y = xBase * Math.sin(SLANT_ANGLE) + yBase * Math.cos(SLANT_ANGLE);

          // Z-index and depth calculation
          const isBehind = Math.sin(baseAngle) < 0;
          const depthScale = isBehind ? 0.75 : 1;
          const depthBlur = isBehind ? 'blur(4px)' : 'blur(0px)';
          const depthBrightness = isBehind ? 0.6 : 1;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{ 
                x, 
                y, 
                scale: (hoveredIdx === i ? 1.3 : 1) * depthScale,
                zIndex: isBehind ? 1 : 15,
                filter: `${depthBlur} brightness(${depthBrightness})`,
                opacity: isBehind ? 0.6 : 1
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 20,
                x: { duration: 0 },
                y: { duration: 0 },
                filter: { duration: 0.4 }
              }}
              className="glass-sphere"
              style={{
                position: 'absolute',
                width: SPHERE_SIZE,
                height: SPHERE_SIZE,
                cursor: 'pointer'
              }}
            >
              <img src={member.image} alt={member.name} className="team-portrait" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '24px',
                  color: '#fff',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span style={{ fontFamily: 'var(--display-font)', fontSize: '20px', fontStyle: 'italic' }}>{member.name}</span>
                <span style={{ fontFamily: 'var(--nav-font)', fontSize: '9px', letterSpacing: '0.1em', marginTop: '6px', opacity: 0.8 }}>{member.role}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative Index Label */}
      <div style={{ position: 'absolute', top: '120px', left: '48px', zIndex: 100 }}>
        <span className="label-text" style={{ color: 'var(--text-dim)' }}>/ 04 — ECOSYSTEM</span>
      </div>

      <div style={{ 
        position: 'absolute', 
        bottom: '80px', 
        right: '48px', 
        zIndex: 100,
        maxWidth: '300px',
        textAlign: 'right'
      }}>
        <p className="body-text" style={{ fontSize: '11px', opacity: 0.6, lineHeight: 1.6 }}>
          Building collective excellence through shared gravitational pull. Hover to anchor the system and explore individual focus.
        </p>
      </div>

      {/* Grid Lines Overlay */}
      <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, right: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
    </section>
  );
}
