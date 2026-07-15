import {
  ShieldCheck,
  Landmark,
  Smartphone,
  Lock,
  Cloud,
  Store,
} from 'lucide-react'
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/scroll-reveal'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Directories',
    description:
      'Alumni identity is confirmed against institutional records, so every profile on the network is a real, verified graduate rather than a self-reported claim.',
    large: true,
  },
  {
    icon: Landmark,
    title: 'Institution-Branded Spaces',
    description:
      'Each partner institution gets its own branded community space for alumni and current students to connect.',
    large: false,
  },
  {
    icon: Smartphone,
    title: 'Native Mobile Apps',
    description:
      'Built as native iOS and Android experiences, not a mobile-only website — currently under review by the App Store and Google Play.',
    large: false,
  },
  {
    icon: Lock,
    title: 'Privacy by Design',
    description:
      'Data handling built with the Digital Personal Data Protection (DPDP) Act, 2023 in mind, governed by a dedicated privacy policy.',
    large: false,
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    description:
      'Built to scale as more institutions and alumni join, without needing to be rebuilt at each stage of growth.',
    large: false,
  },
  {
    icon: Store,
    title: 'Verification as a Security Layer',
    description:
      'Because membership is tied to a real institutional identity rather than an open sign-up, Alumnest avoids the anonymous-account problem that creates trust and safety issues on open social platforms.',
    large: true,
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            A verified network, built around trust
          </h2>
        </ScrollReveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem
              key={feature.title}
              className={cn(feature.large && 'md:col-span-2')}
            >
              <div className="group h-full rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
