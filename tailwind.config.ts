import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adiciona a classe personalizada para a fonte
      },
      screens: {
        screen400: '400px',
        screen450: '450px',
        screen520: '520px',
        screen700: '700px',
        screen900: '900px',
        screen1000: '1000px',
        screen1100: '1100px',
        screen1200: '1200px',
        screen1300: '1300px',
        screen1460: '1460px',
        screen1550: '1550px',

        'max-1460': { max: '1460px' },

        // screens portifolio old

        screen01: '1900px',
        screen02: '1800px',
        screen03: '1700px',
        screen04: '1600px',
        screen1: '1500px',
        screen2: '1400px',
        screen3: '1300px',
        screen4: '1200px',
        screen5: '1100px',
        screen6: '1000px',
        screen7: '900px',
        screen8: '800px',
        screen9: '700px',
        screen10: '600px',
        screen11: '500px',
        screen11_5: '450px',
        screen12: '400px',
        screen13: '350px',
        screen14: '300px',

        spacesliders: '670px',
        menuburger: '630px',
      },
    },
  },
  plugins: [],
}
export default config
