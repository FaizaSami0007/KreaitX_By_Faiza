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
  eyebrowColor,
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
            "mb-3 text-xs font-mono font-bold uppercase tracking-[0.16em]",
            eyebrowColor || "text-[#3047D5]"
          )}
        >
          {eyebrow}
        </span>
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
