import type { TenantConfig } from '@/lib/legal/types'
import { loyolaPrivacySections, loyolaDataSafetyMapping } from '@/lib/legal/content/loyola/privacy-policy'
import { loyolaRetentionSchedule } from '@/lib/legal/content/loyola/account-deletion'

// TODO(jitesh): replace every "REPLACE_ME_*" placeholder below with the real value
// before resubmitting to Play — the reviewer checks these fields directly.
export const TENANTS = {
  loyola: {
    slug: 'loyola',

    appName: 'Loyola Alumni Association',
    developerName: 'Jitesh Kumar Jha',
    companyName: 'Alumnest',
    companyLegalName: 'Alumnest LLP',
    registeredAddress: '1, Jyoti Marg, Sonari, Jamshedpur 831011, Jharkhand, India',

    supportEmail: 'REPLACE_ME_SUPPORT_EMAIL',
    grievanceEmail: 'shourya.alumnest@gmail.com',
    appStoreUrl: 'REPLACE_ME_APP_STORE_URL',
    playStoreUrl: 'REPLACE_ME_PLAY_STORE_URL',

    effectiveDate: 'REPLACE_ME_EFFECTIVE_DATE',
    privacyVersion: '1.0',
    privacySections: loyolaPrivacySections,
    dataSafetyMapping: loyolaDataSafetyMapping,

    inAppDeletionPath: 'Settings > Account > Delete Account',
    deletionRequestEndpoint: 'REPLACE_ME_CLOUD_FUNCTION_URL',
    deletionTimeline: 'Within 30 days of a verified request.',
    retentionSchedule: loyolaRetentionSchedule,
    partialDeletionCategories: [
      'Profile photo and identity verification documents',
      'Career and professional details',
      'Mentorship session history',
      'Private messages',
      'Event and RSVP history',
    ],
  },
} as const satisfies Record<string, TenantConfig>

export type TenantSlug = keyof typeof TENANTS

export function getTenant(slug: string): TenantConfig | undefined {
  return TENANTS[slug as TenantSlug]
}

export function getAllTenantSlugs(): TenantSlug[] {
  return Object.keys(TENANTS) as TenantSlug[]
}
