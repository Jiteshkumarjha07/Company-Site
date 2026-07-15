import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Ecosystem — modelled on the Penguin Capital "Business" section:
 * a featured first entry (big number + title + description + "More Details"),
 * followed by a row of numbered, whole-tile-clickable cards, each with a
 * figure, title and number, and hover states.
 *
 * Content reuses the former FeatureGrid "Core Modules".
 */
const MODULES = [
  {
    number: '01',
    title: 'Alumni Profile',
    glyph: '◈',
    color: '#7F5AF0',
    desc: 'A rich, dynamic central node for every member of the tribe. Your identity, network and legacy — unified in one living record that keeps itself up to date.',
  },
  {
    number: '02',
    title: 'Institutional Platform',
    glyph: '⬡',
    color: '#3DA9FC',
    desc: 'Analytics and CRM at institutional scale — visibility across every chapter and cohort.',
  },
  {
    number: '03',
    title: 'Mentorship Engine',
    glyph: '⟳',
    color: '#2CB67D',
    desc: 'Algorithmic matching that fosters generational guidance. Experience flows both ways.',
  },
  {
    number: '04',
    title: 'Opportunity Marketplace',
    glyph: '◎',
    color: '#FFCB47',
    desc: 'Jobs, gigs and ventures sourced from within the alumni ecosystem — with warm referrals.',
  },
  {
    number: '05',
    title: 'Events & Reunions',
    glyph: '◉',
    color: '#FF6B6B',
    desc: 'Seamless mapping for local chapters and massive gatherings alike.',
  },
  {
    number: '06',
    title: 'Central Lobby',
    glyph: '⬟',
    color: '#E53170',
    desc: 'The immersive core where the tribe converges — built for presence and belonging.',
  },
];

const marker = {
  fontFamily: 'var(--nav-font)',
  fontSize: '10px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
};

const moreLink = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--nav-font)',
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.6)',
};

/* Stylised figure standing in for Penguin's business_fig PNGs */
function Figure({ mod, big }) {
  return (
    <div
      className="eco-figure"
      style={{
        position: 'relative',
        width: '100%',
        height: big ? '100%' : '150px',
        minHeight: big ? '320px' : '150px',
        borderRadius: '14px',
        overflow: 'hidden',
        background: `radial-gradient(120% 120% at 70% 20%, ${mod.color}33 0%, rgba(255,255,255,0.02) 55%, rgba(0,0,0,0) 100%)`,
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* faint grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: big ? '48px 48px' : '32px 32px',
          maskImage: 'radial-gradient(circle at center, #000 30%, transparent 80%)',
        }}
      />
      <span
        className="eco-glyph"
        style={{
          fontSize: big ? 'clamp(90px, 12vw, 180px)' : '56px',
          color: mod.color,
          lineHeight: 1,
          textShadow: `0 0 40px ${mod.color}66`,
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {mod.glyph}
      </span>
    </div>
  );
}

export default function Ecosystem() {
  const [featured, ...rest] = MODULES;

  return (
    <div style={{ background: '#070707', color: '#fff', padding: '140px 6vw 160px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* ── Section header ── */}
        <span style={marker}>( 05 ) — Ecosystem</span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--display-font)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(40px, 6vw, 88px)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: '24px 0 0',
            maxWidth: '14ch',
          }}
        >
          One tribe. Every room.
        </motion.h2>

        {/* ── Featured entry (mirrors Penguin's expanded first card) ── */}
        <motion.a
          href="#"
          onClick={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eco-featured"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginTop: '72px',
            paddingBottom: '80px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--display-font)',
                fontStyle: 'italic',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: featured.color,
                lineHeight: 1,
              }}
            >
              {featured.number}
            </span>
            <h3
              style={{
                fontFamily: 'var(--display-font)',
                fontWeight: 500,
                fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
                letterSpacing: '-0.01em',
                margin: '20px 0 20px',
              }}
            >
              {featured.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.95rem',
                fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '46ch',
              }}
            >
              {featured.desc}
            </p>
            <span className="eco-more" style={{ ...moreLink, marginTop: '32px' }}>
              More details <ArrowUpRight size={13} />
            </span>
          </div>
          <Figure mod={featured} big />
        </motion.a>

        {/* ── Tile row (whole card clickable) ── */}
        <div
          style={{
            marginTop: '72px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {rest.map((mod, i) => (
            <motion.a
              key={mod.number}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="eco-tile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textDecoration: 'none',
                color: '#fff',
                padding: '8px',
                borderRadius: '16px',
                transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <Figure mod={mod} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--display-font)',
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                    color: mod.color,
                    lineHeight: 1,
                  }}
                >
                  {mod.number}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--display-font)',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {mod.title}
                </h4>
              </div>
              <p
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {mod.desc}
              </p>
              <span className="eco-more" style={moreLink}>
                More details <ArrowUpRight size={13} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* interaction styles */}
      <style>{`
        .eco-featured:hover .eco-glyph { transform: scale(1.06) rotate(-3deg); }
        .eco-featured:hover .eco-more { color: #fff; }
        .eco-tile:hover { transform: translateY(-8px); }
        .eco-tile:hover .eco-figure { border-color: rgba(255,255,255,0.22); }
        .eco-tile:hover .eco-glyph { transform: scale(1.12); }
        .eco-tile:hover .eco-more { color: #fff; }
        @media (max-width: 760px) {
          .eco-featured { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
}
