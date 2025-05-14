import React from 'react'
import Image from 'next/image'

import styles from '@/styles/fonts.module.css'

import ButtonSlider from '@/components/ui/button-slider'

import my from '../../../../../public/my/my2.jpg'
import assinatura from '../../../../../public/my/assinatura.png'
import ovini from '../../../../../public/assets/icons/astronaut/ovini1.png'
import codigodebarras from '../../../../../public/assets/codigodebarras.png'

export default function About() {
  return (
    <div className={`mt-[200px] pb-[300px] screen1200:pb-[170px]`}>
      <div className="flex h-full w-full flex-wrap justify-center gap-[20px] screen1200:flex-nowrap screen1300:gap-[100px] screen1500:ml-[150px] screen1500:justify-normal">
        <div className="mb-[100px] flex h-[400px] w-[350px] flex-col rounded-xl bg-zinc-200 screen440:h-[450px] screen440:w-[400px] screen500:h-[480px] screen500:w-[430px]">
          <div className="mb-[-10px] pt-[2px] text-center text-sm font-light text-zinc-950">
            2025
          </div>
          <div className="m-[10px] flex-1 overflow-hidden rounded-lg bg-black">
            <Image src={my} alt="my" width={500} height={500} />
          </div>
          <div className="flex h-[50px] items-center justify-between rounded-b-md bg-zinc-200 px-[20px]">
            <div
              style={{ fontWeight: 300 }}
              className={`text-2xl text-zinc-950 ${styles.monserrat}`}
            >
              Luccas Costa
            </div>
            <Image
              src={codigodebarras}
              alt="codigodebarras"
              width={160}
              height={160}
            />
          </div>
        </div>
        <div className="ml-0 flex h-[570px] translate-x-[10%] flex-col justify-between screen800:ml-[150px] screen800:translate-x-0 screen1200:ml-0">
          <>
            <div
              className={`relative text-[74px] text-zinc-200 screen500:text-[84px] screen550:text-8xl ${styles.monserrat} translate-x-[-20px] font-black screen500:translate-x-[-36px] screen550:translate-x-[-45px] screen630:translate-x-[-10px] screen670:translate-x-0`}
            >
              <div className="absolute right-[33px] top-[-30px] h-[80px] w-[80px] rotate-[10deg] screen500:top-[-42px] screen500:h-[100px] screen500:w-[100px] screen550:right-[20px] screen550:top-[-60px] screen630:right-[70px] screen670:right-[118px]">
                <Image src={ovini} alt="assinatura" />
              </div>
              ab<span className="text-[#E97511]">o</span>ut m
              <span className="text-[#E97511]">e</span>
            </div>
            <div className="mt-5 flex max-w-[520px] translate-x-[-50px] items-center justify-center gap-2 pl-2 text-zinc-200 screen500:translate-x-[-68px] screen630:translate-x-[-10px] screen670:translate-x-0 screen1200:mt-3 screen1200:justify-normal">
              <div className="h-1 w-[30px] rounded-sm bg-[#E97511]" />
              <div className="flex items-center gap-1 text-lg">
                <span>E a final quem é Luccas Costa?</span>
              </div>
              <div className="block h-1 w-[30px] rounded-sm bg-[#E97511] screen1200:hidden" />
            </div>
            <div className="text-light mt-10 max-w-[440px] translate-x-[-48px] justify-center pl-2 text-center text-zinc-200 screen500:max-w-[500px] screen500:translate-x-[-65px] screen550:max-w-[550px] screen550:text-lg screen630:max-w-[600px] screen630:translate-x-[-50px] screen670:max-w-[650px] screen670:translate-x-[-70px] screen1200:mt-7 screen1200:translate-x-0 screen1200:justify-normal screen1200:text-start">
              Olá, sou Luccas Costa. Sou de Sao Paulo - Sao jose dos campos.
              Atualmente tenho 18 anos e sou apaixonado por tecnologia e
              inovação, sempre buscando maneiras de tornar o mundo um lugar
              melhor. Desde pequeno, sempre tive curiosidade em entender como as
              coisas funcionam, o que me levou a explorar áreas como
              programação, empreendorismo e desenvolvimento de soluções
              criativas. Estou constantemente aprendendo e me desafiando para
              evoluir tanto pessoal quanto profissionalmente.{' '}
              <div className="mt-[10px] italic text-zinc-200/80 underline underline-offset-2">
                Redefining the future one step at a time.
              </div>
            </div>
          </>
          <div className="mt-16 flex translate-x-[-48px] flex-col items-center pl-2 screen500:translate-x-[-65px] screen630:translate-x-[-50px] screen670:translate-x-[-70px] screen1200:mt-0 screen1200:translate-x-0 screen1200:flex-row screen1200:gap-5">
            <ButtonSlider />
            <Image src={assinatura} alt="assinatura" width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  )
}
