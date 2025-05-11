'use client'
import IndexDesktop from '@/components/pages/professional/index/index-desktop'
import IndexMobile from '@/components/pages/professional/index/index-mobile'
import { useState, useEffect } from 'react'

// import { BackgroundSpotlightAC } from 'ui/Background-spotlightAC'

export default function Professional() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Adiciona o event listener no resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Remove o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="h-screen w-screen bg-neutral-900">
      {isMobile ? <IndexMobile /> : <IndexDesktop />}
    </div>
  )
}
