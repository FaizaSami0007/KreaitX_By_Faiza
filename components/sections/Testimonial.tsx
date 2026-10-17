import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { trustPrinciples } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export const Testimonial: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] py-20 sm:py-28 lg:py-32 border-b border-slate-800 text-white">
      <Container size="default">
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              theme="dark"
              eyebrow="Working Principles"
              title={
                <>
                  Why ambitious businesses choose a{" "}
                  <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                    connected partner
                  </span>
                  .
                </>
              }
              description="We believe credibility is earned through transparency, disciplined execution, and measurable outcomes — not manufactured agency hype."
            />
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPrinciples.map((item, idx) => (
            <StaggerItem key={item.title}>
              <div className="group rounded-3xl bg-[#14213D] p-8 sm:p-10 border border-slate-800 shadow-card hover:shadow-card-hover hover:border-[#42C6D9]/50 h-full flex flex-col justify-between transition-all duration-300">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#42C6D9] px-3.5 py-1 rounded-full bg-white/10 border border-white/15 inline-block mb-4 uppercase tracking-wider">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-3 group-hover:text-[#42C6D9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span className="text-slate-400">Standard of Practice</span>
                  <span className="inline-flex items-center gap-1.5 text-[#42C6D9] font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-[#42C6D9]" />
                    KreaitX Verified
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
