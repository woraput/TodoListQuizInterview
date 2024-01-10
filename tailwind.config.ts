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
      fontSize: {
        "2xs": ["10px", "16px"],
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["28px", "36px"],
        "3.5xl": ["30px", "38px"],
      },
      minWidth: {
        xxs: "320px",
      },
      padding: {
        "layout-tablet": "8px",
        "layout-desktop": "16px",
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "430px",
        md: "640px",
        "2md": "768px",
        "3md": "820px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
