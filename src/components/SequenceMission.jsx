import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 240;
const PRELOAD_BATCH_SIZE = 30; // Preload in batches

const SequenceMission = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Map scroll progress to frame index (1 to 240)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages = new Array(FRAME_COUNT);
    let loaded = 0;

    const loadBatch = (startIdx) => {
      const endIdx = Math.min(startIdx + PRELOAD_BATCH_SIZE, FRAME_COUNT);
      for (let i = startIdx; i < endIdx; i++) {
        const img = new Image();
        img.src = `/se2/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;
        img.onload = () => {
          loadedImages[i] = img;
          loaded++;
          setLoadedCount(loaded);
          
          if (loaded === PRELOAD_BATCH_SIZE && endIdx < FRAME_COUNT) {
              // start next batch
          }
        };
      }
      setTimeout(() => {
          if (endIdx < FRAME_COUNT) loadBatch(endIdx);
      }, 200);
    };

    // Load first batch immediately, rest delayed
    for(let i=0; i<FRAME_COUNT; i++){
        const img = new Image();
        img.src = `/se2/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;
        img.onload = () => {
            loadedImages[i] = img;
            loaded++;
            setLoadedCount(loaded);
        }
    }

    setImages(loadedImages);
  }, []);

  useEffect(() => {
    // Canvas render loop
    let animationFrameId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      const currentIndex = Math.floor(frameIndex.get()) - 1;
      const img = images[currentIndex];
      
      if (img && img.complete) {
        // Clear and draw image scaled to fit (or fill)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Calculate aspect ratios
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;
        
        // Cover behavior
        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }
        
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, frameIndex]);

  // Opacities for different text sections
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 0.99, 1], [0, 1, 1, 1]);

  return (
    <div ref={containerRef} style={{ height: '300vh', backgroundColor: '#000', position: 'relative' }}>
      
      <div style={{ position: 'sticky', top: 0, left: 0, height: '100vh', width: '100%', overflow: 'hidden', background: '#000' }}>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }}></canvas>
        
        {/* Minimal overlay to maintain absolute sequence visibility while assisting text contrast */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent, rgba(0,0,0,0.1))', pointerEvents: 'none' }}></div>
        
        {/* Story Beat 1 */}
        <motion.div 
          style={{ opacity: opacity1, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
        >
          <div style={{ textAlign: 'center', color: '#fff', padding: '0 2rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #e0f7fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Unity in Heritage
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Preserving the institutional bond.
            </p>
          </div>
        </motion.div>

        {/* Story Beat 2 */}
        <motion.div 
          style={{ opacity: opacity2, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '10vw', pointerEvents: 'none' }}
        >
          <div style={{ textAlign: 'left', color: '#fff', maxWidth: '500px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Strategic Growth
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Structuring connections that empower every member of the tribe.
            </p>
          </div>
        </motion.div>

        {/* Story Beat 3 */}
        <motion.div 
          style={{ opacity: opacity3, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10vw', pointerEvents: 'none' }}
        >
          <div style={{ textAlign: 'right', color: '#fff', maxWidth: '500px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Global Scale
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              From local roots to a world of institutional excellence.
            </p>
          </div>
        </motion.div>

        {/* Story Beat 4 */}
        <motion.div 
          style={{ opacity: opacity4, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
        >
          <div style={{ textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Join the Legacy
            </h2>
            <button className="btn-cta" style={{ background: 'linear-gradient(135deg, #0050FF 0%, #00D6FF 100%)', color: '#fff', padding: '16px 32px', borderRadius: '30px', fontSize: '1rem', fontWeight: 500, border: 'none', boxShadow: '0 10px 30px rgba(0, 214, 255, 0.3)', pointerEvents: 'auto' }}>
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Loading Indicator */}
        {loadedCount < FRAME_COUNT && (
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
            Loading mission sequence... {Math.floor((loadedCount / FRAME_COUNT) * 100)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default SequenceMission;
