"use client";

import React from "react";
import { SolutionServiceSection } from "@/components/sections/SolutionServiceSection";
import { servicesData } from "@/data/siteData";

export const SocialMediaSection: React.FC = () => {
  const service = servicesData.find((s) => s.id === "social-media-management") || servicesData[2];

  return (
    <SolutionServiceSection
      service={service}
      headline={{
        prefix: "Social media with",
        highlight: "purpose & community"
      }}
      theme="light"
    />
  );
};
