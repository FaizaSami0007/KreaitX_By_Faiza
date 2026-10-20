"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { servicesData, siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-10 sm:pt-14 border-t border-[#333333] overflow-hidden transition-colors duration-200 bg-[#111111]">
      <Container size="default">
        {/* ========================================================= */}
        {/* 1. TOP CONTACT BANNER (Compact, low-height sleek strip)  */}
        {/* ========================================================= */}
        <div className="rounded-xl bg-[#EC5D17] text-white py-3.5 px-6 sm:px-8 mb-10 sm:mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
              Ready to start a project?
            </h3>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-bold text-[#111111] bg-white hover:bg-[#FCEDE6] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
            >
              Inquire Online →
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN FOOTER CONTENT COLUMNS (Compact, clean spacing)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand & Social Col */}
          <div className="col-span-2 lg:col-span-4 space-y-3.5">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-display font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17] group"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#EC5D17] font-extrabold transition-transform duration-200 group-hover:scale-105">
                X
              </span>
            </Link>

            <p className="text-xs text-[#E8DFD8]/80 leading-relaxed max-w-xs font-sans">
              Creative technology &amp; digital growth partner for modern brands.
            </p>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#EC5D17] hover:border-[#EC5D17] transition-all duration-200 flex items-center justify-center"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#EC5D17] hover:border-[#EC5D17] transition-all duration-200 flex items-center justify-center"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on X"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#EC5D17] hover:border-[#EC5D17] transition-all duration-200 flex items-center justify-center"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on GitHub"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#EC5D17] hover:border-[#EC5D17] transition-all duration-200 flex items-center justify-center"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="col-span-1 lg:col-span-3 space-y-2.5">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#EC5D17]">
              Solutions
            </p>
            <ul className="space-y-1.5 text-xs font-sans">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.id}`}
                    className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="col-span-1 lg:col-span-2 space-y-2.5">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#EC5D17]">
              Company
            </p>
            <ul className="space-y-1.5 text-xs font-sans">
              <li>
                <Link href="/about" className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E8DFD8]/80 hover:text-[#EC5D17] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="col-span-2 lg:col-span-3 space-y-2.5">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#EC5D17]">
              Connect
            </p>
            <div className="text-xs font-sans space-y-1.5 text-[#E8DFD8]/80">
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-white underline underline-offset-4 hover:text-[#EC5D17] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>{siteConfig.location.formatted}</p>
              <p>Timezone: {siteConfig.location.timezone}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 3. BOTTOM COPYRIGHT & LEGAL BAR                                          */}
      {/* ========================================================================= */}
      <div className="bg-[#0D0D0D] py-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-[#E8DFD8]/70 text-center sm:text-left font-sans">
            <p>© {currentYear} KreaitX. All rights reserved.</p>
            <div className="flex items-center gap-4 text-[#E8DFD8]/70">
              <span>Peshawar × Global</span>
              <Link href="/contact" className="hover:text-white transition-colors underline-offset-2 hover:underline">
                Privacy &amp; Terms
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
