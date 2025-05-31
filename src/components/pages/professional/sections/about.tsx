'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from '@/styles/globals/fonts.module.css'

import ButtonSlider from '@/components/ui/button-slider'

import my from '../../../../../public/my/my2.jpg'
import assinatura from '../../../../../public/my/assinatura.png'
import ovini from '../../../../../public/assets/icons/astronaut/ovini1.png'
import codigodebarras from '../../../../../public/assets/codigodebarras.png'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 700)
    }

    // Adiciona o event listener no resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Remove o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div>
      {isMobile ? (
        <div
          className={`mt-[200px] pb-[300px] screen1200:pb-[170px]`}
          id="about"
        >
          <div className="flex h-full w-full flex-wrap justify-center gap-[20px] screen1200:flex-nowrap screen1300:gap-[100px] screen1500:ml-[150px] screen1500:justify-normal">
            <div className="mb-[100px] flex h-[400px] w-[350px] flex-col rounded-xl bg-zinc-200 screen440:h-[450px] screen440:w-[400px] screen500:h-[480px] screen500:w-[430px] screen550:h-[550px] screen550:w-[500px]">
              <div className="mb-[-10px] pt-[2px] text-center text-sm font-light text-zinc-950">
                2025
              </div>
              <div className="m-[10px] flex-1 overflow-hidden rounded-lg bg-black">
                <Image src={my} alt="my" width={500} height={500} />
              </div>
              <div className="flex h-[50px] items-center justify-between rounded-b-md bg-zinc-200 px-[20px]">
                <div
                  style={{ fontWeight: 300 }}
                  className={`text-xl text-zinc-950 screen440:text-2xl ${styles.monserrat}`}
                >
                  Luccas Costa
                </div>
                <div className="w-[140px] screen440:w-[160px]">
                  <Image src={codigodebarras} alt="codigodebarras" />
                </div>
              </div>
            </div>
            <div className="flex h-[570px] flex-col items-center justify-between text-zinc-200">
              <div className="flex flex-col items-center">
                <div
                  className={`relative text-7xl font-black screen550:text-8xl ${styles.monserrat}`}
                >
                  <div className="absolute right-[-26px] top-[-49px] h-[80px] w-[80px] rotate-[10deg] screen550:right-[-30px] screen550:top-[-60px] screen550:h-[100px] screen550:w-[100px]">
                    <Image src={ovini} alt="assinatura" />
                  </div>
                  about m<span className="text-[#E97511]">e</span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="h-1 w-[30px] rounded-sm bg-[#E97511]" />
                  <div className="screen550:text-lg">
                    E a final quem é Luccas Costa?
                  </div>
                  <div className="h-1 w-[30px] rounded-sm bg-[#E97511]" />
                </div>
                <div className="text-light mt-10 max-w-[90vw] text-center">
                  Olá, sou Luccas Costa. Sou de Sao Paulo - Sao jose dos campos.
                  Atualmente tenho 18 anos e sou apaixonado por tecnologia e
                  inovação, sempre buscando maneiras de tornar o mundo um lugar
                  melhor. Desde pequeno, sempre tive curiosidade em entender
                  como as coisas funcionam, o que me levou a explorar áreas como
                  programação, empreendorismo e desenvolvimento de soluções
                  criativas. Estou constantemente aprendendo e me desafiando
                  para evoluir tanto pessoal quanto profissionalmente.{' '}
                  <div className="mt-[10px] italic text-zinc-200/80 underline underline-offset-2">
                    Redefining the future one step at a time.
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col items-center">
                <ButtonSlider />
                <Image
                  src={assinatura}
                  alt="assinatura"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`mt-[200px] pb-[300px] screen1200:pb-[170px]`}
          id="about"
        >
          <div className="flex h-full w-full flex-wrap justify-center gap-[20px] screen1200:flex-nowrap screen1300:gap-[100px] screen1500:ml-[150px] screen1500:justify-normal screen1550:ml-0 screen1550:justify-center">
            <div className="mb-[100px] flex h-[400px] w-[350px] flex-col rounded-xl bg-zinc-200 screen440:h-[450px] screen440:w-[400px] screen500:h-[480px] screen500:w-[430px] screen550:h-[550px] screen550:w-[500px]">
              <div className="mb-[-10px] pt-[2px] text-center text-sm font-light text-zinc-950">
                2025
              </div>
              <div className="m-[10px] flex-1 overflow-hidden rounded-lg bg-black">
                <Image src={my} alt="my" width={500} height={500} />
              </div>
              <div className="flex h-[50px] items-center justify-between rounded-b-md bg-zinc-200 px-[20px]">
                <div
                  style={{ fontWeight: 300 }}
                  className={`text-xl text-zinc-950 screen440:text-2xl ${styles.monserrat}`}
                >
                  Luccas Costa
                </div>
                <div className="w-[140px] screen440:w-[160px]">
                  <Image src={codigodebarras} alt="codigodebarras" />
                </div>
              </div>
            </div>
            <div className="ml-0 flex h-[570px] translate-x-[10%] flex-col justify-between screen800:ml-[150px] screen800:translate-x-0 screen1200:ml-0">
              <>
                <div
                  className={`relative text-[74px] text-zinc-200 screen500:text-[84px] screen550:text-8xl ${styles.monserrat} translate-x-[-46px] font-black screen440:translate-x-[-20px] screen500:translate-x-[-36px] screen550:translate-x-[-45px] screen630:translate-x-[-10px] screen670:translate-x-0`}
                >
                  <div className="absolute right-[-24px] top-[-30px] h-[80px] w-[80px] rotate-[10deg] screen440:right-[11px] screen500:top-[-42px] screen500:h-[100px] screen500:w-[100px] screen550:right-[0px] screen550:top-[-60px] screen630:right-[70px] screen670:right-[118px]">
                    <Image src={ovini} alt="assinatura" />
                  </div>
                  about m<span className="text-[#E97511]">e</span>
                </div>
                <div className="mt-5 flex max-w-[520px] translate-x-[-50px] items-center justify-center gap-2 pl-2 text-zinc-200 screen500:translate-x-[-58px] screen630:translate-x-[-10px] screen670:translate-x-0 screen1200:mt-3 screen1200:justify-normal">
                  <div className="h-1 w-[30px] rounded-sm bg-[#E97511]" />
                  <div className="flex items-center gap-1 screen500:text-lg">
                    <span>E a final quem é Luccas Costa?</span>
                  </div>
                  <div className="block h-1 w-[30px] rounded-sm bg-[#E97511] screen1200:hidden" />
                </div>
                <div className="text-light mt-10 max-w-[380px] translate-x-[-48px] justify-center pl-2 text-center text-zinc-200 screen440:max-w-[420px] screen500:max-w-[480px] screen500:translate-x-[-52px] screen550:max-w-[530px] screen550:text-lg screen630:max-w-[600px] screen630:translate-x-[-50px] screen670:max-w-[650px] screen670:translate-x-[-70px] screen1200:mt-7 screen1200:translate-x-0 screen1200:justify-normal screen1200:text-start">
                  Olá, sou Luccas Costa. Sou de Sao Paulo - Sao jose dos campos.
                  Atualmente tenho 18 anos e sou apaixonado por tecnologia e
                  inovação, sempre buscando maneiras de tornar o mundo um lugar
                  melhor. Desde pequeno, sempre tive curiosidade em entender
                  como as coisas funcionam, o que me levou a explorar áreas como
                  programação, empreendorismo e desenvolvimento de soluções
                  criativas. Estou constantemente aprendendo e me desafiando
                  para evoluir tanto pessoal quanto profissionalmente.{' '}
                  <div className="mt-[10px] italic text-zinc-200/80 underline underline-offset-2">
                    Redefining the future one step at a time.
                  </div>
                </div>
              </>
              <div className="mt-16 flex translate-x-[-48px] flex-col items-center pl-2 screen500:translate-x-[-52px] screen630:translate-x-[-50px] screen670:translate-x-[-70px] screen1200:mt-0 screen1200:translate-x-0 screen1200:flex-row screen1200:gap-5">
                <ButtonSlider />
                <Image
                  src={assinatura}
                  alt="assinatura"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
