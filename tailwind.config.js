/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#F2F2F2",
      secondary: "#525050",
      tertiary: "#D01345",
      secondaryDark: "#2D2D2D",
      primaryDark: "#EEEEEE",
      tertiaryLight: "#d0134563",
    },
    extend: {

      screens:{
        "sm":"360px",
        "md":"960px",
        
      }
    

    },
  },
  plugins: [],
};
