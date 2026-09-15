import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Layers, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandingSection } from "@/components/sections/BrandingSection";
import { DigitalMarketingSection } from "@/components/sections/DigitalMarketingSection";
import { ConnectedCapabilitiesSection } from "@/components/sections/ConnectedCapabilitiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { servicesData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Services & Connected Solutions",
  description: "Explore KreaitX's connected capabilities: Branding, Digital Marketing, Social Media, Filming & Production, Graphic Design, 2D Animation, and Digital Solutions."
};

export default function SolutionsPage() {
  const remainingServices = servicesData.filter(
    (s) => s.id !== "branding" && s.id !== "digital-marketing"
  );

  return (
    <>
      {/* Cinematic Services Page Hero with User-Provided Art (Preserved Exactly) */}
      <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[75vh] flex items-center justify-center py-20 lg:py-28 border-b border-[#F5F6F2]/10">
        {/* User-Provided Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero-bg.png"
            alt="Technology Drives Possibilities × Creativity Turns Ideas Into Impact"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />
          {/* Subtle atmospheric vignette overlay for crisp text readability */}
          <div className="absolute inset-0 bg-[#14213D]/70 via-[#14213D]/50 to-[#14213D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-[#14213D]/60" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B7B98A] px-4 py-1.5 rounded-full bg-white/10 border border-[#F5F6F2]/15 mb-6 inline-block backdrop-blur-md">
                Capabilities × Solutions Architecture
              </span>
              <h1 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
                Creative &amp; digital capabilities,{" "}
                <span className="font-serif-italic font-normal text-[#B7B98A]">
                  connected
                </span>.
              </h1>
              <p className="mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
                We organize our capabilities around your business challenges rather than isolated deliverables. Discover how each discipline integrates seamlessly into your broader growth engine.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="white" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#connected-capabilities"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/20 border border-[#F5F6F2]/20 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
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

      {/* REMAINING SERVICES CATALOG (03 to 07) */}
      <section className="bg-[#F5F6F2] py-20 sm:py-28">
        <Container size="default">
          <div className="space-y-16 sm:space-y-24">
            {remainingServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-2xl sm:rounded-3xl bg-white border border-[#14213D]/10 p-8 sm:p-12 lg:p-14 shadow-subtle"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                  {/* Left: Summary & Problem Solved */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#F5F6F2] bg-[#14213D] px-2.5 py-1 rounded">
                        {service.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#14213D]/70">
                        {service.category}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#14213D] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg font-medium text-[#14213D]/90">
                      {service.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Problem Solved Box */}
                    <div className="rounded-xl bg-[#F5F6F2] p-5 border border-[#14213D]/10">
                      <p className="text-xs font-mono uppercase tracking-wider text-rose-800 font-bold mb-1.5">
                        The Core Problem We Solve
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {service.problemSolved}
                      </p>
                    </div>

                    {/* Related capabilities */}
                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Connected With
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.relatedCapabilities.map((rel) => (
                          <Link
                            key={rel}
                            href="/solutions#branding"
                            className="text-xs font-medium text-[#14213D] bg-[#F5F6F2] hover:bg-[#14213D] hover:text-white border border-[#14213D]/10 px-3 py-1 rounded-full transition-all duration-200"
                          >
                            + {rel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables & Workflow */}
                  <div className="lg:col-span-6 space-y-8 bg-[#F5F6F2] p-6 sm:p-8 rounded-2xl border border-[#14213D]/10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-4 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-[#B7B98A]" />
                        What KreaitX Delivers
                      </h3>

                      <ul className="space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#14213D] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#14213D]/10">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#14213D] font-bold mb-3 flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-[#B7B98A]" />
                        Standard Workflow
                      </h3>
                      <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {service.workflow.map((step, sIdx) => (
                          <li key={step} className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#14213D]">
                              0{sIdx + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="pt-6 border-t border-[#14213D]/10 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Ready to explore scope?</span>
                      <Button
                        href={`/contact?service=${service.id}`}
                        variant="primary"
                        size="sm"
                        withArrow
                      >
                        Inquire for {service.title}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}

