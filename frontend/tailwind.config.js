module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        3: "3px",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      scale: {
        101.5: "1.015",
      },
      colors: {
        brown: "#B85042",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        coffeeTheme: {
          primary: "#B85042",
          "primary-focus": "#543d2b",
          "primary-content": "#ffffff",
          "base-100": "#E7E8D1",
          secondary: "#E7E8D1",
          "secondary-focus": "#543d2b",
          "secondary-content": "#ffffff",
          accent: "#A7BEAE",
          // boxShadow: "0 0 220px -22px rgba(184, 80, 66, 1)",
        },
        // otherTheme: {
        //   primary: "#...",
        //   "primary-focus": "#...",
        //   "primary-content": "#...",
        //   "base-100": "#...",
        //   secondary: "#...",
        //   "secondary-focus": "#...",
        //   "secondary-content": "#...",
        //   accent: "#...",
        //   boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        // },
      },
    ],
  },
};
