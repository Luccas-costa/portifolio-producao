// 'use client'
// import React, { Suspense } from 'react'
// import Aindanada from '@/components/pages/showcase/aindanada'

import Feedback from 'ui/feedback'
import Navbar from 'showcase/navbar'

export default function Showcase() {
  // Obter o valor do parâmetro 'idBags' da URL

  return (
    <div className="size-full min-h-screen bg-[#0A4035] pt-2">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Aindanada />
      </Suspense> */}
      <Navbar theme="light" />
      <Feedback />
    </div>
  )
}
