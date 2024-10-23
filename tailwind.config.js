/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0f172a",
        "color-primary": "#00FFFF",
        "color-primary-light": "#00FFFF20",
      },
    },
  },
  plugins: [],
};
