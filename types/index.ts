export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problemSolved: string;
  deliverables: string[];
  workflow: string[];
  relatedCapabilities: string[];
  featured?: boolean;
}

export interface CoreOffering {
  id: string;
  number: string;
  tag: string;
  title: string;
  pricingLabel: string;
  pricingNote?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaType: "audit" | "quote" | "consultation";
}

export interface XRayAuditArea {
  id: string;
  area: string;
  question: string;
  businessValue: string;
}

export interface LeaderProfile {
  name: string;
  title: string;
  bio: string;
  image: string;
  experienceYears: number;
  trackRecord: string[];
}

export interface AdvisorProfile {
  name: string;
  role: string;
  location: string;
  bio: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  impact: string;
  services: string[];
  deliverables: string[];
  slug: string;
  featured?: boolean;
  accentColor?: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  clientInput: string;
  kreaitxOutput: string;
  milestones: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Branding" | "Digital Marketing" | "Creative Strategy" | "Technology" | "UX & Design";
  readTime: string;
  publishDate: string;
  excerpt: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  inquiryType?: "consultation" | "quote" | "audit";
  fullName: string;
  email: string;
  companyName: string;
  websiteUrl?: string;
  selectedServices?: string[];
  budgetRange?: string;
  projectTimeline?: string;
  projectDetails: string;
}
