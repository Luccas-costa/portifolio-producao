import type { Metadata } from 'next'
import '../../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/pages/professional/navbar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luccas Costa | Professional',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.className} bg-black antialiased transition-all duration-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
