'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import Imagem from 'public/bags/testebag.png'
import { useUrlBags } from '@/hooks/useUrlBags'

import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

interface CardProductProps {
  cor: number
  id: number
  title: string
  description: string
  price: number
}

export default function CardProduct({
  cor,
  id,
  title,
  description,
  price,
}: CardProductProps) {
  const [isModal, setIsModal] = useState(false)
  const [priceFormatted, setPriceFormatted] = useState('')

  const [, setBags] = useUrlBags()

  // Função para formatar o preço
  // Função para formatar o preço
  const formatPrice = (price: number | undefined): string => {
    if (typeof price === 'number') {
      return price.toFixed(2).replace('.', ',')
    }
    return 'Erro' // Retorno padrão caso o preço seja inválido
  }

  // Atualiza o preço formatado quando o componente é montado ou o preço muda
  useEffect(() => {
    setPriceFormatted(formatPrice(price))
  }, [price])

  const handlerIsModalAdd = (id: number) => {
    setIsModal(true)
    setBags({ idBags: id })
  }
  const handlerIsModalRemove = () => {
    setIsModal(false)
    setBags({ idBags: null }) // Limpa todos os parâmetros da URL
  }

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/50">
          <div
            className="absolute inset-0 h-full w-full"
            onClick={handlerIsModalRemove}
          ></div>
          <div className="relative h-[800px] w-[650px] rounded-xl">
            <div className="relative h-[660px] w-full translate-y-[20px] rounded-t-xl bg-zinc-200/60">
              <div className="absolute left-2 top-2 z-10 text-5xl font-extralight text-zinc-700">
                {title}
              </div>
              <Image src={Imagem} alt="Imagem" fill />
            </div>
            <div className="z-10 h-[150px] w-full rounded-xl bg-zinc-200 px-2 pt-5">
              <div className="min-h-[80px] overflow-hidden text-center text-lg font-medium text-zinc-700">
                {description}
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="opacity-0">.</div>
                <div className="flex items-center gap-3">
                  <button
                    className="rounded-xl bg-zinc-400/60 px-3 py-2 text-zinc-800 hover:bg-zinc-400"
                    onClick={handlerIsModalRemove}
                  >
                    Cancelar
                  </button>
                  <button className="flex items-center gap-1 rounded-xl bg-variant_purple/90 px-3 py-2 text-zinc-800 hover:bg-variant_purple">
                    Ir para compras
                    <ArrowRight color="#52525b" size={20} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="h-[386px] w-[290px] cursor-pointer rounded-xl shadow-xl transition-all duration-200 hover:scale-110"
        onClick={() => handlerIsModalAdd(id)}
      >
        <div
          className={`h-[290px] w-full rounded-t-xl ${
            cor > 0 ? 'bg-zinc-100/40' : 'bg-zinc-300/40'
          }`}
        >
          <Image src={Imagem} alt="Imagem" />
        </div>
        <div className="h-[96px] w-full rounded-xl bg-white/60">
          <div className="flex h-full w-full flex-col justify-center gap-1 px-3">
            <div className="text-lg font-semibold">Bag Medina Sei la</div>
            <div className="flex justify-end">
              <div className="font-bold text-primary">R$ {priceFormatted}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
