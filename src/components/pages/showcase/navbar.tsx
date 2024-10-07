'use client'
import React, { useState } from 'react'
import LogoTransparentBlack from 'assets/logos/logo-transparent-black'
import LogoTransparentWhite from 'assets/logos/logo-transparent-white'
import {
  HeartStraight,
  MagnifyingGlass,
  Tote,
  Camera,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface NavbarProps {
  theme: 'light' | 'dark'
}

export default function Navbar({ theme }: NavbarProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div
      className={`flex h-[60px] w-full items-center justify-between px-[14vw] ${
        theme === 'light' ? 'text-zinc-200' : 'text-zinc-950'
      }`}
    >
      <div className="flex cursor-pointer items-center gap-6">
        <Link href="/">
          {theme === 'light' ? (
            <LogoTransparentWhite width={50} height={50} />
          ) : (
            <LogoTransparentBlack width={50} height={50} />
          )}
        </Link>
        <ul className={`flex items-center gap-2 text-sm font-light`}>
          <li className="cursor-pointer hover:underline">novidades</li>
          <li className="cursor-pointer hover:underline">acessórios</li>
          <li className="cursor-pointer hover:underline">temporadas</li>
          <li className="cursor-pointer hover:underline">personalize</li>
        </ul>
      </div>
      <div className="flex items-center gap-[30px]">
        <div
          className={`flex h-[32px] w-[285px] items-center justify-between rounded-lg border p-2 ${
            theme === 'light' ? 'border-zinc-200' : 'border-zinc-950'
          }`}
        >
          <input
            type="text"
            placeholder="Bag da temporada"
            className={`w-full flex-1 bg-transparent text-sm ${
              theme === 'light'
                ? 'placeholder:text-zinc-200'
                : 'placeholder:text-zinc-950'
            } outline-none focus:ring-0`}
          />
          <div className="flex items-center gap-2">
            <div className="cursor-pointer">
              <MagnifyingGlass size={16} />
            </div>
            <div>|</div>
            <div className="group relative cursor-pointer">
              <Camera size={18} />

              <div className="absolute left-1/2 top-full mt-2 hidden h-[90px] w-[320px] -translate-x-1/2 translate-y-[10px] flex-col rounded-md bg-white px-2 py-1 text-center text-zinc-950 shadow-xl group-hover:flex">
                <div className="absolute left-1/2 top-0 size-[10px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-zinc-400" />
                <span className="pt-1 text-xl font-bold">novidade</span>
                <p className="text-sm">
                  tire uma foto ou procure por uma imagem da sua galeria para
                  encontrar peças similares
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer text-xs font-light">entrar</div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HeartStraight size={18} weight={isHovered ? 'fill' : 'regular'} />
          </div>
          <div className="cursor-pointer">
            <Tote size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
