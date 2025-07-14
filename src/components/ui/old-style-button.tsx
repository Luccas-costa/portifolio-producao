import React from 'react'
import styles from '@/styles/work-track.module.css'
import fonts from '@/styles/globals/fonts.module.css'
import { DotsThreeVertical } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

interface OldStyleButtonProps {
  title: string
  Imagem: string
  link: string
  inwork?: boolean
}

export default function OldStyleButton({
  title,
  Imagem,
  link,
  inwork,
}: OldStyleButtonProps) {
  const commonClasses = `${fonts.monserrat} flex h-full w-full flex-col items-center gap-[50px] ${
    inwork ? 'cursor-not-allowed pointer-events-none' : ''
  }`

  const content = (
    <div className="group relative h-[80px] w-[350px] transition-all duration-300 screen400:w-[390px] screen520:w-[470px] screen700:w-[535px]">
      {/* Conteudo div */}
      <div
        className="absolute h-[80px] w-full overflow-hidden rounded-2xl bg-zinc-200 transition-all duration-200 group-hover:translate-x-[4px] group-hover:translate-y-[4px]"
        style={{ zIndex: 2 }}
      >
        <div
          className={
            inwork
              ? `absolute left-[-20px] top-[31px] h-[20px] w-[110%] rotate-[9.5deg] bg-red-500 screen550:rotate-[6.5deg] ${styles.bannerstripes}`
              : 'hidden'
          }
        ></div>
        <div
          className={
            inwork
              ? `absolute left-[-20px] top-[31px] h-[20px] w-[110%] rotate-[-9.5deg] bg-red-500 screen550:rotate-[-6.5deg] ${styles.bannerstripes}`
              : 'hidden'
          }
        ></div>

        <div className="flex h-full w-full items-center justify-between px-[10px]">
          <div className="size-[50px] overflow-hidden rounded-lg">
            <Image src={Imagem} alt="Luccas" width={50} height={50} />
          </div>
          <div className="text-lg font-medium text-zinc-600 screen400:text-xl">
            {title}
          </div>
          <DotsThreeVertical size={24} weight="bold" color="#52525b " />
        </div>
      </div>
      {/* Sombra div */}
      <div
        className="absolute h-[80px] w-full translate-x-[10px] translate-y-[10px] rounded-2xl bg-black"
        style={{ zIndex: 1 }}
      ></div>
    </div>
  )

  return inwork ? (
    <div className={commonClasses}>{content}</div>
  ) : (
    <Link href={link} className={commonClasses}>
      {content}
    </Link>
  )
}
