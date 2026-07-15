'use client'

import Link from 'next/link'
import { SectionLabel } from '@/components/motion/section-label'
import { TypeText } from '@/components/motion/type-text'
import { LineReveal } from '@/components/motion/line-reveal'

type Crumb = { label: string; href?: string }

type SubpageHeaderProps = {
  label: string
  title: string
  intro?: string
  crumbs: Crumb[]
}

export function SubpageHeader({ label, title, intro, crumbs }: SubpageHeaderProps) {
  return (
    <header className="px-6 pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-foreground">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          <LineReveal paddingBottom="0.08em">{title}</LineReveal>
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            <TypeText duration={1} delay={0.3}>
              {intro}
            </TypeText>
          </p>
        ) : null}
      </div>
    </header>
  )
}
