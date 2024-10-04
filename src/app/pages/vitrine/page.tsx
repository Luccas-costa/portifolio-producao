'use client'
import React, { Suspense } from 'react'
import { useQueryState } from 'nuqs'

export default function Vitrine() {
  // Obter o valor do parâmetro 'idBags' da URL
  const [idBags] = useQueryState('idBags')

  return (
    <div>
      <h1>Vitrine</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <p>idBags: {idBags}</p>
      </Suspense>
    </div>
  )
}
