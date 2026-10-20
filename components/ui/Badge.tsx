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
    default: "bg-[#FFF0E8] text-[#EC5D17] border border-[#EC5D17]/20",
    gradient: "bg-[#34312F] text-white border border-white/10",
    outline: "bg-transparent text-[#6B6560] border border-[#E5E1DA]",
    purple: "bg-[#EC5D17] text-white border border-[#EC5D17]",
    cyan: "bg-[#FFF0E8] text-[#EC5D17] border border-[#EC5D17]/30",
    dark: "bg-[#34312F] text-white border border-white/10",
    muted: "bg-[#F7F5F0] text-[#6B6560] border border-[#E5E1DA]",
    navy: "bg-[#34312F] text-white border border-white/10",
    porcelain: "bg-[#F7F5F0] text-[#34312F] border border-[#E5E1DA]"
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
        <span className="h-1.5 w-1.5 rounded-full bg-[#EC5D17]" />
      )}
      {children}
    </span>
  );
};
