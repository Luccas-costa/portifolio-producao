import { ShieldCheckered } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function Card() {
  return (
    <div className="absolute left-1/2 top-[37%] z-20 h-full translate-x-[-50%]">
      <div
        className="relative flex h-[150px] w-[450px] flex-col items-start gap-3 rounded-[16px] border-[1.2px] border-white/20 bg-gradient-to-b from-white/10 to-white/30 px-5 py-6"
        style={{
          boxShadow:
            'inset -8px -9px 28px rgba(255, 255, 255, 0.1), inset 8px 9px 28px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* BOLA */}
        <div
          className="absolute right-[-20px] top-[-20px] flex size-[60px] items-center justify-center rounded-full bg-red-500 bg-[radial-gradient(circle,_#8C8CFF_0%,_#31318F_100%)]"
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
          Teste Gratuitamente
        </div>
        <div className="text-lg text-white/60">
          Nosso foco é te tornar um desenvolvedor unico, valorizado e altamente
          lucrativo
        </div>
      </div>
    </div>
  )
}
