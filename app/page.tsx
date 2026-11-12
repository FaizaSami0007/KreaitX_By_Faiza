import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Difference } from "@/components/sections/Difference";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <Difference />
      <CTASection />
    </>
  );
}



