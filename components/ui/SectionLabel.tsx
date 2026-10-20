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
  className
}) => {

  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {number && (
        <span
          className={cn(
            "font-mono text-xs sm:text-sm font-bold tracking-tight",
            "text-[#EC5D17]"
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "w-4 h-[2px] rounded-full",
          "bg-[#EC5D17]"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-sans font-bold uppercase tracking-[0.16em]",
          "text-[#EC5D17]"
        )}
      >
        {label}
      </span>
    </div>
  );
};
