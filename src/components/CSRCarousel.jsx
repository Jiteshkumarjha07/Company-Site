import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    num: '01',
    heading: 'Education Access',
    body: 'We fund scholarships and mentorship programs that connect accomplished alumni with deserving students — creating ladders of opportunity that span institutions and industries.',
    accent: 'Supporting futures, one student at a time.',
  },
  {
    num: '02',
    heading: 'Campus Connect',
    body: 'Bridging the gap between those who have graduated and those still finding their footing. Our structured campus programs ensure every student has access to real-world guidance through alumni networks.',
    accent: 'Because the best mentor is someone who walked the same halls.',
  },
  {
    num: '03',
    heading: 'Digital Inclusion',
    body: 'Alumni intelligence should not be a privilege. Alumnest actively works to make its platform accessible across economic and geographic divides — prioritising communities that are underserved by existing networks.',
    accent: 'Open networks for all, not just the few.',
  },
];

export default function CSRCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section
      id="csr"
      ref={ref}
      style={{
        background: '#0a0a0a',
        padding: '140px 56px',
        overflow: 'hidden',
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
            style={{ color: 'rgba(253,252,249,0.3)' }}
          >
            / 06 — Corporate Social Responsibility
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
              color: '#fdfcf9',
              maxWidth: '600px',
            }}
          >
            Our pledge to the communities we serve.
          </motion.h2>
        </div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        {/* Slide */}
        <div style={{
          borderTop: '1px solid rgba(253,252,249,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '24px',
                padding: '64px 0',
              }}
            >
              {/* Overline number */}
              <div style={{ gridColumn: 'span 1' }}>
                <span className="label-text" style={{ color: 'rgba(253,252,249,0.25)' }}>
                  {slides[current].num}
                </span>
              </div>

              {/* Content */}
              <div style={{ gridColumn: 'span 6' }}>
                <h3 style={{
                  fontFamily: 'var(--display-font)',
                  fontSize: 'clamp(48px, 7vw, 112px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 0.9,
                  color: '#fdfcf9',
                  marginBottom: '40px',
                }}>
                  {slides[current].heading}
                </h3>
                <p style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'rgba(253,252,249,0.55)',
                  maxWidth: '480px',
                }}>
                  {slides[current].body}
                </p>
              </div>

              {/* Accent pull quote */}
              <div style={{
                gridColumn: '9 / span 4',
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '8px',
              }}>
                <p style={{
                  fontFamily: 'var(--display-font)',
                  fontSize: '22px',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.35,
                  color: 'rgba(253,252,249,0.25)',
                  borderLeft: '1px solid rgba(253,252,249,0.1)',
                  paddingLeft: '28px',
                }}>
                  "{slides[current].accent}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div style={{ height: '1px', background: 'rgba(253,252,249,0.08)' }} />
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '36px',
        }}>
          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`carousel-dot${i === current ? ' active' : ''}`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={prev}
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(253,252,249,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(253,252,249,0.6)',
                cursor: 'pointer',
                background: 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(253,252,249,0.08)'; e.currentTarget.style.color = '#fdfcf9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(253,252,249,0.6)'; }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(253,252,249,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(253,252,249,0.6)',
                cursor: 'pointer',
                background: 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(253,252,249,0.08)'; e.currentTarget.style.color = '#fdfcf9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(253,252,249,0.6)'; }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
