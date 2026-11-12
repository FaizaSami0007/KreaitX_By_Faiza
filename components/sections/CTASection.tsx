"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";

export interface CTASectionProps {
  bg?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ bg, className }) => {
  return (
    <section className={`bg-white py-20 sm:py-24 lg:py-28 border-t border-[#C5CCDC] relative ${className || ""}`}>
      <Container size="default" className="relative z-10 max-w-[1320px]">
        <Reveal yOffset={20}>
          <div className="rounded-2xl bg-[#F7F8FC] border border-[#C5CCDC] p-8 sm:p-14 lg:p-16 shadow-2xs text-center flex flex-col items-center">
            
            {/* Category Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#3047D5] px-3.5 py-1.5 rounded-md bg-white border border-[#C5CCDC] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3047D5]" aria-hidden="true" />
              <span>Start The Conversation</span>
            </span>

            {/* Editorial Headline */}
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.25rem)] font-extrabold text-[#10172A] tracking-tight leading-[1.1] max-w-2xl">
              Ready to design <br className="hidden sm:inline" />
              <span className="text-[#3047D5]">measurable growth</span>?
            </h2>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-[#6A7180] leading-relaxed font-sans font-normal max-w-xl">
              Tell us about your upcoming initiative. We&apos;ll evaluate strategic positioning, cinematic production scope, and digital execution requirements together.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                withArrow
                onClick={() =>
                  trackEvent("service_cta_click", {
                    cta_location: "global_cta_section",
                    cta_text: "Book a consultation"
                  })
                }
                className="w-full sm:w-auto font-bold min-h-[50px] px-8 justify-center shadow-brand-button"
              >
                Book a consultation
              </Button>

              <a
                href="mailto:mehboobakbar@kreaitx.com"
                onClick={() =>
                  trackEvent("direct_contact_click", {
                    channel: "email",
                    location: "global_cta_section"
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[50px] rounded-lg text-sm font-semibold text-[#10172A] hover:text-[#3047D5] bg-white hover:bg-[#F7F8FC] border border-[#C5CCDC] hover:border-[#3047D5] transition-all duration-200 w-full sm:w-auto shadow-2xs group"
              >
                <Mail className="h-4 w-4 text-[#3047D5]" />
                <span>mehboobakbar@kreaitx.com</span>
              </a>
            </div>

            {/* Trust and Location Footnote */}
            <div className="mt-10 pt-6 border-t border-[#C5CCDC]/60 w-full max-w-md flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6A7180] gap-2">
              <span>Direct senior lead consultation</span>
              <span className="hidden sm:inline">·</span>
              <span>Peshawar, PK × Worldwide</span>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};
