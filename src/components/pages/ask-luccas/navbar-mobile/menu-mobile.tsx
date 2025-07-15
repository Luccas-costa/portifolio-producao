import {
  CaretUpDown,
  ChatCircleDots,
  Devices,
  Question,
  StarAndCrescent,
  Sun,
  UserCircle,
} from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
interface MenuMobileProps {
  isOpen: boolean
  handlerToggle: (value: boolean) => void
}

export default function MenuMobile({ isOpen, handlerToggle }: MenuMobileProps) {
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
    <div
      className={`absolute z-50 m-2 h-[calc(100dvh-68px)] w-[calc(100dvw-16px)] transform select-none rounded-lg bg-[#202123] transition-all duration-300 ease-out ${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-5 opacity-0'}`}
    >
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center justify-center gap-1">
          <Link
            href="/profissional"
            className="flex h-[45px] w-1/3 items-center justify-center rounded-lg text-[15px] font-medium text-[#9fa0a7] transition-all duration-200 hover:bg-[#46464D] hover:text-white"
          >
            Ver portifólio
          </Link>
          <Link
            href="/contate-me"
            className="flex h-[45px] w-1/3 items-center justify-center rounded-lg text-[15px] font-medium text-[#9fa0a7] transition-all duration-200 hover:bg-[#46464D] hover:text-white"
          >
            Contate-me
          </Link>
          <Link
            href="/"
            className="flex h-[45px] w-1/3 items-center justify-center rounded-lg bg-[#46464D] text-[15px] font-medium text-white transition-all duration-200"
          >
            <span>Voltar</span>
          </Link>
        </div>

        <div className="flex h-full flex-1 flex-col pt-3">
          <div
            className={`group flex w-full items-center gap-2 p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${
              isThemeOpen ? 'rounded-t-lg bg-[#46464D]' : 'rounded-lg'
            } ${isOpen && 'hover:bg-[#46464D]'}`}
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
                  (!isOpen ? ' hover:bg-[#46464D]' : ''),
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
                    className={`group flex w-full items-center gap-2 bg-[#46464D] p-[6px] py-0 transition-all duration-200 hover:cursor-pointer ${
                      rounded
                    } ${isOpen ? 'hover:bg-[#46464D]' : ''}`}
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

          <div
            className={`group flex w-full translate-y-[4px] items-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer hover:bg-[#46464D]`}
          >
            <ChatCircleDots
              size={38}
              className="h-[38px] w-[38px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
              weight="bold"
            />

            <div className="translate-x-[-6px] text-[14px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
              Chat guiado
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 h-[65px] w-full"
        style={{ boxShadow: '0 -2px 10px rgba(0, 0, 0, .15)' }}
      >
        <div className="flex h-full w-full items-center justify-center p-2">
          <div
            className={`group flex h-full w-1/2 items-center justify-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer hover:bg-[#46464D]`}
          >
            <Question
              size={40}
              className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
              weight="bold"
            />

            <div className="translate-x-[-6px] text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
              Ajuda
            </div>
          </div>
          <div
            className={`group flex h-full w-1/2 items-center justify-center gap-2 rounded-lg p-[6px] py-0 transition-all duration-200 hover:cursor-pointer hover:bg-[#46464D]`}
          >
            <UserCircle
              size={40}
              className="h-[36px] w-[36px] rounded-lg p-2 text-[#9fa0a7] transition-all duration-200 group-hover:text-white"
              weight="bold"
            />

            <div className="translate-x-[-6px] text-[12px] font-medium text-[#9fa0a7] transition-all duration-200 group-hover:text-white">
              Entrar
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
