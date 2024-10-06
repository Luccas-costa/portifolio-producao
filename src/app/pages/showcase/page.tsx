'use client'
import React, { Suspense } from 'react'
import Aindanada from '@/components/pages/showcase/aindanada'

export default function Showcase() {
  // Obter o valor do parâmetro 'idBags' da URL

  return (
    <div>
      <h1>Vitrine</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Aindanada />
      </Suspense>
    </div>
  )
}
