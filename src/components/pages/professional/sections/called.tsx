import React from 'react'
import fonts from '@/styles/globals/fonts.module.css'
import Image from 'next/image'
import Imagem from '../../../../../public/assets/call-to-action.png'
import Link from 'next/link'

export default function Called() {
  return (
    <div className="mt-[200px] flex items-center justify-center pb-[400px]">
      <div className="flex h-[700px] max-h-[800px] w-[90vw] flex-col justify-between rounded-2xl bg-[#E97511]/80 outline outline-[2px] outline-offset-[10px] outline-[#E97511] screen550:h-[800px] screen550:w-[80vw] screen768:w-[60vw] screen1000:h-[500px] screen1000:w-[90vw] screen1000:flex-row">
        <div className="mt-[50px] flex flex-col items-center justify-center gap-6 screen1000:pl-[20px] screen1100:items-start screen1100:pl-[100px]">
          <div
            className={`${fonts.monserrat} text-4xl font-semibold text-zinc-200 screen550:text-5xl`}
          >
            Vamos mudar <br /> o mundo junto?
          </div>
          <Link
            href="/contact"
            className="flex h-[50px] w-[150px] cursor-pointer items-center justify-center rounded-xl bg-zinc-200 text-lg font-bold text-[#714da6] transition-all hover:bg-[#714da6] hover:text-zinc-200"
          >
            Contate-me
          </Link>
        </div>
        <div className="flex h-[350px] w-[350px] justify-center pr-[20px] screen550:h-[450px] screen550:w-[450px] screen1000:h-[500px] screen1000:w-[650px] screen1000:justify-end screen1100:pr-[60px] screen1200:pr-[120px] screen550max:mx-auto screen550max:mb-[50px]">
          <Image src={Imagem} alt="Imagem" />
        </div>
      </div>
    </div>
  )
}
