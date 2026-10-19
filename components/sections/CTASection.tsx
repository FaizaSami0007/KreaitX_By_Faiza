"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";
import { Sparkles } from "lucide-react";

export interface CTASectionProps {
  bg?: "light" | "dark" | "porcelain" | "white";
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  bg = "light",
  className
}) => {
  const isDark = bg === "dark";
  const bgClass = isDark
    ? "bg-[#003049] border-t border-[#14213D]"
    : bg === "white"
    ? "bg-white border-t border-slate-200/80"
    : "bg-[#F7F8FA] border-t border-slate-200/80";

  return (
    <section className={`${bgClass} py-20 sm:py-28 lg:py-32 relative ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        <Reveal yOffset={20}>
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#003049] via-[#14213D] to-[#003049] text-white p-6 sm:p-12 lg:p-20 shadow-xl border border-white/10">
            {/* Ambient soft glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#42C6D9]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#42C6D9] px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6 shadow-subtle">
                <Sparkles className="h-3.5 w-3.5 text-[#42C6D9]" />
                <span>Next Step</span>
              </span>

              <h2 className="font-display text-[clamp(1.85rem,4.5vw,3.75rem)] font-bold text-white tracking-tight leading-[1.12]">
                Ready to build{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                  what&apos;s next
                </span>
                ?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-normal max-w-2xl">
                Tell us what you&apos;re working on. We&apos;ll evaluate the opportunity, technical scope, and practical delivery timeline together.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button
                  href="/contact"
                  variant="cyan"
                  size="lg"
                  withArrow
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "global_cta_section",
                      cta_text: "Start a Conversation"
                    })
                  }
                  className="w-full sm:w-auto font-bold min-h-[52px] shadow-brand-button"
                >
                  Start a Project
                </Button>

                <Button
                  href={`mailto:${siteConfig.contact.email}`}
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    trackEvent("direct_contact_click", {
                      channel: "email",
                      location: "global_cta_section"
                    })
                  }
                  className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20 min-h-[52px]"
                >
                  {siteConfig.contact.email}
                </Button>
              </div>

              <p className="mt-8 text-xs font-mono text-slate-300">
                Direct consultation with senior leads • Studio location: {siteConfig.location.formatted}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
