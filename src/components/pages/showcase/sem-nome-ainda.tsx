import LogoTransparentBlack from '@/assets/logos/logo-transparent-black'
import CardCart from 'ui/card-cart'
import React from 'react'
import { Tote } from '@phosphor-icons/react/dist/ssr'

interface SemNomeAindaProps {
  handlerClose: () => void
}

export default function SemNomeAinda({ handlerClose }: SemNomeAindaProps) {
  return (
    <div className="flex h-full w-full flex-col p-5 pt-6 text-zinc-950">
      <div>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2 px-6 pt-4 text-3xl font-light">
            <Tote size={30} weight="light" color="#09090b " />
            <div>Itens</div>
          </div>
          <div className="px-5">
            <LogoTransparentBlack width={70} height={70} />
          </div>
        </div>
        <hr className="mx-3 mt-2 border border-zinc-500/80" />

        <div className="flex max-h-[calc(86%-90px)] flex-col gap-[20px] overflow-y-auto px-3 py-[20px]">
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
        </div>
        <hr className="mx-3 mt-2 border border-zinc-500/80" />
        <div className="flex items-center justify-end gap-3 pr-3 pt-4">
          <button
            onClick={handlerClose}
            className="rounded-lg bg-zinc-400/50 px-10 py-3 text-lg font-medium text-zinc-800 hover:bg-zinc-400/70 active:bg-zinc-400/70"
          >
            Fechar
          </button>
          <button className="rounded-lg bg-zinc-400/50 px-10 py-3 text-lg font-medium text-zinc-800 hover:bg-zinc-400/70 active:bg-zinc-400/70">
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
