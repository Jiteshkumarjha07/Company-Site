import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', handle: '@alumnest', href: '#' },
  { name: 'Twitter / X', handle: '@alumnest_in', href: '#' },
  { name: 'Instagram', handle: '@alumnest.official', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--bg-primary)', 
      padding: '160px 48px 60px', 
      overflow: 'hidden',
      transition: 'var(--transition-theme)' 
    }}>
      {/* Footer Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(12, 1fr)', 
        gap: '24px',
        marginBottom: '100px'
      }}>
        
        {/* Left: Contact */}
        <div style={{ gridColumn: 'span 4' }}>
          <span className="label-text" style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '32px' }}>/ 06 — CONNECT</span>
          <h2 className="display-text" style={{ fontSize: '48px', fontStyle: 'italic', marginBottom: '32px' }}>
            Ready to build?
          </h2>
          <a href="mailto:hello@alumnest.in" className="btn-flat primary btn-cta" data-cta="true">
            hello@alumnest.in <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Right: Socials & Links */}
        <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '24px' }}>
          <div style={{ gridColumn: 'span 4' }}>
            <span className="label-text" style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '32px' }}>INDEX</span>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['PLATFORM', 'PURPOSE', 'NETWORK', 'LEADERSHIP', 'CONTACT'].map((link) => (
                <li key={link}>
                  <a href="#" className="label-text" style={{ fontSize: '10px', color: 'var(--text-primary)', opacity: 0.6 }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ gridColumn: 'span 4' }}>
            <span className="label-text" style={{ color: 'var(--text-dim)', display: 'block', marginBottom: '32px' }}>SOCIAL CLOUT</span>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="label-text" style={{ fontSize: '10px', display: 'flex', justifyContent: 'space-between', color: 'var(--text-primary)', opacity: 0.6 }}>
                    {s.name} <span style={{ opacity: 0.5 }}>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Massive closing wordmark */}
      <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '60px' }}>
        <h1 className="display-text" style={{ 
          fontSize: 'clamp(80px, 20vw, 320px)', 
          textAlign: 'center', 
          lineHeight: 0.8,
          fontStyle: 'italic',
          letterSpacing: '-0.03em',
          opacity: 0.05
        }}>
          Alumnest
        </h1>
      </div>

      {/* Bottom Metadata */}
      <div style={{ 
        marginTop: '60px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        paddingTop: '24px',
        borderTop: '1px solid var(--border-light)' 
      }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span className="label-text" style={{ fontSize: '9px', opacity: 0.4 }}>© 2024 ALUMNEST</span>
          <span className="label-text" style={{ fontSize: '9px', opacity: 0.4 }}>MADE IN INDIA</span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span className="label-text" style={{ fontSize: '9px', opacity: 0.4 }}>PRIVACY POLICY</span>
          <span className="label-text" style={{ fontSize: '9px', opacity: 0.4 }}>TERMS OF SERVICE</span>
        </div>
      </div>
    </footer>
  );
}
