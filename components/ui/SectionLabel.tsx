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
              ? "text-purple-400"
              : "text-purple-600"
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
            ? "bg-purple-500"
            : "bg-gradient-to-r from-purple-600 to-indigo-600"
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
            ? "text-purple-300"
            : "text-purple-700"
        )}
      >
        {label}
      </span>
    </div>
  );
};
