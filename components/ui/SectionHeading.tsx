import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  eyebrowColor?: string;
  withGradientEyebrow?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  eyebrowColor,
  withGradientEyebrow = true
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center mx-auto max-w-3xl",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right ml-auto",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3.5 inline-flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
              withGradientEyebrow
                ? isDark
                  ? "bg-[#1a1a1a] text-white border border-white/10"
                  : "bg-[#FFF0E8] text-[#FF5A1F] border border-[#FF5A1F]/20"
                : eyebrowColor || (isDark ? "text-[#FF5A1F]" : "text-[#FF5A1F]")
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", "bg-[#FF5A1F]")} aria-hidden="true" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-[clamp(26px,3.2vw,44px)] font-bold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-[#111111]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal",
            isDark ? "text-[#A19E98]" : "text-[#66635F]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
