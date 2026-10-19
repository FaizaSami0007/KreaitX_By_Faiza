import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CapabilityItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

interface CapabilityListProps {
  items: CapabilityItem[];
  theme?: "light" | "dark";
  className?: string;
}

export const CapabilityList: React.FC<CapabilityListProps> = ({
  items,
  theme = "light",
  className
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "divide-y",
        isDark ? "divide-white/10" : "divide-[#E9E0F2]",
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const itemContent = (
          <>
            <div className="flex items-center gap-3.5 sm:gap-4">
              {Icon && (
                <div
                  className={cn(
                    "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-300 shadow-subtle",
                    isDark
                      ? "border-white/10 bg-[#2b174d] text-[#FFD6A5] group-hover:border-[#6A00F4] group-hover:bg-[#390080]"
                      : "border-[#E9E0F2] bg-[#F3ECFF] text-[#6A00F4] group-hover:border-[#6A00F4]/50 group-hover:bg-white group-hover:scale-105"
                  )}
                >
                  <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[1.75]" />
                </div>
              )}
              <div className="space-y-0.5">
                <h4
                  className={cn(
                    "text-sm sm:text-base font-display font-bold tracking-tight transition-colors",
                    isDark
                      ? "text-white group-hover:text-[#FFD6A5]"
                      : "text-[#211832] group-hover:text-[#6A00F4]"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-sans font-normal leading-relaxed",
                    isDark ? "text-slate-300" : "text-[#625A70]"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>

            {item.href && (
              <div
                className={cn(
                  "ml-3 shrink-0 transition-all duration-300",
                  isDark
                    ? "text-[#FFD6A5]/60 group-hover:text-[#FFD6A5] group-hover:translate-x-1"
                    : "text-[#625A70] group-hover:text-[#6A00F4] group-hover:translate-x-1"
                )}
              >
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </>
        );

        const containerClasses = cn(
          "group flex items-center justify-between py-4 transition-all duration-300",
          item.href && "cursor-pointer",
          index === 0 && "pt-0",
          index === items.length - 1 && "pb-0"
        );

        if (item.href) {
          return (
            <Link key={item.title} href={item.href} className={containerClasses}>
              {itemContent}
            </Link>
          );
        }

        return (
          <div key={item.title} className={containerClasses}>
            {itemContent}
          </div>
        );
      })}
    </div>
  );
};
