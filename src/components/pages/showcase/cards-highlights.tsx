import Image from 'next/image'
import React from 'react'

export default function CardsHighlights() {
  return (
    <div className="my-[90px] flex h-full w-full items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center gap-1 text-zinc-900 hover:bg-zinc-200/40">
        <div className="h-[370px] w-[400px] rounded bg-zinc-900">
          <Image
            src="/backgrounds/showcase/img-1.jpg"
            alt="teste"
            width={400}
            height={370}
          />
        </div>
        <div>Estampas</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-zinc-900 hover:bg-zinc-200/40">
        <div className="h-[370px] w-[400px] rounded bg-zinc-900">
          <Image
            src="/backgrounds/showcase/img-2.jpg"
            alt="teste"
            width={400}
            height={370}
          />
        </div>
        <div>Estilos</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-zinc-900 hover:bg-zinc-200/40">
        <div className="h-[370px] w-[400px] rounded bg-zinc-900">
          <Image
            src="/backgrounds/showcase/img-3.jpg"
            alt="teste"
            width={400}
            height={370}
          />
        </div>
        <div>Personalize</div>
      </div>
    </div>
  )
}
