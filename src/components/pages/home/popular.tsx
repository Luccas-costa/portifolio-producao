import React from 'react'
import CardProduct from 'ui/card-product'

export default function Popular() {
  return (
    <div className="h-full w-full bg-zinc-200 pb-[150px] pt-[30px]">
      <div className="flex flex-col items-center gap-[80px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-zinc-700">Populares</div>
          <div className="text-xl font-medium text-zinc-500">
            Nosso produto mais vendido que você pode gostar
          </div>
        </div>
        <div>
          <div className="grid w-full grid-cols-4 grid-rows-1 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardProduct key={index} cor={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
