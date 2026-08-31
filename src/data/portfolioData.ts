import { Project, TimelineItem, ServiceItem, EducationItem, AwardItem } from '../types';

export const HERO_IMAGE_SCREEN1 =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop';

export const ABOUT_ARROW_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB5JdlyZ_TrclZ-C2Te1bHemYWo0TezwZz6_hF4-KtanhAYd0s9LV0FfTvOFDzTtzO0LK_qI0Ax4_TcUY9Dpxih2Knz2FHsYph_SptOTYIZNB57Vu1RFgNYIr_5D8i3Juwv-ZNMu8vUunVgPgOcOCupbI1z2Sw5jBM-yPEdzgMbnw02AS5NVR_vDvWfMlm_-NDueWltYyTjjUyzKb0ZYNw7WWPlB3q7P0j7F-_APhvEG9KZld4NoLUM';

export const MINI_PORTRAIT_IMAGE =
  'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=800&auto=format&fit=crop';

export const ABOUT_HERO_PORTRAIT =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop';

export const TIMELINE_IMG_1 =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop';

export const TIMELINE_IMG_2 =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop';

export const TIMELINE_IMG_3 =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop';

export const PROMO_BG_IMAGE =
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop';

export const CONTACT_BANNER_BG =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';

export const PROJECTS: Project[] = [
  {
    id: 'fidelitus-operations',
    title: 'Fidelitus Group Operational Ecosystem',
    subtitle: 'Prop-Tech scale, commercial leasing & facility leadership.',
    client: 'Fidelitus Corp',
    category: 'Operations & PropTech',
    tags: ['Operations', 'Prop-Tech', 'Strategic Planning', 'P&L Management'],
    description: 'Leading multi-vertical business operations across prop-tech transactions, commercial leasing, and facility operations.',
    fullDescription:
      'As Chief Operations Officer at Fidelitus, spearheaded the consolidation of diverse real estate verticals—including commercial leasing, residential advisory, interior solutions, and facility administration—into a synchronized, high-throughput operating machine. Instituted performance KPIs and unified workflow systems across regional divisions.',
    challenge:
      'Fragmented operational workflows across multiple business entities caused inter-departmental delays and disparate reporting lines in high-velocity commercial deals.',
    solution:
      'Engineered an integrated operational framework with standardized SLAs, cloud-enabled reporting dashboards, and cross-functional task cadences that connected brokerage, project delivery, and finance.',
    results: [
      '+135% improvement in cross-departmental deal turnaround speed',
      'Established unified CRM & ERP reporting architecture across all verticals',
      'Successful operational integration of Fidelitus Gallery & cultural arts initiatives',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    year: '2024 - Present',
    metrics: '135% Faster Turnaround',
  },
  {
    id: 'karthik-netralaya',
    title: 'Karthik Netralaya Super-Speciality Healthcare',
    subtitle: 'Hospital administration, CGHS empanelment & clinical workflow optimization.',
    client: 'Karthik Netralaya Eye Hospital',
    category: 'Healthcare Operations',
    tags: ['Healthcare', 'Administration', 'CGHS Compliance', 'Quality Audit'],
    description: 'Directed end-to-end hospital administration, patient journey systems, and statutory healthcare empanelments.',
    fullDescription:
      'Serving as COO for Karthik Netralaya, directed all non-clinical and administrative functions for a premier eye care institution. Maintained CGHS empanelment compliance, optimized outpatient-to-surgical pipelines, managed insurance TPA workflows, and upgraded NABH quality benchmarks.',
    challenge:
      'Complex patient queues, paper-heavy CGHS verification delays, and inter-departmental bottlenecks during peak diagnostic surgical schedules.',
    solution:
      'Implemented digital patient routing, automated document verification pipelines for government empanelment programs, and structured weekly quality control audits.',
    results: [
      'Reduced average patient wait-time by 45% during peak hours',
      '100% compliance rate on statutory healthcare & CGHS regulatory audits',
      'Recognized for exceptional healthcare facility administration and team retention',
    ],
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    year: '2021 - 2024',
    metrics: '45% Wait-time Reduction',
  },
  {
    id: 'precipio-dubai',
    title: 'Precipio Project Consultancy UAE',
    subtitle: 'International administration, HR management & Middle East project operations.',
    client: 'Precipio Consultancy (Dubai)',
    category: 'Enterprise Consulting',
    tags: ['International HR', 'Operations', 'Dubai UAE', 'Consultancy'],
    description: 'Managed enterprise administration, HR policies, and cross-border project logistics in Dubai, UAE.',
    fullDescription:
      'Spearheaded administrative operations and talent management for Precipio Project Consultancy in Dubai. Aligned corporate compliance with UAE labor laws, orchestrated high-value engineering consultancy logistics, and established rigorous organizational policies.',
    challenge:
      'Managing multicultural talent pipelines and multi-stakeholder project milestones in an international regulatory market.',
    solution:
      'Standardized HR onboarding protocols, streamlined regional procurement procedures, and introduced cross-border communications frameworks.',
    results: [
      'Orchestrated administration for over 40+ engineering project lifecycles',
      'Zero regulatory compliance infractions across UAE statutory frameworks',
      'Enhanced organizational retention and cross-functional team productivity',
    ],
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    year: '2008 - 2010',
    metrics: '40+ Project Lifecycles',
  },
  {
    id: 'dell-quality-excellence',
    title: 'DELL Customer & Process Quality Benchmarks',
    subtitle: '4x Best Quality Audits & Best Performer recognition.',
    client: 'DELL Technologies',
    category: 'Enterprise Consulting',
    tags: ['Quality Assurance', 'Six Sigma', 'Problem Solving', 'Award Winner'],
    description: 'Earned 4 consecutive Best Quality Audit titles and Best Performer honors for problem-solving rigor.',
    fullDescription:
      'As a Technical Expert in customer service and complex problem solving at DELL, established benchmarks in resolution speed, technical diagnosis accuracy, and service quality. Received highest peer and managerial acclaim for team collaboration and operational dedication.',
    challenge:
      'Resolving critical enterprise customer escalations with strict SLAs while upholding stringent global quality audit metrics.',
    solution:
      'Applied structured root-cause analysis, proactive customer follow-ups, and Six Sigma error-prevention habits across all technical interactions.',
    results: [
      'Awarded 4x Best Quality Audits certification by DELL global QA teams',
      'Honored with Best Team Player and Best Performer accolades',
      'Maintained consistent 98%+ customer satisfaction and first-contact resolution scores',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    year: '2004 - 2006',
    metrics: '4x Best Quality Audits',
  },
  {
    id: 'csr-project-vision',
    title: 'Community Impact, Shilpa Foundation & Art Curation',
    subtitle: 'Executive stewardship of Project Vision, healthcare camps & Fidelitus Gallery.',
    client: 'Shilpa Foundation / Project Vision / Fidelitus Gallery',
    category: 'CSR & Culture',
    tags: ['CSR', 'Project Vision', 'Community Leadership', 'Art Curation'],
    description: 'Driving social service programs for visual impairment awareness and cultural arts preservation.',
    fullDescription:
      'Actively champions social impact initiatives through partnerships with Project Vision and the Shilpa Foundation. Coordinates community eye screening clinics, organ donation awareness drives, and curates art exhibitions at Fidelitus Gallery to support regional artists.',
    challenge:
      'Creating scalable community outreach that bridges commercial real estate resources with grassroots public health needs.',
    solution:
      'Structured institutional sponsorship drives, volunteer coordination networks, and public health awareness symposiums.',
    results: [
      'Facilitated community eye donation awareness reaching thousands of citizens',
      'Supported 10th Anniversary celebrations and continuous exhibitions at Fidelitus Gallery',
      'Active board participation in philanthropic foundation programs',
    ],
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop',
    year: 'Ongoing',
    metrics: 'Thousands Impacted',
  },
  {
    id: 'triune-consulting',
    title: 'TRIUNE Business Transformation',
    subtitle: 'Strategic advisory and process streamlining for expanding enterprises.',
    client: 'TRIUNE Business Consultancy',
    category: 'Enterprise Consulting',
    tags: ['Business Consulting', 'Process Engineering', 'Cost Optimization'],
    description: 'Advised emerging businesses on organizational structure, financial governance, and workflow efficiency.',
    fullDescription:
      'Partnered with enterprise founders and business leaders to eliminate procedural redundancies, optimize resource allocation, and install operational disciplines that catalyzed profitability.',
    challenge:
      'Mid-sized enterprises encountering growth plateaus due to lack of standard operating procedures (SOPs).',
    solution:
      'Developed customized SOP playbooks, role-accountability matrices, and cash-flow monitoring disciplines.',
    results: [
      'Assisted multiple client organizations in cutting operational waste by 25-30%',
      'Established durable governance protocols adopted across senior leadership teams',
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    year: '2015 - 2018',
    metrics: '25-30% Waste Reduction',
  },
];

export const TIMELINE_EXPERIENCES: TimelineItem[] = [
  {
    id: 'fidelitus-exp',
    company: 'Fidelitus',
    location: 'Bengaluru, Karnataka, India',
    role: 'Chief Operations Officer (COO)',
    period: 'August 2024 - Present',
    description:
      'Leading enterprise-wide operations across real estate technology, commercial leasing, residential advisory, facility management, and Fidelitus Gallery cultural initiatives. Driving financial oversight, process optimization, and scalable cross-functional team growth.',
    tags: ['Operations Leadership', 'Prop-Tech', 'P&L Strategy'],
    images: [TIMELINE_IMG_1, TIMELINE_IMG_2, TIMELINE_IMG_3],
    isExpandedDefault: true,
  },
  {
    id: 'karthik-netralaya-exp',
    company: 'Karthik Netralaya',
    location: 'Bengaluru, Karnataka, India',
    role: 'Chief Operations Officer (COO)',
    period: 'December 2021 - August 2024',
    description:
      'Managed all hospital administrative operations, CGHS empanelment compliance, clinical and surgical support workflows, patient experience protocols, and healthcare quality audits for a premier eye hospital.',
    tags: ['Healthcare COO', 'CGHS Compliance', 'Hospital Admin'],
  },
  {
    id: 'new-hardwick-exp',
    company: 'New Hardwick Indian School',
    location: 'Bengaluru, Karnataka, India',
    role: 'Head of Administration & Operations',
    period: 'June 2019 - May 2020',
    description:
      'Streamlined institutional infrastructure, academic administration, financial planning, regulatory compliance, and personnel coordination across campus operations.',
    tags: ['Administration', 'Operations Management', 'Governance'],
  },
  {
    id: 'triune-exp',
    company: 'TRIUNE BUSINESS',
    location: 'India',
    role: 'Business Consultant',
    period: 'June 2015 - August 2018',
    description:
      'Advised enterprise clients on business process re-engineering, organizational efficiency bottlenecks, resource planning, and operational growth strategies.',
    tags: ['Business Consulting', 'Process Engineering', 'Strategy'],
  },
  {
    id: 'precipio-exp',
    company: 'Precipio Project Consultancy',
    location: 'Dubai, United Arab Emirates',
    role: 'Administration & HR Manager',
    period: 'September 2008 - March 2010',
    description:
      'Managed international corporate administration, UAE statutory HR compliance, talent recruitment, and project logistics in the Middle East.',
    tags: ['International HR', 'Administration', 'Dubai UAE'],
  },
  {
    id: 'tradewell-exp',
    company: 'Tradewell Enterprises',
    location: 'Bengaluru, India',
    role: 'Administration Assistant',
    period: 'March 2007 - August 2008',
    description:
      'Supported executive administrative workflows, client communications, documentation control, and office logistics.',
    tags: ['Administration', 'Office Management'],
  },
  {
    id: 'mm-logistics-exp',
    company: 'M & M Logistics',
    location: 'India',
    role: 'Office Manager',
    period: 'April 2006 - February 2007',
    description:
      'Managed corporate office functions, logistics dispatch tracking, vendor negotiations, and administrative staffing.',
    tags: ['Logistics', 'Operations', 'Team Leadership'],
  },
  {
    id: 'dell-exp',
    company: 'DELL',
    location: 'Bengaluru, India',
    role: 'Technical Expert (Customer Service & Problem Solving)',
    period: 'June 2004 - March 2006',
    description:
      'Specialized in complex issue resolution, quality audits, and team mentoring. Honored with "Best Team Player", "Best Performer", and 4x "Best Quality Audits" awards.',
    tags: ['Quality Audits', 'Customer Service', 'Award Winner'],
  },
  {
    id: 'anand-ferromac-exp',
    company: 'Anand Ferromac',
    location: 'India',
    role: 'Administration & HR Officer',
    period: 'May 2002 - May 2004',
    description:
      'Administered personnel files, payroll documentation, factory administration, statutory filings, and office logistics.',
    tags: ['HR Management', 'Administration'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'BBA in Business Administration and Management',
    institution: 'Institute of Basic and Vocational Education',
    details: 'Comprehensive study of organizational management, corporate strategy, operations, and leadership.',
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution: 'Bangalore University',
    details: 'Focus on financial management, corporate accounting, commercial law, and business economics.',
  },
  {
    degree: 'Diploma in Information & Systems Management (DISM)',
    institution: 'APTECH Computer Education',
    details: 'Specialized systems analysis, database management, and enterprise IT information systems.',
  },
  {
    degree: 'Six Sigma Training Certification',
    institution: 'India Quality & Process Excellence Institute',
    details: 'Lean Six Sigma methodologies, root-cause analysis, process optimization, and DMAIC quality cycles.',
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

