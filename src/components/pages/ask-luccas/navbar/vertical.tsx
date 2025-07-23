'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  CaretUpDown,
  Devices,
  Question,
  StarAndCrescent,
  Sun,
  UserCircle,
  ChatCircleDots,
} from '@phosphor-icons/react'
import Link from 'next/link'

interface VerticalProps {
  handlerToggle: (forceOpen?: boolean) => void
  isOpen: boolean
  handlerToggleGuidedChat?: () => void
  isGuidedChat?: boolean
}

export default function Vertical({
  handlerToggle,
  isOpen,
  handlerToggleGuidedChat,
  isGuidedChat,
}: VerticalProps) {
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<
    'system' | 'light' | 'dark'
  >('system')

  const themeOptions = [
    {
      key: 'system',
      label: 'Padrão do sistema',
      icon: Devices,
      rounded: '',
    },
    {
      key: 'light',
      label: 'Claro',
      icon: Sun,
      rounded: '',
    },
    {
      key: 'dark',
      label: 'Escuro',
      icon: StarAndCrescent,
      rounded: 'rounded-b-lg',
    },
  ] as const

  useEffect(() => {
    if (!isOpen) {
      setIsThemeOpen(false)
    }
  }, [isOpen])

  return (
    <div className="flex min-h-[calc(100dvh-85px)] w-full translate-x-[6px] translate-y-[20px] select-none flex-col justify-between">
      <div className="flex flex-col">
        <div
          className={`flex max-w-[230px] items-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${isOpen ? 'hover:bg-[#202123]' : ''}`}
          onClick={() => handlerToggle()}
        >
          <Image
            src="/assets/icon-sidebar.png"
            alt="logo"
            width={40}
            height={40}
            className={`h-[38px] w-[38px] rounded-lg p-2 ${!isOpen ? 'hover:bg-[#202123]' : ''}`}
            onClick={() => handlerToggle()}
          />
          {isOpen && (
            <div className="translate-x-[-6px] text-[12px] font-medium text-white">
              OPTIONS
            </div>
          )}
        </div>

        <div className="translate-x-[3px] translate-y-[10px]">
          <div
            className={`group flex max-w-[230px] items-center gap-2 p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${
              isThemeOpen ? 'rounded-t-lg bg-[#202123]' : 'rounded-lg'
            } ${isOpen && 'hover:bg-[#202123]'}`}
            onClick={() => {
              setIsThemeOpen(!isThemeOpen)
              handlerToggle(true)
            }}
          >
            {React.createElement(
              themeOptions.find((opt) => opt.key === selectedTheme)!.icon,
              {
                size: 40,
                className:
                  'h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white' +
                  (!isOpen ? ' hover:bg-[#202123]' : ''),
                weight: 'bold',
              },
            )}
            {isOpen && (
              <div className="flex translate-x-[-6px] items-center text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
                <span>Tema</span>
                <CaretUpDown
                  size={12}
                  className="translate-x-[2px] text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
                  weight="bold"
                />
              </div>
            )}
          </div>

          {isOpen && (
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                isThemeOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {isThemeOpen &&
                themeOptions.map(({ key, label, icon: Icon, rounded }, idx) => (
                  <div
                    key={key}
                    className={`group flex max-w-[230px] items-center gap-2 bg-[#202123] p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${
                      rounded
                    } ${isOpen ? 'hover:bg-[#202123]' : ''}`}
                    onClick={() => {
                      setSelectedTheme(key)
                      setIsThemeOpen(false)
                    }}
                    style={{ transitionDelay: `${idx * 75}ms` }} // delay para efeito cascata
                  >
                    <Icon
                      size={40}
                      className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
                      weight="bold"
                    />
                    <div className="flex translate-x-[-6px] items-center text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div
          className={`group flex max-w-[230px] translate-x-[3px] translate-y-[10px] items-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${isOpen ? 'hover:bg-[#202123]' : ''}`}
          onClick={handlerToggleGuidedChat}
        >
          <ChatCircleDots
            size={40}
            className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
            weight="bold"
          />
          {isOpen && (
            <div className="translate-x-[-6px] text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
              {isGuidedChat ? 'Chat livre' : 'Chat guiado'}
            </div>
          )}
        </div>
      </div>

      <div className="flex h-full flex-col gap-2">
        <div
          className={`group flex max-w-[230px] translate-y-[4px] items-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${isOpen ? 'hover:bg-[#202123]' : ''}`}
        >
          <Question
            size={40}
            className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
            weight="bold"
          />
          {isOpen && (
            <div className="translate-x-[-6px] text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
              Ajuda
            </div>
          )}
        </div>
        <div
          className={`group flex max-w-[230px] items-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${isOpen ? 'hover:bg-[#202123]' : ''}`}
        >
          <UserCircle
            size={40}
            className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
            weight="bold"
          />
          {isOpen && (
            <Link
              href="/login"
              className="translate-x-[-6px] text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
