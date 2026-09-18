import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { trustPrinciples } from "@/data/siteData";
import { CheckCircle2 } from "lucide-react";

export const Testimonial: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-28 lg:py-32 border-b border-slate-200/80">
      <Container size="default">
        <Reveal yOffset={16}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Working Principles"
              title={
                <>
                  Why ambitious businesses choose a{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
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
              <div className="group rounded-3xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-purple-200 h-full flex flex-col justify-between transition-all duration-300">
                <div>
                  <span className="text-xs font-semibold text-purple-700 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 inline-block mb-4 uppercase tracking-wider">
                    Principle 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-3 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                  <span>Standard of Practice</span>
                  <span className="inline-flex items-center gap-1.5 text-purple-700 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
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
