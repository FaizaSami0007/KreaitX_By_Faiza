"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";

export interface CTASectionProps {
  bg?: "light" | "dark" | "porcelain" | "white" | "peach" | "cool-gray";
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  bg = "white",
  className
}) => {
  const isAlt = bg === "peach" || bg === "cool-gray";
  const bgClass = isAlt
    ? "bg-[#F7F8FC] border-t border-[#C5CCDC]"
    : "bg-white border-t border-[#C5CCDC]";

  const cardClass = isAlt
    ? "bg-white text-[#10172A] border border-[#C5CCDC]"
    : "bg-[#F7F8FC] text-[#10172A] border border-[#C5CCDC]";

  return (
    <section className={`${bgClass} py-20 sm:py-28 lg:py-32 relative ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        <Reveal yOffset={20}>
          <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-14 lg:p-20 shadow-sm ${cardClass}`}>
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3047D5] px-3.5 py-1.5 rounded-md bg-white border border-[#C5CCDC] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3047D5]" />
                <span>Next Step</span>
              </span>

              <h2 className="font-display text-[clamp(1.65rem,3.2vw,2.75rem)] font-bold text-[#10172A] tracking-tight leading-[1.14]">
                Ready to build{" "}
                <span className="font-display font-bold text-[#3047D5]">
                  what&apos;s next
                </span>
                ?
              </h2>

              <p className="mt-5 text-[15px] sm:text-base text-[#6A7180] leading-relaxed font-sans font-normal max-w-2xl">
                Tell us what you&apos;re working on. We&apos;ll evaluate the opportunity, technical scope, and practical delivery timeline together.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-full">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  withArrow
                  onClick={() =>
                    trackEvent("service_cta_click", {
                      cta_location: "global_cta_section",
                      cta_text: "Start a Conversation"
                    })
                  }
                  className="w-full sm:w-auto font-bold min-h-[52px] px-6 sm:px-7 whitespace-nowrap justify-center shadow-brand-button"
                >
                  Start a Project
                </Button>

                <Button
                  href={`mailto:${siteConfig.contact.email}`}
                  variant="secondary"
                  size="lg"
                  withArrow
                  arrowPosition="top-right"
                  onClick={() =>
                    trackEvent("direct_contact_click", {
                      channel: "email",
                      location: "global_cta_section"
                    })
                  }
                  className="w-full sm:w-auto bg-white text-[#10172A] border-[#C5CCDC] hover:border-[#3047D5] hover:bg-white min-h-[52px] px-6 sm:px-7 whitespace-nowrap justify-center shadow-subtle"
                >
                  {siteConfig.contact.email}
                </Button>
              </div>

              <p className="mt-8 text-xs font-mono text-[#6A7180]">
                Direct consultation with senior leads • Studio location: {siteConfig.location.formatted}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
