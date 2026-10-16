import React from "react";
import { cn } from "@/lib/utils";

interface GradientDecorationProps {
  className?: string;
  variant?: "hero" | "section" | "subtle" | "cta";
}

export function GradientDecoration({
  className,
  variant = "hero"
}: GradientDecorationProps) {
  if (variant === "cta") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#003049]/40 to-[#14213D]/40 blur-3xl animate-blob-1" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-[#42C6D9]/25 to-[#003049]/30 blur-3xl animate-blob-2" />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -right-32 h-72 w-72 rounded-full bg-[#003049]/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-72 w-72 rounded-full bg-[#42C6D9]/10 blur-3xl" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className
        )}
        aria-hidden="true"
      >
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-[#003049]/10 via-[#42C6D9]/8 to-transparent blur-3xl animate-blob-1" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-[#42C6D9]/15 via-[#14213D]/10 to-transparent blur-3xl animate-blob-2" />
      </div>
    );
  }

  // Hero default
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Top Center-Right Navy/Cyan Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/4 h-[450px] w-[550px] rounded-full bg-gradient-to-tr from-[#003049]/15 via-[#14213D]/10 to-[#42C6D9]/15 blur-[90px] animate-blob-1" />
      {/* Top Left Cyan Glow */}
      <div className="absolute top-24 left-10 h-[380px] w-[420px] rounded-full bg-gradient-to-br from-[#42C6D9]/20 via-[#42C6D9]/10 to-transparent blur-[80px] animate-blob-2" />
      {/* Center Floating Accent */}
      <div className="absolute bottom-10 right-10 h-[350px] w-[450px] rounded-full bg-gradient-to-tl from-[#003049]/10 via-[#42C6D9]/15 to-transparent blur-[85px] animate-blob-3" />
    </div>
  );
}
