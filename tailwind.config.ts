import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Jost'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      colors: {
        gold: {
          50: "#fdf8ed",
          100: "#f9edcf",
          200: "#f2d98f",
          300: "#e8c04f",
          400: "#d4a017",
          500: "#b8860b",
          600: "#966b07",
          700: "#744f08",
          800: "#5a3d0c",
          900: "#3d2a0e",
        },
        charcoal: {
          50: "#f5f4f2",
          100: "#e8e6e1",
          200: "#d4d0c8",
          300: "#b8b3a8",
          400: "#969085",
          500: "#7a7468",
          600: "#625c52",
          700: "#4d4840",
          800: "#3a3630",
          900: "#1c1a17",
          950: "#0e0d0b",
        },
        cream: {
          50: "#fefcf8",
          100: "#fdf8ee",
          200: "#f9edcf",
          300: "#f3e0a8",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
