"use client";

import React from "react";
import { SolutionServiceSection } from "@/components/sections/SolutionServiceSection";
import { servicesData } from "@/data/siteData";

export const DigitalMarketingSection: React.FC = () => {
  const service = servicesData.find((s) => s.id === "digital-marketing") || servicesData[1];

  return (
    <SolutionServiceSection
      service={service}
      headline={{
        prefix: "Marketing that delivers",
        highlight: "measurable growth"
      }}
      theme="dark"
    />
  );
};
