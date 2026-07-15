import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { PcApproach } from '@/components/pc-approach'
import { ProblemSolution } from '@/components/problem-solution'
import { ImpactStats } from '@/components/impact-stats'
import { HowItWorks } from '@/components/how-it-works'
import { AppShowcase } from '@/components/app-showcase'
import { FeaturesGrid } from '@/components/features-grid'
import { CaseStudiesSection } from '@/components/case-studies'
import { ForInstitutions } from '@/components/for-institutions'
import { Testimonials } from '@/components/testimonials'
import { ArticlesSection } from '@/components/articles-section'
import { AppCta } from '@/components/app-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PcApproach />
        <ProblemSolution />
        <ImpactStats />
        <HowItWorks />
        <AppShowcase />
        <FeaturesGrid />
        <CaseStudiesSection />
        <ForInstitutions />
        <Testimonials />
        <ArticlesSection />
        <AppCta />
      </main>
      <Footer />
    </>
  )
}
