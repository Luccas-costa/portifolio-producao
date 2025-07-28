'use client'

import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import { GetUserName } from '@/hooks/get-username'

export default function TextSide() {
  const [copied, setCopied] = useState(false)
  const [userName, setUserName] = useState<string>('')

  const handleCopy = () => {
    navigator.clipboard.writeText('lucas.comercial@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 5000) // 3 segundos
  }

  useEffect(() => {
    GetUserName(setUserName)
  }, []) // <-- rodar só 1 vez

  return (
    <div className="relative flex h-full w-[450px] flex-col items-center justify-center gap-4 overflow-hidden rounded-r-2xl bg-zinc-200 screen1100:w-[550px] screen1200:w-[650px]">
      <div
        className="absolute bottom-[-90px] left-[-1px] h-[700px] w-[700px] rotate-[173deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="absolute right-[80px] top-[-210px] h-[700px] w-[700px] rotate-[-22deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <Link
        style={{ zIndex: 2 }}
        href="/professional"
        className="absolute left-4 top-4 flex cursor-pointer items-center gap-1 text-lg font-medium text-black"
      >
        <ArrowLeft size={24} weight="bold" color="black" />
        <div>Voltar</div>
      </Link>

      <div
        className="px-8 text-center text-6xl font-bold text-zinc-950"
        style={{ zIndex: 2 }}
      >
        {userName}, Conte-me um pouco sobre o que deseja.
      </div>

      <div
        className="mt-3 text-center text-xl font-light text-zinc-950"
        style={{ zIndex: 2 }}
      >
        Vamos criar algo juntos 🤟
      </div>

      <div
        onClick={handleCopy}
        className={`${copied && 'hidden'} group mt-2 flex h-[100px] cursor-pointer items-center gap-3 rounded-xl border border-zinc-950 pl-8 pr-12 text-zinc-950 transition-all duration-300 hover:bg-zinc-950 hover:text-zinc-200 active:border-none active:bg-gradient-to-r active:from-[#FF7F11] active:to-[#FF11B8] active:text-zinc-200`}
        style={{ zIndex: 2 }}
      >
        <div
          className="flex size-[70px] items-center justify-center rounded-xl"
          style={{ zIndex: 2 }}
        >
          <EnvelopeSimple
            size={70}
            weight="thin"
            className="text-zinc-950 transition-all duration-300 group-hover:text-white group-active:text-white"
          />
        </div>
        <div className="text-lg" style={{ zIndex: 2 }}>
          <div>Envie-me para</div>
          <div
            className="bg-clip-text text-transparent text-zinc-950 transition-all duration-300 group-hover:text-zinc-200 group-active:text-zinc-200"
            style={{ zIndex: 2 }}
          >
            lucas.comercial@gmail.com
          </div>
        </div>
      </div>
      {copied && (
        <>
          <div
            onClick={handleCopy}
            className="mt-2 flex h-[100px] cursor-pointer items-center gap-3 rounded-xl bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] pl-[72px] pr-[88px] text-zinc-200 transition-all duration-300"
            style={{ zIndex: 2 }}
          >
            <div
              className="flex size-[70px] items-center justify-center rounded-xl"
              style={{ zIndex: 2 }}
            >
              <EnvelopeSimple size={70} weight="thin" className="text-white" />
            </div>
            <div className="text-2xl font-light">Email Copiado</div>
          </div>
        </>
      )}
    </div>
  )
}
