'use client'
import React, { useState, useEffect } from 'react'

import IndexDesktop from 'home/index-desktop'
import IndexMobile from 'home/index-mobile'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'

export default function Home() {
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
        <div className="h-screen w-screen bg-black pt-[65px] text-white">
          {isMobile ? <IndexMobile /> : <IndexDesktop />}
        </div>
      )}
    </>
  )
}
