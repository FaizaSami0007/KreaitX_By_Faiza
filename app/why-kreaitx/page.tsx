import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { whyKreaitXDifferentiators, targetAudience, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Why KreaitX — Proof Over Promises & Direct Access",
  description:
    "Learn why capable companies choose KreaitX: direct practitioner access, cinematic production standards, guaranteed fixed USD pricing, and evidence-driven positioning.",
  alternates: {
    canonical: `${siteConfig.url}/why-kreaitx`,
  },
  openGraph: {
    title: "Why KreaitX — Proof Over Promises & Direct Access",
    description:
      "Learn why capable companies choose KreaitX: direct practitioner access, cinematic production standards, guaranteed fixed USD pricing, and evidence-driven positioning.",
    url: `${siteConfig.url}/why-kreaitx`,
    type: "website",
    siteName: siteConfig.name,
  },
};

const industrySectors = [
  { name: "Technology, SaaS & AI Platforms", focus: "Translating complex proprietary algorithms into urgent commercial narratives for buyers and investors." },
  { name: "Manufacturing & Industrial Operations", focus: "Filming factory-floor precision, advanced equipment, and institutional supply-chain reliability." },
  { name: "Engineering & Infrastructure", focus: "Capturing large-scale technical deployments, civil projects, and multi-year safety track records." },
  { name: "Healthcare, MedTech & Biotech", focus: "Documenting clinical outcomes, patient impact, and specialized technical certifications." },
  { name: "Professional Services & Advisory", focus: "Positioning partners and senior consultants as indisputable industry authorities." },
  { name: "Development Sector & Public Initiatives", focus: "Communicating ground-level community transformation and multi-donor program accountability." }
];

export const dynamic = "force-static";

export default function WhyKreaitXPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Why KreaitX",
    description: "Four core differentiators, target industries, and international client collaboration model.",
    url: `${siteConfig.url}/why-kreaitx`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
                <span>05 // Why KreaitX</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Built for companies with <br />
                <span className="text-[#3047D5]">real substance</span>.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal max-w-2xl">
                We reject agency bureaucracy, junior staffing layers, and generic marketing promises. Here is why ambitious businesses partner directly with KreaitX:
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="font-bold shadow-brand-button">
                  Book a Consultation
                </Button>
                <a
                  href="#differentiators"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  Explore 4 Differentiators ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4 Core Differentiators Deep Dive */}
      <section id="differentiators" className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyKreaitXDifferentiators.map((diff) => (
              <div
                key={diff.number}
                className="rounded-2xl bg-white p-8 sm:p-10 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C5CCDC]">
                    <span className="text-sm font-mono font-bold text-[#3047D5]">
                      Differentiator {diff.number}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10172A]" />
                  </div>

                  <h2 className="text-2xl font-display font-bold text-[#10172A] tracking-tight">
                    {diff.title}
                  </h2>

                  <p className="mt-2 text-sm font-sans font-semibold text-[#3047D5]">
                    {diff.summary}
                  </p>

                  <p className="mt-4 text-base text-[#6A7180] leading-relaxed font-sans">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C5CCDC]/60 flex items-center gap-2 text-xs font-mono text-[#10172A]">
                  <CheckCircle2 className="h-4 w-4 text-[#3047D5]" />
                  <span>Guaranteed Studio Standard</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Focus */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              Industries where proof commands a premium.
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              We specialize in complex, high-stakes B2B industries where buyers make buying decisions based on demonstrable track records rather than emotional impulse:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySectors.map((sec) => (
              <div
                key={sec.name}
                className="p-6 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
              >
                <h3 className="text-base font-display font-bold text-[#10172A]">
                  {sec.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                  {sec.focus}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 Trigger Situations */}
      <section className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Engagement Triggers
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              When should you engage KreaitX?
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              Our clients engage us during pivotal business inflection points where closing the credibility gap delivers exponential return on investment:
            </p>
          </div>

          <div className="space-y-4">
            {targetAudience.situations.map((sit, idx) => (
              <div
                key={sit.title}
                className="p-6 sm:p-8 rounded-xl bg-white border border-[#C5CCDC] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs"
              >
                <div className="flex items-start gap-4">
                  <span className="text-base font-mono font-bold text-[#3047D5] bg-[#F7F8FC] border border-[#C5CCDC] px-3 py-1 rounded-md shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#10172A]">
                      {sit.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6A7180] font-sans">
                      {sit.desc}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-mono font-bold text-[#3047D5] hover:underline shrink-0"
                >
                  <span>Discuss Situation</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* US & International Working Model */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="rounded-2xl bg-[#10172A] text-white p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] block mb-2">
                International Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Seamless collaboration for US &amp; global clients.
              </h2>
              <p className="mt-3 text-base text-[#C5CCDC] font-sans">
                Headquartered in Khyber Pakhtunkhwa with governance in Dubai, we are structured specifically to serve enterprise and mid-market clients across North America, Europe, and the Middle East without friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {targetAudience.usWorkingModel.map((model) => (
                <div key={model.label} className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4364EF] block mb-1.5">
                    {model.label}
                  </span>
                  <p className="text-sm text-white/90 font-sans leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Final Action CTA */}
      <CTASection />
    </>
  );
}

