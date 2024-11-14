/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import HeartAnimated from '@/assets/heart-animated'
import { useAddingToCart } from '@/hooks/useAddingToCart'
import { useCart } from '@/hooks/useCart'
import {
  CaretDown,
  Ruler,
  ShareNetwork,
  Star,
} from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

interface InfosProps {
  title: string
  description: string
  price: number
  id: number
}

export default function Infos({ title, id, description, price }: InfosProps) {
  const [isOpenDescription, setIsOpenDescription] = useState<boolean>(true)
  const [isOpenFrete, setIsOpenFrete] = useState<boolean>(false)

  const [cart, setCart] = useCart()
  const [addingToCart, setAddingToCart] = useAddingToCart()

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
    <div className="flex h-full w-full flex-col">
      <div className="flex w-[500px] items-center justify-between">
        <div className="flex h-[30px] w-[70px] items-center justify-center bg-yellow-400 text-sm font-medium">
          10% off
        </div>
        <div className="flex items-center gap-4">
          <ShareNetwork weight="fill" color="#A1A1AA" size={28} />
          <HeartAnimated />
        </div>
      </div>

      <div className="pt-3 text-xl font-semibold">{title}</div>

      <div className="max-w-[80%] pt-2">{description}</div>

      <div className="my-4 flex cursor-pointer items-center gap-1">
        <Star size={26} weight="regular" color="#A1A1AA" />
        <Star size={26} weight="regular" color="#A1A1AA" />
        <Star size={26} weight="regular" color="#A1A1AA" />
        <Star size={26} weight="regular" color="#A1A1AA" />
        <Star size={26} weight="regular" color="#A1A1AA" />
        <div className="text-xs font-medium underline">
          faça o primeiro comentário
        </div>
      </div>

      <div className="flex items-end gap-3">
        <div className="font-bold text-zinc-500 line-through">
          R$ {oldPromoPrice}
        </div>
        <div className="text-xl font-bold text-zinc-700">{priceFormatted}</div>
      </div>

      <button className="mt-24 flex w-[60%] justify-center gap-1 rounded border border-zinc-500 bg-zinc-300/60 py-2 font-medium text-zinc-800 shadow hover:bg-zinc-300/90 active:bg-zinc-300/90">
        <Ruler size={24} color="#27272a " />
        Ver medidas
      </button>

      <button
        onClick={handlerNotification}
        className="mt-4 flex w-[92.5%] justify-center gap-1 rounded-md border bg-zinc-900 py-3 text-lg font-medium text-zinc-200 shadow hover:bg-zinc-800 active:bg-zinc-800"
      >
        Adicionar à sacola
      </button>

      <div className="mb-3 mt-[40px] h-[2px] w-[92.5%] bg-zinc-700/60" />

      <div className="flex flex-col">
        <div
          className="flex w-[92%] items-center justify-between text-xl font-bold text-zinc-500 transition-all duration-200"
          onClick={() => setIsOpenDescription(!isOpenDescription)}
        >
          descrição do produto
          <div
            className={`transition-all duration-200 ${isOpenDescription ? 'rotate-180' : ''}`}
          >
            <CaretDown size={28} color="#71717a " />
          </div>
        </div>
        {isOpenDescription && (
          <div className="mt-3 text-sm font-medium text-zinc-500 transition-all duration-200">
            <div className="pt-1">ref: {id}</div>
            <div className="pt-6">
              Bolsa estilo eco bag, sustentavel e duravel
            </div>
            <div className="pt-2">
              - em malha de algodão com fios criando efeito brilhoso
            </div>
            <div className="pt-2">
              - estampa feita a mão, dando um charme único pra peça
            </div>
            <div className="pt-2">- modelagem resitente</div>
            <div className="max-w-[80%] pt-2">
              - composição: 81% viscose, 8% poliéster, 8% poliamida,
            </div>
            <div>3% elastano | forro: 96% viscose, 4% elastano</div>

            <div className="pt-10">medidas da modelo:</div>
            <div className="pt-1">altura: w</div>
            <div className="pt-1">largura: x</div>
            <div className="pt-1">abertura: y</div>
            <div className="pt-1">altura alças: z</div>
          </div>
        )}
      </div>

      <div className="mb-3 mt-[40px] h-[2px] w-[92.5%] bg-zinc-700/60" />

      <div className="flex flex-col">
        <div
          className="flex w-[92%] items-center justify-between text-xl font-bold text-zinc-500 transition-all duration-200"
          onClick={() => setIsOpenFrete(!isOpenFrete)}
        >
          consultar frete
          <div
            className={`transition-all duration-200 ${isOpenFrete ? 'rotate-180' : ''}`}
          >
            <CaretDown size={28} color="#71717a " />
          </div>
        </div>
        {isOpenFrete && (
          <div className="mt-3 text-sm font-medium text-zinc-500 transition-all duration-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="min-h-[50px] w-[200px] rounded border border-zinc-400 bg-transparent pl-3 text-lg outline-none placeholder:text-zinc-400"
                placeholder="digite seu cep*"
              />
              <button className="min-h-[50px] w-[100px] rounded border border-zinc-800 text-zinc-800 hover:bg-zinc-300/50 active:bg-zinc-900 active:text-zinc-200">
                consultar
              </button>
            </div>
            <div className="mt-1 cursor-pointer text-sm text-zinc-900 underline">
              não sei meu cep
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
