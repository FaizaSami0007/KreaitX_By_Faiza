import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /**
   * "default": Standard official KreaitX horizontal logo for light backgrounds (Navbar, Mobile Menu).
   * "footer": Official logo housed in a crisp white container for high contrast against Deep Navy footers.
   * "symbol": Standalone official geometric X symbol.
   */
  variant?: "default" | "footer" | "symbol";
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

  if (variant === "footer") {
    return (
      <span className="inline-flex items-center bg-white px-2.5 py-1 rounded-md border border-white/20 shadow-xs transition-opacity duration-200 hover:opacity-95">
        <Image
          src="/images/kreaitx-logo-tight.png"
          alt="KreaitX logo"
          width={864}
          height={179}
          priority={priority}
          className={cn("h-6 sm:h-7 w-auto object-contain", className)}
        />
      </span>
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

