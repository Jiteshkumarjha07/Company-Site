import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(5, 5, 5, 0.65)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 48px',
      color: '#fff',
      transition: 'all 0.4s ease'
    }}>
      {/* Left: Brand Wordmark */}
      <div className="label-text" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', color: '#fff' }}>
        ALUMNEST™
      </div>

      {/* Center: Minimalist text */}
      <div style={{ display: 'none' }}></div> {/* Intentionally blank for a cleaner layout */}

      {/* Right: Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
        <span className="label-text" style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#fff' }}>MENU</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ width: '20px', height: '1.5px', backgroundColor: '#fff', opacity: 0.8 }}></div>
          <div style={{ width: '20px', height: '1.5px', backgroundColor: '#fff', opacity: 0.8 }}></div>
        </div>
      </div>
    </nav>
  );
}
