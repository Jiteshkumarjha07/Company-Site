import React, { useEffect, useState } from 'react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'vision', label: 'Vision' },
    { id: 'platform', label: 'Platform' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'metrics', label: 'Metrics' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: scrolled ? 'rgba(5, 5, 5, 0.55)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scrolled ? '14px 6vw' : '24px 6vw',
        color: '#fff',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Brand wordmark */}
      <div
        onClick={() => scrollTo('hero')}
        style={{
          fontFamily: 'var(--display-font)',
          fontStyle: 'italic',
          fontSize: '20px',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Alumnest
      </div>

      {/* Section links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{ position: 'relative', cursor: 'pointer', padding: '4px 0' }}
            >
              <span
                style={{
                  fontFamily: 'var(--nav-font)',
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.45)',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'color 0.3s ease',
                }}
              >
                {isActive ? `( ${item.label} )` : item.label}
              </span>
            </div>
          );
        })}

        {/* Contact CTA */}
        <a
          href="mailto:contact@alumnest.co.in"
          style={{
            fontFamily: 'var(--nav-font)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#000',
            background: '#fff',
            padding: '9px 18px',
            borderRadius: '2px',
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
