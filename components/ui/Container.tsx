import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10",
          size === "default" && "max-w-[1320px]",
          size === "narrow" && "max-w-[980px]",
          size === "wide" && "max-w-[1440px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

