import { ServiceItem, ProjectCaseStudy, ProcessStage, InsightArticle, NavItem } from "@/types";

export const siteConfig = {
  name: "KreaitX",
  legalName: "KreaitX Creative Technology",
  tagline: "Creative Technology & Digital Growth",
  positioning: "One connected creative technology partner for businesses that need ideas, execution and digital growth under one roof.",
  description: "KreaitX combines strategy, creativity and technology to help businesses build stronger brands, digital experiences and meaningful growth.",
  url: "https://kreaitx.com",
  location: {
    city: "Peshawar",
    country: "Pakistan",
    formatted: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
    timezone: "PKT (UTC+5)"
  },
  contact: {
    email: "contact@kreaitx.com",
    inquiries: "projects@kreaitx.com",
    officeNote: "Available for worldwide client collaborations and local strategic partnerships."
  },
  social: {
    linkedin: "https://linkedin.com/company/kreaitx",
    instagram: "https://instagram.com/kreaitx",
    x: "https://x.com/kreaitx",
    github: "https://github.com/kreaitx"
  }
};

export const navItems: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const servicesData: ServiceItem[] = [
  {
    id: "branding",
    number: "01",
    title: "Branding",
    category: "Identity & Strategy",
    tagline: "Distill purpose into a coherent visual and verbal system.",
    description: "Build a recognizable identity with a clear visual and verbal system that differentiates your business across touchpoints.",
    problemSolved: "Disconnected visuals, confusing brand messages, and commoditization that prevent premium positioning.",
    deliverables: [
      "Brand Positioning & Narrative",
      "Logo & Core Identity System",
      "Typography & Color Architecture",
      "Comprehensive Brand Guidelines",
      "Stationery & Collateral Standards"
    ],
    workflow: [
      "Discovery & Competitor Landscape Analysis",
      "Strategic Positioning Formulation",
      "Identity Concepts & Iteration",
      "Design System & Guideline Finalization"
    ],
    relatedCapabilities: ["Graphic Design", "Digital Solutions", "Filming & Production"],
    featured: true
  },
  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    category: "Growth & Acquisition",
    tagline: "Connect creative campaigns directly with business objectives.",
    description: "Plan and execute campaigns around real business objectives rather than vanity metrics, bridging creative storytelling with performance.",
    problemSolved: "Wasted ad budgets on generic creative that fails to convert or build long-term brand equity.",
    deliverables: [
      "Performance Campaign Strategy",
      "Paid Search & Social Management",
      "Conversion Funnel Optimization",
      "Audience Segmentation & Tracking",
      "Transparent Growth Reporting"
    ],
    workflow: [
      "Audience & Channel Opportunity Audit",
      "Funnel Architecture & Message Mapping",
      "Creative Production & Campaign Setup",
      "Continuous Optimization & Scale"
    ],
    relatedCapabilities: ["Social Media Management", "Digital Solutions", "Branding"],
    featured: false
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media Management",
    category: "Content & Community",
    tagline: "Cultivate an active, loyal brand presence with continuous substance.",
    description: "Create consistent content and community experiences across platforms that establish authority, engagement, and customer loyalty.",
    problemSolved: "Irregular posting schedules, inconsistent visual voice, and low engagement that weaken brand trust.",
    deliverables: [
      "Content Calendar & Editorial Strategy",
      "Multi-Format Content Creation",
      "Community Engagement & Response",
      "Platform Analytics & Iteration",
      "Influencer & Creator Direction"
    ],
    workflow: [
      "Tone of Voice & Content Pillar Design",
      "Monthly Asset Production Sprints",
      "Publishing, Scheduling & Moderation",
      "Performance Review & Strategy Refinement"
    ],
    relatedCapabilities: ["Filming & Production", "Graphic Design", "2D Animation"],
    featured: false
  },
  {
    id: "filming-production",
    number: "04",
    title: "Filming & Production",
    category: "Visual Storytelling",
    tagline: "Turn complex narratives into cinematic, high-impact visual stories.",
    description: "Turn ideas into polished visual stories through professional filming, post-production, and commercial cinematography.",
    problemSolved: "Amateur production values that fail to convey product quality or brand prestige.",
    deliverables: [
      "Brand Films & Commercials",
      "Product Showcase Videos",
      "Executive Interviews & Case Studies",
      "Full Post-Production & Color Grading",
      "Sound Design & Master Audio Mixing"
    ],
    workflow: [
      "Storyboarding & Scriptwriting",
      "Pre-Production & Logistics Planning",
      "Principal Photography & Filming",
      "Editing, Color Grade, Sound & Delivery"
    ],
    relatedCapabilities: ["2D Animation", "Social Media Management", "Branding"],
    featured: true
  },
  {
    id: "graphic-design",
    number: "05",
    title: "Graphic Design",
    category: "Communication Design",
    tagline: "Make complex ideas intuitive through purposeful visual design.",
    description: "Make complex ideas easier to understand through purposeful visual communication, editorial layouts, and marketing assets.",
    problemSolved: "Cluttered marketing collateral and inconsistent presentation materials that confuse prospective clients.",
    deliverables: [
      "Marketing & Sales Collateral",
      "Editorial & Report Layouts",
      "Custom Infographics & Visual Data",
      "Packaging & Environmental Design",
      "Digital Advertising Creative Assets"
    ],
    workflow: [
      "Content Hierarchy Assessment",
      "Visual Explorations & Prototypes",
      "Layout Crafting & Typography Balancing",
      "Multi-Format Production Exporting"
    ],
    relatedCapabilities: ["Branding", "Digital Solutions", "Social Media Management"],
    featured: false
  },
  {
    id: "2d-animation",
    number: "06",
    title: "2D Animation",
    category: "Motion & Explainer",
    tagline: "Use purposeful motion to explain, educate, and captivate.",
    description: "Use motion to explain, educate and bring concepts to life with fluid vector animation, motion graphics, and UI interactions.",
    problemSolved: "Abstract or technical products that are difficult to explain solely through static text or imagery.",
    deliverables: [
      "Product Explainer Animations",
      "Motion Graphics for Digital Ads",
      "Animated Brand Idents & Logos",
      "Micro-Interactions for Web & Apps",
      "Social Motion Graphics Packages"
    ],
    workflow: [
      "Concept Scripting & Voiceover Setup",
      "Style Frames & Character/Object Design",
      "Motion Choreography & Keyframing",
      "Sound Synthesis & Final Render"
    ],
    relatedCapabilities: ["Filming & Production", "Digital Solutions", "Graphic Design"],
    featured: false
  },
  {
    id: "digital-solutions",
    number: "07",
    title: "Digital Solutions",
    category: "Engineering & Web",
    tagline: "Translate creative vision into robust, high-performance digital products.",
    description: "Build useful digital experiences when the problem requires technology — from bespoke web applications to immersive digital brand hubs.",
    problemSolved: "Slow, generic website templates that don't match brand caliber or convert modern digital visitors.",
    deliverables: [
      "Bespoke Web Applications & Platforms",
      "Next.js High-Performance Marketing Sites",
      "Design Systems & Component Libraries",
      "CMS & Headless Architecture Setup",
      "Performance & SEO Optimization"
    ],
    workflow: [
      "Information Architecture & Wireframing",
      "Interactive UI/UX Prototyping",
      "Full-Stack Engineering & Integration",
      "QA, Performance Testing & Deployment"
    ],
    relatedCapabilities: ["Branding", "Digital Marketing", "Graphic Design"],
    featured: true
  }
];

export const differentiators = [
  {
    number: "01",
    title: "One Connected Team",
    summary: "No handoff friction between creatives and engineers.",
    description: "Branding, content, marketing, and digital execution work together from day one. You never have to translate your brand guidelines to a disconnected development team."
  },
  {
    number: "02",
    title: "Creative + Technical",
    summary: "Designers who understand code, engineers with aesthetic judgment.",
    description: "Ideas are not only designed in mockups; they are engineered into fast, accessible, and maintainable digital experiences without compromising the creative nuance."
  },
  {
    number: "03",
    title: "Business-Centered",
    summary: "Solving business problems over delivering decorative assets.",
    description: "The goal is never simply to ship a file or check a box. We evaluate every initiative against clarity, user trust, conversion, and sustainable business impact."
  },
  {
    number: "04",
    title: "End-to-End Continuity",
    summary: "From initial napkin idea to production rollout and growth.",
    description: "A single accountable partner shepherds your vision from market discovery, branding, and filming to web deployment and ongoing digital marketing."
  },
  {
    number: "05",
    title: "Clear, Transparent Process",
    summary: "You always know what happens next, why, and what's needed.",
    description: "We eliminate agency jargon and black-box mystery. Structured sprints, transparent milestones, and documented deliverables ensure calm, predictable collaboration."
  },
  {
    number: "06",
    title: "Human Collaboration",
    summary: "Work directly with thoughtful practitioners, not account layers.",
    description: "You collaborate directly with the senior designers, directors, and developers crafting your solution. Faster decisions, genuine listening, and zero bureaucracy."
  }
];

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Unpack the business reality, audience context, and real problem.",
    description: "We listen closely to understand where your business is today, where you need to go, what your audience truly cares about, and where traditional solutions have fallen short.",
    clientInput: "Business goals, existing materials, audience insights, and operational constraints.",
    kreaitxOutput: "Discovery summary, problem statement, key opportunities, and project scope document.",
    milestones: ["Stakeholder Interviews", "Competitive Audit", "Opportunity Mapping", "Scope Alignment"]
  },
  {
    number: "02",
    title: "Strategy",
    tagline: "Define priorities, conceptual direction, and the execution blueprint.",
    description: "We translate insights into a focused strategic architecture. We define brand positioning, content hierarchy, technical stack choices, and measurable milestones.",
    clientInput: "Feedback on strategic direction, target audience prioritization, and milestone schedule.",
    kreaitxOutput: "Brand strategy brief, architecture roadmap, technical specifications, and creative direction.",
    milestones: ["Strategic Positioning", "Information Architecture", "Content Framework", "Tech Stack Plan"]
  },
  {
    number: "03",
    title: "Create",
    tagline: "Develop brand, visual design, cinematic content, and creative direction.",
    description: "This is where ideas take tangible shape. We craft identity systems, write compelling copy, shoot high-production visuals, and design elegant interactive prototypes.",
    clientInput: "Review and structured feedback during scheduled creative reviews.",
    kreaitxOutput: "Design prototypes, visual asset libraries, production footage, and design system guidelines.",
    milestones: ["Identity Design", "UI/UX Prototyping", "Production Filming", "Copywriting & Visuals"]
  },
  {
    number: "04",
    title: "Build",
    tagline: "Translate approved ideas into clean, resilient digital experiences.",
    description: "We build digital solutions with clean, accessible code, smooth micro-interactions, responsive precision, and fast page loads across all viewports.",
    clientInput: "Content verification, user acceptance testing participation, and domain/credential access.",
    kreaitxOutput: "Production-ready codebase, CMS configuration, QA test suites, and staging previews.",
    milestones: ["Frontend Implementation", "Backend & API Integration", "Accessibility Audits", "Performance Tuning"]
  },
  {
    number: "05",
    title: "Launch",
    tagline: "Prepare everything for seamless real-world use and user reception.",
    description: "We orchestrate a methodical rollout — verifying SEO parameters, analytics tracking, DNS records, and marketing campaigns to ensure zero launch-day friction.",
    clientInput: "Final sign-off, internal team training scheduling, and launch timing synchronization.",
    kreaitxOutput: "Live deployment, DNS handover, analytics dashboards, and operational handover documentation.",
    milestones: ["DNS & Hosting Setup", "SEO & Meta Verification", "Analytics Tagging", "Public Rollout"]
  },
  {
    number: "06",
    title: "Grow",
    tagline: "Learn from real user behavior, optimize, and iterate continuously.",
    description: "Launch is the starting line. We analyze real customer interactions, run conversion optimization, refine marketing funnels, and evolve digital experiences over time.",
    clientInput: "Sales data, customer inquiries, and emerging business objectives.",
    kreaitxOutput: "Monthly growth reports, optimization recommendations, iterative feature updates, and creative sprints.",
    milestones: ["Performance Analytics", "A/B Hypothesis Testing", "Conversion Tuning", "Continuous Enhancements"]
  }
];

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "aurora-health",
    title: "Aurora Healthcare Platform",
    client: "Aurora Regional Care",
    industry: "Healthcare & MedTech",
    year: "2025",
    summary: "Transforming a fragmented regional medical provider into a patient-centered digital health experience.",
    challenge: "Aurora operated with legacy brand materials and disconnected booking systems, resulting in high patient abandonment and confusion across multiple clinics.",
    strategy: "Unify the brand under a calm, trustworthy identity and engineer a streamlined digital portal prioritizing instant appointment scheduling and clinician transparency.",
    execution: "Developed a comprehensive design system, conducted professional on-location filming of medical staff, and built a custom high-speed Next.js web application with WCAG AA accessibility.",
    impact: "Reduced online booking friction by 42%, increased direct appointments, and unified 4 regional facilities under a cohesive visual standard.",
    services: ["Branding", "Digital Solutions", "Filming & Production", "UI/UX Design"],
    deliverables: [
      "Complete Brand Identity",
      "Custom Next.js Web Platform",
      "Cinematic Clinic Filming",
      "Accessible Design System"
    ],
    slug: "aurora-healthcare",
    featured: true,
    accentColor: "#14213D"
  },
  {
    id: "nordic-craft",
    title: "Nordic Craft Furniture",
    client: "Nordic Atelier",
    industry: "Luxury Retail & Design",
    year: "2024",
    summary: "Connecting artisanal timber craftsmanship with an editorial digital commerce experience.",
    challenge: "The brand struggled to communicate the physical value and bespoke tactile nature of their bespoke furniture through traditional e-commerce templates.",
    strategy: "Shift the narrative from commodity catalogue to an editorial atelier story, combining 4K workshop cinematography with responsive typographic layouts.",
    execution: "Produced documentary-style production films showing master joinery, paired with an ultra-clean bespoke web experience featuring fluid dimension calculators and material configurators.",
    impact: "Doubled average user session duration to 4.2 minutes and increased commercial architect inquiries by 68% in the first quarter post-launch.",
    services: ["Filming & Production", "Digital Solutions", "Graphic Design", "Social Media"],
    deliverables: [
      "Artisanal Workshop Video Series",
      "Editorial Web Experience",
      "Material Specification Catalog",
      "Social Campaign System"
    ],
    slug: "nordic-craft",
    featured: true,
    accentColor: "#111111"
  },
  {
    id: "vanguard-fintech",
    title: "Vanguard Payment Systems",
    client: "Vanguard Pay",
    industry: "Financial Technology",
    year: "2024",
    summary: "Rebranding a complex B2B payments infrastructure for global institutional trust.",
    challenge: "The client's technical architecture was world-class, but their marketing materials and developer documentation looked outdated, undermining sales conversations with enterprise banks.",
    strategy: "Position Vanguard as the quiet, robust backbone of modern commerce with crisp typography, precise 2D explanatory motion, and interactive API documentation.",
    execution: "Created a modern geometric brand system, scripted and animated 5 product explainer modules, and engineered an ultra-fast developer hub with live code demos.",
    impact: "Shortened enterprise sales cycles by 3 weeks through self-serve explainer animations and boosted developer portal engagement by 84%.",
    services: ["Branding", "2D Animation", "Digital Solutions", "Digital Marketing"],
    deliverables: [
      "Enterprise Identity Architecture",
      "2D Motion Explainer Suite",
      "Interactive Developer Hub",
      "B2B Growth Funnel Strategy"
    ],
    slug: "vanguard-fintech",
    featured: true,
    accentColor: "#14213D"
  }
];

export const insightsArticles: InsightArticle[] = [
  {
    id: "connected-creative-tech",
    slug: "why-connected-creative-tech-beats-isolated-agencies",
    title: "Why Connected Creative Technology Beats Isolated Agencies",
    category: "Creative Strategy",
    readTime: "5 min read",
    publishDate: "January 2025",
    excerpt: "When brand designers, videographers, and software engineers work in silos, the original idea loses fidelity. Here is why the connected model creates compounding business value.",
    summary: "An exploration of how cross-disciplinary collaboration eliminates the costly handoff gap between strategic conception and digital execution.",
    keyTakeaways: [
      "Handoffs between separate agencies introduce cognitive and stylistic degradation.",
      "Engineers with design empathy build products that preserve subtle brand nuances.",
      "Unified teams resolve business problems rather than defending isolated deliverable scopes."
    ],
    content: [
      "In the traditional agency model, a business hires a branding studio to design an identity, a video crew to shoot commercials, a marketing agency to run campaigns, and a software house to build their website. Each operates within its own silo, optimizing for its specific invoice rather than the holistic customer journey.",
      "The result is inevitable friction: the website doesn't reflect the typography of the brand guidelines, the video campaign directs traffic to a slow landing page, and the marketing team blames the developers when conversion rates drop.",
      "By housing creative direction, visual production, and modern software engineering under one roof, decisions are tested against both aesthetic integrity and technical feasibility from day one.",
      "The outcome is not merely a website or a video — it is a cohesive brand ecosystem where every touchpoint reinforces customer trust."
    ]
  },
  {
    id: "human-craft-in-ai-era",
    slug: "the-enduring-value-of-human-craft-in-digital-design",
    title: "The Enduring Value of Human Craft in Digital Design",
    category: "UX & Design",
    readTime: "4 min read",
    publishDate: "February 2025",
    excerpt: "In a world flooded with AI-generated templates and generic gradients, restraint, typography, and human context have become the ultimate competitive advantages.",
    summary: "Why discernment and intentional restraint stand out in an ecosystem saturated with automated decoration.",
    keyTakeaways: [
      "AI tools generate averages; distinctive brands require human judgment and cultural context.",
      "Restraint in layout and typography communicates confidence far better than visual noise.",
      "True craftsmanship lies in removing the unnecessary so the core value shines clearly."
    ],
    content: [
      "It has never been easier to generate a futuristic-looking webpage in 30 seconds with automated tools. Yet paradoxically, the internet feels more homogeneous than ever.",
      "When every website relies on the same purple-to-blue gradients, glowing borders, and floating 3D spheres, visual decoration loses its ability to differentiate. Visitors subconsciously register these patterns as hollow templates.",
      "Real human craftsmanship begins with understanding the specific psychological context of the customer: What reduces their anxiety? What information do they need to make a confident decision?",
      "By prioritizing generous whitespace, rigorous typographic hierarchy, and purpose-driven micro-interactions, we build digital homes that convey permanence, seriousness, and calm authority."
    ]
  },
  {
    id: "speed-as-brand-feature",
    slug: "speed-and-accessibility-as-core-brand-attributes",
    title: "Speed and Accessibility as Core Brand Attributes",
    category: "Technology",
    readTime: "6 min read",
    publishDate: "March 2025",
    excerpt: "A beautiful design that stutters on mobile or excludes users with disabilities is not a design triumph. Why technical excellence is an ethical and commercial imperative.",
    summary: "How performance engineering and WCAG compliance directly translate to higher conversion and lasting brand reputation.",
    keyTakeaways: [
      "Page load speed directly shapes user perception of company competence.",
      "Accessibility (WCAG AA) expands addressable market and improves SEO fundamentals.",
      "Lean code and semantic HTML outperform heavy plugin-dependent architectures every time."
    ],
    content: [
      "We often discuss brand positioning in terms of colors, logos, and mission statements. But the moment a user clicks your link, their first impression is determined by how quickly the page responds.",
      "A 500ms delay can undermine weeks of careful copywriting. When a website stutters, shifts layouts abruptly, or fails on a spotty mobile connection, the visitor attributes that clunkiness directly to the company behind it.",
      "Similarly, designing for accessibility is not a compliance checkbox — it is a fundamental design principle. Clear focus indicators, semantic heading hierarchy, high color contrast, and keyboard navigation ensure that every prospective client can interact effortlessly.",
      "When creative ambition is paired with rigorous engineering discipline, technology becomes invisible, allowing the brand story to resonate without friction."
    ]
  }
];

export const trustPrinciples = [
  {
    title: "Zero Artificial Fluff",
    description: "We don't invent fake client logos, fabricated awards, or inflated statistics. Real trust is built on authentic work and transparent communication."
  },
  {
    title: "Clear Milestone Predictability",
    description: "Every phase has explicit deliverables, client review check-ins, and realistic timelines so your internal team stays aligned."
  },
  {
    title: "Peshawar Craftsmanship, Global Standards",
    description: "Rooted in Peshawar's vibrant tech landscape, delivering world-class digital products and creative solutions for ambitious businesses."
  },
  {
    title: "Direct Access to Practitioners",
    description: "You work directly with the designers, directors, and developers crafting your solution without intermediaries."
  }
];
