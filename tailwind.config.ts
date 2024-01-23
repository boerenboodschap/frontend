import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        "50": "#fbfbfe",
        "100": "#e2e2f7",
        "200": "#ccccf1",
        "300": "#a8aae8",
        "400": "#7f80db",
        "500": "#6660d1",
        "600": "#5c4dc3",
        "700": "#5542b3",
        "800": "#4d3b92",
        "900": "#403474",
        "950": "#2a2348",
      },
      primary: {
        "50": "#f2fcf1",
        "100": "#e0f9df",
        "200": "#c2f1c1",
        "300": "#90e590",
        "400": "#59cf59",
        "500": "#38c838",
        "600": "#249524",
        "700": "#207521",
        "800": "#1e5d1f",
        "900": "#1a4d1b",
        "950": "#092a0b",
      },
      secondary: {
        "50": "#f2fdf0",
        "100": "#dffcdc",
        "200": "#c0f7bb",
        "300": "#8def86",
        "400": "#60e057",
        "500": "#2cc522",
        "600": "#1fa316",
        "700": "#1b8015",
        "800": "#1a6516",
        "900": "#165314",
        "950": "#062e05",
      },
      accent: {
        "50": "#fbf6eb",
        "100": "#f6eacb",
        "200": "#edd59b",
        "300": "#e3b761",
        "400": "#d99c36",
        "500": "#ce8929",
        "600": "#ae6720",
        "700": "#8b4b1d",
        "800": "#743d1f",
        "900": "#633420",
        "950": "#391a0f",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
