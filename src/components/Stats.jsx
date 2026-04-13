import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '50+', label: 'INSTITUTIONAL PARTNERS', desc: 'Partnered institutions across India trusting Alumnest.' },
  { value: '900+', label: 'ALUMNI MEMBERS', desc: 'Active members driving collaboration and mentorship.' },
  { value: '24/7', label: 'NETWORK UPTIME', desc: 'Continuous access to global institutional opportunities.' },
  { value: '100%', label: 'DATA PRIVACY', desc: 'Structured ecosystems with sovereign data control.' },
];

export default function Stats() {
  return (
    <section style={{ 
      background: 'var(--bg-primary)', 
      overflow: 'hidden',
      transition: 'var(--transition-theme)' 
    }}>
      <div style={{ padding: '160px 48px' }}>

        {/* Section header row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '24px', 
          marginBottom: '100px' 
        }}>
          <div style={{ gridColumn: 'span 4' }}>
            <span className="label-text" style={{ color: 'var(--text-dim)' }}>/ 05 — METRICS</span>
          </div>
          <div style={{ gridColumn: 'span 8' }}>
            <h2 className="display-text" style={{ fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Engineered for Scale.</h2>
          </div>
        </div>

        {/* Metrics grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--border-light)',
          borderLeft: '1px solid var(--border-light)'
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              style={{ 
                padding: '48px 32px',
                borderRight: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div className="display-text" style={{
                fontSize: '64px',
                lineHeight: 1,
                fontStyle: 'italic',
                fontWeight: 400
              }}>
                {m.value}
              </div>

              <div>
                <p className="label-text" style={{ fontSize: '9px', marginBottom: '8px', color: 'var(--text-primary)' }}>{m.label}</p>
                <p className="body-text" style={{ fontSize: '11px', opacity: 0.6, lineHeight: 1.5 }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-rule" />
    </section>
  );
}
