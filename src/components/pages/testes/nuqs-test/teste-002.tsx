'use client'
import { useQueryState } from 'nuqs'
import React from 'react'

export default function Teste002() {
  const [name, setName] = useQueryState('name')
  return (
    <div>
      <input value={name || ''} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>
    </div>
  )
}
