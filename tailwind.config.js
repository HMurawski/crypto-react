/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: { noto: 'Noto Sans' }
    },
    colors: {
      blue: '#618de4',
      darkblue: '#3544cf',
      lightblue: '#ebedff',
      beige: '#fff4ea',
      orchid: '#f6eaff',
      purple: '#9530de',
      grey: '#FDFAFA',
      black: '#000000',
      white: '#ffffff',
      green: '#18B118',
      red: '#ef4444',
      greenTop: '#4d7c0f',
      redBot: '#fca5a5',
      transparent: 'transparent'

    },
    fontSize: {
      sm: '14px', base: '16px', md: '18px', lg: '24px', xl: '32px'
    }
  },
  plugins: [],
}