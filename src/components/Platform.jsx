import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/* ── Mock data modelled on AlmaConnect + Hoopstr (alumni platforms) ── */
const CAPABILITIES = [
  {
    number: '01',
    title: 'Alumni Intelligence',
    desc: 'Big-data profiles that stay current on their own. AI scans 300,000+ media sources and career signals, so you are the first to know when an alum switches roles, is promoted, or makes news.',
    tag: 'Data · AI Tracking',
    color: '#7F77DD',
  },
  {
    number: '02',
    title: 'Engagement & Events',
    desc: 'One home for reunions, homecomings and chapter meetups. Build custom registration forms, collect payments, send reminders, and post updates, polls and media to a filtered audience.',
    tag: 'Events · Community',
    color: '#EF9F27',
  },
  {
    number: '03',
    title: 'Opportunity Network',
    desc: 'Job openings auto-sourced from companies where your alumni already work — with warm referrals. Mentorship matching turns shared institutional identity into lifelong professional lift.',
    tag: 'Careers · Mentorship',
    color: '#1D9E75',
  },
  {
    number: '04',
    title: 'Community & Giving',
    desc: 'Directories, groups and chapters that run themselves, plus giving campaigns that convert belonging into support. A trusted network where members get help from their own.',
    tag: 'Directory · Fundraising',
    color: '#E4405F',
  },
];

const KNOWLEDGE = [
  {
    date: '02 Jul 2026',
    tag: 'Alumni News',
    title: '1,200 alumni reconnect at the flagship global homecoming weekend.',
  },
  {
    date: '24 Jun 2026',
    tag: 'Product',
    title: 'AI career-move tracking now surfaces alumni transitions in real time.',
  },
  {
    date: '11 Jun 2026',
    tag: 'Community',
    title: 'How 10,000+ communities turned shared identity into trusted referrals.',
  },
];

const marker = {
  fontFamily: 'var(--nav-font)',
  fontSize: '10px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.4)',
};

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--nav-font)',
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.6)',
  cursor: 'pointer',
};

export default function Platform() {
  return (
    <div style={{ background: '#000', color: '#fff', padding: '140px 6vw 160px', overflow: 'hidden' }}>
      {/* ── Header ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <span style={marker}>( 04 ) — Platform</span>
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
            maxWidth: '15ch',
          }}
        >
          Spotting potential, creating value.
        </motion.h2>
        <p
          style={{
            marginTop: '28px',
            fontFamily: 'var(--body-font)',
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '560px',
          }}
        >
          Everything an institution needs to build and leverage its alumni
          community — powering 10,000+ networks and over 2 million alumni.
        </p>
      </div>

      {/* ── Capability cards ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '80px auto 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {CAPABILITIES.map((c, i) => (
          <motion.div
            key={c.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="platform-card"
            style={{
              background: '#000',
              padding: '48px 40px 40px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '340px',
              transition: 'background 0.4s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--display-font)',
                  fontSize: '2.5rem',
                  fontStyle: 'italic',
                  color: c.color,
                  lineHeight: 1,
                }}
              >
                {c.number}
              </span>
              <span style={{ ...marker, color: 'rgba(255,255,255,0.3)' }}>{c.tag}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--display-font)',
                fontWeight: 500,
                fontSize: '1.75rem',
                letterSpacing: '-0.01em',
                margin: '32px 0 16px',
              }}
            >
              {c.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--body-font)',
                fontSize: '0.9rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                flexGrow: 1,
              }}
            >
              {c.desc}
            </p>

            <span className="platform-link" style={{ ...linkStyle, marginTop: '28px' }}>
              More details <ArrowUpRight size={13} />
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Knowledge / news ── */}
      <div style={{ maxWidth: '1200px', margin: '120px auto 0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            paddingBottom: '20px',
            marginBottom: '8px',
          }}
        >
          <span style={marker}>( Knowledge )</span>
          <span className="platform-link" style={linkStyle}>
            All updates <ArrowUpRight size={13} />
          </span>
        </div>

        {KNOWLEDGE.map((n, i) => (
          <motion.a
            key={n.title}
            href="#"
            onClick={(e) => e.preventDefault()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="knowledge-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 160px 1fr auto',
              alignItems: 'center',
              gap: '24px',
              padding: '28px 8px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              textDecoration: 'none',
              color: '#fff',
              transition: 'padding-left 0.35s ease, background 0.35s ease',
            }}
          >
            <span style={{ ...marker, color: 'rgba(255,255,255,0.45)' }}>{n.date}</span>
            <span
              style={{
                fontFamily: 'var(--nav-font)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#7F77DD',
              }}
            >
              {n.tag}
            </span>
            <span
              style={{
                fontFamily: 'var(--display-font)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                lineHeight: 1.25,
              }}
            >
              {n.title}
            </span>
            <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
          </motion.a>
        ))}
      </div>

      {/* interaction styles */}
      <style>{`
        .platform-card:hover { background: #0b0b0b !important; }
        .platform-card:hover .platform-link { color: #fff; }
        .knowledge-row:hover { padding-left: 24px !important; background: rgba(255,255,255,0.02); }
        @media (max-width: 720px) {
          .knowledge-row { grid-template-columns: 1fr auto !important; }
          .knowledge-row > span:nth-child(1),
          .knowledge-row > span:nth-child(2) { display: none; }
        }
      `}</style>
    </div>
  );
}
