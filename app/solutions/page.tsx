import React from "react";
import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ConnectedCapabilitiesSection } from "@/components/sections/ConnectedCapabilitiesSection";
import { SolutionServiceSection } from "@/components/sections/SolutionServiceSection";
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

const servicesConfig = [
  {
    id: "branding",
    headline: { prefix: "Branding that builds", highlight: "trust & recognition" },
    theme: "light" as const
  },
  {
    id: "digital-marketing",
    headline: { prefix: "Marketing that delivers", highlight: "measurable growth" },
    theme: "light" as const
  },
  {
    id: "social-media-management",
    headline: { prefix: "Social media with", highlight: "purpose & community" },
    theme: "light" as const
  },
  {
    id: "filming-production",
    headline: { prefix: "Visual stories with", highlight: "cinematic impact" },
    theme: "light" as const
  },
  {
    id: "graphic-design",
    headline: { prefix: "Visual design that", highlight: "clarifies & converts" },
    theme: "light" as const
  },
  {
    id: "2d-animation",
    headline: { prefix: "Motion animation that", highlight: "explains & captivates" },
    theme: "light" as const
  },
  {
    id: "digital-solutions",
    headline: { prefix: "Digital platforms", highlight: "engineered to perform" },
    theme: "light" as const
  }
];

export default function SolutionsPage() {
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
      
      {/* Services Page Hero — Prussian Navy Brand Theme */}
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
                <span>Capabilities × Solutions Architecture</span>
              </span>
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-white tracking-tight leading-[1.08]">
                Creative &amp; digital capabilities,{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                  connected
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-normal max-w-2xl">
                We organize our capabilities around your business challenges rather than isolated deliverables. Discover how each discipline integrates seamlessly into your broader growth engine.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="cyan" size="md" withArrow className="w-full sm:w-auto min-h-[48px] font-bold shadow-lg">
                  Start a Project
                </Button>
                <a
                  href="#connected-capabilities"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
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

      {/* UNIFIED SERVICES CATALOG: ALL 7 DISCIPLINES (01 to 07) */}
      {servicesConfig.map((cfg) => {
        const service = servicesData.find((s) => s.id === cfg.id);
        if (!service) return null;

        return (
          <SolutionServiceSection
            key={service.id}
            service={service}
            headline={cfg.headline}
            theme={cfg.theme}
          />
        );
      })}

      {/* Conversion CTA — Light Background above dark Footer */}
      <CTASection bg="light" />
    </>
  );
}
