import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient" | "purple" | "cyan" | "dark" | "muted" | "navy";
  size?: "sm" | "md";
  className?: string;
  withDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  withDot = false,
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#F3ECFF] text-[#6A00F4] border border-[#E9E0F2]",
    gradient: "bg-[#FFF0D9] text-[#21113D] border border-[#FFD6A5]",
    outline: "bg-transparent text-[#625A70] border border-[#E9E0F2]",
    purple: "bg-[#6A00F4] text-white border border-[#6A00F4]",
    cyan: "bg-[#FFF9F0] text-[#6A00F4] border border-[#E9E0F2]",
    dark: "bg-[#21113D] text-[#FFD6A5] border border-white/10",
    muted: "bg-[#FFF9F0] text-[#625A70] border border-[#E9E0F2]",
    navy: "bg-[#21113D] text-white border border-[#390080]",
    porcelain: "bg-[#FFF9F0] text-[#211832] border border-[#E9E0F2]"
  };

  const sizeStyles = {
    sm: "text-[11px] px-3 py-1 font-semibold tracking-wide uppercase",
    md: "text-xs px-3.5 py-1.5 font-medium tracking-normal"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full font-sans transition-colors",
        variantStyles[variant as keyof typeof variantStyles] || variantStyles.default,
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {withDot && (
        <span className="h-1.5 w-1.5 rounded-full bg-[#6A00F4] animate-pulse" />
      )}
      {children}
    </span>
  );
};
