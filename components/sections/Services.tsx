import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/siteData";

export const Services: React.FC = () => {
  return (
    <section className="bg-[#F5F6F2] py-20 sm:py-28 lg:py-32 border-b border-[#14213D]/10">
      <Container size="default">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Connected Capabilities"
              title={
                <>
                  Everything your business needs to{" "}
                  <span className="font-serif-italic font-normal">move forward</span>.
                </>
              }
              description="From brand identity and cinematic production to performance marketing and digital platforms, KreaitX connects capabilities around the core challenge."
            />

            <div className="shrink-0">
              <Link
                href="/solutions"
                className="inline-flex items-center text-sm font-semibold text-[#14213D] hover:text-[#0E172B] transition-colors group"
              >
                <span>View Full Solutions Catalog</span>
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Services Grid with Visual Hierarchy */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {servicesData.map((service, index) => {
            // Asymmetrical layout: give first service 8 cols, 4th 4 cols, 7th full 8 cols, etc.
            const isWide = index === 0 || index === 6;
            const isMedium = index === 3;
            const colSpan = isWide
              ? "lg:col-span-8"
              : isMedium
              ? "lg:col-span-4"
              : "lg:col-span-4";

            return (
              <StaggerItem key={service.id} className={colSpan}>
                <Link
                  href={`/solutions#${service.id}`}
                  className="group flex flex-col justify-between h-full rounded-2xl bg-white p-7 sm:p-8 border border-[#14213D]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-card hover:border-[#14213D]/25 relative overflow-hidden"
                >
                  <div>
                    {/* Top Row: Category + Number */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#14213D]/60 mb-6">
                      <span className="px-2.5 py-1 rounded-md bg-[#F5F6F2] border border-[#14213D]/10 font-sans font-medium text-[#14213D]">
                        {service.category}
                      </span>
                      <span className="font-semibold text-sm text-[#14213D]/40">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#14213D] tracking-tight group-hover:text-[#0E172B] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Deliverables & Arrow */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-[#14213D]/80">
                      {service.deliverables.length} Key Deliverables
                    </span>
                    <span className="inline-flex items-center font-semibold text-[#14213D] group-hover:translate-x-0.5 transition-transform duration-200">
                      Explore Service
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
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
