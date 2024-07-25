/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        screen540: "540px",
        screen990: "990px",
        screen1150: "1150px",
      },
      colors: {
        "my-blue": "#004370",
      },
    },
  },
  plugins: [],
};
