'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'

import animated from '@/styles/globals/animated.module.css'
import gradient from '@/styles/globals/gradients.module.css'

import {
  ArrowRight,
  Code,
  CurrencyCircleDollar,
  PaintBrush,
} from '@phosphor-icons/react/dist/ssr'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import circulo from 'public/assets/circulo.svg'
import logo from 'public/logos/logo-tranparente.png'

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.to('#divGradient', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#divPai',
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true
        },
      })

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={container} className="relative">
      {/* Parte fixa na tela, fora do container animado */}
      <div className="font-clash mix-color-dodge fixed left-1/2 top-[37vh] z-50 w-[75vw] -translate-x-1/2 text-center text-[6.3vw] font-medium leading-[1] text-[#808080]">
        A melhor comunidade de desenvolvimento
      </div>

      {/* top section */}
      <div className="fixed left-1/2 top-[80px] z-20 flex w-[450px] translate-x-[-50%] flex-col items-center justify-center gap-5">
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
      <div className="fixed left-[10%] top-[40px] z-20 flex w-[80%] items-center justify-between">
        {/* fazer ela ficar meio transparente */}
        <Image width={40} height={40} src={logo} alt="logo" />
        <div className="cursor-pointer text-sm text-white/60 hover:underline">
          Comunidade GitHub
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-[60px] left-[10%] z-20 flex w-[80%] items-center justify-between">
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

      {/* Background */}
      <div
        id="divPai"
        className="relative min-h-[300vh] w-full overflow-hidden bg-[#08081E]"
      >
        <div id="divGradient" className="flex h-[100vh] w-full bg-[#08081E]">
          <div className={`h-[136vh] w-[50%] ${gradient.teste}`}></div>
          <div
            className={`h-[136vh] w-[50%] ${gradient.teste} [transform:rotateY(180deg)]`}
          ></div>
        </div>

        {/* <div id="divGradient2" className="flex h-[100vh] w-full bg-[#08081E]">
          <div className={`h-[136vh] w-[50%] ${gradient.testeoff}`}></div>
          <div
            className={`h-[136vh] w-[50%] ${gradient.testeoff} [transform:rotateY(180deg)]`}
          ></div>
        </div> */}

        <div
          id="sobreposicao"
          className={`pointer-events-none absolute left-0 top-0 h-[100vh] w-full ${gradient.teste2}`}
        ></div>
      </div>
    </div>
  )
}
