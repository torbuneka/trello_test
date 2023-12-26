/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffe4e6',
        menu: '#881337',
        hover: '#4c0519',
        button: '#be123c',
        text: '#4a044e',
        hover_text: '#3b0764'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
        full: '0 0 10px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: []
};
