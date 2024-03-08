/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blobBounce: {
          "0%, 25%, 50%, 75%, 100%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        blobBounce: "5s infinite ease",
      },
    },
  },
  plugins: [],
};
