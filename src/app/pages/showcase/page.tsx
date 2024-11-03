'use client'
// import React, { Suspense } from 'react'
// import Aindanada from '@/components/pages/showcase/aindanada'
import { useEffect, useState } from 'react'

import Feedback from 'ui/feedback'
import IntroAnimationUse from 'ui/intro-tekobag/intro-animation-use'

import Hero from 'showcase/hero'
import Navbar from 'showcase/navbar'
import Section1 from 'showcase/section-1'
import Section2 from 'showcase/section-2'
import Highlights from 'showcase/highlights'
import CardsHighlights from 'showcase/cards-highlights'
import SliderPromotions from 'showcase/slider-promotions'

export default function Showcase() {
  const [isintro, setIsintro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsintro(false)
    }, 1500) // 0.5 segundos

    return () => clearTimeout(timer) // Limpa o timer ao desmontar o componente
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const themes = ['light', 'dark']

  return (
    <>
      {isintro ? (
        <IntroAnimationUse />
      ) : (
        <>
          <div className="relative size-full min-h-screen">
            <div style={{ zIndex: 90 }}>
              <Feedback />
            </div>
            {/* <Suspense fallback={<div>Loading...</div>}>
        <Aindanada />
        </Suspense> */}
            <div style={{ zIndex: 10 }}>
              <div className="absolute w-full pt-2" style={{ zIndex: 2 }}>
                <Navbar theme={themes[currentSlide]} />
              </div>
              <Hero onSlideChange={setCurrentSlide} />
              <SliderPromotions />
              <Highlights />
              <CardsHighlights />

              <Section1 />
              <Section2 />
            </div>
          </div>
        </>
      )}
    </>
  )
}
