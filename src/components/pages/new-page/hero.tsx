/* eslint-disable prettier/prettier */
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
import Card from './card'

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)

useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#divPai',
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: 2,
        // markers: true,
      },
    })

    // Gradientes e texto
    tl.to('#divGradient', { opacity: 0, ease: 'none' })
      .from('#divGradient2', { opacity: 0, ease: 'none' }, '<')
      .to('#tituloHero', { opacity: 0, ease: 'none' }, '<')

    // Cards — animação sequencial de entrada e saída
    const listaCards = gsap.utils.toArray('.card') as HTMLElement[]
    listaCards.forEach((card, i) => {
      tl.from(
        card,
        {
          opacity: 0,
          filter: 'blur(30px)',
          y: 30,
          duration: 0.5,
        },
        i === 0 ? '>' : '+=0.3'
      )
      tl.to(
        card,
        {
          opacity: 0,
          filter: 'blur(30px)',
          y: 30,
          duration: 0.5,
        },
        '+=0.5'
      )
    })

    // Pega a duração atual da timeline para posicionar as animações divObrigado
    const duracaoCards = tl.duration()

    // Começa 0.5 segundos antes do final da timeline
    tl.from(
      '#divObrigado',
      {
        opacity: 0,
        duration: 0.5,
      },
      duracaoCards - 0.5
    )

    tl.to(
      '#divObrigado',
      {
        scaleX: 1,
        rotateX: 0,
        bottom: 0,
        borderRadius: 0,
        duration: 1,
        ease: 'power1.out',
      },
      duracaoCards - 0.5
    )

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }, container)

  return () => ctx.revert()
}, [])

  return (
    <div ref={container} className="relative font-poppins" >
      {/* Texto fixo */}
      <div id="tituloHero" className="fixed left-1/2 top-[37vh] z-50 w-[75vw] -translate-x-1/2 text-center font-clash text-[6.3vw] font-medium leading-[1] text-[#808080] mix-color-dodge">
        A melhor comunidade de desenvolvimento
      </div>

<div id="divCards" className="fixed left-1/2 top-[37vh] z-40 flex flex-col items-center -translate-x-1/2">
  <Card title="Card 1" className="card" />
  <Card title="Card 2" className="card" />
  <Card title="Card 3" className="card" />
</div>


      {/* Top section */}
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
        <Image width={40} height={40} src={logo} alt="logo" />
        <div className="cursor-pointer text-sm text-white/60 hover:underline">
          Comunidade GitHub
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-[60px] left-[10%] z-20 flex w-[80%] items-center justify-between">
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-[6px]">
            <PaintBrush size={26} color="rgba(255, 255, 255, 0.6)" weight="regular" />
            <div className="text-lg text-white/60">Design</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <CurrencyCircleDollar size={26} color="rgba(255, 255, 255, 0.6)" weight="regular" />
            <div className="text-lg text-white/60">Mercado</div>
          </div>
          <div className="flex items-center gap-[6px]">
            <Code size={26} color="rgba(255, 255, 255, 0.6)" weight="regular" />
            <div className="text-lg text-white/60">Programação</div>
          </div>
        </div>

        <div className="font-clash text-sm font-medium text-white/60">Luccas costa</div>

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

<div className='z-50 fixed  transition-all duration-300 w-full h-[100vh]' style={{ perspective: '3000px', perspectiveOrigin: '50% 50%' }}>
  <div
    id="divObrigado"
    style={{ transform: 'rotateX(90deg) scale(0.45)', transformStyle: 'preserve-3d' }}
    className="w-full h-[100vh] absolute bottom-[-18%] bg-[#E6E6E6] flex items-center justify-center rounded-[40px]"
  >
    <div className="text-[6.5vw] font-clash text-zinc-800 font-medium">Obrigado</div>
  </div>
</div>

      {/* Background */}
      <div
        id="divPai"
        className="relative min-h-[300vh] w-full overflow-hidden bg-[#08081E]"
      >
        {/* divGradient (primeira camada) */}
        <div
          id="divGradient"
          className="absolute inset-0 flex h-[100vh] w-full bg-[#08081E]"
        >
          <div className={`h-[136vh] w-[50%] ${gradient.teste}`} />
          <div
            className={`h-[136vh] w-[50%] ${gradient.teste} [transform:rotateY(180deg)]`}
          />
        </div>

        {/* divGradient2 (segunda camada por cima) */}
        <div
          id="divGradient2"
          className="absolute inset-0 flex h-[100vh] w-full bg-[#08081E]"
        >
          <div className={`h-[136vh] w-[50%] ${gradient.testeoff}`} />
          <div
            className={`h-[136vh] w-[50%] ${gradient.testeoff} [transform:rotateY(180deg)]`}
          />
        </div>

        {/* Sobreposição */}
        <div
          id="sobreposicao"
          className={`pointer-events-none absolute left-0 top-0 h-[100vh] w-full ${gradient.teste2}`}
        />
      </div>
    </div>
  )
}
