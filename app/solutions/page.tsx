import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers, Cpu, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionsHeroBg } from "@/components/ui/HeroBackgroundDesigns";
import { BrandingSection } from "@/components/sections/BrandingSection";
import { DigitalMarketingSection } from "@/components/sections/DigitalMarketingSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { ConnectedCapabilitiesSection } from "@/components/sections/ConnectedCapabilitiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Services & Connected Solutions",
  description: "Explore KreaitX's connected capabilities: Branding, Digital Marketing, Social Media, Filming & Production, Graphic Design, 2D Animation, and Digital Solutions."
};

export default function SolutionsPage() {
  const remainingServices = servicesData.filter(
    (s) => s.id !== "branding" && s.id !== "digital-marketing" && s.id !== "social-media-management"
  );

  return (
    <>
      {/* Services Page Hero with Decent Background Design */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[640px] lg:min-h-[720px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Bespoke Solutions Hero Background */}
        <SolutionsHeroBg />

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Capabilities × Solutions Architecture</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Creative &amp; digital capabilities,{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  connected
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                We organize our capabilities around your business challenges rather than isolated deliverables. Discover how each discipline integrates seamlessly into your broader growth engine.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#connected-capabilities"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
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
                          <span className="font-display text-base font-bold text-purple-600">
                            {service.number}
                          </span>
                          <span className="w-6 h-[2px] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" aria-hidden="true" />
                          <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-500">
                            {service.category}
                          </span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.1]">
                          {service.title}
                        </h2>

                        <p className="text-base sm:text-lg font-semibold text-purple-700">
                          {service.tagline}
                        </p>

                        <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                          {service.description}
                        </p>

                        {/* Problem Solved Box */}
                        <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/60">
                          <p className="text-xs font-sans uppercase tracking-wider text-slate-900 font-bold mb-1.5">
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
                            {service.relatedCapabilities.map((rel) => (
                              <Link
                                key={rel}
                                href="/solutions#branding"
                                className="text-xs font-medium text-slate-700 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 px-3.5 py-1.5 rounded-full transition-all duration-200"
                              >
                                + {rel}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100">
                        <Button
                          href={`/contact?service=${service.id}`}
                          variant="primary"
                          size="md"
                          withArrow
                          className="w-full sm:w-auto"
                        >
                          Inquire for {service.title}
                        </Button>
                      </div>
                    </div>

                    {/* Deliverables & Workflow Column */}
                    <div
                      className={`lg:col-span-6 space-y-8 p-6 sm:p-8 lg:p-9 rounded-2xl border flex flex-col justify-between bg-slate-50/90 text-slate-900 border-slate-200/80 shadow-sm ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div>
                        <h3 className="text-xs font-sans uppercase tracking-widest font-bold mb-4 flex items-center gap-2 text-purple-700">
                          <Layers className="h-4 w-4 text-purple-600" />
                          What KreaitX Delivers
                        </h3>

                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm font-medium text-slate-800"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-purple-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-slate-200/80">
                        <h3 className="text-xs font-sans uppercase tracking-widest font-bold mb-3 flex items-center gap-2 text-purple-700">
                          <Cpu className="h-4 w-4 text-purple-600" />
                          Standard Workflow
                        </h3>
                        <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
                          {service.workflow.map((step, sIdx) => (
                            <li key={step} className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-purple-600">
                                0{sIdx + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                        <span>Collaborative &amp; transparent delivery</span>
                        <span className="font-display font-bold uppercase tracking-wider text-purple-600">
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
