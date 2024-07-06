/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'footerDesktop': "url('/desktop/image-footer.jpg')",
      },
      fontFamily: {
        Fraunces: ['Fraunces', 'san-serif'],
        Manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        Cyan: 'hsl(192, 37%, 48%)',
        ShadyPink: 'hsl(268, 34%, 53%)',
        DarkPink: 'hsl(240, 21%, 20%)',
        AshyPink: 'hsl(240, 10%, 57%)',
        SkyBlue: 'hsl(192, 90%, 77%)',
        PinkyPish: 'hsl(268, 100%, 86%)',
        Heaven: 'hsl(0, 0%, 98%)'
      },
    },
  },
  plugins: [],
};
