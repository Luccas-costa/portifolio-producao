'use client'
import React, { useState } from 'react'
import Minilink from './minilink'
import Image from 'next/image'
import {
  ArrowClockwiseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  GlobeIcon,
} from '@phosphor-icons/react'

export default function Display() {
  const [activeIndex, setActiveIndex] = useState(0) // primeiro ativo

  const links = ['Laudy', 'Syscare', 'Mmadame', 'Tekobag']

  return (
    <div className="mt-[140px] flex h-full w-full justify-center">
      <div className="relative h-full w-[80vw] border border-zinc-400/30 bg-white shadow-lg">
        <div className="absolute h-[26px] w-[1px] translate-y-[-13px] bg-black"></div>
        <div className="absolute h-[1px] w-[20px] bg-black"></div>
        <div className="absolute right-0 h-[26px] w-[1px] translate-y-[-13px] bg-black"></div>
        <div className="absolute right-0 h-[1px] w-[20px] bg-black"></div>
        <div
          className="relative left-1/2 top-[-90px] flex h-[800px] w-[65vw] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border border-black/10 bg-white"
          style={{ boxShadow: '0 8px 24px 8px #0000001a' }}
        >
          <div className="flex h-[50px] items-center bg-[#F2F2F2] px-5">
            <div className="h-[12px] w-[12px] rounded-full bg-red-500" />
            <div className="mx-[6px] h-[12px] w-[12px] rounded-full bg-yellow-500" />
            <div className="h-[12px] w-[12px] rounded-full bg-green-500" />

            <div className="ml-5 flex gap-2">
              {links.map((label, index) => (
                <Minilink
                  key={label}
                  title={label}
                  active={activeIndex === index}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 px-5">
            <ArrowLeftIcon size={14} color="black" weight="bold" />
            <ArrowRightIcon size={14} color="black" weight="bold" />
            <ArrowClockwiseIcon size={14} color="black" weight="bold" />
            <div></div>
            <div className="flex h-[40px] w-full flex-1 items-center gap-1 rounded-full border border-black/10 bg-[#F2F2F2] px-3 text-sm text-black">
              <GlobeIcon size={16} color="black" weight="light" />
              <div>laudycardio.com</div>
            </div>
          </div>

          <div className="mx-auto mb-[10px] mt-2 aspect-video w-[98%] rounded-xl bg-[#F1F1F1] p-[4px]">
            <Image
              src="/portifolio/telalaudy.png"
              alt="project screenshot"
              width={1200}
              height={675}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
