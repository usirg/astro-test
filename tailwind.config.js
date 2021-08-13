// tailwind.config.js
  const defaultTheme = require('tailwindcss/defaultTheme')

  const round = (num) =>
    num
      .toFixed(7)
      .replace(/(\.[0-9]+?)0+$/, '$1')
      .replace(/\.0$/, '')
  const em = (px, base) => `${round(px / base)}em`
  
  module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
        typography: (theme) => ({
          light: {
            css: [
              {
                color: theme('colors.gray.400'),
                '[class~="lead"]': {
                  color: theme('colors.gray.300'),
                },
                a: {
                  color: theme('colors.white'),
                },
                strong: {
                  color: theme('colors.white'),
                },
                'ol > li::before': {
                  color: theme('colors.gray.400'),
                },
                'ul > li::before': {
                  backgroundColor: theme('colors.gray.600'),
                },
                hr: {
                  borderColor: theme('colors.gray.200'),
                },
                blockquote: {
                  color: theme('colors.gray.200'),
                  borderLeftColor: theme('colors.gray.600'),
                },
                h1: {
                  color: theme('colors.gray.400'),
                },
                h2: {
                  color: theme('colors.white'),
                },
                h3: {
                  color: theme('colors.white'),
                },
                h4: {
                  color: theme('colors.white'),
                },
                'figure figcaption': {
                  color: theme('colors.gray.400'),
                },
                code: {
                  color: theme('colors.white'),
                },
                'a code': {
                  color: theme('colors.white'),
                },
                pre: {
                  color: theme('colors.gray.200'),
                  backgroundColor: theme('colors.gray.800'),
                },
                thead: {
                  color: theme('colors.white'),
                  borderBottomColor: theme('colors.gray.400'),
                },
                'tbody tr': {
                  borderBottomColor: theme('colors.gray.600'),
                },
              },
            ],
          },
          DEFAULT: {
            css: [
              {
                canvas: {
                  marginTop: em(32, 16),
                  marginBottom: em(32, 16),
                },      
              }
            ]
          },
          sm: {
            css: [
              {
                canvas: {
                  marginTop: em(24, 14),
                  marginBottom: em(24, 14),
                },      
              }
            ]
          },
          lg: {
            css: [
              {
                canvas: {
                  marginTop: em(32, 18),
                  marginBottom: em(32, 18),
                },      
              }
            ]
          },
          xl: {
            css: [
              {
                canvas: {
                  marginTop: em(40, 20),
                  marginBottom: em(40, 20),
                },      
              }
            ]
          },
          '2xl': {
            css: [
              {
                canvas: {
                  marginTop: em(48, 24),
                  marginBottom: em(48, 24),
                },      
              }
            ]
          }
        }),
        letterSpacing: {
          tightest: '-0.10em',
        },
      },
    },
    variants: {
      extend: {
        typography: ['dark'],
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@markusantonwolf/tailwind-css-plugin-multi-columns')    
    ],
  }
  