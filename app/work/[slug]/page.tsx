import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Building,
  Tag,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { projectCaseStudies, siteConfig } from "@/data/siteData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Pre-render all 3 verified case study routes
export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({
    slug: project.slug
  }));
}

// Generate tailored SEO metadata for each case study
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCaseStudies.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found — KreaitX",
      description: "The requested KreaitX portfolio case study does not exist."
    };
  }

  const title = `${project.title} — Case Study | KreaitX Creative Technology`;
  const description = `${project.summary} Discover the challenge, strategy, execution, and measured impact delivered by KreaitX.`;
  const url = `${siteConfig.url}/work/${project.slug}`;

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
      type: "article",
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectCaseStudies.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectCaseStudies[projectIndex];

  // Pagination: Previous and Next project
  const prevProject =
    projectIndex > 0
      ? projectCaseStudies[projectIndex - 1]
      : projectCaseStudies[projectCaseStudies.length - 1];
  const nextProject =
    projectIndex < projectCaseStudies.length - 1
      ? projectCaseStudies[projectIndex + 1]
      : projectCaseStudies[0];

  // Map service name to solution slug
  const serviceSlugMap: Record<string, string> = {
    Branding: "branding",
    "Digital Solutions": "digital-solutions",
    "Filming & Production": "filming-production",
    "UI/UX Design": "digital-solutions",
    "Graphic Design": "graphic-design",
    "Social Media": "social-media-management",
    "2D Animation": "2d-animation",
    "Digital Marketing": "digital-marketing"
  };

  // Structured Data Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.summary,
    creator: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    datePublished: `${project.year}-01-01`,
    about: {
      "@type": "Thing",
      name: project.industry
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
        name: "Work",
        item: `${siteConfig.url}/work`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteConfig.url}/work/${project.slug}`
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
      <div className="bg-[#FCEDE6] border-b border-[#E8DFD8] py-3.5 text-xs font-sans text-[#666666]">
        <Container size="default">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#EC5D17] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#666666]/60" />
            <Link href="/work" className="hover:text-[#EC5D17] transition-colors">
              Work
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#666666]/60" />
            <span className="text-[#111111] font-semibold">{project.title}</span>
          </nav>
        </Container>
      </div>

      {/* Case Study Header Hero — Pure White #FFFFFF Canvas */}
      <section className="relative overflow-hidden bg-white text-[#111111] py-16 sm:py-24 border-b border-[#E8DFD8]">
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Reveal yOffset={12}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-md bg-[#FCEDE6] border border-[#E8DFD8] text-[#EC5D17] text-xs font-mono font-semibold">
                  Case Study 0{projectIndex + 1}
                </span>
                <span className="px-3.5 py-1.5 rounded-md bg-white border border-[#E8DFD8] text-xs font-sans font-bold uppercase tracking-wider text-[#111111]">
                  {project.industry}
                </span>
                <span className="text-xs font-sans text-[#666666] font-medium flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#EC5D17]" />
                  {project.year}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={16}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[62px] font-bold text-[#111111] tracking-tight leading-[1.08]">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={0.14} yOffset={14}>
              <p className="text-xl sm:text-2xl text-[#666666] leading-relaxed font-sans font-normal">
                {project.summary}
              </p>
            </Reveal>

            {/* Client & Metadata Bar */}
            <Reveal delay={0.2} yOffset={12}>
              <div className="pt-6 border-t border-[#E8DFD8] grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#666666] font-bold block mb-1">
                    Client Partner
                  </span>
                  <span className="text-base font-display font-bold text-[#111111] flex items-center gap-2">
                    <Building className="h-4 w-4 text-[#EC5D17]" />
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#666666] font-bold block mb-1">
                    Industry Domain
                  </span>
                  <span className="text-base font-sans font-semibold text-[#111111] flex items-center gap-2">
                    <Tag className="h-4 w-4 text-[#EC5D17]" />
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#666666] font-bold block mb-1">
                    Engagement Year
                  </span>
                  <span className="text-base font-sans font-semibold text-[#111111] flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#EC5D17]" />
                    {project.year}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Measured Business Impact Showcase */}
      <section className="bg-[#333333] text-white py-14 sm:py-16 border-b border-white/10 relative overflow-hidden">
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl bg-white/5 border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EC5D17] font-bold">
                  <TrendingUp className="h-4 w-4 text-[#EC5D17]" />
                  <span>Verified Commercial Transformation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  Measured Business Impact
                </h2>
                <p className="text-xl sm:text-2xl font-sans font-normal text-[#E8DFD8] leading-relaxed">
                  {project.impact}
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={`/contact?project=${project.slug}`}
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full sm:w-auto font-bold"
                >
                  Start Similar Project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge vs Strategy Dual Deep Dive */}
      <section className="bg-[#FCEDE6] py-20 sm:py-28 border-b border-[#E8DFD8]">
        <Container size="default">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#EC5D17] block mb-2">
                Problem &amp; Strategic Hypothesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111111] tracking-tight">
                Challenge vs. Strategic Direction
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenge Card */}
              <div className="rounded-xl bg-white border border-[#E8DFD8] shadow-xs p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                    <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#666666]">
                      The Initial Bottleneck
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-4">
                    The Challenge
                  </h3>
                  <p className="text-base text-[#666666] font-sans leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E8DFD8] text-xs text-[#666666]/70 font-sans">
                  Identified during initial discovery sprint
                </div>
              </div>

              {/* Strategy Card */}
              <div className="rounded-xl bg-white border border-[#EC5D17]/30 shadow-xs p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EC5D17]" />
                    <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#EC5D17]">
                      KreaitX Architectural Blueprint
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-4">
                    The Strategy
                  </h3>
                  <p className="text-base text-[#666666] font-sans leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E8DFD8] text-xs text-[#EC5D17] font-sans font-semibold">
                  Engineered for compounding longevity
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution Deep Dive */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#E8DFD8]">
        <Container size="default">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#EC5D17] block">
                Technical &amp; Creative Execution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#111111] tracking-tight leading-tight">
                How We Brought the Solution to Life
              </h2>
            </div>

            <div className="rounded-xl bg-[#FCEDE6]/40 border border-[#E8DFD8] p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-[#111111] font-sans leading-relaxed">
                {project.execution}
              </p>

              <div className="mt-8 pt-8 border-t border-[#E8DFD8] grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#EC5D17] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111] block">
                      Production Fidelity
                    </span>
                    <span className="text-[#666666] text-xs leading-relaxed">
                      Zero compromise between the design mockups and live production systems.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-[#EC5D17] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111] block">
                      Enterprise Reliability
                    </span>
                    <span className="text-[#666666] text-xs leading-relaxed">
                      Engineered for high-traffic stability, accessibility, and fast load speeds.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Delivered Systems & Assets */}
      <section id="deliverables" className="scroll-mt-24 bg-white py-20 sm:py-28 border-b border-[#E8DFD8]">
        <Container size="default">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#EC5D17] block mb-3">
                Final Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#111111] tracking-tight">
                Delivered Assets &amp; Systems
              </h2>
              <p className="mt-3 text-[#666666] font-sans">
                The tangible, production-ready deliverables transitioned to {project.client}&apos;s internal team:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.deliverables.map((del) => (
                <div
                  key={del}
                  className="rounded-lg bg-[#FCEDE6]/30 border border-[#E8DFD8] p-5 shadow-2xs flex items-center gap-3.5"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#EC5D17] shrink-0" />
                  <span className="text-sm font-semibold text-[#111111]">{del}</span>
                </div>
              ))}
            </div>

            {/* Linked Capabilities Tags */}
            <div className="pt-6 border-t border-[#E8DFD8]">
              <span className="text-xs font-sans uppercase tracking-wider text-[#666666] font-bold block mb-3">
                KreaitX Capabilities Engaged on This Project
              </span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => {
                  const slug = serviceSlugMap[s] || "branding";
                  return (
                    <Link
                      key={s}
                      href={`/solutions/${slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-sans font-semibold text-[#111111] bg-white hover:bg-[#111111] hover:text-[#EC5D17] border border-[#E8DFD8] shadow-2xs transition-colors duration-150"
                    >
                      <span>{s}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Pagination / Switcher */}
      <section className="bg-white py-12 sm:py-16 border-b border-[#E8DFD8]">
        <Container size="default">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-left w-full sm:w-auto p-4 rounded-xl hover:bg-[#FCEDE6] border border-transparent hover:border-[#E8DFD8] transition-all duration-150"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FCEDE6] text-[#111111] group-hover:bg-[#111111] group-hover:text-[#EC5D17] flex items-center justify-center shrink-0 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#666666] block">
                  Previous Project
                </span>
                <span className="text-sm font-display font-bold text-[#111111] group-hover:text-[#EC5D17] transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              href="/work"
              className="px-5 py-2.5 rounded-lg text-xs font-sans font-semibold text-[#666666] hover:text-[#111111] bg-[#FCEDE6] hover:bg-white transition-all border border-[#E8DFD8]"
            >
              All Case Studies
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end p-4 rounded-xl hover:bg-[#FCEDE6] border border-transparent hover:border-[#E8DFD8] transition-all duration-150"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#666666] block">
                  Next Project
                </span>
                <span className="text-sm font-display font-bold text-[#111111] group-hover:text-[#EC5D17] transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#FCEDE6] text-[#111111] group-hover:bg-[#111111] group-hover:text-[#EC5D17] flex items-center justify-center shrink-0 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Bottom Conversion CTA */}
      <CTASection />
    </>
  );
}
