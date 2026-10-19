import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "white" | "outline" | "gradient" | "navy" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  arrowPosition?: "right" | "top-right";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "navy",
      size = "md",
      href,
      withArrow = false,
      arrowPosition = "right",
      icon,
      children,
      className,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#17324D] hover:bg-[#14213D] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#416779]",
      navy:
        "bg-[#17324D] hover:bg-[#14213D] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#416779]",
      cyan:
        "bg-[#42C6D9] hover:bg-[#34B8CB] text-[#17324D] font-bold shadow-sm hover:-translate-y-0.5 focus-visible:ring-[#17324D]",
      gradient:
        "bg-gradient-to-r from-[#17324D] via-[#14213D] to-[#42C6D9] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#416779]",
      secondary:
        "bg-white text-[#25313D] border border-[#E2E8EF] hover:border-slate-300 hover:bg-[#F4F7FA] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#17324D]",
      outline:
        "bg-transparent text-[#25313D] border border-[#E2E8EF] hover:border-[#416779] hover:bg-[#F4F7FA] hover:text-[#17324D] hover:-translate-y-0.5 focus-visible:ring-[#416779]",
      dark:
        "bg-[#14213D] text-white hover:bg-[#17324D] hover:-translate-y-0.5 shadow-md focus-visible:ring-[#42C6D9]",
      ghost:
        "bg-transparent text-[#25313D] hover:text-[#17324D] hover:bg-[#EDF2F6] hover:-translate-y-0.5 focus-visible:ring-[#416779]",
      white:
        "bg-white text-[#25313D] hover:bg-[#F4F7FA] hover:-translate-y-0.5 shadow-card focus-visible:ring-[#416779]"
    };

    const sizeStyles = {
      sm: "text-[14px] px-4.5 py-2 min-h-[40px]",
      md: "text-[14px] sm:text-[15px] px-6 py-2.5 min-h-[46px]",
      lg: "text-[15px] sm:text-[16px] px-7 sm:px-8 py-3.5 min-h-[52px]"
    };

    const arrowElement = withArrow && (
      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5",
          variant === "primary" || variant === "gradient" || variant === "dark" || variant === "navy"
            ? "text-white/90"
            : variant === "cyan"
            ? "text-[#003049]"
            : "text-[#003049] group-hover:text-[#42C6D9]",
          arrowPosition === "top-right" && "group-hover:-translate-y-1 group-hover:translate-x-1"
        )}
        aria-hidden="true"
      />
    );

    const content = (
      <>
        {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
        <span>{children}</span>
        {arrowElement}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          target={target || (isExternal ? "_blank" : undefined)}
          rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
