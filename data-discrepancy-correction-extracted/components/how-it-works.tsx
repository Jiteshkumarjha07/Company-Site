import { BadgeCheck, Users, TrendingUp } from 'lucide-react'
import { PhoneMockup } from '@/components/phone-mockup'
import { ScrollReveal } from '@/components/scroll-reveal'

const steps = [
  {
    icon: BadgeCheck,
    title: 'Verify',
    description:
      'An alumnus joins their institution\u2019s space on Alumnest and their identity is confirmed against institutional records.',
    image: '/images/app-profile.png',
    imageAlt: 'Alumnest verified alumni profile screen',
  },
  {
    icon: Users,
    title: 'Connect',
    description:
      'Once verified, they can find and connect with fellow alumni and current students inside their institution\u2019s branded space.',
    image: '/images/app-atlas.png',
    imageAlt: 'Alumnest Atlas showing alumni mapped by city and country',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Verified alumni can then step into The Lobby to offer mentorship, services, or business listings to a trusted network.',
    image: '/images/app-posts.png',
    imageAlt: 'Alumnest community posts feed screen',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 max-w-2xl md:mb-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Verify, connect, grow
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title}>
              <div
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <step.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Step {i + 1} of {steps.length}
                    </span>
                  </div>
                  <h3 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className="flex justify-center">
                  {/* Placeholder screenshot — replace with real Alumnest app screenshot */}
                  <PhoneMockup src={step.image} alt={step.imageAlt} className="w-52 md:w-60" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
