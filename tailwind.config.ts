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
        softy: {
          purple: "#9333EA",
          "purple-dark": "#7E22CE",
          violet: "#8B5CF6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          blue: "#3B82F6",
          pink: "#EC4899",
          coral: "#F43F5E",
          canvas: "#FFFFFF",
          surface: "#F8FAFC",
          "surface-alt": "#F1F5F9",
          dark: "#0B0F19",
          "dark-card": "#111827",
          text: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0",
          "border-subtle": "rgba(226, 232, 240, 0.8)",
          "border-focus": "#A855F7"
        },
        kreaitx: {
          purple: "#9333EA",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          pink: "#EC4899",
          dark: "#0B0F19",
          canvas: "#FFFFFF",
          surface: "#F8FAFC",
          "surface-alt": "#F1F5F9",
          text: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"]
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
        softy: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 20px 40px -15px rgba(124, 58, 237, 0.12), 0 0 0 1px rgba(124, 58, 237, 0.15)",
        glow: "0 0 40px -10px rgba(147, 51, 234, 0.3)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.3)",
        button: "0 10px 25px -5px rgba(147, 51, 234, 0.35)"
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7928CA 0%, #FF0080 50%, #0070F3 100%)",
        "gradient-hero": "linear-gradient(135deg, #9333EA 0%, #6366F1 50%, #06B6D4 100%)",
        "gradient-button": "linear-gradient(135deg, #9333EA 0%, #4F46E5 100%)",
        "gradient-accent": "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
        "gradient-cyan-blue": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
        "gradient-subtle": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)"
      }
    }
  },
  plugins: []
};

export default config;
