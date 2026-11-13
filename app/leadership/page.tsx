import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { leadershipProfile, advisoryBoard, siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Leadership & Advisory Board — KreaitX",
  description:
    "Meet Mehboob Akbar, Founder & CEO of KreaitX, and our senior Dubai Advisory Board driving enterprise governance and creative excellence.",
  alternates: {
    canonical: `${siteConfig.url}/leadership`,
  },
  openGraph: {
    title: "Leadership & Advisory Board — KreaitX",
    description:
      "Meet Mehboob Akbar, Founder & CEO of KreaitX, and our senior Dubai Advisory Board driving enterprise governance and creative excellence.",
    url: `${siteConfig.url}/leadership`,
    type: "website",
    siteName: siteConfig.name,
  },
};

export const dynamic = "force-static";

export default function LeadershipPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Leadership & Advisory Board",
    description: "Practitioner-led studio leadership and Dubai Advisory Board.",
    url: `${siteConfig.url}/leadership`,
    mainEntity: {
      "@type": "Person",
      name: leadershipProfile.name,
      jobTitle: leadershipProfile.title,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      image: `${siteConfig.url}${leadershipProfile.image}`,
      description: leadershipProfile.bio,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-white text-[#10172A] py-20 lg:py-28 border-b border-[#C5CCDC] overflow-hidden">
        <Container size="default" className="relative z-10 w-full text-center">
          <Reveal yOffset={16}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] px-3.5 py-1.5 rounded-md bg-[#F7F8FC] border border-[#C5CCDC] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                <span>06 // Leadership &amp; Advisory</span>
              </span>

              <h1 className="font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.06]">
                Practitioner-led. <br />
                <span className="text-[#3047D5]">Governed for institutional trust.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal max-w-2xl">
                We believe exceptional creative work requires leadership from the field. At KreaitX, you collaborate directly with active directors and strategists, guided by senior international governance.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button href="/contact" variant="primary" size="md" withArrow className="font-bold shadow-brand-button">
                  Book a Consultation
                </Button>
                <a
                  href="#advisory-board"
                  className="inline-flex items-center justify-center px-6 py-3 min-h-[48px] rounded-lg text-sm font-semibold text-[#10172A] bg-white hover:bg-[#F7F8FC] hover:text-[#3047D5] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200"
                >
                  Meet Advisory Board ↓
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder Deep Dive Section */}
      <section className="bg-white py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="rounded-2xl bg-[#F7F8FC] border border-[#C5CCDC] p-8 sm:p-12 lg:p-16 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Authentic Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-white border border-[#C5CCDC] p-3 shadow-xs overflow-hidden flex items-center justify-center">
                  <Image
                    src={leadershipProfile.image}
                    alt={`${leadershipProfile.name} — ${leadershipProfile.title}`}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs py-2 px-4 rounded-lg border border-[#C5CCDC] text-center shadow-xs">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5]">
                      9 Years Experience · Film &amp; Creative Tech
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio & Track Record */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
                    Founder &amp; Chief Executive Officer
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
                    {leadershipProfile.name}
                  </h2>
                  <p className="text-sm font-mono text-[#6A7180] mt-1">
                    Based in Khyber Pakhtunkhwa, Pakistan · Serving Clients Worldwide
                  </p>
                </div>

                <p className="text-base text-[#3A4454] leading-relaxed font-sans font-normal">
                  {leadershipProfile.bio} Mehboob has spent nearly a decade in the field directing cinematic brand films, technical product narratives, and crisis documentaries for global streaming platforms, enterprise technology startups, and government departments.
                </p>

                <p className="text-sm text-[#6A7180] leading-relaxed font-sans">
                  He leads creative direction, client positioning strategy, and quality assurance across every KreaitX project, ensuring that every asset produced directly proves client capability.
                </p>

                <div className="pt-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10172A] block mb-3">
                    Verified Production Track Record
                  </span>
                  <ul className="space-y-2.5">
                    {leadershipProfile.trackRecord.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#3A4454] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-[#3047D5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Dubai Advisory Board Section */}
      <section id="advisory-board" className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#C5CCDC]">
        <Container size="default">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] block mb-2">
              International Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#10172A] tracking-tight">
              Dubai Advisory Board
            </h2>
            <p className="mt-3 text-base text-[#6A7180] font-sans">
              Our Advisory Board in Dubai, UAE brings decades of enterprise governance, international commercial strategy, and financial controls to ensure KreaitX operates to world-class standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-2xl bg-white p-8 border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C5CCDC]">
                    <span className="text-xs font-mono font-semibold text-[#6A7180] uppercase tracking-wider">
                      {advisor.location}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3047D5]" />
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#10172A] tracking-tight">
                    {advisor.name}
                  </h3>

                  <span className="text-xs font-mono font-bold text-[#3047D5] block mt-1">
                    {advisor.role}
                  </span>

                  <p className="mt-4 text-sm text-[#6A7180] leading-relaxed font-sans">
                    {advisor.bio}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#C5CCDC]/60 flex items-center justify-between text-xs font-mono text-[#6A7180]">
                  <span>Advisory &amp; Strategy</span>
                  <Building2 className="h-4 w-4 text-[#3047D5]" />
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Model Callout */}
          <div className="mt-14 p-8 rounded-xl bg-white border border-[#C5CCDC] shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5] block mb-1">
                  Our Delivery Model
                </span>
                <h3 className="text-xl font-display font-bold text-[#10172A]">
                  Core Team + Specialist Network
                </h3>
                <p className="mt-2 text-sm text-[#6A7180] font-sans leading-relaxed">
                  You work directly with our senior creative leadership, supported by vetted specialists in sound design, motion graphics, and full-stack engineering. You pay for execution craft, never bloated agency overhead.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#3047D5] hover:bg-[#2538B0] transition-colors shrink-0 shadow-brand-button"
              >
                <span>Work With Our Team</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Action CTA */}
      <CTASection />
    </>
  );
}

