import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        screen1200: '1200px',
        screen1300: '1300px',
        screen1460: '1460px',
        screen1550: '1550px',

        'max-1460': { max: '1460px' },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        primary: '#B9D19D',
        secondary: '#3F493D',
        tertiary: '#CCB596',

        // variants
        variant_green: '#85B079',
        variant_green2: '#BDD5B5',
        variant_green3: '#227428',

        variant_blue: '#7B98B3',
        variant_blue2: '#225485',

        variant_pink: '#B37BA8',

        variant_purple: '#9999CC',
      },
    },
  },
  plugins: [],
}
export default config
