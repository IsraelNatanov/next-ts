import type { Config } from "tailwindcss";

const config: Config = {
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
        "color-flex": "#F1EFF4",
      },
      fontFamily: {
        practicain: "Fb Practica",
        notosans:"Noto Sans Hebrew"
      },
      boxShadow: {
        ss: "0px 0px 12px 0px #0000001A", 
        inputShadow: "0px 4px 20px 0px #0000000D",
        mm: "0px 0px 4px 0px #0000001A"


      },
      fontSize: {
        s: "10px"
      }
      
    },
  },
  plugins: [],
};
export default config;

