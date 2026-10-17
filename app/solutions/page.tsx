import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Layers, Cpu, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandingSection } from "@/components/sections/BrandingSection";
import { DigitalMarketingSection } from "@/components/sections/DigitalMarketingSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { ConnectedCapabilitiesSection } from "@/components/sections/ConnectedCapabilitiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Services & Connected Solutions — KreaitX",
  description: "Explore KreaitX's connected capabilities: Branding, Digital Marketing, Social Media, Filming & Production, Graphic Design, 2D Animation, and Digital Solutions.",
  alternates: {
    canonical: `${siteConfig.url}/solutions`
  },
  openGraph: {
    title: "Services & Connected Solutions — KreaitX",
    description: "Explore KreaitX's connected capabilities: Branding, Digital Marketing, Social Media, Filming & Production, Graphic Design, 2D Animation, and Digital Solutions.",
    url: `${siteConfig.url}/solutions`,
    type: "website",
    siteName: siteConfig.name
  }
};

export default function SolutionsPage() {
  const remainingServices = servicesData.filter(
    (s) => s.id !== "branding" && s.id !== "digital-marketing" && s.id !== "social-media-management"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "KreaitX Services & Connected Solutions",
    description: "Full spectrum of connected creative technology and digital growth capabilities.",
    url: `${siteConfig.url}/solutions`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicesData.map((service, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: service.title,
        url: `${siteConfig.url}/solutions/${service.id}`,
        description: service.description
      }))
    }
  };

  return (
    <>
      {/* Schema.org CollectionPage / ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Services Page Hero — Image-Free Editorial Layout */}
      <section className="relative bg-[#F7F8FA] text-slate-900 py-20 lg:py-28 border-b border-slate-200/80">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#003049] px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-subtle mb-6">
                <Sparkles className="h-3.5 w-3.5 text-[#003049]" />
                <span>Capabilities × Solutions Architecture</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Creative &amp; digital capabilities,{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-[#003049] via-[#14213D] to-[#42C6D9] bg-clip-text text-transparent">
                  connected
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                We organize our capabilities around your business challenges rather than isolated deliverables. Discover how each discipline integrates seamlessly into your broader growth engine.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="navy" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#connected-capabilities"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-[#F7F8FA] border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Explore All 7 Services ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SECTION: CONNECTED CAPABILITIES (Immediately after Hero) */}
      <ConnectedCapabilitiesSection />

      {/* SECTION 01: BRANDING */}
      <BrandingSection />

      {/* SECTION 02: DIGITAL MARKETING */}
      <DigitalMarketingSection />

      {/* SECTION 03: SOCIAL MEDIA MANAGEMENT */}
      <SocialMediaSection />

      {/* REMAINING SERVICES CATALOG (04 to 07) — SOFTY SOLUTIONS ROUNDED COMPOSITIONS */}
      <section className="bg-slate-50/60 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default" className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {remainingServices.map((service, idx) => {
              const isReversed = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28 rounded-3xl bg-white border border-slate-200/80 shadow-card p-6 sm:p-10 lg:p-12 xl:p-14"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                    {/* Narrative Column */}
                    <div
                      className={`lg:col-span-6 space-y-6 flex flex-col justify-between h-full ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-base font-bold text-[#003049]">
                            {service.number}
                          </span>
                          <span className="w-6 h-[2px] bg-[#42C6D9] rounded-full" aria-hidden="true" />
                          <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500">
                            {service.category}
                          </span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.1]">
                          {service.title}
                        </h2>

                        <p className="text-base sm:text-lg font-semibold text-[#003049]">
                          {service.tagline}
                        </p>

                        <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                          {service.description}
                        </p>

                        {/* Problem Solved Box */}
                        <div className="rounded-2xl bg-[#F7F8FA] p-5 border border-slate-200/70">
                          <p className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold mb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#42C6D9]" />
                            The Core Problem We Solve
                          </p>
                          <p className="text-sm text-slate-600 leading-relaxed font-sans">
                            {service.problemSolved}
                          </p>
                        </div>

                        {/* Related capabilities */}
                        <div className="pt-2">
                          <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block mb-2.5">
                            Connected With
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.relatedCapabilities.map((rel) => {
                              const targetService = servicesData.find((s) => s.title.toLowerCase().includes(rel.toLowerCase()) || rel.toLowerCase().includes(s.title.toLowerCase()));
                              const targetHref = targetService ? `/solutions/${targetService.id}` : "/solutions";
                              return (
                                <Link
                                  key={rel}
                                  href={targetHref}
                                  className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-[#003049] hover:text-white hover:border-[#003049] border border-slate-200 px-3.5 py-1.5 rounded-full transition-all duration-200"
                                >
                                  + {rel}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                        <Button
                          href={`/solutions/${service.id}`}
                          variant="navy"
                          size="md"
                          withArrow
                          className="w-full sm:w-auto"
                        >
                          Explore Dedicated Service
                        </Button>
                        <Button
                          href={`/contact?service=${service.id}`}
                          variant="secondary"
                          size="md"
                          className="w-full sm:w-auto"
                        >
                          Inquire for {service.title}
                        </Button>
                      </div>
                    </div>

                    {/* Deliverables & Workflow Column */}
                    <div
                      className={`lg:col-span-6 space-y-8 p-6 sm:p-8 lg:p-9 rounded-2xl border flex flex-col justify-between bg-[#F7F8FA] text-slate-900 border-slate-200/80 shadow-sm ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <h3 className="text-xs font-sans uppercase tracking-widest font-bold mb-4 flex items-center gap-2 text-[#003049]">
                          <Layers className="h-4 w-4 text-[#42C6D9]" />
                          What KreaitX Delivers
                        </h3>

                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm font-medium text-slate-800"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#003049]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-slate-200/80">
                        <h3 className="text-xs font-sans uppercase tracking-widest font-bold mb-3 flex items-center gap-2 text-[#003049]">
                          <Cpu className="h-4 w-4 text-[#42C6D9]" />
                          Standard Workflow
                        </h3>
                        <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {service.workflow.map((step, sIdx) => (
                            <li key={step} className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#003049]">
                                0{sIdx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                        <span>Collaborative &amp; transparent delivery</span>
                        <span className="font-display font-bold uppercase tracking-wider text-[#003049]">
                          {service.number} / 07
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}
