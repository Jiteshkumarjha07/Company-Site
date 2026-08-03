import type { ReactNode } from 'react'

export type LegalBlock =
  | { type: 'p'; text: ReactNode }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: ReactNode[] }
  | { type: 'ol'; items: ReactNode[] }
  | { type: 'note'; text: ReactNode }
  | { type: 'dl'; items: { term: string; def: ReactNode }[] }

export type LegalSection = {
  title: string
  blocks: LegalBlock[]
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="leading-relaxed text-muted-foreground">{block.text}</p>
    case 'h3':
      return (
        <h3 className="pt-2 text-lg font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      )
    case 'ul':
      return (
        <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-[lower-alpha] space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )
    case 'note':
      return (
        <div className="border-l-2 border-foreground/30 bg-foreground/[0.03] px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          {block.text}
        </div>
      )
    case 'dl':
      return (
        <dl className="space-y-4">
          {block.items.map((item) => (
            <div key={item.term}>
              <dt className="font-semibold text-foreground">{item.term}</dt>
              <dd className="mt-1 leading-relaxed text-muted-foreground">{item.def}</dd>
            </div>
          ))}
        </dl>
      )
  }
}

export function LegalContent({
  sections,
  closing,
}: {
  sections: LegalSection[]
  closing?: ReactNode
}) {
  return (
    <div className="relative overflow-hidden px-6 pb-24 md:pb-32">
      {/* Fade into the pitch-black footer, matching the other pages */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"
      />
      <div className="relative mx-auto max-w-3xl">
        {/* Table of contents */}
        <nav aria-label="Table of contents" className="mb-16 border border-foreground/10 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Table of Contents
          </p>
          <ol className="mt-4 columns-1 gap-x-10 space-y-1.5 text-sm sm:columns-2">
            {sections.map((section, i) => (
              <li key={section.title}>
                <a
                  href={`#section-${i + 1}`}
                  className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {i + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col gap-16">
          {sections.map((section, i) => (
            <section key={section.title} id={`section-${i + 1}`} className="scroll-mt-28">
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {closing ? (
          <div className="mt-20 border-t border-foreground/10 pt-8 text-sm leading-relaxed text-muted-foreground">
            {closing}
          </div>
        ) : null}
      </div>
    </div>
  )
}
