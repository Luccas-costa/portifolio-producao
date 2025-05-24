'use client'

import LoginSide from '@/components/pages/login/login-side'
import RegisterSide from '@/components/pages/login/register-side'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import fonts from '@/styles/globals/fonts.module.css'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLogin />
    </Suspense>
  )
}

function PageLogin() {
  const searchParams = useSearchParams()
  const noIntro = searchParams.get('noIntro') === 'true'

  const [isintro, setIsintro] = useState(false)

  useEffect(() => {
    if (noIntro) {
      setIsintro(false) // pula a intro se noIntro for true
    } else {
      setIsintro(true)
      const timer = setTimeout(() => {
        setIsintro(false)
      }, 1500) // 1.5 segundos

      return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
    }
  }, [noIntro])

  return (
    <>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <div
          className={`${fonts.monserrat} flex h-screen flex-col items-center justify-center overflow-y-auto bg-[#121212] screen900:flex-row screen900:overflow-hidden`}
        >
          <RegisterSide />
          <LoginSide />
        </div>
      )}
    </>
  )
}
