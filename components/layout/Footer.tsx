import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { servicesData, siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F5F0] text-[#34312F] pt-12 sm:pt-16 border-t border-[#E5E1DA] overflow-hidden">
      <Container size="default">
        {/* ========================================================= */}
        {/* 1. TOP CONTACT BANNER (Inspired by reference screenshot) */}
        {/* ========================================================= */}
        <div className="rounded-2xl bg-[#FF5A1F] text-white p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.18em] text-white/90">
                Start a Project
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Have an upcoming product, rebrand, or marketing initiative?
              </h3>
              <p className="text-sm text-white/90 font-sans leading-relaxed">
                Let&apos;s evaluate the scope together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 min-h-[46px] rounded-lg text-sm font-bold text-[#FF5A1F] bg-white hover:bg-[#F7F5F0] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-center"
              >
                Inquire Online →
              </Link>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center px-5 py-3 min-h-[46px] rounded-lg text-sm font-medium text-white border border-white/40 hover:bg-white/10 transition-all duration-200 text-center"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN FOOTER CONTENT COLUMNS                            */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 border-b border-[#E5E1DA]">
          {/* Brand & Social Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-display font-bold tracking-tight text-[#34312F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] group min-h-[44px]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#FF5A1F] font-extrabold transition-transform duration-200 group-hover:scale-105">
                X
              </span>
            </Link>

            <p className="text-sm text-[#6B6560] leading-relaxed max-w-sm font-sans">
              One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
            </p>

            {/* Social Icons row (matching reference screenshot) */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E1DA] text-[#34312F] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-200 flex items-center justify-center shadow-2xs"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E1DA] text-[#34312F] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-200 flex items-center justify-center shadow-2xs"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on X"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E1DA] text-[#34312F] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-200 flex items-center justify-center shadow-2xs"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on GitHub"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E1DA] text-[#34312F] hover:text-white hover:bg-[#FF5A1F] hover:border-[#FF5A1F] transition-all duration-200 flex items-center justify-center shadow-2xs"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-[#6B6560] space-y-1 font-sans">
              <p className="font-semibold text-[#34312F]">Location &amp; Studio</p>
              <p>{siteConfig.location.formatted}</p>
              <p>Timezone: {siteConfig.location.timezone}</p>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#FF5A1F]">
              Solutions
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.id}`}
                    className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#FF5A1F]">
              Company
            </p>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/about" className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  About KreaitX
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Insights &amp; Essays
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6B6560] hover:text-[#FF5A1F] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Connect Col */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#FF5A1F]">
              Start a Project
            </p>
            <p className="text-sm text-[#6B6560] leading-relaxed font-sans">
              Have an upcoming product, rebrand, or marketing initiative? Let&apos;s evaluate the scope together.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-block text-sm font-medium text-[#34312F] underline underline-offset-4 hover:text-[#FF5A1F] transition-colors py-0.5"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white bg-[#FF5A1F] hover:bg-[#E04812] px-5 py-2.5 min-h-[42px] rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              >
                Inquire Online →
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 3. DISTINCTIVE CURVED BOTTOM EDGE & ORANGE FINISH (Matching reference)   */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none -mb-px pt-8">
        <svg
          className="w-full h-7 sm:h-11 text-[#FF5A1F] block"
          viewBox="0 0 1440 44"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,44 Q720,0 1440,44 L1440,44 L0,44 Z" />
        </svg>
      </div>

      <div className="bg-[#FF5A1F] text-white pt-2 pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/95 text-center sm:text-left">
            <p>© {currentYear} KreaitX Creative Technology. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/90">
              <span>Peshawar × Global</span>
              <Link href="/contact" className="hover:text-white transition-colors py-1 underline-offset-4 hover:underline">
                Privacy &amp; Working Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
