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
        brand: {
          orange: "#E76F51",
          terracotta: "#E76F51",
          "orange-hover": "#D45A3C",
          "terracotta-hover": "#D45A3C",
          porcelain: "#F7F5F0",
          charcoal: "#34312F",
          "warm-charcoal": "#34312F",
          black: "#34312F", // alias for backward-compatibility
          white: "#FFFFFF",
          muted: "#6B6560",
          gray: "#6B6560",
          "warm-gray": "#6B6560",
          border: "#E5E1DA",
          tint: "#FBE9E3",
          "pale-terracotta": "#FBE9E3",
          // Semantic mappings
          primary: "#34312F",
          secondary: "#6B6560",
          accent: "#E76F51",
          canvas: "#F7F5F0",
          surface: "#FFFFFF",
          "surface-alt": "#FBE9E3",
          dark: "#34312F",
          "border-dark": "rgba(255, 255, 255, 0.12)",
          // Aliases for component continuity
          purple: "#E76F51",
          "purple-deep": "#34312F",
          plum: "#34312F",
          cream: "#F7F5F0",
          "cream-soft": "#F7F5F0",
          "cream-light": "#FBE9E3",
          lavender: "#FFFFFF",
          navy: "#34312F",
          deep: "#34312F",
          cyan: "#E76F51",
          "cyan-soft": "#FBE9E3",
          "blue-muted": "#6B6560",
          body: "#34312F",
          steel: "#6B6560"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"]
      },
      maxWidth: {
        "content-max": "1320px",
        "reading-max": "720px"
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "28px",
        pill: "9999px"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(17, 17, 17, 0.05), 0 1px 2px rgba(17, 17, 17, 0.03)",
        card: "0 4px 16px -4px rgba(17, 17, 17, 0.06), 0 1px 3px -1px rgba(17, 17, 17, 0.03)",
        "card-hover": "0 12px 28px -6px rgba(17, 17, 17, 0.1), 0 0 0 1px #E5E1DA",
        "brand-card": "0 4px 16px -4px rgba(17, 17, 17, 0.06)",
        "brand-hover": "0 12px 28px -6px rgba(17, 17, 17, 0.1)",
        "brand-button": "0 2px 8px rgba(231, 111, 81, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
