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
        isDark ? "divide-white/10" : "divide-[#C5CCDC]",
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
                    "w-10 h-10 sm:w-11 sm:h-11 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 shadow-subtle",
                    isDark
                      ? "border-white/10 bg-[#10172A] text-white group-hover:border-[#3047D5] group-hover:text-[#3047D5]"
                      : "border-[#C5CCDC] bg-white text-[#10172A] group-hover:border-[#3047D5] group-hover:text-[#3047D5]"
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
                      ? "text-white group-hover:text-[#3047D5]"
                      : "text-[#10172A] group-hover:text-[#3047D5]"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-sans font-normal leading-relaxed",
                    isDark ? "text-[#C5CCDC]/80" : "text-[#6A7180]"
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
                    ? "text-[#C5CCDC]/70 group-hover:text-[#3047D5] group-hover:translate-x-1"
                    : "text-[#6A7180] group-hover:text-[#3047D5] group-hover:translate-x-1"
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
