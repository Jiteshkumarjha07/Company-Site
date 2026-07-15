'use client'

import Image from 'next/image'
import { SectionLabel } from '@/components/motion/section-label'
import { DrawFrame } from '@/components/motion/draw-frame'
import { TypeText } from '@/components/motion/type-text'

const roadmap = [
  {
    step: '01',
    category: 'Expand',
    title: 'Expand the pilot model to additional Tier 2/3 colleges and K-12 schools',
    image: '/images/article-reunion.png',
    alt: 'A large college gathering on a campus lawn at dusk',
  },
  {
    step: '02',
    category: 'The Lobby',
    title: 'Grow The Lobby from a services-first MVP into a broader alumni marketplace',
    image: '/images/article-networking.png',
    alt: 'Professionals networking at an alumni meetup event',
  },
  {
    step: '03',
    category: 'Refine',
    title: 'Keep refining onboarding and verification based on real institutional feedback',
    image: '/images/article-mentorship.png',
    alt: 'Two professionals in conversation over coffee',
  },
]

export function ArticlesSection() {
  return (
    <section id="roadmap" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel sub="From first pilot to full rollout">What&apos;s Next</SectionLabel>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Our first pilot is the real-world test of the verified-alumni model —
          validating onboarding, verification, and day-to-day engagement with a live
          institutional partner before expanding further.
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {roadmap.map((item, i) => (
            <div key={item.step} className="group flex flex-col gap-4">
              <DrawFrame delay={i * 0.12}>
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </DrawFrame>
              <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span>{item.step}</span>
                <span aria-hidden="true">/</span>
                <span className="uppercase tracking-wider">{item.category}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-foreground">
                <TypeText duration={0.7} delay={0.2 + i * 0.1}>
                  {item.title}
                </TypeText>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
