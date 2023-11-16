import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#E30B13'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      red:'#9F1616',
      green:'#00553B',
      gold:   '#F5D858',
      'gold-500':'#CCB75D',
      'gray-900':'#1F1F1F',
      'gray-500':'#B0AFAF',
      'gray-400':'#C4C4C4',
      'blue-900':'#23263F'
    },
    transitionTimingFunction: {
      DEFAULT: 'ease-in-out',
    },
    transitionDuration: {
      DEFAULT: '200ms',
    },
    keyframes: {
      fade: {
        from: {opacity: '0'},
        to: {opacity: '1'},
      },
      scaleIn: {
        '0%': {
          opacity: '0',
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: '0.3',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      fade: 'fade .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out',
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        image: '0.5rem',
        layout: '0.8rem',
      },
    },
  },
  plugins: [
      //@ts-ignore
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({

        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255, .9)',
          transition: 'text-decoration-color .3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255, 0, 0, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, 0.9)',
          },
        },
        '.figure-border': {
          borderRadius: '0 75px',
        },
        '.air-block': {
          borderRadius: theme('borderRadius.layout'),
          boxShadow: theme('boxShadow.lg'),
        },
        '.btn':{
          background:primary,
          padding:8
        }

      })
          addUtilities({
            '.lobster':{
              fontFamily:'Lobster',
            },
            '.text-shadow': {
              textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
            },
            '.shadow-gold':{
              filter: 'drop-shadow(0 0 0.75rem crimson)',
            },
            '.outline-border-none': {
              outline: 'none',
              border: 'none',
            },

            '.flex-center-between': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },

            '.image-like-bg': {
              objectPosition: 'center',
              objectFit: 'cover',
              pointerEvents: 'none',
            },

          })
    }),
  ],
}
export default config
