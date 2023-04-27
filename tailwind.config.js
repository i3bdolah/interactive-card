/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGrayish: 'hsl(270, 3%, 87%)',
        darkGrayish: 'hsl(279, 6%, 55%)',
        veryDark: 'hsl(278, 68%, 11%)',
      },
      fontSize: {
        'sz-defalut': '18px',
      },
    },
  },
  plugins: [],
}
