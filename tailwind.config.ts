import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './content/**/*.mdx',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // keyframes: {
      //   shimmer: {
      //     '100%': { transform: 'translateX(100%)' }
      //   }
      // },
      // animation: {
      //   shimmer: 'shimmer 1s ease-in-out 1 forwards'
      // },
      colors: {
        dusk_blue: {
          200: '#EAEDF0',
          300: '#DDE6ED',
          400: '#9DB2BF',
          500: '#526D82',
          600: '#27374D',
        },
        port_blue: '#0A5397',
        port_gray: '#36454F',
        port_light_gray: '#DAE1E6',
        port_red: '#FF6B6B',
        port_white: '#FAFAFA',
        port_light_blue: '#87CEEB'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-playfair_display)']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
