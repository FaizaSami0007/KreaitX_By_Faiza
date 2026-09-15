"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        opacity: isVisible ? 1 : 0
      }}
      className={cn(
        "transition-all ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className, yOffset = 20 }) => {
  return (
    <Reveal yOffset={yOffset} className={className}>
      {children}
    </Reveal>
  );
};
