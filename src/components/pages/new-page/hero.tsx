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
import ButtonSlider from '@/components/ui/button-slider'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import Section3 from './sections/section3'

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#divPai',
          start: 'top top',
          end: '+=5000', // aumentei pra dar espaço pras novas seções
          pin: true,
          scrub: 2,
          // markers: true,
        },
      })

      // Gradientes e texto
      tl.to('#divGradient', { opacity: 0, ease: 'none', duration: 2 })
        .from('#divGradient2', { opacity: 0, ease: 'none', duration: 2 }, '<')
        .to('#tituloHero', { opacity: 0, ease: 'none', duration: 2 }, '<')

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
          i === 0 ? '>' : '+=0.3',
        )
        tl.to(
          card,
          {
            opacity: 0,
            filter: 'blur(30px)',
            y: 30,
            duration: 0.5,
          },
          '+=0.5',
        )
      })

      // Pega a duração atual da timeline para posicionar as animações divObrigado
      const duracaoCards = tl.duration()

      // Reseta z-index de navbar e top
      tl.to('#divTop', { zIndex: 0 })
      tl.to('#divNavBar', { zIndex: 0 })

      // Entrada da divObrigado
      tl.from(
        '#divObrigado',
        {
          opacity: 0,
          duration: 1,
        },
        duracaoCards - 1,
      )

      tl.to(
        '#divObrigado',
        {
          scaleX: 1,
          rotateX: 0,
          bottom: 0,
          borderRadius: 0,
          duration: 3,
          ease: 'power1.out',
        },
        duracaoCards - 0.5,
      )

      // Simulação do scroll entre seções
      // Nova1 entra, Obrigado sai pra cima
      tl.fromTo(
        '#divNova2',
        { yPercent: 100 },
        { yPercent: 0, duration: 2, ease: 'power1.inOut' },
        '+=2',
      )
      tl.fromTo(
        '#divNova1',
        { yPercent: 100 },
        { yPercent: 0, duration: 2, ease: 'power1.inOut' },
        '+=1',
      )
      tl.to(
        '#divObrigado',
        { yPercent: -100, duration: 2, ease: 'power1.inOut' },
        '<',
      )

      // Nova2 entra, Nova1 sai pra cima
      tl.fromTo(
        '#divNova3',
        { yPercent: 100 },
        { yPercent: 0, duration: 2, ease: 'power1.inOut' },
        '+=2',
      )
      tl.fromTo(
        '#divNova2',
        { yPercent: 100 },
        { yPercent: 0, duration: 2, ease: 'power1.inOut' },
        '+=1',
      )
      tl.to(
        '#divNova1',
        { yPercent: -100, duration: 2, ease: 'power1.inOut' },
        '<',
      )

      requestAnimationFrame(() => {
        ScrollTrigger.refresh()
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    // eslint-disable-next-line prettier/prettier
    <div ref={container} className="relative font-poppins">
      {/* Texto fixo */}
      <div
        id="tituloHero"
        className="fixed left-1/2 top-[37vh] z-50 w-[75vw] -translate-x-1/2 text-center font-clash text-[6.3vw] font-medium leading-[1] text-[#808080] mix-color-dodge"
      >
        {/* A melhor comunidade de desenvolvimento */}
        Transformando o futuro uma solução por vez
      </div>

      <div
        id="divCards"
        className="fixed left-1/2 top-[37vh] z-[60] flex -translate-x-1/2 flex-col items-center"
      >
        <Card title="Card 1" className="card" card={1} />
        <Card title="Card 2" className="card" card={2} />
        <Card title="Um pouco sobre mim" className="card" card={3} />
      </div>

      {/* Top section */}
      <div
        id="divTop"
        className="fixed left-1/2 top-[80px] z-[60] flex w-[450px] translate-x-[-50%] flex-col items-center justify-center gap-5"
      >
        <div className="text-center text-xl text-white/80">
          Vamos conversar e juntos transformar sua ideia em um projeto de
          sucesso.
        </div>
        <div className="flex w-full items-center justify-center gap-5">
          <ButtonSlider chosen={true} />
          <button className="h-[48px] w-[153px] rounded-[48px] bg-white/20 px-5 py-[6px] text-xl text-white/80 transition-all duration-200 hover:scale-105 hover:bg-white/30">
            Sobre mim
          </button>
        </div>
      </div>

      {/* NavBar */}
      <div
        id="divNavBar"
        className="fixed left-[10%] top-[40px] z-[60] flex w-[80%] items-center justify-between"
      >
        <Image width={40} height={40} src={logo} alt="logo" />
        <div className="cursor-pointer text-sm text-white/60 hover:underline">
          Fazer login
          {/* Bem vindo Luccas */}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-[60px] left-[10%] z-20 flex w-[80%] items-center justify-between">
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

        <div className="translate-y-[80px] font-clash text-sm font-medium text-white/60">
          Luccas costa
        </div>

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

      {/* Container Obrigado + próximas seções */}
      <div
        className="fixed z-50 h-[100vh] w-full transition-all duration-300"
        style={{ perspective: '3000px', perspectiveOrigin: '50% 50%' }}
      >
        {/* Obrigado */}
        <div
          id="divObrigado"
          style={{
            transform: 'rotateX(90deg) scale(0.45)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute bottom-[-21%] flex h-[100vh] w-full items-center justify-center rounded-[40px] bg-zinc-200"
        >
          <div className="font-clash text-[6.5vw] font-medium text-zinc-800">
            Obrigado
          </div>
        </div>

        <div
          id="divNova1"
          className="fixed z-40 flex h-[100vh] w-full items-center justify-center bg-[#101030] text-4xl text-white"
        >
          <Section1 />
        </div>

        <div
          id="divNova2"
          className="fixed z-30 flex h-[100vh] w-full items-center justify-center bg-[#202040] text-4xl text-white"
        >
          <Section2 />
        </div>

        <div
          id="divNova3"
          className="fixed z-30 flex h-[100vh] w-full items-center justify-center bg-[#202040] text-4xl text-white"
        >
          <Section3 />
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
          style={{ fontSize: '0' }}
          className="absolute inset-0 flex h-[100vh] w-full bg-[#08081E]"
        >
          <div
            className={`h-[150vh] w-[calc(50%+1px)] ${gradient.conicGradient}`}
          />
          <div
            className={`-ml-[1px] h-[150vh] w-[50%] ${gradient.conicGradient} [transform:scaleX(-1)]`}
          />
        </div>

        {/* divGradient2 (segunda camada por cima) */}
        <div
          id="divGradient2"
          style={{ fontSize: '0' }}
          className="absolute inset-0 flex h-[100vh] w-full bg-[#08081E]"
        >
          <div
            className={`h-[150vh] w-[calc(50%+1px)] ${gradient.conicGradient2}`}
          />
          <div
            className={`-ml-[1px] h-[150vh] w-[50%] ${gradient.conicGradient2} [transform:scaleX(-1)]`}
          />
        </div>

        {/* Sobreposição */}
        <div
          id="sobreposicao"
          className={`pointer-events-none absolute left-0 top-0 h-[100vh] w-full ${gradient.sobreposicao}`}
        />
      </div>
    </div>
  )
}
