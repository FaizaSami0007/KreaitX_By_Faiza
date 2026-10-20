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
          white: "#FFFFFF",
          peach: "#FCEDE6",
          "pale-peach": "#FCEDE6",
          orange: "#EC5D17",
          "vibrant-orange": "#EC5D17",
          "orange-hover": "#D44D0D",
          "dark-grey": "#333333",
          grey: "#333333",
          "light-gray": "#E8DFD8",
          border: "#E8DFD8",
          "dark-black": "#111111",
          black: "#111111",
          primary: "#111111",
          secondary: "#333333",
          muted: "#666666",
          accent: "#EC5D17",
          canvas: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-alt": "#FCEDE6",
          dark: "#111111",
          footer: "#111111",
          "border-dark": "rgba(255, 255, 255, 0.12)",
          // Continuity aliases
          porcelain: "#FFFFFF",
          charcoal: "#111111",
          "warm-charcoal": "#111111",
          "warm-gray": "#666666",
          tint: "#FCEDE6",
          "pale-orange": "#FCEDE6",
          "pale-amber": "#FCEDE6",
          "pale-terracotta": "#FCEDE6",
          amber: "#EC5D17",
          "amber-hover": "#D44D0D",
          terracotta: "#EC5D17",
          "terracotta-hover": "#D44D0D",
          purple: "#EC5D17",
          "purple-deep": "#111111",
          plum: "#111111",
          cream: "#FCEDE6",
          "cream-soft": "#FCEDE6",
          "cream-light": "#FCEDE6",
          lavender: "#FFFFFF",
          navy: "#111111",
          deep: "#111111",
          cyan: "#EC5D17",
          "cyan-soft": "#FCEDE6",
          "blue-muted": "#666666",
          body: "#111111",
          steel: "#666666"
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
        "card-hover": "0 12px 28px -6px rgba(17, 17, 17, 0.1), 0 0 0 1px #E8DFD8",
        "brand-card": "0 4px 16px -4px rgba(17, 17, 17, 0.06)",
        "brand-hover": "0 12px 28px -6px rgba(17, 17, 17, 0.1)",
        "brand-button": "0 2px 8px rgba(236, 93, 23, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
