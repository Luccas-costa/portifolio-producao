'use client'
import React, { useState } from 'react'
import fonts from '@/styles/globals/fonts.module.css'
import {
  EnvelopeSimple,
  LockLaminated,
  LockLaminatedOpen,
} from '@phosphor-icons/react/dist/ssr'
import { VerifyUser } from '@/db/verify-user'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

interface LoginSideProps {
  route?: string | null
}

export default function LoginSide({ route }: LoginSideProps) {
  const [passwordvisible, setPasswordvisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const router = useRouter()

  const handleSubmit = async () => {
    setError('')
    setEmailError(false)
    setPasswordError(false)

    let hasError = false

    if (!email.trim()) {
      setEmailError(true)
      hasError = true
    }

    if (!password.trim()) {
      setPasswordError(true)
      hasError = true
    }

    if (hasError) {
      setError('Por favor, preencha todos os campos.')
      setTimeout(() => setError(''), 5000) // ✅ Apaga erro depois de 3s
      return
    }

    const result = await VerifyUser(email, password)

    if (result.error) {
      setError(result.error)
      setTimeout(() => setError(''), 5000) // ✅ Apaga erro depois de 3s
      return
    }

    if (result.message) {
      // Apaga cookie antigo se existir
      Cookies.remove('token')
      // Seta novo cookie com validade 7 dias
      Cookies.set('token', result.message, { expires: 7, path: '/' })

      // Se route existir, redireciona para ele, senão vai para /professional
      if (route) {
        router.push('/' + route)
      } else {
        router.push('/')
      }
    }
  }

  return (
    <div
      className={`${fonts.monserrat} flex h-full w-[calc(100%-450px)] flex-col items-center justify-center gap-[16px] screen1100:w-[calc(100%-550px)] screen1200:w-[calc(100%-650px)]`}
    >
      <div className="translate-y-[-20px] text-7xl font-bold text-white">
        Fazer login
      </div>

      <div
        className={`flex h-[70px] w-[500px] items-center justify-center rounded-2xl ${emailError ? 'bg-red-500/30' : 'bg-white/10'} px-5`}
      >
        <input
          type="text"
          className="w-[450px] bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <EnvelopeSimple size={28} weight="light" color="#ffffff" />
      </div>

      <div
        className={`flex h-[70px] w-[500px] items-center justify-center rounded-2xl ${passwordError ? 'bg-red-500/30' : 'bg-white/10'} px-5`}
      >
        <input
          type={passwordvisible ? 'text' : 'password'}
          className="w-[450px] bg-transparent text-lg font-medium text-white placeholder:font-medium placeholder:text-zinc-300 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordvisible ? (
          <LockLaminatedOpen
            size={28}
            weight="light"
            color="#ffffff"
            onClick={() => setPasswordvisible(!passwordvisible)}
            className="cursor-pointer"
          />
        ) : (
          <LockLaminated
            size={28}
            weight="light"
            color="#ffffff"
            onClick={() => setPasswordvisible(!passwordvisible)}
            className="cursor-pointer"
          />
        )}
      </div>

      {error && <p className="text-center text-sm text-red-500">{error}</p>}

      <button
        onClick={handleSubmit}
        className="h-[60px] w-[500px] transform select-none rounded-2xl bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] text-lg font-bold text-zinc-950 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        Entrar
      </button>

      <button className="text-center font-light text-zinc-300 underline">
        Esqueceu sua senha?
      </button>
    </div>
  )
}
