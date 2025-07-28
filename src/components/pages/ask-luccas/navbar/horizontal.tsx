'use client'

import React from 'react'
import { CaretUpDown } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import styles from '@/styles/menu-burger.module.css'
import ButtonAnimedByCursor from '@/components/ui/button-animaded-by-cursor' // ajuste o caminho conforme seu projeto

interface HorizontalProps {
  isOpen?: boolean
  handlerToggle?: () => void
  userName?: string
}

export default function Horizontal({
  isOpen,
  handlerToggle,
  userName,
}: HorizontalProps) {
  return (
    <>
      {/* Componente global que cria a animação de hover */}
      {/* <div className="opacity-0 screen768:opacity-100"> */}
      <ButtonAnimedByCursor />
      {/* </div> */}

      <div className="flex w-[100vw] items-center justify-between pr-[26px]">
        <div className="flex translate-x-[7px] translate-y-[4px] items-center gap-2 rounded-lg p-[6px]">
          {/* Parte que reage ao hover */}
          {userName === 'Entrar' ? (
            <Link href="/login?goingTo=askluccas">
              <div
                id="btnAnimated1"
                data-hover
                className="flex items-center gap-2 rounded-lg p-[6px] transition-all duration-200 hover:cursor-pointer"
              >
                <div className="flex size-[25px] items-center justify-center rounded-full bg-[#F7F7F8] text-sm font-medium text-black">
                  <span className="translate-y-[-1px] uppercase">
                    {userName?.charAt(0)}
                  </span>
                </div>
                <div className="translate-y-[-2px] text-[14px] font-medium text-[#D9D9E3]">
                  {userName}
                </div>
                <CaretUpDown
                  size={14}
                  className="translate-x-[-2px] translate-y-[-1px] text-[#D9D9E3]"
                  weight="regular"
                />
              </div>
            </Link>
          ) : (
            <div
              id="btnAnimated2"
              data-hover
              className="flex items-center gap-2 rounded-lg p-[6px] transition-all duration-200"
            >
              <div className="flex size-[25px] items-center justify-center rounded-full bg-[#F7F7F8] text-sm font-medium">
                <span className="translate-y-[-1px] uppercase">
                  {userName?.charAt(0)}
                </span>
              </div>
              <div className="translate-y-[-2px] text-[14px] font-medium text-[#D9D9E3]">
                {userName}
              </div>
              <CaretUpDown
                size={14}
                className="translate-x-[-2px] translate-y-[-1px] text-[#D9D9E3]"
                weight="regular"
              />
            </div>
          )}

          {/* Parte que não reage ao hover */}
          <div className="flex items-center gap-1">
            <div className="translate-x-[-8px] translate-y-[-1px] text-[12px] font-bold text-zinc-500">
              /
            </div>
            <div className="translate-x-[-2px] translate-y-[-1px] text-[13px] font-medium text-white">
              ask luccas
            </div>
          </div>
        </div>

        <div className="hidden translate-y-[3px] gap-4 screen600:flex">
          <Link
            id="btnAnimated3"
            href="/profissional"
            className="text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
          >
            Ver portifólio
          </Link>
          <Link
            id="btnAnimated4"
            href="/login"
            className="text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
          >
            Contate-me
          </Link>
          <Link
            id="btnAnimated5"
            href="/"
            className="group flex items-center gap-1 text-[15px] text-[#9fa0a7] transition-all duration-200 hover:text-white"
          >
            <span>Voltar</span>
          </Link>
        </div>

        <div className="flex size-[40px] screen600:hidden">
          <div className="z-70 flex h-full w-full items-center justify-center">
            <label className={styles.hamburger} style={{ zIndex: 70 }}>
              <input
                type="checkbox"
                checked={isOpen}
                onChange={handlerToggle}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className={`${styles.line} ${styles.linetopbottom}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className={styles.line} d="M7 16 27 16" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
