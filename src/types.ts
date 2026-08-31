export type PageType = 'home' | 'about' | 'experience' | 'portfolio' | 'contact' | 'project-detail';

export type ProjectCategory =
  | 'All'
  | 'Entrepreneurial Ecosystems'
  | 'Global Trade & Strategy'
  | 'MSME Scale & Governance'
  | 'Leadership & Community'
  | 'Women in Leadership'
  | 'Innovation & Technology'
  | 'CSR & Social Impact';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  image: string;
  featured?: boolean;
  year?: string;
  metrics?: string;
  linkedInUrl?: string;
  quote?: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  images?: string[];
  highlights?: string[];
  keyMetric?: string;
  isExpandedDefault?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  iconName: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  serviceType: string;
  budgetRange: string;
  preferredDate: string;
  timeSlot: string;
  message: string;
}

