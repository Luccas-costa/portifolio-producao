/* eslint-disable prettier/prettier */
import React from 'react'

import { DotsThreeVertical } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

interface OldStyleButtonProps {
  title: string
  Imagem: string
  link: string
}

export default function OldStyleButton({ title, Imagem, link }: OldStyleButtonProps) {
  return (
    <Link href={link} className="flex h-full w-full flex-col items-center gap-[50px]">
      <div className=" group relative h-[80px] w-[350px] transition-all duration-300 screen400:w-[390px] screen520:w-[470px] screen700:w-[535px]">
        {/* Conteudo div */}
        <div
          className="absolute h-[80px] w-full rounded-2xl bg-[#dccfe9] group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
          style={{ zIndex: 2 }}
        >
          <div className="flex h-full w-full items-center justify-between px-[10px]">
            <div className="size-[50px] rounded overflow-hidden">
              <Image src={Imagem} alt="Luccas" width={50} height={50} />
            </div>
            <div className="screen400:text-xl text-lg font-medium text-zinc-600">{title}</div>
            <DotsThreeVertical size={24} weight="bold" color="#52525b " />
          </div>
        </div>
        {/* Sombra div */}
        <div
          className="absolute h-[80px] w-full translate-x-[10px] translate-y-[10px] rounded-2xl bg-black"
          style={{ zIndex: 1 }}
        ></div>
      </div>
    </Link>
  )
}
