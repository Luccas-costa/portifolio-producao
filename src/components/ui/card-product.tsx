import Image from 'next/image'
import React from 'react'
import Imagem from 'public/testebag.png'

interface CardProductProps {
  cor: number
}

export default function CardProduct({ cor }: CardProductProps) {
  return (
    <div className="h-[386px] w-[290px] cursor-pointer rounded-xl shadow-xl transition-all duration-200 hover:scale-110">
      <div
        className={`h-[290px] w-full rounded-t-xl ${cor > 0 ? 'bg-zinc-100/40' : 'bg-zinc-300/40'}`}
      >
        <Image src={Imagem} alt="Imagem" />
      </div>
      <div className="h-[96px] w-full rounded-xl bg-white/60">
        <div className="flex h-full w-full flex-col justify-center gap-1 px-3">
          <div className="text-lg font-semibold">Bag Medina Sei la</div>
          <div className="flex justify-end">
            <div className="font-bold text-primary">R$ 45,00</div>
          </div>
        </div>
      </div>
    </div>
  )
}
