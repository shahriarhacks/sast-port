module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },



  daisyui: {
    themes: [
      {
        mytheme: {
          
          primary: "#dc143c",
          secondary: "#009900",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
