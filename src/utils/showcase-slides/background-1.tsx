import React from 'react'
import Imagem from 'public/backgrounds/showcase/background-1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Background2() {
  return (
    <div className="relative h-[717px] w-full">
      <Image src={Imagem} alt="Imagem de fundo principal" />

      <div
        className="absolute left-[10%] top-[60%] h-full w-full text-5xl font-bold text-white"
        style={{ zIndex: 10 }}
      >
        NOVA COLEÇÃO
      </div>

      <div
        className="absolute left-[75%] top-[60%] h-full w-full text-xl font-bold text-white"
        style={{ zIndex: 10 }}
      >
        <div className="flex h-[40px] w-[140px] items-center justify-center rounded-lg bg-white font-bold text-zinc-800">
          <Link href="/">CONFERIR</Link>
        </div>
      </div>
    </div>
  )
}
