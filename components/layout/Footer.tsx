import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { servicesData, siteConfig } from "@/data/siteData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 sm:pt-20 pb-[max(3rem,env(safe-area-inset-bottom,0px))] border-t border-slate-800">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 sm:pb-16 border-b border-slate-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-display font-bold tracking-tight text-white focus-visible:outline-purple-500 group min-h-[44px]"
              aria-label="KreaitX — Home"
            >
              <span>Kreait</span>
              <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-extrabold transition-transform duration-200 group-hover:scale-105">
                X
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              One connected creative technology partner for businesses that need ideas, execution, and digital growth under one roof.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-300">Location &amp; Studio</p>
              <p>{siteConfig.location.formatted}</p>
              <p>Timezone: {siteConfig.location.timezone}</p>
            </div>
          </div>

          {/* Solutions Col */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-purple-400">
              Solutions
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions#${service.id}`}
                    className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-purple-400">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1">
                  About KreaitX
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1">
                  Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1">
                  Insights &amp; Essays
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-0.5 transition-all duration-180 inline-block py-1">
                  Contact Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Connect Col */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-sans font-semibold uppercase tracking-[0.18em] text-purple-400">
              Start a Project
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have an upcoming product, rebrand, or marketing initiative? Let&apos;s evaluate the scope together.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-purple-400 transition-colors py-1"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-5 py-2.5 min-h-[44px] rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-button"
              >
                Inquire Online →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} KreaitX Creative Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Peshawar × Global</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors py-1">
              Privacy &amp; Working Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
