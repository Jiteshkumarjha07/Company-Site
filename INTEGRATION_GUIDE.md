# ALUMNEST ANIMATION INTEGRATION GUIDE

## Quick Start (5 minutes)

### Step 1: Add Global CSS
```bash
# Copy this file to your src/styles/ folder
# styles/globals.css
```
Import in your `index.js` or `main.jsx`:
```javascript
import './styles/globals.css';
```

### Step 2: Add Custom Cursor Component
```bash
# Copy CustomCursor.jsx to src/components/
# components/CustomCursor.jsx
```

### Step 3: Update App.jsx
Replace your current App.jsx with the provided `App-updated.jsx`:
```javascript
import CustomCursor from './components/CustomCursor';

// Add this right after opening <> tag:
<CustomCursor />
```

### Step 4: Add Class Names to Components
See **SELECTOR MAP** section below. Add the required classes to your existing components.

---

## SELECTOR MAP — Exact Class Names to Add

### A. CTA BUTTONS (SequenceHero, Footer, etc.)

**Where to add:**
- Any primary call-to-action button on your site
- Apply to `<button>` or `<a>` elements

**CSS Class:**
```html
<!-- Hero CTA -->
<button class="btn-cta" data-cta>Request Early Access</button>

<!-- Footer CTA -->
<a href="#contact" class="btn-cta" data-cta>Get Started</a>
```

**What it does:**
- Cursor ring expands to 64px and fills with purple (#7F77DD) on hover
- Primary dot disappears (absorbs into button)
- Pulsing amber border animation on the button itself

**Optional styling:**
```css
.btn-cta {
  padding: 12px 28px;
  border: 1.5px solid #EF9F27;
  border-radius: 8px;
  background: transparent;
  color: white;
  font-weight: 500;
  animation: pulse-glow 2s infinite;
}
```

---

### B. TEAM CARDS (TeamDraggable.jsx)

**Where to add:**
- Each individual founder/team member card

**CSS Class:**
```html
<div class="team-card" data-magnetic>
  <div class="team-card-avatar">JJ</div>
  <div class="team-card-name">Jitesh Jha</div>
  <div class="team-card-role">CEO & Founder</div>
</div>
```

**What it does:**
- Cursor ring tints amber on hover
- Ring pulses slightly
- Small "+" indicator appears in cursor center
- Team card border shows traveling light beam (CSS animation on hover)

**Optional styling:**
```css
.team-card {
  position: relative;
  padding: 1.5rem;
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
}

.team-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
}

.team-card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #7F77DD;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
  color: white;
}

.team-card-role {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
}
```

---

### C. PARTICLE/CANVAS AREAS

**Where to add:**
Apply to the parent container of any WebGL/Three.js canvas or particle background

**CSS Classes:**
```html
<!-- Hero Section with particles -->
<section class="particle-bg hero-canvas" data-scroll-animate>
  <canvas id="hero-particle-canvas"></canvas>
  <!-- Hero content here -->
</section>

<!-- Stats Section with counter particles -->
<section class="particle-bg stats-canvas" data-scroll-animate>
  <div class="stats-container">
    <!-- Stats content -->
  </div>
</section>

<!-- Building 3D Section -->
<section class="particle-container building-canvas" data-scroll-animate>
  <canvas id="building-canvas"></canvas>
  <!-- Building explanation text -->
</section>

<!-- India Map Section -->
<section class="particle-container map-canvas" data-scroll-animate>
  <svg id="india-map"></svg>
  <!-- Map content -->
</section>
```

**What it does:**
- Cursor ring tints teal (#5DCAA5) on hover
- Ring shows 3 orbiting dots that rotate continuously
- Particles/canvas area becomes "interactive zone"

**Styling:**
```css
.particle-bg,
.particle-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.hero-canvas canvas,
.stats-canvas canvas,
.building-canvas canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

### D. NAVBAR (Navbar.jsx)

**Where to add:**
Any nav links should have the default cursor behavior

**No special class needed** — they'll inherit the default state from CustomCursor.
The cursor will return to "default" state when hovering nav items.

**Optional:** Add data attribute if you want custom interaction:
```html
<nav>
  <a href="#hero" data-nav-link>Home</a>
  <a href="#team" data-nav-link>Team</a>
</nav>
```

---

### E. TEXT AREAS (VisionMission, etc.)

**Where to add:**
Headings and paragraphs in narrative sections will automatically trigger "text" state

**No special class needed** — the cursor detects `<h1>`, `<h2>`, `<h3>`, `<p>` elements automatically.

**What it does:**
- Cursor ring stays white (default)
- Slightly increases opacity when reading text

---

### F. MAGNETIC ELEMENTS (Any interactive element)

**Generic magnetic attraction data attribute:**
```html
<!-- Any element you want to attract cursor -->
<div data-magnetic>Interactive Element</div>
```

The CustomCursor component checks for this attribute and applies team-card behavior.

---

## INSTALLATION CHECKLIST

### Pre-Installation
- [ ] You have React project set up
- [ ] Lenis is already installed (`@studio-freight/lenis`)
- [ ] Your `index.css` or main style file exists

### Installation Steps
- [ ] Copy `styles/globals.css` to your `src/styles/` folder
- [ ] Copy `CustomCursor.jsx` to your `src/components/` folder
- [ ] Import globals.css in your `index.js` or `main.jsx`
- [ ] Update `App.jsx` with `<CustomCursor />` (see App-updated.jsx)
- [ ] Add `.btn-cta` class to CTA buttons
- [ ] Add `.team-card` class to team cards
- [ ] Add `.hero-canvas`, `.stats-canvas`, etc. to canvas sections

### Verification
After installing, test:
- [ ] Default cursor is hidden (cursor: none)
- [ ] Custom cursor appears as white dot + ring
- [ ] Hover over a `.btn-cta` button → ring turns purple, dot disappears
- [ ] Hover over a `.team-card` → ring turns amber
- [ ] Hover over `.hero-canvas` → ring turns teal, shows orbit dots
- [ ] Click anywhere → see purple ripple effect
- [ ] Cursor trail leaves a faint white path behind ring

---

## SECTION-BY-SECTION INTEGRATION

### HERO SECTION (SequenceHero.jsx)

Add these classes/attributes:
```jsx
<section class="particle-bg hero-canvas" data-scroll-animate>
  <canvas id="hero-particle-canvas"></canvas>
  
  {/* Hero content */}
  <div className="hero-content">
    <h1>For the Tribe</h1>
    <button className="btn-cta" data-cta>Request Early Access</button>
  </div>
</section>
```

**Antigravity Prompt:** See playbook #H1 "Hero — living particle network"

---

### MARQUEE SECTION (Marquee.jsx)

No special changes needed. This section is "light" theme, cursor works as default.

---

### VISION/MISSION SECTION (VisionMission.jsx)

The text sections here will naturally trigger the "text" cursor state.

```jsx
<section data-theme="dark">
  <h1>Our Vision</h1>
  <p>We envision a world where...</p>
  {/* Additional CTAs */}
  <button className="btn-cta" data-cta>Learn More</button>
</section>
```

---

### TEAM SECTION (TeamDraggable.jsx)

Add `.team-card` and related classes to each team member:

```jsx
{teamMembers.map((member) => (
  <div key={member.id} className="team-card" data-magnetic>
    <div className="team-card-avatar">{member.initials}</div>
    <div className="team-card-name">{member.name}</div>
    <div className="team-card-role">{member.role}</div>
    <div className="team-card-bio">{member.bio}</div>
  </div>
))}
```

**Antigravity Prompt:** See playbook #T1 "Team section — magnetic gravity cards"

---

### STATS SECTION (Stats.jsx)

Add `.stats-canvas` to the container:

```jsx
<section className="particle-bg stats-canvas" data-scroll-animate>
  <div className="stats-grid">
    <div className="stat-item" data-stat="universities">
      <div className="stat-number">1,000+</div>
      <div className="stat-label">Universities</div>
    </div>
    {/* More stats */}
  </div>
</section>
```

**Antigravity Prompt:** See playbook #S1 "Market stats — cinematic number counter"

---

### FOOTER (Footer.jsx)

Add `.btn-cta` to footer CTA:

```jsx
<footer data-theme="dark">
  <p>Join the Tribe</p>
  <button className="btn-cta" data-cta>Request Early Access</button>
</footer>
```

---

## ADVANCED: MAGNETIC ATTRACTION FOR TEAM CARDS

If you want TeamDraggable to have the full **magnetic repulsion** effect (cards move away from cursor):

```jsx
// In TeamDraggable.jsx component
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TeamDraggable = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        // Distance from cursor to card center
        const dx = clientX - cardCenterX;
        const dy = clientY - cardCenterY;
        const distance = Math.hypot(dx, dy);

        // Magnetic threshold: 120px
        if (distance < 120) {
          // Repulsion force (push card away from cursor)
          const force = (120 - distance) / 120;
          const angle = Math.atan2(dy, dx);

          // Move card away from cursor
          const moveX = Math.cos(angle) * force * 30;
          const moveY = Math.sin(angle) * force * 20;

          gsap.to(card, {
            x: moveX,
            y: moveY,
            duration: 0.2,
            overwrite: 'auto',
          });

          // Add rotation based on repulsion
          gsap.to(card, {
            rotation: (moveX / 30) * 3,
            duration: 0.2,
            overwrite: 'auto',
          });
        } else {
          // Return to origin
          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)',
            overwrite: 'auto',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="team-section" data-theme="light">
      <div className="team-grid">
        {/* Your team data */}
        {teamData.map((member, idx) => (
          <div
            key={member.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            className="team-card"
            data-magnetic
          >
            {/* Card content */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamDraggable;
```

---

## NEXT STEPS: ANTIGRAVITY PROMPTS

Once this cursor setup is working, you'll apply individual Antigravity prompts from the playbook:

1. **Hero Particle Network** (H1) — Animate particles in background
2. **Problem → Solution** (P1) — Scroll-driven particle convergence
3. **3D Building** (B1) — Three.js building reveal
4. **India Map** (M1) — SVG city nodes with radar ping
5. **Feature Cards** (F1) — Glass morphism cards with mini Three.js icons
6. **Stats Counter** (S1) — GSAP number counter with particle burst
7. **Team Magnetic** (T1) — Enhanced team card interactions
8. **CTA Closing** (C1) — Final particle morph into wordmark

Each prompt is self-contained and can be implemented independently.

---

## TROUBLESHOOTING

### Cursor not appearing?
1. Check that `cursor: none;` is applied globally in CSS
2. Verify CustomCursor.jsx is imported in App.jsx
3. Open DevTools → check for `<canvas id="custom-cursor-canvas">` in DOM

### Cursor flickering on certain elements?
1. Check if element has conflicting `cursor` CSS property
2. Exception list in globals.css should handle inputs/text areas
3. Add more exceptions if needed:
```css
/* Add to globals.css */
.your-element {
  cursor: none !important;
}
```

### Cursor not changing states on hover?
1. Verify your HTML has the correct classes (`.btn-cta`, `.team-card`, etc.)
2. Check browser console for any JS errors
3. Test with DevTools → Inspect element → check classList

### Performance issues?
1. The canvas renders at 60fps by default
2. If laggy, reduce `trailPositions` max length (line ~200 in CustomCursor.jsx)
3. Disable trail effect:
```javascript
// In CustomCursor.jsx, comment out trail drawing section (lines ~175-200)
```

---

## FILE SUMMARY

| File | Purpose | Where to put |
|------|---------|--------------|
| `styles/globals.css` | Global cursor + animation CSS | `src/styles/globals.css` |
| `CustomCursor.jsx` | Custom cursor component | `src/components/CustomCursor.jsx` |
| `App-updated.jsx` | Updated App.jsx with cursor | Replace your `src/App.jsx` |

---

## QUICK REFERENCE: CLASS NAMES

```
.btn-cta              → CTA buttons (ring turns purple)
.team-card            → Team member cards (ring turns amber)
.hero-canvas          → Hero particle section (ring turns teal)
.stats-canvas         → Stats section with counter
.building-canvas      → 3D building visualization
.map-canvas           → India city node map
.particle-bg          → Any particle background
.particle-container   → Container for canvas elements
data-magnetic         → Generic magnetic element
data-cta              → CTA button marker
data-scroll-animate   → Scroll-triggered animation
data-theme="dark"     → Dark theme section
data-theme="light"    → Light theme section
```

---

## Questions?

Refer back to the **SELECTOR MAP** section for exact implementation patterns, or consult the **ALUMNEST ANIMATION PLAYBOOK** for specific Antigravity prompts by section number.

Good luck! 🎉
