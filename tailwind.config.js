/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure Tailwind scans all your files
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)", // <-- your main color
      },
    },
  },
  plugins: [],
};
