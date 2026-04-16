import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import SequenceHero from './components/SequenceHero';
import Marquee from './components/Marquee';
import VisionMission from './components/VisionMission';
import TeamDraggable from './components/TeamDraggable';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Theme Flipping Logic (Intersection Observer)
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme');
          if (theme === 'dark') {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('[data-theme]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="vignette-glow" />
      <Navbar />
      <main>
        <section data-theme="dark"><SequenceHero /></section>
        <section data-theme="light"><Marquee /></section>
        <section data-theme="dark"><VisionMission /></section>
        <section data-theme="light"><TeamDraggable /></section>
        <section data-theme="light"><Stats /></section>
      </main>
      <section data-theme="dark"><Footer /></section>
    </>
  );
}

export default App;
