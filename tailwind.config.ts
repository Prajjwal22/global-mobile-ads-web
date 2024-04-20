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
        hero: "url('/overview-bg.svg')",
      },
      backgroundSize: {
        heroSize: "75%",
        mobheroSize: "100%",
      },
      colors: {
        primary: "#26262c",
        secondary: "#2b53d6",
        mute: "#76787f",
        cyanno: "#2ccab9",
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
