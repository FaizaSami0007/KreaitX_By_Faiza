import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * "default": Standard official KreaitX horizontal logo for light backgrounds (Navbar, Mobile Menu).
   * "footer" / "dark-bg": Official logo with white wordmark for dark backgrounds (Deep Navy footer).
   * "symbol": Standalone official geometric X symbol.
   */
  variant?: "default" | "footer" | "dark-bg" | "symbol";
  className?: string;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "default",
  className,
  priority = false,
}) => {
  if (variant === "symbol") {
    return (
      <Image
        src="/images/kreaitx-symbol.png"
        alt="KreaitX brandmark"
        width={222}
        height={178}
        priority={priority}
        className={cn("h-7 w-auto object-contain", className)}
      />
    );
  }

  if (variant === "footer" || variant === "dark-bg") {
    return (
      <Image
        src="/images/kreaitx-logo-white.png"
        alt="KreaitX logo"
        width={864}
        height={179}
        priority={priority}
        className={cn("h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-90", className)}
      />
    );
  }

  return (
    <Image
      src="/images/kreaitx-logo-tight.png"
      alt="KreaitX logo"
      width={864}
      height={179}
      priority={priority}
      className={cn("h-7 sm:h-8 w-auto object-contain transition-opacity duration-200 hover:opacity-90", className)}
    />
  );
};
