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
    default: "bg-purple-50 text-purple-700 border border-purple-200/80",
    gradient: "bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 text-purple-700 border border-purple-200/60",
    outline: "bg-transparent text-slate-700 border border-slate-200",
    purple: "bg-purple-100/80 text-purple-800 border border-purple-200",
    cyan: "bg-cyan-50 text-cyan-800 border border-cyan-200/80",
    dark: "bg-[#14213D] text-white border border-slate-800",
    muted: "bg-slate-100 text-slate-600 border border-slate-200",
    navy: "bg-[#003049] text-white border border-[#14213D]",
    porcelain: "bg-[#F7F8FA] text-[#003049] border border-slate-200/90"
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
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 animate-pulse" />
      )}
      {children}
    </span>
  );
};
