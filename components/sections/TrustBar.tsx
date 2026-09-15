import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const sectors = [
  "Healthcare & MedTech",
  "Technology & Platforms",
  "Luxury Retail & Goods",
  "Financial Services",
  "Modern Consumer Brands"
];

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#F5F6F2] border-b border-[#14213D]/10 py-12 sm:py-16">
      <Container size="default">
        <Reveal yOffset={12}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#14213D]/60 mb-1">
                Ecosystem Breadth
              </p>
              <h2 className="text-lg sm:text-xl font-semibold text-[#14213D] tracking-tight">
                Built for ambitious businesses across diverse industries.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white text-xs font-medium text-[#14213D] border border-[#14213D]/10 shadow-[0_1px_3px_rgba(20,33,61,0.03)]"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
