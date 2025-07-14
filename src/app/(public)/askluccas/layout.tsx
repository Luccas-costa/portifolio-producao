import type { Metadata } from 'next'
import '../../globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Luccas Costa | Ask Luccas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Meta tag para evitar zoom em dispositivos móveis */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body
        className={`${inter.className} ${montserrat.variable} bg-[#121212] text-white antialiased transition-all duration-200`}
      >
        {children}
      </body>
    </html>
  )
}
