/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#3d68f2',
        "secondary": "#ebb734",
        blue: {
          "50": "#ECF0FE",
      "100": "#D9E1FC",
      "200": "#C6D2FB",
      "300": "#B3C3FA",
      "400": "#4772fc",
      "500": "#3d68f2",
      "600": "#335ee8",
      "700": "#2954de",
      "800": "#1f4ad4",
      "900": "#1540ca",
          DEFAULT: "#3E4095"
        },
        green: {
          DEFAULT: "#11cc33",
          50: "#ddfdda",
          100: "#b9fbb7",
          200: "#75f57d",
          300: "#41ec56",
          400: "#1edf3e",
          500: "#11cc33",
          600: "#18b232",
          700: "#289235",
          800: "#356e38",
          900: "#344734",
        },
        black:{
        	50: "1E1E1E",
          100: "#c7c7c7",
          200: "#929292",
          300: "#626262",
          400: "#3b3b3b",
          500: "#1e1e1e",
          600: "#0e0e0e",
          700: "#080808",
          800: "#0b0b0b",
          900: "#131313",
          DEFAULT: "#1e1e1e",
        },
        red:{
          DEFAULT: "#E72C2C",
          50: "#ffe0e0",
          100: "#ffc2c2",
          200: "#ff8a8a",
          300: "#ff5c5c",
          400: "#f93b3b",
          500: "#e72c2c",
          600: "#cc3030",
          700: "#a83c3c",
          800: "#7d4444",
          900: "#4f3c3c",
        },
        gray:{
          DEFAULT: "#e5e5e5",
          "50": "#ffffff",
      "100": "#ffffff",
      "200": "#ffffff",
      "300": "#ffffff",
      "400": "#ffffff",
      "500": "#f9f9f9",
      "600": "#efefef",
      "700": "#e5e5e5",
      "800": "#dbdbdb",
      "900": "#d1d1d1"
        }




      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        logo: ['DM Sans', 'sans-serif'],
        oswald: [ 'Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
