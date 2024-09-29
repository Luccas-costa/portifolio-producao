'use client'
import { useQueryState } from 'nuqs'

export default function TesteNuqs() {
  const [name, setName] = useQueryState('name')
  return (
    <div>
      <input value={name || ''} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || 'anonymous visitor'}!</p>
    </div>
  )
}
