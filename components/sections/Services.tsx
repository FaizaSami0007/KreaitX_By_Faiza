import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/siteData";

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-28 border-b border-[#E5E1DA] text-[#34312F]">
      <Container size="default" className="relative z-10">
        {/* Section Header */}
        <Reveal yOffset={16}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16">
            <SectionHeading
              theme="light"
              eyebrow="Connected Capabilities"
              title={
                <>
                  Everything your business needs to{" "}
                  <span className="font-display font-bold text-[#EC5D17]">
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
                className="group inline-flex items-center text-sm font-sans font-bold text-[#34312F] hover:text-[#EC5D17] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
              >
                <span>View All Capabilities</span>
                <ArrowRight className="ml-1.5 h-4 w-4 text-[#EC5D17] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Services Grid with Balanced Architectural Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0 || index === 6; // Branding and Digital Solutions lead cards
            const colSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1";

            return (
              <StaggerItem key={service.id} className={colSpan}>
                <Link
                  href={`/solutions/${service.id}`}
                  className="group flex flex-col justify-between h-full rounded-xl bg-white p-6 sm:p-8 border border-[#E5E1DA] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EC5D17] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC5D17]"
                >
                  <div>
                    {/* Top Row: Category + Number */}
                    <div className="flex items-center justify-between text-xs font-sans text-[#6B6560] mb-5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FFF0E8] text-[#EC5D17] border border-[#E5E1DA] font-mono font-semibold uppercase tracking-wider text-[11px]">
                        {service.category}
                      </span>
                      <span className="font-display font-bold text-base text-[#34312F] group-hover:text-[#EC5D17] transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#34312F] tracking-tight group-hover:text-[#EC5D17] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base text-[#6B6560] leading-relaxed font-sans font-normal">
                      {service.description}
                    </p>

                    {/* Featured cards deliverable preview tags */}
                    {isFeatured && (
                      <div className="mt-4 flex flex-wrap gap-2 pt-1">
                        {service.deliverables.slice(0, 3).map((d) => (
                          <span
                            key={d}
                            className="text-xs font-sans font-medium px-2.5 py-0.5 rounded-md bg-[#F7F5F0] border border-[#E5E1DA] text-[#34312F]"
                          >
                            • {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Deliverables & Arrow */}
                  <div className="mt-7 pt-4 border-t border-[#E5E1DA] flex items-center justify-between text-xs sm:text-sm text-[#6B6560]">
                    <span className="font-medium text-[#34312F]">
                      {service.deliverables.length} Deliverables
                    </span>
                    <span className="inline-flex items-center font-bold text-[#34312F] group-hover:text-[#EC5D17] transition-all duration-200">
                      Explore Service
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5 text-[#EC5D17] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
