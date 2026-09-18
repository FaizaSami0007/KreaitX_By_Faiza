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
        isDark ? "divide-white/10" : "divide-[#DEDCD3]",
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const Wrapper = item.href ? Link : "div";
        const wrapperProps = item.href ? { href: item.href } : {};

        return (
          <Wrapper
            key={item.title}
            {...(wrapperProps as any)}
            className={cn(
              "group flex items-center justify-between py-4 sm:py-4.5 transition-all duration-200",
              item.href && "cursor-pointer",
              index === 0 && "pt-0",
              index === items.length - 1 && "pb-0"
            )}
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              {Icon && (
                <div
                  className={cn(
                    "w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200",
                    isDark
                      ? "border-white/15 bg-white/5 text-[#B2AD7F] group-hover:border-[#B2AD7F]/50 group-hover:bg-[#B2AD7F]/10"
                      : "border-[#DEDCD3] bg-white text-[#B2AD7F] group-hover:border-[#14213D]/40 group-hover:bg-[#FAF8F2]"
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 stroke-[1.6]" />
                </div>
              )}
              <div className="space-y-0.5">
                <h4
                  className={cn(
                    "text-sm sm:text-base font-medium tracking-tight transition-colors",
                    isDark
                      ? "text-white group-hover:text-[#F4F1E8]"
                      : "text-[#14213D] group-hover:text-[#0D182B]"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-normal leading-relaxed",
                    isDark ? "text-white/60" : "text-[#667085]"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>

            {item.href && (
              <div
                className={cn(
                  "ml-3 shrink-0 transition-all duration-200",
                  isDark
                    ? "text-white/30 group-hover:text-[#B2AD7F] group-hover:translate-x-1"
                    : "text-[#14213D]/30 group-hover:text-[#B2AD7F] group-hover:translate-x-1"
                )}
              >
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </Wrapper>
        );
      })}
    </div>
  );
};
