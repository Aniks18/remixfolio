/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", 
        secondary: "#4f46e5",
        accent: "#c026d3",
        background: "#0f172a",
        "text-primary": "#f8fafc",
        "text-secondary": "#cbd5e1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pixel-shift": "pixel-shift 0.5s steps(5) infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "pixel-shift": {
          "0%": { transform: "translateX(-1px)" },
          "100%": { transform: "translateX(1px)" },
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary)',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6366f1",
          "secondary": "#4f46e5",
          "accent": "#c026d3",
          "neutral": "#0f172a",
          "base-100": "#1e293b",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};