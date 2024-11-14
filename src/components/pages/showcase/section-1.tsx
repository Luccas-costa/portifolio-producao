import CardSetShowcase from 'ui/card-set-showcase'
import React, { Suspense } from 'react'
import Link from 'next/link'
import { PromoVerao } from '@/utils/showcase/promo-verao' // Atualize o caminho da importação conforme necessário
import { useCart } from '@/hooks/useCart'

export default function Section1() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  )
}

function Page() {
  const [cart] = useCart()
  return (
    <a id="novaTemporada">
      <div className="flex h-[700px] w-full flex-col gap-10 bg-zinc-300 px-[300px] py-[30px]">
        <div className="text-lg font-bold text-zinc-500">
          promo temporada verão
          <div className="h-1 w-[57px] rounded bg-zinc-500/90" />
        </div>
        <div className="flex items-center gap-[37px]">
          {PromoVerao.map((item) => (
            <Link
              key={item.id}
              href={`/pages/taster/?bagsCart=${cart.bagsCart}&idBagsTaster=${item.id}`}
            >
              <CardSetShowcase
                id={item.id}
                title={item.title}
                price={item.price}
                imagem={item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </a>
  )
}
