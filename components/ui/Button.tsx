import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      "group inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#3047D5] hover:bg-[#2538B8] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#3047D5]",
      navy:
        "bg-[#10172A] hover:bg-[#1E293B] text-white hover:-translate-y-0.5 focus-visible:ring-[#10172A]",
      cyan:
        "bg-[#3047D5] hover:bg-[#2538B8] text-white font-semibold shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#3047D5]",
      gradient:
        "bg-[#10172A] hover:bg-[#1E293B] text-white hover:-translate-y-0.5 focus-visible:ring-[#10172A]",
      secondary:
        "bg-white text-[#10172A] border border-[#C5CCDC] hover:border-[#3047D5] hover:bg-[#F7F8FC] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#3047D5]",
      outline:
        "bg-transparent text-[#10172A] border border-[#C5CCDC] hover:border-[#3047D5] hover:bg-white hover:-translate-y-0.5 focus-visible:ring-[#3047D5]",
      dark:
        "bg-[#10172A] text-white hover:bg-[#1E293B] hover:-translate-y-0.5 focus-visible:ring-[#10172A]",
      ghost:
        "bg-transparent text-[#10172A] hover:text-[#3047D5] hover:bg-[#F7F8FC] focus-visible:ring-[#3047D5]",
      white:
        "bg-white text-[#10172A] border border-[#C5CCDC] hover:border-[#3047D5] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#3047D5]"
    };

    const sizeStyles = {
      sm: "text-[13px] px-3.5 py-1.5 min-h-[36px]",
      md: "text-[14px] px-5 py-2.5 min-h-[44px]",
      lg: "text-[15px] px-6 py-3 min-h-[48px]"
    };

    const arrowElement = withArrow && (
      arrowPosition === "top-right" ? (
        <ArrowUpRight
          className={cn(
            "ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            variant === "primary" || variant === "gradient" || variant === "dark" || variant === "navy" || variant === "cyan"
              ? "text-white/90"
              : "text-[#10172A] group-hover:text-[#3047D5]"
          )}
          aria-hidden="true"
        />
      ) : (
        <ArrowRight
          className={cn(
            "ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1",
            variant === "primary" || variant === "gradient" || variant === "dark" || variant === "navy" || variant === "cyan"
              ? "text-white/90"
              : "text-[#10172A] group-hover:text-[#3047D5]"
          )}
          aria-hidden="true"
        />
      )
    );

    const content = (
      <>
        {icon && <span className="mr-2 inline-flex items-center shrink-0">{icon}</span>}
        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">{children}</span>
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
