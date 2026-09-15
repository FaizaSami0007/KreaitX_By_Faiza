import React from "react";
import { Hero } from "@/components/sections/Hero";
import { EditorialTrustSection } from "@/components/sections/EditorialTrustSection";
import { IdeasToImpactSection } from "@/components/sections/IdeasToImpactSection";
import { Difference } from "@/components/sections/Difference";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialTrustSection />
      <IdeasToImpactSection />
      <Difference />
      <CTASection />
    </>
  );
}


