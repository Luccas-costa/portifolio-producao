// 'use client'
// import React, { Suspense } from 'react'
// import Aindanada from '@/components/pages/showcase/aindanada'

import Feedback from 'ui/feedback'

import Hero from 'showcase/hero'
import Navbar from 'showcase/navbar'
import Highlights from 'showcase/highlights'
import SliderPromotions from 'showcase/slider-promotions'

export default function Showcase() {
  // Obter o valor do parâmetro 'idBags' da URL

  return (
    <div className="relative size-full min-h-screen">
      <Feedback />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Aindanada />
      </Suspense> */}
      <div className="absolute w-full pt-2" style={{ zIndex: 2 }}>
        <Navbar theme="light" />
      </div>
      <Hero />
      <SliderPromotions />
      <Highlights />
    </div>
  )
}
