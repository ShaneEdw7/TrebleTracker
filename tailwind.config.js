/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "@tailwindcss/forms")],
  daisyui: {
    themes: ["light", "dark", "nord", "corporate", "winter", "autumn"],
  },
};
