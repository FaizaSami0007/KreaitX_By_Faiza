import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { trustPrinciples } from "@/data/siteData";

export const Testimonial: React.FC = () => {
  return (
    <section className="bg-[#F5F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#14213D]/10">
      <Container size="default">
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Working Principles"
              title={
                <>
                  Why ambitious businesses choose a{" "}
                  <span className="font-serif-italic font-normal">connected partner</span>.
                </>
              }
              description="We believe credibility is earned through transparency, disciplined execution, and measurable outcomes — not manufactured agency hype."
            />
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPrinciples.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl bg-white p-8 sm:p-10 border border-[#14213D]/10 h-full flex flex-col justify-between hover:border-[#14213D]/20 hover:shadow-card transition-all duration-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#14213D] px-2.5 py-1 rounded bg-[#F5F6F2] border border-[#14213D]/10 inline-block mb-4">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#14213D] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Standard of Practice</span>
                  <span className="text-[#14213D] font-semibold">KreaitX Verified</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
