'use client'
import Hero from '@/components/pages/new-page/hero'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import React, { useEffect, useState } from 'react'

export default function Content() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])
  return <>{isintro ? <IntroAnimationUse /> : <Hero />}</>
}
