import HeartAnimated from '@/assets/heart-animated'
import { Minus, Plus, Trash } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'

interface CardCartProps {
  picture: string
  title: string
  description: string
  price: number
  amount: number
  id: number
  updateQuantity: (productId: number, newQuantity: number) => void
}

export default function CardCart({
  picture,
  title,
  description,
  price,
  amount,
  id,
  updateQuantity,
}: CardCartProps) {
  const formatPrice = price.toFixed(2).replace('.', ',')
  const truncatedDescription =
    description.length > 40 ? `${description.slice(0, 40)}...` : description

  const handleIncrementAmount = () => {
    if (amount < 9) {
      updateQuantity(id, amount + 1)
    }
  }

  const handleDecrementAmount = () => {
    if (amount > 1) {
      updateQuantity(id, amount - 1)
    } else {
      updateQuantity(id, 0)
    }
  }

  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex h-[120px] w-[700px] items-center rounded-lg border-2 border-zinc-400 px-4">
        <div className="size-[90px] min-h-[90px] min-w-[90px] rounded-md border-2 border-zinc-400">
          <Image src={picture} width={90} height={90} alt={title} />
        </div>
        <div className="flex h-full w-full items-start justify-between">
          <div className="flex flex-col pl-2 pt-4">
            <div className="text-xl">{title}</div>
            <div className="font-light">{truncatedDescription}</div>
            <div className="mt-1 flex h-[30px] w-[50px] items-center justify-center rounded-md border-2 border-zinc-400 font-bold text-zinc-500">
              {amount < 10 ? `0${amount}` : amount}
            </div>
          </div>
          <div className="flex h-full flex-col items-end pt-3">
            <div className="pb-11">
              <HeartAnimated />
            </div>
            <div className="text-xl font-bold text-zinc-600/70">
              R$ {formatPrice}
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[110px] w-[50px] flex-col items-center justify-evenly rounded-lg border-2 border-zinc-400">
        <div className="cursor-pointer" onClick={handleIncrementAmount}>
          <Plus size={30} weight="light" color="#09090b " />
        </div>
        <hr className="w-[70%] border border-zinc-400" />
        <div className="cursor-pointer" onClick={handleDecrementAmount}>
          {amount > 1 ? (
            <Minus size={30} weight="light" color="#09090b " />
          ) : (
            <Trash size={30} weight="light" color="#09090b " />
          )}
        </div>
      </div>
    </div>
  )
}
