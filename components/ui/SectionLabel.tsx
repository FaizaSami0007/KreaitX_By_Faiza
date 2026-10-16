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
            variant === "cyan"
              ? "text-[#42C6D9]"
              : variant === "navy"
              ? "text-[#003049]"
              : isDark
              ? "text-[#42C6D9]"
              : "text-[#003049]"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "w-5 h-[2px] rounded-full",
          variant === "cyan"
            ? "bg-[#42C6D9]"
            : variant === "navy"
            ? "bg-[#003049]"
            : isDark
            ? "bg-[#42C6D9]"
            : "bg-[#003049]"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-sans font-bold uppercase tracking-[0.18em]",
          variant === "cyan"
            ? "text-[#42C6D9]"
            : variant === "navy"
            ? "text-[#003049]"
            : isDark
            ? "text-cyan-200"
            : "text-[#003049]"
        )}
      >
        {label}
      </span>
    </div>
  );
};
