// app/congratulations/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import shape from '../../../../../public/assets/shape-login-register.png'

export default function Congratulations() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F0F0F]">
      {/* Background color circles - pode alterar as cores aqui */}
      <div
        className="absolute bottom-[-200px] left-10 h-[700px] w-[700px] rotate-[173deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="absolute right-20 top-20 h-[700px] w-[700px] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="absolute left-[20%] top-[-300px] h-[700px] w-[700px] rotate-[-50deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>

      {/* Card central */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl border border-gray-800 bg-[#1E1E1E] p-8 text-center shadow-lg">
        {/* Ícone */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-pink-500 bg-transparent">
          <svg
            className="h-8 w-8 text-pink-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Título */}
        <h1 className="mb-3 text-2xl font-bold text-white">
          Obrigado pelo seu feedback!
        </h1>

        {/* Texto */}
        <p className="mb-6 text-gray-300">
          Sua mensagem foi enviada com sucesso. <br />
          Luccas entrará em contato com você o mais rápido possível.
        </p>

        {/* Botão */}
        <Link href="/" className="inline-block">
          <button className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-2 py-3 font-semibold text-white shadow-lg transition hover:opacity-90">
            Voltar para a página inicial
          </button>
        </Link>
      </div>
    </div>
  )
}
