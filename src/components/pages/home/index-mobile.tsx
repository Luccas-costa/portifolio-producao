import React from 'react'
import styles from '@/styles/Hero.module.css'
import OldStyleButton from 'ui/old-style-button'
import {
  // DotsThreeVertical,
  GithubLogo,
  InstagramLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import FotoPerfil from 'public/my/my3.png'
import { ShootingStars } from 'ui/shooting-stars'
import { StarsBackground } from 'ui/stars-background'

export default function IndexMobile() {
  return (
    <div
      className={`min-h-screen w-screen bg-black text-zinc-200 ${styles.degrade}`}
    >
      {/* Background */}
      <div
        style={{ zIndex: 1, pointerEvents: 'none' }}
        className="absolute bottom-0 flex h-full w-full flex-col items-center overflow-hidden"
      >
        <ShootingStars />
        <StarsBackground />
        <div
          className={`absolute left-1/2 top-[calc(100%-250px)] h-[400px] w-[1000px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black ${styles.degrade2}`}
        ></div>
      </div>

      {/* Conteudo */}
      <div style={{ zIndex: 2 }}>
        {/* <div className="absolute right-[20px] top-[20px] flex size-[30px] rotate-90 items-center justify-center rounded-full bg-zinc-200/40 shadow-xl hover:bg-zinc-200/60">
          <DotsThreeVertical size={22} weight="bold" color="white" />
        </div> */}

        <div className="flex h-full max-h-max w-full flex-col items-center">
          <div
            className="mt-[10vh] size-[170px] overflow-hidden rounded-full bg-neutral-950 shadow-xl"
            style={{ zIndex: 4 }}
          >
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

          <div className="mt-[30px] flex h-full min-h-[600px] w-full flex-col gap-[30px]">
            <OldStyleButton
              title="Portfólio profissional"
              Imagem="/logos/favicon.ico"
              link="/professional"
            />
            <OldStyleButton
              title="Gpt do luccas"
              Imagem="/logos/askluccas.png"
              link="/askluccas"
            />
            <OldStyleButton
              title="GitHub"
              Imagem="/logos/github-square.png"
              link="https://github.com/Luccas-costa"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
