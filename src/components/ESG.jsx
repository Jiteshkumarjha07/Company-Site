import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const tabs = [
  {
    id: 'environment',
    label: 'Environment',
    items: [
      'Clean Energy Transition',
      'Reduced Resource Consumption',
      'Climate Impact Action',
      'Carbon Footprint Reduction',
      'Sustainable Infrastructure Planning',
    ],
    description:
      'Alumnest is committed to embedding environmental responsibility at every layer of our operations — from the data centres that power our platform to the physical spaces where communities gather.',
  },
  {
    id: 'social',
    label: 'Social',
    items: [
      'Equal Opportunity Access',
      'Diversified Alumni Representation',
      'Student Well-being Programs',
      'Community Empowerment Initiatives',
      'Human Rights & Labour Standards',
    ],
    description:
      'Our communities are only as strong as the people within them. We actively work to ensure that alumni networks remain inclusive, equitable, and open to those regardless of background.',
  },
  {
    id: 'governance',
    label: 'Governance',
    items: [
      'Transparent Data Practices',
      'Ethics & Compliance Framework',
      'Alumni Dispute Resolution Standards',
      'Risk Management Protocols',
      'Corporate Governance Charter',
    ],
    description:
      'Good governance is the backbone of lasting trust. Alumnest holds itself to strict standards of transparency, accountability, and ethical conduct across every institutional partnership.',
  },
];

export default function ESG() {
  const [active, setActive] = useState('environment');
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <section
      id="esg"
      ref={ref}
      style={{
        background: 'var(--bg-primary)',
        transition: 'var(--transition-theme)',
        padding: '140px 56px',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        marginBottom: '72px',
      }}>
        <div style={{ gridColumn: 'span 4' }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="label-text"
            style={{ color: 'var(--text-dim)' }}
          >
            / 05 — Sustainability & ESG
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
              maxWidth: '600px',
            }}
          >
            Purpose-driven operations with lasting accountability.
          </motion.h2>
        </div>
      </div>

      {/* Tab buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ display: 'flex', gap: '0', marginBottom: '64px' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`tab-btn${active === tab.id ? ' active' : ''}`}
            style={{ marginRight: '-1px' }}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
          }}
        >
          {/* Description */}
          <div style={{ gridColumn: 'span 5' }}>
            <p style={{
              fontFamily: 'var(--body-font)',
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              marginBottom: '48px',
            }}>
              {activeTab.description}
            </p>
            <a href="#contact" className="btn-flat">
              Our commitments →
            </a>
          </div>

          {/* Items list */}
          <div style={{ gridColumn: '7 / span 6' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {activeTab.items.map((item, i) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '24px',
                    padding: '20px 0',
                    borderBottom: '1px solid var(--border-faint)',
                  }}
                >
                  <span className="label-text" style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: 'var(--body-font)',
                    fontSize: '15px',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
