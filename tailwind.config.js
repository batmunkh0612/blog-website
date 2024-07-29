/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "custom-bg": "rgba(75, 107, 251, 0.05)",
        "custom-border": "rgba(105, 106, 117, 0.30)",
        customFocus: "#f0f0f0",
      },
      fontFamily: {
        "Plus-Jakarta-Sans": "Plus Jakarta Sans",
        "serif-pro": ['"Source Serif Pro"', "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".focus-visible\\:custom": {
            outline: "none",
            boxShadow: '0 0 0 2px theme("colors.customFocus")',
          },
        },
        ["responsive", "hover", "focus-visible"]
      );
    },
  ],
};
