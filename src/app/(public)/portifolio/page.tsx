'use client'
import Hero from '@/components/pages/portifolio/hero'
import Projects from '@/components/pages/portifolio/projects'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import React, { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [isintro, setIsintro] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <>
          <Hero />
          <div className="h-[200px] bg-[#070B0C]" />
          <div className="h-full bg-[#070B0C]">
            {/* REMOVIDO o bg-[#f4f4f4] daqui */}
            <div className="h-full w-screen overflow-hidden rounded-t-[100px]">
              <Projects />
            </div>
          </div>
        </>
      )}
    </>
  )
}
