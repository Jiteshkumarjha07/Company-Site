import type { LegalSection, DataSafetyMappingRow } from '@/lib/legal/types'

// TODO: full section content pending sign-off (see conversation) — ported from the
// existing Alumnest privacy policy with Loyola-specific facts substituted in.
export const loyolaPrivacySections: LegalSection[] = []

// TODO: one row per data type the policy above discusses, mapped to the matching
// Play Console "Data safety" form category. Used to cross-check the form declarations.
export const loyolaDataSafetyMapping: DataSafetyMappingRow[] = []
