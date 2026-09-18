import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About KreaitX — Creative Technology Studio",
  description: "Learn why KreaitX was founded to unite creative storytelling, marketing strategy, and software engineering under one roof in Peshawar, Pakistan."
};

const values = [
  {
    title: "Connected Over Isolated",
    description: "We reject the idea that branding, filming, and coding belong in disconnected silos. The strongest digital experiences are conceived, directed, and engineered together."
  },
  {
    title: "Human Craft in the Age of Noise",
    description: "While others rely on automated templates and superficial gradients, we prioritize typographic hierarchy, deep user empathy, and thoughtful architectural restraint."
  },
  {
    title: "Business Impact Over Vanity Metrics",
    description: "A visually stunning website or video that doesn't convert users or clarify value is not a victory. Everything we build is judged by its contribution to client growth."
  },
  {
    title: "Peshawar Craftsmanship, Global Caliber",
    description: "We are proud to build and scale from Peshawar, Khyber Pakhtunkhwa — proving that world-class creative technology and disciplined execution flourish anywhere talent and dedication meet."
  }
];

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      {/* Cinematic About Page Hero with User-Provided Art */}
      <section className="relative overflow-hidden bg-[#14213D] text-[#F5F6F2] min-h-[75vh] flex items-center justify-center py-20 lg:py-28 border-b border-[#F5F6F2]/10">
        {/* User-Provided Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-bg.png"
            alt="KreaitX Studio Collective — Same People, Bigger Possibilities in Peshawar"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />
          {/* Atmospheric gradient overlay for text readability */}
          <div className="absolute inset-0 bg-[#14213D]/70 via-[#14213D]/50 to-[#14213D]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14213D] via-transparent to-[#14213D]/60" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#B7B98A] px-4 py-1.5 rounded-full bg-white/10 border border-[#F5F6F2]/15 mb-6 inline-block backdrop-blur-md">
                Studio Story &amp; Philosophy
              </span>
              <h1 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
                Where creative vision meets{" "}
                <span className="font-serif-italic font-normal text-[#B7B98A]">
                  technical reality
                </span>.
              </h1>
              <p className="mt-6 text-[clamp(14px,1.5vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
                KreaitX was founded with a singular conviction: businesses deserve a unified partner capable of shaping their brand narrative, filming their visual story, and engineering their digital infrastructure.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="white" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#studio-story"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-medium text-[#F5F6F2] bg-white/10 hover:bg-white/20 border border-[#F5F6F2]/20 backdrop-blur-md transition-all duration-200 w-full sm:w-auto"
                >
                  Discover Our Story ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Story & Origin */}
      <section id="studio-story" className="bg-[#F4F1E8] py-20 sm:py-28 border-b border-[#DEDCD3]">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                01 — THE ORIGIN
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#14213D] tracking-tight leading-tight">
                Creative + IT: <br />
                The genesis of KreaitX.
              </h2>

              <div className="mt-8 p-6 rounded-xl bg-[#FAF8F2] border border-[#DEDCD3] space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#667085]">
                  Headquarters &amp; Origins
                </div>
                <div className="text-lg font-medium text-[#14213D]">
                  {siteConfig.location.formatted}
                </div>
                <p className="text-xs text-[#667085] leading-relaxed">
                  Collaborating with forward-thinking local enterprises and international clients seeking unified creative and digital solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#182231]/80 leading-relaxed">
              <p>
                The name <strong className="text-[#14213D] font-semibold">KreaitX</strong> is a deliberate fusion of <strong className="text-[#14213D] font-semibold">Creative</strong> and <strong className="text-[#14213D] font-semibold">IT</strong>. For years, businesses have been forced to choose between creative agencies that lack engineering depth and technical software houses that treat design and marketing as an afterthought.
              </p>
              <p>
                When brand designers, cinematographers, and developers work in separate silos, the customer experience fragments. Strategy gets diluted, timelines drag out, and the end product feels disconnected.
              </p>
              <p>
                KreaitX bridges this divide. We assemble multidisciplinary teams under one roof in Peshawar to deliver seamless brand identity, cinematic video production, performance marketing, and bespoke web platforms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Studio Values */}
      <section className="bg-[#FAF8F2] py-20 sm:py-28 border-b border-[#DEDCD3]">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    Values that govern{" "}
                    <span className="font-serif-italic font-normal">how we work</span>.
                  </>
                }
                description="We guide every client engagement with disciplined principles designed to prioritize authenticity, craft, and tangible commercial success."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl bg-[#F4F1E8] p-8 sm:p-10 border border-[#DEDCD3] h-full flex flex-col justify-between transition-all duration-200">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#14213D] px-2.5 py-1 rounded-md bg-white border border-[#DEDCD3] inline-block mb-4">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl font-normal text-[#14213D] tracking-tight mb-3">
                      {v.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </>
  );
}
