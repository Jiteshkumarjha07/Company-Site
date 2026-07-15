'use client'

import { SectionLabel } from '@/components/motion/section-label'
import { LineReveal } from '@/components/motion/line-reveal'
import { TypeText } from '@/components/motion/type-text'

const stats = [
  { main: '45,473', sub: 'Colleges nationwide \u2014 the overwhelming majority far outside the institutions with dedicated alumni offices' },
  { main: '1,168', sub: 'Universities nationwide across India' },
  { main: '~14.7L', sub: 'Schools nationwide \u2014 a segment existing alumni platforms have almost entirely ignored' },
  { main: '43.3M', sub: 'Higher-education students currently enrolled in India' },
]

export function ImpactStats() {
  return (
    <section id="market" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel sub="A very large, very underserved market">Market</SectionLabel>
        <ul className="mt-12">
          {stats.map((stat, i) => (
            <li
              key={stat.main}
              className="flex flex-col gap-3 border-t border-border py-8 last:border-b md:flex-row md:items-baseline md:gap-12 md:py-10"
            >
              <span className="shrink-0 text-5xl font-bold tracking-tight text-foreground md:w-64 md:text-7xl">
                <LineReveal paddingBottom="0.06em" delay={i * 0.05}>
                  {stat.main}
                </LineReveal>
              </span>
              <span className="max-w-md leading-relaxed text-muted-foreground">
                <TypeText duration={0.8} delay={0.15}>
                  {stat.sub}
                </TypeText>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          Sources: All India Survey on Higher Education (AISHE) 2021-22 and Report on
          Unified District Information System for Education Plus (UDISE+) 2024-25, both
          Ministry of Education, Government of India.
        </p>
      </div>
    </section>
  )
}
