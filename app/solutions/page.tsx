import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { coreOfferings, additionalCapabilities, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Services & Pricing — Four Core Offerings & Fixed USD Quotes | KreaitX",
  description:
    "Explore KreaitX's four core commercial offerings: X-Ray Audit, Brand Film, Proof Pack, and Growth Retainer. Guaranteed fixed pricing in USD.",
  alternates: {
    canonical: `${siteConfig.url}/solutions`,
  },
  openGraph: {
    title: "Services & Pricing — Four Core Offerings & Fixed USD Quotes | KreaitX",
    description:
      "Explore KreaitX's four core commercial offerings: X-Ray Audit, Brand Film, Proof Pack, and Growth Retainer. Guaranteed fixed pricing in USD.",
    url: `${siteConfig.url}/solutions`,
    type: "website",
    siteName: siteConfig.name,
  },
};

export const dynamic = "force-static";

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KreaitX Services & Pricing",
    description: "Four core proof-driven commercial offerings and transparent fixed USD pricing policy.",
    url: `${siteConfig.url}/solutions`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: coreOfferings.map((offering, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: offering.title,
        description: offering.description,
      })),
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
                <span>03 // Services &amp; Pricing</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Four core offerings. <br />
                <span className="text-[#3047D5]">Guaranteed fixed USD pricing.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal max-w-2xl">
                We offer four core commercial offerings, structured around our proof-driven methodology. Every engagement begins with a defined scope and a fixed price in USD. No hidden costs. No open-ended billing.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact?type=quote" variant="primary" size="md" withArrow className="font-bold shadow-brand-button">
                  Request a Fixed Quote
                </Button>
                <Link
                  href="/contact?type=audit"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  <span>Request X-Ray Audit</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4 Core Offerings Deep Dive Section */}
      <section className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="space-y-12 sm:space-y-16">
            {coreOfferings.map((offering) => {
              const isComplimentary = offering.id === "x-ray-audit";

              return (
                <div
                  key={offering.id}
                  id={offering.id}
                  className={`scroll-mt-32 rounded-2xl p-8 sm:p-12 border transition-all duration-200 shadow-2xs ${
                    isComplimentary
                      ? "bg-white border-[#3047D5]/40 ring-1 ring-[#3047D5]/20"
                      : "bg-white border-[#C5CCDC]"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Offering Identity & Pricing */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider bg-[#F7F8FC] border border-[#C5CCDC] px-2.5 py-1 rounded">
                          {offering.tag}
                        </span>
                        <span className="text-xs font-mono text-[#6A7180] font-semibold">
                          Offering {offering.number}
                        </span>
                      </div>

                      <h2 className="text-3xl font-display font-bold text-[#10172A] tracking-tight">
                        {offering.title}
                      </h2>

                      <div className="p-4 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] inline-block">
                        <span className="text-sm font-mono font-bold text-[#10172A] block">
                          {offering.pricingLabel}
                        </span>
                        {offering.pricingNote && (
                          <span className="text-xs text-[#6A7180] font-sans mt-0.5 block">
                            {offering.pricingNote}
                          </span>
                        )}
                      </div>

                      <p className="text-base text-[#3A4454] leading-relaxed font-sans">
                        {offering.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={`/contact?type=${offering.ctaType}&service=${encodeURIComponent(offering.title)}`}
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                            isComplimentary
                              ? "bg-[#3047D5] text-white hover:bg-[#2538B0] shadow-brand-button"
                              : "bg-[#10172A] text-white hover:bg-[#3047D5]"
                          }`}
                        >
                          <span>{offering.ctaLabel}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Features & Deliverables */}
                    <div className="lg:col-span-7 bg-[#F7F8FC] p-6 sm:p-8 rounded-xl border border-[#C5CCDC]">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block mb-4">
                        Included Deliverables &amp; Scope:
                      </span>
                      <ul className="space-y-3">
                        {offering.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3 text-sm text-[#3A4454] font-sans">
                            <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Additional Studio Capabilities */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Modular Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              Additional Studio Capabilities
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              Depending on project requirements, we deploy specialized creative and digital modules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
              >
                <h3 className="text-base font-display font-bold text-[#10172A]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6A7180] leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Policy Commitment Banner (Page 4 of PDF) */}
      <section className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="rounded-2xl bg-[#10172A] text-white p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] block mb-3">
                Commercial Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Our Engagement &amp; Pricing Policy
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#C5CCDC] font-sans leading-relaxed">
                &ldquo;Every engagement begins with a defined scope and a fixed price in USD. No hidden costs. No open-ended billing. You know exactly what you will receive and what it will cost before work begins.&rdquo;
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact?type=quote"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#4364EF] hover:bg-[#3252DB] transition-colors shadow-brand-button"
                >
                  <span>Request a Fixed USD Proposal</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
                >
                  Book 30-Min Consultation
                </Link>
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
