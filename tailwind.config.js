/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "figma-red": "#F24E1E",
        "figma-orange": "#FF7262",
        "figma-violet": "#A259FF",
        "figma-blue": "#1ABCFE",
        "figma-green": "#0ACF83",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
