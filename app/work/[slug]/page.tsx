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
      <div className="bg-[#F7F8FA] border-b border-slate-200/80 py-3.5 text-xs font-sans text-slate-500">
        <Container size="default">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-[#003049] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/work" className="hover:text-[#003049] transition-colors">
              Work
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">{project.title}</span>
          </nav>
        </Container>
      </div>

      {/* Case Study Header Hero */}
      <section className="relative overflow-hidden bg-[#0B0F19] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#42C6D9]/10 via-[#003049]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#42C6D9]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#003049]/40 rounded-full blur-3xl pointer-events-none" />

        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Reveal yOffset={12}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#42C6D9] text-xs font-mono font-semibold">
                  Case Study 0{projectIndex + 1}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#14213D] border border-slate-700 text-xs font-sans font-bold uppercase tracking-wider text-slate-200">
                  {project.industry}
                </span>
                <span className="text-xs font-sans text-slate-400 font-medium flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#42C6D9]" />
                  {project.year}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={16}>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08]">
                {project.title}
              </h1>
            </Reveal>

            <Reveal delay={0.14} yOffset={14}>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-sans font-normal">
                {project.summary}
              </p>
            </Reveal>

            {/* Client & Metadata Bar */}
            <Reveal delay={0.2} yOffset={12}>
              <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Client Partner
                  </span>
                  <span className="text-base font-display font-bold text-white flex items-center gap-2">
                    <Building className="h-4 w-4 text-[#42C6D9]" />
                    {project.client}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Industry Domain
                  </span>
                  <span className="text-base font-sans font-semibold text-white flex items-center gap-2">
                    <Tag className="h-4 w-4 text-[#42C6D9]" />
                    {project.industry}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Engagement Year
                  </span>
                  <span className="text-base font-sans font-semibold text-white flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#42C6D9]" />
                    {project.year}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Measured Business Impact Showcase */}
      <section className="bg-[#003049] text-white py-16 sm:py-20 border-b border-[#14213D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#42C6D9]/10 rounded-full blur-3xl pointer-events-none" />
        <Container size="default" className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-12 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#42C6D9] font-bold">
                  <TrendingUp className="h-4 w-4 text-[#42C6D9]" />
                  <span>Verified Commercial Transformation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  Measured Business Impact
                </h2>
                <p className="text-xl sm:text-2xl font-sans font-normal text-slate-200 leading-relaxed">
                  {project.impact}
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={`/contact?project=${project.slug}`}
                  variant="cyan"
                  size="md"
                  withArrow
                  className="w-full sm:w-auto"
                >
                  Start Similar Project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge vs Strategy Dual Deep Dive */}
      <section className="bg-[#F7F8FA] py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#003049] block mb-2">
                Problem &amp; Strategic Hypothesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
                Challenge vs. Strategic Direction
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenge Card */}
              <div className="rounded-3xl bg-white border border-slate-200/80 shadow-card p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-sans uppercase tracking-widest font-bold text-slate-500">
                      The Initial Bottleneck
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                    The Challenge
                  </h3>
                  <p className="text-base text-slate-600 font-sans leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 font-sans">
                  Identified during initial discovery sprint
                </div>
              </div>

              {/* Strategy Card */}
              <div className="rounded-3xl bg-white border border-[#42C6D9]/40 shadow-card p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#42C6D9]/10 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#42C6D9]" />
                    <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#003049]">
                      KreaitX Architectural Blueprint
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-4">
                    The Strategy
                  </h3>
                  <p className="text-base text-slate-700 font-sans leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-[#003049] font-sans font-semibold">
                  Engineered for compounding longevity
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution Deep Dive */}
      <section className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#003049] block">
                Technical &amp; Creative Execution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 tracking-tight leading-tight">
                How We Brought the Solution to Life
              </h2>
            </div>

            <div className="rounded-3xl bg-[#F7F8FA] border border-slate-200/80 p-8 sm:p-12">
              <p className="text-lg sm:text-xl text-slate-800 font-sans leading-relaxed">
                {project.execution}
              </p>

              <div className="mt-8 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#003049] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Production Fidelity
                    </span>
                    <span className="text-slate-600 text-xs leading-relaxed">
                      Zero compromise between the design mockups and live production systems.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-[#003049] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Enterprise Reliability
                    </span>
                    <span className="text-slate-600 text-xs leading-relaxed">
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
      <section id="deliverables" className="scroll-mt-24 bg-[#F7F8FA] py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest font-bold text-[#003049] block mb-3">
                Final Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight">
                Delivered Assets &amp; Systems
              </h2>
              <p className="mt-3 text-slate-600 font-sans">
                The tangible, production-ready deliverables transitioned to {project.client}&apos;s internal team:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.deliverables.map((del) => (
                <div
                  key={del}
                  className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-subtle flex items-center gap-3.5"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#003049] shrink-0" />
                  <span className="text-sm font-semibold text-slate-900">{del}</span>
                </div>
              ))}
            </div>

            {/* Linked Capabilities Tags */}
            <div className="pt-6 border-t border-slate-200/80">
              <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-3">
                KreaitX Capabilities Engaged on This Project
              </span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => {
                  const slug = serviceSlugMap[s] || "branding";
                  return (
                    <Link
                      key={s}
                      href={`/solutions/${slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-semibold text-slate-800 bg-white hover:bg-[#003049] hover:text-white border border-slate-200 hover:border-[#003049] shadow-subtle transition-all duration-200"
                    >
                      <span>{s}</span>
                      <ArrowRight className="h-3 w-3 text-[#42C6D9]" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Pagination / Switcher */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-left w-full sm:w-auto p-4 rounded-2xl hover:bg-[#F7F8FA] border border-transparent hover:border-slate-200 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#003049] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                  Previous Project
                </span>
                <span className="text-sm font-display font-bold text-slate-900 group-hover:text-[#003049] transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              href="/work"
              className="px-5 py-2.5 rounded-full text-xs font-sans font-semibold text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/70 transition-all"
            >
              All Case Studies
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-right w-full sm:w-auto justify-end p-4 rounded-2xl hover:bg-[#F7F8FA] border border-transparent hover:border-slate-200 transition-all duration-200"
            >
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                  Next Project
                </span>
                <span className="text-sm font-display font-bold text-slate-900 group-hover:text-[#003049] transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#003049] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
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
