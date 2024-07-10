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
  },
  plugins: [],
};
export default config;
