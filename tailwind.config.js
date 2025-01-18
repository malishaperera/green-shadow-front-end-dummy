/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Nature Green
        secondary: "#FF9800", // Vibrant Orange
        neutral: "#F9FAFB", // Light Background
        text: "#374151", // Dark Gray for Text
        border: "#E5E7EB", // Light Gray for Dividers
      }
    },
  },
  plugins: [],
}

