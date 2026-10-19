import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rudo: {
          primary: "#000000", // Pure Digital Gravity Black
          "primary-card": "#0A0A0C",
          "primary-light": "#121216",
          secondary: "#1E1E24",
          "secondary-light": "#2A2A32",
          accent: "#A825E8", // Vibrant Magenta/Violet matching main buttons
          "accent-hover": "#B828E6",
          "accent-glow": "#D946EF",
          "accent-red": "#E63946",
          "accent-muted": "rgba(168, 37, 232, 0.15)",
          dark: "#000000",
          surface: "rgba(10, 10, 12, 0.8)",
          border: "rgba(255, 255, 255, 0.1)",
          "border-subtle": "rgba(255, 255, 255, 0.06)",
          text: "#FFFFFF",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "Inter", "sans-serif"],
        arabic: ["Cairo", "IBM Plex Sans Arabic", "sans-serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 28s linear infinite",
        "marquee-right": "marqueeRight 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spark-glow": "sparkGlow 3s ease-in-out infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        sparkGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
