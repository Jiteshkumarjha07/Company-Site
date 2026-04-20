import React from 'react';

export default function Navbar({ activeSection }) {
  const navItems = [
    { id: 'vision', label: 'VISION' },
    { id: 'mission', label: 'MISSION' },
    { id: 'ecosystem', label: 'ECOSYSTEM' },
    { id: 'metrics', label: 'METRICS' },
  ];

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

      {/* Right: Section Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div 
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ 
                position: 'relative',
                cursor: 'pointer',
                padding: '4px 0'
              }}
            >
              <span 
                className="label-text" 
                style={{ 
                  fontSize: '10px', 
                  letterSpacing: '0.15em', 
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontWeight: isActive ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </span>
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : '0%',
                  height: '1px',
                  backgroundColor: '#fff',
                  transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
