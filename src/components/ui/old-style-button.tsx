import React from 'react'

import { DotsThreeVertical } from '@phosphor-icons/react'

interface OldStyleButtonProps {
  title: string
}

export default function OldStyleButton({ title }: OldStyleButtonProps) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-[50px]">
      <div className="screen520:w-[470px] group relative h-[80px] w-[400px] transition-all duration-300 screen700:w-[535px]">
        {/* Conteudo div */}
        <div
          className="absolute h-[80px] w-full rounded-2xl bg-[#dccfe9] group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
          style={{ zIndex: 2 }}
        >
          <div className="flex h-full w-full items-center justify-between px-[10px]">
            <div className="size-[44px] rounded border-2 border-zinc-400/70"></div>
            <div className="text-xl font-medium text-zinc-600">{title}</div>
            <DotsThreeVertical size={24} weight="bold" color="#52525b " />
          </div>
        </div>
        {/* Sombra div */}
        <div
          className="absolute h-[80px] w-full translate-x-[10px] translate-y-[10px] rounded-2xl bg-black"
          style={{ zIndex: 1 }}
        ></div>
      </div>
    </div>
  )
}
