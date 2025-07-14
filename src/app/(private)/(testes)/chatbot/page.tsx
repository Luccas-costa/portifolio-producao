'use client'

import React, { useState } from 'react'

export default function Chat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  )
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()
    const assistantMessage = { role: 'assistant', content: data.reply }
    setMessages((prev) => [...prev, assistantMessage])
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#121212] p-4 text-zinc-200">
      <div className="w-full max-w-xl flex-1 space-y-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-zinc-800'}`}
          >
            <strong>{msg.role === 'user' ? 'Você' : 'Assistente'}:</strong>{' '}
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Carregando...</div>}
      </div>

      <div className="mt-4 flex w-full max-w-xl gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 rounded bg-zinc-700 p-2 text-white"
          placeholder="Digite sua mensagem..."
        />
        <button
          onClick={sendMessage}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
