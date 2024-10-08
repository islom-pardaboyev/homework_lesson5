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
        gray: '#9F9F9F',
        gray_200:"#F4F5F7",
        gray_300: '#898989',
        gray_400: '#B0B0B0',
        gray_500: '#D9D9D9',
        gray_600: '#666666',
        red: '#E97171',
        category_pink_color: '#FF0080',
        category_teal_color: '#387478',
        category_blue_color: '#006BFF',
        category_green_color: '#15B392',
        yellow: '#FFC700'
      },
      container: {
        center: true,
        
      }
    },
  },
  plugins: [],
};
