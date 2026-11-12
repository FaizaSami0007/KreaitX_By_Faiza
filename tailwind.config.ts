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
          // Official 2026 Brand Color Palette (Synchronized with Official KreaitX Logo)
          white: "#FFFFFF",
          "cool-gray": "#F7F8FC",
          "light-gray": "#F7F8FC",
          blue: "#4364EF",
          "royal-blue": "#4364EF",
          "royal-blue-hover": "#3252DB",
          "logo-blue": "#4364EF",
          navy: "#10172A",
          "deep-navy": "#10172A",
          slate: "#3A4454",
          "slate-gray": "#3A4454",
          muted: "#6A7180",
          "muted-gray": "#6A7180",
          border: "#C5CCDC",
          "border-light": "#C5CCDC",
          "border-dark": "rgba(255, 255, 255, 0.12)",

          // Semantic Aliases
          canvas: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-alt": "#F7F8FC",
          primary: "#10172A",
          secondary: "#3A4454",
          heading: "#10172A",
          body: "#3A4454",
          accent: "#3047D5",
          dark: "#10172A",
          footer: "#10172A",

          // Backward-compatibility Aliases (cleanly remapped to Royal Blue & White theme)
          peach: "#F7F8FC",
          "pale-peach": "#F7F8FC",
          tint: "#F7F8FC",
          "pale-orange": "#F7F8FC",
          "pale-amber": "#F7F8FC",
          "pale-terracotta": "#F7F8FC",
          cream: "#F7F8FC",
          "cream-soft": "#F7F8FC",
          "cream-light": "#F7F8FC",
          lavender: "#FFFFFF",
          porcelain: "#FFFFFF",
          "cyan-soft": "#F7F8FC",

          orange: "#3047D5",
          "vibrant-orange": "#3047D5",
          "orange-hover": "#2538B8",
          amber: "#3047D5",
          "amber-hover": "#2538B8",
          terracotta: "#3047D5",
          "terracotta-hover": "#2538B8",
          purple: "#3047D5",
          cyan: "#3047D5",

          "dark-grey": "#3A4454",
          grey: "#3A4454",
          "warm-gray": "#6A7180",
          steel: "#6A7180",
          "blue-muted": "#6A7180",

          "dark-black": "#10172A",
          black: "#10172A",
          charcoal: "#10172A",
          "warm-charcoal": "#10172A",
          "purple-deep": "#10172A",
          plum: "#10172A",
          deep: "#10172A"
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
        subtle: "0 1px 3px rgba(16, 23, 42, 0.04), 0 1px 2px rgba(16, 23, 42, 0.02)",
        card: "0 4px 16px -4px rgba(16, 23, 42, 0.05), 0 1px 3px -1px rgba(16, 23, 42, 0.02)",
        "card-hover": "0 12px 28px -6px rgba(16, 23, 42, 0.08), 0 0 0 1px #C5CCDC",
        "brand-card": "0 4px 16px -4px rgba(16, 23, 42, 0.05)",
        "brand-hover": "0 12px 28px -6px rgba(16, 23, 42, 0.08)",
        "brand-button": "0 2px 10px rgba(67, 100, 239, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
