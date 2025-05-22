'use client'
import LoginSide from '@/components/pages/register/login-side'
import RegisterSide from '@/components/pages/register/register-side'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import fonts from '@/styles/globals/fonts.module.css'
import { useState, useEffect } from 'react'

export default function Login() {
  const [isintro, setIsintro] = useState(true)

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
        <div
          className={`${fonts.monserrat} flex h-screen items-center justify-center overflow-hidden bg-[#121212]`}
        >
          <LoginSide />
          <RegisterSide />
        </div>
      )}
    </>
  )
}
