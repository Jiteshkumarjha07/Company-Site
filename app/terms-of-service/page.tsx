import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { LegalContent, type LegalSection } from '@/components/legal-content'

export const metadata: Metadata = {
  title: 'Terms of Service | Alumnest',
  description:
    'The legally binding terms governing your use of the Alumnest platform, including eligibility, verification, user content, and dispute resolution.',
}

const sections: LegalSection[] = [
  {
    title: 'Interpretation and Definitions',
    blocks: [
      { type: 'h3', text: 'Interpretation' },
      {
        type: 'p',
        text: 'Words beginning with a capital letter in these Terms have the meanings assigned below. Definitions apply equally in singular and plural form. References to legislation include all amendments and subordinate legislation made thereunder. The words ‘include’, ‘including’, and ‘in particular’ are illustrative and do not limit the generality of any preceding words.',
      },
      { type: 'h3', text: 'Definitions' },
      {
        type: 'dl',
        items: [
          {
            term: '“Account”',
            def: 'A unique profile registered by a user on the Alumnest Platform, enabling access to its features and community.',
          },
          {
            term: '“Alumnest / Company / We / Us / Our”',
            def: 'Refers to Alumnest LLP, a Limited Liability Partnership registered under the Limited Liability Partnership Act, 2008, with its principal place of business at 1, Jyoti Marg, Sonari, Jamshedpur 831011, Jharkhand, India.',
          },
          {
            term: '“Application”',
            def: 'The Alumnest mobile application distributed via the Apple App Store and Google Play Store.',
          },
          {
            term: '“Content”',
            def: 'Any text, photographs, documents, posts, comments, messages, profiles, job listings, feedback, or other material uploaded, posted, or transmitted by a user through the Platform.',
          },
          {
            term: '“Corporate Partner”',
            def: 'A company or organisation that has entered into a formal agreement with Alumnest to access the Central Lobby marketplace for recruitment, sponsorship, or engagement purposes.',
          },
          {
            term: '“DPDP Act”',
            def: 'The Digital Personal Data Protection Act, 2023, as enacted by the Parliament of India and notified on 11 August 2023, read with the Digital Personal Data Protection Rules, 2025, notified on 14 November 2025.',
          },
          {
            term: '“Institution”',
            def: 'An educational institution — school, college, or university — that has entered into a formal partnership agreement with Alumnest and onboarded its alumni community to the Platform.',
          },
          {
            term: '“Institution Administrator / Admin”',
            def: 'An individual designated by a Partner Institution and granted administrative access to the Institutional Dashboard on the Platform. The Institution Administrator acts as the authorised representative of the Institution on the Platform and bears responsibility for all administrative actions taken under their credentials.',
          },
          {
            term: '“IT Act”',
            def: 'The Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.',
          },
          {
            term: '“Opportunity Marketplace”',
            def: 'The section of the Platform on which job listings, referral requests, project collaborations, and professional opportunities are posted, subject to Institution Administrator approval.',
          },
          {
            term: '“Personal Data”',
            def: 'Any data about an individual who is identifiable by or in relation to such data, as defined under Section 2(t) of the DPDP Act.',
          },
          {
            term: '“Platform”',
            def: 'The Alumnest mobile application and web platform at alumnest.co — a structured, verified alumni networking ecosystem serving educational institutions across India.',
          },
          {
            term: '“Prohibited Content”',
            def: 'Content defined as prohibited under Clause 7 of these Terms.',
          },
          {
            term: '“Terms”',
            def: 'These Terms of Service, as amended from time to time in accordance with Clause 20.',
          },
          {
            term: '“User”',
            def: 'Any individual who registers an Account on the Platform, including individual alumni, Institution Administrators, and Corporate Partner representatives.',
          },
          {
            term: '“Verified Identity”',
            def: 'The institutional identity of an alumnus confirmed through institutional email verification, document review, and/or peer confirmation.',
          },
        ],
      },
    ],
  },
  {
    title: 'Eligibility',
    blocks: [
      {
        type: 'p',
        text: 'To register an Account and use the Platform, you must satisfy all of the following eligibility requirements at the time of registration and at all times thereafter:',
      },
      {
        type: 'ul',
        items: [
          'You must be at least eighteen (18) years of age. By registering, you represent and warrant that you are eighteen years of age or older. If you provide a false representation of your age, you shall be solely and fully responsible for all consequences of that misrepresentation and shall indemnify Alumnest against all claims, losses, and liabilities arising therefrom;',
          'You must be a genuine alumnus of an educational institution, an Institution Administrator duly authorised by a Partner Institution, or a representative of a Corporate Partner with a valid partnership agreement with Alumnest;',
          'You must have the legal capacity to enter into a binding agreement under applicable Indian law;',
          'You must not have had an Account previously suspended or terminated by Alumnest for a violation of these Terms, unless Alumnest has expressly granted you permission to re-register; and',
          'You must not be subject to any law or regulation that prohibits you from using the Platform or receiving services from an Indian entity.',
        ],
      },
      {
        type: 'p',
        text: 'Alumnest reserves the right to verify your eligibility at any time and to suspend or terminate your Account if it determines that you do not meet or no longer meet these requirements. If you do not meet these requirements, you must not use the Platform.',
      },
    ],
  },
  {
    title: 'Account Registration and Security',
    blocks: [
      { type: 'h3', text: 'Accuracy of Information' },
      {
        type: 'p',
        text: 'When registering an Account, you must provide accurate, current, and complete information. You must promptly update your Account information if it changes. Providing false, misleading, or incomplete information — including falsely claiming alumni status at an institution you did not attend — constitutes a serious violation of these Terms and may result in immediate Account termination without warning.',
      },
      { type: 'h3', text: 'Account Security' },
      {
        type: 'p',
        text: 'You are solely responsible for maintaining the confidentiality of your Account credentials, including your password. You must not share your credentials with any third party. You must notify Alumnest immediately at alumnest.pvt@gmail.com if you become aware of any unauthorised access to or use of your Account. Alumnest is not liable for any loss or damage arising from your failure to maintain the security of your Account.',
      },
      { type: 'h3', text: 'One Account Per User' },
      {
        type: 'p',
        text: 'Each individual may hold only one Account on the Platform. Creating multiple Accounts, or creating an Account on behalf of another person without their knowledge and consent, is a serious violation of these Terms.',
      },
      { type: 'h3', text: 'Account Non-Transferability' },
      {
        type: 'p',
        text: 'Your Account is personal to you and may not be sold, transferred, assigned, or sub-licensed to any other person. Any attempt to do so renders the Account subject to immediate termination.',
      },
    ],
  },
  {
    title: 'Alumni Verification',
    blocks: [
      { type: 'h3', text: 'Verification Process' },
      {
        type: 'p',
        text: 'Alumnest operates a verification system to confirm that each registered user genuinely attended the institution they have declared. Verification may involve one or more of the following: institutional email verification, submission of identity documents, and peer confirmation by other verified alumni of the same institution. Full details of the verification process are described in the Alumnest Privacy Policy.',
      },
      { type: 'h3', text: 'User’s Obligation of Truthfulness' },
      {
        type: 'p',
        text: 'You represent and warrant that all information submitted for verification — including documents, institutional email addresses, and statements about your academic history — is genuine, accurate, and your own. Submitting falsified, altered, or borrowed verification documents constitutes fraud and a serious violation of these Terms, and may be reported to the relevant law enforcement authorities.',
      },
      { type: 'h3', text: 'Alumnest’s Verification Disclaimer' },
      {
        type: 'p',
        text: 'While Alumnest implements a structured verification process, it does not and cannot guarantee the accuracy or authenticity of all verified identities on the Platform. The peer confirmation system relies on the good faith of other users. Alumnest is not liable for any loss or damage resulting from a user’s reliance on another user’s verified status.',
      },
      { type: 'h3', text: 'Reporting False Verification' },
      {
        type: 'p',
        text: 'If you have reasonable grounds to believe that another user has obtained Verified Identity status fraudulently, you must report it to Alumnest at alumnest.pvt@gmail.com. Alumnest will investigate all such reports and take appropriate action, which may include permanent Account termination and referral to law enforcement.',
      },
      { type: 'h3', text: 'Underage Users' },
      {
        type: 'p',
        text: 'If Alumnest discovers or has reasonable grounds to believe that a registered user is under the age of eighteen (18), Alumnest shall, without delay:',
      },
      {
        type: 'ol',
        items: [
          'immediately suspend the Account pending investigation;',
          'permanently delete all Personal Data associated with the Account without archiving or retaining it beyond what is strictly required to satisfy any applicable legal obligation; and',
          'permanently close the Account.',
        ],
      },
      {
        type: 'p',
        text: 'A user who misrepresents their age accepts full and exclusive responsibility for all consequences of that misrepresentation and shall indemnify, defend, and hold harmless Alumnest and its partners, officers, and employees against any and all claims, liabilities, losses, and expenses arising therefrom.',
      },
      {
        type: 'p',
        text: 'Any third party — including parents, guardians, or other users — who has reasonable grounds to believe that a user on the Platform is under eighteen years of age must report this to the Grievance Officer at shourya.alumnest@gmail.com with the subject line ‘Minor User Report — [Platform Username]’. Alumnest will investigate all such reports as a matter of priority.',
      },
    ],
  },
  {
    title: 'Nature of the Platform and Alumnest’s Role',
    blocks: [
      { type: 'h3', text: 'Intermediary Status' },
      {
        type: 'p',
        text: 'Alumnest is an intermediary platform as defined under Section 2(1)(w) of the Information Technology Act, 2000. Alumnest provides the technical infrastructure and community framework that enables alumni, institutions, and corporate partners to connect and interact. Alumnest does not itself produce, endorse, verify, curate, or take responsibility for any Content posted or transmitted by users on the Platform, except as expressly provided in these Terms.',
      },
      { type: 'h3', text: 'No Employment, Agency, or Partnership' },
      {
        type: 'p',
        text: 'Nothing in these Terms creates any employment, agency, partnership, joint venture, franchise, or fiduciary relationship between Alumnest and any User, Institution, or Corporate Partner. Alumnest does not act as an employer, recruiter, employment agency, career counsellor, or financial adviser. Users interact with one another and with institutions on the Platform as independent individuals.',
      },
      { type: 'h3', text: 'Platform Provided As-Is' },
      {
        type: 'p',
        text: 'Alumnest provides the Platform as a technology service. Alumnest does not guarantee any particular outcome from use of the Platform — including employment, mentorship success, professional advancement, or institutional benefit. The value derived from the Platform depends entirely on the quality and good faith of user participation.',
      },
      { type: 'h3', text: 'Safe Harbour' },
      {
        type: 'p',
        text: 'Alumnest claims the benefit of the safe harbour provisions under Section 79 of the Information Technology Act, 2000, subject to its compliance with the due diligence requirements prescribed under Rule 3 of the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. Alumnest is not liable for any third-party Content hosted on the Platform provided that Alumnest: (a) does not initiate the transmission of such Content; (b) does not select the receiver of such transmission; and (c) does not select or modify the information contained in the transmission. The compliance officer appointments required under the IT Rules 2021 are set out in Clause 22.',
      },
      {
        type: 'p',
        text: 'Pending completion of the Chief Compliance Officer and Nodal Contact Person appointments referred to in Clause 22, Alumnest has not yet fully satisfied the due diligence requirements prescribed under Rule 3 of the IT Rules 2021, and Alumnest’s entitlement to claim the safe harbour under Section 79 of the Information Technology Act, 2000 is correspondingly qualified until such appointments are completed and the required details are published on the Platform.',
      },
    ],
  },
  {
    title: 'User Content — Ownership, Licence, and Responsibility',
    blocks: [
      { type: 'h3', text: 'Ownership of User Content' },
      {
        type: 'p',
        text: 'You retain full ownership of all Content that you create and post on the Platform. These Terms do not transfer ownership of your Content to Alumnest in any form.',
      },
      { type: 'h3', text: 'Licence Granted to Alumnest' },
      {
        type: 'p',
        text: 'By posting Content on the Platform, you grant Alumnest a non-exclusive, royalty-free, worldwide, sublicensable, and transferable licence to use, reproduce, display, distribute, and adapt your Content solely for the purpose of operating, maintaining, and improving the Platform and providing the services described in these Terms. This licence operates as follows:',
      },
      {
        type: 'ol',
        items: [
          'For Content that you actively delete from the Platform, the licence terminates immediately upon deletion, subject to sub-clauses (c) and (d) below;',
          'For all other Content, the licence continues for as long as your Content remains on the Platform and terminates when you delete your Content or close your Account, subject to sub-clauses (c) and (d) below;',
          'Notwithstanding the termination of the licence under sub-clauses (a) or (b), the licence continues solely for the purpose of, and only for the duration of, any post-termination retention period during which Alumnest is required to retain the relevant Content in accordance with its data retention obligations under the Privacy Policy. The categories of Content retained after Account deletion, and the applicable retention periods, are set out in the Privacy Policy; and',
          'Upon expiry of all applicable retention periods, the licence in respect of retained Content terminates permanently, and such Content is deleted in accordance with the Privacy Policy.',
        ],
      },
      { type: 'h3', text: 'Your Representations Regarding Content' },
      {
        type: 'p',
        text: 'By posting Content on the Platform, you represent and warrant that:',
      },
      {
        type: 'ul',
        items: [
          'You own or have all necessary rights, licences, and permissions to post the Content and to grant the licence set out above;',
          'The Content does not infringe the intellectual property rights, privacy rights, or any other rights of any third party;',
          'The Content is accurate and not misleading; and',
          'The Content complies with these Terms, the Prohibited Conduct provisions in Clause 7, and all applicable Indian laws.',
        ],
      },
      { type: 'h3', text: 'User’s Sole Responsibility for Content' },
      {
        type: 'p',
        text: 'You are solely and entirely responsible for all Content that you post, upload, share, or transmit on the Platform. Alumnest does not pre-screen, monitor, or verify user-generated Content prior to its publication on the Platform, except in the case of job listings which are subject to Institution Administrator approval as described in Clause 9. Alumnest accepts no responsibility or liability for any Content posted by users.',
      },
      { type: 'h3', text: 'Alumnest’s Right to Remove Content' },
      {
        type: 'p',
        text: 'Alumnest reserves the right — but assumes no obligation to proactively monitor — to remove, disable, or modify any Content that it determines, in its sole discretion, violates these Terms, applicable law, or the rights of any third party. Alumnest will act on valid complaints or notices received in accordance with the procedure set out below and its obligations under the IT Act 2000 and IT Rules 2021.',
      },
      { type: 'h3', text: 'Content Reporting, Takedown, and Appeals' },
      {
        type: 'ul',
        items: [
          'Reporting mechanism: Any user who believes that Content on the Platform violates these Terms, applicable Indian law, or their rights may report such Content using the in-app reporting function or by email to alumnest.pvt@gmail.com with the subject line ‘Content Report — [Brief Description]’;',
          'Acknowledgement: Alumnest will acknowledge all reports within twenty-four (24) hours of receipt;',
          'Resolution timeline: Alumnest will investigate all reports and communicate its decision within fifteen (15) days of acknowledgement, except that: (i) Content that is prima facie sexually explicit, obscene, or involves the sexual exploitation of a minor shall be taken down within twenty-four (24) hours of receipt of a valid complaint or order from a competent court or government authority; and (ii) Content that is the subject of a court order or direction from a government authority shall be taken down within the timeline prescribed in such order;',
          'Notification to content poster: Where Alumnest removes or disables Content, it will notify the user who posted such Content by email to their registered address, unless prohibited from doing so by a court order, government direction, or applicable law;',
          'Appeals: A user whose Content has been removed may submit a written appeal to shourya.alumnest@gmail.com within seven (7) days of the removal notification. Alumnest will review the appeal and communicate its final decision within fifteen (15) days of receipt. Alumnest’s decision on appeal is final, subject to the dispute resolution process under Clause 17.',
        ],
      },
    ],
  },
  {
    title: 'Prohibited Conduct',
    blocks: [
      {
        type: 'p',
        text: 'The following conduct is strictly prohibited on the Platform. Violations will result in account action as described in Clause 16. Alumnest classifies prohibited conduct into two categories: Serious Violations, which result in immediate Account termination without prior warning; and Minor Violations, which result in a formal warning before further action is taken.',
      },
      { type: 'h3', text: 'Serious Violations — Immediate Termination' },
      {
        type: 'p',
        text: 'The following constitute Serious Violations for which Alumnest may terminate your Account immediately and without prior warning:',
      },
      {
        type: 'ul',
        items: [
          'Submitting false, fabricated, or fraudulently obtained identity or alumni verification documents;',
          'Impersonating another person, whether a real individual or a fictional person, in a way that is intended to deceive or mislead other users;',
          'Posting, sharing, or transmitting content that is sexually explicit, obscene, pornographic, or that sexualises a minor in any form;',
          'Harassing, threatening, stalking, intimidating, or inciting violence against any individual or group through the Platform;',
          'Using the Platform to facilitate or promote any illegal activity, including fraud, money laundering, identity theft, or any activity prohibited under Indian law;',
          'Systematically scraping, extracting, or harvesting user data, profiles, or Content from the Platform using automated means without Alumnest’s prior written consent;',
          'Attempting to circumvent, disable, or interfere with the Platform’s security systems, verification mechanisms, or access controls;',
          'Creating multiple Accounts to evade a prior suspension or termination;',
          'Posting content that promotes, glorifies, or incites terrorism, communal violence, or hatred on the basis of religion, caste, ethnicity, gender, or sexual orientation in a manner that is unlawful under Indian law;',
          'Accessing another user’s Account without authorisation.',
        ],
      },
      { type: 'h3', text: 'Minor Violations — Warning First' },
      {
        type: 'p',
        text: 'The following constitute Minor Violations for which Alumnest will issue a formal warning before taking further action. Repeated minor violations may be escalated to Serious Violations:',
      },
      {
        type: 'ul',
        items: [
          'Posting spam, unsolicited commercial messages, or repetitive Content;',
          'Posting Content that is irrelevant to the alumni networking context of the Platform;',
          'Using the Platform to solicit users for commercial purposes outside the designated Corporate Partner channels;',
          'Posting misleading but non-fraudulent information about your professional background or career history;',
          'Contacting other users repeatedly after they have indicated they do not wish to be contacted;',
          'Circumventing the Platform’s notification or privacy settings to contact users who have opted out of such communications;',
          'Posting Content that is disrespectful, offensive, or in poor taste, but does not rise to the level of a Serious Violation.',
        ],
      },
      {
        type: 'note',
        text: 'COMPLIANCE OBLIGATION: Users are solely responsible for ensuring that their conduct and Content on the Platform comply with all applicable Indian laws, including the Information Technology Act, 2000, the Bharatiya Nyaya Sanhita, 2023, and the Protection of Children from Sexual Offences Act, 2012. Alumnest will cooperate fully with law enforcement agencies in relation to any unlawful conduct on the Platform.',
      },
    ],
  },
  {
    title: 'Institution Administrator Terms',
    blocks: [
      { type: 'h3', text: 'Role and Authority of the Institution Administrator' },
      {
        type: 'p',
        text: 'The Institution Administrator is the designated representative of a Partner Institution on the Platform. By accepting these Terms in their capacity as an Administrator, the individual represents and warrants that they have been duly authorised by the Partner Institution to act on its behalf and to bind the Institution to these Terms.',
      },
      { type: 'h3', text: 'Administrator Responsibilities' },
      {
        type: 'p',
        text: 'The Institution Administrator is solely and fully responsible for:',
      },
      {
        type: 'ul',
        items: [
          'Managing and moderating the Institution’s alumni community on the Platform, including reviewing and approving or rejecting user-generated content submitted for publication within the Institution’s community space;',
          'Approving or rejecting all job listings submitted for publication on the Opportunity Marketplace that are attributed to the Institution, in accordance with Clause 9;',
          'Ensuring that all content approved and published by them complies with these Terms, applicable Indian laws, and the policies of the Partner Institution;',
          'Maintaining the security of their Administrator credentials and ensuring that no unauthorised individual accesses the Institutional Dashboard;',
          'Promptly reporting to Alumnest any misuse, abuse, or suspicious activity within their Institution’s community space; and',
          'Complying with all applicable data protection and privacy obligations under the Digital Personal Data Protection Act, 2023 and these Terms in connection with their access to and handling of alumni data through the Institutional Dashboard, and ensuring that the Institution’s use of alumni data does not exceed the scope permitted under the Data Processing Agreement between the Institution and Alumnest LLP.',
        ],
      },
      { type: 'h3', text: 'Institution Administrator’s Liability for Approved Content' },
      {
        type: 'p',
        text: 'The Institution Administrator bears full and primary responsibility for all Content that they approve for publication on the Platform, including job listings. Alumnest accepts no liability whatsoever for any Content approved by an Institution Administrator. The Partner Institution and the Administrator shall jointly and severally indemnify Alumnest against any claim, loss, damage, or liability arising from Content approved by the Administrator, in accordance with Clause 15.',
      },
      { type: 'h3', text: 'Administrator Account Security' },
      {
        type: 'p',
        text: 'The Institution Administrator is solely responsible for all actions taken under their Administrator credentials, whether or not authorised by them. Any action taken under Administrator credentials will be deemed to have been taken by the designated Administrator. Alumnest is not liable for any loss or damage arising from the compromise of Administrator credentials.',
      },
      { type: 'h3', text: 'Revocation of Administrator Access' },
      {
        type: 'p',
        text: 'Alumnest reserves the right to revoke Institution Administrator access at any time, with or without notice, if the Administrator violates these Terms, misuses their access, or if the Partner Institution’s agreement with Alumnest is terminated. The Partner Institution must promptly notify Alumnest if an Administrator’s authorisation is revoked by the Institution.',
      },
    ],
  },
  {
    title: 'Opportunity Marketplace and Job Listings',
    blocks: [
      { type: 'h3', text: 'Nature of the Opportunity Marketplace' },
      {
        type: 'p',
        text: 'The Opportunity Marketplace is a feature of the Platform that enables alumni to discover job listings, referral opportunities, project collaborations, and professional opportunities posted within verified alumni networks. The Marketplace is a facilitation tool only. Alumnest is not a recruitment agency, employment platform, or job board, and does not act as an intermediary between employers and candidates in any advisory, endorsement, or representational capacity.',
      },
      { type: 'h3', text: 'Institution Administrator Approval Requirement' },
      {
        type: 'p',
        text: 'All job listings submitted for publication on the Opportunity Marketplace must receive the explicit approval of the relevant Institution Administrator before they are made visible to Platform users. A listing that has not been approved by an Institution Administrator cannot be published on the Platform. This approval mechanism is a gatekeeping function assigned to the Institution Administrator and does not constitute endorsement, verification, or approval of the listing by Alumnest.',
      },
      { type: 'h3', text: 'Responsibility for Job Listings' },
      {
        type: 'p',
        text: 'The user who submits a job listing and the Institution Administrator who approves it bear joint and several responsibility for the accuracy, legality, and completeness of the listing. Alumnest does not verify, fact-check, or endorse any job listing published on the Platform. Alumnest accepts no liability whatsoever for:',
      },
      {
        type: 'ul',
        items: [
          'The accuracy or completeness of any job listing;',
          'Whether the listed opportunity is genuine, current, or available;',
          'The conduct of any employer or company listed on the Marketplace;',
          'Any outcome of an application made by a user in response to a listing, including rejection, non-response, or adverse employment terms;',
          'Any financial, professional, or personal loss suffered by a user in connection with a listing on the Platform; or',
          'Any loss, damage, liability, or claim arising from the conduct of an employer or Corporate Partner after it has received a user’s Personal Data in connection with a job application made through the Opportunity Marketplace or a listing, including any subsequent use, storage, or disclosure of that data by the employer or Corporate Partner. This exclusion does not apply to, and nothing in this Clause limits or excludes, Alumnest’s own obligations and liability as a Data Fiduciary under the DPDP Act in respect of Alumnest’s own processing or sharing of a user’s Personal Data.',
        ],
      },
      { type: 'h3', text: 'Prohibited Listings' },
      {
        type: 'p',
        text: 'The following categories of listing are prohibited on the Opportunity Marketplace and must not be submitted or approved:',
      },
      {
        type: 'ul',
        items: [
          'Listings that are fraudulent, fictitious, or designed to deceive applicants;',
          'Listings for roles that require payment from the applicant as a condition of employment or application;',
          'Multi-level marketing, pyramid scheme, or commission-only roles disguised as employment;',
          'Listings that solicit personal or financial information from applicants outside of a legitimate hiring process;',
          'Listings for roles that are unlawful under Indian law.',
        ],
      },
      {
        type: 'p',
        text: 'Submission or approval of a Prohibited Listing constitutes a Serious Violation under Clause 7.',
      },
    ],
  },
  {
    title: 'Mentorship Feature',
    blocks: [
      { type: 'h3', text: 'Nature of the Mentorship Feature' },
      {
        type: 'p',
        text: 'Alumnest provides a structured mentorship matching system that connects alumni seeking guidance with alumni willing to offer it. This feature is a facilitation tool. Alumnest does not itself provide mentorship, career advice, professional guidance, legal advice, financial advice, medical advice, or any other form of expert counsel.',
      },
      {
        type: 'p',
        text: 'The mentorship feature is designed exclusively for informal alumni guidance and general career conversation. Mentors on the Platform do not act in any professional, advisory, regulated, fiduciary, or client-facing capacity, regardless of their professional qualifications, designations, or registrations outside the Platform. A mentor’s participation on the Platform does not constitute the provision of regulated professional services of any kind, including legal advice, financial advice (whether investment, tax, or insurance), medical advice, or any other advice regulated under Indian law. If you require professional advice of any kind, you must consult a qualified and appropriately licensed professional independently of the Platform.',
      },
      { type: 'h3', text: 'No Verification of Mentor Credentials' },
      {
        type: 'p',
        text: 'Alumnest verifies the institutional identity of mentors but does not verify, audit, or confirm the professional credentials, qualifications, expertise, competence, or accuracy of any advice provided by a mentor. Alumnest makes no representation about the quality, accuracy, or appropriateness of any advice given by any mentor on the Platform.',
      },
      { type: 'h3', text: 'Full Disclaimer of Liability for Mentorship Outcomes' },
      {
        type: 'p',
        text: 'All mentorship interactions on the Platform are entered into voluntarily and entirely at the risk of the participants. Alumnest accepts no responsibility or liability whatsoever for:',
      },
      {
        type: 'ul',
        items: [
          'Any advice, recommendation, referral, or guidance provided by a mentor through the Platform;',
          'Any decision made by a mentee in reliance on such advice;',
          'Any professional, financial, personal, or other outcome arising from a mentorship interaction on the Platform; or',
          'Any conflict, disagreement, or dispute arising between a mentor and a mentee.',
        ],
      },
      {
        type: 'p',
        text: 'The mentor and mentee are solely and entirely responsible for the conduct and outcomes of their mentorship engagement. Alumnest’s role is limited to providing the technical infrastructure for the interaction. Nothing in this Clause excludes Alumnest’s liability for fraud, wilful misconduct, or gross negligence.',
      },
      { type: 'h3', text: 'Reporting Misconduct in Mentorship' },
      {
        type: 'p',
        text: 'If you experience inappropriate conduct, harassment, or misuse of the mentorship feature by another user, you must report it immediately to alumnest.pvt@gmail.com. Alumnest will investigate such reports and take appropriate action under Clause 16.',
      },
    ],
  },
  {
    title: 'Corporate Partner Terms',
    blocks: [
      { type: 'h3', text: 'Separate Agreement Required' },
      {
        type: 'p',
        text: 'Corporate Partners must enter into a separate, written Corporate Partner Agreement with Alumnest LLP before accessing the Platform’s Central Lobby marketplace or initiating any recruitment, sponsorship, or engagement activity on the Platform. These Terms apply to Corporate Partners in addition to, and not in substitution of, the Corporate Partner Agreement.',
      },
      { type: 'h3', text: 'Corporate Partner Responsibilities' },
      {
        type: 'p',
        text: 'Corporate Partners are solely responsible for all Content they post on the Platform, including job listings, sponsored content, and event promotions. Corporate Partners warrant that all such Content is accurate, lawful, and not misleading. Alumnest accepts no liability for any Content posted by a Corporate Partner.',
      },
      { type: 'h3', text: 'Prohibition on Misuse of Alumni Data' },
      {
        type: 'p',
        text: 'Corporate Partners may not use alumni data accessed through the Platform for any purpose other than that agreed in the Corporate Partner Agreement. Corporate Partners are expressly prohibited from selling, sharing, or commercially exploiting alumni data obtained through the Platform.',
      },
      { type: 'h3', text: 'Summary of Corporate Partner Data Access — User Transparency' },
      {
        type: 'p',
        text: 'In the interest of transparency toward alumni users, Alumnest provides the following summary of the permitted purposes and scope of Corporate Partner access to alumni data on the Platform:',
      },
      {
        type: 'ul',
        items: [
          'Permitted purposes: Corporate Partners may access alumni data solely for the purposes of talent recruitment, event sponsorship, and professional engagement within the Platform’s designated Central Lobby channels. Any other use is prohibited;',
          'Data accessible to Corporate Partners: Corporate Partners may access only the name, institution, graduation year, city of residence, and stated industry or professional field of alumni who have activated the ‘Open to Opportunities’ setting in their Account. Corporate Partners may not access identity verification documents, private messages, mentorship records, or payment information;',
          'Prohibited activities: Corporate Partners are expressly prohibited from: (i) profiling, targeting, or building lookalike audiences using alumni data outside the Platform; (ii) aggregating alumni data for purposes other than those agreed in the Corporate Partner Agreement; and (iii) exporting, downloading, or transferring alumni data to any system outside the Platform; and',
          'Full Corporate Partner Agreement: The full Corporate Partner Agreement, including detailed data access and restriction provisions, is available to Corporate Partners and, upon reasonable written request submitted to shourya.alumnest@gmail.com, to any registered alumni user who wishes to review the data governance terms applicable to Corporate Partners.',
        ],
      },
    ],
  },
  {
    title: 'Intellectual Property of Alumnest',
    blocks: [
      { type: 'h3', text: 'Ownership' },
      {
        type: 'p',
        text: 'The Platform, including its design, architecture, user interface, branding, logo, name ‘Alumnest’, tagline ‘For the Tribe’, software, source code, algorithms, features, and all related intellectual property, are owned exclusively by Alumnest LLP and are protected under applicable Indian intellectual property laws, including the Copyright Act, 1957. ‘Alumnest’ and ‘For the Tribe’ are used by Alumnest LLP as unregistered trade marks; applications for registration of these marks with the Trade Marks Registry of India are pending. Alumnest LLP asserts all common law rights in these marks by virtue of prior and continuous use in India. Nothing in these Terms shall be construed as conferring any right, licence, or permission to use these marks without the prior written consent of Alumnest LLP.',
      },
      { type: 'h3', text: 'Limited Licence to Users' },
      {
        type: 'p',
        text: 'Subject to your compliance with these Terms, Alumnest grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable licence to access and use the Platform solely for its intended purpose of alumni networking. This licence does not include any right to:',
      },
      {
        type: 'ul',
        items: [
          'Reproduce, modify, adapt, or create derivative works from any part of the Platform;',
          'Sublicence, sell, or transfer access to the Platform to any third party;',
          'Reverse-engineer, decompile, or disassemble any part of the Platform’s software or code;',
          'Remove, alter, or obscure any proprietary notices on the Platform; or',
          'Use the Platform’s branding, name, or logo without Alumnest’s prior written consent.',
        ],
      },
      { type: 'h3', text: 'Feedback' },
      {
        type: 'p',
        text: 'If you submit feedback, suggestions, ideas, or improvement proposals about the Platform to Alumnest, you grant Alumnest a non-exclusive, irrevocable, perpetual, royalty-free, worldwide licence to use, implement, and incorporate such feedback solely for the purpose of developing, improving, and operating the Platform and Alumnest’s related services. This licence does not extend to the commercialisation of your feedback as a standalone product or service unrelated to the Platform. Alumnest has no obligation to implement any feedback submitted. To the fullest extent permitted by the Copyright Act, 1957, you waive any moral rights you may have in connection with such feedback. Nothing in this Clause confers any consideration, attribution, or confidentiality obligation on Alumnest in relation to feedback voluntarily submitted.',
      },
    ],
  },
  {
    title: 'Disclaimer of Warranties',
    blocks: [
      {
        type: 'note',
        text: 'THE PLATFORM IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE INDIAN LAW.',
      },
      {
        type: 'p',
        text: 'Alumnest expressly disclaims all warranties, including but not limited to:',
      },
      {
        type: 'ul',
        items: [
          'Any implied warranty of merchantability, fitness for a particular purpose, or non-infringement;',
          'Any warranty that the Platform will be uninterrupted, error-free, secure, or free of viruses or harmful components;',
          'Any warranty as to the accuracy, completeness, reliability, or currency of any Content on the Platform, including user profiles, job listings, and mentorship advice;',
          'Any warranty that the Platform will meet your specific requirements or expectations; and',
          'Any warranty regarding the conduct, identity, credentials, or reliability of any other user on the Platform.',
        ],
      },
      {
        type: 'p',
        text: 'No advice, statement, or information provided by Alumnest or its personnel, whether oral or written, shall create any warranty not expressly stated in these Terms.',
      },
    ],
  },
  {
    title: 'Limitation of Liability',
    blocks: [
      { type: 'h3', text: 'Exclusion of Consequential Loss' },
      {
        type: 'p',
        text: 'To the fullest extent permitted by applicable Indian law, Alumnest shall not be liable to you for any indirect, incidental, special, consequential, or punitive loss or damage, including loss of profits, loss of data, loss of goodwill, loss of opportunity, or business interruption, arising out of or in connection with your use of or inability to use the Platform, regardless of whether Alumnest has been advised of the possibility of such loss.',
      },
      { type: 'h3', text: 'Specific Exclusions' },
      {
        type: 'p',
        text: 'Without limiting the generality of the above, Alumnest expressly excludes all liability for:',
      },
      {
        type: 'ul',
        items: [
          'Any Content posted, shared, or transmitted by any user on the Platform, including job listings, mentorship advice, posts, comments, and messages;',
          'Any outcome arising from a mentorship interaction, including reliance on advice given by a mentor;',
          'Any outcome arising from a job listing or referral posted on the Opportunity Marketplace, including failure to secure employment, adverse employment terms, or fraudulent listings;',
          'Any dispute, conflict, or harm arising between users of the Platform;',
          'Any loss arising from the suspension or termination of your Account in accordance with these Terms;',
          'Any loss arising from your reliance on another user’s Verified Identity status;',
          'Any loss arising from a third-party service provider’s failure, including Firebase (Google LLC), Algolia SAS, or any payment gateway — see Clause 18 for disclosure of data processed by these providers;',
          'Any loss arising from unauthorised access to your Account resulting from your failure to maintain account security; or',
          'Any loss, damage, or service interruption arising from the scheduled or unscheduled maintenance, upgrade, or temporary unavailability of the Platform or any component thereof, or from any technical failure that is outside Alumnest’s reasonable control.',
        ],
      },
      { type: 'h3', text: 'Aggregate Liability Cap' },
      {
        type: 'p',
        text: 'To the extent that any liability of Alumnest is not excluded under the clauses above, Alumnest’s aggregate liability to you for all claims arising out of or in connection with these Terms or your use of the Platform shall not exceed Indian Rupees Five Thousand (INR 5,000) or the total amount paid by you to Alumnest in the twelve (12) months preceding the claim, whichever is greater. Given that the Platform is currently free to use, this cap is INR 5,000 in the absence of any payment history.',
      },
      {
        type: 'p',
        text: 'This cap shall not apply to, and nothing in these Terms limits or excludes Alumnest’s liability for:',
      },
      {
        type: 'ul',
        items: [
          'Fraud or fraudulent misrepresentation by Alumnest;',
          'Negligence, wilful misconduct, or gross negligence by Alumnest;',
          'Death or personal injury caused by Alumnest’s negligence; or',
          'Any liability that cannot lawfully be excluded or limited under the Consumer Protection Act, 2019 or any other applicable Indian law.',
        ],
      },
      { type: 'h3', text: 'Statutory Rights' },
      {
        type: 'p',
        text: 'Nothing in these Terms limits or excludes any liability that cannot be excluded or limited under applicable Indian consumer protection law, including the Consumer Protection Act, 2019, to the extent it applies.',
      },
    ],
  },
  {
    title: 'Indemnification',
    blocks: [
      {
        type: 'p',
        text: 'You agree to fully indemnify, defend, and hold harmless Alumnest LLP and its partners, officers, employees, agents, and successors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with:',
      },
      {
        type: 'ul',
        items: [
          'Your use of or access to the Platform;',
          'Any Content you post, upload, share, or transmit on the Platform;',
          'Your violation of any provision of these Terms;',
          'Your violation of any applicable law or regulation, including Indian law;',
          'Your violation of the rights of any third party, including intellectual property rights, privacy rights, or rights arising from defamation; and',
          'Any fraudulent, wilful, or negligent act or omission by you on the Platform.',
        ],
      },
      {
        type: 'p',
        text: 'This indemnification obligation applies equally to Institution Administrators in respect of all Content approved by them on the Platform, including job listings.',
      },
    ],
  },
  {
    title: 'Account Suspension and Termination',
    blocks: [
      { type: 'h3', text: 'Termination for Serious Violations' },
      {
        type: 'p',
        text: 'Alumnest may immediately and permanently terminate your Account, without prior notice or warning, upon determining that you have committed a Serious Violation as defined in Clause 7. In such cases, Alumnest will notify you of the termination by email to the address registered on your Account. Termination for a Serious Violation may result in a permanent ban from the Platform.',
      },
      { type: 'h3', text: 'Warning System for Minor Violations' },
      {
        type: 'p',
        text: 'For Minor Violations as defined in Clause 7, Alumnest will issue a formal written warning to your registered email address before taking further action. If the violation continues after the warning, or if you commit a further Minor Violation within ninety (90) days of a prior warning, Alumnest may suspend your Account for a period it deems appropriate, or terminate it. Three formal warnings within any twelve (12) month period may be treated as equivalent to a Serious Violation.',
      },
      { type: 'h3', text: 'Suspension Pending Investigation' },
      {
        type: 'p',
        text: 'Alumnest may suspend your Account on a temporary basis while it investigates a reported violation. Such suspension does not constitute a finding of guilt and will be lifted if the investigation concludes that no violation occurred. Alumnest will complete its investigation and communicate its decision — either lifting the suspension or converting it to termination — within thirty (30) days of the date of suspension. If no decision is communicated within this period, the suspension shall be automatically lifted pending further investigation.',
      },
      { type: 'h3', text: 'Your Right to Terminate' },
      {
        type: 'p',
        text: 'You may terminate your Account at any time by deleting your Account through the Application settings or by submitting a written request to the Grievance Officer at shourya.alumnest@gmail.com. The consequences of Account deletion for your Personal Data are described in the Alumnest Privacy Policy.',
      },
      { type: 'h3', text: 'Effect of Termination' },
      {
        type: 'p',
        text: 'Upon termination of your Account for any reason:',
      },
      {
        type: 'ul',
        items: [
          'Your licence to use the Platform terminates immediately;',
          'All Content associated with your Account will be deleted in accordance with Alumnest’s Privacy Policy;',
          'Provisions of these Terms that by their nature should survive termination shall survive, including Clauses 6, 12, 14, 15, 17, 18, and 19; and',
          'All data retention and deletion obligations under the Alumnest Privacy Policy continue to apply following termination of your Account. Any Personal Data retained after termination in accordance with the Privacy Policy is subject to the terms of the Privacy Policy for the duration of the applicable retention period and shall be processed solely for the purposes for which retention is authorised.',
        ],
      },
      { type: 'h3', text: 'Reinstatement and Appeals' },
      {
        type: 'ul',
        items: [
          'A user whose Account has been terminated for a Serious Violation may submit a written challenge to the termination decision to shourya.alumnest@gmail.com within fourteen (14) days of receiving the termination notification, setting out the grounds of the challenge;',
          'Alumnest will review the challenge and communicate its decision in writing within twenty-one (21) days of receipt;',
          'Alumnest’s decision following such review is final and binding, subject to the dispute resolution process under Clause 17; and',
          'Reinstatement of a terminated Account is at Alumnest’s sole discretion and does not constitute a waiver of any rights Alumnest may have in connection with the underlying violation.',
        ],
      },
    ],
  },
  {
    title: 'Dispute Resolution',
    blocks: [
      { type: 'h3', text: 'Good Faith Negotiation' },
      {
        type: 'p',
        text: 'In the event of any dispute, controversy, or claim arising out of or relating to these Terms, your use of the Platform, or any breach, termination, or invalidity thereof (‘Dispute’), the parties shall first attempt to resolve the Dispute through good faith negotiation. Either party may initiate this process by notifying the other in writing of the nature of the Dispute. The parties shall negotiate for a period of fifteen (15) days from the date of such notice.',
      },
      { type: 'h3', text: 'Mediation' },
      {
        type: 'p',
        text: 'If the Dispute is not resolved through negotiation within fifteen (15) days, either party may refer the Dispute to mediation. The mediation shall be conducted by a mutually agreed mediator. If the parties cannot agree on a mediator within seven (7) days of the referral, either party may approach the Jharkhand State Legal Services Authority or any recognised mediation institution in Jamshedpur. Mediation shall be conducted in good faith for a period not exceeding thirty (30) days.',
      },
      { type: 'h3', text: 'Arbitration' },
      {
        type: 'p',
        text: 'If the Dispute is not resolved through mediation within thirty (30) days, the Dispute shall be finally resolved by binding arbitration under the Arbitration and Conciliation Act, 1996 (as amended). The arbitration shall be conducted by a sole arbitrator appointed by mutual agreement, or failing agreement, appointed in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Jamshedpur, Jharkhand, India. The language of arbitration shall be English. The arbitrator’s award shall be final and binding on both parties.',
      },
      { type: 'h3', text: 'Courts' },
      {
        type: 'p',
        text: 'If arbitration is not available or enforceable in respect of a particular Dispute, or for the purposes of enforcement of an arbitral award, the parties submit to the exclusive jurisdiction of the courts at Jamshedpur, Jharkhand, India.',
      },
      { type: 'h3', text: 'Interim Relief' },
      {
        type: 'p',
        text: 'Nothing in this Clause prevents either party from seeking urgent interim or injunctive relief from a competent court of law pending the outcome of mediation or arbitration, where such relief is necessary to prevent irreparable harm.',
      },
      { type: 'h3', text: 'Individual Disputes Only' },
      {
        type: 'p',
        text: 'Save where a party to a Dispute is a ‘consumer’ within the meaning of the Consumer Protection Act, 2019, each Dispute under these Terms shall be resolved on an individual basis only. To the fullest extent permitted by applicable Indian law, neither party may bring, join, or participate in any class action, collective action, representative proceeding, or consolidated arbitration or court proceeding against the other arising out of or relating to these Terms or your use of the Platform, and each party waives any right to participate in any such proceeding, in each case other than in respect of a Dispute where a party is a consumer within the meaning of the Consumer Protection Act, 2019. If applicable law precludes enforcement of this Clause in respect of a particular claim, that claim shall be severed and adjudicated separately, and all remaining claims shall continue to be resolved on an individual basis.',
      },
      {
        type: 'note',
        text: 'Note: Where a User is a consumer within the meaning of the Consumer Protection Act, 2019, this Clause does not restrict that User’s statutory right to pursue an individual or collective complaint before a Consumer Commission, or any other collective redressal mechanism available under that Act. The individual-dispute preference set out above applies only to Disputes that fall outside the scope of the Consumer Protection Act, 2019, including commercial and contractual Disputes between Alumnest and a User who is not acting as a consumer.',
      },
    ],
  },
  {
    title: 'Data Protection',
    blocks: [
      { type: 'h3', text: 'Data Fiduciary' },
      {
        type: 'p',
        text: 'For the purposes of the Digital Personal Data Protection Act, 2023 (“DPDP Act”), Alumnest LLP is the Data Fiduciary in respect of Personal Data processed through the Platform. Alumnest determines the purpose and means of processing your Personal Data and is responsible for compliance with the obligations of a Data Fiduciary under the DPDP Act and the Digital Personal Data Protection Rules, 2025.',
      },
      {
        type: 'p',
        text: 'As a Data Fiduciary, Alumnest is responsible for ensuring, having regard to the purposes for which Personal Data is processed, that the Personal Data it processes is complete, accurate, and consistent, particularly where such Personal Data is likely to be used to make a decision affecting a Data Principal or is likely to be disclosed to another Data Fiduciary. Alumnest has deployed processes and technical capability to enable Data Principals to report inconsistencies in their Personal Data and to have such inconsistencies corrected in accordance with the Right to Correction and Erasure described below.',
      },
      { type: 'h3', text: 'Third-Party Data Processors' },
      {
        type: 'p',
        text: 'Alumnest uses the following third-party services as Data Processors under formal Data Processing Agreements. These processors act solely on Alumnest’s instructions and are contractually prohibited from using your Personal Data for any purpose other than that specified by Alumnest:',
      },
      {
        type: 'ul',
        items: [
          'Firebase (Google LLC) — provides authentication (Firebase Authentication), database (Cloud Firestore), cloud storage (Firebase Cloud Storage), and push notification (Firebase Cloud Messaging) services. Firebase processes your user profile data, private messages, identity verification documents (stored in AES-256 encrypted form in a restricted bucket with no public access), push notification tokens, and device identifiers. Firebase’s Privacy Policy is available at https://policies.google.com/privacy. Firebase processes data on Google’s global infrastructure, which includes servers located in the United States and other countries outside India;',
          'Algolia SAS — provides in-Platform search functionality. Algolia processes search queries entered into the Platform’s search interface and indexed profile attributes (name, institution, city, and professional field) used to generate search results. Search query data is retained by Algolia for a default period of ninety (90) days. Algolia may process data on servers located outside India. Algolia’s Privacy Policy is available at https://www.algolia.com/policies/privacy/.',
        ],
      },
      { type: 'h3', text: 'Lawful Basis for Processing' },
      {
        type: 'p',
        text: 'Alumnest processes your Personal Data on the following lawful bases under the DPDP Act:',
      },
      {
        type: 'ul',
        items: [
          'Consent (Section 6, DPDP Act): your free, specific, informed, unconditional, and unambiguous consent, obtained at the time of registration through a clear affirmative act, and sought separately for each distinct processing purpose where required. You may withdraw consent at any time without affecting the lawfulness of prior processing;',
          'Certain Legitimate Uses (Section 7, DPDP Act): in limited circumstances, including: (i) compliance with a legal obligation under any law in force in India, including a court order or government direction; (ii) response to a medical emergency involving a threat to life or safety; and (iii) employment-related processing for Alumnest’s own workforce to the extent applicable.',
        ],
      },
      {
        type: 'p',
        text: 'Alumnest does not rely on ‘legitimate interests’ as a basis for processing, as this is not a recognised ground under the DPDP Act. All processing for platform security and fraud prevention is conducted on the basis of your consent obtained at registration.',
      },
      { type: 'h3', text: 'Rights of Data Principals' },
      {
        type: 'p',
        text: 'As a Data Principal under the DPDP Act, you are entitled to the following rights. To exercise any right, please contact the Grievance Officer at shourya.alumnest@gmail.com with the subject line ‘DPDP Rights Request — [Your Name]’. Alumnest will acknowledge your request within seven (7) days and respond within thirty (30) days:',
      },
      {
        type: 'ul',
        items: [
          'Right to Information (Section 11, DPDP Act): to obtain a summary of Personal Data held about you, the processing activities undertaken, the identities of all Data Processors with whom your data has been shared, and the manner in which it has been processed;',
          'Right to Correction and Erasure (Section 12, DPDP Act): to request correction of inaccurate or incomplete Personal Data, and erasure of Personal Data that Alumnest is no longer required to retain for any lawful purpose. Erasure requests will be acted upon within ninety (90) days;',
          'Right to Withdraw Consent (Section 6(4), DPDP Act): to withdraw consent at any time without detriment. Following withdrawal, Alumnest will cease processing for the relevant purpose within a reasonable period and delete associated data to the extent no other lawful basis applies;',
          'Right to Grievance Redressal (Section 13, DPDP Act): to raise a grievance with the Grievance Officer in connection with any aspect of the processing of your Personal Data. If unsatisfied with the resolution, you may escalate to the Data Protection Board of India, established under Section 18 of the DPDP Act; and',
          'Right of Nomination (Section 14, DPDP Act): to nominate another individual to exercise your rights as a Data Principal in the event of your death or incapacity. Nominations must be submitted in writing to the Grievance Officer.',
        ],
      },
      { type: 'h3', text: 'Personal Data Breach Notification' },
      {
        type: 'p',
        text: 'In the event of a Personal Data breach that is likely to adversely affect your rights or interests, Alumnest shall notify you and the Data Protection Board of India without undue delay upon becoming aware of the breach, in accordance with the breach notification requirements prescribed under the DPDP Act and its Rules. Such notification will include a description of the nature of the breach, the categories and approximate number of Data Principals affected, the likely consequences, and the measures taken or proposed to address the breach.',
      },
      { type: 'h3', text: 'Cross-Border Data Transfers' },
      {
        type: 'p',
        text: 'Your Personal Data may be transferred to and processed in countries outside India by Firebase (Google LLC) and Algolia SAS as described above. These transfers are conducted on the basis of your consent and are subject to the contractual safeguards set out in Alumnest’s Data Processing Agreements with each processor. Alumnest shall comply with any restrictions on cross-border data transfers notified by the Central Government under the DPDP Act.',
      },
      { type: 'h3', text: 'Privacy Policy' },
      {
        type: 'p',
        text: (
          <>
            Alumnest’s comprehensive data protection practices, data collection categories,
            retention schedules, and your full rights as a Data Principal are set out in the{' '}
            <a
              href="/privacy-policy"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              Alumnest Privacy Policy
            </a>
            , which forms part of these Terms pursuant to Clause 21.
          </>
        ),
      },
    ],
  },
  {
    title: 'Governing Law and Jurisdiction',
    blocks: [
      {
        type: 'p',
        text: 'These Terms are governed by and construed in accordance with the laws of India, including the Indian Contract Act, 1872; the Information Technology Act, 2000 and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021; the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025; the Consumer Protection Act, 2019; the Arbitration and Conciliation Act, 1996; and all applicable rules and regulations made thereunder. Subject to Clause 17, all disputes that are not resolved through mediation or arbitration shall be subject to the exclusive jurisdiction of the courts at Jamshedpur, Jharkhand, India.',
      },
    ],
  },
  {
    title: 'Amendments to These Terms',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest reserves the right to amend or update these Terms at any time. Where amendments are proposed, Alumnest shall:',
      },
      {
        type: 'ol',
        items: [
          'Post the revised Terms on this page with an updated Effective Date;',
          'Provide in-app notification and, where reasonably practicable, email notice to all registered users at least fourteen (14) days before the amended Terms take effect;',
          'For amendments that materially affect your rights or obligations, require your fresh and explicit acceptance through an in-app clickthrough mechanism before the amended Terms take effect. Access to the Platform will be suspended for users who have not completed the clickthrough upon expiry of the notice period, and restored upon acceptance. Users who do not wish to accept the revised Terms may delete their Account in accordance with Clause 16 before the amendment takes effect; and',
          'For amendments that are not material to your rights or obligations, your continued use of the Platform after the expiry of the fourteen (14) day notice period constitutes your acceptance of the amended Terms.',
        ],
      },
    ],
  },
  {
    title: 'Miscellaneous',
    blocks: [
      { type: 'h3', text: 'Entire Agreement' },
      {
        type: 'p',
        text: 'These Terms, together with the Alumnest Privacy Policy and any applicable Corporate Partner Agreement or Institutional Partnership Agreement, constitute the entire agreement between you and Alumnest in relation to the Platform and supersede all prior agreements, representations, and understandings between the parties relating to the same subject matter.',
      },
      { type: 'h3', text: 'Severability' },
      {
        type: 'p',
        text: 'If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms if modification is not possible. The remaining provisions of these Terms shall continue in full force and effect.',
      },
      { type: 'h3', text: 'Waiver' },
      {
        type: 'p',
        text: 'Alumnest’s failure to enforce any provision of these Terms at any time shall not constitute a waiver of that provision or of Alumnest’s right to enforce it at a later time. No waiver by Alumnest of any breach shall be construed as a waiver of any subsequent breach.',
      },
      { type: 'h3', text: 'Assignment' },
      {
        type: 'p',
        text: 'You may not assign, transfer, or sub-licence any of your rights or obligations under these Terms without Alumnest’s prior written consent. Alumnest may assign its rights and obligations under these Terms to a successor entity in the event of a merger, acquisition, or restructuring, with prior notice to you.',
      },
      { type: 'h3', text: 'Force Majeure' },
      {
        type: 'p',
        text: 'Alumnest shall not be liable for any failure or delay in performance of its obligations under these Terms arising from circumstances beyond its reasonable control, including acts of God, natural disasters, government action, civil unrest, fire, flood, pandemic, or failures of third-party infrastructure including internet or cloud service providers.',
      },
      { type: 'h3', text: 'Language' },
      {
        type: 'p',
        text: 'These Terms are drafted in the English language. In the event of any conflict or inconsistency between an English version and any translation of these Terms, the English version shall prevail.',
      },
      { type: 'h3', text: 'No Third-Party Beneficiaries' },
      {
        type: 'p',
        text: 'These Terms are for the sole benefit of the parties and their permitted successors and assigns. Nothing in these Terms shall create or be construed to create any right or benefit in any third party.',
      },
    ],
  },
  {
    title: 'Contact Information',
    blocks: [
      { type: 'h3', text: 'IT Rules 2021 — Compliance Officer Appointments' },
      {
        type: 'p',
        text: 'In accordance with the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Alumnest LLP has made and is in the process of completing the following appointments:',
      },
      { type: 'h3', text: 'Resident Grievance Officer (Rule 3(2)(a), IT Rules 2021)' },
      {
        type: 'dl',
        items: [
          { term: 'Name', def: 'Shourya Pandey' },
          { term: 'Designation', def: 'Grievance Officer, Alumnest LLP' },
          { term: 'Email', def: 'shourya.alumnest@gmail.com' },
        ],
      },
      {
        type: 'p',
        text: 'Complaints will be acknowledged within twenty-four (24) hours of receipt and resolved within thirty (30) days of acknowledgement, except for content involving sexual acts or minors, which will be taken down within twenty-four (24) hours of a valid court order or government notification (Rule 3(2)(b)(ii), IT Rules 2021). Complaints or requests may be submitted by email with the subject line: ‘DPDP Rights Request — [Your Name]’ or ‘Grievance — [Your Name]’. Proof of identity may be required before a request is processed.',
      },
      { type: 'h3', text: 'Chief Compliance Officer (Rule 4(1)(a), IT Rules 2021)' },
      {
        type: 'note',
        text: 'PENDING APPOINTMENT: Alumnest LLP is in the process of designating a Chief Compliance Officer in accordance with Rule 4(1)(a) of the IT Rules 2021. The name, designation, and contact details of the Chief Compliance Officer will be published on the Platform and in a revised version of these Terms upon completion of the appointment process. Until such appointment is made, the Resident Grievance Officer (Shourya Pandey) is the primary point of contact for compliance matters.',
      },
      { type: 'h3', text: 'Nodal Contact Person (Rule 4(1)(b), IT Rules 2021)' },
      {
        type: 'note',
        text: 'PENDING APPOINTMENT: Alumnest LLP is in the process of designating a Nodal Contact Person for law enforcement coordination in accordance with Rule 4(1)(b) of the IT Rules 2021. The name, designation, and contact details of the Nodal Contact Person will be published on the Platform and in a revised version of these Terms upon completion. Until such appointment is made, law enforcement and government agency inquiries should be directed to shourya.alumnest@gmail.com.',
      },
      { type: 'h3', text: 'General Contact Details' },
      {
        type: 'dl',
        items: [
          { term: 'Company', def: 'Alumnest LLP' },
          {
            term: 'Registered Address',
            def: '1, Jyoti Marg, Sonari, Jamshedpur 831011, Jharkhand, India',
          },
          { term: 'General Email', def: 'alumnest.pvt@gmail.com' },
          { term: 'Grievance Officer', def: 'Shourya Pandey' },
          { term: 'Grievance Officer Email', def: 'shourya.alumnest@gmail.com' },
          { term: 'Platform Website', def: 'https://alumnest.co' },
          { term: 'Information Website', def: 'https://alumnest.co.in' },
        ],
      },
      { type: 'h3', text: 'Escalation to the Data Protection Board of India' },
      {
        type: 'p',
        text: 'If you are not satisfied with the resolution provided by the Grievance Officer within the prescribed timeline, you may escalate your complaint to the Data Protection Board of India, established under Section 18 of the DPDP Act 2023. The Board became operational on 14 November 2025 and is empowered to adjudicate complaints from Data Principals against Data Fiduciaries.',
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="Legal"
          title="Terms of Service"
          intro="Effective Date: 11 June 2026 · Version 2.0. These Terms of Service constitute a legally binding agreement between you and Alumnest LLP. By downloading the Alumnest application, registering an Account, or using the Platform in any manner, you unconditionally accept and agree to be bound by these Terms. They apply to all users of the Alumnest Platform, including individual alumni, institution administrators, and corporate partners."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
        />
        <LegalContent
          sections={sections}
          closing={
            <p>
              These Terms of Service are effective as of 11 June 2026 (Version 2.0) and supersede
              all prior versions. By using the Alumnest Platform, you confirm that you have read,
              understood, and agreed to be bound by these Terms in their entirety.
            </p>
          }
        />
      </main>
      <Footer pageLink={{ label: 'Next Page [ Privacy Policy ]', href: '/privacy-policy' }} />
    </>
  )
}
