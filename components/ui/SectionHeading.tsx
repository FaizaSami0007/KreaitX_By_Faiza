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
                  ? "bg-[#21113D] text-[#FFD6A5] border border-[#FFD6A5]/30 shadow-sm"
                  : "bg-[#F3ECFF] text-[#6A00F4] border border-[#E9E0F2] shadow-subtle"
                : eyebrowColor || (isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]")
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", isDark ? "bg-[#FFD6A5]" : "bg-[#6A00F4]")} aria-hidden="true" />
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-display text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight leading-[1.12]",
          isDark ? "text-white" : "text-[#211832]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal",
            isDark ? "text-slate-300" : "text-[#625A70]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
