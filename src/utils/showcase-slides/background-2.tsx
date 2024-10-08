import React from 'react'
import Imagem from 'public/backgrounds/showcase/background-2.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Background1() {
  return (
    <div className="relative h-[717px] w-full">
      {/* Imagem de Fundo */}
      <div className="relative h-full w-full">
        <Image
          src={Imagem}
          alt="Imagem de fundo principal"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          style={{ zIndex: 5 }}
        />
      </div>

      {/* Texto sobreposto - TONS DE PRIMAVERA */}
      <div
        className="absolute rounded bg-black/50 p-4 text-5xl font-bold text-white"
        style={{ zIndex: 10, top: '50%', left: '10%' }}
      >
        TONS DE <br /> PRIMAVERA <br />
        <span className="text-3xl">🌵🌈🌻🌸</span>
      </div>

      {/* Botão "Conferir" */}
      <div className="absolute" style={{ zIndex: 10, top: '60%', left: '75%' }}>
        <div className="flex h-[40px] w-[140px] items-center justify-center rounded-lg bg-white p-2 font-bold text-zinc-800">
          <Link href="/">CONFERIR</Link>
        </div>
      </div>
    </div>
  )
}
