import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
// import styles from '@/styles/register-login-gradient.module.css'

export default function TextSide() {
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
        className="px-5 text-center text-6xl font-bold text-zinc-950"
        style={{ zIndex: 2 }}
      >
        Vamos conversar. Conte-me um pouco sobre o que deseja.
      </div>
      <div
        className="mt-3 text-center text-xl font-light text-zinc-950"
        style={{ zIndex: 2 }}
      >
        Vamos criar algo juntos 🤟
      </div>
      <div
        className="mt-2 flex h-[100px] items-center gap-3 rounded-xl bg-white/20 pl-8 pr-12"
        style={{ zIndex: 2 }}
      >
        <div
          className="flex size-[70px] items-center justify-center rounded-xl"
          style={{ zIndex: 2 }}
        >
          <EnvelopeSimple
            size={60}
            weight="regular"
            color="rgb(255 255 255 / 0.5)"
          />
        </div>
        <div className="text-lg font-medium" style={{ zIndex: 2 }}>
          <div>Envie-me para</div>
          <div
            className="bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] bg-clip-text text-transparent"
            style={{ zIndex: 2 }}
          >
            lucas.comercial@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
