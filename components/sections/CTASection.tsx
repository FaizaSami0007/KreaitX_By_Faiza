"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight } from "lucide-react";

export interface CTASectionProps {
  bg?: "light" | "dark" | "porcelain" | "white" | "peach";
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  bg = "white",
  className
}) => {
  const isPeach = bg === "peach";
  const bgClass = isPeach
    ? "bg-[#FCEDE6] border-t border-[#E8DFD8]"
    : "bg-white border-t border-[#E8DFD8]";

  const cardClass = isPeach
    ? "bg-white text-[#111111] border border-[#E8DFD8]"
    : "bg-[#FCEDE6] text-[#111111] border border-[#E8DFD8]";

  return (
    <section className={`${bgClass} py-20 sm:py-28 lg:py-32 relative ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        <Reveal yOffset={20}>
          <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-14 lg:p-20 shadow-sm ${cardClass}`}>
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EC5D17] px-3.5 py-1.5 rounded-md bg-white border border-[#E8DFD8] mb-6 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#EC5D17]" />
                <span>Next Step</span>
              </span>

              <h2 className="font-display text-[clamp(1.85rem,4.5vw,3.75rem)] font-bold text-[#111111] tracking-tight leading-[1.12]">
                Ready to build{" "}
                <span className="font-display font-bold text-[#EC5D17]">
                  what&apos;s next
                </span>
                ?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#666666] leading-relaxed font-sans font-normal max-w-2xl">
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
                  onClick={() =>
                    trackEvent("direct_contact_click", {
                      channel: "email",
                      location: "global_cta_section"
                    })
                  }
                  className="w-full sm:w-auto bg-white text-[#111111] border-[#E8DFD8] hover:border-[#111111] hover:bg-white min-h-[52px] px-5 sm:px-7 whitespace-nowrap justify-center shadow-subtle [&>span]:inline-flex [&>span]:items-center [&>span]:justify-center"
                >
                  <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                    <span>{siteConfig.contact.email}</span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[#111111] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Button>
              </div>

              <p className="mt-8 text-xs font-mono text-[#666666]">
                Direct consultation with senior leads • Studio location: {siteConfig.location.formatted}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
