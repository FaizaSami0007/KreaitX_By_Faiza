import React from "react";
import type { Metadata } from "next";
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

      {/* Process Page Hero — Porcelain #F7F5F0 Canvas */}
      <section className="relative bg-[#F7F5F0] text-[#34312F] py-20 lg:py-28 border-b border-[#E5E1DA] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EC5D17] px-3.5 py-1.5 rounded-md bg-[#FFF0E8] border border-[#E5E1DA] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#EC5D17]" />
                <span>Methodology &amp; Standards</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-[#34312F] tracking-tight leading-[1.08]">
                Clear milestones.{" "}
                <span className="font-display font-bold text-[#EC5D17]">
                  Zero ambiguity
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#6B6560] leading-relaxed font-sans font-normal max-w-2xl">
                We believe exceptional work happens when clients understand exactly what comes next. Our six-stage process bridges strategic rigor, creative exploration, and production reliability.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold">
                  Start a Project
                </Button>
                <a
                  href="#process-breakdown"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#34312F] bg-white hover:bg-[#F7F5F0] hover:text-[#EC5D17] border border-[#E5E1DA] transition-all duration-200 w-full sm:w-auto shadow-xs"
                >
                  Explore 6 Stages ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Six Stage Detailed Deep Dive */}
      <section id="process-breakdown" className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E5E1DA]">
        <Container size="default">
          <div className="space-y-12 sm:space-y-16">
            {processStages.map((stage, idx) => (
              <div
                key={stage.number}
                className="rounded-xl bg-white border border-[#E5E1DA] shadow-xs hover:border-[#EC5D17] transition-all duration-200 p-6 sm:p-10 lg:p-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {/* Left Column: Stage Identity & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold text-[#EC5D17] bg-[#FFF0E8] border border-[#E5E1DA] px-3 py-1 rounded-md">
                        Stage {stage.number}
                      </span>
                      <span className="text-xs font-sans uppercase text-[#6B6560] tracking-wider font-semibold">
                        Phase 0{idx + 1} of 06
                      </span>
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#34312F] tracking-tight">
                      {stage.title}
                    </h2>

                    <p className="text-base font-semibold text-[#EC5D17]">
                      {stage.tagline}
                    </p>

                    <p className="text-base text-[#6B6560] leading-relaxed font-sans font-normal pt-2">
                      {stage.description}
                    </p>

                    <div className="pt-4">
                      <span className="text-xs font-sans uppercase tracking-wider text-[#6B6560] font-bold block mb-2.5">
                        Key Phase Milestones
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.milestones.map((ms) => (
                          <span
                            key={ms}
                            className="px-3.5 py-1.5 rounded-md bg-[#F7F5F0] border border-[#E5E1DA] text-xs font-medium text-[#34312F] hover:border-[#EC5D17] transition-colors"
                          >
                            {ms}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Collaboration Matrix */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F7F5F0] p-6 sm:p-8 rounded-xl border border-[#E5E1DA]">
                    {/* What client provides */}
                    <div className="rounded-lg bg-white p-6 border border-[#E5E1DA] shadow-2xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#6B6560] font-bold block mb-2">
                          01 • What You Provide
                        </span>
                        <p className="text-sm text-[#6B6560] leading-relaxed font-sans">
                          {stage.clientInput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#E5E1DA] text-xs text-[#6B6560] font-medium">
                        Input &amp; Review Touchpoint
                      </div>
                    </div>

                    {/* What KreaitX delivers */}
                    <div className="rounded-lg bg-white p-6 border border-[#E5E1DA] shadow-2xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-sans uppercase tracking-wider text-[#EC5D17] font-bold block mb-2">
                          02 • What KreaitX Delivers
                        </span>
                        <p className="text-sm text-[#34312F] leading-relaxed font-medium">
                          {stage.kreaitxOutput}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#E5E1DA] text-xs text-[#EC5D17] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC5D17]" />
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
      <section className="bg-[#34312F] py-20 sm:py-28 border-b border-white/10 text-white">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                theme="dark"
                eyebrow="Collaboration Standards"
                title={
                  <>
                    How we make working together{" "}
                    <span className="text-[#EC5D17]">
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
              <div className="rounded-xl bg-[#2D2A28] p-8 border border-white/10 hover:border-[#EC5D17]/50 transition-colors h-full">
                <span className="h-10 w-10 rounded-lg bg-white/5 text-[#EC5D17] flex items-center justify-center mb-6 font-display text-sm font-bold border border-white/10">
                  01
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  No Middleman Lag
                </h3>
                <p className="text-base text-[#E5E1DA] leading-relaxed font-sans font-normal">
                  You communicate directly with the designers, directors, and developers doing the work, eliminating telephone-game misunderstandings.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-xl bg-[#2D2A28] p-8 border border-white/10 hover:border-[#EC5D17]/50 transition-colors h-full">
                <span className="h-10 w-10 rounded-lg bg-white/5 text-[#EC5D17] flex items-center justify-center mb-6 font-display text-sm font-bold border border-white/10">
                  02
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  Weekly Async &amp; Sync Loops
                </h3>
                <p className="text-base text-[#E5E1DA] leading-relaxed font-sans font-normal">
                  Clear weekly loom summaries and milestone reviews give your internal stakeholders full visibility without excessive meeting fatigue.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-xl bg-[#2D2A28] p-8 border border-white/10 hover:border-[#EC5D17]/50 transition-colors h-full">
                <span className="h-10 w-10 rounded-lg bg-white/5 text-[#EC5D17] flex items-center justify-center mb-6 font-display text-sm font-bold border border-white/10">
                  03
                </span>
                <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2.5">
                  Fixed Milestones, Clear Scopes
                </h3>
                <p className="text-base text-[#E5E1DA] leading-relaxed font-sans font-normal">
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
