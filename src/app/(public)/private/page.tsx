'use client'

import { useState } from 'react'
import styles from '@/styles/gpt-text-effect.module.css'

export default function ChatPage() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    setResposta('')

    const res = await fetch('/api/pergunta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta }),
    })

    const data = await res.json()
    setResposta(data.resposta)
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-xl p-4">
      <h1 className="mb-4 text-xl">Faça sua pergunta:</h1>
      <input
        type="text"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        className="mb-2 w-full border p-2"
      />
      <button
        onClick={handleSubmit}
        className="rounded bg-blue-500 px-4 py-2 text-white"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      <div className="mt-4 min-h-[60px] rounded border bg-gray-100 p-4">
        {loading && (
          <span className={styles.gradientText}>Buscando resposta...</span>
        )}
        {!loading && resposta && (
          <div>
            <strong>Resposta:</strong> {resposta}
          </div>
        )}
      </div>
    </div>
  )
}
