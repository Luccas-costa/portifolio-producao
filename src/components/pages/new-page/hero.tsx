import React from 'react'
import Image from 'next/image'

import {
  ArrowRight,
  Code,
  CurrencyCircleDollar,
  PaintBrush,
} from '@phosphor-icons/react/dist/ssr'

import logo from 'public/logos/logo-tranparente.png'
import circulo from 'public/assets/circulo.svg'

import animated from '@/styles/globals/animated.module.css'
import gradient from '@/styles/globals/gradients.module.css'
// import Card from './card'

export default function Hero() {
  return (
    <div className="absolute flex h-[100vh] w-full items-center justify-center overflow-hidden bg-[#08081E]">
      {/* Gradient */}
      <div
        className={`absolute top-0 z-10 h-[100vh] w-[100vw] ${gradient.sobreposicao}`}
      ></div>
      {/* NORMAL */}
      {/* <div
        className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient}`}
      ></div>
      <div
        className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient} scale-x-[-1]`}
      ></div> */}
      {/* DIFERENTE */}
      <div
        className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient2}`}
      ></div>
      <div
        className={`h-[160vh] w-1/2 translate-y-[200px] ${gradient.conicGradient2} scale-x-[-1]`}
      ></div>

      {/* Conteudo */}

      {/* title */}
      <div className="font-clash mix-color-dodge absolute top-[37%] z-20 h-full w-[75%] text-center text-[6.3vw] font-medium leading-[1] text-[#808080]">
        A melhor comunidade de desenvolvimento
      </div>

      {/* <Card /> */}

      {/* top section */}
      <div className="absolute top-[80px] z-20 flex w-[450px] flex-col items-center justify-center gap-5">
        <div className="text-center text-xl text-white/80">
          Nosso foco é te tornar um desenvolvedor único, valorizado e altamente
          lucrativo
        </div>
        <div className="flex w-full items-center justify-center gap-5">
          <button className="flex items-center gap-3 rounded-[48px] bg-white/80 pb-[6px] pl-5 pr-[6px] pt-[6px] text-xl text-[#08081E]">
            <div>Inscrever-se</div>
            <div className="flex size-9 -rotate-45 items-center justify-center rounded-full bg-[#08081E]">
              <ArrowRight size={16} color="white" weight="regular" />
            </div>
          </button>
          <button className="h-[48px] w-[122px] rounded-[48px] bg-white/20 px-5 py-[6px] text-xl text-white/80">
            Contato
          </button>
        </div>
      </div>

      {/* NavBar */}
      <div className="absolute top-[40px] z-20 flex w-[90%] items-center justify-between">
        {/* fazer ela ficar meio transparente */}
        <Image width={40} height={40} src={logo} alt="logo" />
        <div className="cursor-pointer text-sm text-white/60 hover:underline">
          Comunidade GitHub
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-[60px] z-20 flex w-[90%] items-center justify-between">
        {/* Tags */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-[6px]">
            <PaintBrush
              size={26}
              color="rgba(255, 255, 255, 0.6)"
              weight="regular"
            />
            <div className="text-lg text-white/60">Design</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <CurrencyCircleDollar
              size={26}
              color="rgba(255, 255, 255, 0.6)"
              weight="regular"
            />
            <div className="text-lg text-white/60">Mercado</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <Code size={26} color="rgba(255, 255, 255, 0.6)" weight="regular" />
            <div className="text-lg text-white/60">Programação</div>
          </div>
        </div>
        {/* Estatisticas */}
        <div className="font-clash text-sm font-medium text-white/60">
          Luccas costa
        </div>

        {/* Circulo scroll */}
        <div className="relative bottom-[0px] right-[0px]">
          <Image
            width={144}
            height={144}
            src={circulo}
            alt="logo"
            className={animated.infiniteSpin}
          />
          <div className="absolute left-[46px] top-[44px]">
            <ArrowRight
              size={52}
              color="rgba(255, 255, 255, 0.6)"
              weight="regular"
              className="rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
