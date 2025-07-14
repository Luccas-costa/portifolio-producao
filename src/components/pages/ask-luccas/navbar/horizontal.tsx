import React from 'react'
import { CaretUpDown } from '@phosphor-icons/react/dist/ssr'

export default function Horizontal() {
  return (
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
  )
}
