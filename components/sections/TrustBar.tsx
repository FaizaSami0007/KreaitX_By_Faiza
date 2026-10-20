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
    <section className="bg-[#FCEDE6] border-y border-[#E8DFD8] py-12 sm:py-16">
      <Container size="default">
        <Reveal yOffset={12}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-xs font-sans font-bold uppercase tracking-wider text-[#EC5D17] mb-1">
                Ecosystem Breadth
              </p>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                Built for ambitious businesses across diverse industries.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-md bg-white text-xs sm:text-sm font-sans font-medium text-[#111111] border border-[#E8DFD8] shadow-xs hover:border-[#EC5D17] hover:text-[#EC5D17] transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EC5D17] mr-2" />
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
