import type { TenantConfig } from '@/lib/legal/types'

/**
 * The line Play's reviewer is checking for: ties this URL to the entity named in the
 * store listing. Must render in the initial HTML body (not the footer) on every
 * tenant legal page — do not move this below the fold or behind client JS.
 */
export function EntityBanner({ tenant }: { tenant: TenantConfig }) {
  return (
    <p className="border-b border-foreground/10 bg-foreground/[0.03] px-6 py-4 text-sm leading-relaxed text-foreground">
      This page applies to the {tenant.appName} mobile app, published on Google Play and the App
      Store by {tenant.developerName}, operated by {tenant.companyName}.
    </p>
  )
}
