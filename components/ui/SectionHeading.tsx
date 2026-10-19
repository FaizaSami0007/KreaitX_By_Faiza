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
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
              withGradientEyebrow
                ? isDark
                  ? "bg-[#14213D] text-[#42C6D9] border border-cyan-500/30 shadow-sm"
                  : "bg-white text-[#003049] border border-slate-200/90 shadow-subtle"
                : eyebrowColor || (isDark ? "text-cyan-400" : "text-[#003049]")
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#42C6D9] animate-pulse" aria-hidden="true" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
