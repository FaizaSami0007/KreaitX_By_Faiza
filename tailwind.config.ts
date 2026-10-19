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
          purple: "#6A00F4",
          "purple-deep": "#390080",
          plum: "#21113D",
          cream: "#FFD6A5",
          "cream-soft": "#FFF9F0",
          "cream-light": "#FFF0D9",
          lavender: "#F3ECFF",
          white: "#FFFFFF",
          primary: "#211832",
          secondary: "#625A70",
          border: "#E9E0F2",
          "border-dark": "rgba(255, 214, 165, 0.2)",
          // Aliases for continuity
          navy: "#6A00F4",
          deep: "#390080",
          porcelain: "#FFF9F0",
          surface: "#F3ECFF",
          cyan: "#FFD6A5",
          "cyan-soft": "#FFF0D9",
          "blue-muted": "#6A00F4",
          body: "#211832",
          steel: "#625A70",
          charcoal: "#21113D"
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
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        pill: "9999px"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(106, 0, 244, 0.04)",
        card: "0 8px 24px -8px rgba(33, 17, 61, 0.07), 0 2px 4px -1px rgba(33, 17, 61, 0.02)",
        "card-hover": "0 20px 40px -15px rgba(106, 0, 244, 0.18), 0 0 0 1px rgba(106, 0, 244, 0.3)",
        "brand-card": "0 10px 30px -10px rgba(33, 17, 61, 0.06), 0 4px 6px -2px rgba(33, 17, 61, 0.02)",
        "brand-hover": "0 20px 40px -15px rgba(106, 0, 244, 0.16), 0 0 0 1px rgba(106, 0, 244, 0.25)",
        "brand-button": "0 10px 25px -5px rgba(106, 0, 244, 0.35)",
        "glow-cream": "0 0 40px -10px rgba(255, 214, 165, 0.4)",
        "glow-purple": "0 0 40px -10px rgba(106, 0, 244, 0.3)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #21113D 0%, #390080 60%, #6A00F4 100%)",
        "brand-accent": "linear-gradient(135deg, #6A00F4 0%, #390080 50%, #FFD6A5 100%)",
        "brand-text-dark": "linear-gradient(135deg, #6A00F4 0%, #390080 60%, #21113D 100%)",
        "brand-text-light": "linear-gradient(135deg, #FFFFFF 0%, #FFF0D9 60%, #FFD6A5 100%)"
      }
    }
  },
  plugins: []
};

export default config;
