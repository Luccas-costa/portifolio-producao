import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './global.css'
import { Inter } from 'next/font/google'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Teko Bag | Vitrine',
  description: 'Ecomerce de eco bags',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-zinc-200 antialiased`}>
        {children}
      </body>
    </html>
  )
}
