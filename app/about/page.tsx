import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { AboutContent } from '@/components/about-content'

export const metadata: Metadata = {
  title: 'About | Alumnest',
  description:
    'Alumnest turns scattered graduates into living, lifelong communities. Learn about our vision, team, and company.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="About"
          title="The network behind every institution"
          intro="Alumnest is the private alumni platform for institutions that take their community seriously. Here is who we are and why we build it."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />
        <AboutContent />
      </main>
      <Footer pageLink={{ label: 'Previous Page [ Home ]', href: '/' }} />
    </>
  )
}
