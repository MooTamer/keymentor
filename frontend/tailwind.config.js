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
      boxShadow: {
        "3xl": "0 20px 70px -10px rgba(0, 0, 0, 0.48)",
        "5xl": "0 25px 100px -15px rgba(0, 0, 0, 0.5)",
        "6xl": "0 30px 120px -20px rgba(0, 0, 0, 0.6)",
        "7xl": "0 35px 140px -25px rgba(0, 0, 0, 0.7)",
        "8xl": "0 40px 160px -30px rgba(0, 0, 0, 0.8)",
        "9xl": "0 45px 180px -35px rgba(0, 0, 0, 0.9)",
        "10xl": "0 50px 200px -40px rgba(0, 0, 0, 1.0)",
        "11xl": "0 0 220px -22px rgba(138, 0, 255, 1.5)",
      },
      scale: {
        101.5: "1.015",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
};
