import { Project, TimelineItem, ServiceItem, EducationItem, AwardItem } from '../types';
import avinaLloydHero from '../avina-lloyd-hero.png';

export const HERO_IMAGE_SCREEN1 = avinaLloydHero;

export const TRIUNE_LOGO = '/images/triune-business-ventures-logo.svg';
export const TECHNEAT_LOGO = '/images/techneat-logo.svg';

export const ABOUT_ARROW_IMAGE = TRIUNE_LOGO;

export const MINI_PORTRAIT_IMAGE = avinaLloydHero;

export const ABOUT_HERO_PORTRAIT = avinaLloydHero;

export const TIMELINE_IMG_1 = '/images/avina-event-fidelitus-expo.png';

export const TIMELINE_IMG_2 = '/images/avina-event-presentation-uru.png';

export const TIMELINE_IMG_3 = '/images/avina-event-tamizhar-summit.jpg';

export const PROMO_BG_IMAGE = '/images/avina-event-ribbon-cutting.png';

export const CONTACT_BANNER_BG = '/images/avina-event-rise-launch.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'ctacis-ecosystem-building',
    title: 'Entrepreneurial Ecosystem Building',
    subtitle: 'Creating Communities That Move Beyond Networking (CTACIS 4.0)',
    client: 'CTACIS 4.0 & Business Communities',
    category: 'Entrepreneurial Ecosystems',
    tags: ['Ecosystem Building', 'B2B Platforms', 'Founder Network', 'Economic Force'],
    description:
      'Bringing together 500+ entrepreneurs, business leaders, and global personalities around a shared belief that meaningful connections become an economic force.',
    fullDescription:
      'Entrepreneurship grows stronger when businesses do not operate alone. Through business communities, B2B platforms, and entrepreneurial networks, brought together founders, business leaders, and professionals to learn, collaborate, and create opportunities together.\n\nAt CTACIS 4.0, more than 500 entrepreneurs, business leaders, and global personalities came together around a shared belief—that meaningful connections can become an ecosystem, and that an ecosystem can become an economic force.\n\nImpact is never measured only by the number of people in the room—it is measured by the conversations that continue, the trust that develops, the partnerships that emerge, and the businesses that grow because two people decided to connect.',
    challenge:
      'Siloed entrepreneurship and transactional networking that fail to convert initial meetings into durable economic collaboration.',
    solution:
      'Architected structured ecosystem convening frameworks focusing on post-event momentum, continuous dialogue, and bilateral business matching.',
    results: [
      '500+ founders and enterprise leaders convened across regional and global verticals',
      'Established high-trust recurring B2B partnership pipelines',
      'Accelerated cross-sector business alliances and peer mentoring networks',
    ],
    image: '/images/avina-event-tamizhar-summit.jpg',
    featured: true,
    year: '2024 - Present',
    metrics: '500+ Entrepreneurs & Leaders',
    linkedInUrl: 'https://in.linkedin.com/in/avina-lloyd',
    quote: 'Meaningful connections become an ecosystem, and an ecosystem becomes an economic force.',
  },
  {
    id: 'rise-global-dubai',
    title: 'Taking Businesses Beyond Borders',
    subtitle: 'From Tamil Nadu to the World (The RISE Global & RISE 17 Dubai)',
    client: 'The RISE Global / RISE 17 Dubai',
    category: 'Global Trade & Strategy',
    tags: ['Global Trade', 'Dubai GCC', 'Trade Missions', 'International Expansion'],
    description:
      'Creating global pathways for Indian and Tamil entrepreneurs to explore international markets across GCC, Africa, and the United States.',
    fullDescription:
      'Regional businesses have the potential to become global businesses when they have access to the right markets, partners, and networks.\n\nInvolvement with The RISE Global ecosystem and RISE 17 Dubai reflects a larger vision: helping Indian and Tamil entrepreneurs explore opportunities beyond geographical boundaries.\n\nDubai represents an important bridge—connecting businesses from India and Tamil Nadu with markets and partners across the GCC, Africa, the United States, and beyond. The objective is not simply entering a new market—it is about finding the right business, the right market, and the right global partner.',
    challenge:
      'Overcoming regulatory opacity, cross-border compliance barriers, and lack of trusted international distribution networks for regional businesses.',
    solution:
      'Led international trade delegations, bilateral investor roundtables, and strategic ecosystem roadmaps bridging South India with Dubai hubs.',
    results: [
      'Facilitated cross-border trade dialogues connecting GCC, African, and US markets',
      'Mobilized regional founders toward institutional global expansion',
      'Curated international B2B delegations at premier global trade summits',
    ],
    image: '/images/avina-event-rise-launch.jpg',
    featured: true,
    year: '2024 - Present',
    metrics: 'GCC, Africa & Global Bridge',
    linkedInUrl: 'https://in.linkedin.com/in/avina-lloyd',
    quote: 'Finding the right business, the right market, and the right global partner.',
  },
  {
    id: 'msme-ipo-readiness',
    title: 'Empowering MSMEs to Think Bigger',
    subtitle: 'From Running a Business to Building an Institution (RISE Kanyakumari B2B Conclave)',
    client: 'RISE Kanyakumari B2B Conclave',
    category: 'MSME Scale & Governance',
    tags: ['MSME Scaling', 'IPO Readiness', 'Corporate Governance', 'Value Creation'],
    description:
      'Encouraging 100+ MSME founders to transition from daily income-generation to institutional governance, transparency, and public market readiness.',
    fullDescription:
      "The next chapter of India's economic growth will be shaped by ambitious MSMEs that are prepared to scale.\n\nFounders must increasingly think beyond daily operations and immediate profitability—and begin building businesses with stronger foundations for governance, leadership, transparency, and long-term value creation.\n\nAt the RISE Kanyakumari B2B Conclave, more than 100 entrepreneurs came together to explore an important question: Can MSMEs aspire to go beyond traditional growth and build companies capable of reaching the public markets? The conversation around IPO readiness is about encouraging entrepreneurs to think of their companies not simply as businesses that generate income—but as institutions capable of creating lasting economic value.",
    challenge:
      'Operational inertia and lack of compliance rigor preventing high-potential MSMEs from accessing institutional capital and capital markets.',
    solution:
      'Instilled institutional governance playbooks, financial transparency standards, and IPO readiness frameworks tailored for mid-market founders.',
    results: [
      '100+ entrepreneurs trained in institutional scaling & governance disciplines',
      'Demystified SME IPO roadmaps and capital market eligibility',
      'Shifted founder mindsets toward long-term enterprise valuation',
    ],
    image: '/images/avina-event-award-rise.png',
    featured: true,
    year: '2024 - Present',
    metrics: '100+ Founders & IPO Pathways',
    linkedInUrl: 'https://in.linkedin.com/in/avina-lloyd',
    quote: 'Building companies not simply as income generators—but as institutions capable of creating lasting economic value.',
  },
  {
    id: 'great-corridor-leadership',
    title: 'Developing Leaders Who Build Communities',
    subtitle: 'Leadership With a Collective Purpose (The Great Corridor Initiative)',
    client: 'The Great Corridor Leadership Initiative',
    category: 'Leadership & Community',
    tags: ['Leadership Development', 'Regional Corridors', 'Community Impact', 'Scale'],
    description:
      'Mobilising 100 serious entrepreneurs across 9 economic corridors toward international participation and community resilience.',
    fullDescription:
      'Strong entrepreneurial communities require strong leaders. Through leadership programmes and regional initiatives, engaged with leaders and entrepreneurs who share a collective responsibility: strengthening the communities around them.\n\nThe Great Corridor Leadership Initiative brought together leaders across regions including Sriperumbudur, Vellore, Ranipet, Ambur, Chittoor, Salem, Krishnagiri, Hosur, and Bengaluru.\n\nOne of the key ambitions was to mobilise 100 serious entrepreneurs toward international participation through RISE 17 Dubai.\n\nThe core formula: Develop leaders -> Leaders strengthen communities -> Communities support entrepreneurs -> Entrepreneurs create opportunity. This is how impact becomes scalable.',
    challenge:
      'Fragmented regional trade corridors lacking cohesive leadership networks to drive collective global competitiveness.',
    solution:
      'Built a multi-city leadership network connecting Tier-1 and Tier-2 economic corridors into a unified platform for trade and mentorship.',
    results: [
      'Connected 9 industrial & commercial hubs across Tamil Nadu & Karnataka',
      'Mobilised 100 entrepreneurs for global delegation representation in Dubai',
      'Established durable regional mentorship and mutual collaboration pacts',
    ],
    image: '/images/avina-event-panel-stage.png',
    featured: true,
    year: '2024 - Present',
    metrics: '9 Economic Regions Unified',
    linkedInUrl: 'https://in.linkedin.com/in/avina-lloyd',
    quote: 'Develop leaders. Leaders strengthen communities. Communities support entrepreneurs. Entrepreneurs create opportunity.',
  },
  {
    id: 'women-in-leadership-twi',
    title: 'Women in Leadership & Global Collectives',
    subtitle: 'When Women Rise Together, Communities Move Forward',
    client: 'Tamil Women International UAE',
    category: 'Women in Leadership',
    tags: ['Women in Leadership', 'Global Collectives', 'Empowerment', 'Inclusion'],
    description:
      'Championing female leadership, diversity of conviction, and executive representation across global Tamil and Indian business forums.',
    fullDescription:
      'A truly inclusive future requires women not simply to participate in important conversations, but to help shape them.\n\nAssociation with platforms such as Tamil Women International UAE reflects a belief in the power of women coming together with clarity, courage, and purpose.\n\nThe strength of such a collective lies not only in the number of women represented, but in the diversity of their experience, leadership, and conviction. As global Tamil communities continue to evolve, women’s voices and leadership will play an increasingly important role in shaping what comes next.\n\nBecause when women rise together, they do more than create momentum. They create history.',
    challenge:
      'Under-representation of women in executive decision-making, international trade delegations, and boardrooms.',
    solution:
      'Spearheaded international female executive networks, mentoring circles, and dedicated business exchange platforms.',
    results: [
      'Expanded global visibility and collaboration for women entrepreneurs in the UAE and India',
      'Fostered cross-border mentorship and strategic capital connections for female founders',
      'Established annual leadership forums celebrating female enterprise excellence',
    ],
    image: '/images/avina-event-networking-discussion.png',
    featured: true,
    year: '2024 - Present',
    metrics: 'Global Women Leadership Network',
    linkedInUrl: 'https://in.linkedin.com/in/avina-lloyd',
    quote: 'When women rise together, they do more than create momentum. They create history.',
  },
  {
    id: 'tech-innovation-bts',
    title: 'Technology, Innovation & Future Thinking',
    subtitle: 'Exploring What Innovation Can Make Possible (Bengaluru Tech Summit)',
    client: 'Bengaluru Tech Summit & Financial Emission Calculator',
    category: 'Innovation & Technology',
    tags: ['Emerging Tech', 'Bengaluru Tech Summit', 'Sustainability', 'Carbon Finance'],
    description:
      'Exploring how technology transforms traditional industries and driving sustainability measurement via the Financial Emission Calculator.',
    fullDescription:
      'The future of business will increasingly be shaped by how effectively organisations understand and adopt technology.\n\nEngagement with technology and innovation ecosystems reflects an interest in exploring how emerging technologies can transform industries, solve complex problems, and create new possibilities.\n\nAt Bengaluru Tech Summit, conversations with technology leaders and innovators explored the ways technology continues to influence industries—including traditional sectors such as real estate. Also supported the visibility of technology-led innovation, including work around sustainability and financial impact measurement through initiatives such as the Financial Emission Calculator.\n\nInnovation becomes meaningful when it moves beyond technology for its own sake—and begins solving real problems.',
    challenge:
      'Bridging legacy enterprise operations with digital transformation and quantifiable ESG sustainability measurement.',
    solution:
      'Advocated for practical technology adoption and supported visibility for emissions and financial impact calculators.',
    results: [
      'Active leadership dialogue at Bengaluru Tech Summit with tech luminaries',
      'Championed financial carbon emission measurement frameworks for businesses',
      'Bridged prop-tech and operational frameworks with cutting-edge digital tooling',
    ],
    image: '/images/avina-event-presentation-uru.png',
    featured: true,
    year: '2024 - Present',
    metrics: 'Tech Ecosystems & Carbon Finance',
    linkedInUrl:
      'https://www.linkedin.com/posts/avina-lloyd_the-3-days-bengaluru-tech-summit-2024-was-activity-7269314759894720512-Rw6Q',
    quote: 'Innovation becomes meaningful when it moves beyond technology for its own sake—and begins solving real problems.',
  },
  {
    id: 'techneat-cfo-innovation',
    title: 'Building Sustainable Growth Behind Innovation',
    subtitle: 'Chief Financial Officer — TechNeat Info Solutions',
    client: 'TechNeat Info Solutions / Investature',
    category: 'Innovation & Technology',
    tags: ['Chief Financial Officer', 'Sustainable Tech', 'Financial Discipline', 'Digital Transformation'],
    description:
      'Technology companies are built on ideas. Sustainable technology companies are built on turning those ideas into long-term value through robust financial structures and strategic discipline.',
    fullDescription:
      'Technology companies are built on ideas. Sustainable technology companies are built on the ability to turn those ideas into long-term value.\n\nAs the Chief Financial Officer at TechNeat Info Solutions, I contribute to the financial and strategic foundation behind a technology company focused on solving complex business challenges through practical, scalable solutions.\n\nTechNeat operates at the intersection of technology, business automation and digital transformation, developing solutions across areas including enterprise technology, web and mobile applications, IoT and emerging digital solutions. With a presence extending beyond India into international markets, the company’s journey represents a larger ambition—to use technology not simply as a tool, but as a means of helping businesses simplify complexity, improve efficiency and unlock new possibilities.\n\nMy role as CFO extends beyond financial management: it involves supporting the decisions that allow innovation to grow responsibly, balancing ambition with sustainability, supporting innovation with financial discipline, and transforming growth opportunities into long-term value.\n\nOne example of this approach is TechNeat’s work on the Financial Emission Calculator for Investature, a solution designed to bring greater precision and transparency to sustainability-aligned financial decisions.\n\nFor me, financial leadership in a technology company is ultimately about helping create the conditions in which innovation can move forward with confidence. Because behind every scalable idea must be a sustainable foundation.',
    challenge:
      'Balancing high-velocity technology innovation with disciplined capital allocation, statutory governance, and global scalability.',
    solution:
      'Engineered strategic financial frameworks, cross-border fiscal governance, and project-level ROI models connecting tech development with measurable enterprise value.',
    results: [
      'Supported international market expansion across enterprise tech, web/mobile apps & IoT',
      'Financial leadership behind the Financial Emission Calculator for Investature',
      'Established high-accountability fiscal and strategic decision-making cadences',
    ],
    image: '/images/avina-event-presentation-uru.png',
    featured: true,
    year: 'Present',
    metrics: 'Global Tech & ESG Finance',
    linkedInUrl: 'https://www.linkedin.com/company/techneat-info-solutions/',
    quote: 'Behind every scalable idea must be a sustainable foundation.',
  },
  {
    id: 'shilpa-foundation-school-support',
    title: 'Community Progress & Education Infrastructure',
    subtitle: 'Creating Impact Beyond Business (Puttenahalli School Support)',
    client: 'Shilpa Foundation & LKQ India',
    category: 'CSR & Social Impact',
    tags: ['CSR', 'Education Infrastructure', 'Shilpa Foundation', 'LKQ India'],
    description:
      'Partnering with LKQ India and Shilpa Foundation to deliver educational infrastructure, sports gear, and student activity support to Puttenahalli Government High School.',
    fullDescription:
      'Business success and community progress should not exist separately. Individuals and organisations have an important role to play in contributing to the environments and communities that shape future generations.\n\nThrough the Shilpa Foundation School Support Program, conducted in collaboration with LKQ India, support was extended to Puttenahalli Government High School through educational infrastructure, sports equipment, and materials for student activities.\n\nInitiatives like these may begin with something as practical as furniture or equipment. But their larger purpose is much greater: A better learning environment can create a better experience for a student. And a better experience can contribute to a stronger future.',
    challenge:
      'Under-resourced public school facilities limiting academic, athletic, and creative development for students.',
    solution:
      'Orchestrated corporate CSR partnership between LKQ India and Shilpa Foundation to execute hands-on school upgrades.',
    results: [
      'Upgraded classroom infrastructure, desks, and educational materials',
      'Supplied comprehensive sports and athletic equipment for student development',
      'Fostered sustainable community-corporate stewardship for grassroots public education',
    ],
    image: '/images/avina-event-ribbon-cutting.png',
    featured: true,
    year: '2024 - Present',
    metrics: 'Educational Infrastructure Impact',
    linkedInUrl:
      'https://www.linkedin.com/posts/avinash-gowda-8b52306_lkq-india-private-limited-activity-7308050422038962176-YFmw',
    quote: 'A better learning environment creates a better experience for a student, contributing to a stronger future.',
  },
];

export const TIMELINE_EXPERIENCES: TimelineItem[] = [
  {
    id: 'techneat-cfo-exp',
    company: 'TechNeat Info Solutions',
    location: 'Bengaluru, India · International Operations',
    role: 'Chief Financial Officer (CFO)',
    period: 'Present',
    keyMetric: 'Sustainable Growth & Capital Strategy',
    description:
      'Providing financial and strategic leadership for an enterprise technology firm delivering digital automation, web/mobile applications, IoT, and sustainability solutions (Financial Emission Calculator for Investature).',
    highlights: [
      'Supporting responsible scaling and financial discipline across international tech expansion',
      'Aligning capital allocation, cash-flow models, and commercialization strategies for digital products',
      'Championing sustainability-aligned financial solutions and enterprise ESG transparency',
    ],
    tags: ['Chief Financial Officer', 'Financial Strategy', 'Enterprise Tech', 'IoT Solutions', 'Investature'],
    images: [
      '/images/avina-event-presentation-uru.png',
      '/images/avina-event-tamizhar-summit.jpg',
      '/images/avina-event-networking-discussion.png',
    ],
    isExpandedDefault: true,
  },
  {
    id: 'triune-ceo-exp',
    company: 'Triune Business Ventures Pvt Ltd',
    location: 'Bengaluru, Karnataka, India',
    role: 'Chief Executive Officer',
    period: 'Jun 2025 - Present · 1 yr 3 mos',
    keyMetric: 'Enterprise Venture Scale',
    description:
      'Leading strategic direction, cross-industry corporate expansion, governance, and organizational performance as CEO.',
    highlights: [
      'Architecting multi-vertical venture operations and corporate governance models',
      'Orchestrating P&L strategies, investor relations, and capital deployment',
      'Instituting high-accountability executive leadership practices across enterprise teams',
    ],
    tags: ['Executive Leadership', 'CEO', 'Business Ventures', 'Strategic Operations', 'P&L Management'],
    images: [
      '/images/avina-event-presentation-uru.png',
      '/images/avina-event-panel-stage.png',
      '/images/avina-event-networking-discussion.png',
    ],
    isExpandedDefault: true,
  },
  {
    id: 'fidelitus-exp',
    company: 'Fidelitus Corp',
    location: 'Bangalore Urban, Karnataka, India · On-site',
    role: 'Chief Operating Officer',
    period: 'Aug 2024 - Jul 2025 · 1 yr',
    keyMetric: '135% Throughput Gain',
    description:
      'Spearheaded multi-vertical operations across commercial/residential leasing, facility administration, interior solutions, and Project Management Office (PMO).',
    highlights: [
      'Established unified ERP & CRM operating workflows across all business divisions',
      'Overhauled corporate governance, financial budgeting, and SLA compliance cadences',
      'Integrated cultural arts exhibitions at Fidelitus Gallery & Shilpa Foundation outreach',
    ],
    tags: ['Office Administration', 'Prop-Tech', 'PMO & Governance', 'Quality Systems', 'P&L Strategy'],
    images: [
      '/images/avina-event-fidelitus-expo.png',
      '/images/avina-event-ribbon-cutting.png',
      '/images/avina-event-tamizhar-summit.jpg',
    ],
    isExpandedDefault: true,
  },
  {
    id: 'karthik-netralaya-exp',
    company: 'KARTHIK NETRALAYA INSTITUTE OF OPHTHALMOLOGY',
    location: 'Bengaluru, Karnataka, India · On-site',
    role: 'Chief Operating Officer',
    period: 'Dec 2021 - Jul 2024 · 2 yrs 8 mos',
    keyMetric: '45% Patient Wait Reduction',
    description:
      'Directed all non-clinical hospital administration, NABH quality protocols, CGHS statutory empanelments, and insurance TPA claims.',
    highlights: [
      'Achieved 100% regulatory audit compliance across government empanelments (CGHS, ECHS)',
      'Engineered digital patient journey queues, reducing average outpatient wait times by 45%',
      'Trained cross-functional administrative staff in operational precision and soft skills',
    ],
    tags: ['Leadership', 'Healthcare Operations', 'Hospital Administration', 'TPA & CGHS', 'Quality Systems'],
    images: [
      '/images/avina-event-award-rise.png',
      '/images/avina-event-panel-stage.png',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    ],
    isExpandedDefault: false,
  },
  {
    id: 'migobucks-exp',
    company: 'Migobucks Social Commerce',
    location: 'Bengaluru, Karnataka, India · On-site',
    role: 'Head of Operations & Training Development',
    period: 'Aug 2019 - May 2021 · 1 yr 10 mos',
    keyMetric: 'Scalable Platform Operations',
    description:
      'Directed platform operational scalability, brand partner logistics, merchant onboarding, and organizational training programs.',
    highlights: [
      'Engineered scalable merchant onboarding workflows and store management systems',
      'Created standardized staff coaching playbooks that accelerated team productivity by 35%',
      'Managed high-value brand partnerships and customer issue resolution pipelines',
    ],
    tags: ['Operations Strategy', 'Training & Development', 'Process Optimization', 'Client Relations'],
    images: [
      '/images/avina-event-tamizhar-summit.jpg',
      '/images/avina-event-networking-discussion.png',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    ],
    isExpandedDefault: false,
  },
  {
    id: 'new-hardwick-exp',
    company: 'NEW HARDWICK INSTITUTIONS',
    location: 'Bengaluru, Karnataka, India · On-site',
    role: 'Head of Administration and Operations',
    period: 'Jun 2017 - May 2019 · 2 yrs',
    keyMetric: 'Campus Governance & SOPs',
    description:
      'Directed campus administration, institutional infrastructure, public relations, regulatory compliance, and staff coordination.',
    highlights: [
      'Standardized institutional procurement, facility safety protocols, and audit controls',
      'Led public relations and stakeholder communications for multi-campus operations',
    ],
    tags: ['Office Administration', 'Public Relations', 'Operations Management', 'Institutional Governance'],
    images: [
      '/images/avina-event-ribbon-cutting.png',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    ],
    isExpandedDefault: false,
  },
  {
    id: 'precipio-exp',
    company: 'Precipio Project Consultancy',
    location: 'Dubai, UAE / Bengaluru, India',
    role: 'Administration & Operations Manager',
    period: '2008 – 2009 · 1 yr',
    keyMetric: '40+ Project Lifecycles',
    description:
      'Led corporate administration, international HR operations, UAE labor law compliance, and cross-border engineering project logistics.',
    highlights: [
      'Maintained zero compliance infractions across UAE statutory and labor frameworks',
      'Streamlined vendor procurement and client contract documentation across 40+ project cycles',
    ],
    tags: ['International HR', 'Office Operations', 'Dubai UAE', 'Compliance'],
    images: [
      '/images/avina-event-rise-launch.jpg',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    ],
    isExpandedDefault: false,
  },
  {
    id: 'dell-exp',
    company: 'Dell Technologies',
    location: 'Bengaluru, Karnataka, India',
    role: 'Technical Expert & Quality Specialist',
    period: 'Jun 2004 - Mar 2006 · 1 yr 10 mos',
    keyMetric: '4× Best Quality Audits',
    description:
      'Recognized for exceptional root-cause diagnostic rigor, zero-defect process auditing, and complex enterprise issue resolution.',
    highlights: [
      'Honored with 4 consecutive Best Quality Audits awards by global QA division',
      'Awarded Best Performer and Best Team Player for cross-functional problem solving',
      'Maintained 98%+ customer satisfaction and first-contact resolution SLA benchmarks',
    ],
    tags: ['Quality Audits', 'Six Sigma', 'Problem Solving', '4x Award Winner'],
    images: [
      '/images/avina-event-award-rise.png',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    ],
    isExpandedDefault: false,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'Bangalore University',
    year: '1992 - 1997',
    details: 'Focus on financial management, corporate commerce, business economics, and organizational administration.',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Cluny Convent Jalahalli',
    year: '1980 - 1992',
    details: 'Primary, secondary, and higher secondary foundational academic excellence.',
  },
  {
    degree: 'Six Sigma Process & Quality Excellence Training',
    institution: 'Quality & Process Institute',
    details: 'Lean Six Sigma methodologies, root-cause analysis, DMAIC frameworks, and zero-defect quality systems.',
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: '4x Best Quality Audits Award',
    organization: 'DELL Technologies',
    description: 'Recognized four times consecutively for zero-defect operational rigor and flawless quality audit benchmarks.',
  },
  {
    title: 'Best Performer Award',
    organization: 'DELL Technologies',
    description: 'Awarded for surpassing performance benchmarks and consistently delivering exceptional operational problem-solving.',
  },
  {
    title: 'Best Team Player Award',
    organization: 'DELL Technologies',
    description: 'Honored for outstanding cross-functional collaboration, team mentorship, and fostering an inclusive workplace culture.',
  },
  {
    title: 'Excellence in Healthcare Administration',
    organization: 'Karthik Netralaya Leadership Circle',
    description: 'Commended for remarkable efficiency gains in CGHS empanelment and patient flow optimization.',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'operational-optimization',
    title: 'Operational Optimization & Scaling',
    subtitle: 'Streamlining multi-vertical enterprise operations with Six Sigma precision.',
    description:
      'Diagnosing operational friction, eliminating systemic waste, and building scalable standard operating procedures (SOPs) that align execution with long-term strategic revenue targets.',
    deliverables: [
      'Comprehensive Operations Audit & Workflow Mapping',
      'Custom SOP Playbooks & SLA Frameworks',
      'Cross-Functional Performance Scorecards & KPIs',
      'Resource Allocation & P&L Optimization Models',
    ],
    timeline: 'Ongoing / Project-based',
    iconName: 'trending_up',
  },
  {
    id: 'healthcare-facility-admin',
    title: 'Healthcare & Facility Administration',
    subtitle: 'Hospital empanelment, CGHS compliance & patient experience engineering.',
    description:
      'Expertise in directing super-speciality medical centers and large-scale commercial facilities with uncompromising statutory compliance, patient turnaround efficiency, and facility resilience.',
    deliverables: [
      'CGHS & TPA Insurance Workflow Standardization',
      'NABH Quality Benchmark Readiness',
      'Facility Management & Vendor Governance',
      'Patient Experience & Outpatient Route Optimization',
    ],
    timeline: 'Advisory & Executive Mandate',
    iconName: 'local_hospital',
  },
  {
    id: 'executive-leadership',
    title: 'Executive Leadership & Team Culture',
    subtitle: 'Building cohesive, high-accountability organizational cultures.',
    description:
      'Cultivating leadership depth, restructuring reporting hierarchies, conducting structured quality audits, and aligning teams with core corporate missions.',
    deliverables: [
      'Leadership Succession & Team Structuring',
      'Quality Audit Frameworks & Continuous Improvement',
      'HR Governance & Regulatory Compliance Oversight',
      'Conflict Resolution & Performance Culture Coaching',
    ],
    timeline: 'Strategic Partnership',
    iconName: 'groups',
  },
];

export const HERO_STREAM_IMAGES = [
  {
    src: '/images/avina-event-tamizhar-summit.jpg',
    alt: 'Avina Lloyd at Tamizhar 4.0 Global Leadership Summit',
  },
  {
    src: '/images/avina-event-fidelitus-expo.png',
    alt: 'Avina Lloyd and leadership team at Fidelitus Corp Expo pavilion',
  },
  {
    src: '/images/avina-event-ribbon-cutting.png',
    alt: 'Avina Lloyd leading project ribbon cutting and inauguration ceremony',
  },
  {
    src: '/images/avina-event-award-rise.png',
    alt: 'Avina Lloyd receiving executive award and felicitation at The Rise B2B Sangamam',
  },
  {
    src: '/images/avina-event-presentation-uru.png',
    alt: 'Avina Lloyd delivering keynote presentation on operations and consulting',
  },
  {
    src: '/images/avina-event-rise-launch.jpg',
    alt: 'Avina Lloyd with leadership delegation at The Rise Seventeen UAE launch',
  },
  {
    src: '/images/avina-event-panel-stage.png',
    alt: 'Avina Lloyd participating in executive leadership panel on stage',
  },
  {
    src: '/images/avina-event-networking-discussion.png',
    alt: 'Avina Lloyd engaging in strategic executive networking and discussion',
  },
];



