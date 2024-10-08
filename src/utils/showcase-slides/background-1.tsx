import React from 'react'
import Imagem from 'public/backgrounds/showcase/background-1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Background2() {
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
          style={{ zIndex: 10 }}
        />
      </div>

      {/* Texto sobreposto - NOVA COLEÇÃO */}
      <div
        className="absolute rounded bg-black/50 p-4 text-5xl font-bold text-white"
        style={{ zIndex: 20, top: '60%', left: '10%' }}
      >
        NOVA COLEÇÃO
      </div>

      {/* Botão "Conferir" */}
      <div className="absolute" style={{ zIndex: 20, top: '60%', left: '75%' }}>
        <div className="flex h-[40px] w-[140px] items-center justify-center rounded-lg bg-white p-2 font-bold text-zinc-800">
          <Link href="/">CONFERIR</Link>
        </div>
      </div>
    </div>
  )
}
