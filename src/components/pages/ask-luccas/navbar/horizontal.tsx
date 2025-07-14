import React from 'react'
import { CaretUpDown } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'

export default function Horizontal() {
  return (
    <div className="flex w-[100vw] items-center justify-between pr-[26px]">
      <div className="flex translate-x-[7px] translate-y-[4px] items-center gap-2 rounded-lg p-[6px]">
        {/* Parte que reage ao hover */}
        <div className="flex items-center gap-2 rounded-lg p-[6px] transition-all duration-200 hover:cursor-pointer hover:bg-[#202123]">
          <div className="flex size-[25px] items-center justify-center rounded-full bg-[#F7F7F8] text-sm font-medium">
            <span className="translate-y-[-1px]">L</span>
          </div>
          <div className="translate-y-[-2px] text-[14px] font-medium text-[#D9D9E3]">
            Luccas
          </div>
          <CaretUpDown
            size={14}
            className="translate-x-[-2px] translate-y-[-1px] text-[#D9D9E3]"
            weight="regular"
          />
        </div>

        {/* Parte que não reage ao hover */}
        <div className="flex items-center gap-1">
          <div className="translate-x-[-8px] translate-y-[-1px] text-[12px] font-bold text-zinc-500">
            /
          </div>
          <div className="translate-x-[-2px] translate-y-[-1px] text-[13px] font-medium text-white">
            ask luccas
          </div>
        </div>
      </div>
      <div className="flex translate-y-[3px] gap-4">
        <Link
          href="/profissional"
          className="text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
        >
          Ver portifólio
        </Link>
        <Link
          href="/contate-me"
          className="text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
        >
          Contate-me
        </Link>
        <Link
          href="/"
          className="group flex items-center gap-1 text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
        >
          <ArrowLeft
            size={22}
            className="translate-y-[-1px] text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
            weight="regular"
          />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  )
}
