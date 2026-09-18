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
              "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
              withGradientEyebrow
                ? isDark
                  ? "bg-purple-950/60 text-purple-300 border border-purple-800/60"
                  : "bg-purple-50 text-purple-700 border border-purple-200/80"
                : eyebrowColor || (isDark ? "text-purple-400" : "text-purple-600")
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1]",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
