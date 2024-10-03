import React from 'react'
import CardProduct from 'ui/card-product'
import { FavoriteBags } from '@/utils/favorite-bags'

export default function FavoriteProducts() {
  // Limitando a exibição de até 8 produtos
  const displayedBags = FavoriteBags.slice(0, 8)

  return (
    <div className="mt-[30px] h-full w-full pb-[150px]">
      <div className="flex flex-col items-center gap-[80px]">
        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl font-bold text-zinc-700">
            Produtos Favoritos
          </div>
          <div className="text-xl font-medium text-zinc-500">
            Encomende para você ou para seus entes queridos
          </div>
        </div>
        <div>
          <div className="grid w-full grid-cols-4 grid-rows-1 gap-8">
            {displayedBags.map((bag) => (
              <CardProduct
                key={bag.id}
                cor={0} // Pode ser ajustado conforme necessário
                id={bag.id}
                title={bag.title}
                description={bag.description}
                price={bag.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
