import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
    screens: {
      'xs': '360px', // Para dispositivos muito pequenos (opcional)
      'sm': '640px', // A partir de smartphones
      'md': '768px', // Tablets
      'lg': '1024px', // Desktops
      'xl': '1280px', // Grandes telas
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
