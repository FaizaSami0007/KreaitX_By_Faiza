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
      "group inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#FF5A1F] hover:bg-[#E04812] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#FF5A1F]",
      navy:
        "bg-[#111111] hover:bg-[#252525] text-white hover:-translate-y-0.5 focus-visible:ring-[#111111]",
      cyan:
        "bg-[#FF5A1F] hover:bg-[#E04812] text-white font-semibold shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#FF5A1F]",
      gradient:
        "bg-[#111111] hover:bg-[#252525] text-white hover:-translate-y-0.5 focus-visible:ring-[#111111]",
      secondary:
        "bg-white text-[#111111] border border-[#E5E1DA] hover:border-[#111111] hover:bg-[#F7F5F0] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#111111]",
      outline:
        "bg-transparent text-[#111111] border border-[#E5E1DA] hover:border-[#111111] hover:bg-white hover:-translate-y-0.5 focus-visible:ring-[#111111]",
      dark:
        "bg-[#111111] text-white hover:bg-[#252525] hover:-translate-y-0.5 focus-visible:ring-[#111111]",
      ghost:
        "bg-transparent text-[#111111] hover:text-[#FF5A1F] hover:bg-[#FFF0E8] focus-visible:ring-[#111111]",
      white:
        "bg-white text-[#111111] border border-[#E5E1DA] hover:border-[#111111] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#111111]"
    };

    const sizeStyles = {
      sm: "text-[13px] px-3.5 py-1.5 min-h-[36px]",
      md: "text-[14px] px-5 py-2.5 min-h-[44px]",
      lg: "text-[15px] px-6 py-3 min-h-[48px]"
    };

    const arrowElement = withArrow && (
      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1",
          variant === "primary" || variant === "gradient" || variant === "dark" || variant === "navy" || variant === "cyan"
            ? "text-white/90"
            : "text-[#111111] group-hover:text-[#FF5A1F]",
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
