/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "#F9FAFB",
        primary: "#6366F1",       // main accent
        secondary: "#A78BFA",     // secondary accent
        link: "#2563EB",          // link color
        textmain: "#111827",      // primary text
        textsecondary: "#6B7280", // secondary text
        nav: "#FFFFFF",           // navbar background
        sidebar: "#F3F4F6",
      },
      fontFamily: {
        dancing: [
          "Dancing Script",
          "cursive"
        ],
        poppins: [
          "Poppins",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}

