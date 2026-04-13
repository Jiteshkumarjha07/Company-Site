import React from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';

export default function Marquee() {
  const text = "ALUMNI INTELLIGENCE — STRUCTURED NETWORKS — GLOBAL CONNECT — INDIA FIRST — ";
  const repeatedText = text.repeat(20);
  
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = 0.02 * (1 + velocityFactor.get());
    let current = baseX.get() - moveBy;
    if (current <= -50) {
      current = 0;
    }
    baseX.set(current);
  });

  return (
    <section style={{
      position: 'relative',
      width: '100vw',
      height: '80px',
      background: 'var(--bg-primary)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      zIndex: 10,
      transition: 'var(--transition-theme)'
    }}>
      {/* Marquee Track */}
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>
        <motion.div style={{
          display: 'flex',
          x,
          willChange: 'transform'
        }}>
          <span style={{ 
            fontFamily: 'var(--nav-font)', 
            fontSize: '24px', 
            fontWeight: 700, 
            color: 'var(--text-primary)', 
            whiteSpace: 'nowrap', 
            paddingRight: '50px',
            opacity: 0.8
          }}>
            {repeatedText}
          </span>
          <span style={{ 
            fontFamily: 'var(--nav-font)', 
            fontSize: '24px', 
            fontWeight: 700, 
            color: 'var(--text-primary)', 
            whiteSpace: 'nowrap', 
            paddingRight: '50px',
            opacity: 0.8
          }}>
            {repeatedText}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
