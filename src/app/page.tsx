'use client'

import React, { useState, useEffect } from 'react'

import Hero from 'home/hero'
import Footer from 'home/footer'
import Navbar from 'home/navbar'
import Popular from 'home/popular'
import Products from 'home/products'
import Developed from 'home/developed'
import Testimonials from 'home/testimonials'
import GenerateFeed from 'home/generate-feed'

import Tilt from '@/assets/tilt'
import WavesOpacity from '@/assets/waves-opacity'
import CurveAsymmstrical from '@/assets/curve-asymmstrical'
import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'

export default function Home() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  return (
    <div>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <>
          <Navbar />
          <Hero />

          <WavesOpacity />

          <Products />

          <div className="relative">
            <div className="absolute left-0 top-0 w-full" style={{ zIndex: 2 }}>
              <CurveAsymmstrical />
            </div>

            <Testimonials />
          </div>

          <div className="bg-variant_green2/40 pt-[100px]">
            <div className="h-full w-full bg-[url('/backgrounds/background-tilt.png')] bg-repeat">
              <Tilt color={0} />
              <div className="rotate-180">
                <Tilt color={1} />
              </div>
            </div>
          </div>
          <GenerateFeed />
          <Popular />
          <Footer />
          <Developed />
        </>
      )}
    </div>
  )
}
