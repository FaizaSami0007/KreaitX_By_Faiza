import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { credibilityGapChallenge, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About KreaitX — Brand Film & Proof-Driven Marketing Studio",
  description:
    "Founded in 2025, KreaitX helps capable companies overcome the credibility gap with cinematic brand films and proof-driven positioning.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About KreaitX — Brand Film & Proof-Driven Marketing Studio",
    description:
      "Founded in 2025, KreaitX helps capable companies overcome the credibility gap with cinematic brand films and proof-driven positioning.",
    url: `${siteConfig.url}/about`,
    type: "website",
    siteName: siteConfig.name,
  },
};

const aboutValues = [
  {
    title: "Evidence Over Invention",
    description: "We don't invent clever marketing claims. We uncover the verified proof your company already has and build your presentation strictly around it.",
  },
  {
    title: "Discernment Over Volume",
    description: "More content will not close your credibility gap. We focus on producing fewer, higher-impact assets that convince high-value decision-makers.",
  },
  {
    title: "Direct Practitioner Access",
    description: "You work directly with the creative directors, cinematographers, and brand strategists creating your work. Zero account layers or translation loss.",
  },
  {
    title: "Guaranteed Fixed USD Pricing",
    description: "Every engagement begins with a defined scope and a fixed price in USD. No hidden fees, unexpected overages, or open-ended hourly billing.",
  },
];

export const dynamic = "force-static";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About KreaitX",
    description: siteConfig.description,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressCountry: siteConfig.location.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contact.email,
        contactType: "customer service",
      },
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
                <span>01 // About KreaitX</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Proof first. <br />
                <span className="text-[#3047D5]">Production second.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#3A4454] leading-relaxed font-sans font-normal max-w-2xl">
                KreaitX is a brand film and proof-driven marketing studio founded in 2025. We help capable companies communicate their real capabilities more convincingly by identifying the proof they already possess, defining one clear positioning claim, and producing the films, design, and marketing needed to communicate that claim to clients, partners, and investors.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="font-bold shadow-brand-button">
                  Book a Consultation
                </Button>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 text-[#3047D5]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 4 Company Origin Stats (Exact from PDF Page 2) */}
      <section className="bg-[#F7F8FC] py-14 sm:py-18 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                Founded
              </span>
              <span className="text-3xl font-display font-bold text-[#10172A] mt-2 block">
                2025
              </span>
              <p className="text-xs text-[#6A7180] mt-1 font-sans">
                Brand film &amp; proof-driven studio
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                Core Focus
              </span>
              <span className="text-xl font-display font-bold text-[#3047D5] mt-2 block leading-tight">
                Brand Films
              </span>
              <p className="text-xs text-[#6A7180] mt-1 font-sans">
                &amp; Proof-driven marketing
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                Delivery Model
              </span>
              <span className="text-lg font-display font-bold text-[#10172A] mt-2 block leading-snug">
                Core + Network
              </span>
              <p className="text-xs text-[#6A7180] mt-1 font-sans">
                Specialist creative practitioners
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6A7180] block">
                Geographic Reach
              </span>
              <span className="text-3xl font-display font-bold text-[#10172A] mt-2 block">
                Worldwide
              </span>
              <p className="text-xs text-[#6A7180] mt-1 font-sans">
                US, Middle East, and global clients
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Credibility Gap Challenge */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              The Problem We Solve
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              Most capable companies have a credibility gap.
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              They do excellent work, but their external presence does not reflect it. Their website looks like everyone else&apos;s. Their credentials are buried in PDF proposals. Their best client results are never filmed. We fix this:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credibilityGapChallenge.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 rounded-xl bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#3047D5] uppercase tracking-wider block mb-3">
                    0{idx + 1} · Failure Mode
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#10172A] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C5CCDC]/60 text-xs font-mono text-[#10172A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3047D5]" />
                  <span>Solved through proof</span>
                </div>
              </div>
            ))}
          </div>

          {/* Centerpiece Statement Banner */}
          <div className="mt-14 sm:mt-20 rounded-2xl bg-[#10172A] text-white p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4364EF] block mb-3">
                Core Conviction
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
                &ldquo;More content will not close this gap. <br className="hidden sm:inline" />
                <span className="text-[#4364EF]">Better evidence will.</span>&rdquo;
              </blockquote>
              <p className="mt-4 text-sm sm:text-base text-[#C5CCDC] font-sans leading-relaxed">
                When prospective enterprise clients or investors review your company, they do not want to wade through generic fluff or empty taglines. They want to see undeniable proof of technical capability, customer praise, and real-world outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Operating Values */}
      <section className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              How we approach our work.
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              The four foundational standards that guide every brand film, design decision, and client relationship:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutValues.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-xl bg-white border border-[#C5CCDC] shadow-2xs hover:border-[#3047D5] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-[#3047D5]" />
                  <h3 className="text-xl font-display font-bold text-[#10172A]">
                    {val.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#6A7180] leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final Action CTA */}
      <CTASection />
    </>
  );
}
