import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-acm-gradient',
    'bg-media-gradient',
    'bg-research-gradient',
    'bg-education-gradient',
    'bg-projects-gradient',
    'bg-development-gradient',
    'bg-community-gradient',
    'bg-hackutd-gradient',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        background: "#151515",
        primary: "#FFFFFF",
        primaryDark: "#CACACA",
      },
      backgroundImage: {
        "acm-gradient":
          "linear-gradient(94deg, #E10087 10.67%, #4004C0 93.37%)",
        "media-gradient":
          "linear-gradient(98deg, #E10087 7.24%, #FFD600 95.11%)",
        "research-gradient":
          "linear-gradient(98deg, #EA5400 18.05%, #FFC700 94.8%)",
        "education-gradient":
          "linear-gradient(98deg, #56E100 7.24%, #00EAC0 95.11%)",
        "projects-gradient":
          "linear-gradient(98deg, #008CF1 7.24%, #00ECEC 95.11%)",
        "development-gradient":
          "linear-gradient(97deg, #9900E1 7.31%, #5200FF 59.32%)",
        "community-gradient":
          "linear-gradient(98deg, #FFB800 18.05%, #ADFF00 94.8%)",
        "hackutd-gradient":
          "linear-gradient(98deg, #FE002E 7.24%, #AD00FF 95.11%)",
      },
    },
  },
  plugins: [],
};
export default config;
