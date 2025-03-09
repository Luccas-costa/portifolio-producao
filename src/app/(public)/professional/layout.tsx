import type { Metadata } from 'next'
import '../../globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Navbar from '@/components/pages/professional/navbar'

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
  title: 'Luccas Costa | Professional',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} ${montserrat.variable} bg-black antialiased transition-all duration-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
