/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "890px",
      xl: "1024px",
      xxl: "1200px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      dark: "#272b32",
      orange: "#ff754e",
      yellow: "#ebeb17",
      gray: "#808080",
      "gray-dark": "#5e5e5e",
      "gray-light": "#e1e1e1",
      "gray-alt": "#c9c9c9",
      "blue-dark": "#3a3847",
      "project-1": "#edebe9",
      "project-2": "#151719",
      "project-3": "#ffe62d",
    },
  },
  plugins: [],
};
