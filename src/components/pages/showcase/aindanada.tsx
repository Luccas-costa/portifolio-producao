'use client'
import React from 'react'
import { useQueryState } from 'nuqs'

export default function Aindanada() {
  const [idBags] = useQueryState('idBags')
  return <p>idBags: {idBags}</p>
}
