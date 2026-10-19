
interface GradientDecorationProps {
  className?: string;
  variant?: "hero" | "section" | "subtle" | "cta";
}

// In the minimal portfolio direction, decorative glowing blob animations are eliminated
// to preserve clean editorial presentation and focus on portfolio work.
export function GradientDecoration({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = "hero"
}: GradientDecorationProps) {
  return null;
}
