'use client'

import LoginSide from '@/components/pages/login/login-side'
import RegisterSide from '@/components/pages/login/register-side'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import fonts from '@/styles/globals/fonts.module.css'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LoginSideMobile from '@/components/pages/login/login-side-mobile'
import RegisterSideMobile from '@/components/pages/login/register-side-mobile'

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLogin />
    </Suspense>
  )
}

function PageLogin() {
  const searchParams = useSearchParams()

  // Verifica se existe o parâmetro noIntro na URL
  const noIntro = searchParams.get('noIntro') === 'true'
  const goingTo = searchParams.get('goingTo')

  const [isintro, setIsintro] = useState(false)

  useEffect(() => {
    if (noIntro) {
      setIsintro(false) // Pula a intro se noIntro for true
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
        <>
          <div
            className={`${fonts.monserrat} flex h-full flex-col bg-[#121212] screen1000:hidden`}
          >
            <LoginSideMobile route={goingTo} />
            <RegisterSideMobile route={goingTo} />
          </div>
          <div
            className={`${fonts.monserrat} hidden h-screen items-center overflow-hidden bg-[#121212] screen1000:flex`}
          >
            <RegisterSide route={goingTo} />
            <LoginSide route={goingTo} />
          </div>
        </>
      )}
    </>
  )
}
