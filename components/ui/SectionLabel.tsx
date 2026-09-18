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
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {number && (
        <span
          className={cn(
            "font-display text-sm sm:text-base font-bold",
            isDark ? "text-purple-400" : "text-purple-600"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "w-5 h-[2px] rounded-full",
          isDark ? "bg-purple-500" : "bg-gradient-to-r from-purple-600 to-indigo-600"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-sans font-bold uppercase tracking-wider",
          isDark ? "text-purple-300" : "text-purple-700"
        )}
      >
        {label}
      </span>
    </div>
  );
};
