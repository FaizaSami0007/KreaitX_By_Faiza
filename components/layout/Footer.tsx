"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { servicesData, siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10172A] text-[#C5CCDC] pt-12 sm:pt-16 border-t border-[#1E293B] overflow-hidden transition-colors duration-200">
      <Container size="default">

        {/* ========================================================= */}
        {/* MAIN FOOTER CONTENT COLUMNS                               */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 sm:pb-14">
          {/* Brand & Social Col */}
          <div className="col-span-2 lg:col-span-4 space-y-3.5">
            <Link
              href="/"
              className="inline-flex items-center text-xl font-display font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3047D5] group"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="text-[#3047D5] font-extrabold transition-transform duration-200 group-hover:scale-105">
                X
              </span>
            </Link>

            <p className="text-xs text-[#C5CCDC] leading-relaxed max-w-xs font-sans">
              Creative technology &amp; digital growth partner for modern brands.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#3047D5] hover:border-[#3047D5] transition-all duration-200 flex items-center justify-center shadow-xs"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#3047D5] hover:border-[#3047D5] transition-all duration-200 flex items-center justify-center shadow-xs"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on X"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#3047D5] hover:border-[#3047D5] transition-all duration-200 flex items-center justify-center shadow-xs"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KreaitX on GitHub"
                className="w-8 h-8 rounded-full bg-white/10 border border-white/15 text-white hover:text-white hover:bg-[#3047D5] hover:border-[#3047D5] transition-all duration-200 flex items-center justify-center shadow-xs"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
              Solutions
            </p>
            <ul className="space-y-2 text-xs font-sans">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.id}`}
                    className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
              Company
            </p>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/about" className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C5CCDC] hover:text-[#3047D5] hover:translate-x-0.5 transition-all duration-180 inline-block py-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5]">
              Connect
            </p>
            <div className="text-xs font-sans space-y-1.5 text-[#C5CCDC]">
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-white hover:text-[#3047D5] transition-colors no-underline"
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

      {/* Sub-footer Bottom Bar */}
      <div className="bg-[#0B1120] text-[#94A3B8] py-4 border-t border-[#1E293B] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-[#94A3B8] text-center sm:text-left font-sans">
            <p>© {currentYear} KreaitX. All rights reserved.</p>
            <div className="flex items-center gap-4 text-[#94A3B8]">
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
