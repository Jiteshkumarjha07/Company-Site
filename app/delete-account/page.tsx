import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { DeleteAccountForm } from '@/components/delete-account-form'

export const metadata: Metadata = {
  title: 'Delete Your Account | Alumnest',
  description:
    'Request permanent deletion of your Alumnest account and all associated personal data, in accordance with the Digital Personal Data Protection Act, 2023.',
}

const consequences = [
  'Your profile, institutional and academic data, professional data, and account credentials are permanently deleted from our servers;',
  'All content you have posted — community posts, comments, reactions, and updates — is permanently removed;',
  'Your private messages, mentorship records, referrals, and connection history are permanently deleted;',
  'Your identity verification documents are deleted in accordance with the retention schedule in our Privacy Policy;',
  'Your name and profile are removed from all alumni directories and search indices;',
  'This action cannot be undone — rejoining requires registering and completing identity verification again.',
]

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="Account"
          title="Delete Your Account"
          intro="You may request permanent deletion of your Alumnest account and all associated data at any time. Submit the form below and our team will verify your identity and process the request within thirty (30) days, in accordance with the Digital Personal Data Protection Act, 2023."
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
                What Happens When You Delete Your Account
              </h2>
              <ul className="mt-6 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground marker:text-foreground/40">
                {consequences.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 border-l-2 border-foreground/30 bg-foreground/[0.03] px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                Note: Uninstalling the Alumnest app does not delete your account or your data.
                To permanently erase your data, you must submit a deletion request here or
                delete your account from within the app.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">02</span>
                Submit Your Request
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Use the email address registered with your Alumnest account so we can locate and
                verify it. We may contact you at that address to confirm your identity before
                processing the deletion.
              </p>
              <div className="mt-8">
                <DeleteAccountForm />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                <span className="mr-3 font-mono text-base text-muted-foreground md:text-lg">03</span>
                Prefer Email?
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                You may also send your deletion request directly to{' '}
                <a
                  href="mailto:alumnest.pvt@gmail.com?subject=Account%20Deletion%20Request"
                  className="text-foreground underline underline-offset-4 hover:text-foreground/80"
                >
                  alumnest.pvt@gmail.com
                </a>{' '}
                with the subject line &lsquo;Account Deletion Request&rsquo;, including your full
                name and registered email address. For questions about how your data is handled,
                see our{' '}
                <a href="/privacy-policy" className="text-foreground underline underline-offset-4 hover:text-foreground/80">
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
