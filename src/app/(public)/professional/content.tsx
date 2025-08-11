'use client'
import { useState, useEffect } from 'react'

import Navbar from '@/components/pages/professional/sections/navbar'
import IntroAnimationUse from '@/components/ui/intro/intro-animation-use'
import IndexMobile from '@/components/pages/professional/index/index-mobile'
import IndexDesktop from '@/components/pages/professional/index/index-desktop'

export default function Content() {
  const [isMobile, setIsMobile] = useState(false)
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

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
        <div className="h-screen w-screen bg-neutral-900">
          <Navbar />
          {isMobile ? <IndexMobile /> : <IndexDesktop />}
        </div>
      )}
    </>
  )
}
