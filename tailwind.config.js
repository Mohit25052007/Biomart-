/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f2",
          100: "#e0ece0",
          200: "#c2d9c3",
          300: "#98bf9a",
          400: "#699e6d",
          500: "#48804d",
          600: "#35663a",
          700: "#2b5230",
          800: "#254128",
          900: "#1f3622",
          950: "#0f1e11",
        },
        moss: {
          50: "#f4f6ef",
          100: "#e6ebda",
          500: "#8a9a5b",
          600: "#6f7d47",
        },
        sand: {
          50: "#fbf9f3",
          100: "#f5f0e3",
          200: "#ece2c8",
          300: "#ddcda3",
          400: "#c8ac74",
        },
        clay: {
          500: "#d97a3f",
          600: "#c2632a",
        },
        ink: "#1b241c",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,30,20,0.04), 0 4px 16px rgba(20,30,20,0.06)",
        pop: "0 8px 30px rgba(20,30,20,0.12)",
      },
      borderRadius: {
        xl2: "1.1rem",
      },
    },
  },
  plugins: [],
};
