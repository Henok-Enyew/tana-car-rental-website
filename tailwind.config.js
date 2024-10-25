/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0f172a",
        "color-primary": "#11d8c7",
        // "color-primary": "#00FFFF",
        "color-primary-light": "#00FFFF20",
        "color-primary-l": "#00FFFF60",
      },
    },
  },
  plugins: [],
};
