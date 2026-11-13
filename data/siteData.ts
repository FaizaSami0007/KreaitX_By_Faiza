import {
  ServiceItem,
  ProjectCaseStudy,
  ProcessStage,
  InsightArticle,
  NavItem,
  CoreOffering,
  XRayAuditArea,
  LeaderProfile,
  AdvisorProfile
} from "@/types";

export const siteConfig = {
  name: "KreaitX",
  legalName: "KreaitX Creative Technology",
  tagline: "We Design Growth.",
  descriptor: "Brand Films · Proof-Driven Marketing",
  positioning: "KreaitX produces brand films and marketing that help capable companies be seen for what they are, and win the clients, contracts and investment that follow.",
  coreIdea: "Proof first. Production second.",
  foundedYear: "2025",
  model: "Core team and specialist network",
  description: "A brand film and proof-driven marketing studio. We identify existing proof, define one defensible positioning claim, and produce the films, design, and marketing to make that claim credible.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kreaitx.com",
  location: {
    city: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    formatted: "Khyber Pakhtunkhwa, Pakistan",
    timezone: "PKT (UTC+5)",
    serving: "United States, Middle East, and Worldwide"
  },
  contact: {
    email: "mehboobakbar@kreaitx.com",
    inquiries: "mehboobakbar@kreaitx.com",
    officeNote: "Serving clients worldwide with US timezone-aligned scheduling and fixed USD invoicing."
  },
  social: {
    linkedin: "https://linkedin.com/company/kreaitx",
    instagram: "https://instagram.com/kreaitx",
    x: "https://x.com/kreaitx",
    github: "https://github.com/FaizaSami0007/KreaitX_By_Faiza"
  }
};

export const navItems: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Why KreaitX", href: "/why-kreaitx" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" }
];

// Page 4: 03 — SERVICES AND PRICING (The 4 Official Primary Offerings)
export const coreOfferings: CoreOffering[] = [
  {
    id: "x-ray-audit",
    number: "01",
    tag: "Assessment",
    title: "X-Ray Audit",
    pricingLabel: "Complimentary",
    pricingNote: "Zero commitment. The findings and recommendations are yours to keep.",
    description: "A comprehensive diagnostic audit uncovering exactly where your business is being undersold across six core credibility areas.",
    features: [
      "Credibility Gap Report",
      "Assessment across six credibility areas",
      "Two to three immediate recommendations",
      "Competitive positioning review"
    ],
    ctaLabel: "Request an audit",
    ctaType: "audit"
  },
  {
    id: "brand-film",
    number: "02",
    tag: "Production",
    title: "Brand Film",
    pricingLabel: "Fixed-Price Quote in USD",
    pricingNote: "Quoted at a guaranteed fixed price before production commences.",
    description: "Cinematic, proof-centered visual films that communicate your core commercial strength and command institutional trust.",
    features: [
      "Positioning claim and creative brief",
      "Scriptwriting and full pre-production",
      "Principal photography and on-location filming",
      "Primary hero film with multi-channel social edits"
    ],
    ctaLabel: "Request a quote",
    ctaType: "quote"
  },
  {
    id: "proof-pack",
    number: "03",
    tag: "Credibility",
    title: "Proof Pack",
    pricingLabel: "Fixed-Price Quote in USD",
    pricingNote: "Modular proof assets engineered for immediate sales enablement.",
    description: "A targeted suite of evidence assets converting passive prospects into convinced enterprise buyers and investors.",
    features: [
      "Client testimonial videos with authentic proof",
      "Founder or subject-matter expert authority film",
      "High-impact case study design for web & sales decks",
      "Evidence-led sales collateral"
    ],
    ctaLabel: "Request a quote",
    ctaType: "quote"
  },
  {
    id: "growth-retainer",
    number: "04",
    tag: "Partnership",
    title: "Growth Retainer",
    pricingLabel: "Fixed Monthly Retainer in USD",
    pricingNote: "Ongoing creative and strategic continuity for growing brands.",
    description: "An ongoing monthly partnership producing films, managing campaign distribution, and tracking measurable credibility improvements.",
    features: [
      "Monthly brand film and content production",
      "Campaign management and channel placement",
      "Quarterly reassessment report showing measurable growth",
      "Direct access to core creative leadership"
    ],
    ctaLabel: "Request a quote",
    ctaType: "quote"
  }
];

export const additionalCapabilities = [
  { title: "Demonstration Videos", description: "Clear, engaging walkthroughs that demonstrate complex technical products." },
  { title: "Photography", description: "Documentary and commercial on-location photography capturing genuine work." },
  { title: "Motion Graphics", description: "2D animated explainer graphics that articulate proprietary workflows and architecture." },
  { title: "Brand Identity", description: "Distinctive logo, color, and typographic design systems built for longevity." },
  { title: "Social Media Campaigns", description: "Strategic distribution of proof assets across decision-maker channels." }
];

// Page 3: 02 — OUR APPROACH (The X-Ray Audit Six Assessment Areas)
export const xrayAuditAreas: XRayAuditArea[] = [
  {
    id: "substance",
    area: "Substance",
    question: "Is real proof available, and is it being used?",
    businessValue: "We audit past projects, customer metrics, and team credentials to find evidence that is currently hidden."
  },
  {
    id: "message",
    area: "Message",
    question: "Does the business own one clear, defensible claim?",
    businessValue: "We strip away generic marketing buzzwords to isolate a single positioning claim your competitors cannot make."
  },
  {
    id: "perception",
    area: "Perception",
    question: "Does the presentation match the real quality of the work?",
    businessValue: "We identify where low-production websites, amateur video, or outdated collateral undermine high-caliber services."
  },
  {
    id: "consistency",
    area: "Consistency",
    question: "Is the claim the same across every channel?",
    businessValue: "We inspect your website, sales decks, social profiles, and proposal materials for conflicting messages."
  },
  {
    id: "competition",
    area: "Competition",
    question: "Where are competitors presenting more convincingly?",
    businessValue: "We analyze why less capable competitors win contracts and pinpoint what they communicate better."
  },
  {
    id: "visibility",
    area: "Visibility",
    question: "Is the proof reaching the people who make decisions?",
    businessValue: "We verify whether your evidence assets actually reach enterprise buyers, procurement teams, and investors."
  }
];

// Page 3: 02 — OUR APPROACH (The Three Process Stages)
export const threeStepApproach = [
  {
    number: "01",
    title: "Consultation",
    duration: "15 minutes",
    description: "A focused, zero-cost conversation to understand your business reality, target buyers, and commercial goals.",
    output: "Initial commercial diagnosis and scope alignment."
  },
  {
    number: "02",
    title: "Audit and Proposal",
    duration: "1–2 Weeks",
    description: "Your complimentary X-Ray Audit identifies a single claim to own, backed by a fixed-price USD proposal before any commitment.",
    output: "Credibility Gap Report, positioning claim, and fixed-price scope."
  },
  {
    number: "03",
    title: "Production and Delivery",
    duration: "3–6 Weeks",
    description: "Films, design, and campaigns built strictly to prove that claim, managed through structured client review rounds.",
    output: "Production masters, multi-channel edits, and growth rollout."
  }
];

// Page 2: 01 — ABOUT KREAITX (The Challenge We Solve / The Credibility Gap)
export const credibilityGapChallenge = [
  {
    title: "Hidden Proof",
    description: "Real results, hard-won credentials, and passionate client praise exist inside the business, but are never systematically captured, filmed, or presented to prospects."
  },
  {
    title: "Generic Messaging",
    description: "The company speaks in the same tired clichés as every competitor — quality, innovation, excellence — leaving buyers unable to distinguish real depth from empty talk."
  },
  {
    title: "Lost Opportunities",
    description: "Less capable competitors win deals, government contracts, and investor funding simply because they package their story and presentation more convincingly."
  }
];

// Page 6: 05 — WHY KREAITX (The 4 Official Differentiators)
export const whyKreaitXDifferentiators = [
  {
    number: "01",
    title: "Diagnosis Before Production",
    summary: "Complimentary X-Ray Audit before any commercial commitment.",
    description: "We never sell video or marketing services blindly. We first diagnose your credibility gap and prove where your presentation is falling short."
  },
  {
    number: "02",
    title: "Every Piece Supports One Claim",
    summary: "Work measured by contracts, investment, and buyer trust — not vanity likes.",
    description: "Every frame we shoot, word we write, and interface we code is designed to prove a single defensible positioning claim to decision-makers."
  },
  {
    number: "03",
    title: "Measurable Progress",
    summary: "Quarterly re-assessment showing clear before-and-after change over time.",
    description: "We don't vanish after delivery. Retainer partners receive quarterly credibility audits tracking market perception and conversion shifts."
  },
  {
    number: "04",
    title: "International Quality, Efficient Cost",
    summary: "Led by a filmmaker and creative technologist with nine years of experience.",
    description: "Based in Khyber Pakhtunkhwa, Pakistan, we combine global documentary-caliber production standards with lean, disciplined cost efficiency."
  }
];

// Page 6: 05 — Target Audience & Situations
export const targetAudience = {
  headline: "Companies with genuine capability that the market does not yet take seriously.",
  description: "B2B service, technology, engineering, and professional firms with real clients and verified results.",
  situations: [
    { title: "Raising Investment", desc: "Convincing institutional venture capital and private equity through concrete evidence." },
    { title: "Bidding for Major Contracts", desc: "Out-presenting legacy competitors in high-stakes RFP and procurement processes." },
    { title: "Entering a New Market", desc: "Establishing instant authority when launching in new international territories." },
    { title: "Losing Deals to Weaker Competitors", desc: "Fixing presentation gaps that let less capable rivals win on appearance alone." },
    { title: "Rebranding After Growth", desc: "Modernizing an outdated identity to reflect the company's true scale and maturity." }
  ],
  usWorkingModel: [
    { label: "Scheduling", desc: "Calls arranged flexibly in your US/international time zone." },
    { label: "Billing", desc: "Guaranteed fixed quotes and transparent invoicing in USD." },
    { label: "Team Model", desc: "Core creative leadership plus vetted specialist network — pay for skill, not bloated agency overhead." }
  ]
};

// Page 7: 06 — LEADERSHIP
export const leadershipProfile: LeaderProfile = {
  name: "Mehboob Akbar",
  title: "Founder and Chief Executive Officer",
  image: "/images/mehboob-akbar.png",
  experienceYears: 9,
  bio: "Filmmaker and creative technologist with nine years of experience directing film, documentary, and brand content across media, technology, and public service.",
  trackRecord: [
    "Editor of the official trailer for the Prime Video documentary When Does Freedom Begin",
    "Global brand film for ToltHawk, an AI-powered flood monitoring company",
    "Official film for the Khyber Pakhtunkhwa Livestock Department (Ehsaas Beizuba)",
    "On-the-ground documentary field coverage of the 2020 Swat floods",
    "Creative and brand technology for HUB47, RaideIT, KAIT, KPEF, ESEF, and Hashoo Foundation"
  ]
};

export const advisoryBoard: AdvisorProfile[] = [
  {
    name: "Khurshid Alam",
    role: "Chairman of the Board",
    location: "Dubai, UAE",
    bio: "Founder and CEO of KAIT Consulting, Dubai. Over 20 years in enterprise strategy, digital transformation, and startup mentoring across MENA and international markets."
  },
  {
    name: "Nadeem Ullah",
    role: "Sales and Marketing Advisor",
    location: "Dubai, UAE",
    bio: "Product marketer based in Dubai, focused on commercial go-to-market execution, digital growth systems, and performance innovation."
  },
  {
    name: "Kalim Ullah",
    role: "Finance and Management Advisor",
    location: "Dubai, UAE",
    bio: "Senior Financial Accountant and business analyst in Dubai, specialising in corporate financial controls, ERP architecture, and AI automation."
  }
];

// Page 5: 04 — SELECTED WORK (Official Projects + Verified Benchmarks)
export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "prime-video",
    title: "When Does Freedom Begin",
    client: "Prime Video",
    industry: "Streaming · Documentary",
    year: "2024",
    summary: "Edited the official international trailer for the feature documentary film 'When Does Freedom Begin', streaming globally on Prime Video.",
    challenge: "Compressing a nuanced, emotionally complex feature documentary into a high-stakes 2-minute promotional trailer that captivates global streaming audiences.",
    strategy: "Anchor the pacing around core dramatic conflicts, balancing intimate human vulnerability with cinematic tension and refined sound design.",
    execution: "Directed trailer editorial, dialogue rhythm, pacing cutdowns, color grading, and multi-format promotional deliverables for international release.",
    impact: "Premiered internationally on Prime Video; generated critical festival acclaim and verified streaming distribution reach.",
    services: ["Filming & Production", "Brand Film", "Motion Graphics"],
    deliverables: [
      "Official International 2-Minute Trailer",
      "Social Teasers & Vertical Cutdowns",
      "Sound Design & Cinematic Color Grading",
      "Festival Screening Master Deliverables"
    ],
    slug: "prime-video",
    featured: true,
    accentColor: "#10172A"
  },
  {
    id: "tolthawk",
    title: "ToltHawk Global Launch",
    client: "ToltHawk",
    industry: "AI · Climate Technology",
    year: "2024",
    summary: "Global brand introduction film for an AI-powered flood and environmental water monitoring hardware & software company.",
    challenge: "Complex telemetry hardware and AI water-level sensors lacked an emotional, urgent visual narrative to communicate life-saving value to municipal buyers and climate funds.",
    strategy: "Frame AI flood monitoring not as dry telemetry, but as an indispensable frontline defense protecting vulnerable communities from catastrophic natural disaster.",
    execution: "Produced high-definition field cinematography of sensor deployments, combined with 2D technical motion graphics demonstrating real-time alert systems.",
    impact: "Positioned ToltHawk for enterprise municipal pilots and accelerated climate tech investor demonstrations across international markets.",
    services: ["Brand Film", "Proof Pack", "Motion Graphics"],
    deliverables: [
      "Global Brand Introduction Film",
      "Technical Sensor Explainer Module",
      "Investor Pitch Media Package",
      "Executive Presentation Slides"
    ],
    slug: "tolthawk",
    featured: true,
    accentColor: "#10172A"
  },
  {
    id: "kp-livestock",
    title: "Ehsaas Beizuba Mobile Veterinary Service",
    client: "Khyber Pakhtunkhwa Livestock Department",
    industry: "Government · Public Service",
    year: "2023",
    summary: "Documentary and public impact film for the pioneering Ehsaas Beizuba mobile veterinary clinic initiative serving rural livestock owners.",
    challenge: "Communicating the tangible social and economic impact of mobile rural veterinary clinics to government stakeholders and citizen beneficiaries across remote regions.",
    strategy: "Document authentic on-location veterinary interventions in remote valleys, capturing raw testimonials from rural livestock owners whose livelihoods were saved.",
    execution: "Deployed field documentary camera crews across rugged terrain, filming mobile surgical clinics, emergency animal treatment, and community outreach.",
    impact: "Showcased across provincial government assemblies and official media channels, securing expanded budgetary allocations for rural veterinary infrastructure.",
    services: ["Brand Film", "Documentary Production", "Public Service Content"],
    deliverables: [
      "Documentary Showcase Film",
      "Provincial Assembly Presentation Reel",
      "Bilingual Community Awareness Clips",
      "Field Photography Archive"
    ],
    slug: "kp-livestock",
    featured: true,
    accentColor: "#10172A"
  },
  {
    id: "swat-floods",
    title: "2020 Swat Floods Field Coverage",
    client: "Documentary & Relief Organizations",
    industry: "Documentary · Field Production",
    year: "2020",
    summary: "On-the-ground documentary filming and crisis footage documenting the devastating 2020 monsoon floods in the Swat valley.",
    challenge: "Operating under extreme crisis conditions with severed transport routes to capture immediate, authentic footage of flood destruction and humanitarian relief efforts.",
    strategy: "Focus the lens on resilience, emergency rescue operations, and ground-level relief needs to provide unvarnished visual evidence for global humanitarian appeals.",
    execution: "Rapid mobile deployment of high-res cinema cameras across inundated terrain, producing urgent field reports and documentary footage.",
    impact: "Footage broadcast across international news organizations and used by humanitarian relief foundations to mobilize emergency relief aid.",
    services: ["Field Production", "Documentary Cinematography", "Crisis Reporting"],
    deliverables: [
      "Emergency Relief Appeal Video Package",
      "Unvarnished Ground Documentary Footage",
      "International Broadcast B-Roll Packages",
      "High-Resolution Field Photo Documentation"
    ],
    slug: "swat-floods",
    featured: true,
    accentColor: "#10172A"
  }
];

export const clientRoster = [
  "Prime Video",
  "ToltHawk",
  "KP Livestock Department",
  "HUB47",
  "RaideIT",
  "KAIT Consulting",
  "KPEF",
  "ESEF",
  "Hashoo Foundation"
];

// Mapping services to detailed legacy capability for backward compatibility
export const servicesData: ServiceItem[] = [
  {
    id: "x-ray-audit",
    number: "01",
    title: "X-Ray Audit",
    category: "Assessment & Strategy",
    tagline: "Uncover where your business is being undersold.",
    description: "A complimentary diagnostic assessment analyzing your existing proof, message defensibility, and competitive presentation across six credibility areas.",
    problemSolved: "Hidden credentials, generic buzzwords, and presentation gaps that cause capable businesses to lose deals to weaker competitors.",
    deliverables: [
      "Credibility Gap Report",
      "Assessment across six credibility areas",
      "Two to three immediate recommendations",
      "Actionable positioning claim definition"
    ],
    workflow: [
      "15-Minute Intake Consultation",
      "Multi-Channel Evidence Audit",
      "Competitor Presentation Benchmarking",
      "Report & Recommendation Handover"
    ],
    relatedCapabilities: ["Brand Film", "Proof Pack", "Growth Retainer"],
    featured: true
  },
  {
    id: "brand-film",
    number: "02",
    title: "Brand Film",
    category: "Cinematic Production",
    tagline: "Cinematic evidence that proves your commercial strength.",
    description: "High-production brand films scripted, filmed, and directed to prove one central positioning claim to enterprise buyers, partners, and investors.",
    problemSolved: "Boring corporate videos that communicate generic platitudes rather than genuine commercial proof and technical capability.",
    deliverables: [
      "Strategic Positioning Claim & Creative Brief",
      "Original Scriptwriting & Storyboarding",
      "4K On-Location Filming & Direction",
      "Primary Master Film & Multi-Channel Social Edits"
    ],
    workflow: [
      "Positioning Claim Formulation",
      "Pre-Production & Logistics Planning",
      "Principal Photography & On-Location Shoot",
      "Editorial, Color Grading & Multi-Channel Delivery"
    ],
    relatedCapabilities: ["Proof Pack", "Growth Retainer", "Motion Graphics"],
    featured: true
  },
  {
    id: "proof-pack",
    number: "03",
    title: "Proof Pack",
    category: "Sales Enablement",
    tagline: "Modular proof assets that close enterprise deals.",
    description: "Targeted evidence assets including client testimonial videos, founder authority films, and editorial case studies designed to accelerate sales pipelines.",
    problemSolved: "Sales teams entering high-stakes meetings without persuasive, third-party verified proof of past client results.",
    deliverables: [
      "Client Video Testimonial Modules",
      "Founder & Subject-Matter Authority Film",
      "Interactive Web Case Study Architecture",
      "Executive PDF Sales Decks"
    ],
    workflow: [
      "Proof Inventory & Client Outreach Plan",
      "Interviews & Testimonial Filming",
      "Case Study Design & Web Integration",
      "Sales Collateral Deployment"
    ],
    relatedCapabilities: ["Brand Film", "X-Ray Audit", "Growth Retainer"],
    featured: true
  },
  {
    id: "growth-retainer",
    number: "04",
    title: "Growth Retainer",
    category: "Ongoing Partnership",
    tagline: "Continuous proof production and quarterly reassessment.",
    description: "A predictable monthly creative technology partnership producing ongoing films, managing targeted distribution, and conducting quarterly credibility audits.",
    problemSolved: "Stale marketing assets, lack of consistent content velocity, and inability to measure long-term market perception changes.",
    deliverables: [
      "Monthly Brand Film & Video Production",
      "Strategic Campaign Management & Placement",
      "Quarterly Credibility Reassessment Report",
      "Dedicated Senior Creative Direction"
    ],
    workflow: [
      "Quarterly Strategic Sprint Planning",
      "Monthly Production & Editorial Cycles",
      "Cross-Channel Distribution & Analytics",
      "Quarterly Re-Audit & Optimization"
    ],
    relatedCapabilities: ["Brand Film", "Proof Pack", "X-Ray Audit"],
    featured: true
  },
  {
    id: "filming-production",
    number: "05",
    title: "Filming & Production",
    category: "Cinematic Media",
    tagline: "High-caliber commercial and documentary film production.",
    description: "On-location 4K cinematography, director-led interview storytelling, and streaming-grade post-production that positions your business at the highest standard of international craft.",
    problemSolved: "Corporate video that looks cheap, uninspired, or amateurish, diminishing company stature before prospective buyers and institutional investors.",
    deliverables: [
      "4K Cinematic Location Filming",
      "Sound Design & Audio Mastering",
      "Professional Davinci Color Grading",
      "Multi-Format Social & Web Cutdowns"
    ],
    workflow: [
      "Creative Brief & Shot List",
      "Principal Production Days",
      "Director's Cut Review",
      "Final Master Export & Delivery"
    ],
    relatedCapabilities: ["Brand Film", "Proof Pack", "Growth Retainer"]
  },
  {
    id: "branding",
    number: "06",
    title: "Brand Strategy & Identity",
    category: "Brand Systems",
    tagline: "Typographic discipline, restraint, and distinctive visual architecture.",
    description: "Complete identity systems inspired by architectural rigor and editorial clarity. Built around your single defensible commercial claim, not transient aesthetic trends.",
    problemSolved: "Disjointed logos, inconsistent typography, and generic template aesthetics that dilute institutional credibility.",
    deliverables: [
      "Brand Positioning & Messaging Guide",
      "Official Logo & Identity System",
      "Typography & Color Hierarchy",
      "Design System Tokens & Brand Book"
    ],
    workflow: [
      "Positioning Claim Formulation",
      "Identity Concepts & Exploration",
      "Design System Refinement",
      "Production Asset Deployment"
    ],
    relatedCapabilities: ["Brand Film", "Proof Pack", "Digital Solutions"]
  },
  {
    id: "digital-marketing",
    number: "07",
    title: "Performance & Distribution",
    category: "Growth Systems",
    tagline: "Targeted evidence distribution across decision-maker channels.",
    description: "Precision distribution of your brand films and proof assets to enterprise buyers, procurement executives, and institutional funds across search and executive social networks.",
    problemSolved: "Great case studies and video assets sitting unseen on neglected channels without targeted reach to actual buyers.",
    deliverables: [
      "Decision-Maker Audience Targeting",
      "LinkedIn & Video Ad Campaign Management",
      "Executive Content Distribution",
      "Conversion Tracking & Pipeline Analytics"
    ],
    workflow: [
      "Audience Persona Segmentation",
      "Campaign Setup & Asset Placement",
      "Weekly Performance Optimization",
      "Quarterly Impact Reporting"
    ],
    relatedCapabilities: ["Proof Pack", "Growth Retainer", "Brand Film"]
  },
  {
    id: "digital-solutions",
    number: "08",
    title: "Digital Engineering & Web",
    category: "Software Platforms",
    tagline: "High-performance web architecture engineered for conversion.",
    description: "Bespoke digital platforms built with Next.js, TypeScript, and modern headless architecture. Clean editorial layout, sub-second load times, and WCAG accessibility standards.",
    problemSolved: "Bloated, slow WordPress templates and generic builder websites that fail to convert enterprise visitors.",
    deliverables: [
      "Custom Next.js & React Web Architecture",
      "Responsive Multi-Device Layouts",
      "Performance & SEO Optimization",
      "Enterprise CMS Integration"
    ],
    workflow: [
      "Information Architecture & Wireframes",
      "Editorial Design & Prototyping",
      "Full-Stack TypeScript Implementation",
      "Deployment & Ongoing Support"
    ],
    relatedCapabilities: ["Brand Strategy & Identity", "Proof Pack", "Growth Retainer"]
  },
  {
    id: "social-media-management",
    number: "09",
    title: "Executive Social & Proof Channels",
    category: "Channel Management",
    tagline: "Thought leadership and strategic proof publishing.",
    description: "Curated social presence for leadership and corporate channels focused strictly on publishing verified client milestones, technical insights, and company achievements.",
    problemSolved: "Low-effort social posting schedules that damage corporate perception with irrelevant graphics and vanity engagement.",
    deliverables: [
      "Monthly Editorial Publishing Calendar",
      "Founder & Executive Thought Leadership Copy",
      "Custom Graphic & Video Asset Production",
      "Quarterly Audience Growth Reports"
    ],
    workflow: [
      "Monthly Content Alignment",
      "Asset Design & Scripting",
      "Publishing & Channel Oversight",
      "Monthly Review & Strategy Tuning"
    ],
    relatedCapabilities: ["Growth Retainer", "Proof Pack", "Brand Film"]
  },
  {
    id: "graphic-design",
    number: "10",
    title: "Presentation & Pitch Decks",
    category: "Collateral Design",
    tagline: "High-stakes presentation design for sales and fundraising.",
    description: "Executive pitch decks, one-sheets, and proposal documents that present complex commercial propositions with persuasive typographic elegance and visual authority.",
    problemSolved: "Cluttered, text-heavy slide decks that lose executive attention during multi-million-dollar pitches.",
    deliverables: [
      "Investor Pitch Decks (Keynote / PPT / PDF)",
      "Executive One-Sheets & Capability Briefs",
      "Data Visualization & Custom Diagrams",
      "Interactive Proposal Templates"
    ],
    workflow: [
      "Narrative Arc & Slide Structure",
      "Typographic Layout & Visuals",
      "Executive Review & Polish",
      "Editable Source File Delivery"
    ],
    relatedCapabilities: ["Brand Strategy & Identity", "Proof Pack", "X-Ray Audit"]
  },
  {
    id: "2d-animation",
    number: "11",
    title: "2D Motion Graphics",
    category: "Motion Design",
    tagline: "Technical motion graphics that explain proprietary workflows.",
    description: "Fluid 2D animation and architectural diagrams that make abstract technical concepts, hardware sensor data, and software workflows instantly understandable.",
    problemSolved: "Complex technologies that cannot be easily captured with live cameras alone and need clear visual explanation.",
    deliverables: [
      "Animated Explainer Modules (60-90s)",
      "Micro-Interactions & UI Motion Assets",
      "Technical Diagram Visualizations",
      "Multi-Format Social Cutdowns"
    ],
    workflow: [
      "Script & Storyboard Development",
      "Style Frames & Asset Design",
      "Motion Animation & Sound FX",
      "4K Master Render & Delivery"
    ],
    relatedCapabilities: ["Brand Film", "Digital Solutions", "Proof Pack"]
  }
];

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Consultation",
    tagline: "A 15-minute call to understand your business, buyers and goals. No cost.",
    description: "We listen closely to understand where your business is today, where your proof is hiding, and where less capable competitors are beating you.",
    clientInput: "Business objectives, target decision-makers, and key client credentials.",
    kreaitxOutput: "Initial commercial diagnosis and consultation summary.",
    milestones: ["Initial Discovery Call", "Proof Inventory Review", "Competitor Baseline"]
  },
  {
    number: "02",
    title: "Audit and Proposal",
    tagline: "Your X-Ray Audit, a single claim to own, and a fixed-price proposal.",
    description: "We evaluate your business across our proprietary six assessment areas, uncover your credibility gap, and define one claim to own with a guaranteed fixed-price USD proposal.",
    clientInput: "Access to marketing collateral, pitch decks, and previous work examples.",
    kreaitxOutput: "Credibility Gap Report, single positioning claim, and fixed-price contract.",
    milestones: ["6-Area X-Ray Audit", "Credibility Gap Report", "Single Claim Formulation", "Fixed USD Proposal"]
  },
  {
    number: "03",
    title: "Production and Delivery",
    tagline: "Films, design and campaigns built to prove that claim, with structured review rounds.",
    description: "Nothing is filmed or designed until we know exactly what it needs to prove. We produce brand films, evidence packs, and web systems backed by structured review rounds.",
    clientInput: "On-location filming access, executive participation, and milestone review feedback.",
    kreaitxOutput: "Master brand films, social cutdowns, proof packs, and live web systems.",
    milestones: ["Script & Storyboarding", "Principal Filming", "Review Rounds", "Final Delivery"]
  }
];

export const differentiators = whyKreaitXDifferentiators;

export const trustPrinciples = [
  {
    title: "Zero Artificial Fluff",
    description: "We don't invent fake client logos, fabricated awards, or inflated statistics. Real trust is built on authentic work and transparent communication."
  },
  {
    title: "Clear Milestone Predictability",
    description: "Every phase has explicit deliverables, client review check-ins, and guaranteed fixed pricing in USD so your team stays aligned."
  },
  {
    title: "Proof First, Production Second",
    description: "We identify your verified commercial evidence before filming or designing a single asset. Work is measured by buyer conviction, not vanity metrics."
  },
  {
    title: "Direct Access to Practitioners",
    description: "You collaborate directly with senior directors, cinematographers, and brand strategists. Zero account management layers or translation loss."
  }
];

export const insightsArticles: InsightArticle[] = [
  {
    id: "closing-the-credibility-gap",
    slug: "closing-the-credibility-gap-proof-first-production-second",
    title: "Closing the Credibility Gap: Why More Content Won't Help You Win",
    category: "Creative Strategy",
    readTime: "5 min read",
    publishDate: "January 2026",
    excerpt: "Most capable companies have a credibility gap. Their best results are buried in PDF proposals while louder competitors win deals. Here is why better evidence beats more content every time.",
    summary: "An exploration of how proof-driven positioning and cinematic brand films transform capable companies into market authorities.",
    keyTakeaways: [
      "More content will not close your credibility gap; better evidence will.",
      "Auditing past projects and team achievements reveals proof that is currently invisible to buyers.",
      "Owning a single defensible claim eliminates interchangeable marketing clichés and commands institutional trust."
    ],
    content: [
      "In the B2B marketplace, capable companies often face an invisible penalty: they do extraordinary work, but their external presentation looks identical to their competitors.",
      "Their best customer outcomes are buried in confidential slide decks. Their technical innovations are described in dense, impenetrable bullet points. And their client praise is trapped in private emails.",
      "Meanwhile, louder rivals with lesser capabilities win high-stakes RFPs and venture funding simply because their presentation is more convincing.",
      "At KreaitX, we solve this with a fundamental operating principle: Proof first. Production second. We start by auditing the evidence that already exists, formulate one defensible claim, and produce the films and design that prove it beyond doubt."
    ]
  },
  {
    id: "connected-creative-tech",
    slug: "why-connected-creative-tech-beats-isolated-agencies",
    title: "Why Connected Creative Technology Beats Isolated Agencies",
    category: "Creative Strategy",
    readTime: "5 min read",
    publishDate: "January 2026",
    excerpt: "When brand designers, cinematographers, and software engineers work in silos, the original idea loses fidelity. Here is why the connected model creates compounding business value.",
    summary: "An exploration of how cross-disciplinary collaboration eliminates the costly handoff gap between strategic conception and digital execution.",
    keyTakeaways: [
      "Handoffs between separate agencies introduce cognitive and stylistic degradation.",
      "Cinematographers and strategists working together build brand films that convert.",
      "Direct practitioner collaboration protects your strategic vision from translation loss."
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
    publishDate: "February 2026",
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
    publishDate: "March 2026",
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

