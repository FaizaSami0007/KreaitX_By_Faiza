import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/siteData";

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#003049] py-20 sm:py-28 lg:py-32 border-b border-[#14213D] text-white">
      {/* Background Soft Ambient Accents (No background images) */}
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-[#42C6D9]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-[#14213D]/60 blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              theme="dark"
              eyebrow="Connected Capabilities"
              title={
                <>
                  Everything your business needs to{" "}
                  <span className="font-serif italic font-normal bg-gradient-to-r from-white via-cyan-100 to-[#42C6D9] bg-clip-text text-transparent">
                    move forward
                  </span>
                  .
                </>
              }
              description="From brand identity and cinematic production to performance marketing and bespoke web platforms, KreaitX connects capabilities around real commercial goals."
            />

            <div className="shrink-0">
              <Link
                href="/solutions"
                className="group inline-flex items-center text-sm font-sans font-semibold text-[#42C6D9] hover:text-cyan-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
              >
                <span>View Full Solutions Catalog</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#42C6D9] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Services Grid with Rounded Deep Blue Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0; // Branding highlighted
            const colSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1";

            return (
              <StaggerItem key={service.id} className={colSpan}>
                <Link
                  href={`/solutions/${service.id}`}
                  className="group flex flex-col justify-between h-full rounded-3xl bg-[#14213D] p-5 sm:p-7 lg:p-9 border border-white/10 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[#42C6D9]/50 relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#42C6D9]"
                >
                  {/* Subtle top card gradient border accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#42C6D9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top Row: Category + Number */}
                    <div className="flex items-center justify-between text-xs font-sans text-slate-300 mb-6">
                      <span className="px-3.5 py-1 rounded-full bg-white/10 text-[#42C6D9] border border-white/15 font-mono font-semibold uppercase tracking-wider text-[11px]">
                        {service.category}
                      </span>
                      <span className="font-display font-bold text-lg text-slate-400 group-hover:text-[#42C6D9] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#42C6D9] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3.5 text-base text-slate-300 leading-relaxed font-sans font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Deliverables & Arrow */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                    <span className="font-medium text-slate-200">
                      {service.deliverables.length} Key Deliverables
                    </span>
                    <span className="inline-flex items-center font-semibold text-[#42C6D9] group-hover:text-cyan-200 group-hover:translate-x-0.5 transition-all duration-200">
                      Explore Service
                      <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#42C6D9] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
