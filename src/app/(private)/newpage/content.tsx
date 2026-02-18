// content.tsx
'use client'
import Hero from '@/components/pages/new-page/hero'
import NormalSections from '@/components/pages/new-page/normal-sections'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import React, { useEffect, useState } from 'react'

export default function Content() {
  const [isintro, setIsintro] = useState(true)
  const [showHero, setShowHero] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isintro) return <IntroAnimationUse />

  return showHero ? (
    <Hero onComplete={() => setShowHero(false)} />
  ) : (
    <NormalSections />
  )
}
