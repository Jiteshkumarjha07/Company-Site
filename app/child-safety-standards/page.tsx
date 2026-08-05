import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { LegalContent, type LegalSection } from '@/components/legal-content'

export const metadata: Metadata = {
  title: 'Child Safety Standards | Alumnest',
  description:
    'Alumnest LLP’s published standards against child sexual abuse and exploitation (CSAE): zero tolerance, reporting mechanisms, content removal, and cooperation with law enforcement.',
}

const sections: LegalSection[] = [
  {
    title: 'Our Commitment',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest LLP maintains a zero-tolerance policy towards child sexual abuse and exploitation (CSAE) in any form. Child sexual abuse material (CSAM), child grooming, sexualisation of minors, sextortion, trafficking, and any other conduct that sexually exploits or endangers children are strictly prohibited across the Alumnest platform — including profiles, community posts, comments, private messages, mentorship interactions, and any content uploaded or shared through the Service.',
      },
      {
        type: 'p',
        text: 'The Alumnest platform is intended exclusively for individuals who are eighteen (18) years of age or older. All users must confirm their age at registration and provide their date of birth as a verification measure. Regardless of the adult-only nature of the platform, these standards apply without exception to all content and conduct on the Service.',
      },
    ],
  },
  {
    title: 'Prohibited Content and Conduct',
    blocks: [
      {
        type: 'p',
        text: 'The following are strictly prohibited on the Alumnest platform. Violation results in immediate content removal, permanent account termination, and reporting to the relevant authorities:',
      },
      {
        type: 'ul',
        items: [
          'Creating, uploading, sharing, storing, or linking to child sexual abuse material (CSAM) in any form, whether real, simulated, or computer-generated;',
          'Grooming — contacting or befriending a minor with the intention of sexual abuse or exploitation, whether online or offline;',
          'Sexualisation of minors, including content that depicts, encourages, or promotes the sexual abuse or exploitation of children;',
          'Sextortion — threatening or blackmailing a person, including a minor, using real or alleged access to intimate images;',
          'Trafficking of children or advertising a child for commercial sexual exploitation;',
          'Any attempt by a person under eighteen (18) years of age to register on or use the platform.',
        ],
      },
    ],
  },
  {
    title: 'Reporting a Concern',
    blocks: [
      {
        type: 'p',
        text: 'Any user who encounters content or conduct on the Alumnest platform that they believe violates these standards — or who believes a minor has registered on the platform — can report it directly to Alumnest through the in-app contact and grievance mechanism, or by email to our designated child safety point of contact:',
      },
      {
        type: 'dl',
        items: [
          { term: 'Child Safety Point of Contact', def: 'Shourya Pandey, Grievance Officer, Alumnest LLP' },
          { term: 'Email', def: 'shourya.alumnest@gmail.com' },
          { term: 'General Contact', def: 'alumnest.pvt@gmail.com' },
          {
            term: 'Subject Line',
            def: 'Please use the subject line ‘Child Safety Report’ so that your report is prioritised.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Reports concerning child safety are treated with the highest priority. Every report is acknowledged and reviewed promptly, and reporters may remain anonymous. No account of the platform’s features is required to submit a report — parents, guardians, and members of the public may also write to the addresses above.',
      },
    ],
  },
  {
    title: 'Content Removal and Enforcement',
    blocks: [
      {
        type: 'p',
        text: 'Upon becoming aware of content or conduct that violates these standards, Alumnest will, without delay:',
      },
      {
        type: 'ol',
        items: [
          'Remove the violating content from the platform and prevent its further distribution;',
          'Suspend and permanently terminate the responsible account;',
          'Preserve relevant evidence in a secure manner for the purpose of investigation by the appropriate authorities;',
          'Report the material and the responsible account to the relevant law enforcement and child protection authorities as described below;',
          'Where a suspected minor has registered on the platform, suspend the account, permanently delete the associated personal data in accordance with our Privacy Policy, and notify a parent or legal guardian where reasonably identifiable.',
        ],
      },
    ],
  },
  {
    title: 'Cooperation with Authorities',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest reports apparent child sexual abuse material and child exploitation to the appropriate authorities and cooperates fully with lawful investigations. In India, this includes reporting to local police and through the National Cyber Crime Reporting Portal (cybercrime.gov.in) operated by the Ministry of Home Affairs, in accordance with applicable law. Where required or appropriate, reports may also be made to international bodies such as the National Center for Missing & Exploited Children (NCMEC).',
      },
      {
        type: 'p',
        text: 'Alumnest responds to lawful requests from law enforcement and regulatory authorities in connection with child safety investigations, including the preservation and disclosure of relevant records as permitted or required by law.',
      },
    ],
  },
  {
    title: 'Compliance with Child Safety Laws',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest LLP complies with all applicable child safety and child protection laws, including:',
      },
      {
        type: 'ul',
        items: [
          'The Protection of Children from Sexual Offences (POCSO) Act, 2012, including the mandatory reporting obligations thereunder;',
          'Section 67B of the Information Technology Act, 2000, which criminalises the publication and transmission of material depicting children in sexually explicit acts;',
          'The Digital Personal Data Protection Act, 2023, with respect to the personal data of children;',
          'The Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021;',
          'The Google Play Child Safety Standards policy and equivalent requirements of other app marketplaces on which the Alumnest application is distributed.',
        ],
      },
      {
        type: 'note',
        text: 'These standards are reviewed periodically and updated as laws, marketplace policies, and platform features evolve. Material updates will be published on this page with a revised effective date.',
      },
    ],
  },
]

export default function ChildSafetyStandardsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="Legal"
          title="Child Safety Standards"
          intro="Effective Date: 05 August 2026 · Version 1.0 · Alumnest LLP’s published standards against child sexual abuse and exploitation (CSAE), applicable to the Alumnest mobile application and web platform. These standards set out our zero-tolerance policy, how to report a concern, how violating content is removed, and how we cooperate with law enforcement and child protection authorities."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Child Safety Standards' }]}
        />
        <LegalContent
          sections={sections}
          closing={
            <p>
              These Child Safety Standards are effective as of 05 August 2026. For questions or
              reports, contact our child safety point of contact, Shourya Pandey, at
              shourya.alumnest@gmail.com.
            </p>
          }
        />
      </main>
      <Footer pageLink={{ label: 'Next Page [ Privacy Policy ]', href: '/privacy-policy' }} />
    </>
  )
}
