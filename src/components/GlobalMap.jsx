import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cities = [
  { name: 'Jamshedpur', country: 'India (HQ)', cx: 739, cy: 185, primary: true },
  { name: 'New Delhi', country: 'India', cx: 714, cy: 170 },
  { name: 'Mumbai', country: 'India', cx: 700, cy: 198 },
  { name: 'Bangalore', country: 'India', cx: 715, cy: 215 },
  { name: 'Kolkata', country: 'India', cx: 748, cy: 185 },
  { name: 'Chennai', country: 'India', cx: 718, cy: 220 },
  { name: 'Singapore', country: 'Singapore', cx: 788, cy: 248 },
  { name: 'Dubai', country: 'UAE', cx: 654, cy: 180 },
  { name: 'London', country: 'United Kingdom', cx: 500, cy: 108 },
  { name: 'New York', country: 'United States', cx: 295, cy: 138 },
  { name: 'Sydney', country: 'Australia', cx: 878, cy: 345 },
  { name: 'Tokyo', country: 'Japan', cx: 888, cy: 152 },
];

// Simplified continent paths for equirectangular 1000×500 projection
const continentPaths = [
  // North America
  'M155,30 C178,22 212,24 242,38 C268,52 282,80 287,112 C292,140 285,168 268,184 C252,200 228,206 206,198 C184,190 166,174 154,154 C140,132 132,106 138,80 C144,54 152,36 155,30Z',
  // Greenland
  'M185,12 C198,7 214,9 218,18 C224,28 218,39 207,42 C195,45 182,38 180,27 C178,18 182,13 185,12Z',
  // South America
  'M215,194 C236,186 262,192 273,214 C284,236 282,268 272,298 C262,328 244,355 228,369 C212,382 196,380 185,364 C175,348 174,320 178,292 C182,264 195,240 210,220Z',
  // Europe
  'M447,55 C466,48 490,50 505,62 C516,72 514,88 502,96 C490,104 472,102 457,95 C444,87 441,73 447,55Z',
  // Scandinavia
  'M464,28 C477,22 492,26 498,38 C502,50 496,62 484,66 C472,70 462,62 460,50 C458,38 462,32 464,28Z',
  // Africa
  'M450,96 C474,89 502,92 520,110 C538,128 544,158 540,188 C536,218 522,247 504,265 C485,283 458,288 438,272 C418,255 410,226 414,196 C418,166 432,138 448,118Z',
  // Arabian Peninsula
  'M562,130 C582,120 612,124 635,140 C650,154 656,173 642,187 C628,200 606,200 586,188 C566,176 552,157 558,140Z',
  // Asia (main landmass)
  'M508,58 C555,47 620,44 682,52 C738,60 783,78 813,104 C832,122 836,150 820,170 C806,190 780,196 748,192 C716,188 688,172 660,158 C632,144 606,134 578,130 C550,126 522,128 506,112 C490,96 492,70 508,58Z',
  // India subcontinent
  'M694,172 C708,166 732,168 749,182 C758,192 755,214 740,228 C726,242 708,244 696,233 C682,222 678,204 686,190Z',
  // Southeast Asia peninsula
  'M751,158 C766,150 786,155 792,170 C798,186 788,202 772,207 C756,212 743,198 744,182C744,168 748,162 751,158Z',
  // Japan
  'M833,82 C845,76 857,82 859,96 C860,110 850,120 838,118 C825,116 820,104 824,92Z',
  // Australia
  'M780,284 C810,272 845,274 865,295 C883,316 882,346 864,364 C846,381 820,383 800,369 C780,354 768,328 773,304Z',
  // New Zealand
  'M887,333 C894,327 904,333 903,347 C901,361 892,365 884,358 C876,350 880,337 887,333Z',
];

export default function GlobalMap() {
  const [tooltip, setTooltip] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <section
      id="global"
      ref={ref}
      style={{
        background: 'var(--bg-secondary)',
        padding: '140px 56px',
        color: 'var(--text-secondary)',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '24px',
        marginBottom: '72px',
      }}>
        <div style={{ gridColumn: 'span 4' }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="label-text"
            style={{ color: 'rgba(253,252,249,0.3)' }}
          >
            / 03 — Global Reach
          </motion.span>
        </div>
        <div style={{ gridColumn: 'span 8' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--display-font)',
              fontSize: 'clamp(38px, 5.5vw, 76px)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1,
              color: '#fdfcf9',
              maxWidth: '600px',
            }}
          >
            Connecting alumni across 12+ cities worldwide.
          </motion.h2>
        </div>
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        style={{ position: 'relative', width: '100%' }}
      >
        <svg
          viewBox="0 0 1000 520"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines */}
          {[-60, -30, 0, 30, 60].map((lat) => {
            const y = (90 - lat) / 180 * 500;
            return (
              <line
                key={`lat${lat}`}
                x1="0" y1={y} x2="1000" y2={y}
                stroke="rgba(253,252,249,0.05)"
                strokeWidth="0.5"
              />
            );
          })}
          {[-120, -60, 0, 60, 120].map((lon) => {
            const x = (lon + 180) / 360 * 1000;
            return (
              <line
                key={`lon${lon}`}
                x1={x} y1="0" x2={x} y2="500"
                stroke="rgba(253,252,249,0.05)"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Equator */}
          <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(253,252,249,0.08)" strokeWidth="0.8" />

          {/* Continent fills */}
          {continentPaths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="rgba(253,252,249,0.07)"
              stroke="rgba(253,252,249,0.12)"
              strokeWidth="0.5"
            />
          ))}

          {/* Connection lines from HQ */}
          {cities.filter(c => !c.primary).map((city) => (
            <line
              key={`line-${city.name}`}
              x1={cities[0].cx}
              y1={cities[0].cy}
              x2={city.cx}
              y2={city.cy}
              stroke="rgba(253,252,249,0.06)"
              strokeWidth="0.6"
              strokeDasharray="4 4"
            />
          ))}

          {/* City dots */}
          {cities.map((city, i) => (
            <g
              key={city.name}
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => {
                const svgRect = e.currentTarget.closest('svg').getBoundingClientRect();
                const parentRect = e.currentTarget.closest('section').getBoundingClientRect();
                const viewBoxW = 1000;
                const viewBoxH = 520;
                const scaleX = svgRect.width / viewBoxW;
                const scaleY = svgRect.height / viewBoxH;
                setTooltip({
                  name: city.name,
                  country: city.country,
                  x: city.cx * scaleX + (svgRect.left - parentRect.left),
                  y: city.cy * scaleY + (svgRect.top - parentRect.top),
                });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Pulse ring */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r={city.primary ? 4 : 3}
                fill="none"
                stroke="rgba(253,252,249,0.6)"
                strokeWidth="0.8"
                className="map-dot-ring"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {/* Static dot */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r={city.primary ? 3.5 : 2.5}
                fill={city.primary ? '#fdfcf9' : 'rgba(253,252,249,0.7)'}
              />
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div style={{
            position: 'absolute',
            left: tooltip.x + 12,
            top: tooltip.y - 32,
            background: '#fdfcf9',
            color: '#0a0a0a',
            fontFamily: 'var(--nav-font)',
            fontSize: '8px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '6px 12px',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}>
            {tooltip.name} <span style={{ opacity: 0.5 }}>— {tooltip.country}</span>
          </div>
        )}
      </motion.div>

      {/* City list */}
      <div style={{
        marginTop: '56px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px 40px',
        borderTop: '1px solid rgba(253,252,249,0.08)',
        paddingTop: '36px',
      }}>
        {cities.map((city) => (
          <span
            key={city.name}
            className="label-text"
            style={{
              color: city.primary ? 'rgba(253,252,249,0.8)' : 'rgba(253,252,249,0.35)',
              fontSize: '9px',
            }}
          >
            {city.primary ? `★ ${city.name}` : city.name}
          </span>
        ))}
      </div>
    </section>
  );
}
