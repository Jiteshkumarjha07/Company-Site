import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '120px 48px 80px',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)',
      transition: 'var(--transition-theme)'
    }}>

      {/* Top Left Label & Logo */}
      <div style={{
        position: 'absolute',
        top: '120px',
        left: '48px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/alumnest-logo.jpeg"
          alt="Alumnest Logo"
          style={{ width: 'auto', height: '18px', filter: 'grayscale(1) contrast(1.2) invert(var(--logo-invert, 0))' }}
        />
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="label-text"
          style={{ color: 'var(--text-dim)', fontSize: '9px' }}
        >
          [ EST. 2024 ]
        </motion.span>
      </div>

      {/* Top Right Metadata */}
      <div style={{
        position: 'absolute',
        top: '120px',
        right: '48px',
        textAlign: 'right'
      }}>
        <span className="label-text" style={{ fontSize: '9px' }}>
          ALUMNI INTELLIGENCE PLATFORM<br/>
          SCROLL TO EXPLORE ↓
        </span>
      </div>

      {/* Main Headline */}
      <motion.div style={{ position: 'relative', zIndex: 1, y: yParallax, opacity: textOpacity }}>
        <h1 className="display-text" style={{
          fontSize: 'clamp(80px, 16vw, 240px)',
          lineHeight: 0.8,
          marginBottom: '20px',
          maxWidth: '100%',
          fontStyle: 'italic',
          letterSpacing: '-0.04em'
        }}>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            ALUMNEST
          </motion.span>
        </h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="label-text"
          style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            marginBottom: '80px',
            textTransform: 'uppercase',
            opacity: 0.6
          }}
        >
          For the tribe
        </motion.p>

        {/* Bottom Row Information */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
          borderTop: '1px solid var(--border-light)',
          paddingTop: '32px'
        }}>
          <div style={{ gridColumn: 'span 4' }}>
            <span className="label-text" style={{ display: 'block', marginBottom: '16px', color: 'var(--text-muted)' }}>/ 01 — OBJECTIVE</span>
            <p className="body-text" style={{ fontSize: '12px', color: 'var(--text-primary)', maxWidth: '280px' }}>
              Building the world's most trusted, structured alumni ecosystem — starting with India. Structure creates freedom.
            </p>
          </div>

          <div style={{ gridColumn: 'span 4' }}>
            <span className="label-text" style={{ display: 'block', marginBottom: '16px', color: 'var(--text-muted)' }}>/ 02 — STATUS</span>
            <span className="label-text" style={{ fontSize: '10px', color: 'var(--text-primary)' }}>PLATFORM LIVE • V1.0</span>
          </div>

          <div style={{ gridColumn: 'span 4', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', gap: '12px' }}>
            <a href="#work" className="btn-flat">
              DISCOVER
            </a>
            <a href="#contact" className="btn-flat primary">
              CONNECT <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative vertical lines */}
      <div style={{ position: 'absolute', top: 0, left: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: 0, right: '48px', width: '1px', height: '100%', background: 'var(--border-faint)', zIndex: 0 }} />
    </section>
  );
}
