'use client'

import { SectionLabel } from '@/components/motion/section-label'
import { LineReveal } from '@/components/motion/line-reveal'
import { TypeText } from '@/components/motion/type-text'

const tiers = [
  {
    tag: 'Free',
    heading: 'Every verified alumnus',
    desc: 'Browse the network, join the community, and access The Lobby at a basic level \u2014 free for every verified member.',
    status: null,
  },
  {
    tag: 'Pro',
    heading: 'Alumni offering mentorship or services',
    desc: 'Greater visibility and access within The Lobby for alumni actively offering mentorship or professional services to their network.',
    status: 'Coming soon',
  },
  {
    tag: 'Business',
    heading: 'Alumni-run businesses',
    desc: 'Reach a trusted, verified customer and talent base from your own institution\u2019s network with business listings inside The Lobby.',
    status: 'Coming soon',
  },
]

function TierItem({
  item,
  index,
}: {
  item: (typeof tiers)[number]
  index: number
}) {
  return (
    <li className="border-t border-border py-10 md:py-12">
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <div className="flex shrink-0 items-start gap-4 md:w-48">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
            {item.tag}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="flex max-w-2xl flex-wrap items-center gap-3 text-xl font-semibold leading-snug text-foreground md:text-2xl">
            <LineReveal paddingBottom="0.06em">{item.heading}</LineReveal>
            {item.status ? (
              <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                {item.status}
              </span>
            ) : null}
          </h3>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            <TypeText duration={0.8}>{item.desc}</TypeText>
          </p>
        </div>
      </div>
    </li>
  )
}

export function CaseStudiesSection() {
  return (
    <section id="lobby" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel sub="The alumni marketplace layer">The Lobby</SectionLabel>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          The Lobby turns a verified alumni base into a place where alumni can actually
          do business and exchange services with one another, not just reminisce.
          Because everyone is already verified through their institution, the trust
          problem that stalls most new marketplaces is solved before The Lobby even
          launches on a campus.
        </p>
        <ul className="mt-10">
          {tiers.map((item, i) => (
            <TierItem key={item.tag} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
