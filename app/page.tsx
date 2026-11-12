import React from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutEditorialSection } from "@/components/sections/AboutEditorialSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ServicesPricingSection } from "@/components/sections/ServicesPricingSection";
import { SelectedWorkEditorial } from "@/components/sections/SelectedWorkEditorial";
import { WhyKreaitXSection } from "@/components/sections/WhyKreaitXSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { CTASection } from "@/components/sections/CTASection";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      {/* 01 Cover & Hero */}
      <Hero />

      {/* 02 About KreaitX — Page 2 of Company Profile */}
      <AboutEditorialSection />

      {/* 03 Our Approach & X-Ray Audit — Page 3 of Company Profile */}
      <ApproachSection />

      {/* 04 Services and Pricing — Page 4 of Company Profile */}
      <ServicesPricingSection />

      {/* 05 Selected Work — Page 5 of Company Profile */}
      <SelectedWorkEditorial />

      {/* 06 Why KreaitX — Page 6 of Company Profile */}
      <WhyKreaitXSection />

      {/* 07 Leadership — Page 7 of Company Profile */}
      <LeadershipSection />

      {/* 08 Contact & Inquiries — Page 8 of Company Profile */}
      <CTASection />
    </>
  );
}
