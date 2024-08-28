/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        light: 300,
      },
      keyframes: {
        move: {
          "100%": {transform:"translateX(100%)"},
        },
      },
      animation: {
        move: "move 0.2s infinite linear",
      },
    },
  },
  plugins: [],
};
