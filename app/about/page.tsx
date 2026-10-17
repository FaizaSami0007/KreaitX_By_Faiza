import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Users, Layers, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About KreaitX — Creative Technology Studio",
  description: "Learn how KreaitX unites brand strategy, cinematic production, and software engineering under one roof in Peshawar, Pakistan.",
  alternates: {
    canonical: `${siteConfig.url}/about`
  },
  openGraph: {
    title: "About KreaitX — Creative Technology Studio",
    description: "Learn how KreaitX unites brand strategy, cinematic production, and software engineering under one roof in Peshawar, Pakistan.",
    url: `${siteConfig.url}/about`,
    type: "website",
    siteName: siteConfig.name
  }
};

const values = [
  {
    title: "Connected Over Isolated",
    description: "We reject the idea that branding, filming, and coding belong in disconnected silos. The strongest digital experiences are conceived, directed, and engineered together."
  },
  {
    title: "Human Craft in the Age of Noise",
    description: "While others rely on automated templates and superficial shortcuts, we prioritize typographic hierarchy, deep user empathy, and thoughtful architectural restraint."
  },
  {
    title: "Business Impact Over Vanity Metrics",
    description: "A visually stunning website or video that doesn't convert users or clarify value is not a victory. Everything we build is judged by its contribution to client growth."
  },
  {
    title: "Peshawar Craftsmanship, Global Caliber",
    description: "We are proud to build and scale from Peshawar, Khyber Pakhtunkhwa — proving that world-class creative technology and disciplined execution flourish anywhere talent and dedication meet."
  }
];

const collaborationPillars = [
  {
    icon: Users,
    title: "Direct Senior Practitioners",
    description: "You collaborate directly with senior designers, directors, and developers. Zero account layers, zero translation loss."
  },
  {
    icon: Cpu,
    title: "Disciplined Sprint Cadence",
    description: "Milestones are divided into predictable two-week sprints with transparent deliverables and scheduled review sessions."
  },
  {
    icon: Layers,
    title: "Production-Grade Engineering",
    description: "Every asset and code module is engineered for longevity, high performance, and compliance with modern WCAG standards."
  },
  {
    icon: ShieldCheck,
    title: "Complete Intellectual Property",
    description: "Upon project completion, 100% of source files, design tokens, video masters, and code belong entirely to your company."
  }
];

export const dynamic = "force-static";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KreaitX",
    description: siteConfig.description,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressCountry: siteConfig.location.country
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        contactType: "customer service"
      }
    }
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* About Page Hero — Prussian Navy Brand Theme */}
      <section className="relative bg-[#003049] text-white py-20 lg:py-28 border-b border-[#14213D] overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#42C6D9]/15 via-[#14213D]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#42C6D9]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#14213D]/60 rounded-full blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#42C6D9] px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-subtle mb-6 hover:border-[#42C6D9]/50 transition-colors">
                <Sparkles className="h-3.5 w-3.5 text-[#42C6D9] animate-pulse" />
                <span>Studio Story &amp; Philosophy</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05]">
                Where creative vision meets{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                  technical reality
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-normal max-w-2xl">
                KreaitX was founded with a singular conviction: businesses deserve a unified partner capable of shaping their brand narrative, filming their visual story, and engineering their digital infrastructure under one roof.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-lg">
                  Start a Project
                </Button>
                <a
                  href="#studio-story"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Discover Our Story ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Story & Origin */}
      <section id="studio-story" className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#003049] mb-3 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#42C6D9]" />
                01 — THE ORIGIN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Creative + IT: <br />
                <span className="bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                  The genesis of KreaitX.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-3xl bg-[#F7F8FA] border border-slate-200/80 space-y-3 shadow-card">
                <div className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#003049]" />
                  Headquarters &amp; Origins
                </div>
                <div className="text-xl font-display font-bold text-slate-900">
                  {siteConfig.location.formatted}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Collaborating with forward-thinking local enterprises and international clients seeking unified creative and digital solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              <p>
                The name <strong className="text-slate-900 font-bold">KreaitX</strong> is a deliberate fusion of <strong className="text-[#003049] font-bold">Creative</strong> and <strong className="text-[#14213D] font-bold">IT</strong>. For years, businesses have been forced to choose between creative agencies that lack engineering depth and technical software houses that treat design and marketing as an afterthought.
              </p>
              <p>
                When brand designers, cinematographers, and developers work in separate silos, the customer experience fragments. Strategy gets diluted, timelines drag out, and the end product feels disconnected from the business objective.
              </p>
              <p>
                KreaitX bridges this divide. We assemble multidisciplinary teams under one roof in Peshawar to deliver seamless brand identity, cinematic video production, performance marketing, and bespoke web platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Studio Values */}
      <section className="bg-[#0B0F19] py-20 sm:py-28 border-b border-slate-800 text-white">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                theme="dark"
                eyebrow="Our Philosophy"
                title={
                  <>
                    Values that govern{" "}
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                      how we work
                    </span>.
                  </>
                }
                description="We guide every client engagement with disciplined principles designed to prioritize authenticity, craft, and tangible commercial success."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group rounded-3xl bg-[#14213D] p-8 sm:p-10 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#42C6D9] px-3.5 py-1 rounded-full bg-white/10 border border-white/15 inline-block mb-4">
                      Principle 0{i + 1}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-3 group-hover:text-[#42C6D9] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed font-sans font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Working Methodology & Client Collaboration */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#003049] mb-3 block flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#42C6D9]" />
              Client Collaboration
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              How We Collaborate
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              A partnership model built on clarity, accountability, and direct access to practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl bg-[#F7F8FA] border border-slate-200/80 p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-[#42C6D9]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#003049]/5 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-[#003049]" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Link to Process page */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#003049] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#42C6D9] font-bold block mb-1">
                6-Stage Precision
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Interested in our step-by-step sprint delivery?
              </h3>
              <p className="text-sm text-slate-300 font-sans mt-1">
                Explore our full Discover, Strategy, Create, Build, Launch, and Grow phases.
              </p>
            </div>
            <Link
              href="/process"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-sans font-semibold text-[#003049] bg-[#42C6D9] hover:bg-[#34B8CB] shrink-0 transition-all duration-200 shadow-sm"
            >
              <span>Explore Process</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}
