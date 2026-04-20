import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import CustomCursor from './components/CustomCursor'; // NEW: Import custom cursor
import Navbar from './components/Navbar';
import SequenceHero from './components/SequenceHero';
import Marquee from './components/Marquee';
import VisionMission, { VisionBlock, MissionBlock } from './components/VisionMission';
import SequenceMission from './components/SequenceMission';
import UnificationHero from './components/UnificationHero';
import TeamDraggable from './components/TeamDraggable';
import FeatureGrid from './components/FeatureGrid';
import Stats from './components/Stats';
import JoinTheTribe from './components/JoinTheTribe';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = React.useState('hero');

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

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 2. Theme Flipping Logic (Intersection Observer)
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update Theme
          const theme = entry.target.getAttribute('data-theme');
          if (theme === 'dark') {
            document.body.classList.add('dark-mode');
          } else {
            document.body.classList.remove('dark-mode');
          }

          // Update Active Section for Nav
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('[id], [data-theme]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* NEW: Custom cursor overlay (must be at root level) */}
      <CustomCursor />
      
      <div className="vignette-glow" />
      <Navbar activeSection={activeSection} />
      <main>
        <section id="hero" data-theme="dark">
          <SequenceHero />
        </section>
        <section data-theme="light">
          <Marquee />
        </section>
        <section id="vision" data-theme="dark">
          <VisionBlock />
        </section>
        <section id="mission" data-theme="dark">
          <MissionBlock />
        </section>
        <section id="mission-seq" data-theme="dark">
          <SequenceMission />
        </section>

        <section id="unification">
          <UnificationHero />
        </section>

        <section id="ecosystem">
          <FeatureGrid />
        </section>

        <section data-theme="light">
          <TeamDraggable />
        </section>

        <section id="metrics" data-theme="dark">
          <Stats />
        </section>

        <section id="tribe">
          <JoinTheTribe />
        </section>

      </main>
      <section id="footer" data-theme="dark">
        <Footer />
      </section>
    </>
  );
}

export default App;
