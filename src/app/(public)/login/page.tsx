'use client'
import React, { useState } from 'react'
import { VerifyUser } from '@/db/verify-user'
import Cookies from 'js-cookie'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')

    const result = await VerifyUser(email, password)

    if (result.error) {
      setError(result.error)
      return
    }

    if (result.message) {
      // Apaga cookie antigo se existir
      Cookies.remove('token')

      // Seta novo cookie com validade 7 dias
      Cookies.set('token', result.message, { expires: 7, path: '/' })
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="flex w-[350px] flex-col gap-6 rounded-xl bg-gray-800 p-8 shadow-2xl">
        <h2 className="text-center text-2xl font-bold text-white">Login</h2>
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
          Entrar
        </button>
        {error && (
          <p className="mt-2 text-center text-sm text-red-500">{error}</p>
        )}
      </div>
    </div>
  )
}
