/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0084FF",
          hover: "#0072de",
          light: "#EBF5FF",
          dark: "#0066cc",
        },
        brand: {
          navy: "#0A1629",
          slate: "#334155",
          muted: "#64748B",
          light: "#F8FAFC",
          cardBorder: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
        lora: ["var(--font-lora)", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 0 1px 1px rgba(0, 0, 0, 0.04)",
        hover: "0 20px 40px -10px rgba(0, 132, 255, 0.12), 0 0 1px 1px rgba(0, 132, 255, 0.1)",
        glow: "0 0 50px rgba(0, 132, 255, 0.15)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
