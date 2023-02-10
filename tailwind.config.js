/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    { pattern: /^px-/, variants: ["md, lg"] },
    { pattern: /^py-/, variants: ["md, lg"] },
    { pattern: /^bg-/, variants: ["md, lg"] },
    { pattern: /^text-/, variants: ["md, lg"] },
    { pattern: /^cursor-/, variants: ["md, lg"] },
  ],
};
