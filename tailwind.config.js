/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "940px",
      lg: "1000px",
      md: "700px",
    },
    extend: {
      height: {
        50: "50px",
        41: "41px",
        33: "33px",
        202: "202px",
        1200: "1200px",
        61: "61px",
        108: "108px",
        808: "808px",
        700: "700px",
        48: "48px",
        28: "28px",
        244: "244px",
      },
      width: {
        136: "136px",
        148: "148px",
        987: "987px",
        84: "84px",
        58: "58px",
        469: "469px",
        298: "298px",
      },
      colors: {
        gold500: "#D3A121",
        gray200: "#222224",
        gray100: "#E7E7E7",
        gray300: "#393939",
      },
      backgroundColor: {
        darkGold: "#B8860B",
        darkGray: "#555555",
        darkGray200: "#1b1b1b",
        Grey: "#F6F6F6",
        darkModeBg: "#130E00",
        gold500: "#D3A121",
      },
      borderColor: {
        darkGold: "#B8860B",
        gold500: "#D3A121",
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
      },
    },
  },
  plugins: [],
};
