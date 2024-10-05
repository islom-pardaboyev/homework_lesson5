/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#FFF3E3',
        primary_dark: '#333333',
        primary_text_color: '#B88E2F',
        secondary: '#F9F1E7',
        gray: '#9F9F9F'
      },
      container: {
        center: true,
        
      }
    },
  },
  plugins: [],
};
