import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { trustPrinciples } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export const Testimonial: React.FC = () => {
  return (
    <section id="principles" className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-28 lg:py-32 border-b border-[#E5E1DA] text-[#34312F]">
      <Container size="default" className="max-w-[1320px]">
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              theme="light"
              eyebrow="Working Principles"
              title={
                <>
                  Why ambitious businesses choose a{" "}
                  <span className="font-display font-bold text-[#FF5A1F]">
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
              <div className="group rounded-xl bg-white p-6 sm:p-8 lg:p-10 border border-[#E5E1DA] shadow-sm hover:border-[#FF5A1F] h-full flex flex-col justify-between transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF5A1F] px-3 py-1 rounded-md bg-[#FFF0E8] border border-[#E5E1DA] inline-block mb-4 uppercase tracking-wider">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#34312F] tracking-tight mb-3 group-hover:text-[#FF5A1F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#6B6560] leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E5E1DA] flex items-center justify-between text-xs sm:text-sm text-[#6B6560]">
                  <span className="font-medium text-[#34312F]">Studio Standard</span>
                  <span className="inline-flex items-center gap-1.5 text-[#FF5A1F] font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-[#FF5A1F]" />
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
