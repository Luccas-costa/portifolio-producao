// app/(private)/newpage/page.tsx
import type { Metadata, Viewport } from 'next'
import Content from './content'

export const metadata: Metadata = {
  title: 'Luccas Costa',
  description: '',
}

export const viewport: Viewport = {
  themeColor: '#6F3EB7',
}

export default function NewPage() {
  return <Content />
}
