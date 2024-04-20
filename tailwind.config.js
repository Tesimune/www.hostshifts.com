/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      desktop: "940px",
      lg: "1000px",
      xl: "1100px",
      md: "700px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        50: "50px",
        52: "52px",
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
        170: "170px",
        987: "987px",
        84: "84px",
        58: "58px",
        469: "469px",
        298: "298px",
        673: "673px",
      },
      colors: {
        gold500: "#D3A121",
        gray200: "#222224",
        gray100: "#E7E7E7",
        gray300: "#393939",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
