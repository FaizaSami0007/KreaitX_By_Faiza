import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "navy" | "dark" | "muted";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#14213D]/8 text-[#14213D] border border-[#14213D]/12",
    outline: "bg-transparent text-[#14213D] border border-[#14213D]/20",
    navy: "bg-[#14213D] text-[#F5F6F2]",
    dark: "bg-[#111111] text-[#F5F6F2]",
    muted: "bg-[#F5F6F2] text-[#14213D]/70 border border-[#14213D]/10",
    accent: "bg-[#B7B98A]/20 text-[#14213D] border border-[#B7B98A]/40"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-semibold",
    md: "text-xs px-3 py-1 font-medium tracking-normal"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
