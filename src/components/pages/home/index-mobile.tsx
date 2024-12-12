import React from 'react'
import styles from '@/styles/Hero.module.css'
import OldStyleButton from 'ui/old-style-button'
import { GithubLogo, InstagramLogo } from '@phosphor-icons/react'

export default function IndexMobile() {
  return (
    <div
      className={`h-screen w-screen bg-black text-zinc-200 ${styles.degrade}`}
    >
      {/* Background */}
      <div
        style={{ zIndex: 1, pointerEvents: 'none' }}
        className="absolute bottom-0 flex h-full w-full flex-col items-center overflow-hidden"
      >
        <div
          className={`absolute left-1/2 top-[calc(100%-150px)] h-[400px] w-[1000px] -translate-x-1/2 rounded-[100%] border border-[#B48CDE] bg-black ${styles.degrade2}`}
        ></div>
      </div>

      {/* Conteudo */}
      <div style={{ zIndex: 2 }}>
        <div className="flex h-full w-full flex-col items-center">
          <div className="mt-[10vh] size-[170px] rounded-full bg-neutral-950 shadow-xl"></div>

          <div className="mt-[20px] text-lg text-zinc-300">Luccas</div>

          <div className="mt-[50px] flex h-full w-full flex-col gap-[30px]">
            <OldStyleButton title="Portifolio pessoal | Luccas" />
            <OldStyleButton title="Portifolio proficional | Luccas" />
            <OldStyleButton title="teste" />
          </div>
        </div>

        <div className="mt-[20px] flex w-full cursor-pointer items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/l1uccas/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo
              size={26}
              weight="regular"
              color="rgb(228 228 231 / 0.9)"
            />
          </a>
          <a
            href="https://www.instagram.com/l1uccas/"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo
              size={26}
              weight="regular"
              color="rgb(228 228 231 / 0.9)"
            />
          </a>
        </div>
      </div>
    </div>
  )
}