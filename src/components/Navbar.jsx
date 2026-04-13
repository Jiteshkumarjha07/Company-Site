import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 100,
      background: 'transparent',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 48px',
      mixBlendMode: 'difference',
      color: '#fff' // White text on 'difference' will flip correctly
    }}>
      {/* Left: Brand Wordmark */}
      <div className="label-text" style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em' }}>
        ALUMNEST™
      </div>

      {/* Center: Minimalist pagination dash */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#fff' }}></div>
        <span style={{ fontSize: '10px', fontFamily: 'var(--nav-font)', opacity: 0.6 }}>01</span>
      </div>

      {/* Right: Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
        <span className="label-text" style={{ fontSize: '10px', letterSpacing: '0.15em' }}>INDEX</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ width: '18px', height: '1px', backgroundColor: '#fff' }}></div>
          <div style={{ width: '18px', height: '1px', backgroundColor: '#fff' }}></div>
        </div>
      </div>
    </nav>
  );
}
