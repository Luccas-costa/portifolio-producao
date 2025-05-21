'use client'
import React, { useState } from 'react'
import { CreateUser } from '@/db/create-user'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setMessage('')
    setError('')

    const result = await CreateUser(name, email, password)

    if (result.error) {
      setError(result.error)
    } else if (result.message) {
      setMessage(result.message)
    } else {
      setMessage('Usuário criado com sucesso!')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="flex w-[350px] flex-col gap-6 rounded-xl bg-gray-800 p-8 shadow-2xl">
        <h2 className="text-center text-2xl font-bold text-white">Cadastro</h2>

        <input
          type="text"
          className="rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="rounded-lg bg-emerald-600 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-700"
        >
          Cadastrar-se
        </button>

        {error && <p className="text-center text-sm text-red-500">{error}</p>}
        {message && (
          <p className="text-center text-sm text-green-500">{message}</p>
        )}
      </div>
    </div>
  )
}
