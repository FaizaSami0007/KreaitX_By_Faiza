import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CredibilityGapSection } from "@/components/sections/CredibilityGapSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { OfferingsSection } from "@/components/sections/OfferingsSection";
import { WhyKreaitXSection } from "@/components/sections/WhyKreaitXSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "KreaitX — We Design Growth | Brand Films & Proof-Driven Marketing",
  description:
    "KreaitX helps capable companies communicate their real capabilities more convincingly through cinematic brand films, proof packs, and strategic positioning.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "KreaitX — We Design Growth | Brand Films & Proof-Driven Marketing",
    description:
      "KreaitX helps capable companies communicate their real capabilities more convincingly through cinematic brand films, proof packs, and strategic positioning.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 01. Cover & Brand Positioning */}
      <Hero />

      {/* 02. The Credibility Gap Problem & Proof-First Solution */}
      <CredibilityGapSection />

      {/* 03. Selected Commercial Projects & Genuine References */}
      <FeaturedWork />

      {/* 04. Three-Stage Approach & The X-Ray Audit Framework */}
      <ApproachSection />

      {/* 05. Four Core Commercial Offerings & Fixed USD Pricing */}
      <OfferingsSection />

      {/* 06. Four Differentiators & Target Audience Trigger Situations */}
      <WhyKreaitXSection />

      {/* 07. Practitioner-Led Leadership & Dubai Advisory Board */}
      <LeadershipSection />

      {/* 08. Three Ways to Begin & Contact CTA */}
      <CTASection />
    </>
  );
}
