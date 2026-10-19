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
          navy: "#17324D",
          deep: "#14213D",
          porcelain: "#F4F7FA",
          surface: "#EDF2F6",
          white: "#FFFFFF",
          cyan: "#42C6D9",
          "cyan-soft": "#DCEEF2",
          "blue-muted": "#416779",
          primary: "#25313D",
          secondary: "#596A7B",
          steel: "#A8B3C2",
          charcoal: "#0B0F19",
          body: "#25313D",
          border: "#E2E8EF",
          "border-dark": "rgba(255, 255, 255, 0.12)"
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
        subtle: "0 2px 10px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 40px -15px rgba(0, 48, 73, 0.12), 0 0 0 1px rgba(66, 198, 217, 0.35)",
        "brand-card": "0 10px 30px -10px rgba(0, 48, 73, 0.06), 0 4px 6px -2px rgba(0, 48, 73, 0.02)",
        "brand-hover": "0 20px 40px -15px rgba(0, 48, 73, 0.12), 0 0 0 1px rgba(66, 198, 217, 0.25)",
        "brand-button": "0 10px 25px -5px rgba(0, 48, 73, 0.25)",
        "glow-cyan": "0 0 40px -10px rgba(66, 198, 217, 0.3)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #003049 0%, #14213D 60%, #003049 100%)",
        "brand-accent": "linear-gradient(135deg, #003049 0%, #14213D 50%, #42C6D9 100%)",
        "brand-text-dark": "linear-gradient(135deg, #003049 0%, #14213D 60%, #42C6D9 100%)",
        "brand-text-light": "linear-gradient(135deg, #FFFFFF 0%, #E2F8FA 60%, #42C6D9 100%)"
      }
    }
  },
  plugins: []
};

export default config;
