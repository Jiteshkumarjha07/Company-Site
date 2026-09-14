import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTenant, getAllTenantSlugs } from '@/lib/legal/tenants'
import { EntityBanner } from '@/components/legal/entity-banner'

export function generateStaticParams() {
  return getAllTenantSlugs().map((tenant) => ({ tenant }))
}

// Applies to every page under /legal/[tenant]/*. Keeps these pages out of search
// results and off the sitemap without excluding them from direct-link access —
// Play's reviewer opens the URL directly, not via search.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function TenantLegalLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ tenant: string }>
}) {
  const { tenant: slug } = await params
  const tenant = getTenant(slug)
  if (!tenant) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <EntityBanner tenant={tenant} />
      <header className="border-b border-foreground/10 px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4">
          <span className="font-semibold tracking-tight">{tenant.appName}</span>
          <nav aria-label="Legal pages" className="flex gap-6 text-sm">
            <Link
              href={`/legal/${tenant.slug}/privacy-policy`}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href={`/legal/${tenant.slug}/account-deletion`}
              className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Account &amp; Data Deletion
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
      <footer className="border-t border-foreground/10 px-6 py-8 text-sm text-muted-foreground">
        <div className="mx-auto max-w-3xl">
          <p>
            {tenant.companyLegalName} &middot; {tenant.registeredAddress}
          </p>
          <p className="mt-1">
            Contact:{' '}
            <a href={`mailto:${tenant.supportEmail}`} className="underline underline-offset-4">
              {tenant.supportEmail}
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
