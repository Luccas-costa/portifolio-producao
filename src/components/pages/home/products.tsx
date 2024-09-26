import React from 'react'
import CardProduct from 'ui/card-product'

export default function Products() {
  return (
    <div className="mt-[30px] h-full w-full pb-[50px]">
      <div className="flex flex-col items-center gap-[80px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-zinc-700">Produtos</div>
          <div className="text-xl font-medium text-zinc-500">
            Encomende para você ou para seus entes queridos
          </div>
        </div>
        <div>
          <div className="grid w-full grid-cols-4 grid-rows-2 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <CardProduct key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
