'use client'

import Image from 'next/image'
import { SectionLabel } from '@/components/motion/section-label'
import { LineReveal } from '@/components/motion/line-reveal'
import { TypeText } from '@/components/motion/type-text'
import { DrawFrame } from '@/components/motion/draw-frame'

const blocks = [
  {
    label: 'Vision',
    heading: 'Every graduate stays part of the story',
    desc: 'We believe an institution\u2019s greatest asset walks out the door every convocation. Alumnest exists to keep that door open \u2014 turning scattered graduates into a living, generous, lifelong community.',
    image: '/images/about-vision.png',
    alt: 'A graduate in silhouette looking over a city skyline at dawn',
  },
  {
    label: 'Team',
    heading: 'A small team that shipped before raising a rupee',
    desc: 'We build the product we wished our colleges had: verified, private, and designed for real relationships rather than vanity metrics \u2014 a full, working product delivered before any outside funding.',
    image: '/images/about-team.png',
    alt: 'A small startup team collaborating around a table in a studio office',
  },
  {
    label: 'Company',
    heading: 'A long-term partner to institutions',
    desc: 'Alumnest works with universities, colleges, and schools across India. We charge institutions, never alumni \u2014 so the community always stays free to join.',
    image: '/images/about-company.png',
    alt: 'Architectural detail of a modern university building facade',
  },
]

export function AboutContent() {
  return (
    <div className="relative overflow-hidden px-6 pb-24 md:pb-32">
      {/* Fade into the pitch-black footer, matching the home page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
        {blocks.map((block, i) => (
          <section key={block.label} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className={i % 2 === 1 ? 'md:order-2' : undefined}>
              <DrawFrame>
                <Image
                  src={block.image || "/placeholder.svg"}
                  alt={block.alt}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover"
                />
              </DrawFrame>
            </div>
            <div className="flex flex-col gap-6">
              <SectionLabel>{block.label}</SectionLabel>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
                <LineReveal paddingBottom="0.08em">{block.heading}</LineReveal>
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                <TypeText duration={0.9} delay={0.2}>
                  {block.desc}
                </TypeText>
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
