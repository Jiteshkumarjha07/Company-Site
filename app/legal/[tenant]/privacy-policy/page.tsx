import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTenant } from '@/lib/legal/tenants'
import { LegalContent } from '@/components/legal-content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tenant: string }>
}): Promise<Metadata> {
  const { tenant: slug } = await params
  const tenant = getTenant(slug)
  if (!tenant) return {}
  return {
    title: `Privacy Policy | ${tenant.appName}`,
    description: `How ${tenant.companyLegalName} collects, uses, stores, and protects personal data for the ${tenant.appName} app.`,
  }
}

export default async function TenantPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ tenant: string }>
}) {
  const { tenant: slug } = await params
  const tenant = getTenant(slug)
  if (!tenant) notFound()

  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Effective Date: {tenant.effectiveDate} &middot; Version {tenant.privacyVersion}
      </p>
      <div className="mt-10">
        <LegalContent
          sections={tenant.privacySections}
          closing={
            <p>
              This Privacy Policy is effective as of {tenant.effectiveDate} and is the complete
              and authoritative statement of {tenant.companyLegalName}&rsquo;s data protection
              practices for the {tenant.appName} app. Questions or requests:{' '}
              <a href={`mailto:${tenant.grievanceEmail ?? tenant.supportEmail}`} className="underline underline-offset-4">
                {tenant.grievanceEmail ?? tenant.supportEmail}
              </a>
              .
            </p>
          }
        />
      </div>
    </article>
  )
}
