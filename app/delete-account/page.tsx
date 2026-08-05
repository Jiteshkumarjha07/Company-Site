import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'

export const metadata: Metadata = {
  title: 'Delete Your Account | Alumnest',
  description:
    'Request permanent deletion of your Alumnest account and all associated personal data, in accordance with the Digital Personal Data Protection Act, 2023.',
}

const REQUEST_EMAIL = 'alumnest.pvt@gmail.com'

const MAILTO_HREF = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
  'Account Deletion Request',
)}&body=${encodeURIComponent(
  `Hello Alumnest Team,

I request the permanent deletion of my Alumnest account and all associated data.

Full name: [your full name]
Registered email: [the email linked to your Alumnest account]

I understand this action is permanent and irreversible.`,
)}`

const deleted = [
  'Your profile, institutional and academic data, professional data, and account credentials;',
  'All content you have posted — community posts, comments, reactions, and updates;',
  'Your private messages, mentorship records, referrals, and connection history;',
  'Your identity verification documents;',
  'Your name and profile from all alumni directories and search indices.',
]

const retained = [
  'Event and payment transaction records are retained for seven (7) years, as required by Indian financial record-keeping laws;',
  'Certain account data may be retained for up to twenty-four (24) months after deletion for dispute resolution and fraud prevention, as detailed in our Privacy Policy;',
  'Data may be retained longer where required to comply with a legal obligation.',
]

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="Account"
          title="Delete Your Account"
          intro="You may request permanent deletion of your Alumnest account and all associated data at any time. Send us a deletion request by email and our team will verify your identity and process it within thirty (30) days, in accordance with the Digital Personal Data Protection Act, 2023."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Delete Account' }]}
        />

        <div className="relative overflow-hidden px-6 pb-24 md:pb-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col gap-16">
            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">01</span>
                How to Request Deletion
              </h2>
              <ol className="mt-6 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                <li>
                  Send an email to{' '}
                  <a
                    href={MAILTO_HREF}
                    className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                  >
                    {REQUEST_EMAIL}
                  </a>{' '}
                  with the subject line &lsquo;Account Deletion Request&rsquo; — the button below
                  opens a pre-filled email for you;
                </li>
                <li>
                  Send it from, or mention, the email address registered with your Alumnest
                  account, along with your full name, so we can locate and verify your account;
                </li>
                <li>
                  We will confirm your identity and permanently delete your account and data
                  within thirty (30) days, and send you a confirmation once complete.
                </li>
              </ol>
              <a
                href={MAILTO_HREF}
                className="mt-8 inline-flex items-center justify-center gap-3 border border-foreground/60 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                Request Account Deletion
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                You can also delete your account directly inside the Alumnest app from Account
                Settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">02</span>
                Data That Is Permanently Deleted
              </h2>
              <ul className="mt-6 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                {deleted.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 border-l-2 border-foreground/30 bg-foreground/[0.03] px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                Deletion is permanent and irreversible. Rejoining Alumnest afterwards requires
                registering as a new user and completing identity verification again. Note that
                simply uninstalling the app does not delete your account or your data.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">03</span>
                Data That May Be Retained
              </h2>
              <ul className="mt-6 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                {retained.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Full retention schedules are set out in our{' '}
                <a
                  href="/privacy-policy"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer pageLink={{ label: 'Next Page [ Privacy Policy ]', href: '/privacy-policy' }} />
    </>
  )
}
