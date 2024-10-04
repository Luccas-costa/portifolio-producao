'use client'
import React from 'react'
import { useQueryState } from 'nuqs'

export default function Vitrine() {
  // Obter o valor do parâmetro 'idBags' da URL
  const [idBags] = useQueryState('idBags')

  return (
    <div>
      <h1>Vitrine</h1>
      <p>idBags: {idBags}</p>
    </div>
  )
}
