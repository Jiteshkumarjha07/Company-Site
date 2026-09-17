export type CoveredApp = {
  name: string
  packageId: string
  developerName: string
  companyName: string
}

// One entry per app this policy and the delete-account page apply to.
// Onboarding a new school's app is adding a line here — not a new page or route.
export const COVERED_APPS: CoveredApp[] = [
  {
    name: 'Loyola Alumni Association',
    packageId: 'com.alumnest.mob1',
    developerName: 'Jitesh Kumar Jha',
    companyName: 'Alumnest',
  },
]
