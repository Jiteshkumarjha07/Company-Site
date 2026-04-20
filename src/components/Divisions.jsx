import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const divisions = [
  {
    num: '01',
    name: 'Platform',
    tagline: 'The alumni intelligence infrastructure that institutions trust.',
    href: '#platform',
  },
  {
    num: '02',
    name: 'Network',
    tagline: 'Peer connections that transcend institutional boundaries.',
    href: '#network',
  },
  {
    num: '03',
    name: 'Ecosystem',
    tagline: 'Structured environments built for sustained, collective impact.',
    href: '#ecosystem',
  },
  {
    num: '04',
    name: 'Intelligence',
    tagline: 'Data-powered insights that transform how alumni engage.',
    href: '#intelligence',
  },
];

export default function Divisions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <section
      id="divisions"
      style={{
        background: 'var(--bg-primary)',
        transition: 'var(--transition-theme)',
        padding: '140px 56px',
      }}
    >
      {/* Section header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        marginBottom: '80px',
      }}>
        <div style={{ gridColumn: 'span 4' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="label-text"
            style={{ color: 'var(--text-dim)' }}
          >
            / 02 — What We Do
          </motion.span>
        </div>
        <div style={{ gridColumn: 'span 8' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--display-font)',
              fontSize: 'clamp(38px, 5.5vw, 76px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1,
              maxWidth: '640px',
            }}
          >
            We provide interconnected services through our four divisions.
          </motion.h2>
        </div>
      </div>

      {/* Division rows */}
      <div ref={ref}>
        {divisions.map((div, i) => (
          <DivisionRow key={div.num} div={div} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function DivisionRow({ div, index, inView }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.a
      href={div.href}
      className="division-row"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <span className="label-text" style={{
        fontSize: '10px',
        color: 'var(--text-dim)',
        transition: 'color 0.3s ease',
      }}>
        {div.num}
      </span>

      {/* Name */}
      <h3 style={{
        fontFamily: 'var(--display-font)',
        fontSize: 'clamp(36px, 5vw, 72px)',
        fontWeight: 400,
        fontStyle: 'italic',
        lineHeight: 1,
        transition: 'letter-spacing 0.5s ease',
        letterSpacing: hovered ? '-0.01em' : '-0.02em',
      }}>
        {div.name}
      </h3>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--body-font)',
        fontSize: '14px',
        color: 'var(--text-muted)',
        lineHeight: 1.6,
        maxWidth: '220px',
        opacity: hovered ? 1 : 0.6,
        transition: 'opacity 0.4s ease',
      }}>
        {div.tagline}
      </p>

      {/* Arrow */}
      <div style={{
        width: '36px',
        height: '36px',
        border: '1px solid var(--border-light)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: hovered ? 'var(--text-primary)' : 'transparent',
        color: hovered ? 'var(--bg-primary)' : 'var(--text-primary)',
        transition: 'all 0.4s ease',
        flexShrink: 0,
      }}>
        <ArrowUpRight size={14} />
      </div>
    </motion.a>
  );
}
