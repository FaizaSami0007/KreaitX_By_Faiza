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
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-600/30 blur-3xl animate-blob-1" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/30 to-indigo-600/30 blur-3xl animate-blob-2" />
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
        <div className="absolute top-1/4 -right-32 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
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
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-transparent blur-3xl animate-blob-1" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/20 via-indigo-400/15 to-transparent blur-3xl animate-blob-2" />
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
      {/* Top Center-Right Violet Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/4 h-[450px] w-[550px] rounded-full bg-gradient-to-tr from-purple-500/25 via-indigo-500/20 to-pink-500/20 blur-[90px] animate-blob-1" />
      {/* Top Left Cyan Glow */}
      <div className="absolute top-24 left-10 h-[380px] w-[420px] rounded-full bg-gradient-to-br from-cyan-400/25 via-sky-400/20 to-indigo-400/15 blur-[80px] animate-blob-2" />
      {/* Center Floating Accent */}
      <div className="absolute bottom-10 right-10 h-[350px] w-[450px] rounded-full bg-gradient-to-tl from-pink-400/20 via-purple-400/15 to-cyan-300/15 blur-[85px] animate-blob-3" />
    </div>
  );
}
