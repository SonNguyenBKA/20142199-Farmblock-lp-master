export interface PolicyListItem {
  text: string
}

export interface PolicySubsection {
  number: string
  title: string
  intro?: string
  items?: PolicyListItem[]
  paragraphs?: string[]
}

export interface PolicyListGroup {
  intro?: string
  items: PolicyListItem[]
}

export interface PolicySection {
  number: number
  title: string
  paragraphs?: string[]
  closingParagraphs?: string[]
  items?: PolicyListItem[]
  listGroups?: PolicyListGroup[]
  subsections?: PolicySubsection[]
}

export const privacyPolicyMeta = {
  title: 'Privacy Policy for FarmBlock',
  effectiveDate: '1st Jan, 2026',
  lastUpdated: '13th May, 2026',
}

export const privacyPolicySections: PolicySection[] = [
  {
    number: 1,
    title: 'Introduction',
    paragraphs: [
      'FarmBlock (“FarmBlock”, “we”, “our”, or “us”) is a technology-integrated agriculture platform operating in Vietnam, focused on agricultural operations, land management visibility, environmental monitoring, and digital infrastructure for high-tech farming.',
      'This Privacy Policy explains how FarmBlock collects, uses, stores, shares, and protects personal information when you:',
    ],
    items: [
      { text: 'Access or use the FarmBlock website, applications, dashboards, or services;' },
      { text: 'Interact with FarmBlock as a landowner, investor, partner, customer, or website visitor;' },
      { text: 'Communicate with us through online or offline channels.' },
    ],
    closingParagraphs: [
      'By accessing or using FarmBlock’s services, you acknowledge that you have read and understood this Privacy Policy.',
    ],
  },
  {
    number: 2,
    title: 'Scope of Application',
    paragraphs: ['This Privacy Policy applies to:'],
    items: [
      { text: 'The FarmBlock website;' },
      { text: 'Mobile applications and dashboards;' },
      { text: 'Farm monitoring systems;' },
      { text: 'IoT-connected agricultural infrastructure;' },
      { text: 'Customer support and communication channels;' },
      { text: 'NFC onboarding and digital ownership activation systems;' },
      { text: 'Any related FarmBlock-operated digital services.' },
    ],
  },
  {
    number: 3,
    title: 'Information We Collect',
    subsections: [
      {
        number: '3.1',
        title: 'Personal Information',
        intro: 'We may collect personal information including:',
        items: [
          { text: 'Full name;' },
          { text: 'Phone number;' },
          { text: 'Email address;' },
          { text: 'Mailing or billing address;' },
          { text: 'National identification information where legally required;' },
          { text: 'Investor or land ownership-related information;' },
          { text: 'Account credentials and authentication data.' },
        ],
      },
      {
        number: '3.2',
        title: 'Operational & Platform Data',
        intro: 'When you use FarmBlock services, we may collect:',
        items: [
          { text: 'Plot ownership or management information;' },
          { text: 'Farming activity logs;' },
          { text: 'Operational records;' },
          { text: 'Dashboard usage data;' },
          { text: 'Financial transaction records related to platform services;' },
          { text: 'Communications with FarmBlock support teams.' },
        ],
      },
      {
        number: '3.3',
        title: 'Device & Technical Information',
        intro: 'We may automatically collect:',
        items: [
          { text: 'IP address;' },
          { text: 'Device identifiers;' },
          { text: 'Browser type;' },
          { text: 'Operating system;' },
          { text: 'Access timestamps;' },
          { text: 'Log files;' },
          { text: 'Mobile application analytics;' },
          { text: 'Geolocation data where enabled.' },
        ],
      },
      {
        number: '3.4',
        title: 'Sensor & Agricultural Monitoring Data',
        intro: 'FarmBlock operates environmental and monitoring systems across farms, including:',
        items: [
          { text: 'Soil humidity;' },
          { text: 'Temperature;' },
          { text: 'Wind speed;' },
          { text: 'Water-related metrics;' },
          { text: 'Environmental sensor readings;' },
          { text: 'Camera and observation systems.' },
        ],
        paragraphs: [
          'Such data may be associated with specific plots, operational zones, or user-linked agricultural assets.',
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'How We Use Information',
    paragraphs: ['We use collected information to:'],
    items: [
      { text: 'Provide and operate FarmBlock services;' },
      { text: 'Manage user accounts and authentication;' },
      { text: 'Enable land and plot monitoring;' },
      { text: 'Operate environmental dashboards and analytics;' },
      { text: 'Improve agricultural operations and infrastructure;' },
      { text: 'Provide customer support;' },
      { text: 'Facilitate onboarding and NFC-based ownership activation;' },
      { text: 'Send service notifications and updates;' },
      { text: 'Improve platform security and fraud prevention;' },
      { text: 'Comply with legal and regulatory obligations;' },
      { text: 'Conduct internal analytics and operational research.' },
    ],
    closingParagraphs: [
      'FarmBlock’s current operational focus includes building governance and agricultural data infrastructure to improve transparency and operational decision-making.',
    ],
  },
  {
    number: 5,
    title: 'Legal Basis for Processing',
    paragraphs: ['Where applicable under relevant laws, FarmBlock processes personal data based on:'],
    items: [
      { text: 'User consent;' },
      { text: 'Contractual necessity;' },
      { text: 'Compliance with legal obligations;' },
      { text: 'Legitimate business interests;' },
      { text: 'Protection of users, operations, and platform security.' },
    ],
  },
  {
    number: 6,
    title: 'Data Sharing & Disclosure',
    paragraphs: ['FarmBlock does not sell personal information.', 'We may share information with:'],
    items: [
      { text: 'Authorized service providers and infrastructure partners;' },
      { text: 'Agricultural technology partners;' },
      { text: 'Cloud hosting and analytics providers;' },
      { text: 'Legal, regulatory, or governmental authorities where required by law;' },
      { text: 'Professional advisors, auditors, or compliance providers;' },
      { text: 'Operational partners supporting farm management services.' },
    ],
    closingParagraphs: [
      'Information is shared only when necessary for operational, contractual, legal, or security purposes.',
    ],
  },
  {
    number: 7,
    title: 'Data Security',
    paragraphs: [
      'FarmBlock implements commercially reasonable technical and organizational security measures designed to protect information against:',
    ],
    listGroups: [
      {
        items: [
          { text: 'Unauthorized access;' },
          { text: 'Loss or theft;' },
          { text: 'Misuse;' },
          { text: 'Disclosure;' },
          { text: 'Alteration or destruction.' },
        ],
      },
      {
        intro: 'Security measures may include:',
        items: [
          { text: 'Access controls;' },
          { text: 'Encrypted communications;' },
          { text: 'Internal authorization systems;' },
          { text: 'Infrastructure monitoring;' },
          { text: 'Operational logging;' },
          { text: 'Secure cloud environments.' },
        ],
      },
    ],
    closingParagraphs: [
      'However, no digital platform or transmission method can guarantee absolute security.',
    ],
  },
  {
    number: 8,
    title: 'Data Retention',
    paragraphs: ['We retain personal information only for as long as reasonably necessary to:'],
    items: [
      { text: 'Fulfill the purposes described in this Privacy Policy;' },
      { text: 'Operate FarmBlock services;' },
      { text: 'Maintain legal and accounting records;' },
      { text: 'Resolve disputes;' },
      { text: 'Enforce agreements;' },
      { text: 'Comply with applicable laws and regulations.' },
    ],
    closingParagraphs: [
      'When data is no longer required, it may be securely deleted, anonymized, or archived.',
    ],
  },
  {
    number: 9,
    title: 'Cookies & Analytics',
    paragraphs: ['FarmBlock may use cookies, analytics tools, and similar technologies to:'],
    items: [
      { text: 'Improve website functionality;' },
      { text: 'Analyze platform usage;' },
      { text: 'Enhance performance and user experience;' },
      { text: 'Maintain security;' },
      { text: 'Remember user preferences.' },
    ],
    closingParagraphs: [
      'Users may adjust browser settings to disable cookies, though certain platform features may become limited.',
    ],
  },
  {
    number: 10,
    title: 'Third-Party Services',
    paragraphs: ['FarmBlock services may integrate with or link to third-party services, including:'],
    items: [
      { text: 'Mapping services;' },
      { text: 'Payment providers;' },
      { text: 'Analytics platforms;' },
      { text: 'Cloud infrastructure;' },
      { text: 'Video or camera streaming systems.' },
    ],
    closingParagraphs: [
      'FarmBlock is not responsible for the privacy practices of third-party services not operated by us.',
    ],
  },
  {
    number: 11,
    title: 'User Rights',
    paragraphs: ['Subject to applicable laws, users may have rights to:'],
    items: [
      { text: 'Access personal data;' },
      { text: 'Request correction of inaccurate information;' },
      { text: 'Request deletion of certain information;' },
      { text: 'Object to certain processing activities;' },
      { text: 'Withdraw consent where applicable;' },
      { text: 'Request data portability where legally supported.' },
    ],
    closingParagraphs: ['Requests may be submitted using the contact information below.'],
  },
  {
    number: 12,
    title: 'Children’s Privacy',
    paragraphs: [
      'FarmBlock services are not directed toward children under the age required by applicable law. We do not knowingly collect personal information from minors without appropriate authorization.',
    ],
  },
  {
    number: 13,
    title: 'International Data Processing',
    paragraphs: [
      'FarmBlock’s operations, technology infrastructure, or service providers may process data in multiple jurisdictions. By using our services, users acknowledge that information may be transferred, processed, and stored outside their local jurisdiction where permitted by law.',
    ],
  },
  {
    number: 14,
    title: 'Updates to This Privacy Policy',
    paragraphs: ['FarmBlock may update this Privacy Policy from time to time to reflect:'],
    items: [
      { text: 'Operational changes;' },
      { text: 'Technology updates;' },
      { text: 'Regulatory developments;' },
      { text: 'Service expansions.' },
    ],
    closingParagraphs: [
      'Updated versions will be published through official FarmBlock channels with revised effective dates.',
    ],
  },
  {
    number: 15,
    title: 'Contact Information',
    paragraphs: [
      'For questions, requests, or concerns regarding this Privacy Policy or personal data handling, please contact:',
      'FarmBlock',
    ],
    items: [
      { text: 'Website: farmblock.vn' },
      { text: 'Email: contact@farmblock.ai' },
      {
        text: 'Address: 10th Floor, Licogi 13 Building, 164 Khuat Duy Tien Street, Thanh Xuan Ward, Hanoi, Vietnam',
      },
    ],
  },
]
