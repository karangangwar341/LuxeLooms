/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          "color-white": "#fff",
          black: "#000",
          gainsboro: "#d9d9d9",
          darkgray: "#9f9f9f",
          gray: {
            "100": "rgba(255, 255, 255, 0.72)",
            "200": "rgba(0, 0, 0, 0.17)",
          },
          "color-gray-2": "#616161",
          "color-gray-1": "#3a3a3a",
          primary: "#b88e2f",
          "color-gray-5": "#d8d8d8",
          seashell: "#fcf8f3",
          "color-primary": "#e89f71",
          "color-green-accents": "#2ec1ac",
          "color-red-accents": "#e97171",
          "color-gray-3": "#898989",
          "color-gray-4": "#b0b0b0",
          "color-orange-123": "FFF3E3",
          "color-light-bg": "#f4f5f7",
          "font-color1": "#666",
          "font-color": "#333",
        },
        spacing: {},
        fontFamily: {
          poppins: "Poppins",
          montserrat: "Montserrat",
        },
      },
      fontSize: {
        base: "16px",
        sm: "14px",
        "5xl": "24px",
        "21xl": "40px",
        xl: "20px",
        inherit: "inherit",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  