/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url(../src/assets/background-image.png)",
        "bg-stars": "url(../src/assets/stars.png)",
      },
      fontFamily: {
        custom: ["Fractul"],
      },
    },
  },
  plugins: [],
};
