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
          "dove-white": "#F5F6F2",
          "green-gold": "#B7B98A",
          "pure-white": "#FFFFFF",
          midnight: "#0E172B",
          black: "#111111",
          border: "rgba(20, 33, 61, 0.10)",
          "border-dark": "rgba(245, 246, 242, 0.12)",
          "border-subtle": "rgba(20, 33, 61, 0.06)",
          muted: "#5A6578"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-instrument)", "Instrument Serif", "Georgia", "serif"],
        display: ["var(--font-instrument)", "Instrument Serif", "Georgia", "serif"]
      },
      maxWidth: {
        "content-max": "1240px",
        "reading-max": "680px"
      },
      letterSpacing: {
        eyebrow: "0.12em",
        hero: "-0.04em",
        tightest: "-0.05em"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(20, 33, 61, 0.04), 0 4px 12px rgba(20, 33, 61, 0.03)",
        card: "0 4px 20px -2px rgba(20, 33, 61, 0.05), 0 2px 6px -1px rgba(20, 33, 61, 0.03)",
        elevated: "0 12px 32px -4px rgba(20, 33, 61, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
