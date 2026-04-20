import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor Component
 * 
 * Features:
 * - Dual-cursor design (primary dot + secondary ring)
 * - Magnetic attraction on hover (buttons, team cards, canvas areas)
 * - Context-aware states (CTA, team, particles, text)
 * - Ripple effect on click
 * - Magnetic trail visualization
 * - Smooth lerp-based following
 * 
 * Usage: Add to your App.jsx root level
 */

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorStateRef = useRef({
    primaryPos: { x: 0, y: 0 },
    secondaryPos: { x: 0, y: 0 },
    targetPos: { x: 0, y: 0 },
    state: 'default', // 'default', 'cta', 'team', 'canvas', 'text'
    trailPositions: [],
    ripples: [],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ==========================================
    // 1. MOUSE TRACKING
    // ==========================================
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      cursorStateRef.current.targetPos = { x: e.clientX, y: e.clientY };
      updateCursorState();
    };

    // ==========================================
    // 2. CURSOR STATE DETECTION
    // ==========================================
    const updateCursorState = () => {
      const { x, y } = mouseRef.current;
      const element = document.elementFromPoint(x, y);

      if (!element) return;

      // CTA Button hover
      if (element.closest('.btn-cta') || element.closest('button[data-cta]')) {
        cursorStateRef.current.state = 'cta';
      }
      // Team card hover
      else if (element.closest('.team-card') || element.closest('[data-magnetic]')) {
        cursorStateRef.current.state = 'team';
      }
      // Canvas/Particle area hover
      else if (
        element.closest('.particle-bg') ||
        element.closest('.hero-canvas') ||
        element.closest('.building-canvas') ||
        element.closest('.stats-canvas')
      ) {
        cursorStateRef.current.state = 'canvas';
      }
      // Text area
      else if (element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2') {
        cursorStateRef.current.state = 'text';
      }
      // Default
      else {
        cursorStateRef.current.state = 'default';
      }
    };

    // ==========================================
    // 3. CLICK RIPPLE EFFECT
    // ==========================================
    const handleClick = (e) => {
      const ripple = {
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 80,
        opacity: 0.5,
        duration: 0.4,
        startTime: Date.now(),
      };
      cursorStateRef.current.ripples.push(ripple);
    };

    // ==========================================
    // 4. ANIMATION LOOP
    // ==========================================
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const state = cursorStateRef.current;
      const { x: targetX, y: targetY } = state.targetPos;
      const lerpFactor = 0.15;
      const ringLerpFactor = 0.07;

      // Lerp primary cursor (faster)
      state.primaryPos.x += (targetX - state.primaryPos.x) * lerpFactor;
      state.primaryPos.y += (targetY - state.primaryPos.y) * lerpFactor;

      // Lerp secondary ring (slower, for trail effect)
      state.secondaryPos.x += (targetX - state.secondaryPos.x) * ringLerpFactor;
      state.secondaryPos.y += (targetY - state.secondaryPos.y) * ringLerpFactor;

      // ==========================================
      // DRAW PRIMARY CURSOR DOT
      // ==========================================
      const primarySize = state.state === 'cta' ? 0 : 10; // Disappear on CTA
      if (primarySize > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(state.primaryPos.x, state.primaryPos.y, primarySize / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // ==========================================
      // DRAW SECONDARY RING + CONTEXT-AWARE STATES
      // ==========================================
      const ringSize = state.state === 'cta' ? 64 : 36;
      const ringOpacity = state.state === 'cta' ? 0.25 : 0.5;

      // Ring color changes by state
      let ringColor = 'rgba(255, 255, 255, ' + ringOpacity + ')';
      if (state.state === 'cta') ringColor = 'rgba(127, 119, 221, ' + ringOpacity + ')'; // Purple
      if (state.state === 'team') ringColor = 'rgba(239, 159, 39, ' + ringOpacity + ')'; // Amber
      if (state.state === 'canvas')
        ringColor = 'rgba(93, 202, 165, ' + ringOpacity + ')'; // Teal

      ctx.strokeStyle = ringColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(state.secondaryPos.x, state.secondaryPos.y, ringSize / 2, 0, Math.PI * 2);
      ctx.stroke();

      // Orbiting dots removed by user request

      // ==========================================
      // MAGNETIC TRAIL EFFECT
      // ==========================================
      if (state.trailPositions.length > 0) {
        state.trailPositions.push({
          x: state.secondaryPos.x,
          y: state.secondaryPos.y,
          age: 0,
        });

        // Keep trail length under 20
        if (state.trailPositions.length > 20) {
          state.trailPositions.shift();
        }

        ctx.lineWidth = 0.5;
        for (let i = 0; i < state.trailPositions.length - 1; i++) {
          const pos = state.trailPositions[i];
          const nextPos = state.trailPositions[i + 1];
          const opacity = (1 - i / state.trailPositions.length) * 0.15;

          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
          ctx.lineTo(nextPos.x, nextPos.y);
          ctx.stroke();
        }
      } else {
        // Build trail on movement
        if (
          Math.hypot(
            state.secondaryPos.x - (state.trailPositions[0]?.x || 0),
            state.secondaryPos.y - (state.trailPositions[0]?.y || 0)
          ) > 3
        ) {
          state.trailPositions.push({
            x: state.secondaryPos.x,
            y: state.secondaryPos.y,
            age: 0,
          });
        }
      }

      // ==========================================
      // DRAW RIPPLES
      // ==========================================
      state.ripples = state.ripples.filter((ripple) => {
        const elapsed = (Date.now() - ripple.startTime) / 1000;
        const progress = elapsed / ripple.duration;

        if (progress >= 1) return false;

        ripple.radius = ripple.maxRadius * progress;
        ripple.opacity = 0.5 * (1 - progress);

        ctx.strokeStyle = `rgba(239, 159, 39, ${ripple.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        return true;
      });

      requestAnimationFrame(animate);
    };

    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Start animation loop
    animate();

    // ==========================================
    // CLEANUP
    // ==========================================
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} id="custom-cursor-canvas" />;
};

export default CustomCursor;
