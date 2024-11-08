'use client'
import React from 'react'
import { HouseLine, Bag } from '@phosphor-icons/react/dist/ssr'
import { CalendarPlus } from 'lucide-react'
import LogoTransparentGray from '@/assets/logos/logo-transparent-gray'

interface NavBarProps {
  page: 'inicio' | 'pedidos' | 'adicionar' | null
  handlerChosen: (page: 'pedidos' | 'inicio' | 'adicionar') => void
}

export default function NavBar({ page, handlerChosen }: NavBarProps) {
  return (
    <div className="flex h-[50px] items-center justify-between pl-5 pt-5">
      <div className="flex space-x-3">
        <LogoTransparentGray width={40} height={40} />
        <div className="flex items-center pl-2 text-2xl text-zinc-500">|</div>

        <div
          className={`flex items-center space-x-2 pl-2 ${page === 'inicio' ? 'text-zinc-200' : 'text-zinc-500'} cursor-pointer font-semibold`}
          onClick={() => handlerChosen('inicio')}
        >
          <HouseLine
            size={28}
            color={page === 'inicio' ? 'white' : '#71717a'}
          />
          <span>Início</span>
        </div>

        <div
          className={`flex items-center space-x-2 pl-2 ${page === 'adicionar' ? 'text-zinc-200' : 'text-zinc-500'} cursor-pointer font-semibold`}
          onClick={() => handlerChosen('adicionar')}
        >
          <CalendarPlus
            size={24}
            color={page === 'adicionar' ? 'white' : '#71717a'}
          />
          <span>Adicionar</span>
        </div>

        <div
          className={`flex items-center space-x-2 pl-2 ${page === 'pedidos' ? 'text-zinc-200' : 'text-zinc-500'} cursor-pointer font-semibold`}
          onClick={() => handlerChosen('pedidos')}
        >
          <Bag size={28} color={page === 'pedidos' ? 'white' : '#71717a'} />
          <span>Pedidos</span>
        </div>
      </div>
    </div>
  )
}
