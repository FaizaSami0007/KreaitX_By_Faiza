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
    hero: "text-[clamp(30px,4.5vw,62px)] leading-[1.06] tracking-[-0.035em]",
    section: "text-[clamp(24px,2.8vw,40px)] leading-[1.08] tracking-[-0.03em]",
    sub: "text-[clamp(19px,2.2vw,30px)] leading-[1.14] tracking-[-0.025em]"
  };

  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight",
        sizeClasses[size],
        isDark ? "text-white" : "text-[#111111]",
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
