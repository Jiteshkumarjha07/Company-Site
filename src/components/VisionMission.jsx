import React from 'react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="dark-mode" style={{ 
      background: 'var(--bg-primary)', 
      color: 'var(--text-primary)',
      transition: 'var(--transition-theme)',
      overflow: 'hidden'
    }}>
      {/* ── Vision Block ── */}
      <div style={{ 
        padding: '160px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div style={{ gridColumn: 'span 4' }}>
          <span className="label-text" style={{ color: 'var(--text-dim)' }}>/ 02 — VISION</span>
        </div>
        <div style={{ gridColumn: 'span 8' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(44px, 7vw, 100px)',
              lineHeight: 0.95,
              fontFamily: 'var(--display-font)',
              fontWeight: 400,
              fontStyle: 'italic',
              maxWidth: '90%'
            }}
          >
            A world where institution identity is the currency of opportunity.
          </motion.h2>
        </div>
      </div>

      {/* ── Mission Block ── */}
      <div style={{ 
        padding: '160px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px'
      }}>
        <div style={{ gridColumn: 'span 4' }}>
          <span className="label-text" style={{ color: 'var(--text-dim)' }}>/ 03 — MISSION</span>
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="body-text" style={{ 
              fontSize: '18px', 
              color: 'var(--text-primary)', 
              lineHeight: 1.6,
              marginBottom: '48px'
            }}>
              To build the world's most trusted, structured alumni ecosystem — starting with India — where shared institutional identity becomes the foundation for lifelong professional opportunity.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="label-text" style={{ fontSize: '9px', marginBottom: '8px', display: 'block' }}>STRATEGY</span>
                <p className="body-text" style={{ fontSize: '11px', opacity: 0.7 }}>Structure creates freedom. We believe in providing the rails for networks to run themselves with intelligence.</p>
              </div>
              <div>
                <span className="label-text" style={{ fontSize: '9px', marginBottom: '8px', display: 'block' }}>SCALE</span>
                <p className="body-text" style={{ fontSize: '11px', opacity: 0.7 }}>Starting with the heart of India's intellectual capital, expanding to a global network of institutional excellence.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modular sidebar (Stats-lite) */}
        <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'right', borderTop: '1px solid var(--border-light)', paddingTop: '24px', width: '100%' }}>
            <span className="display-text" style={{ fontSize: '64px', fontStyle: 'italic' }}>50+</span>
            <span className="label-text" style={{ display: 'block', fontSize: '9px' }}>INSTITUTIONS ENROLLED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
