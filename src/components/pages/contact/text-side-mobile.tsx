'use client'
import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React, { useEffect, useState } from 'react'
import { EnvelopeSimple } from '@phosphor-icons/react'
import { GetUserName } from '@/hooks/get-username'
// import styles from '@/styles/register-login-gradient.module.css'

export default function TextSideMobile() {
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
    <div className="relative flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-b-2xl bg-zinc-200 screen1100:w-[550px] screen1200:w-[650px]">
      <div
        className="absolute bottom-[-210px] left-[-1px] h-[700px] w-[700px] rotate-[173deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="absolute right-[80px] top-[-300px] h-[700px] w-[700px] rotate-[-22deg] select-none"
        style={{ zIndex: 1 }}
      >
        <Image src={shape} alt="shape" className="blur-lg" />
      </div>
      <div
        className="px-2 text-center text-4xl font-bold text-zinc-950 screen500:text-5xl screen670:text-6xl screen1100:text-7xl"
        style={{ zIndex: 2 }}
      >
        {userName}, Conte-me um pouco sobre o que deseja.
      </div>
      <div
        className="text-center text-lg font-light text-zinc-950 screen500:text-xl"
        style={{ zIndex: 2 }}
      >
        Vamos criar algo juntos 🤟
      </div>
      <div
        onClick={handleCopy}
        className={`${copied && 'hidden'} group mt-2 flex h-[100px] cursor-pointer items-center gap-3 rounded-xl border border-zinc-950 pl-2 pr-4 text-zinc-950 transition-all duration-300 active:bg-zinc-950 active:text-zinc-200 screen450:pl-8 screen450:pr-12`}
        style={{ zIndex: 2 }}
      >
        <div
          className="flex size-[70px] items-center justify-center rounded-xl"
          style={{ zIndex: 2 }}
        >
          <EnvelopeSimple
            size={70}
            weight="thin"
            className="text-zinc-950 transition-all duration-300 group-active:text-white"
          />
        </div>
        <div className="text-lg font-medium" style={{ zIndex: 2 }}>
          <div>Envie-me para</div>
          <div
            className="bg-clip-text text-transparent text-zinc-950 transition-all duration-300 group-active:text-zinc-200"
            style={{ zIndex: 2 }}
          >
            lucas.comercial@gmail.com
          </div>
        </div>
      </div>
      {copied && (
        <>
          <div
            className="mt-2 flex h-[100px] cursor-pointer items-center gap-3 rounded-xl bg-zinc-950 pl-[48px] pr-[56px] text-zinc-200 transition-all duration-300 screen450:pl-[72px] screen450:pr-[88px]"
            style={{ zIndex: 2 }}
          >
            <div
              className="flex size-[70px] items-center justify-center rounded-xl"
              style={{ zIndex: 2 }}
            >
              <EnvelopeSimple
                size={70}
                weight="thin"
                className="text-white transition-all duration-300"
              />
            </div>
            <div className="text-2xl font-light">Email Copiado</div>
          </div>
        </>
      )}
    </div>
  )
}
