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
        primary: "#ff0055",
        "primary-content": "#ffffff",
        "primary-dark": "#cc0044",
        "primary-light": "#ff3377",
        secondary: "#2b00ff",
        "secondary-content": "#ffffff",
        "secondary-dark": "#2200cc",
        "secondary-light": "#5533ff",
        background: "#f0f0f0",
        foreground: "#fbfbfb",
        border: "#dfdfdf",
        copy: "#262626",
        "copy-light": "#666666",
        "copy-lighter": "#8c8c8c",
        success: "#00ff00",
        warning: "#ffff00",
        error: "#ff0000",
        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [],
};

