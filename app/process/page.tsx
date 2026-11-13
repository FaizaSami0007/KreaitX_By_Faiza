import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { threeStepApproach, xrayAuditAreas, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Our Approach — Three Stages & The X-Ray Audit Framework | KreaitX",
  description:
    "Explore KreaitX's three-stage engagement model and the six-area X-Ray Audit framework designed to deliver clarity before commitment.",
  alternates: {
    canonical: `${siteConfig.url}/process`,
  },
  openGraph: {
    title: "Our Approach — Three Stages & The X-Ray Audit Framework | KreaitX",
    description:
      "Explore KreaitX's three-stage engagement model and the six-area X-Ray Audit framework designed to deliver clarity before commitment.",
    url: `${siteConfig.url}/process`,
    type: "website",
    siteName: siteConfig.name,
  },
};

export const dynamic = "force-static";

export default function ProcessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "KreaitX Three-Stage Proof-Driven Engagement Model",
    description: "Our disciplined three-stage approach and six-area X-Ray Audit framework.",
    step: threeStepApproach.map((stage, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `Stage ${stage.number}: ${stage.title}`,
      text: stage.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-white text-[#10172A] py-20 lg:py-28 border-b border-[#C5CCDC] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] px-3.5 py-1.5 rounded-md bg-[#F7F8FC] border border-[#C5CCDC] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                <span>02 // Our Approach</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Clarity before commitment. <br />
                <span className="text-[#3047D5]">Results without friction.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal max-w-2xl">
                A simple, disciplined engagement model designed to deliver clarity before commitment and results without friction. We believe you should always know exactly what you will receive and what it will cost before work begins.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact?type=audit" variant="primary" size="md" withArrow className="font-bold shadow-brand-button">
                  Request Complimentary Audit
                </Button>
                <a
                  href="#x-ray-audit"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  Explore X-Ray Audit Framework ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The 3 Official Stages Deep Dive */}
      <section className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Engagement Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              Three stages. Zero ambiguity.
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              From the first conversation to final delivery, our process is transparent, structured, and predictable:
            </p>
          </div>

          <div className="space-y-8">
            {threeStepApproach.map((stage) => (
              <div
                key={stage.number}
                className="rounded-2xl bg-white border border-[#C5CCDC] p-8 sm:p-12 shadow-2xs hover:border-[#3047D5] transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Stage Indicator */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#3047D5] bg-[#F7F8FC] border border-[#C5CCDC] px-3 py-1 rounded-md">
                        Stage {stage.number}
                      </span>
                      <span className="text-xs font-mono text-[#6A7180] bg-[#F7F8FC] border border-[#C5CCDC] px-2.5 py-1 rounded-md">
                        {stage.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#10172A] tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Right Stage Narrative & Outputs */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-base text-[#3A4454] leading-relaxed font-sans">
                      {stage.description}
                    </p>

                    <div className="p-4 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#3047D5] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block">
                          Expected Deliverable / Output:
                        </span>
                        <p className="text-sm text-[#3A4454] mt-0.5 font-sans">
                          {stage.output}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The X-Ray Audit Framework (Page 3 of PDF) */}
      <section id="x-ray-audit" className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Diagnostic Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              The X-Ray Audit Framework
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              Before producing any film or marketing asset, we assess six areas of your current presence to identify where your credibility is being lost:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {xrayAuditAreas.map((area, idx) => (
              <div
                key={area.id}
                className="p-8 rounded-2xl bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#C5CCDC]">
                    <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider">
                      Area 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#10172A] font-bold">
                      {area.area}
                    </span>
                  </div>

                  <p className="text-base font-display font-bold text-[#10172A] leading-snug">
                    &ldquo;{area.question}&rdquo;
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                    {area.businessValue}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60 flex items-center gap-1.5 text-xs font-mono text-[#3047D5]">
                  <Check className="h-3.5 w-3.5" />
                  <span>Assessed in X-Ray Report</span>
                </div>
              </div>
            ))}
          </div>

          {/* Complimentary Audit Banner (Exact from PDF Page 3 footer) */}
          <div className="mt-14 p-8 sm:p-12 rounded-2xl bg-[#10172A] text-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] block">
                  Complimentary Diagnostic
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
                  Request a complimentary X-Ray Audit for your company.
                </h3>
                <p className="text-sm text-[#C5CCDC] font-sans">
                  We review your current brand, messaging, and digital assets. You receive a detailed Credibility Gap Report within 3 to 5 business days with actionable recommendations. Zero cost, no commitment.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact?type=audit"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#4364EF] hover:bg-[#3252DB] transition-colors shadow-brand-button"
                >
                  <span>Request X-Ray Audit</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=X-Ray%20Audit%20Request`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Action CTA */}
      <CTASection />
    </>
  );
}
