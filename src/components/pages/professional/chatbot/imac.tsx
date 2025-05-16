'use client'
import React, { useEffect, useState } from 'react'

import ScreenPc from './screen-pc'
import {
  AppleLogo,
  MagnifyingGlass,
  WifiHigh,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Vscode from '@/assets/logos/visual-studio-code.svg'

export default function Imac() {
  const [dateTime, setDateTime] = useState('')
  const [taskBarVisible] = useState(true)

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }
      setDateTime(now.toLocaleString('en-US', options))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const images = [
    { src: '/assets/icons/finder.png', width: 42, height: 42 },
    { src: '/assets/icons/safari.png', width: 40, height: 40 },
    { src: '/assets/icons/configuracoes-apple.png', width: 40, height: 40 },
    { src: '/assets/icons/apple-story.png', width: 32, height: 32 },
    { src: '/assets/icons/notion.png', width: 42, height: 42 },
    { src: Vscode, width: 30, height: 30 },
    { src: '/assets/icons/steam.png', width: 40, height: 40 },
    {
      src: '/assets/icons/photoshop.png',
      width: 80,
      height: 80,
      className: 'scale-125',
    },
    { src: '/assets/icons/chrome.png', width: 30, height: 30 },
    { src: '/assets/icons/spotify.png', width: 30, height: 30 },
  ]

  return (
    <div className="translate-y-[370px] screen1070:translate-y-[170px]">
      <div className="mx-auto flex h-[700px] w-[1200px] translate-y-[170px] flex-col justify-center rounded-2xl border border-[#2E2E2E] bg-[#121212] p-3">
        <div
          className="relative flex-1 rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/backgrounds/chatbot-background.webp')",
          }}
        >
          <div className="absolute inset-0 rounded-xl bg-black/65"></div>
          <div className="absolute left-1/2 z-20 h-[30px] w-[110px] translate-x-[-50%] rounded-b-2xl bg-[#121212]"></div>
          <div className="relative z-10">
            <div className="flex h-[25px] w-full items-center justify-between rounded-t-xl bg-[#121212]/40 px-4">
              <div className="flex items-center gap-3">
                <AppleLogo size={12} weight="fill" color="#e4e4e7" />
                <div className="text-xs font-light text-zinc-200">Safari</div>
                <div className="text-xs font-light text-zinc-200">file</div>
                <div className="text-xs font-light text-zinc-200">edit</div>
                <div className="text-xs font-light text-zinc-200">
                  favorites
                </div>
                <div className="text-xs font-light text-zinc-200">help</div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={'/logos/logo-tranparente.png'}
                  alt="logo"
                  width={12}
                  height={12}
                />
                <MagnifyingGlass size={12} weight="bold" color="#e4e4e7" />
                <WifiHigh size={12} weight="bold" color="#e4e4e7" />
                <div className="text-xs font-light text-zinc-200">
                  {dateTime}
                </div>
              </div>
            </div>
          </div>
          {taskBarVisible && (
            <div className="absolute bottom-[4px] left-1/2 z-20 h-[50px] w-[700px] translate-x-[-50%] rounded-xl bg-[#121212]/50">
              <div className="flex h-full w-full items-center gap-4 px-3">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="flex size-[40px] items-center justify-center rounded-lg bg-zinc-100"
                  >
                    <Image
                      src={img.src}
                      alt="logo"
                      width={img.width}
                      height={img.height}
                      className={img.className || ''}
                    />
                  </div>
                ))}
                <div className="h-[80%] w-1 rounded-lg bg-[#121212]"></div>
                <div className="flex size-[40px] items-center justify-center rounded-lg bg-zinc-200">
                  <Image
                    src={'/assets/icons/safari.png'}
                    alt="logo"
                    width={42}
                    height={42}
                  />
                </div>
                <div className="flex size-[40px] items-center justify-center rounded-lg">
                  <Image
                    src={'/assets/icons/lixeira.png'}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          )}
          <ScreenPc />
        </div>
      </div>
      <div className="mx-auto h-[400px] w-[400px] border border-[#2E2E2E] bg-[#121212]">
        <div className="relative mx-auto mt-[80px] size-[150px] rounded-full border-b border-[#2E2E2E]"></div>
      </div>
      <div className="mx-auto h-[30px] w-[440px] border border-[#2E2E2E] bg-[#121212]"></div>
    </div>
  )
}
