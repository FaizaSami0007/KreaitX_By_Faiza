import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2 } from "lucide-react";
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
    description: "While others rely on automated templates and superficial shortcuts, we prioritize typographic hierarchy, deep user empathy, and thoughtful architectural restraint."
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
      {/* About Page Hero with Custom 3D Silk Artwork */}
      <section className="relative overflow-hidden bg-white text-slate-900 min-h-[680px] lg:min-h-[760px] flex items-center justify-center py-20 lg:py-28 border-b border-slate-200/80">
        {/* Custom 3D Silk & Studio Geometry Artwork */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/about-hero-custom-bg.jpg"
            alt="KreaitX Studio Story, Philosophy & Peshawar Craftsmanship"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top sm:object-center select-none"
            quality={95}
          />
          {/* Seamless bottom fade into next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        </div>

        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-700 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 mb-6 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-purple-600 animate-pulse" />
                <span>Studio Story &amp; Philosophy</span>
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.05]">
                Where creative vision meets{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  technical reality
                </span>.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans font-normal max-w-2xl">
                KreaitX was founded with a singular conviction: businesses deserve a unified partner capable of shaping their brand narrative, filming their visual story, and engineering their digital infrastructure.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="w-full sm:w-auto min-h-[48px]">
                  Start a Project
                </Button>
                <a
                  href="#studio-story"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all duration-200 w-full sm:w-auto hover:-translate-y-0.5"
                >
                  Discover Our Story ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Story & Origin */}
      <section id="studio-story" className="bg-white py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-purple-600 mb-3 block">
                01 — THE ORIGIN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Creative + IT: <br />
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  The genesis of KreaitX.
                </span>
              </h2>

              <div className="mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-card">
                <div className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold">
                  Headquarters &amp; Origins
                </div>
                <div className="text-xl font-display font-bold text-slate-900">
                  {siteConfig.location.formatted}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Collaborating with forward-thinking local enterprises and international clients seeking unified creative and digital solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              <p>
                The name <strong className="text-slate-900 font-bold">KreaitX</strong> is a deliberate fusion of <strong className="text-purple-700 font-bold">Creative</strong> and <strong className="text-indigo-700 font-bold">IT</strong>. For years, businesses have been forced to choose between creative agencies that lack engineering depth and technical software houses that treat design and marketing as an afterthought.
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
      <section className="bg-slate-50/50 py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mb-16">
              <SectionHeading
                eyebrow="Our Philosophy"
                title={
                  <>
                    Values that govern{" "}
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      how we work
                    </span>.
                  </>
                }
                description="We guide every client engagement with disciplined principles designed to prioritize authenticity, craft, and tangible commercial success."
              />
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="group rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 h-full flex flex-col justify-between transition-all duration-300">
                  <div>
                    <span className="font-display text-sm font-bold text-purple-700 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 inline-block mb-4">
                      Principle 0{i + 1}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-3 group-hover:text-purple-700 transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
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
