'use client'
import React, { Suspense, useEffect, useState } from 'react'
import CardProduct from 'ui/card-product'
import { FavoriteBags } from '@/utils/favorite-bags'

export default function FavoriteProducts() {
  const [displayCount, setDisplayCount] = useState(8)

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth < 1200) {
        setDisplayCount(3)
      } else {
        setDisplayCount(4)
      }
    }

    // Atualiza o valor inicial
    updateDisplayCount()

    // Adiciona um listener de resize
    window.addEventListener('resize', updateDisplayCount)

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateDisplayCount)
    }
  }, [])

  // Limitando a exibição dos produtos de acordo com o estado atual
  const displayedBags = FavoriteBags.slice(0, displayCount)

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
          <div className="screen1300:gap-8 screen1200:grid-cols-4 screen1200:gap-4 grid w-full grid-cols-3 grid-rows-1 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              {displayedBags.map((bag) => (
                <CardProduct
                  key={bag.id}
                  cor={0} // Pode ser ajustado conforme necessário
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
