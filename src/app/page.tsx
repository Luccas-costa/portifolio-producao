'use client'
import React, { useState, useEffect } from 'react'

import IndexDesktop from 'home/index-desktop'
import IndexMobile from 'home/index-mobile'

export default function Home() {
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
