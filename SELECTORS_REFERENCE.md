# ALUMNEST ANIMATION SELECTORS — Quick Reference Card

## COPY-PASTE READY HTML EXAMPLES

### 1. CTA BUTTON (Hero, Footer, etc.)

```html
<!-- Primary CTA Button -->
<button class="btn-cta" data-cta onclick="handleCTA()">
  Request Early Access
</button>

<!-- With link styling -->
<a href="#contact" class="btn-cta" data-cta>
  Get Started
</a>

<!-- With icon -->
<button class="btn-cta" data-cta>
  <span>Join the Tribe</span>
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M8 1v14M1 8h14"/>
  </svg>
</button>
```

**Cursor Effect:** Purple ring + dot disappears + pulsing border
**CSS to add:**
```css
.btn-cta {
  padding: 12px 28px;
  border: 1.5px solid #EF9F27;
  border-radius: 8px;
  background: transparent;
  color: white;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: pulse-glow 2s infinite;
}

.btn-cta:hover {
  border-color: #FFB850;
  box-shadow: 0 0 20px rgba(239, 159, 39, 0.3);
}
```

---

### 2. TEAM CARD (TeamDraggable.jsx)

```html
<!-- Individual Team Card -->
<div class="team-card" data-magnetic>
  <!-- Avatar -->
  <div class="team-card-avatar">JJ</div>
  
  <!-- Name -->
  <h3 class="team-card-name">Jitesh Jha</h3>
  
  <!-- Role (will scramble on hover) -->
  <p class="team-card-role">CEO & Founder</p>
  
  <!-- Optional: Bio -->
  <p class="team-card-bio">
    Leading vision, strategy, and fundraising. Serial entrepreneur.
  </p>
  
  <!-- Optional: Founder badge -->
  <span class="badge badge-founder">Founding Team</span>
</div>

<!-- Complete Team Grid -->
<div class="team-grid">
  <div class="team-card" data-magnetic>
    <div class="team-card-avatar">JJ</div>
    <h3 class="team-card-name">Jitesh Jha</h3>
    <p class="team-card-role">CEO & Founder</p>
  </div>
  
  <div class="team-card" data-magnetic>
    <div class="team-card-avatar">DY</div>
    <h3 class="team-card-name">Dadan Yadav</h3>
    <p class="team-card-role">COO & Co-Founder</p>
  </div>
  
  <!-- More team members... -->
</div>
```

**Cursor Effect:** Amber ring + orbit indicator + border light beam on hover
**CSS to add:**
```css
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  padding: 2rem;
}

.team-card {
  position: relative;
  padding: 1.5rem;
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  will-change: transform;
}

.team-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.team-card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7F77DD 0%, #534AB7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
  color: white;
  margin-bottom: 1rem;
}

.team-card-name {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem;
}

.team-card-role {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 1rem;
}

.team-card-bio {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin: 0 0 1rem;
}

.badge-founder {
  display: inline-block;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  background: #EF9F27;
  color: #0d0f14;
  font-weight: 600;
}
```

---

### 3. PARTICLE/CANVAS BACKGROUND (Hero Section)

```html
<!-- Hero with particle canvas -->
<section class="particle-bg hero-canvas" data-scroll-animate>
  <!-- Canvas will be injected here -->
  <canvas id="hero-particle-canvas"></canvas>
  
  <!-- Hero content overlay -->
  <div class="hero-content">
    <h1>For the Tribe</h1>
    <p class="hero-subtitle">Rebuilding India's alumni connections</p>
    <button class="btn-cta" data-cta>Request Early Access</button>
  </div>
</section>
```

**Cursor Effect:** Teal ring + 3 orbiting dots
**CSS to add:**
```css
.particle-bg,
.particle-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.hero-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero-particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: clamp(48px, 12vw, 96px);
  font-weight: 300;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
}

.hero-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2rem;
}
```

---

### 4. STATS SECTION WITH CANVAS

```html
<!-- Stats section with particle background -->
<section class="particle-bg stats-canvas" data-scroll-animate>
  <!-- Optional: Background canvas -->
  <canvas id="stats-particle-canvas"></canvas>
  
  <!-- Stats grid -->
  <div class="stats-container">
    <div class="stat-item" data-stat="universities">
      <div class="stat-number">1,000+</div>
      <div class="stat-label">Universities</div>
      <div class="stat-bar"></div>
    </div>
    
    <div class="stat-item" data-stat="colleges">
      <div class="stat-number">42,000+</div>
      <div class="stat-label">Colleges</div>
      <div class="stat-bar"></div>
    </div>
    
    <div class="stat-item" data-stat="alumni">
      <div class="stat-number">500M+</div>
      <div class="stat-label">Alumni Pool</div>
      <div class="stat-bar"></div>
    </div>
    
    <div class="stat-item" data-stat="market">
      <div class="stat-number">$5B+</div>
      <div class="stat-label">Market</div>
      <div class="stat-bar"></div>
    </div>
  </div>
</section>
```

**Cursor Effect:** Teal ring + orbiting dots
**CSS to add:**
```css
.stats-container {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
}

.stat-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.stat-bar::after {
  content: '';
  display: block;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #7F77DD, #5DCAA5);
  border-radius: 2px;
  animation: stat-fill 2.2s ease-out forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes stat-fill {
  to {
    width: 100%;
  }
}
```

---

### 5. 3D BUILDING VISUALIZATION

```html
<!-- Building section with 3D canvas -->
<section class="particle-container building-canvas" data-scroll-animate>
  <canvas id="building-canvas"></canvas>
  
  <!-- Building explanation text (left side) -->
  <div class="building-content">
    <h2>The Building Metaphor</h2>
    <p>Think of Alumnest as a single digital building...</p>
    
    <!-- Section descriptions -->
    <div class="building-section">
      <h3>The Floors — Geography</h3>
      <p>Each floor represents a city...</p>
    </div>
    
    <div class="building-section">
      <h3>The Flats — Institutions</h3>
      <p>Each flat is an alumni community...</p>
    </div>
    
    <div class="building-section">
      <h3>The Lobby — Cross-Institution</h3>
      <p>The central lobby is where B2B happens...</p>
    </div>
  </div>
</section>
```

**Cursor Effect:** Teal ring + orbiting dots
**CSS to add:**
```css
.building-canvas {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  min-height: 120vh;
}

#building-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.building-content {
  position: relative;
  z-index: 10;
  color: white;
}

.building-content h2 {
  font-size: 48px;
  margin-bottom: 1.5rem;
}

.building-section {
  margin-bottom: 2rem;
  padding-left: 2rem;
  border-left: 2px solid #7F77DD;
}

.building-section h3 {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.building-section p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .building-canvas {
    grid-template-columns: 1fr;
  }
}
```

---

### 6. INDIA MAP WITH CITY NODES

```html
<!-- India map section -->
<section class="particle-container map-canvas" data-scroll-animate>
  <!-- SVG map container -->
  <div id="india-map-container">
    <svg id="india-map" viewBox="0 0 800 1000"></svg>
  </div>
  
  <!-- Map content/legend -->
  <div class="map-content">
    <h2>Expanding Across India</h2>
    <p>Phase 1 focus cities with active alumni networks</p>
    
    <div class="legend">
      <div class="legend-item">
        <span class="legend-dot active"></span>
        <span>Active City</span>
      </div>
      <div class="legend-item">
        <span class="legend-dot coming"></span>
        <span>Coming Soon</span>
      </div>
    </div>
  </div>
</section>
```

**Cursor Effect:** Teal ring + orbiting dots
**CSS to add:**
```css
.map-canvas {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
}

#india-map-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}

#india-map {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(127, 119, 221, 0.2));
}

.map-content {
  color: white;
}

.map-content h2 {
  font-size: 36px;
  margin-bottom: 1rem;
}

.legend {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: radar-ping 2s infinite;
}

.legend-dot.active {
  background: #7F77DD;
}

.legend-dot.coming {
  background: rgba(255, 255, 255, 0.3);
}

@keyframes radar-ping {
  0% {
    box-shadow: 0 0 0 0 rgba(127, 119, 221, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(127, 119, 221, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(127, 119, 221, 0);
  }
}
```

---

### 7. GENERIC MAGNETIC ELEMENT

```html
<!-- Any interactive element can be magnetic -->
<div data-magnetic class="interactive-box">
  Hover me — I'll react to cursor position
</div>

<!-- Works with multiple types -->
<button data-magnetic class="interactive-button">Click me</button>
<div data-magnetic class="interactive-card">Card content</div>
```

**Cursor Effect:** Same as team cards (amber ring)

---

### 8. FOOTER WITH CTA

```html
<footer data-theme="dark">
  <div class="footer-content">
    <h2>Join the Tribe</h2>
    <p>Ready to reconnect and grow with your alumni network?</p>
    
    <button class="btn-cta" data-cta>Request Early Access</button>
    
    <p class="footer-note">alumnest.co &nbsp;|&nbsp; For the Tribe</p>
  </div>
</footer>
```

**CSS to add:**
```css
footer {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
}

footer h2 {
  font-size: 48px;
  margin-bottom: 1rem;
}

footer p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.footer-note {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2rem;
}
```

---

## QUICK CLASS/DATA ATTRIBUTE SUMMARY

| Element | Class | Data Attribute | Cursor Effect |
|---------|-------|----------------|----------------|
| CTA Button | `.btn-cta` | `data-cta` | Purple ring + dot disappears |
| Team Card | `.team-card` | `data-magnetic` | Amber ring + orbit indicator |
| Canvas Section | `.hero-canvas` / `.stats-canvas` | `data-scroll-animate` | Teal ring + orbiting dots |
| Building | `.building-canvas` | `data-scroll-animate` | Teal ring |
| Map | `.map-canvas` | `data-scroll-animate` | Teal ring |
| Generic | - | `data-magnetic` | Amber ring |
| Any Text | - | - | Default white ring |

---

## COPY-PASTE CHECKLIST

Before implementing Antigravity prompts, verify all these are in place:

```html
<!-- 1. Global CSS imported -->
<link rel="stylesheet" href="/styles/globals.css">

<!-- 2. Custom cursor in app -->
<CustomCursor />

<!-- 3. CTA Buttons have class -->
<button class="btn-cta" data-cta>Text</button>

<!-- 4. Team cards have class -->
<div class="team-card" data-magnetic>Content</div>

<!-- 5. Canvas sections have class -->
<section class="particle-bg hero-canvas">Canvas</section>

<!-- 6. Optional: Scroll animate markers -->
<section data-scroll-animate>Content</section>
```

Once all 6 are in place, you're ready for Antigravity prompts! ✨
