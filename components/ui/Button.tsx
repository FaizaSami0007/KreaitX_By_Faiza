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
        "bg-[#6A00F4] hover:bg-[#390080] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      navy:
        "bg-[#6A00F4] hover:bg-[#390080] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      cyan:
        "bg-[#FFD6A5] hover:bg-[#FFE0B8] text-[#21113D] font-bold shadow-sm hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      gradient:
        "bg-gradient-to-r from-[#6A00F4] via-[#390080] to-[#21113D] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      secondary:
        "bg-white text-[#211832] border border-[#E9E0F2] hover:border-[#6A00F4] hover:bg-[#FFF0D9] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#6A00F4]",
      outline:
        "bg-transparent text-[#211832] border border-[#E9E0F2] hover:border-[#6A00F4] hover:bg-[#F3ECFF] hover:text-[#6A00F4] hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      dark:
        "bg-[#21113D] text-white hover:bg-[#390080] hover:-translate-y-0.5 shadow-md focus-visible:ring-[#FFD6A5]",
      ghost:
        "bg-transparent text-[#211832] hover:text-[#6A00F4] hover:bg-[#F3ECFF] hover:-translate-y-0.5 focus-visible:ring-[#6A00F4]",
      white:
        "bg-white text-[#211832] hover:bg-[#FFF9F0] hover:-translate-y-0.5 shadow-card focus-visible:ring-[#6A00F4]"
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
            ? "text-[#21113D]"
            : "text-[#211832] group-hover:text-[#6A00F4]",
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
