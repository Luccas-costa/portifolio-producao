import { ShieldCheckered, AddressBook } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

interface CardProps {
  className?: string
  title: string
  card: number
}

export default function Card({ className = '', title, card }: CardProps) {
  return (
    <>
      {card === 1 ? (
        <Card1 title={title} className={className} card={1} />
      ) : null}
      {card === 2 ? (
        <Card2 title={title} className={className} card={2} />
      ) : null}
      {card === 3 ? (
        <Card3 title={title} className={className} card={3} />
      ) : null}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card1 = ({ title, className, card }: CardProps) => {
  return (
    <div
      // id={`card-${card}`}
      className={`absolute left-1/2 top-0 translate-x-[-50%] ${className}`}
    >
      <div
        className="relative flex h-[220px] w-[600px] flex-col items-start gap-3 rounded-[16px] border-[1.2px] border-white/20 bg-gradient-to-b from-white/10 to-white/30 px-5 py-6 mix-blend-color-dodge"
        style={{
          boxShadow:
            'inset -8px -9px 28px rgba(255, 255, 255, 0.1), inset 8px 9px 28px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* BOLA */}
        <div
          className="absolute right-[-20px] top-[-20px] flex size-[76px] items-center justify-center rounded-full bg-red-500 bg-[radial-gradient(circle,_#8C8CFF_0%,_#31318F_100%)]"
          style={{
            boxShadow: `
      inset -1px -1px 1px rgba(255, 255, 255, 0.15),
      inset 1px 1px 1px rgba(255, 255, 255, 0.15),
      0px 7px 7px rgba(0, 0, 0, 0.20)
    `,
          }}
        >
          <ShieldCheckered
            size={40}
            color="rgba(255, 255, 255, 0.9)"
            weight="regular"
          />
        </div>

        {/* TEXTO */}
        <div className="font-clash text-2xl font-medium text-white">
          {title}
        </div>
        <div className="text-lg text-white/60">
          Nosso foco é te tornar um desenvolvedor unico, valorizado e altamente
          lucrativo
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card2 = ({ title, className, card }: CardProps) => {
  return (
    <div
      // id={`card-${card}`}
      className={`absolute left-1/2 top-0 translate-x-[-50%] ${className}`}
    >
      <div
        className="relative flex h-[220px] w-[600px] flex-col items-start gap-3 rounded-[16px] border-[1.2px] border-white/20 bg-gradient-to-b from-white/10 to-white/30 px-5 py-6 mix-blend-color-dodge"
        style={{
          boxShadow:
            'inset -8px -9px 28px rgba(255, 255, 255, 0.1), inset 8px 9px 28px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* BOLA */}
        <div
          className="absolute right-[-20px] top-[-20px] flex size-[76px] items-center justify-center rounded-full bg-red-500 bg-[radial-gradient(circle,_#8C8CFF_0%,_#31318F_100%)]"
          style={{
            boxShadow: `
      inset -1px -1px 1px rgba(255, 255, 255, 0.15),
      inset 1px 1px 1px rgba(255, 255, 255, 0.15),
      0px 7px 7px rgba(0, 0, 0, 0.20)
    `,
          }}
        >
          <ShieldCheckered
            size={40}
            color="rgba(255, 255, 255, 0.9)"
            weight="regular"
          />
        </div>

        {/* TEXTO */}
        <div className="font-clash text-2xl font-medium text-white">
          {title}
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-full w-1/3 bg-red-500">Idealização</div>
          <div className="flex h-full flex-col gap-[6px]">
            <div className="h-[50%] w-[2px] bg-white/20"></div>
            <div className="h-[10px] w-[2px] rotate-45 bg-white/20"></div>
            <div className="h-[50%] w-[2px] bg-white/20"></div>
          </div>
          <div className="h-full w-1/3 bg-red-500">Desenvolvimento</div>
          <div className="flex h-full flex-col gap-[6px]">
            <div className="h-[50%] w-[2px] bg-white/20"></div>
            <div className="h-[10px] w-[2px] rotate-45 bg-white/20"></div>
            <div className="h-[50%] w-[2px] bg-white/20"></div>
          </div>
          <div className="h-full w-1/3 bg-red-500">Entrega</div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card3 = ({ title, className, card }: CardProps) => {
  return (
    <div
      // id={`card-${card}`}
      className={`absolute left-1/2 top-0 translate-x-[-50%] ${className}`}
    >
      <div
        className="relative flex h-[220px] w-[600px] flex-col items-start gap-3 rounded-[16px] border-[1.2px] border-white/20 bg-gradient-to-b from-white/10 to-white/30 px-5 py-6 mix-blend-color-dodge"
        style={{
          boxShadow:
            'inset -8px -9px 28px rgba(255, 255, 255, 0.1), inset 8px 9px 28px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* BOLA */}
        <div
          className="absolute right-[-20px] top-[-20px] flex size-[76px] items-center justify-center rounded-full bg-[radial-gradient(circle,_#8C8CFF_0%,_#31318F_100%)]"
          style={{
            boxShadow: `
      inset -1px -1px 1px rgba(255, 255, 255, 0.15),
      inset 1px 1px 1px rgba(255, 255, 255, 0.15),
      0px 7px 7px rgba(0, 0, 0, 0.20)
    `,
          }}
        >
          <AddressBook
            size={40}
            color="rgba(255, 255, 255, 0.9)"
            weight="regular"
          />
        </div>

        {/* TEXTO */}
        <div className="font-clash text-2xl font-medium text-white">
          {title}
        </div>
        <div className="flex h-full w-full flex-col justify-between">
          <div className="text-lg text-white/60">
            Olá, eu sou o Luccas Costa, desenvolvedor full stack e especialista
            em criar soluções inovadoras para o seu negócio.
          </div>
          <div className="flex w-full justify-between">
            <div></div>
            <button className="h-[46px] w-[150px] translate-y-[6px] rounded-[48px] bg-[linear-gradient(10deg,_#8C8CFF_0%,_#31318F_100%)] px-4 py-[6px] text-xl text-white/80 transition-all duration-200 hover:scale-105">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
