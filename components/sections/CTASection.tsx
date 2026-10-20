"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight } from "lucide-react";

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
    ? "bg-[#34312F] border-t border-white/10"
    : bg === "white"
    ? "bg-white border-t border-[#E5E1DA]"
    : "bg-[#F7F5F0] border-t border-[#E5E1DA]";

  return (
    <section className={`${bgClass} py-20 sm:py-28 lg:py-32 relative ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        <Reveal yOffset={20}>
          <div className="relative overflow-hidden rounded-2xl bg-[#34312F] text-white p-8 sm:p-14 lg:p-20 border border-white/10 shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E76F51] px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E76F51]" />
                <span>Next Step</span>
              </span>

              <h2 className="font-display text-[clamp(1.85rem,4.5vw,3.75rem)] font-bold text-white tracking-tight leading-[1.12]">
                Ready to build{" "}
                <span className="font-display font-bold text-[#E76F51]">
                  what&apos;s next
                </span>
                ?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#E5E1DA] leading-relaxed font-sans font-normal max-w-2xl">
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
                  className="w-full sm:w-auto font-bold min-h-[52px]"
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
                  className="w-full sm:w-auto bg-white/5 text-white border-white/15 hover:border-white/40 hover:bg-white/10 min-h-[52px]"
                >
                  <span>{siteConfig.contact.email}</span>
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>

              <p className="mt-8 text-xs font-mono text-[#E5E1DA]">
                Direct consultation with senior leads • Studio location: {siteConfig.location.formatted}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
