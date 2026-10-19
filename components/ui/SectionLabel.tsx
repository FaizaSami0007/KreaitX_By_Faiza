import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
  theme?: "light" | "dark";
  variant?: "default" | "cyan" | "navy";
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  className,
  theme = "light",
  variant = "default"
}) => {
  const isDark = theme === "dark";

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {number && (
        <span
          className={cn(
            "font-mono text-xs sm:text-sm font-bold tracking-tight",
            variant === "cyan" || isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "w-5 h-[2px] rounded-full",
          variant === "cyan" || isDark ? "bg-[#FFD6A5]" : "bg-[#6A00F4]"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-sans font-bold uppercase tracking-[0.18em]",
          variant === "cyan" || isDark ? "text-[#FFD6A5]" : "text-[#6A00F4]"
        )}
      >
        {label}
      </span>
    </div>
  );
};
