'use client'
import { useQueryState, parseAsBoolean } from 'nuqs'

export default function Teste003() {
  const [count, setCount] = useQueryState('false', parseAsBoolean)
  return (
    <>
      <pre>count: {count}</pre>
      <div className="flex items-center gap-4">
        <button onClick={() => setCount(!count)}>Check?</button>
      </div>
    </>
  )
}
