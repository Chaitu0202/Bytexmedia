export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Apps' | 'AI' | 'Marketing';
  categoryLabel: string;
  description: string;
  intendedUseCase: string;
  badgeText?: string;
  isConceptualDemo?: boolean;
  technologies: string[];
  highlights: string[];
  mockupType: 'browser' | 'mobile' | 'workflow' | 'campaign';
  metrics?: { label: string; value: string }[];
}

export interface ProcessStepItem {
  number: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
}

export interface AIWorkflowStep {
  stage: string;
  name: string;
  detail: string;
  isHumanReview?: boolean;
  icon: string;
}

export interface AIWorkflowItem {
  id: string;
  title: string;
  summary: string;
  businessImpact: string;
  steps: AIWorkflowStep[];
  integrations: string[];
  reviewConsideration: string;
}

export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  idealFor: string;
  pricingNote: string;
  features: string[];
  actionLabel: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  service: string;
  budget: string;
  preferredMethod: string;
  description: string;
}
