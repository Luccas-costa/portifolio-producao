import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luccas Costa',
  description: '',
}

export const viewport: Viewport = {
  themeColor: '#6F3EB7',
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
        className={`${inter.className} antialiased transition-all duration-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
