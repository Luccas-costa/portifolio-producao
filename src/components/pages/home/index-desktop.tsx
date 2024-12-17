import React from 'react'
import styles from '@/styles/Hero.module.css'
import OldStyleButton from 'ui/old-style-button'
import {
  DotsThreeVertical,
  GithubLogo,
  InstagramLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import FotoPerfil from 'public/my/my2.jpg'
import GitImage from '@/assets/logos/github-mark.svg'
import { ShootingStars } from 'ui/shooting-stars'
import { StarsBackground } from 'ui/stars-background'
import AnimatedModalDemo from '@/components/ui/ModalAc'

export default function IndexDesktop() {
  return (
    <div
      className={`min-h-screen w-screen bg-black text-zinc-200 ${styles.degradeold}`}
    >
      {/* Background */}
      <div
        style={{ zIndex: 1, pointerEvents: 'none' }}
        className="absolute bottom-0 flex h-full w-full flex-col items-center overflow-hidden"
      >
        <ShootingStars />
        <StarsBackground />
        <div
          className={`absolute left-1/2 top-[calc(100%-160px)] h-[768px] w-[180vw] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black ${styles.degrade2}`}
          style={{ zIndex: 1 }}
        ></div>
      </div>

      {/* Conteudo */}
      <div style={{ zIndex: 2 }}>
        <div className="absolute right-[20px] top-[20px] flex size-[30px] rotate-90 items-center justify-center rounded-full bg-zinc-200/40 shadow-xl hover:bg-zinc-200/60">
          <DotsThreeVertical size={22} weight="bold" color="white" />
        </div>
        <div className="absolute left-[20px] top-[20px] size-[50px]">
          <Image
            src="/logos/logo-tranparente.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="flex h-full max-h-max w-full flex-col items-center">
          <div className="mt-[10vh] size-[170px] overflow-hidden rounded-full bg-neutral-950 shadow-xl">
            <Image src={FotoPerfil} alt="Luccas" width={170} height={170} />
          </div>

          <div className="mt-[20px] text-lg text-zinc-300">Luccas</div>

          <div className="mt-[10px] flex w-full cursor-pointer items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/l1uccas/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo
                size={22}
                weight="regular"
                color="rgb(228 228 231 / 0.9)"
              />
            </a>
            <a
              href="https://github.com/Luccas-costa"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo
                size={22}
                weight="regular"
                color="rgb(228 228 231 / 0.9)"
              />
            </a>
          </div>

          <div className="mt-[30px] flex h-full w-full flex-col gap-[30px]">
            <OldStyleButton
              title="Portifolio pessoal"
              Imagem="/logos/favicon.ico"
              link="/private"
            />
            <OldStyleButton
              title="Portifolio profissional"
              Imagem="/logos/favicon.ico"
              link="/professional"
            />
            <OldStyleButton
              title="GitHub"
              Imagem={GitImage}
              link="https://github.com/Luccas-costa"
            />
          </div>
        </div>

        <div
          className="mt-[30px] flex flex-col items-center justify-center p-[1rem]"
          style={{ zIndex: 10 }}
        >
          <div className="z-10 rounded-lg bg-white px-2 py-1 font-semibold text-black">
            <AnimatedModalDemo />
          </div>
        </div>
      </div>
    </div>
  )
}
