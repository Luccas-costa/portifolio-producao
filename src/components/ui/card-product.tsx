'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
// import { useUrlBags } from '@/hooks/useUrlBags'
// import CardModal from './card-modal'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'

interface CardProductProps {
  cor: number
  id: number
  title: string
  description: string
  price: number
  image: string
  variantImages: string[]
}

export default function CardProduct({
  cor,
  id,
  title,
  // description,
  price,
  image,
  // variantImages,
}: CardProductProps) {
  const [priceFormatted, setPriceFormatted] = useState('')
  const [verification, setVerification] = useState(false)
  const [cart] = useCart()

  useEffect(() => {
    if (cart.bagsCart.length > 0) {
      setVerification(true)
    }
  }, [cart])

  // Função para formatar o preço
  const formatPrice = (price: number | undefined): string => {
    if (typeof price === 'number') {
      return price.toFixed(2).replace('.', ',')
    }
    return 'Erro'
  }

  // Atualiza o preço formatado quando o componente é montado ou o preço muda
  useEffect(() => {
    setPriceFormatted(formatPrice(price))
  }, [price])

  return (
    <a
      href="#products"
      className="h-[386px] w-[290px] cursor-pointer rounded-xl shadow-xl transition-all duration-200 hover:scale-110"
    >
      {verification ? (
        <Link
          href={`/pages/taster/?bagsCart=${cart.bagsCart}&idBagsTaster=${id}`}
        >
          <div
            className={`h-[290px] w-full rounded-t-xl ${
              cor > 0 ? 'bg-zinc-100/40' : 'bg-zinc-300/40'
            }`}
          >
            <Image src={image} alt="Imagem" width={290} height={290} />
          </div>
          <div className="h-[96px] w-full rounded-xl bg-white/60">
            <div className="flex h-full w-full flex-col justify-center gap-1 px-3">
              <div className="text-lg font-semibold">{title}</div>
              <div className="flex justify-end">
                <div className="font-bold text-primary">
                  R$ {priceFormatted}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          href={`/pages/taster/?idBagsTaster=${id}`}
          className="h-[386px] w-[290px] cursor-pointer rounded-xl shadow-xl transition-all duration-200 hover:scale-110"
          // onClick={() => handlerIsModalAdd(id)}
        >
          <div
            className={`h-[290px] w-full rounded-t-xl ${
              cor > 0 ? 'bg-zinc-100/40' : 'bg-zinc-300/40'
            }`}
          >
            <Image src={image} alt="Imagem" width={290} height={290} />
          </div>
          <div className="h-[96px] w-full rounded-xl bg-white/60">
            <div className="flex h-full w-full flex-col justify-center gap-1 px-3">
              <div className="text-lg font-semibold">{title}</div>
              <div className="flex justify-end">
                <div className="font-bold text-primary">
                  R$ {priceFormatted}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </a>
  )
}
