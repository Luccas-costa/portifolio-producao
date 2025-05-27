import React from 'react'

export default function TextSide() {
  return (
    <div className="flex h-screen w-[50%] flex-col items-center justify-center gap-5">
      <div className="max-w-[600px] text-6xl font-bold text-white">
        Vamos conversar. <br /> Conte-me um pouco sobre o que deseja.
      </div>
      <div className="mt-2 translate-x-[-160px] text-xl font-semibold text-zinc-300">
        vamos criar algo juntos 🤟
      </div>
      <div className="flex h-[100px] translate-x-[-85px] items-center gap-3 rounded-xl bg-white/20 pl-8 pr-12">
        <div className="size-[70px] rounded-xl bg-white"></div>
        <div className="text-lg font-medium">
          <div>Envie-me para</div>
          <div className="bg-gradient-to-r from-[#FF7F11] to-[#FF11B8] bg-clip-text text-transparent">
            lucas.comercial@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}
