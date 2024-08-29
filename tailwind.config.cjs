/** @type {import('tailwindcss').Config} */
const url = require("url");
module.exports = {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body: "rgb(var(--color-bg))",
        "box-bg": "rgb(var(--color-box))",
        "box-shadow": "rgb(var(--box-sd))",
        "box-border": "rgb(var(--box-border))",
        primary: "#00D8A5",
        secondary: "#7E43AD",
        "body-color": "#462C64",
        "gray-color": "",
        "navbar-color" : "#F8f5F3",
        "new-gray": "#A89C93",
        "brown": "#665244",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfairDisplay : ['Playfair Display', 'serif'],
        imperial : ["Imperial Script", 'cursive']
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.5)',
      },
      cursor: {
        'custom-cursor': 'url("public/images/navbar/icons/Explore.png"), pointer',
      },
    },
  },
};
