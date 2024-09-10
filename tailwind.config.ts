import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-foreground': "var(--primary-foreground)",
        secondary: "var(--secondary)",
        'secondary-foreground': "var(--secondary-foreground)",
        'secondary-placeholder': "var(--secondary-placeholder)",
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
