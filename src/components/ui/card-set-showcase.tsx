/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import HeartAnimated from '@/assets/heart-animated'
import { useAddingToCart } from '@/hooks/useAddingToCart'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import React, { useState } from 'react'

interface CardSetShowcaseProps {
  id: number
  title: string
  price: number
  imagem: string
}

export default function CardSetShowcase({
  id,
  title,
  price,
  imagem,
}: CardSetShowcaseProps) {
  const [cart, setCart] = useCart()
  const [addingToCart, setAddingToCart] = useAddingToCart()
  const [liked, setLiked] = useState(false)

  const handlerNotification = () => {
    setAddingToCart({
      addingToCart: true,
    })

    setCart((prevCart) => {
      const currentBags = prevCart.bagsCart
      const currentValue = currentBags.find(
        (value) => value.toString().slice(-5) === id.toString(),
      )

      // Se não houver nenhum valor com ID 99999, adicionar 199999 ao array
      if (!currentValue) {
        return {
          ...prevCart,
          bagsCart: [...currentBags, 100000 + id],
        }
      }

      // Extrai o número de quantidade e o ID do produto (últimos 5 dígitos)
      const quantity = Math.floor(currentValue / 100000) // Primeiro dígito (quantidade)
      const productId = currentValue % 100000 // Últimos 5 dígitos (ID do produto)

      // Incrementa a quantidade
      const newQuantity = quantity + 1
      const newValue = newQuantity * 100000 + productId

      // Se o valor for maior que o limite de quantidade (9), não faz nada
      if (newQuantity > 9) {
        return prevCart
      }

      return {
        ...prevCart,
        bagsCart: currentBags.map((value) =>
          value === currentValue ? newValue : value,
        ),
      }
    })
  }

  const oldPromoPrice2 = price + 4.91
  const oldPromoPrice = oldPromoPrice2.toFixed(2).replace('.', ',').toString()
  const priceFormatted = price.toFixed(2).replace('.', ',').toString()

  return (
    <div className="flex flex-col justify-center transition-all duration-200">
      <div className="relative flex h-[400px] w-[300px] items-center justify-center rounded border-2 border-zinc-400 shadow-lg">
        <Image src={imagem} alt={title} width={300} height={400} />
        <button
          onClick={(e) => {
            e.preventDefault() // Evita a navegação padrão
            // Coloque aqui qualquer outra lógica de salvar favorito
          }}
          className={`group absolute right-2 top-2 rounded-full bg-zinc-400/20 p-2 font-medium text-zinc-500/80`}
        >
          <div
            onClick={() => setLiked(!liked)}
            className="flex items-center gap-2"
          >
            <div className="hidden group-hover:flex">salvar favorito</div>
            <HeartAnimated liked={liked} />
          </div>
        </button>
      </div>
      <div className="pl-1 pt-1 text-lg font-medium text-zinc-600">{title}</div>
      <div className="flex items-center gap-4 pl-1">
        <div className="font-bold text-zinc-500 line-through">
          R$ {oldPromoPrice}
        </div>
        <div className="font-bold text-zinc-700">R$ {priceFormatted}</div>
      </div>
      <div className="ml-1 mt-3 h-[25px] w-[39px] rounded-2xl bg-[#F7DEAB] outline outline-[2px] outline-offset-2 outline-zinc-400" />
      <button
        onClick={handlerNotification}
        className="mt-4 w-full rounded border border-zinc-400 bg-white/20 py-2 font-semibold text-zinc-600/90 shadow hover:bg-transparent active:bg-zinc-400/50"
      >
        Adicionar à sacola
      </button>
    </div>
  )
}
