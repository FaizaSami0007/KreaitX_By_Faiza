"use client";

import React from "react";
import { SolutionServiceSection } from "@/components/sections/SolutionServiceSection";
import { servicesData } from "@/data/siteData";

export const BrandingSection: React.FC = () => {
  const service = servicesData.find((s) => s.id === "branding") || servicesData[0];

  return (
    <SolutionServiceSection
      service={service}
      headline={{
        prefix: "Branding that builds",
        highlight: "trust & recognition"
      }}
      theme="light"
    />
  );
};
