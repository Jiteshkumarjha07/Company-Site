import type { CoveredApp } from '@/lib/covered-apps'

/**
 * Plain, non-animated server component — deliberately not built on SubpageHeader's
 * TypeText/LineReveal. Play's validator reads raw response HTML; this must never
 * depend on client JS or scroll-triggered reveal to become visible text.
 */
export function CoveredAppsNotice({ apps }: { apps: CoveredApp[] }) {
  return (
    <div className="border-b border-foreground/10 bg-foreground/[0.03] px-6 py-5">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Apps covered by this policy
        </p>
        <ul className="mt-2 flex flex-col gap-1">
          {apps.map((app) => (
            <li key={app.packageId} className="text-sm leading-relaxed text-foreground">
              {app.name} ({app.packageId}) &mdash; published on Google Play by{' '}
              {app.developerName}, operated by {app.companyName}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
