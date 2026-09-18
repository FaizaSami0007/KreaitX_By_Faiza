import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Difference } from "@/components/sections/Difference";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Difference />
      <FeaturedWork />
      <ProcessSection />
      <Testimonial />
      <CTASection />
    </>
  );
}


