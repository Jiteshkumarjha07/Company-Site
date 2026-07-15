import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/scroll-reveal'

const team = [
  {
    name: 'Jitesh Jha',
    role: 'CEO',
    bio: 'Leads tech and funding.',
    initials: 'JJ',
  },
  {
    name: 'Aditya Vinod',
    role: 'COO',
    bio: 'Leads design and legal.',
    initials: 'AV',
  },
  {
    name: 'Nishant Raj',
    role: 'CTO',
    bio: 'Leads tech.',
    initials: 'NR',
  },
  {
    name: 'Janmejay',
    role: 'Founding Member',
    bio: 'Tech.',
    initials: 'J',
  },
]

export function Testimonials() {
  return (
    <section id="team" className="bg-transparent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Founding team
          </p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            The people building Alumnest
          </h2>
        </ScrollReveal>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span
                  aria-hidden="true"
                  className="mb-6 flex size-14 items-center justify-center rounded-full border border-border bg-secondary text-lg font-bold text-secondary-foreground"
                >
                  {member.initials}
                </span>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
