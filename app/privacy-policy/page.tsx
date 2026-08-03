import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubpageHeader } from '@/components/subpage-header'
import { LegalContent, type LegalSection } from '@/components/legal-content'

export const metadata: Metadata = {
  title: 'Privacy Policy | Alumnest',
  description:
    'How Alumnest LLP collects, uses, stores, and protects your personal data, in accordance with the Digital Personal Data Protection Act, 2023.',
}

const sections: LegalSection[] = [
  {
    title: 'Interpretation and Definitions',
    blocks: [
      { type: 'h3', text: 'Interpretation' },
      {
        type: 'p',
        text: 'Words in this Policy that begin with a capital letter have meanings assigned to them under the definitions below. These definitions apply equally whether such terms appear in singular or plural form. References to any legislation include all amendments, re-enactments, and subordinate legislation made under it from time to time.',
      },
      { type: 'h3', text: 'Definitions' },
      {
        type: 'dl',
        items: [
          {
            term: '“Account”',
            def: 'A unique account registered by you on the Alumnest platform, enabling access to its features and community.',
          },
          {
            term: '“Alumnest / Company / We / Us / Our”',
            def: 'Refers to Alumnest LLP, a Limited Liability Partnership registered under the Limited Liability Partnership Act, 2008, with its principal place of business at 1, Jyoti Marg, Sonari, Jamshedpur 831011, Jharkhand, India.',
          },
          {
            term: '“Application / Platform / Service”',
            def: 'The Alumnest mobile application and web platform accessible at alumnest.co — a structured, verified alumni networking ecosystem serving educational institutions across India.',
          },
          {
            term: '“Consent”',
            def: 'A free, specific, informed, unconditional, and unambiguous indication of your agreement to the processing of your Personal Data for a specified purpose, provided through a clear affirmative act, in accordance with Section 6 of the DPDP Act.',
          },
          {
            term: '“Data Fiduciary”',
            def: 'Alumnest LLP, being the entity that alone or in conjunction with others determines the purpose and means of processing your Personal Data, as defined under Section 2(i) of the DPDP Act.',
          },
          {
            term: '“Data Principal”',
            def: 'You — the individual to whom the Personal Data relates, as defined under Section 2(j) of the DPDP Act.',
          },
          {
            term: '“Data Processor”',
            def: 'Any entity that processes Personal Data on behalf of and under the instructions of the Data Fiduciary, as defined under Section 2(k) of the DPDP Act. Firebase (Google LLC) and Algolia SAS are Data Processors for Alumnest.',
          },
          {
            term: '“DPDP Act”',
            def: 'The Digital Personal Data Protection Act, 2023, as enacted by the Parliament of India and notified on 11 August 2023, read with the Digital Personal Data Protection Rules, 2025.',
          },
          {
            term: '“Institution”',
            def: 'An educational institution — school, college, or university — that has entered into a formal partnership agreement with Alumnest LLP and onboarded its alumni community to the Platform.',
          },
          {
            term: '“IT Act”',
            def: 'The Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2011.',
          },
          {
            term: '“Personal Data”',
            def: 'Any data about an individual who is identifiable by or in relation to such data, as defined under Section 2(t) of the DPDP Act. This includes but is not limited to names, email addresses, phone numbers, device identifiers, and professional information.',
          },
          {
            term: '“Processing”',
            def: 'An automated operation or set of operations performed on Personal Data, including collection, recording, organisation, structuring, storage, adaptation, retrieval, use, disclosure, erasure, or destruction, as defined under Section 2(x) of the DPDP Act.',
          },
          {
            term: '“Sensitive Personal Data”',
            def: 'Personal Data which, by reason of its nature, requires heightened protection, including identity documents, financial data, professional history, and data used for targeted identification purposes.',
          },
          {
            term: '“Verified Identity”',
            def: 'The institutional identity of an alumnus confirmed on the Platform through a combination of institutional email verification, identity document review, and peer confirmation — the foundational trust mechanism of the Platform.',
          },
        ],
      },
    ],
  },
  {
    title: 'The Alumnest Mobile Application',
    blocks: [
      {
        type: 'p',
        text: 'The primary channel through which users access Alumnest is the Alumnest mobile application. While the Platform is also accessible via the website at alumnest.co, the mobile application is the principal means by which alumni register, verify their identity, connect with batchmates, access mentorship features, and engage with the wider alumni community. This section sets out information specific to the mobile application, including its distribution, supported platforms, device permissions requested, and the distinction between deleting the application and closing your Account.',
      },
      { type: 'h3', text: 'Distribution and Supported Platforms' },
      {
        type: 'p',
        text: 'The Alumnest mobile application is distributed through the following official app marketplaces and is available on the platforms listed below. Alumnest does not distribute its application through any unofficial or third-party channel:',
      },
      {
        type: 'ul',
        items: [
          'Apple App Store — for devices running iOS 14.0 or later, including iPhone and iPad;',
          'Google Play Store — for devices running Android 8.0 (Oreo) or later.',
        ],
      },
      {
        type: 'p',
        text: 'By downloading the Application from the Apple App Store or Google Play Store, you agree to this Policy in addition to the terms of the respective marketplace from which you downloaded the Application. Apple Inc. and Google LLC are independent entities and are not parties to this Policy.',
      },
      { type: 'h3', text: 'Device Permissions Requested' },
      {
        type: 'p',
        text: 'In order to deliver its features, the Alumnest mobile application requests the following device permissions. Each permission is requested only at the point at which the relevant feature is used for the first time, and not upon installation. You may grant or deny each permission independently, and you may modify your permission choices at any time through your device’s operating system settings.',
      },
      { type: 'h3', text: 'Camera' },
      {
        type: 'p',
        text: 'Purpose: The Application requests access to your device camera solely to enable you to take a photograph for upload as your profile picture. The camera is accessed only when you explicitly initiate a profile photo capture within the Application. Alumnest does not access your camera at any other time, does not record video, and does not transmit any camera data other than the photograph you deliberately choose to capture and upload.',
      },
      {
        type: 'p',
        text: 'Impact of denial: If you deny camera access, you may still upload a profile photograph by selecting an existing image from your device’s photo library, subject to the storage permission described below. Denial of camera access does not affect any other feature of the Application.',
      },
      { type: 'h3', text: 'Photo Library and Device Storage' },
      {
        type: 'p',
        text: 'Purpose: The Application requests access to your device’s photo library to enable you to select and upload an existing photograph as your profile picture, or to upload identity verification documents stored on your device. Access is granted only to files you explicitly select. Alumnest does not scan, index, or access your photo library beyond the specific file you choose to share.',
      },
      {
        type: 'p',
        text: 'Impact of denial: If you deny storage or photo library access, you will be required to use the camera to capture a new photograph for profile upload. Identity verification documents would need to be submitted through an alternative channel as directed by Alumnest support.',
      },
      { type: 'h3', text: 'Push Notifications' },
      {
        type: 'p',
        text: 'Purpose: The Application requests permission to send you push notifications to deliver timely alerts including: new messages from connections, mentorship session reminders, event announcements, connection requests, and important Platform updates. Push notifications are delivered through Firebase Cloud Messaging (FCM), operated by Google LLC, which processes your device-level notification token for this purpose. No message content is stored by FCM beyond delivery.',
      },
      {
        type: 'p',
        text: 'Impact of denial: If you deny push notification permission, you will not receive real-time alerts on your device. All notifications will still be accessible within the Application’s in-app notification centre. This does not affect your access to any other feature of the Application. You may enable or disable push notifications at any time through your device’s notification settings or within the Application’s notification preferences.',
      },
      { type: 'h3', text: 'Deleting Your Account' },
      {
        type: 'p',
        text: 'Account deletion is a permanent and irreversible action. When you choose to delete your Account through the Application or by submitting a written request to the Grievance Officer, the following consequences apply:',
      },
      {
        type: 'ol',
        items: [
          'All Personal Data associated with your Account is permanently and irreversibly deleted from Alumnest’s servers, including your profile information, institutional and academic data, professional and career data, and account credentials;',
          'All content you have posted, shared, or contributed to the Platform — including community posts, comments, reactions, and publicly visible updates — is permanently removed;',
          'All content shared with you by other users through Platform features — including private messages, mentorship session records, referrals, and connection history — is permanently deleted;',
          'Your identity verification documents are permanently deleted in accordance with the retention schedule set out in Section 12 of this Policy;',
          'Your name, profile, and institutional identity are removed from all alumni directories and search indices on the Platform;',
          'This action cannot be undone. Once your Account is deleted, your data cannot be recovered, and you will be required to register as a new user and complete the identity verification process again if you wish to rejoin the Platform.',
        ],
      },
      { type: 'h3', text: 'Uninstalling the Application or Closing a Session' },
      {
        type: 'p',
        text: 'Uninstalling the Alumnest application from your device, or closing the application and ending your session, does not constitute Account deletion and has no effect on your Personal Data held on Alumnest’s servers. Specifically:',
      },
      {
        type: 'ol',
        items: [
          'Your Account, profile, and all associated Personal Data remain intact on Alumnest’s servers exactly as they were at the time you closed the application or uninstalled it;',
          'All content you have posted, shared, messages you have sent or received, and connections you have made remain in place and are not erased;',
          'Locally cached data stored on your device — such as session tokens, cached profile data, and notification preferences — will be removed from your device upon uninstallation, but this does not affect any data held on Alumnest’s servers;',
          'Your Account will remain active and accessible the next time you install the Application and log in with your credentials.',
        ],
      },
      {
        type: 'p',
        text: 'If you wish to permanently erase your Personal Data from Alumnest’s systems, you must explicitly delete your Account as described above, or submit a written erasure request to the Grievance Officer in accordance with Section 13 of this Policy.',
      },
    ],
  },
  {
    title: 'Personal Data We Collect',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest collects Personal Data that is necessary, relevant, and adequate for the specific purposes described in this Policy, in accordance with the principle of data minimisation. The categories of Personal Data we collect are as follows:',
      },
      { type: 'h3', text: 'Personal Identification Data' },
      {
        type: 'ul',
        items: [
          'Full legal name;',
          'Personal and/or institutional email address;',
          'Mobile phone number;',
          'Profile photograph (voluntarily uploaded);',
          'Date of birth (collected for age verification — you must be 18 years of age or older);',
          'Residential city, state, and country of current residence.',
        ],
      },
      { type: 'h3', text: 'Institutional and Academic Data' },
      {
        type: 'ul',
        items: [
          'Name of educational institution attended;',
          'Degree, course, discipline, and field of study;',
          'Graduation year and batch identifier;',
          'Student roll number or institutional identifier, where applicable;',
          'City and state in which the institution is located.',
        ],
      },
      { type: 'h3', text: 'Identity Verification Documents' },
      {
        type: 'p',
        text: 'In order to verify that you genuinely attended the institution you have declared, Alumnest may collect one or more of the following identity documents. These documents constitute Sensitive Personal Data and are subject to the strictest access controls on the Platform:',
      },
      {
        type: 'ul',
        items: [
          'Degree certificates or convocation certificates;',
          'Official institutional identity cards or student identification cards;',
          'Institutional email verification tokens;',
          'Academic marksheets or transcripts, where submitted voluntarily for enhanced verification.',
        ],
      },
      {
        type: 'p',
        text: 'Identity verification documents are stored in encrypted form on Firebase Cloud Storage operated by Google LLC. They are accessible exclusively to authorised Alumnest personnel for the limited purpose of identity verification. They are not shared with your Institution, with other users, or with any third party.',
      },
      { type: 'h3', text: 'Professional and Career Data' },
      {
        type: 'ul',
        items: [
          'Current and past employer names;',
          'Job title and professional designation;',
          'Industry, sector, and field of professional work;',
          'Years of professional experience;',
          'Professional skills and areas of expertise;',
          'LinkedIn profile URL, if voluntarily provided;',
          'Career updates and milestones shared by you on the Platform.',
        ],
      },
      { type: 'h3', text: 'Mentorship and Interaction Data' },
      {
        type: 'ul',
        items: [
          'Mentorship session goals and objectives entered by you;',
          'Mentorship session feedback scores and written feedback;',
          'Referral requests submitted and referral history;',
          'Private messages and communications exchanged through the in-app messaging system;',
          'Connection requests sent and received;',
          'Mentorship availability preferences and scheduling data.',
        ],
      },
      {
        type: 'p',
        text: 'All in-app messages are stored on Cloud Firestore, operated by Firebase (Google LLC), under role-based access controls. Alumnest personnel do not access or read private messages except where strictly necessary for safety investigations, abuse prevention, or compliance with a lawful order.',
      },
      { type: 'h3', text: 'Event and Community Data' },
      {
        type: 'ul',
        items: [
          'Event registrations and attendance records;',
          'Reunion and community event participation history;',
          'Posts, comments, and reactions shared publicly within the Platform;',
          'Event ticket purchase transaction details (processed through our payment provider).',
        ],
      },
      { type: 'h3', text: 'Technical and Usage Data' },
      {
        type: 'p',
        text: 'The following data is collected automatically when you access and use the Platform:',
      },
      {
        type: 'ul',
        items: [
          'Device type, model, and operating system version;',
          'Unique mobile device identifier;',
          'Internet Protocol (IP) address;',
          'Application version and build number;',
          'Features and pages accessed within the Platform, and the sequence of access;',
          'Session start time, end time, and duration;',
          'Push notification delivery and open status, processed via Firebase Cloud Messaging;',
          'Crash reports and diagnostic data, processed via Firebase Authentication session data;',
          'Search queries entered within the Platform, processed by Algolia SAS.',
        ],
      },
      { type: 'h3', text: 'Payment Data' },
      {
        type: 'p',
        text: 'Where you purchase a premium membership or an event ticket, payment processing is handled by our payment service provider. Alumnest does not store full card numbers, CVV codes, banking credentials, or UPI PINs on its own servers. We retain only the following transaction metadata:',
      },
      {
        type: 'ul',
        items: [
          'Transaction reference number;',
          'Payment status (success or failure);',
          'Amount paid and currency;',
          'Date and time of transaction;',
          'Plan or ticket purchased.',
        ],
      },
      { type: 'h3', text: 'Peer-Confirmed Identity Data' },
      {
        type: 'p',
        text: 'As part of the Platform’s trust verification system, when you register on Alumnest, a limited subset of your profile data — specifically your name, institution, and batch year — may be displayed to other verified alumni of the same institution for the purpose of confirming your institutional identity. This peer confirmation mechanism is disclosed to you at the time of registration, and by proceeding with registration you consent to this use of your data during the verification window only.',
      },
    ],
  },
  {
    title: 'Lawful Basis for Processing',
    blocks: [
      {
        type: 'p',
        text: 'Under the Digital Personal Data Protection Act, 2023, Alumnest processes your Personal Data on the following lawful bases. Processing shall not be undertaken for any purpose beyond that for which the lawful basis is established:',
      },
      { type: 'h3', text: 'Consent — Section 6, DPDP Act' },
      {
        type: 'p',
        text: 'The primary basis on which we process your Personal Data is your free, specific, informed, unconditional, and unambiguous consent. Consent is obtained at the time of registration through a clear affirmative act. Consent is sought separately for each distinct purpose where required. You may withdraw consent at any time without affecting the lawfulness of processing undertaken prior to withdrawal.',
      },
      { type: 'h3', text: 'Certain Legitimate Uses — Section 7, DPDP Act' },
      {
        type: 'p',
        text: 'In limited circumstances, and only to the extent permitted under Section 7 of the DPDP Act, Alumnest may process Personal Data without consent, including:',
      },
      {
        type: 'ol',
        items: [
          'For purposes of complying with a legal obligation under any law in force in India, including a court order or direction from a government authority;',
          'For responding to a medical emergency involving a threat to life or safety;',
          'For purposes of employment, including the provision of services or benefits to employees or their nominees, to the extent applicable to Alumnest’s own workforce.',
        ],
      },
      {
        type: 'p',
        text: 'Alumnest does not rely on ‘legitimate interest’ as a basis for processing, as this is not a recognised ground under the DPDP Act 2023. All processing for platform security and fraud prevention is conducted on the basis of your consent, which is obtained at registration.',
      },
    ],
  },
  {
    title: 'Purpose of Processing',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest processes your Personal Data solely for the following specified purposes. Your data shall not be used for any purpose incompatible with those for which your consent was obtained:',
      },
      {
        type: 'dl',
        items: [
          {
            term: 'Platform Operation and Account Management',
            def: 'To create and maintain your Account, verify your institutional identity, and provide access to all alumni features of the Platform, including networking, mentorship, and opportunity discovery.',
          },
          {
            term: 'Alumni Identity Verification',
            def: 'To confirm your institutional identity through email verification, identity document review, and peer confirmation — ensuring the integrity and trustworthiness of the Platform.',
          },
          {
            term: 'Mentorship and Networking',
            def: 'To match you with relevant mentors or mentees, facilitate mentorship sessions, track session goals and feedback, and surface relevant alumni connections based on your institutional background and professional profile.',
          },
          {
            term: 'Opportunity Discovery',
            def: 'To display relevant job postings, referral requests, and collaboration opportunities filtered by your institutional network, geographic location, and professional background.',
          },
          {
            term: 'Event Management',
            def: 'To register you for alumni events, send event-related communications, process ticket payments, and manage reunions and community gatherings on and off the Platform.',
          },
          {
            term: 'Institutional Reporting',
            def: 'To provide Partner Institutions with engagement and career outcome data as described in Section 6, subject to your privacy settings and applicable Data Processing Agreements.',
          },
          {
            term: 'Platform Security and Fraud Prevention',
            def: 'To detect and prevent unauthorised access, identity fraud, impersonation, and misuse of the Platform, on the basis of your consent obtained at registration.',
          },
          {
            term: 'Communications and Notifications',
            def: 'To send you service notifications, security alerts, mentorship reminders, and, with your separate consent, promotional communications about new features, events, and partner offerings.',
          },
          {
            term: 'Service Improvement and Analytics',
            def: 'To analyse Platform usage patterns and improve the performance, features, and user experience of the Platform, using anonymised or aggregated data to the greatest extent practicable.',
          },
          {
            term: 'Legal Compliance',
            def: 'To comply with applicable Indian laws, court orders, and government directives, including requirements under the DPDP Act 2023 and the IT Act 2000.',
          },
          {
            term: 'Business Continuity',
            def: 'In the event of a merger, acquisition, restructuring, or sale of Alumnest LLP or its assets, your Personal Data may be transferred to a successor entity, of which prior written notice will be given to you.',
          },
        ],
      },
    ],
  },
  {
    title: 'Institutional Data Access',
    blocks: [
      {
        type: 'p',
        text: 'Partner Institutions that have formally onboarded their alumni community to Alumnest receive access to an Institutional Dashboard. This section sets out, with precision, the data that Institutions may and may not access.',
      },
      { type: 'h3', text: 'Data Accessible to Institutions' },
      {
        type: 'p',
        text: 'Subject to your privacy settings, Partner Institutions may access the following:',
      },
      {
        type: 'ul',
        items: [
          'Aggregated engagement metrics across the Institution’s alumni community, such as active user counts and event attendance rates — not individual user-level activity;',
          'Aggregated career outcome data, such as industry distribution and city-wise alumni spread — in anonymised and non-identifiable form unless you have opted into individual visibility;',
          'Your name, batch year, and graduation details as part of the Institution’s alumni directory, visible only to verified alumni members of that Institution;',
          'Your RSVP and attendance status for Institution-organised events;',
          'Communications you send through Institution-managed channels on the Platform.',
        ],
      },
      { type: 'h3', text: 'Data Inaccessible to Institutions' },
      {
        type: 'p',
        text: 'Regardless of your privacy settings, the following data is never accessible to Partner Institutions:',
      },
      {
        type: 'ul',
        items: [
          'Private messages and mentorship session content;',
          'Identity verification documents submitted by you;',
          'Your activity within other institutions’ communities or the central lobby;',
          'Payment and transaction information;',
          'Technical and device-level usage data;',
          'Any data you have explicitly marked as private in your account settings.',
        ],
      },
      { type: 'h3', text: 'Your Controls Over Institutional Visibility' },
      {
        type: 'ul',
        items: [
          'You may set your profile visibility to ‘Alumni Network Only’, ‘Institution and Network’, or ‘Private’ at any time from your Account settings;',
          'You may opt out of institutional career outcome reporting by disabling the setting ‘Share career data with my Institution’ in your privacy preferences;',
          'Exercising these controls will not affect your access to any features of the Platform.',
        ],
      },
      { type: 'h3', text: 'Institutional Data Processing Agreements' },
      {
        type: 'p',
        text: 'Every Partner Institution executes a Data Processing Agreement (DPA) with Alumnest LLP before receiving access to the Institutional Dashboard. Such agreements contractually prohibit Institutions from using alumni data for any purpose other than alumni community management, engagement, and institutional accreditation. Institutions are expressly prohibited from selling, transferring, or commercially exploiting any alumni data accessed through Alumnest.',
      },
    ],
  },
  {
    title: 'Corporate Partner Engagement',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest enables Corporate Partners — companies seeking to recruit, sponsor, or engage within verified alumni networks — to access the Platform’s Central Lobby marketplace. This section sets out the precise scope of such engagement.',
      },
      { type: 'h3', text: 'What Corporate Partners May Do' },
      {
        type: 'ul',
        items: [
          'Post job listings and professional opportunities visible to alumni who have activated the ‘Open to Opportunities’ setting in their Account;',
          'Run targeted recruitment campaigns filtered by institution, graduation year, city, or professional field — exclusively to alumni who have enabled ‘Open to Opportunities’;',
          'Sponsor events and community activities visible to the broader alumni network;',
          'Access anonymised, aggregated demographic data for campaign planning purposes — not individual user profiles.',
        ],
      },
      { type: 'h3', text: 'What Corporate Partners May Not Do' },
      {
        type: 'ul',
        items: [
          'Access individual alumni profiles without the user’s explicit opt-in;',
          'Contact users directly through the Platform without the user’s prior opt-in to corporate communications;',
          'Access identity verification documents, private messages, or mentorship data;',
          'Export, download, or transfer alumni profile data outside the Alumnest Platform;',
          'Process alumni data for any purpose other than that disclosed at the time of engagement.',
        ],
      },
      { type: 'h3', text: 'Your Controls Over Corporate Engagement' },
      {
        type: 'ul',
        items: [
          'You may disable ‘Open to Opportunities’ at any time from your Account settings to exclude yourself from all corporate recruitment targeting;',
          'You may opt out of sponsored content and corporate event notifications from your notification preferences;',
          'Exercising these controls does not affect your access to any community features of the Platform.',
        ],
      },
    ],
  },
  {
    title: 'Data Sharing and Third-Party Disclosure',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest does not sell, rent, or trade your Personal Data to any third party. We disclose your data only in the circumstances described below, and only to the extent necessary for the specified purpose:',
      },
      {
        type: 'dl',
        items: [
          {
            term: 'With Data Processors',
            def: 'We share Personal Data with Firebase (Google LLC) and Algolia SAS, acting as Data Processors, solely to operate and maintain the Platform. All such sharing is governed by formal Data Processing Agreements. See Section 9 for full details.',
          },
          {
            term: 'With Partner Institutions',
            def: 'As described in Section 6, subject to your privacy settings and the applicable Data Processing Agreement between Alumnest and the Institution.',
          },
          {
            term: 'With Corporate Partners',
            def: 'Only as described in Section 7 and only where you have affirmatively opted in to such engagement.',
          },
          {
            term: 'With Other Platform Users',
            def: 'Profile information you have made publicly visible within the Platform — such as your name, institution, and professional information — is visible to other verified alumni in accordance with your privacy settings.',
          },
          {
            term: 'Disclosure of Third-Party Data Sharing',
            def: 'In accordance with Section 12(a)(ii) of the DPDP Act, you have the right to obtain, upon request, the identities of all Data Fiduciaries and Data Processors with whom your Personal Data has been shared. You may exercise this right by contacting the Grievance Officer at the details set out in Section 17.',
          },
          {
            term: 'For Business Transfers',
            def: 'In the event of a merger, acquisition, restructuring, or sale of Alumnest LLP or its business assets, your Personal Data may be transferred to the acquirer or successor entity. We shall provide you with prior written notice of any such transfer and, where required under the DPDP Act, seek your fresh consent.',
          },
          {
            term: 'For Legal and Regulatory Compliance',
            def: 'We may disclose your Personal Data where required to do so by law, court order, government direction, or in response to a lawful request from a law enforcement or regulatory authority. We will notify you of any such disclosure unless prohibited from doing so by applicable law or judicial order.',
          },
          {
            term: 'With Your Explicit Consent',
            def: 'For any purpose not specified in this Policy, your Personal Data will be disclosed only with your prior, specific, and explicit consent.',
          },
        ],
      },
    ],
  },
  {
    title: 'Third-Party Service Providers',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest uses the following third-party services to operate the Platform. Each acts as a Data Processor under a formal Data Processing Agreement with Alumnest LLP. These providers process data on our instructions and are contractually prohibited from using your data for their own purposes.',
      },
      { type: 'h3', text: 'Firebase — Google LLC' },
      {
        type: 'p',
        text: 'Firebase is a suite of platform services provided by Google LLC, headquartered at 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Firebase processes data on Google’s global infrastructure, including servers located in the United States and other countries outside India. We use the following Firebase services:',
      },
      {
        type: 'dl',
        items: [
          {
            term: 'Firebase Authentication',
            def: 'Manages user registration, login, and session token management. Processes your email address, phone number (where provided for two-factor authentication), and device identifiers.',
          },
          {
            term: 'Cloud Firestore and Realtime Database',
            def: 'Stores your profile data, community posts, private messages, mentorship records, event data, and all user-generated content on the Platform in real time.',
          },
          {
            term: 'Firebase Cloud Storage',
            def: 'Stores identity verification documents and profile photographs in AES-256 encrypted form, in a restricted storage bucket with no public access URLs.',
          },
          {
            term: 'Firebase Cloud Messaging (FCM)',
            def: 'Delivers push notifications to your device for messages, event reminders, mentorship alerts, and Platform notifications. Processes your device-level push notification token.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Google’s Privacy Policy is accessible at https://policies.google.com/privacy. Firebase’s Data Processing and Security Terms are accessible at https://firebase.google.com/terms/data-processing-terms.',
      },
      {
        type: 'note',
        text: 'Cross-Border Transfer Notice (Firebase): Firebase processes data on Google’s global infrastructure, which includes servers in the United States and other countries outside India. By using the Alumnest Platform, you consent to this transfer as necessary for the provision of core services. This transfer is governed by the contractual commitments set out in Google’s Data Processing Terms.',
      },
      { type: 'h3', text: 'Algolia SAS' },
      {
        type: 'p',
        text: 'Algolia is a search-as-a-service platform provided by Algolia SAS, registered in France with offices at 301 Howard Street, Suite 300, San Francisco, CA 94105, USA. Algolia powers the in-Platform search functionality, enabling alumni to search for batchmates, mentors, job opportunities, and events.',
      },
      {
        type: 'p',
        text: 'Data processed by Algolia includes: (a) search queries you enter into the Platform’s search interface; and (b) indexed profile attributes — name, institution, city, and professional field — used to generate search results. Algolia processes data on servers which may be located outside India. Search query data is retained by Algolia for a default period of 90 days.',
      },
      {
        type: 'p',
        text: 'Algolia’s Privacy Policy is accessible at https://www.algolia.com/policies/privacy/. A formal Data Processing Agreement is in place between Algolia and Alumnest LLP.',
      },
    ],
  },
  {
    title: 'Data and Analytics Products',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest intends, in a future phase of its product development, to offer data and analytics products derived from aggregated alumni data. This section discloses our plans and your rights in connection with such products.',
      },
      { type: 'h3', text: 'Nature of the Product' },
      {
        type: 'ul',
        items: [
          'Anonymised, aggregated insights derived from alumni career outcome data across graduation years and institutions — for example, average time-to-employment by cohort, industry distribution by institution, or geographic mobility patterns;',
          'Such insights will be in a form that cannot reasonably be used to identify any individual Data Principal;',
          'This product will not involve the sale or disclosure of individual user profiles, identified records, or Personal Data.',
        ],
      },
      { type: 'h3', text: 'Anonymisation Standard' },
      {
        type: 'p',
        text: 'For the purposes of this Section, ‘anonymised’ means data that has been irreversibly processed such that it cannot, directly or indirectly, identify a Data Principal, having regard to all the means reasonably likely to be used for identification. Alumnest will apply a rigorous anonymisation process and conduct re-identification risk assessments prior to any commercial use of aggregated data.',
      },
      { type: 'h3', text: 'Advance Notice and Opt-Out' },
      {
        type: 'p',
        text: 'Before this feature is activated, Alumnest will provide all registered users with a minimum of thirty (30) days’ advance notice and a clear, accessible opt-out mechanism within Account settings under ‘Data and Privacy.’ Opting out will exclude your data from all aggregation used for commercial analytics or research purposes. This opt-out is available at no cost and does not affect your access to any Platform features.',
      },
      {
        type: 'note',
        text: 'CURRENT STATUS: This product is not yet active. No alumni data is currently being shared with any external party for analytics, research, or commercial purposes.',
      },
    ],
  },
  {
    title: 'Cross-Border Transfer of Personal Data',
    blocks: [
      {
        type: 'p',
        text: 'Your Personal Data may be transferred to and processed in countries outside India by our Data Processors — Firebase (Google LLC) and Algolia SAS — as described in Section 8. These transfers are necessary for the operation of the Platform.',
      },
      {
        type: 'p',
        text: 'Under the DPDP Act 2023, the Central Government of India may, by notification, restrict the transfer of Personal Data to certain countries or territories. Alumnest shall comply with any such notifications and update its data transfer practices accordingly. Until such restrictions are notified, transfers to the United States and France (where Algolia is headquartered) proceed on the basis of your consent and the contractual safeguards described below.',
      },
      {
        type: 'p',
        text: 'All cross-border transfers of Personal Data are subject to the following safeguards:',
      },
      {
        type: 'ul',
        items: [
          'Formal Data Processing Agreements with all Data Processors, imposing obligations to maintain security standards equivalent to those required under Indian law;',
          'Contractual restrictions prohibiting Data Processors from using your Personal Data for any purpose beyond those specified by Alumnest;',
          'Ongoing monitoring of compliance by Data Processors with their contractual obligations.',
        ],
      },
    ],
  },
  {
    title: 'Retention of Personal Data',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest retains your Personal Data only for as long as is necessary for the purpose for which it was collected, or as required by applicable law. The following retention periods apply to each category of Personal Data:',
      },
      {
        type: 'dl',
        items: [
          {
            term: 'Account and Profile Data',
            def: 'For the duration of your Account, and for a period of twenty-four (24) months following Account closure, for the purpose of resolving post-termination disputes and addressing user queries.',
          },
          {
            term: 'Identity Verification Documents',
            def: 'For the duration of your Account, and for a period of twelve (12) months following Account closure, for fraud prevention and audit purposes. Documents are securely and permanently deleted upon expiry of this period.',
          },
          {
            term: 'Mentorship and Interaction Data',
            def: 'For the duration of your Account and for a period of twenty-four (24) months following Account closure, for quality assurance and dispute resolution purposes.',
          },
          {
            term: 'Private In-App Messages',
            def: 'For the duration of your Account. Private messages are deleted within thirty (30) days of Account closure and are not retained beyond the account relationship.',
          },
          {
            term: 'Professional and Career Data',
            def: 'For the duration of your Account and for a period of twenty-four (24) months following Account closure, for alumni outcome analytics and institutional reporting in anonymised form.',
          },
          {
            term: 'Event and Payment Records',
            def: 'For a period of seven (7) years from the date of transaction, in compliance with applicable Indian financial record-keeping obligations.',
          },
          {
            term: 'Technical and Usage Data',
            def: 'For a period of twenty-four (24) months from the date of collection, for security monitoring, troubleshooting, and service improvement.',
          },
          {
            term: 'Push Notification Tokens',
            def: 'Until you uninstall the Application or revoke notification permissions, at which point the token is automatically invalidated and deleted.',
          },
          {
            term: 'Search Query Data (Algolia)',
            def: 'For a default period of ninety (90) days, as per Algolia’s standard data retention policy. Search queries are not linked to your identity after this period.',
          },
          {
            term: 'Legal Hold Data',
            def: 'For such period as is necessary to establish, exercise, or defend a legal claim, following which it is deleted in accordance with the applicable retention schedule.',
          },
        ],
      },
      { type: 'h3', text: 'Deletion and Anonymisation' },
      {
        type: 'ul',
        items: [
          'Upon expiry of the applicable retention period, Personal Data is securely deleted from all active systems;',
          'Residual copies retained in encrypted backup systems are purged within ninety (90) days of the scheduled backup rotation cycle;',
          'Where permanent deletion is not technically feasible for a specific data type, the data is irreversibly anonymised such that it cannot be attributed to any identifiable individual;',
          'Anonymised data, once anonymised in accordance with Section 10, may be retained for research and analytics purposes without a defined retention limit.',
        ],
      },
    ],
  },
  {
    title: 'Your Rights as a Data Principal',
    blocks: [
      {
        type: 'p',
        text: 'As a Data Principal under the Digital Personal Data Protection Act, 2023, you are entitled to the following rights. To exercise any of these rights, please contact the Grievance Officer as set out in Section 17. We will acknowledge your request within seven (7) days and respond within thirty (30) days, unless a different timeline is prescribed by the DPDP Act or its Rules.',
      },
      {
        type: 'dl',
        items: [
          {
            term: 'Right to Obtain Information — Section 11(a), DPDP Act',
            def: 'You have the right to obtain a summary of the Personal Data that Alumnest holds about you, the processing activities undertaken in relation to such data, the identities of all Data Processors with whom your data has been shared, and the manner in which it has been processed.',
          },
          {
            term: 'Right to Correction and Erasure — Section 12, DPDP Act',
            def: 'You have the right to request that Alumnest correct inaccurate or misleading Personal Data, complete incomplete Personal Data, and update Personal Data that is no longer current. You also have the right to request the erasure of Personal Data that Alumnest is no longer required to retain for legal or contractual purposes, or where you have withdrawn your consent and no other lawful basis applies. Erasure requests will be acted upon within ninety (90) days.',
          },
          {
            term: 'Right to Withdraw Consent — Section 6(4), DPDP Act',
            def: 'Where processing is based on your consent, you may withdraw that consent at any time without detriment to you. Withdrawal of consent will not affect the lawfulness of processing undertaken prior to the date of withdrawal. Following withdrawal, Alumnest will cease processing for the relevant purpose within a reasonable period, and will delete the associated data to the extent it is no longer required for any other lawful purpose.',
          },
          {
            term: 'Right to Grievance Redressal — Section 13, DPDP Act',
            def: 'You have the right to raise a grievance with our Grievance Officer in connection with any aspect of the processing of your Personal Data or the exercise of any of your rights under this Policy. The Grievance Officer will respond within thirty (30) days of receipt. If you are not satisfied with the response, you may escalate your complaint to the Data Protection Board of India.',
          },
          {
            term: 'Right of Nomination — Section 14, DPDP Act',
            def: 'You have the right to nominate another individual to exercise your rights as a Data Principal on your behalf in the event of your death or incapacity. Nominations may be submitted in writing to the Grievance Officer.',
          },
          {
            term: 'Right to Data Portability — Best Practice Commitment',
            def: 'While the DPDP Act 2023 does not as yet prescribe a statutory right to data portability, Alumnest is committed as a matter of best practice to providing you with a copy of your Account data in a commonly used, structured, machine-readable format upon request, to the extent technically feasible. Such requests should be directed to the Grievance Officer.',
          },
        ],
      },
    ],
  },
  {
    title: 'Children’s Privacy',
    blocks: [
      {
        type: 'p',
        text: 'The Alumnest Platform is intended exclusively for individuals who are eighteen (18) years of age or older. In accordance with the Digital Personal Data Protection Act, 2023, which defines a ‘child’ as any person under the age of eighteen years, Alumnest does not knowingly collect, process, or store the Personal Data of any person below that age.',
      },
      {
        type: 'p',
        text: 'During registration, all users are required to confirm that they are eighteen (18) years of age or older, and to provide their date of birth as a technical verification measure. Alumnest reserves the right to implement additional age verification mechanisms, including those prescribed under the DPDP Rules, as and when required.',
      },
      {
        type: 'p',
        text: 'In the event that Alumnest becomes aware — through any means — that a user below the age of eighteen has registered on the Platform, Alumnest will, without delay:',
      },
      {
        type: 'ol',
        items: [
          'Suspend the Account pending investigation;',
          'Permanently delete all Personal Data associated with the Account;',
          'Notify a parent or legal guardian of the minor, where reasonably identifiable; and',
          'Record the incident for compliance and audit purposes.',
        ],
      },
      {
        type: 'p',
        text: 'If you are a parent or legal guardian and have reason to believe that a person under the age of eighteen has registered on the Alumnest Platform, please contact us immediately at alumnest.pvt@gmail.com with the subject line ‘Minor User Report’.',
      },
    ],
  },
  {
    title: 'Cookies and Local Storage',
    blocks: [
      { type: 'h3', text: 'Website Cookies' },
      {
        type: 'p',
        text: 'When you access Alumnest through our website at alumnest.co, we and our third-party service providers may use cookies and similar tracking technologies to maintain your session, remember your preferences, and analyse usage patterns. The types of cookies used are:',
      },
      {
        type: 'ul',
        items: [
          'Strictly Necessary Cookies: Required for the Platform to function, including session authentication tokens managed through Firebase Authentication. These cannot be disabled without affecting Platform functionality;',
          'Analytical Cookies: Used to understand how users interact with the Platform, collected through Firebase Analytics. These are subject to your consent and may be declined;',
          'Preference Cookies: Used to remember your language, notification, and display preferences.',
        ],
      },
      { type: 'h3', text: 'Mobile Application Local Storage' },
      {
        type: 'p',
        text: 'The Alumnest mobile application may store data locally on your device using secure local storage, including session tokens, cached profile data, and notification preferences. This data remains on your device and is not transmitted to our servers except as necessary for Platform operations. Uninstalling the Application will remove all locally stored data from your device.',
      },
      { type: 'h3', text: 'Managing Cookies' },
      {
        type: 'p',
        text: 'You may control cookie preferences through your browser settings or through the cookie preference manager available on our website. Disabling strictly necessary cookies may impair the functionality of the Platform. For mobile application local storage, preferences may be managed through your device operating system settings.',
      },
    ],
  },
  {
    title: 'Security of Personal Data',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest treats data security as a product-level obligation, not merely a compliance requirement. The following technical and organisational measures are implemented and maintained to protect your Personal Data:',
      },
      { type: 'h3', text: 'Technical Measures' },
      {
        type: 'ul',
        items: [
          'All data in transit between your device and Alumnest’s servers is encrypted using Transport Layer Security (TLS) version 1.2 or higher;',
          'All data at rest on Firebase Cloud Storage and Cloud Firestore is encrypted using AES-256 encryption, managed by Google LLC;',
          'Firebase Security Rules enforce strict role-based access controls, ensuring that Partner Institutions can access only data scoped to their own alumni community;',
          'Firebase Authentication manages all session tokens; passwords are never stored in plain text on Alumnest’s systems;',
          'Identity verification documents are stored in a restricted Firebase Cloud Storage bucket with no public access URLs — accessible only through authenticated and authorised API calls;',
          'Algolia search indices are protected using API key scoping, preventing cross-account or cross-institution data access.',
        ],
      },
      { type: 'h3', text: 'Organisational Measures' },
      {
        type: 'ul',
        items: [
          'Access to production systems and Personal Data is restricted to authorised Alumnest personnel on a strict need-to-know basis;',
          'All personnel with access to Personal Data are subject to confidentiality obligations;',
          'Data Processing Agreements are executed with all third-party Data Processors prior to any data access being granted;',
          'Security practices are reviewed periodically and updated in line with applicable legal requirements and evolving industry standards.',
        ],
      },
      { type: 'h3', text: 'Personal Data Breach Notification' },
      {
        type: 'p',
        text: 'In the event of a Personal Data breach that is likely to adversely affect your rights or interests, Alumnest shall notify you and, where required, the Data Protection Board of India, without undue delay upon becoming aware of the breach, in accordance with the breach notification requirements prescribed under the DPDP Act 2023 and its Rules. Such notification will include, to the extent known at the time:',
      },
      {
        type: 'ol',
        items: [
          'A description of the nature of the breach;',
          'The categories and approximate number of Data Principals affected;',
          'The likely consequences of the breach; and',
          'The measures taken or proposed to address the breach.',
        ],
      },
      {
        type: 'note',
        text: 'LIMITATION: No method of electronic transmission or storage is entirely secure. While Alumnest applies all technically and legally required safeguards, it cannot guarantee the absolute security of your Personal Data. Users are encouraged to use strong passwords, enable two-factor authentication where available, and notify Alumnest immediately of any suspected unauthorised access to their Account.',
      },
    ],
  },
  {
    title: 'Grievance Redressal',
    blocks: [
      {
        type: 'p',
        text: 'In accordance with Rule 3(2)(a) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2011, and the grievance mechanism requirements under the Digital Personal Data Protection Act, 2023, Alumnest LLP has designated the following individual as its Grievance Officer:',
      },
      {
        type: 'dl',
        items: [
          { term: 'Name', def: 'Shourya Pandey' },
          { term: 'Designation', def: 'Grievance Officer, Alumnest LLP' },
          { term: 'Email Address', def: 'shourya.alumnest@gmail.com' },
          {
            term: 'Response Timeline',
            def: 'Acknowledgement within seven (7) working days of receipt; resolution within thirty (30) days of receipt of complaint.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Complaints or requests may be submitted by email with the subject line: ‘DPDP Rights Request — [Your Name]’ or ‘Grievance — [Your Name]’. You may be required to provide proof of identity before your request is processed.',
      },
      { type: 'h3', text: 'Escalation to the Data Protection Board of India' },
      {
        type: 'p',
        text: 'If you are not satisfied with the resolution provided by the Grievance Officer within the prescribed timeline, you may escalate your complaint to the Data Protection Board of India, established under Section 18 of the DPDP Act 2023. The Board became operational on 14 November 2025 and is empowered to adjudicate complaints from Data Principals against Data Fiduciaries.',
      },
    ],
  },
  {
    title: 'Amendments to this Policy',
    blocks: [
      {
        type: 'p',
        text: 'Alumnest may amend or update this Policy from time to time to reflect changes in its data practices, applicable legal requirements, or Platform features. Where material amendments are made, Alumnest shall:',
      },
      {
        type: 'ol',
        items: [
          'Post the revised Policy on this page with an updated Effective Date;',
          'Provide in-app notification and, where reasonably practicable, email notice to all registered users at least fourteen (14) days before the changes take effect;',
          'Where an amendment materially alters how Personal Data is processed or affects your rights, seek your fresh and explicit consent before the amendment takes effect, where required under the DPDP Act.',
        ],
      },
      {
        type: 'p',
        text: 'Continued use of the Platform after the Effective Date of any amended Policy constitutes your acknowledgement of, and agreement to, the revised terms. If you do not agree with any material amendment, you may delete your Account before the effective date of the amendment.',
      },
    ],
  },
  {
    title: 'Governing Law and Jurisdiction',
    blocks: [
      {
        type: 'p',
        text: 'This Policy is governed by and construed in accordance with the laws of India, including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and all rules and regulations made thereunder.',
      },
      {
        type: 'p',
        text: 'Any dispute arising out of or in connection with this Policy, including any question regarding its existence, validity, or interpretation, shall be subject to the exclusive jurisdiction of the courts at Jamshedpur, Jharkhand, India, except where otherwise required by the DPDP Act or a direction of the Data Protection Board of India.',
      },
    ],
  },
  {
    title: 'Contact Information',
    blocks: [
      {
        type: 'p',
        text: 'For any questions, requests, or concerns regarding this Privacy Policy or the processing of your Personal Data, please contact Alumnest LLP through the following channels:',
      },
      {
        type: 'dl',
        items: [
          { term: 'Company', def: 'Alumnest LLP' },
          {
            term: 'Registered Address',
            def: '1, Jyoti Marg, Sonari, Jamshedpur 831011, Jharkhand, India',
          },
          { term: 'General Email', def: 'alumnest.pvt@gmail.com' },
          { term: 'Grievance Officer Email', def: 'shourya.alumnest@gmail.com' },
          { term: 'Platform Website', def: 'https://alumnest.co' },
          { term: 'Information Website', def: 'https://alumnest.co.in' },
        ],
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHeader
          label="Legal"
          title="Privacy Policy"
          intro="Effective Date: 08 June 2026 · Version 1.0 · Governed by the Digital Personal Data Protection Act, 2023 & the Information Technology Act, 2000. This Policy governs the collection, use, storage, disclosure, and protection of your Personal Data by Alumnest LLP when you access or use the Alumnest platform. By registering an account or using the Service, you acknowledge that you have read, understood, and agreed to this Policy."
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        />
        <LegalContent
          sections={sections}
          closing={
            <p>
              This Privacy Policy is effective as of 08 June 2026 and supersedes all prior
              versions. It is the complete and authoritative statement of Alumnest LLP’s data
              protection practices and obligations to its Data Principals.
            </p>
          }
        />
      </main>
      <Footer pageLink={{ label: 'Next Page [ Terms of Service ]', href: '/terms-of-service' }} />
    </>
  )
}
