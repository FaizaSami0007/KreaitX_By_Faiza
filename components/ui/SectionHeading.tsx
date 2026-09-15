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
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
  eyebrowColor
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
        <span
          className={cn(
            "mb-3.5 inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em]",
            eyebrowColor
              ? eyebrowColor
              : isDark
              ? "text-[#B7B98A]"
              : "text-[#14213D]/75"
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-[-0.04em] leading-[1.06]",
          isDark ? "text-[#F5F6F2]" : "text-[#14213D]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            isDark ? "text-[#F5F6F2]/75" : "text-[#14213D]/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
