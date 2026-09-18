import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "white" | "outline";
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
      variant = "primary",
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
      "group inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#14213D] text-[#F4F1E8] hover:bg-[#0D182B] hover:-translate-y-0.5 shadow-subtle hover:shadow-card focus-visible:ring-[#B2AD7F]",
      secondary:
        "bg-[#FAF8F2] text-[#182231] border border-[#DEDCD3] hover:border-[#14213D] hover:bg-white hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#14213D]",
      outline:
        "bg-transparent text-[#182231] border border-[#DEDCD3] hover:border-[#14213D] hover:bg-[#FAF8F2] hover:-translate-y-0.5 focus-visible:ring-[#14213D]",
      dark:
        "bg-[#0D182B] text-[#F4F1E8] hover:bg-[#14213D] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#B2AD7F]",
      ghost:
        "bg-transparent text-[#182231] hover:bg-[#14213D]/5 hover:-translate-y-0.5 focus-visible:ring-[#14213D]",
      white:
        "bg-white text-[#182231] hover:bg-[#FAF8F2] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-white"
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 min-h-[40px] tracking-normal",
      md: "text-sm px-5 py-2.5 min-h-[46px] tracking-normal",
      lg: "text-base px-7 py-3.5 min-h-[52px] tracking-normal"
    };

    const arrowElement = withArrow && (
      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4 text-[#B2AD7F] transition-transform duration-200 ease-out group-hover:translate-x-1",
          arrowPosition === "top-right" && "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
