import { ServiceItem, ProjectItem, ProcessStepItem, AIWorkflowItem, PackageItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Engineering',
    iconName: 'Code',
    description: 'Modern, responsive websites designed to represent your brand and support your business goals.',
    features: [
      'Business websites & portfolios',
      'High-converting landing pages',
      'E-commerce platforms',
      'Responsive UI/UX architecture',
      'Performance & SEO optimization',
      'CMS integration & website revamps'
    ],
    deliverables: ['Custom codebase', 'Mobile & tablet responsiveness', 'Fast load times (<1.5s)', 'SEO metadata setup', 'Source code & deployment'],
    timeline: '1 to 4 weeks depending on scope',
    idealFor: 'Startups, local businesses, and modern brands seeking high credibility and seamless user experience.'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    category: 'Engineering',
    iconName: 'Smartphone',
    description: 'Design and development solutions for mobile experiences that bring your ideas to life.',
    features: [
      'Mobile application concepts & wireframing',
      'Intuitive UI/UX product design',
      'Cross-platform development (React Native)',
      'App improvement and feature iteration',
      'Offline caching & responsive states'
    ],
    deliverables: ['Interactive design prototype', 'Clean frontend application', 'API integration ready', 'App store preparation guide'],
    timeline: '3 to 8 weeks depending on features',
    idealFor: 'Entrepreneurs and service providers needing a dedicated mobile touchpoint for users.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    category: 'Intelligence',
    iconName: 'Sparkles',
    description: 'Explore practical AI-powered workflows and integrations that can reduce repetitive tasks.',
    features: [
      'Custom AI assistants & chatbots',
      'Repetitive workflow automations',
      'Business process integrations',
      'Document parsing & smart summaries',
      'Human review & approval guardrails'
    ],
    deliverables: ['Automated pipeline diagram', 'Webhook & API integrations', 'Fallback handling logic', 'Safety check system'],
    timeline: '1 to 3 weeks',
    idealFor: 'Businesses spending too many manual hours on inquiries, scheduling, or recurring data entry.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Growth',
    iconName: 'TrendingUp',
    description: 'Creative and data-informed digital marketing solutions for businesses that want to strengthen their online presence.',
    features: [
      'Strategic social media marketing',
      'Organic Search Engine Optimization (SEO)',
      'Targeted content planning & calendars',
      'Performance marketing & digital ads',
      'Audience analytics & tracking insights'
    ],
    deliverables: ['Monthly content strategy', 'Target audience research', 'SEO keyword mapping', 'Transparent reporting'],
    timeline: 'Ongoing monthly engagement',
    idealFor: 'Brands that have a great product but need consistent visibility and customer discovery.'
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile',
    category: 'Local SEO',
    iconName: 'MapPin',
    description: 'Help businesses maintain an informative and consistent local online presence.',
    features: [
      'Profile setup and optimization',
      'Business information & NAP consistency',
      'Local photo & catalog updates',
      'Review-response strategy guidance',
      'Local search discovery support'
    ],
    deliverables: ['Fully optimized GBP profile', 'Category & attribute audit', 'Customer review templates', 'Local citation checklist'],
    timeline: '3 to 7 business days',
    idealFor: 'Local businesses, clinics, restaurants, and service providers wanting to show up in neighborhood searches.'
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    category: 'Branding',
    iconName: 'Palette',
    description: 'Build a recognizable visual identity with creative assets designed for your brand.',
    features: [
      'Complete brand identity & logo design',
      'Social media creative kits & banners',
      'Marketing collateral & graphic design',
      'Short-form video editing for Reels/TikTok',
      'Campaign visuals and presentation decks'
    ],
    deliverables: ['Vector brand identity kit', 'Typography & color styleguide', 'Editable Figma/Canva templates', 'Exported social assets'],
    timeline: '1 to 2 weeks',
    idealFor: 'New ventures launching their identity or established brands needing a fresh, modern aesthetic.'
  }
];

export const BUSINESS_CHALLENGES = [
  {
    id: 'discovery',
    icon: 'Compass',
    title: 'Hard to Get Discovered',
    description: 'Businesses struggle to establish a clear digital presence and reach relevant audiences in crowded local and online markets.',
    solution: 'Unified SEO, Google Business optimization, and focused social media visibility tailored to your specific audience.'
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
    title: 'Outdated Digital Experience',
    description: 'Slow, clunky, or non-mobile-friendly websites fail to communicate the actual quality and professionalism of your business.',
    solution: 'Fast, responsive, modern digital interfaces that load instantly and convert visitors into engaged customers.'
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
    description: 'A lightning-fast, high-converting e-commerce web platform built for a boutique retail brand, featuring fluid product filtering and seamless checkout UX.',
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
    name: 'Digital Kickstart',
    tagline: 'For small businesses and creators taking their first serious step online.',
    idealFor: 'Startups, independent practitioners & local businesses.',
    pricingNote: 'Custom quote based on scope • Transparent milestone billing',
    features: [
      'Modern 1-3 page responsive business website',
      'Google Business Profile setup & local optimization',
      'Fundamental brand identity & social media kit',
      'Mobile-optimized design with high accessibility',
      'Basic contact form & WhatsApp inquiry button',
      '1-on-1 strategy & onboarding session'
    ],
    actionLabel: 'Get Started →'
  },
  {
    id: 'growth',
    name: 'Growth Engine',
    isPopular: true,
    badge: 'Most Popular',
    tagline: 'For businesses looking to actively expand visibility, acquire customers, and upgrade tech.',
    idealFor: 'Growing companies ready for coordinated marketing and modern web performance.',
    pricingNote: 'Custom quote based on scope • Monthly or milestone engagement',
    features: [
      'Multi-page custom website or web application revamp',
      'Full SEO audit, keyword mapping & on-page optimization',
      'Social media marketing strategy & monthly creative assets',
      'Google Business Profile active management & updates',
      'Lead capture automations & CRM notification webhooks',
      'Priority communication & monthly growth reporting'
    ],
    actionLabel: 'Explore Growth →'
  },
  {
    id: 'pro',
    name: 'All-in-One Solution',
    tagline: 'For ambitious ventures needing tailored technology, custom apps, and AI automations.',
    idealFor: 'Scaling businesses requiring custom software, apps, and dedicated technical partnership.',
    pricingNote: 'Custom quote based on scope • Dedicated development sprint',
    features: [
      'Full-stack web application or mobile app development',
      'Custom AI assistant or tailored workflow integration',
      'End-to-end brand redesign & high-fidelity design system',
      'Comprehensive multi-channel digital marketing roadmap',
      'API integrations with existing company databases/tools',
      'Ongoing technical maintenance, updates & support'
    ],
    actionLabel: 'Discuss Your Project →'
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
