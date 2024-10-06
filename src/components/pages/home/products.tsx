'use client'
import React, { useState, useEffect, Suspense } from 'react'
import CardProduct from 'ui/card-product'
import { Bags } from '@/utils/bags'

export default function Products() {
  const [displayCount, setDisplayCount] = useState(8)

  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth < 1300) {
        setDisplayCount(6)
      } else {
        setDisplayCount(8)
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
  const displayedBags = Bags.slice(0, displayCount)

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
          <div className="screen1300:grid-cols-4 screen1300:grid-rows-2 grid w-full grid-cols-3 grid-rows-2 gap-8">
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
