'use client'
import HeartAnimated from '@/assets/heart-animated'
import { Minus, Plus, Trash } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'

export default function CardCart() {
  const [amount, setAmount] = useState<number>(1)

  const handleIncrementAmount = () => {
    setAmount(amount + 1)
  }
  const handleDecrementAmount = () => {
    if (amount === 1) {
      console.log('tem que tirar do carrinho')
    } else {
      setAmount(amount - 1)
    }
  }
  return (
    <div className="flex w-full items-center gap-4">
      <div className="flex h-[120px] w-[700px] items-center rounded-lg border-2 border-zinc-400 px-4">
        <div className="size-[90px] min-h-[90px] min-w-[90px] rounded-md border-2 border-zinc-400"></div>
        <div className="flex h-full w-full items-start justify-between">
          <div className="flex flex-col pl-2 pt-4">
            <div className="text-xl">Bag do Sol com frase</div>
            <div className="font-light">
              Estampa de sol com frase motivacional
            </div>
            <div className="mt-1 flex h-[30px] w-[50px] items-center justify-center rounded-md border-2 border-zinc-400 font-bold text-zinc-500">
              {amount < 10 ? `0${amount}` : amount}
            </div>
          </div>
          <div className="flex h-full flex-col items-end pt-3">
            <div className="pb-11">
              <HeartAnimated />
            </div>
            <div className="text-xl font-bold text-zinc-600/70">R$ 45,00</div>
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
