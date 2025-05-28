import Image from 'next/image'
import shape from '../../../../public/assets/shape-login-register.png'
import React from 'react'
import { EnvelopeSimple } from '@phosphor-icons/react'
// import styles from '@/styles/register-login-gradient.module.css'

export default function TextSideMobile() {
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
        Vamos conversar. Conte-me um pouco sobre o que deseja.
      </div>
      <div
        className="text-center text-lg font-light text-zinc-950 screen500:text-xl"
        style={{ zIndex: 2 }}
      >
        Vamos criar algo juntos 🤟
      </div>
      <div
        className="mt-2 flex h-[100px] items-center gap-3 rounded-xl bg-white/20 pl-2 pr-4 screen450:pl-8 screen450:pr-12"
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
