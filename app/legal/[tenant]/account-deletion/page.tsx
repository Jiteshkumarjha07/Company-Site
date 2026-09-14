import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTenant } from '@/lib/legal/tenants'
import { RetentionTable } from '@/components/legal/retention-table'
import { DeletionRequestForm } from '@/components/legal/deletion-request-form'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}): Promise<Metadata> {
  const { tenant: slug } = await params
  const tenant = getTenant(slug)
  if (!tenant) return {}
  return {
    title: `Delete Your Account | ${tenant.appName}`,
    description: `Request deletion of your ${tenant.appName} account, or of specific data within it, with or without the app installed.`,
  }
}

function mailtoHref(tenant: { supportEmail: string; appName: string }, subject: string, bodyLines: string[]) {
  return `mailto:${tenant.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join('\n'),
  )}`
}

export default async function TenantAccountDeletionPage({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const { tenant: slug } = await params
  const tenant = getTenant(slug)
  if (!tenant) notFound()

  const fullDeletionMailto = mailtoHref(tenant, 'Account Deletion Request', [
    `Hello ${tenant.companyName} Team,`,
    '',
    `I request the permanent deletion of my ${tenant.appName} account and all associated data.`,
    '',
    'Full name: [your full name]',
    'Registered email: [the email linked to your account]',
    '',
    'I understand this action is permanent and irreversible.',
  ])

  const partialDeletionMailto = mailtoHref(tenant, 'Partial Data Deletion Request', [
    `Hello ${tenant.companyName} Team,`,
    '',
    `I request deletion of specific data from my ${tenant.appName} account, without deleting the account itself.`,
    '',
    'Full name: [your full name]',
    'Registered email: [the email linked to your account]',
    'Data to delete: [describe the data categories]',
  ])

  return (
    <article className="flex flex-col gap-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Delete Your Account or Your Data
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          You can delete your entire {tenant.appName} account, or request deletion of specific
          data within it, whether or not you still have the app installed. {tenant.deletionTimeline}
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          <span className="mr-3 font-mono text-base text-muted-foreground">01</span>
          In the App
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Open {tenant.appName} and go to{' '}
          <span className="font-medium text-foreground">{tenant.inAppDeletionPath}</span>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          <span className="mr-3 font-mono text-base text-muted-foreground">02</span>
          Full Account Deletion (Without the App)
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Submit the form below and we will verify and delete your account and all associated
          data. {tenant.deletionTimeline}
        </p>
        <div className="mt-6">
          <DeletionRequestForm tenant={tenant} variant="full" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Form not working? Email{' '}
          <a href={fullDeletionMailto} className="text-foreground underline underline-offset-4">
            {tenant.supportEmail}
          </a>{' '}
          with the subject &lsquo;Account Deletion Request&rsquo; instead.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          <span className="mr-3 font-mono text-base text-muted-foreground">03</span>
          Partial Data Deletion (Without the App)
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          To delete specific data without closing your account, select what you&rsquo;d like
          removed below. Your account stays active; deleted items cannot be recovered.
        </p>
        <div className="mt-6">
          <DeletionRequestForm tenant={tenant} variant="partial" />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Form not working? Email{' '}
          <a href={partialDeletionMailto} className="text-foreground underline underline-offset-4">
            {tenant.supportEmail}
          </a>{' '}
          with the subject &lsquo;Partial Data Deletion Request&rsquo; instead.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          <span className="mr-3 font-mono text-base text-muted-foreground">04</span>
          What Gets Deleted, and What We Keep
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Some data is purged the moment your request is processed. Other data is retained
          briefly afterward, only where we have a legal basis to do so.
        </p>
        <div className="mt-6">
          <RetentionTable rows={tenant.retentionSchedule} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          <span className="mr-3 font-mono text-base text-muted-foreground">05</span>
          How Long It Takes
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{tenant.deletionTimeline}</p>
      </section>
    </article>
  )
}
