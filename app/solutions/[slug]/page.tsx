import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData, projectCaseStudies, siteConfig } from "@/data/siteData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 7 verified service routes
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id
  }));
}

// Generate tailored SEO metadata for each service
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found — KreaitX",
      description: "The requested KreaitX service page does not exist."
    };
  }

  const title = `${service.title} Services — KreaitX Creative Technology`;
  const description = `${service.description} Explore deliverables, workflows, and business outcomes engineered by KreaitX.`;
  const url = `${siteConfig.url}/solutions/${service.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Cross-reference relevant case studies that utilized this service
  const relevantCaseStudies = projectCaseStudies.filter(
    (p) =>
      p.services.some(
        (s) =>
          s.toLowerCase().includes(service.title.toLowerCase()) ||
          service.title.toLowerCase().includes(s.toLowerCase())
      )
  );

  // General service FAQs
  const serviceFaqs = [
    {
      q: `What is the typical engagement timeline for ${service.title}?`,
      a: `Timelines depend on project complexity. Focused sprints typically deliver initial architecture and prototypes within 2 to 4 weeks, while comprehensive enterprise implementations range from 6 to 12 weeks with structured milestone check-ins.`
    },
    {
      q: "Who executes the work at KreaitX?",
      a: "All initiatives are executed directly by senior creative technologists, designers, and engineers. We do not use account layers or hand off work to junior subcontractors, ensuring aesthetic fidelity and technical integrity."
    },
    {
      q: "Who retains intellectual property rights to the final deliverables?",
      a: "Upon final project sign-off and account settlement, 100% of the intellectual property, source files, design systems, codebase, and production assets belong entirely to your business."
    },
    {
      q: `How does ${service.title} integrate with other KreaitX capabilities?`,
      a: `Every capability is designed to plug seamlessly into our broader ecosystem. For example, brand assets feed directly into digital platforms, and production footage is engineered into performance marketing funnels without agency handoff friction.`
    }
  ];

  const getCapabilitySlug = (name: string): string => {
    const match = servicesData.find(
      (s) =>
        s.title.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(s.title.toLowerCase())
    );
    return match ? match.id : "branding";
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    areaServed: "Worldwide",
    serviceType: service.category,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Deliverables`,
      itemListElement: service.deliverables.map((item, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item
        },
        position: i + 1
      }))
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solutions",
        item: `${siteConfig.url}/solutions`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/solutions/${service.id}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#F7F5F0] border-b border-[#E5E1DA] py-3.5 text-xs font-sans text-[#6B6560]">
        <Container size="default">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#FF5A1F] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#6B6560]/60" />
            <Link href="/solutions" className="hover:text-[#FF5A1F] transition-colors">
              Solutions
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#6B6560]/60" />
            <span className="text-[#34312F] font-semibold">{service.title}</span>
          </nav>
        </Container>
      </div>

      {/* Service Hero Section */}
      <section className="relative overflow-hidden bg-[#34312F] text-white py-16 sm:py-24 lg:py-28 border-b border-white/10">
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Reveal yOffset={12}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10">
                <span className="font-mono text-xs font-bold text-[#FF5A1F]">
                  {service.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-white/80">
                  {service.category}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={16}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]">
                {service.title}{" "}
                <span className="block mt-2 font-display font-bold text-3xl sm:text-5xl lg:text-[54px] text-[#FF5A1F]">
                  {service.tagline}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14} yOffset={14}>
              <p className="text-lg sm:text-xl text-[#E5E1DA] leading-relaxed font-sans font-normal max-w-2xl mx-auto">
                {service.description}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2} yOffset={14}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href={`/contact?service=${service.id}`}
                  variant="cyan"
                  size="md"
                  withArrow
                  className="w-full sm:w-auto min-h-[48px] font-bold"
                >
                  Inquire for {service.title}
                </Button>
                <a
                  href="#deliverables"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-200 w-full sm:w-auto"
                >
                  View Deliverables ↓
                </a>
              </div>
            </Reveal>

            {/* Quick Metrics / Assurance Badges */}
            <Reveal delay={0.25} yOffset={12}>
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                <div className="p-4 rounded-xl bg-[#2D2A28] border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Layers className="h-5 w-5 text-[#FF5A1F]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FF5A1F] uppercase tracking-wider font-bold block">
                      Deliverables
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {service.deliverables.length} Core Systems
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#2D2A28] border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Cpu className="h-5 w-5 text-[#FF5A1F]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FF5A1F] uppercase tracking-wider font-bold block">
                      Workflow
                    </span>
                    <span className="text-sm font-semibold text-white">
                      4-Stage Precision
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#2D2A28] border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-[#FF5A1F]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#FF5A1F] uppercase tracking-wider font-bold block">
                      Assurance
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Direct Senior Leads
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The Core Problem We Solve */}
      <section className="bg-[#F7F5F0] py-16 sm:py-20 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl bg-white border border-[#E5E1DA] shadow-xs p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]" />
                <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F]">
                  Strategic Purpose &amp; Diagnosis
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#34312F] tracking-tight leading-snug mb-6">
                The Core Problem We Solve
              </h2>
              <p className="text-lg sm:text-xl text-[#6B6560] font-sans leading-relaxed">
                {service.problemSolved}
              </p>
              <div className="mt-8 pt-8 border-t border-[#E5E1DA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-[#6B6560]">
                <span>Part of KreaitX&apos;s Connected Solutions Architecture</span>
                <Link
                  href="/solutions"
                  className="font-semibold text-[#34312F] hover:text-[#FF5A1F] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>View All 7 Capabilities</span>
                  <ArrowRight className="h-4 w-4 text-[#FF5A1F]" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Deliverables & Systems Grid */}
      <section id="deliverables" className="scroll-mt-24 bg-white py-20 sm:py-28 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F] block mb-3">
              Production Scope
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#34312F] tracking-tight leading-tight">
              What KreaitX Delivers
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed font-sans">
              Every system we engineer is documented, production-ready, and optimized for sustainable in-house longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={item}
                className="rounded-xl bg-[#F7F5F0] border border-[#E5E1DA] p-6 sm:p-7 shadow-2xs hover:border-[#FF5A1F] transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#FF5A1F]">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-[#FF5A1F]" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#34312F] mb-2">
                    {item}
                  </h3>
                  <p className="text-sm text-[#6B6560] font-sans leading-relaxed">
                    Engineered to the highest industry benchmarks, ensuring complete brand coherence and operational utility across channels.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E1DA] flex items-center justify-between text-xs text-[#6B6560]">
                  <span>Production-Grade</span>
                  <span className="text-[#FF5A1F] font-semibold">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Stage Workflow Progression */}
      <section id="process" className="bg-[#34312F] text-white py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
        <Container size="default" className="relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F] block mb-3">
              Proven Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              How We Execute {service.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#E5E1DA] leading-relaxed font-sans">
              A transparent, sprint-driven workflow designed to eliminate surprise handoffs and preserve creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, idx) => (
              <div
                key={step}
                className="relative rounded-xl bg-white/5 border border-white/10 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#FF5A1F]">
                      0{idx + 1}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/50">
                      Phase 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {step}
                  </h3>
                  <p className="text-sm text-[#E5E1DA] font-sans leading-relaxed">
                    Collaborative reviews, transparent milestone sign-offs, and iterative refinement with your core leadership team.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                  <span className="text-xs text-white/60 font-sans">
                    Milestone Documented
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Relevant Case Studies Cross-Reference (If available) */}
      {relevantCaseStudies.length > 0 && (
        <section className="bg-white py-20 sm:py-28 border-b border-[#E5E1DA]">
          <Container size="default">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F] block mb-3">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#34312F] tracking-tight leading-tight">
                Case Studies Featuring {service.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6B6560] leading-relaxed font-sans">
                Real business outcomes achieved by integrating {service.title} into client operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantCaseStudies.map((project) => (
                <article
                  key={project.id}
                  className="rounded-xl bg-white border border-[#E5E1DA] shadow-xs hover:border-[#FF5A1F] transition-all duration-150 flex flex-col justify-between overflow-hidden"
                >
                  <div className="bg-[#34312F] text-white p-6 sm:p-7">
                    <div className="flex items-center justify-between text-xs mb-3 text-white/60">
                      <span className="text-[#FF5A1F] uppercase font-bold tracking-wider">
                        {project.industry}
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/60 font-sans">
                      Client: {project.client}
                    </p>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                    <p className="text-sm text-[#6B6560] font-sans leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E1DA]">
                      <span className="text-xs uppercase tracking-wider text-[#FF5A1F] font-bold block mb-1">
                        Measured Impact
                      </span>
                      <p className="text-sm font-display font-bold text-[#34312F]">
                        {project.impact}
                      </p>
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-sans font-semibold text-white bg-[#34312F] hover:bg-[#FF5A1F] transition-colors"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#FF5A1F] group-hover:text-white" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Connected Capabilities Cross-Linking */}
      <section className="bg-[#F7F5F0] py-16 sm:py-20 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F] block">
              Connected Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#34312F] tracking-tight">
              Pair {service.title} with Connected Capabilities
            </h2>
            <p className="text-base text-[#6B6560] font-sans max-w-xl mx-auto">
              Our studio model eliminates handoff friction. Combine {service.title} with related disciplines for compounding results:
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {service.relatedCapabilities.map((rel) => {
                const targetSlug = getCapabilitySlug(rel);
                return (
                  <Link
                    key={rel}
                    href={`/solutions/${targetSlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-sans font-semibold text-[#34312F] bg-white hover:bg-[#34312F] hover:text-[#FF5A1F] border border-[#E5E1DA] shadow-2xs transition-colors duration-150"
                  >
                    <span>+ Explore {rel}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Service FAQs */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#FF5A1F] block mb-3">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#34312F] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {serviceFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#F7F5F0] border border-[#E5E1DA] p-6 sm:p-8"
                >
                  <h3 className="text-lg font-display font-bold text-[#34312F] mb-2 flex items-start gap-2.5">
                    <HelpCircle className="h-5 w-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#6B6560] font-sans leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection bg="light" />
    </>
  );
}
