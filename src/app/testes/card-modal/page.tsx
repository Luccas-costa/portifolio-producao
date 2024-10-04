import {
  X,
  Star,
  Binoculars,
  ArrowRight,
  TiktokLogo,
  InstagramLogo,
} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function CardModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/50">
      <div
        className="absolute inset-0 flex h-full w-full items-center justify-center"
        // onClick={handlerIsModalRemove}
      ></div>
      <div className="relative flex h-[900px] w-[1500px] items-center rounded-xl bg-zinc-200">
        <div className="absolute left-0 top-0 flex size-[80px] translate-x-[-30%] translate-y-[-30%] items-center justify-center rounded-full bg-zinc-200/90 shadow-xl">
          <X size={50} color="#52525b " />
        </div>

        <div className="flex h-full w-[150px] flex-col items-center justify-center gap-4">
          <div className="size-[100px] rounded-lg bg-red-500 shadow-lg"></div>
          <div className="size-[100px] rounded-lg bg-red-500 shadow-lg"></div>
          <div className="size-[100px] rounded-lg bg-red-500 shadow-lg"></div>
          <div className="size-[100px] rounded-lg bg-red-500 shadow-lg"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-mediun text-zinc-700">
            início - bags - estampas - <span className="font-bold">TITLE</span>
          </div>
          <div className="flex h-[800px] w-[720px] flex-col rounded-lg border border-zinc-800 shadow-xl">
            <div className="flex-1"></div>
            <div className="flex h-[80px] border-t border-zinc-800">
              <div className="flex h-full w-1/2 items-center justify-center gap-2 border-r border-zinc-800 text-xl font-medium text-[#52525b]">
                <Binoculars size={40} color="#52525b" />
                Ver similares
              </div>
              <div className="flex h-full w-1/2 items-center justify-center gap-2 border-r border-zinc-800 text-xl font-medium text-[#52525b]">
                <Star size={40} color="#52525b" />
                Avaliações
              </div>
            </div>
          </div>
        </div>

        <div className="ml-[20px] mt-[150px] flex h-full flex-col text-[#52525b]">
          <div className="flex items-center gap-4">
            <div className="text-4xl text-zinc-600/50">Bag foto do Medina</div>
            <div className="text-4xl font-light text-zinc-600/50">|</div>
            <div className="flex items-center gap-2 text-xl font-medium underline">
              5.3 <Star size={25} color="#52525b" />
            </div>
          </div>

          <div className="pt-3 text-xs text-zinc-600/50">Código: 123456</div>

          <div className="pt-[50px] text-5xl font-bold text-zinc-700">
            Indisponivel
          </div>

          <div className="max-w-[70%] pt-[20px] text-sm font-medium text-zinc-600/50">
            Bag feita a mão da foto do medina e sua prancha nas olimpiadas
          </div>

          <div className="absolute bottom-[40px] w-[30%]">
            <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-zinc-300 py-3 hover:bg-zinc-400/40">
              <div>Levar para Compras</div>
              <ArrowRight size={25} color="#52525b" />
            </button>

            <div className="flex w-full items-center justify-between px-4 pt-2 text-sm">
              <div>Curtiu? Compartilhe essa peça!</div>
              <div className="flex gap-4">
                <InstagramLogo size={25} color="#52525b" />
                <TiktokLogo size={25} color="#52525b" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
