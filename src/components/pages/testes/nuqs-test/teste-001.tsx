'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export default function Teste001() {
  const [count, setCount] = useQueryState('count', parseAsInteger)

  return (
    <>
      <pre>count: {count}</pre>
      <div className="flex items-center gap-4">
        <button onClick={() => setCount(0)}>Reset</button>
        {/* handling null values in setCount is annoying: */}
        <button onClick={() => setCount((c) => c ?? 0 + 1)} className="text-xl">
          +
        </button>
        <button onClick={() => setCount((c) => c ?? 0 - 1)} className="text-xl">
          -
        </button>
        <button onClick={() => setCount(null)}>Clear</button>
      </div>
    </>
  )
}
