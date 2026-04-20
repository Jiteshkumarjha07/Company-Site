import React, { useRef, useEffect, useCallback } from 'react';

const FEATURES = [
  {
    id: 'profile',
    label: 'Alumni Profile',
    number: '01',
    color: '#7F5AF0',
    icon: '◈',
    desc: 'A rich, dynamic central node for every member of the tribe. Your identity, network, and legacy — unified.'
  },
  {
    id: 'dashboard',
    label: 'Institutional Platform',
    number: '02',
    color: '#3DA9FC',
    icon: '⬡',
    desc: 'Powerful analytics and CRM capabilities at institutional scale. Visibility across every chapter and cohort.'
  },
  {
    id: 'mentorship',
    label: 'Mentorship Engine',
    number: '03',
    color: '#2CB67D',
    icon: '⟳',
    desc: 'Algorithmically match paths to foster generational guidance. Experience flows both ways in this tribe.'
  },
  {
    id: 'marketplace',
    label: 'Opportunity Marketplace',
    number: '04',
    color: '#FFCB47',
    icon: '◎',
    desc: 'Direct access to jobs, gigs, and exclusively listed ventures sourced from within the alumni ecosystem.'
  },
  {
    id: 'events',
    label: 'Events & Reunions',
    number: '05',
    color: '#FF6B6B',
    icon: '◉',
    desc: 'Seamless mapping for local chapters and massive gatherings. Every reunion is a moment of gravity.'
  },
  {
    id: 'lobby',
    label: 'Central Lobby',
    number: '06',
    color: '#E53170',
    icon: '⬟',
    desc: 'The immersive, dynamic core where the tribe converges. Built for presence, built for belonging.'
  },
];

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');

  .fg-section {
    background: #080808;
    padding: 120px 24px 160px;
    font-family: 'Space Grotesk', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .fg-header {
    text-align: center;
    margin-bottom: 100px;
  }

  .fg-header h2 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.03em;
    margin: 0 0 1rem;
    line-height: 1;
  }

  .fg-header p {
    font-size: 1rem;
    color: rgba(255,255,255,0.35);
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .fg-grid {
    display: grid;
    grid-template-columns: repeat(3, 280px);
    gap: 24px;
    justify-content: center;
    max-width: 960px;
    margin: 0 auto;
    perspective: 1200px;
  }

  @media (max-width: 960px) {
    .fg-grid { grid-template-columns: repeat(2, 280px); }
  }
  @media (max-width: 620px) {
    .fg-grid { grid-template-columns: 280px; }
  }

  /* ─── Card shell ─── */
  .fg-card {
    width: 280px;
    height: 360px;
    position: relative;
    cursor: pointer;
    /* transition applies when mouse leaves (to return to 0) and entrance */
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 700ms ease-out;
    will-change: transform, opacity;
  }
  
  .fg-card.hovered {
    /* remove transition during hover so tilt tracks mouse instantly and smoothly */
    transition: transform 0ms;
    z-index: 10;
  }

  .fg-card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 16px;
  }

  .fg-card.hovered .fg-card-inner {
    transform: rotateY(180deg);
  }

  /* ─── Card faces ─── */
  .fg-card-face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 32px;
    border: 1px solid rgba(255,255,255,0.07);
    transition: border-color 300ms ease;
  }

  /* FRONT */
  .fg-card-front {
    background: #111111;
    justify-content: space-between;
    align-items: flex-start;
  }

  .fg-card-front .card-number {
    font-size: 4.5rem;
    font-weight: 700;
    color: rgba(255,255,255,0.08);
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .fg-card-front .card-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }

  .fg-card-front .card-hint {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.25);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 300;
  }

  /* BACK */
  .fg-card-back {
    background: #0f0f0f;
    transform: rotateY(180deg);
    justify-content: space-between;
  }

  .fg-card-back .card-icon {
    font-size: 2rem;
    line-height: 1;
  }

  .fg-card-back .card-desc {
    font-size: 0.95rem;
    font-weight: 300;
    color: rgba(255,255,255,0.75);
    line-height: 1.65;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin: 24px 0;
  }

  .fg-card-back .card-back-label {
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    opacity: 0.5;
  }

  /* ─── Color burst overlay (back only) ─── */
  .fg-card-burst {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  .fg-card.hovered .fg-card-burst {
    opacity: 1;
  }

  /* ─── Sibling desaturation ─── */
  .fg-grid.has-hover .fg-card:not(.hovered) {
    opacity: 0.35;
    filter: grayscale(100%);
  }

  /* ─── Scroll entrance ─── */
  .fg-card.entry-hidden {
    opacity: 0;
    transform: translateY(60px);
  }

  .fg-card.entry-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function FlipCard({ feature, index, gridRef }) {
  const cardRef   = useRef(null);
  const burstRef  = useRef(null);
  const rafId     = useRef(null);

  // ── Scroll Entry via IntersectionObserver ─────────────────────────
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.classList.add('entry-hidden');

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = index * 80;
          setTimeout(() => {
            card.classList.remove('entry-hidden');
            card.classList.add('entry-visible');
          }, delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(card);
    return () => io.disconnect();
  }, [index]);

  // ── Burst radial gradient + Smooth 3D Tilt ──────────────────────────
  const handleMouseMove = useCallback((e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect   = cardRef.current.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      
      // Update burst
      const pct    = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
      if (burstRef.current) {
        burstRef.current.style.background =
          `radial-gradient(circle at ${pct}, ${feature.color}55 0%, ${feature.color}22 45%, transparent 70%)`;
      }

      // Smooth Tilt
      const cx  = rect.width  / 2;
      const cy  = rect.height / 2;
      const tiltX = ((y - cy) / cy) * -10; // slightly more pronounced tilt
      const tiltY = ((x - cx) / cx) * 10;

      cardRef.current.style.transform = `translateY(0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
  }, [feature.color]);

  const handleMouseEnter = useCallback(() => {
    const grid = gridRef.current;
    if (grid) grid.classList.add('has-hover');
    cardRef.current.classList.add('hovered');

    const back = cardRef.current.querySelector('.fg-card-back');
    if (back) back.style.borderColor = feature.color + '55';
    
    // Slight entry scale-up handled directly in JS transform is avoided
    // as it can conflict. The rotateX/Y is enough.
  }, [feature.color, gridRef]);

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const grid = gridRef.current;
    if (grid) grid.classList.remove('has-hover');
    
    if (cardRef.current) {
      cardRef.current.classList.remove('hovered');
      // Reset tilt smoothly (transition re-engages because .hovered is removed)
      cardRef.current.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
      
      const back = cardRef.current.querySelector('.fg-card-back');
      if (back) back.style.borderColor = '';
    }

    if (burstRef.current) burstRef.current.style.background = 'transparent';
  }, [gridRef]);

  return (
    <div
      ref={cardRef}
      className="fg-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fg-card-inner">
        {/* FRONT */}
        <div className="fg-card-face fg-card-front">
          <div className="card-number" style={{ color: feature.color, opacity: 0.6 }}>
            {feature.number}
          </div>
          <div>
            <div className="card-label">{feature.label}</div>
            <div className="card-hint" style={{ marginTop: '10px' }}>Hover to explore</div>
          </div>
        </div>

        {/* BACK */}
        <div className="fg-card-face fg-card-back">
          {/* Color burst overlay inside back face so it's masked cleanly */}
          <div ref={burstRef} className="fg-card-burst" />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="card-icon" style={{ color: feature.color }}>{feature.icon}</div>
          </div>
          <div className="card-desc" style={{ position: 'relative', zIndex: 2 }}>
            {feature.desc}
          </div>
          <div className="card-back-label" style={{ color: feature.color, position: 'relative', zIndex: 2 }}>
            {feature.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  const gridRef = useRef(null);

  return (
    <section className="fg-section">
      <style>{STYLES}</style>

      <div className="fg-header">
        <h2>Core Modules</h2>
        <p>The architecture of a modern alumni tribe</p>
      </div>

      <div ref={gridRef} className="fg-grid">
        {FEATURES.map((feature, i) => (
          <FlipCard
            key={feature.id}
            feature={feature}
            index={i}
            gridRef={gridRef}
          />
        ))}
      </div>
    </section>
  );
}
