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
        "bg-[#CA6702] hover:bg-[#B25902] text-white shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#CA6702]",
      navy:
        "bg-[#34312F] hover:bg-[#433E3B] text-white hover:-translate-y-0.5 focus-visible:ring-[#34312F]",
      cyan:
        "bg-[#CA6702] hover:bg-[#B25902] text-white font-semibold shadow-brand-button hover:-translate-y-0.5 focus-visible:ring-[#CA6702]",
      gradient:
        "bg-[#34312F] hover:bg-[#433E3B] text-white hover:-translate-y-0.5 focus-visible:ring-[#34312F]",
      secondary:
        "bg-white text-[#34312F] border border-[#E5E1DA] hover:border-[#34312F] hover:bg-[#F7F5F0] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#34312F]",
      outline:
        "bg-transparent text-[#34312F] border border-[#E5E1DA] hover:border-[#34312F] hover:bg-white hover:-translate-y-0.5 focus-visible:ring-[#34312F]",
      dark:
        "bg-[#34312F] text-white hover:bg-[#433E3B] hover:-translate-y-0.5 focus-visible:ring-[#34312F]",
      ghost:
        "bg-transparent text-[#34312F] hover:text-[#CA6702] hover:bg-[#FFF0E0] focus-visible:ring-[#34312F]",
      white:
        "bg-white text-[#34312F] border border-[#E5E1DA] hover:border-[#34312F] hover:-translate-y-0.5 shadow-subtle focus-visible:ring-[#34312F]"
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
            : "text-[#34312F] group-hover:text-[#CA6702]",
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
