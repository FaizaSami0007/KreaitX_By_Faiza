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
                  ? "bg-[#10172A] text-white border border-white/10"
                  : "bg-[#F7F8FC] text-[#3047D5] border border-[#3047D5]/20"
                : eyebrowColor || (isDark ? "text-[#3047D5]" : "text-[#3047D5]")
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", "bg-[#3047D5]")} aria-hidden="true" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-[clamp(22px,2.6vw,36px)] font-bold tracking-tight leading-[1.14]",
          isDark ? "text-white" : "text-[#10172A]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-[15px] sm:text-base leading-relaxed max-w-2xl font-sans font-normal",
            isDark ? "text-[#C5CCDC]" : "text-[#6A7180]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
