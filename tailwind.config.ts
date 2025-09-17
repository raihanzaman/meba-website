import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-garamond)", "garamond"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"], // keep Geist Mono
      },
    },
  },
  plugins: [],
};

export default config;