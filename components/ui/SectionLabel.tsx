import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
  theme?: "light" | "dark";
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  className,
  theme = "light"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      {number && (
        <span
          className={cn(
            "font-serif text-sm sm:text-base font-normal",
            isDark ? "text-[#B2AD7F]" : "text-[#14213D]"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn("w-6 h-[1.5px]", isDark ? "bg-[#B2AD7F]/70" : "bg-[#B2AD7F]")}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.2em]",
          isDark ? "text-[#F4F1E8]/70" : "text-[#182231]/70"
        )}
      >
        {label}
      </span>
    </div>
  );
};
