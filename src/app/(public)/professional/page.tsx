import type { Metadata, Viewport } from 'next'
import Content from './content'

export const metadata: Metadata = {
  title: 'Luccas Costa',
  description: '',
}

export const viewport: Viewport = {
  themeColor: '#BD6117',
}

export default function ProfessionalPage() {
  return <Content />
}
