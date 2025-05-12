'use client'
import { useState, useEffect } from 'react'

import Navbar from '@/components/pages/professional/sections/navbar'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import IndexMobile from '@/components/pages/professional/index/index-mobile'
import IndexDesktop from '@/components/pages/professional/index/index-desktop'

// import { BackgroundSpotlightAC } from 'ui/Background-spotlightAC'

export default function Professional() {
  const [isMobile, setIsMobile] = useState(false)
  const [isintro, setIsintro] = useState(true)

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  return (
    <>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <div className="h-screen w-screen bg-neutral-900">
          <Navbar />
          {isMobile ? <IndexMobile /> : <IndexDesktop />}
        </div>
      )}
    </>
  )
}
