import { ScrollReveal } from '@/components/scroll-reveal'

const points = [
  {
    title: 'Batches drift apart',
    label:
      'A graduating batch stays loosely connected through a WhatsApp group that thins out within a couple of years.',
  },
  {
    title: 'Institutions lose the channel',
    label:
      'The institution has no structured, lasting channel back to the alumni who could mentor students, refer opportunities, or contribute back.',
  },
  {
    title: 'Existing tools skip Bharat',
    label:
      'Most alumni platforms are built for large, well-resourced institutions. Tier 2/3 colleges and K-12 schools are left without a purpose-built option.',
  },
]

export function ProblemSolution() {
  return (
    <section id="product" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <ScrollReveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            The problem
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Outside India&apos;s most prominent institutions, alumni engagement is largely
            informal.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex h-full flex-col justify-between gap-10">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              That&apos;s a missed opportunity on both sides. Institutions lose access to a
              network of alumni who could give back; alumni lose an easy way to stay
              meaningfully connected to the place and people that shaped their early
              years. Alumnest fixes this with a verified, branded space for every
              institution — where identity is confirmed against institutional records.
            </p>
            <ul className="grid gap-6 sm:grid-cols-3">
              {points.map((point) => (
                <li key={point.title} className="border-l-2 border-primary pl-4">
                  <h3 className="font-bold leading-snug text-foreground">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
