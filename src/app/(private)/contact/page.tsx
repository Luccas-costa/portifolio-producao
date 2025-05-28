'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import fonts from '@/styles/globals/fonts.module.css'

import TextSide from '@/components/pages/contact/text-side'
import FormSide from '@/components/pages/contact/form-side'
import TextSideMobile from '@/components/pages/contact/text-side-mobile'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import FormSideMobile from '@/components/pages/contact/form-side-mobile'

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
        <>
          <div
            className={`${fonts.monserrat} flex h-full flex-col gap-[120px] bg-[#121212] screen1000:hidden`}
          >
            <TextSideMobile />
            <FormSideMobile />
          </div>
          <div
            className={`${fonts.monserrat} hidden h-screen items-center overflow-hidden bg-[#121212] screen1000:flex`}
          >
            <TextSide />
            <FormSide />
          </div>
        </>
      )}
    </>
  )
}
