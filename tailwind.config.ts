import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2E2E2E",
        foreground: "var(--foreground)",
        mainColor: "#4169E1",
        mainColorHover: "#527DFF",
        linkColor: "#00BBFF",
        inputColor: "#454545",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
