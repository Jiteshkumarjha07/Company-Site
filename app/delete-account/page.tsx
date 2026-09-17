import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { CoveredAppsNotice } from '@/components/covered-apps-notice'
import { COVERED_APPS } from '@/lib/covered-apps'

export const metadata: Metadata = {
  title: 'Delete Your Account | Alumnest',
  description:
    'Request permanent deletion of your Alumnest account, or of specific data within it, in accordance with the Digital Personal Data Protection Act, 2023.',
}

const REQUEST_EMAIL = 'alumnest.pvt@gmail.com'
const IN_APP_PATH = 'Settings > Account > Delete Account'

const FULL_DELETION_MAILTO = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
  'Account Deletion Request',
)}&body=${encodeURIComponent(
  `Hello Alumnest Team,

I request the permanent deletion of my Alumnest account and all associated data.

Full name: [your full name]
Registered email: [the email linked to your Alumnest account]

I understand this action is permanent and irreversible.`,
)}`

const PARTIAL_DELETION_MAILTO = `mailto:${REQUEST_EMAIL}?subject=${encodeURIComponent(
  'Partial Data Deletion Request',
)}&body=${encodeURIComponent(
  `Hello Alumnest Team,

I request deletion of specific data from my Alumnest account, without deleting the account itself.

Full name: [your full name]
Registered email: [the email linked to your Alumnest account]
Data to delete: [e.g. identity verification documents, mentorship history, career data — see the list on the Delete Account page]`,
)}`

const partialDeletionCategories = [
  'Profile photo and identity verification documents',
  'Professional and career data',
  'Mentorship session history and feedback',
  'Private messages',
  'Event registration and RSVP history',
]

type RetentionRow = {
  category: string
  deletedImmediately: boolean
  retentionWindow?: string
  reason?: string
}

const retentionSchedule: RetentionRow[] = [
  {
    category: 'Public profile & directory listing',
    deletedImmediately: true,
  },
  {
    category: 'Community posts, comments, and reactions',
    deletedImmediately: true,
  },
  {
    category: 'Private in-app messages',
    deletedImmediately: false,
    retentionWindow: '30 days',
    reason: 'Short window to resolve any in-progress abuse or safety review before purge.',
  },
  {
    category: 'Account & profile data (name, contact, academic info)',
    deletedImmediately: false,
    retentionWindow: '24 months',
    reason: 'Dispute resolution and fraud prevention (DPDP Act, 2023).',
  },
  {
    category: 'Identity verification documents',
    deletedImmediately: false,
    retentionWindow: '12 months',
    reason: 'Fraud prevention and audit trail (DPDP Act, 2023).',
  },
  {
    category: 'Mentorship & interaction records',
    deletedImmediately: false,
    retentionWindow: '24 months',
    reason: 'Quality assurance and dispute resolution.',
  },
  {
    category: 'Professional / career data',
    deletedImmediately: false,
    retentionWindow: '24 months',
    reason: 'Anonymised alumni outcome analytics and institutional reporting.',
  },
  {
    category: 'Event registration & payment records',
    deletedImmediately: false,
    retentionWindow: '7 years',
    reason: 'Indian financial record-keeping requirements.',
  },
  {
    category: 'Technical & device usage data',
    deletedImmediately: false,
    retentionWindow: '24 months from collection',
    reason: 'Security monitoring and fraud prevention.',
  },
]

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <CoveredAppsNotice apps={COVERED_APPS} />
        <SubpageHeader
          label="Account"
          title="Delete Your Account"
          intro="You can permanently delete your entire Alumnest account, or request deletion of specific data within it, whether or not you still have the app installed. Verified requests are completed within thirty (30) days, in accordance with the Digital Personal Data Protection Act, 2023."
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
                In the App
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Open the app and go to{' '}
                <span className="font-medium text-foreground">{IN_APP_PATH}</span>. This deletes
                your account immediately from the app itself, no email required.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">02</span>
                Full Account Deletion (Without the App)
              </h2>
              <ol className="mt-6 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                <li>
                  Send an email to{' '}
                  <a
                    href={FULL_DELETION_MAILTO}
                    className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                  >
                    {REQUEST_EMAIL}
                  </a>{' '}
                  with the subject line &lsquo;Account Deletion Request&rsquo; — the button below
                  opens a pre-filled email for you;
                </li>
                <li>
                  Send it from, or mention, the email address registered with your account, along
                  with your full name, so we can locate and verify your account;
                </li>
                <li>
                  We will confirm your identity and permanently delete your account and data
                  within thirty (30) days, and send you a confirmation once complete.
                </li>
              </ol>
              <a
                href={FULL_DELETION_MAILTO}
                className="mt-8 inline-flex items-center justify-center gap-3 border border-foreground/60 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                Request Account Deletion
              </a>
              <div className="mt-6 border-l-2 border-foreground/30 bg-foreground/[0.03] px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                Deletion is permanent and irreversible. Rejoining afterwards requires registering
                as a new user and completing identity verification again. Note that simply
                uninstalling the app does not delete your account or your data — you must use one
                of the two methods above.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">03</span>
                Partial Data Deletion (Without the App)
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                You don&rsquo;t have to delete your whole account to remove specific data. Your
                account stays active and usable; only the data you select is removed. This
                covers:
              </p>
              <ul className="mt-6 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                {partialDeletionCategories.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ol className="mt-6 list-decimal space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                <li>
                  Email{' '}
                  <a
                    href={PARTIAL_DELETION_MAILTO}
                    className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                  >
                    {REQUEST_EMAIL}
                  </a>{' '}
                  with the subject line &lsquo;Partial Data Deletion Request&rsquo;, naming which
                  data above you want removed;
                </li>
                <li>
                  We verify your identity the same way as a full account deletion request, then
                  remove only the specified data.
                </li>
              </ol>
              <a
                href={PARTIAL_DELETION_MAILTO}
                className="mt-8 inline-flex items-center justify-center gap-3 border border-foreground/60 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Mail className="size-4" aria-hidden="true" />
                Request Partial Data Deletion
              </a>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">04</span>
                What Gets Deleted, and What We Retain
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Some data is purged the moment a deletion request is processed. Other data is
                retained briefly afterward, only where we have a legal basis to do so — never
                longer than necessary.
              </p>
              <div className="mt-6 overflow-x-auto border border-foreground/10">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
                      <th className="px-4 py-3 font-semibold text-foreground">Data category</th>
                      <th className="px-4 py-3 font-semibold text-foreground">
                        Deleted immediately?
                      </th>
                      <th className="px-4 py-3 font-semibold text-foreground">
                        Retention period
                      </th>
                      <th className="px-4 py-3 font-semibold text-foreground">
                        Reason retained
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionSchedule.map((row) => (
                      <tr key={row.category} className="border-b border-foreground/10 last:border-b-0">
                        <td className="px-4 py-3 text-foreground">{row.category}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.deletedImmediately ? 'Yes' : 'No'}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.retentionWindow ?? '—'}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{row.reason ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Full retention schedules are set out in Section 10 of our{' '}
                <a
                  href="/privacy-policy"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">05</span>
                How Long It Takes
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                In-app deletion takes effect immediately. Email requests — for either full account
                deletion or partial data deletion — are verified and completed within thirty (30)
                days of receipt, and we send a confirmation once processing is done. Data listed
                as retained above follows the schedule in the table regardless of how the request
                was made.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer pageLink={{ label: 'Next Page [ Privacy Policy ]', href: '/privacy-policy' }} />
    </>
  )
}
