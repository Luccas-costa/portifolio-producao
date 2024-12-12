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
        screen450: '450px',
        screen520: '520px',
        screen700: '700px',
        screen900: '900px',
        screen1200: '1200px',
        screen1300: '1300px',
        screen1460: '1460px',
        screen1550: '1550px',

        'max-1460': { max: '1460px' },
      },
    },
  },
  plugins: [],
}
export default config
