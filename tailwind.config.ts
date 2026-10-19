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
          orange: "#FF5A1F",
          "orange-hover": "#E04812",
          porcelain: "#F7F5F0",
          black: "#111111",
          white: "#FFFFFF",
          muted: "#66635F",
          border: "#E5E1DA",
          tint: "#FFF0E8",
          // Semantic mappings
          primary: "#111111",
          secondary: "#66635F",
          accent: "#FF5A1F",
          canvas: "#F7F5F0",
          surface: "#FFFFFF",
          "surface-alt": "#FFF0E8",
          dark: "#111111",
          "border-dark": "rgba(255, 255, 255, 0.12)",
          // Aliases for component continuity
          purple: "#FF5A1F",
          "purple-deep": "#111111",
          plum: "#111111",
          cream: "#F7F5F0",
          "cream-soft": "#F7F5F0",
          "cream-light": "#FFF0E8",
          lavender: "#FFFFFF",
          navy: "#111111",
          deep: "#111111",
          cyan: "#FF5A1F",
          "cyan-soft": "#FFF0E8",
          "blue-muted": "#66635F",
          body: "#111111",
          steel: "#66635F",
          charcoal: "#111111"
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
        "brand-button": "0 2px 8px rgba(255, 90, 31, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
