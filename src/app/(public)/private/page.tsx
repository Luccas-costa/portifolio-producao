'use client'
import React, { useState, useEffect } from 'react'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'

export default function Private() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])
  return (
    <div>
      {!isintro ? (
        <IntroAnimationUse />
      ) : (
        <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-4xl text-white">
          PRIVATE
        </div>
      )}
    </div>
  )
}
