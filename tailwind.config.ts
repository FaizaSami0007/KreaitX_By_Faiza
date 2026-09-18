import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./data/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        kreaitx: {
          "dark-blue": "#14213D",
          navy: "#14213D",
          "navy-dark": "#0D182B",
          "dove-white": "#F4F1E8",
          dove: "#F4F1E8",
          "warm-white": "#FAF8F2",
          "soft-surface": "#EEECE4",
          "green-gold": "#B2AD7F",
          gold: "#B2AD7F",
          "olive-dark": "#8D8A61",
          "pure-white": "#FFFFFF",
          text: "#182231",
          muted: "#667085",
          border: "#DEDCD3",
          "border-dark": "rgba(244, 241, 232, 0.12)",
          "border-subtle": "rgba(24, 34, 49, 0.08)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-instrument)", "Instrument Serif", "Georgia", "serif"],
        display: ["var(--font-instrument)", "Instrument Serif", "Georgia", "serif"]
      },
      maxWidth: {
        "content-max": "1320px",
        "reading-max": "680px"
      },
      letterSpacing: {
        eyebrow: "0.18em",
        hero: "-0.04em",
        tightest: "-0.05em"
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(24, 34, 49, 0.04), 0 4px 12px rgba(24, 34, 49, 0.03)",
        card: "0 4px 20px -2px rgba(24, 34, 49, 0.05), 0 2px 6px -1px rgba(24, 34, 49, 0.03)",
        elevated: "0 12px 32px -4px rgba(24, 34, 49, 0.07)"
      }
    }
  },
  plugins: []
};

export default config;
