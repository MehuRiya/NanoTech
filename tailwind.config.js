/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        accent: "#e11d48",
        "accent-hover": "#be123c",
        surface: "#111827",
        "surface-alt": "#1f2937",
        "dark-bg": "#030712",
        // Light mode colors
        "light-bg": "#f9fafb",
        "light-surface": "#f3f4f6",
        "light-surface-alt": "#e5e7eb",
        "light-text": "#111827",
        "light-text-secondary": "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        slideUp: {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "from": { opacity: "0", transform: "translateY(-20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "from": { opacity: "0", transform: "scale(0.95)" },
          "to": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-accent": {
          "0%, 100%": { "box-shadow": "0 0 0 0 rgba(225, 29, 72, 0.7)" },
          "50%": { "box-shadow": "0 0 0 10px rgba(225, 29, 72, 0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "slide-up": "slideUp 0.4s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "fade-in-scale": "fadeInScale 0.4s ease-out",
        "pulse-accent": "pulse-accent 2s infinite",
      },
    },
  },
  plugins: [],
};
