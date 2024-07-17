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
      'third': '#898989',
      'fourth': '#f1f1f1',
      'fifth': '#151515',
      'white': '#FFFFFF',
      'black': '#111111'
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
      'slide-down': {
        '0%': {
          transform: 'translateY(-16px)',
          opacity: '0'
        },
        '100%': {
          transform: 'translateY()',
          opacity: '1'
        }
      },
      'slide-up': {
        '100%': {
          transform: 'translateY(-16px)',
          opacity: '0'
        },
        '0%': {
          transform: 'translateY()',
          opacity: '1'
        }
      },
      'floating': {
        '0%': {
          transform: 'scale(0.9, 0.9)',
        },
        '50%': {
          transform: 'scale(1.2, 1.2)',
        },
        '100%': {
          transform: 'scale(0.9, 0.9)',
        }
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
      'slide-up': 'slide-up 0.35s ease-out',
      'slide-down': 'slide-down 0.35s ease-out',
      'floating': 'floating 1s ease-out infinite',

    },
  },
  plugins: [],
};
export default config;
