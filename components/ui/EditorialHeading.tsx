import React from "react";
import { cn } from "@/lib/utils";

interface EditorialHeadingProps {
  as?: "h1" | "h2" | "h3";
  title: string;
  accentWord?: string;
  accentPosition?: "last" | "inline";
  subtitle?: string;
  className?: string;
  theme?: "light" | "dark";
  size?: "hero" | "section" | "sub";
}

export const EditorialHeading: React.FC<EditorialHeadingProps> = ({
  as: Tag = "h2",
  title,
  accentWord,
  className,
  theme = "light",
  size = "section"
}) => {
  const isDark = theme === "dark";

  const sizeClasses = {
    hero: "text-[clamp(36px,5.5vw,78px)] leading-[1.04] tracking-[-0.04em]",
    section: "text-[clamp(32px,4.2vw,56px)] leading-[1.06] tracking-[-0.035em]",
    sub: "text-[clamp(24px,3vw,38px)] leading-[1.12] tracking-[-0.025em]"
  };

  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight",
        sizeClasses[size],
        isDark ? "text-white" : "text-[#34312F]",
        className
      )}
    >
      {accentWord && title.includes(accentWord) ? (
        <>
          {title.split(accentWord)[0]}
          <span className="font-display font-bold text-[#EC5D17]">
            {accentWord}
          </span>
          {title.split(accentWord)[1]}
        </>
      ) : (
        title
      )}
    </Tag>
  );
};
