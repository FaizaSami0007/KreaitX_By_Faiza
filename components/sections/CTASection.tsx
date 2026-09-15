import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/siteData";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-[#14213D] text-[#F5F6F2] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-hero-grid opacity-50 pointer-events-none" />

      <Container size="default" className="relative z-10">
        <Reveal yOffset={20}>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B7B98A] px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F5F6F2]/15 mb-6 backdrop-blur-sm">
              Next Step
            </span>

            <h2 className="text-[clamp(28px,5vw,56px)] font-semibold text-[#F5F6F2] tracking-[-0.04em] leading-[1.08]">
              Ready to build{" "}
              <span className="font-serif-italic font-normal text-[#B7B98A]">what&apos;s next</span>?
            </h2>

            <p className="mt-5 text-[clamp(15px,1.4vw,18px)] text-[#F5F6F2]/80 leading-relaxed font-normal max-w-2xl">
              Tell us what you&apos;re working on. We&apos;ll help clarify the opportunity, technical scope, and practical next step.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                variant="white"
                size="lg"
                withArrow
                className="w-full sm:w-auto font-semibold min-h-[48px]"
              >
                Start a Conversation
              </Button>

              <Button
                href={`mailto:${siteConfig.contact.email}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-transparent text-[#F5F6F2] border-[#F5F6F2]/30 hover:border-[#F5F6F2] hover:bg-white/10 min-h-[48px]"
              >
                {siteConfig.contact.email}
              </Button>
            </div>

            <p className="mt-8 text-xs text-[#F5F6F2]/50">
              Typical response time: within 24 business hours • Direct consultation with senior leads
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
