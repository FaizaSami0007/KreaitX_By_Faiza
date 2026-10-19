import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { trustPrinciples } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export const Testimonial: React.FC = () => {
  return (
    <section id="principles" className="relative overflow-hidden bg-[#FFF9F0] py-20 sm:py-28 lg:py-32 border-b border-[#E9E0F2] text-[#211832]">
      <Container size="default" className="max-w-[1320px]">
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              theme="light"
              eyebrow="Working Principles"
              title={
                <>
                  Why ambitious businesses choose a{" "}
                  <span className="font-display font-bold not-italic bg-gradient-to-r from-[#6A00F4] via-[#390080] to-[#6A00F4] bg-clip-text text-transparent">
                    connected partner
                  </span>
                  .
                </>
              }
              description="Credibility is earned through disciplined execution, architectural longevity, and tangible outcomes — not agency hyperbole."
            />
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {trustPrinciples.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="group rounded-3xl bg-white p-5 sm:p-8 lg:p-10 border border-[#E9E0F2] shadow-card hover:shadow-card-hover hover:border-[#6A00F4] h-full flex flex-col justify-between transition-all duration-300">
                <div>
                  <span className="text-xs font-mono font-bold text-[#6A00F4] px-3.5 py-1 rounded-full bg-[#F3ECFF] border border-[#E9E0F2] inline-block mb-4 uppercase tracking-wider">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#211832] tracking-tight mb-3 group-hover:text-[#6A00F4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#625A70] leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E9E0F2] flex items-center justify-between text-xs sm:text-sm text-[#625A70]">
                  <span className="font-medium text-[#211832]">Studio Standard</span>
                  <span className="inline-flex items-center gap-1.5 text-[#6A00F4] font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-[#6A00F4]" />
                    KreaitX Practice
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
