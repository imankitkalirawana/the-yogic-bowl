import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#e6ede7',
              '100': '#c4d3c5',
              '200': '#a1b9a4',
              '300': '#7e9f82',
              '400': '#5c8561',
              '500': '#396b3f',
              '600': '#2f5834',
              '700': '#254629',
              '800': '#1b331e',
              '900': '#112013',
              foreground: '#fff',
              DEFAULT: '#396b3f'
            },
            secondary: {
              '50': '#fae9e1',
              '100': '#f2cbb7',
              '200': '#ebad8d',
              '300': '#e48f64',
              '400': '#dc703a',
              '500': '#d55210',
              '600': '#b0440d',
              '700': '#8a350a',
              '800': '#652708',
              '900': '#401905',
              foreground: '#000',
              DEFAULT: '#d55210'
            }
          }
        },
        dark: {
          colors: {
            primary: {
              '50': '#254329',
              '100': '#3f7145',
              '200': '#599f61',
              '300': '#73cd7d',
              '400': '#93d89a',
              '500': '#b2e4b8',
              '600': '#d2efd5',
              '700': '#f1faf2',
              foreground: '#000',
              DEFAULT: '#599f61'
            },
            background: '#38292B',
            foreground: {
              '50': '#51534d',
              '100': '#898c83',
              '200': '#c1c5b8',
              '300': '#f9feee',
              '400': '#fafef2',
              '500': '#fcfef6',
              '600': '#fdfff9',
              '700': '#fefffd',
              foreground: '#000',
              DEFAULT: '#c1c5b8'
            }
          }
        }
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem'
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9'
      }
    })
  ]
} satisfies Config;

export default config;
