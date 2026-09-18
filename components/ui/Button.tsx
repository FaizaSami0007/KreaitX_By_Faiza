import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "ghost" | "white" | "outline" | "gradient";
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
      "group inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-button hover:shadow-glow hover:-translate-y-0.5 focus-visible:ring-purple-500",
      gradient:
        "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-600 text-white shadow-button hover:shadow-glow hover:-translate-y-0.5 focus-visible:ring-purple-500",
      secondary:
        "bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 shadow-subtle focus-visible:ring-slate-400",
      outline:
        "bg-transparent text-slate-800 border border-slate-200 hover:border-purple-300 hover:bg-purple-50/50 hover:text-purple-700 hover:-translate-y-0.5 focus-visible:ring-purple-500",
      dark:
        "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-md focus-visible:ring-slate-700",
      ghost:
        "bg-transparent text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 hover:-translate-y-0.5 focus-visible:ring-purple-500",
      white:
        "bg-white text-slate-900 hover:bg-slate-50 hover:-translate-y-0.5 shadow-card focus-visible:ring-purple-500"
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 min-h-[38px]",
      md: "text-sm px-6 py-2.5 min-h-[46px]",
      lg: "text-base px-8 py-3.5 min-h-[52px]"
    };

    const arrowElement = withArrow && (
      <ArrowRight
        className={cn(
          "ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5",
          variant === "primary" || variant === "gradient" || variant === "dark"
            ? "text-white/90"
            : "text-purple-600",
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
