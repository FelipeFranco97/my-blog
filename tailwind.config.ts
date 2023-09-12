import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'deep-blue': '#001233',
        'light-coral-red': '#FF595A',
        'beige': '#CAC0B3',
        'onyx': '#353935',
        'darker': '#222831',
        'dark': '#4e535a',
        'normal': '#7a7e83',
        'light': '#a7a9ad',
        'lighter': '#d3d4d6'
      },
      minHeight:{
        '1/4': '25%'
      },
      spacing:{
        '5%': '5%',
        '10%': '10%'
      }
    },
  },
  plugins: [],
}
export default config
