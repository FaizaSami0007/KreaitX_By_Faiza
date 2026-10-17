import React from "react";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { processStages, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Our Process — Disciplined Creative Technology",
  description: "Explore KreaitX's six-stage methodology from discovery to sustainable digital growth. Clear milestones, structured client collaboration, and transparent outputs.",
  alternates: {
    canonical: `${siteConfig.url}/process`
  },
  openGraph: {
    title: "Our Process — Disciplined Creative Technology",
    description: "Explore KreaitX's six-stage methodology from discovery to sustainable digital growth. Clear milestones, structured client collaboration, and transparent outputs.",
    url: `${siteConfig.url}/process`,
    type: "website",
    siteName: siteConfig.name
  }
};

export default function ProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "KreaitX Six-Stage Creative Technology Methodology",
    "description": "Our transparent, disciplined process bridging discovery, architecture, prototyping, production, QA, and growth.",
    "step": processStages.map((stage, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": stage.title,
      "text": stage.description
    }))
  };

  return (
    <>
      {/* Schema.org HowTo Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Process Page Hero — Prussian Navy Brand Theme */}
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
                <span>Methodology &amp; Standards</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.05]">
                Clear milestones.{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                  Zero ambiguity
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-normal max-w-2xl">
                We believe exceptional work happens when clients understand exactly what comes next. Our six-stage process bridges strategic rigor, creative exploration, and production reliability.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-lg">
                  Start a Project
                </Button>
                <a
                  href="#process-breakdown"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Explore 6 Stages ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Six Stage Detailed Deep Dive */}
      <section id="process-breakdown" className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="space-y-12 sm:space-y-16">
            {processStages.map((stage, idx) => (
              <div
                key={stage.number}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 p-8 sm:p-12 lg:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {/* Left Column: Stage Identity & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-white bg-[#003049] border border-[#42C6D9]/30 px-3.5 py-1 rounded-full shadow-subtle">
                        Stage {stage.number}
                      </span>
                      <span className="text-xs font-sans uppercase text-slate-500 tracking-wider font-semibold">
                        Phase 0{idx + 1} of 06
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                      {stage.title}
                    </h2>

                    <p className="text-base font-semibold text-[#003049]">
                      {stage.tagline}
                    </p>

                    <p className="text-base text-slate-600 leading-relaxed font-sans font-normal pt-2">
                      {stage.description}
                    </p>

                    <div className="pt-4">
                      <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2.5">
                        Key Phase Milestones
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.milestones.map((ms) => (
                          <span
                            key={ms}
                            className="px-3.5 py-1.5 rounded-full bg-[#F7F8FA] border border-slate-200/90 text-xs font-medium text-[#003049] hover:border-[#42C6D9]/50 transition-colors"
                          >
                            {ms}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Collaboration Matrix */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
                    {/* What client provides */}
                    <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2">
                          01 • What You Provide
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed font-sans">
                          {stage.clientInput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                        Input &amp; Review Touchpoint
                      </div>
                    </div>

                    {/* What KreaitX delivers */}
                    <div className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#003049] font-bold block mb-2">
                          02 • What KreaitX Delivers
                        </span>
                        <p className="text-sm text-slate-900 leading-relaxed font-medium">
                          {stage.kreaitxOutput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#003049] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#42C6D9]" />
                        <span>Verified Output Document</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Uncertainty Reduction Section — Dark Theme Contrast */}
      <section className="bg-[#0B0F19] py-20 sm:py-28 border-b border-slate-800 text-white">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                theme="dark"
                eyebrow="Collaboration Standards"
                title={
                  <>
                    How we make working together{" "}
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                      calm and predictable
                    </span>.
                  </>
                }
                description="We eliminate traditional agency friction through structured communication, weekly check-ins, and direct access to craft leads."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="rounded-3xl bg-[#14213D] p-8 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-white/10 text-[#42C6D9] flex items-center justify-center mb-6 font-display text-base font-bold shadow-subtle border border-white/15">
                  01
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  No Middleman Lag
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-sans font-normal">
                  You communicate directly with the designers, directors, and developers doing the work, eliminating telephone-game misunderstandings.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-3xl bg-[#14213D] p-8 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-white/10 text-[#42C6D9] flex items-center justify-center mb-6 font-display text-base font-bold shadow-subtle border border-white/15">
                  02
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  Weekly Async &amp; Sync Loops
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-sans font-normal">
                  Clear weekly loom summaries and milestone reviews give your internal stakeholders full visibility without excessive meeting fatigue.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-3xl bg-[#14213D] p-8 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 transition-all duration-300 h-full">
                <span className="h-12 w-12 rounded-2xl bg-white/10 text-[#42C6D9] flex items-center justify-center mb-6 font-display text-base font-bold shadow-subtle border border-white/15">
                  03
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  Fixed Milestones, Clear Scopes
                </h3>
                <p className="text-base text-slate-300 leading-relaxed font-sans font-normal">
                  Every deliverable is clearly scoped before kick-off. No surprise invoices, hidden tech debt, or unexpected scope creep.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}
