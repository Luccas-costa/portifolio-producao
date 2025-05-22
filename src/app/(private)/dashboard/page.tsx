'use client'

import { useQueryState } from 'nuqs'

export default function NoIntroComponent() {
  const [noIntro, setNoIntro] = useQueryState('noIntro')

  const handleClick = () => {
    setNoIntro('true')
  }

  return (
    <div className="p-4">
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white"
        onClick={handleClick}
      >
        Ativar noIntro
      </button>

      {noIntro === 'true' && (
        <p className="mt-4 text-green-600">noIntro está ativado!</p>
      )}
    </div>
  )
}
