import React, { Suspense } from 'react'
import CardProduct from 'ui/card-product'
import { Bags } from '@/utils/bags' // Importando a lista de Bags

export default function Products() {
  // Limitando a exibição de até 8 produtos
  const displayedBags = Bags.slice(0, 8)

  return (
    <div className="mt-[30px] h-full w-full pb-[50px]" id="products">
      <div className="flex flex-col items-center gap-[80px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-zinc-700">Produtos</div>
          <div className="text-xl font-medium text-zinc-500">
            Encomende para você ou para seus entes queridos
          </div>
        </div>
        <div>
          <div className="grid w-full grid-cols-4 grid-rows-2 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              {displayedBags.map((bag) => (
                <CardProduct
                  key={bag.id}
                  cor={0}
                  id={bag.id}
                  title={bag.title}
                  description={bag.description}
                  price={bag.price}
                  image={bag.image}
                  variantImages={bag.variant_images}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
