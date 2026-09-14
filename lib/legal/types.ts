import type { LegalSection } from '@/components/legal-content'

export type { LegalSection }

/** One row of the "what happens to your data" retention table on the account-deletion page. */
export type RetentionRow = {
  dataCategory: string
  /** true = purged as part of the deletion job itself, with no separate retention window. */
  deletedImmediately: boolean
  /** Required when deletedImmediately is false. e.g. "7 years". */
  retentionPeriod?: string
  /** Required when deletedImmediately is false. Why we're still allowed to hold it. */
  legalBasis?: string
}

/** Maps one category of data the privacy policy discusses to a Play Data safety form category. */
export type DataSafetyMappingRow = {
  dataType: string
  playDataSafetyCategory: string
  collected: boolean
  shared: boolean
  purpose: string
}

export type TenantConfig = {
  /** URL segment: /legal/[slug]/... */
  slug: string

  // --- Entity identity (renders the required opening line on both pages) ---
  /** e.g. "Loyola Alumni Association" — the app as named in the Play/App Store listing. */
  appName: string
  /** Play Console "developer" account name, e.g. "Jitesh Kumar Jha". */
  developerName: string
  /** The operating company, e.g. "Alumnest". */
  companyName: string
  /** Full legal name of the operating company for contract/contact sections, e.g. "Alumnest LLP". */
  companyLegalName: string
  registeredAddress: string

  // --- Contact & store links ---
  supportEmail: string
  /** Defaults to supportEmail if omitted. */
  grievanceEmail?: string
  appStoreUrl: string
  playStoreUrl: string

  // --- Privacy policy page ---
  effectiveDate: string
  privacyVersion: string
  privacySections: LegalSection[]
  dataSafetyMapping: DataSafetyMappingRow[]

  // --- Account deletion page ---
  /** In-app navigation path shown to users, e.g. "Settings > Account > Delete Account". */
  inAppDeletionPath: string
  /**
   * HTTPS endpoint (Cloud Function) the web deletion forms POST to.
   * Must accept application/x-www-form-urlencoded POST bodies and respond with a
   * confirmation page — the <form> has no JS fallback, so this is a real page navigation.
   */
  deletionRequestEndpoint: string
  /** e.g. "Within 30 days of a verified request." */
  deletionTimeline: string
  retentionSchedule: RetentionRow[]
  /** Options offered on the partial-data-deletion form (Play treats this as a distinct URL/flow). */
  partialDeletionCategories: string[]
}
