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
        isDark ? "divide-slate-800" : "divide-slate-100",
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
              "group flex items-center justify-between py-4 transition-all duration-300",
              item.href && "cursor-pointer",
              index === 0 && "pt-0",
              index === items.length - 1 && "pb-0"
            )}
          >
            <div className="flex items-center gap-3.5 sm:gap-4">
              {Icon && (
                <div
                  className={cn(
                    "w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-300 shadow-subtle",
                    isDark
                      ? "border-slate-800 bg-slate-900 text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-950/40"
                      : "border-slate-200/80 bg-purple-50/70 text-purple-600 group-hover:border-purple-300 group-hover:bg-purple-100 group-hover:scale-105"
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
                      ? "text-white group-hover:text-purple-300"
                      : "text-slate-900 group-hover:text-purple-700"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "text-xs sm:text-[13px] font-sans font-normal leading-relaxed",
                    isDark ? "text-slate-400" : "text-slate-600"
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
                    ? "text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1"
                    : "text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1"
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
