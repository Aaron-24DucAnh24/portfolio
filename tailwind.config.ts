import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#e60022',
      'secondary': '#111111',
      'third': '#767676',
      'fourth': '#f1f1f1',
      'white': '#FFFFFF'
    },
    fontFamily: {
      special: ['Pacifico', 'cursive'],
    },
    keyframes: {
      shake: {
        '0%': { transform: 'rotate(0deg)' },
        '15%': { transform: 'rotate(-20deg)' },
        '30%': { transform: 'rotate(10deg)' },
        '45%': { transform: 'rotate(-20deg)' },
        '60%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
      'flip-front': {
        '0%': { transform: 'rotateY(0deg)' },
        '15%': { transform: 'rotateY(0deg)' },
        '35%': { transform: 'rotateY(180deg)' },
        '65%': { transform: 'rotateY(180deg)' },
        '85%': { transform: 'rotateY(0deg)' },
        '100%': { transform: 'rotateY(0deg)' },
      },
      'flip-back': {
        '0%': { transform: 'rotateY(180deg)' },
        '15%': { transform: 'rotateY(180deg)' },
        '35%': { transform: 'rotateY(0deg)' },
        '65%': { transform: 'rotateY(0deg)' },
        '85%': { transform: 'rotateY(180deg)' },
        '100%': { transform: 'rotateY(180deg)' },
      },
      'bound-y': {
        '0%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-20%)' },
        '50%': { transform: 'translateX(0)' },
        '75%': { transform: 'translateX(20%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'bound-y-reverse': {
        '0%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(20%)' },
        '50%': { transform: 'translateX(0)' },
        '75%': { transform: 'translateX(-20%)' },
        '100%': { transform: 'translateX(0)' },
      },
      'slide-in': {
        '0%': {
          transform: 'translateX(-20%)',
          opacity: '0.1'
        },
        '100%': {
          transform: 'translateX()',
          opacity: '1'
        }
      },
      'shrink-out': {
        '0%': { width: '75%' },
        '100%': { width: '100%' },
      },
      'shrink-in': {
        '0%': { width: '100%' },
        '100%': { width: '75%' },
      },
    },
    animation: {
      shake: 'shake 2s linear infinite',
      'flip-front': 'flip-front 5s linear infinite',
      'flip-back': 'flip-back 5s linear infinite',
      'bound-y': 'bound-y 1.5s linear infinite',
      'bound-y-reverse': 'bound-y-reverse 1.5s linear infinite',
      'slide-in': 'slide-in 0.5s linear',
      'shrink-out': 'shrink-out 1s linear',
      'shrink-in': 'shrink-in 1s linear',
    },
  },
  plugins: [],
};
export default config;
