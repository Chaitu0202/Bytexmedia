import { ServiceItem, ProjectItem, ProcessStepItem, AIWorkflowItem, PackageItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    category: 'Engineering',
    iconName: 'Code',
    price: '₹2,999',
    featuredPriceBadge: 'Starting at ₹2,999',
    description: 'Modern, responsive, ultra-fast websites designed to convert visitors and represent your brand with high authority.',
    features: [
      'Complete business website & modern UI',
      'High-converting landing page structure',
      'Mobile-first & tablet responsive design',
      'Sub-second loading speed & SEO basics',
      'Contact form & direct WhatsApp chat button',
      'Free deployment & hosting configuration'
    ],
    deliverables: ['Custom codebase', 'Mobile & tablet responsiveness', 'Instant load time', 'Domain & hosting setup', '100% code ownership'],
    timeline: '3 to 5 business days',
    idealFor: 'Businesses, startups, doctors, stores, and creators needing a high-converting website at an unbeatable price point.'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    category: 'Engineering',
    iconName: 'Smartphone',
    price: '₹9,999',
    featuredPriceBadge: 'Starting at ₹9,999',
    description: 'Full-featured mobile application development solutions that turn your idea into a sleek, high-performance app.',
    features: [
      'Cross-platform iOS & Android mobile application',
      'Modern, intuitive UI/UX product design',
      'User authentication & clean database connection',
      'Push notification & customer engagement setup',
      'App store & Play store submission assistance'
    ],
    deliverables: ['Interactive design prototype', 'Production mobile app build', 'API integrations', 'Store readiness checklist'],
    timeline: '2 to 3 weeks',
    idealFor: 'Entrepreneurs, service providers, and brands ready to launch their own branded smartphone app.'
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    category: 'Local SEO',
    iconName: 'MapPin',
    price: '₹999',
    featuredPriceBadge: 'Only ₹999',
    description: 'Professional setup, optimization, and local ranking boost so customers in your city find you first on Google Maps.',
    features: [
      'Complete profile creation, verification & audit',
      'Google Maps 100% NAP consistency optimization',
      'High-impact service categories & keyword enrichment',
      'Photos, catalog & business hours integration',
      'Customer review generation templates & strategy'
    ],
    deliverables: ['Fully verified & optimized GBP', 'Local search discovery checklist', 'Customer review toolkit', 'Ongoing maintenance guide'],
    timeline: '24 to 48 hours',
    idealFor: 'Local businesses, clinics, restaurants, retail shops, and agencies seeking immediate nearby walk-in customers.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Instagram Handling',
    category: 'Growth',
    iconName: 'TrendingUp',
    price: 'Custom / Monthly',
    featuredPriceBadge: 'Monthly Growth Plans',
    description: 'Data-informed digital marketing and Instagram handling to generate more inquiries and sales for your business.',
    features: [
      'Complete Instagram profile handling & aesthetic revamp',
      'Engaging Reels, carousel posts & campaign design',
      'Targeted local audience growth & hashtag strategy',
      'Paid ad campaign management (Meta / Google Ads)',
      'Direct lead generation & monthly performance reports'
    ],
    deliverables: ['Monthly content calendar', 'Custom brand creatives', 'Targeted ad setup', 'Transparent ROI report'],
    timeline: 'Ongoing monthly engagement',
    idealFor: 'Brands that want consistent social media engagement, more followers, and measurable business sales.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Custom Tools',
    category: 'Intelligence',
    iconName: 'Sparkles',
    price: 'Custom Scope',
    featuredPriceBadge: 'Practical AI Tools',
    description: 'Explore practical AI-powered workflows and automations that eliminate manual work and capture customer leads 24/7.',
    features: [
      'Custom AI website assistants & lead bots',
      'Repetitive workflow automations (Notion/CRM/Slack)',
      'Smart customer query triage & email responders',
      'Document parsing & automated order notification webhooks',
      'Human-in-the-loop review guardrails'
    ],
    deliverables: ['Automated pipeline diagram', 'Webhook & API integrations', 'Error handling logic', 'Safety check system'],
    timeline: '1 to 2 weeks',
    idealFor: 'Businesses spending too many hours manually answering repetitive inquiries or copying customer data.'
  },
  {
    id: 'creative-design',
    title: 'Branding & Creative Design',
    category: 'Branding',
    iconName: 'Palette',
    price: 'Custom Scope',
    featuredPriceBadge: 'Visual Identity',
    description: 'Build a recognizable visual identity with creative assets designed to leave an unforgettable impression.',
    features: [
      'Modern brand logo & vector identity suite',
      'High-impact social media creative templates',
      'Short-form video editing for Reels & TikTok',
      'Business cards, banners & presentation decks',
      'Typography & color design system'
    ],
    deliverables: ['Vector logo package', 'Styleguide & color palette', 'Figma/Canva editable templates', 'Exported graphics'],
    timeline: '3 to 5 business days',
    idealFor: 'New ventures launching their identity or established brands needing a fresh, modern aesthetic.'
  }
];

export const BUSINESS_CHALLENGES = [
  {
    id: 'discovery',
    icon: 'Compass',
    title: 'Hard to Get Discovered',
    description: 'Businesses struggle to establish a clear digital presence and reach relevant local customers on Google and Instagram.',
    solution: 'Google Business Profile for just ₹999 plus targeted social media handling to make your business prominently visible.'
  },
  {
    id: 'manual-work',
    icon: 'Clock',
    title: 'Too Much Manual Work',
    description: 'Repetitive tasks like sorting inquiries, answering common queries, and copying data consume valuable hours every day.',
    solution: 'Smart automations and lightweight AI assistants that handle repetitive flows with human oversight.'
  },
  {
    id: 'outdated-experience',
    icon: 'MonitorX',
    title: 'Outdated or Missing Website',
    description: 'Without a fast, modern website, potential customers question your credibility and buy from competitors instead.',
    solution: 'Launch a professional, mobile-responsive website for just ₹2,999 delivered within days.'
  },
  {
    id: 'disconnected-growth',
    icon: 'GitFork',
    title: 'Disconnected Growth Efforts',
    description: 'Marketing, branding, and technical tools operate in silos without a cohesive roadmap, wasting time and budget.',
    solution: 'A coordinated Build • Market • Grow framework where your website, branding, and marketing work in harmony.'
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    iconName: 'Lightbulb',
    description: 'Understand your business, audience, goals, and current challenges through an initial deep-dive consultation.',
    deliverables: ['Target audience breakdown', 'Technical scope outline', 'Goal benchmarks']
  },
  {
    number: '02',
    title: 'Plan',
    iconName: 'ClipboardList',
    description: 'Create a focused strategy and identify the right design, technology, and growth solutions for your budget.',
    deliverables: ['Wireframes & style direction', 'Architecture plan', 'Clear milestone roadmap']
  },
  {
    number: '03',
    title: 'Build',
    iconName: 'Code',
    description: 'Design, develop, and refine your website, app, or business solution with iterative reviews and high standards.',
    deliverables: ['Live staging preview', 'Interactive feedback rounds', 'Quality & speed assurance']
  },
  {
    number: '04',
    title: 'Grow',
    iconName: 'TrendingUp',
    description: 'Launch, monitor relevant outcomes, and identify ongoing opportunities for optimization and expansion.',
    deliverables: ['Production deployment', 'Handover documentation', 'Post-launch support']
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'project-ecommerce',
    title: 'Modern Retail & Apparel Storefront',
    category: 'Websites',
    categoryLabel: 'Web Development',
    description: 'A lightning-fast, high-converting e-commerce web platform built for a retail brand, featuring fluid product filtering and seamless checkout UX.',
    intendedUseCase: 'Direct-to-consumer online sales with sub-second page loads and mobile-optimized cart flows.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe Integration', 'Vite'],
    highlights: [
      'Sub-1.2s average page load speed',
      'Mobile-first responsive checkout flow',
      'Real-time stock & variant selector'
    ],
    mockupType: 'browser',
    badgeText: 'Live Project'
  },
  {
    id: 'project-task-app',
    title: 'Agile Team Task & Schedule Tracker',
    category: 'Apps',
    categoryLabel: 'Mobile Apps',
    description: 'A clean mobile application interface designed for distributed teams to assign tasks, monitor deliverables, and visualize deadlines without cognitive clutter.',
    intendedUseCase: 'Daily workflow management and deadline tracking on iOS and Android devices.',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Push Notifications'],
    highlights: [
      'Offline-first synchronized state',
      'Tactile swipe gestures for task completion',
      'Compact dark mode interface'
    ],
    mockupType: 'mobile',
    badgeText: 'Client Concept'
  },
  {
    id: 'project-ai-leadgen',
    title: 'Multi-Channel Lead Qualification Engine',
    category: 'AI',
    categoryLabel: 'AI Automation',
    description: 'An intelligent workflow pipeline that intercepts incoming inquiries, extracts key project criteria, categorizes intent, and prepares draft briefs for team review.',
    intendedUseCase: 'Automating the first response and initial triage for high-volume service businesses.',
    isConceptualDemo: true,
    technologies: ['Node.js', 'Webhook Routing', 'Structured LLM Parsing', 'Slack API', 'CRM Webhooks'],
    highlights: [
      'Zero manual data re-entry into CRM',
      'Mandatory human review gate before client replies',
      'Automatic spam and low-intent filtering'
    ],
    mockupType: 'workflow',
    badgeText: 'Conceptual Prototype'
  },
  {
    id: 'project-social-campaign',
    title: 'Local Hospitality Brand Refresh & Campaign',
    category: 'Marketing',
    categoryLabel: 'Digital Marketing & Creative',
    description: 'Comprehensive brand identity revamp paired with targeted Instagram reels, Google Business Profile enhancement, and hyper-local search visibility strategy.',
    intendedUseCase: 'Revitalizing local foot traffic and modernizing digital brand touchpoints.',
    technologies: ['Brand Identity Kit', 'Google Business Optimization', 'Short-form Video', 'Local SEO'],
    highlights: [
      'Consistent cohesive visual aesthetic across platforms',
      'Complete local GBP profile verification & updates',
      'Structured content calendar with weekly reel prompts'
    ],
    mockupType: 'campaign',
    badgeText: 'Client Showcase'
  }
];

export const AI_WORKFLOWS: AIWorkflowItem[] = [
  {
    id: 'lead-generation',
    title: 'Lead Generation & Qualification',
    summary: 'Capture inquiries from your website, qualify information with smart parsing, and alert your team in real time.',
    businessImpact: 'Reduces lead response latency from hours to seconds while filtering out irrelevant spam.',
    steps: [
      {
        stage: '01',
        name: 'Inquiry Capture',
        detail: 'User submits request via website contact form or chat widget.',
        icon: 'Inbox'
      },
      {
        stage: '02',
        name: 'Smart Qualification',
        detail: 'AI categorizes business type, scope, estimated timeline, and urgency.',
        icon: 'Cpu'
      },
      {
        stage: '03',
        name: 'Human Review Gate',
        detail: 'Team receives structured summary in Slack/CRM to review and approve priority.',
        isHumanReview: true,
        icon: 'UserCheck'
      },
      {
        stage: '04',
        name: 'Action Dispatch',
        detail: 'Calendar invite link sent to qualified lead; CRM contact record created automatically.',
        icon: 'Send'
      }
    ],
    integrations: ['Website Webhooks', 'Slack', 'Notion', 'HubSpot / Google Sheets', 'Gmail'],
    reviewConsideration: 'A human team member always approves final proposals and outbound client quotes before sending.'
  },
  {
    id: 'customer-support',
    title: 'Customer Support & FAQ Triage',
    summary: 'Receive customer inquiries, identify topics against verified company documentation, and draft helpful responses.',
    businessImpact: 'Resolves common repetitive queries instantly while escalating complex edge cases to human specialists.',
    steps: [
      {
        stage: '01',
        name: 'Receive Question',
        detail: 'Customer sends question regarding services, pricing, or order status.',
        icon: 'MessageSquare'
      },
      {
        stage: '02',
        name: 'Identify & Verify',
        detail: 'System matches inquiry against official knowledge base and business FAQs.',
        icon: 'Search'
      },
      {
        stage: '03',
        name: 'Draft Response',
        detail: 'Generates empathetic, accurate response with relevant links and reference points.',
        icon: 'FileText'
      },
      {
        stage: '04',
        name: 'Review or Auto-Send',
        detail: 'Low-risk answers can send immediately; sensitive billing/technical queries escalate to human agent.',
        isHumanReview: true,
        icon: 'ShieldCheck'
      }
    ],
    integrations: ['Zendesk / Intercom', 'Knowledge Base', 'Email Ticketing', 'Discord / Slack'],
    reviewConsideration: 'System never makes up policy answers or refunds; clear disclaimers and human escalation triggers are built-in.'
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Campaign Ideation',
    summary: 'Define campaign themes, draft multi-channel post copies, review with your creative director, and schedule.',
    businessImpact: 'Multiplies creative output by eliminating blank-page syndrome for marketing teams.',
    steps: [
      {
        stage: '01',
        name: 'Define Campaign Goal',
        detail: 'Input target audience, core service message, and preferred tone of voice.',
        icon: 'Target'
      },
      {
        stage: '02',
        name: 'Multi-Format Drafting',
        detail: 'Creates draft captions for LinkedIn, Instagram carousels, and newsletter bullets.',
        icon: 'PenTool'
      },
      {
        stage: '03',
        name: 'Creative Review & Edit',
        detail: 'Marketing lead edits copy, refines tone, and matches with custom brand graphics.',
        isHumanReview: true,
        icon: 'Edit3'
      },
      {
        stage: '04',
        name: 'Batch Schedule',
        detail: 'Approved posts are formatted and scheduled to publishing platform.',
        icon: 'Calendar'
      }
    ],
    integrations: ['Buffer / Hootsuite', 'Google Docs', 'Figma Assets', 'Notion Editorial Calendar'],
    reviewConsideration: 'Every creative piece passes through human editorial check to preserve brand voice integrity.'
  },
  {
    id: 'business-operations',
    title: 'Business Operations & Task Routing',
    summary: 'Collect scattered project data, extract action items, sync systems, and generate weekly team progress recaps.',
    businessImpact: 'Saves 5-8 management hours weekly by keeping documentation and task boards automatically updated.',
    steps: [
      {
        stage: '01',
        name: 'Collect Information',
        detail: 'Ingests meeting notes, project emails, and client feedback submissions.',
        icon: 'Layers'
      },
      {
        stage: '02',
        name: 'Extract Action Items',
        detail: 'Identifies assignees, deliverable dates, and pending dependencies.',
        icon: 'CheckSquare'
      },
      {
        stage: '03',
        name: 'Board Synchronization',
        detail: 'Updates Jira/Trello/ClickUp boards and alerts respective team members.',
        icon: 'RefreshCw'
      },
      {
        stage: '04',
        name: 'Executive Summary',
        detail: 'Sends weekly bullet summary to leadership on key completions and blockers.',
        isHumanReview: true,
        icon: 'FileBarChart'
      }
    ],
    integrations: ['ClickUp / Trello', 'Google Drive', 'Zoom transcripts', 'Email summaries'],
    reviewConsideration: 'Task reallocations and scope changes require supervisor confirmation.'
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'starter',
    name: 'Website Designers Under 3000 in Vizag',
    badge: 'Under ₹3,000 in Vizag',
    tagline: 'Hire top website designers under 3000 in Vizag. High-converting business websites starting at just ₹2,999.',
    idealFor: 'Vizag shops, clinics, restaurants, local brands & startups looking for website designers under 3000.',
    price: '₹2,999',
    pricingNote: 'One-time investment • Under ₹3,000 guaranteed • Zero hidden fees',
    features: [
      'Designed by top website designers in Visakhapatnam (1-3 pages)',
      'Mobile, tablet & desktop layout optimization',
      'WhatsApp direct inquiry click-to-chat integration',
      'Ultra-fast load time (Core Web Vitals 95+ score)',
      'Localized Vizag Google Maps & SEO search tags',
      'Fast 3-5 day delivery & 100% full code ownership'
    ],
    actionLabel: 'Hire Designer for ₹2,999 →'
  },
  {
    id: 'pro',
    name: 'Mobile App Development',
    isPopular: true,
    badge: 'High Value',
    tagline: 'Custom smartphone application built for iOS & Android to scale your business.',
    idealFor: 'Companies ready for dedicated client apps, booking, e-commerce, or tools.',
    price: '₹9,999',
    pricingNote: 'Starting at ₹9,999 • Milestone-based delivery',
    features: [
      'Cross-platform iOS & Android mobile application',
      'Custom UI/UX designed around your brand',
      'Fast responsive performance & offline caching',
      'Push notification & customer alerts capability',
      'Database & authentication ready structure',
      'App store preparation & technical deployment support'
    ],
    actionLabel: 'Build App for ₹9,999 →'
  },
  {
    id: 'local-gbp',
    name: 'Google Business Profile',
    tagline: 'Get discovered by local customers searching on Google Maps and nearby search.',
    idealFor: 'Local businesses, clinics, restaurants, retail stores & consultants.',
    price: '₹999',
    pricingNote: 'Complete setup & optimization for just ₹999',
    features: [
      'Complete profile creation, verification & audit',
      'Google Maps 100% NAP consistency optimization',
      'Category & high-intent local keyword optimization',
      'Business hours, services, products & photo uploads',
      'Customer review generation toolkit & templates',
      'Quick 24-48 hour delivery'
    ],
    actionLabel: 'Optimize GBP for ₹999 →'
  }
];

export const TRUST_VALUES = [
  {
    icon: 'MessageCircle',
    title: 'Clear Communication',
    description: 'No technical jargon runarounds. We explain options clearly, maintain responsive channels, and set realistic expectations from day one.'
  },
  {
    icon: 'Wrench',
    title: 'Practical Solutions',
    description: 'We prioritize building things that actually solve your operational bottleneck or customer discovery challenge, not flashy tech for its own sake.'
  },
  {
    icon: 'FileCheck',
    title: 'Transparent Scope',
    description: 'You get defined milestone roadmaps, visible deliverables, and honest advice on what is essential versus what can wait.'
  },
  {
    icon: 'Users',
    title: 'Collaborative Process',
    description: 'We treat your business with the care of true partners. You have complete visibility at each stage of the Zero to Hero journey.'
  }
];

