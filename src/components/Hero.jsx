import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KEYWORDS = ['Connect', 'Mentor', 'Grow', 'Belong'];
const FINAL_TEXT = 'ALUMNEST';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Penguin-style editorial hero (replaces the canvas frame-sequence SequenceHero).
 * - Cycling keyword line
 * - Scramble-reveal ALUMNEST wordmark (logic lifted from the old SequenceHero)
 * - Tagline + parenthetical scroll cue. No canvas / no image frames.
 */
export default function Hero() {
  const [keywordIdx, setKeywordIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [revealComplete, setRevealComplete] = useState(false);

  /* Cycle the keyword line */
  useEffect(() => {
    const id = setInterval(() => {
      setKeywordIdx((i) => (i + 1) % KEYWORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  /* Scramble-reveal the wordmark */
  useEffect(() => {
    const startTime = Date.now();
    let interval;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      let newText = '';
      let allLocked = true;

      for (let i = 0; i < FINAL_TEXT.length; i++) {
        const lockTime = i * 160;
        if (elapsed >= lockTime) {
          newText += FINAL_TEXT[i];
        } else {
          allLocked = false;
          newText += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(newText);
      if (allLocked) {
        clearInterval(interval);
        setRevealComplete(true);
      }
    };

    tick();
    interval = setInterval(tick, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 6vw',
      }}
    >
      {/* soft radial vignette so the black feels lit, not flat */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(127,119,221,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* top marker */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          left: '6vw',
          fontFamily: 'var(--nav-font)',
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        ( 01 ) — The Alumni Network, Rebuilt
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1100px' }}>
        {/* cycling keyword */}
        <div
          style={{
            height: '2.4em',
            display: 'flex',
            alignItems: 'flex-end',
            marginBottom: '8px',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={KEYWORDS[keywordIdx]}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--display-font)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              {KEYWORDS[keywordIdx]}.
            </motion.span>
          </AnimatePresence>
        </div>

        {/* wordmark */}
        <motion.h1
          initial={{ letterSpacing: '0.3em' }}
          animate={{ letterSpacing: revealComplete ? '-0.02em' : '0.3em' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--display-font)',
            fontWeight: 500,
            fontSize: 'clamp(56px, 12vw, 180px)',
            lineHeight: 0.9,
            margin: 0,
            color: '#fff',
          }}
        >
          {displayText}
        </motion.h1>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={revealComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '32px',
            fontFamily: 'var(--body-font)',
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: '540px',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Beyond the batch. Redefine what alumni can be — a structured,
          intelligent network built on trust.
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: revealComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '6vw',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--nav-font)',
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          ( scroll )
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '28px', background: 'rgba(255,255,255,0.4)' }}
        />
      </motion.div>
    </div>
  );
}
