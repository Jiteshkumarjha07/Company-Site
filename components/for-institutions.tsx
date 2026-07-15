import { Database, Activity, HeartHandshake, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/scroll-reveal'

const valueProps = [
  {
    icon: Database,
    title: 'A verified, branded space',
    description:
      'Your institution gets its own branded community space where alumni identity is confirmed against your records.',
  },
  {
    icon: Activity,
    title: 'A lasting channel to alumni',
    description:
      'A structured, lasting channel back to the people who once studied with you — beyond WhatsApp groups that thin out.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship & giving back',
    description:
      'Reconnect with alumni who can mentor current students, refer opportunities, or contribute back in other ways.',
  },
  {
    icon: Megaphone,
    title: 'Built for your tier',
    description:
      'Purpose-built for Tier 2/3 colleges and K-12 schools — the institutions existing alumni platforms overlook.',
  },
]

const traction = [
  { value: 'In review', label: 'on the App Store and Google Play' },
  { value: 'Pilot', label: 'program underway with our first partner' },
  { value: 'DPDP', label: 'Act, 2023-minded data handling' },
]

export function ForInstitutions() {
  return (
    <section id="institutions" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            For institutions
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy-foreground md:text-5xl">
            Turn your alumni base into your institution&apos;s greatest asset
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Deliberately focused on the institutions existing alumni platforms overlook:
            Tier 2 and Tier 3 colleges, and K-12 schools — which make up the overwhelming
            majority of Indian institutions.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <StaggerItem key={prop.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40">
                <span className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <prop.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-bold text-navy-foreground">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-16 flex flex-col items-start justify-between gap-10 border-t border-navy-foreground/10 pt-12 md:flex-row md:items-center">
          <dl className="flex flex-wrap gap-10 md:gap-16">
            {traction.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-extrabold tracking-tight text-navy-foreground">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            size="lg"
            className="bg-primary text-primary-foreground transition-transform hover:scale-[1.03] hover:bg-primary/90"
          >
            Partner with Alumnest
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
