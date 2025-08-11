import type { Metadata, Viewport } from 'next'
import '../../globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'

const clash = localFont({
  src: [
    {
      path: '../../fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        className={`${poppins.className} ${clash.variable} antialiased transition-all duration-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
