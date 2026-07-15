import React, { useEffect, useRef, useState } from 'react';

/**
 * Penguin-style intro overlay.
 * Counts 0 → 100 %, then slides away to reveal the hero.
 * Purely presentational — self-unmounts after the exit transition.
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const DURATION = 1500; // ms to reach 100 %

    const tick = (t) => {
      if (startRef.current == null) startRef.current = t;
      const elapsed = t - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // brief hold, then exit
        setTimeout(() => setLeaving(true), 250);
        setTimeout(() => setGone(true), 1050);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#fdfcf9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
        transform: leaving ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        pointerEvents: leaving ? 'none' : 'auto',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--display-font)',
          fontStyle: 'italic',
          fontSize: 'clamp(40px, 8vw, 96px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          color: '#0a0a0a',
          lineHeight: 1,
        }}
      >
        Alumnest
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span
          style={{
            fontFamily: 'var(--nav-font)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.4)',
          }}
        >
          Now loading
        </span>
        <span
          style={{
            fontFamily: 'var(--nav-font)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            fontWeight: 700,
            color: '#0a0a0a',
            minWidth: '38px',
            textAlign: 'right',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {progress}%
        </span>
      </div>

      {/* progress rule */}
      <div
        style={{
          width: 'min(320px, 60vw)',
          height: '1px',
          background: 'rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: '#0a0a0a',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  );
}
