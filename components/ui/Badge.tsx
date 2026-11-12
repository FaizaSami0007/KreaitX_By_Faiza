import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gradient" | "purple" | "cyan" | "dark" | "muted" | "navy" | "porcelain";
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
    default: "bg-[#F7F8FC] text-[#3047D5] border border-[#3047D5]/20",
    gradient: "bg-[#10172A] text-white border border-white/10",
    outline: "bg-transparent text-[#6A7180] border border-[#C5CCDC]",
    purple: "bg-[#3047D5] text-white border border-[#3047D5]",
    cyan: "bg-[#F7F8FC] text-[#3047D5] border border-[#3047D5]/30",
    dark: "bg-[#10172A] text-white border border-white/10",
    muted: "bg-[#F7F8FC] text-[#6A7180] border border-[#C5CCDC]",
    navy: "bg-[#10172A] text-white border border-white/10",
    porcelain: "bg-[#F7F8FC] text-[#10172A] border border-[#C5CCDC]"
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-semibold tracking-wide uppercase",
    md: "text-xs px-3 py-1 font-medium tracking-normal"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md font-sans transition-colors",
        variantStyles[variant as keyof typeof variantStyles] || variantStyles.default,
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {withDot && (
        <span className="h-1.5 w-1.5 rounded-full bg-[#3047D5]" />
      )}
      {children}
    </span>
  );
};
