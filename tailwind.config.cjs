/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#f3f4f6",
        Secondary: "#fde047",
        Accent: "#1f2937",
        Neutral: "#080808",
      },
      backgroundImage: {
        'baner': "url('/img/banier.jpg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("prettier-plugin-tailwindcss"),
  ],
};
