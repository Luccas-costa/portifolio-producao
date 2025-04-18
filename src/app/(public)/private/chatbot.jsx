'use client'

import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      setResponse(data.result || 'Nenhuma resposta recebida.')
    } catch (error) {
      setResponse('Erro ao buscar resposta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-2xl font-bold">Chat com Together AI</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite sua pergunta..."
          className="w-80 rounded border border-gray-300 p-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          {loading ? 'Carregando...' : 'Enviar'}
        </button>
      </form>

      {response && (
        <div className="mt-6 w-80 rounded border border-gray-300 p-4">
          <strong>Resposta:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  )
}
