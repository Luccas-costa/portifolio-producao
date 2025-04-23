'use client'

import {
  Microphone,
  BatteryCharging,
  CaretLeft,
  CaretRight,
  Copy,
  Export,
  MagnifyingGlass,
  Plus,
  Sidebar,
  WifiHigh,
  CaretDown,
  ArrowUp,
  OpenAiLogo,
} from '@phosphor-icons/react/dist/ssr'
import React, { useEffect, useState } from 'react'

import styles from '@/styles/gpt-text-effect.module.css'

export default function Ipad() {
  const [dateTime, setDateTime] = useState('')
  const [isChat, setIsChat] = useState<boolean>(true)
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)
  const [perguntaEmTela, setPerguntaEmTela] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setPerguntaEmTela(pergunta)
    setPergunta('')
    setIsChat(false)

    const res = await fetch('/api/pergunta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta }),
    })

    const data = await res.json()
    setResposta(data.resposta)
    setLoading(false)
  }

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      // Obtém partes separadas da data/hora
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })

      const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
      const day = now.getDate()
      const month = now.toLocaleDateString('en-US', { month: 'short' })

      // Monta a string final: 7:15 AM Sun 20 Oct
      setDateTime(`${time} ${weekday} ${day} ${month}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="translate-y-[370px] screen1070:translate-y-[170px]">
      <div className="mx-auto flex h-[900px] w-[750px] translate-y-[170px] flex-col items-center justify-center rounded-2xl border border-[#2E2E2E] p-4">
        <div
          className="relative h-full w-full rounded-xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/backgrounds/chatbot-background.webp')",
          }}
        >
          <div className="flex h-full w-full flex-col">
            <div className="rounded-t-xl border-x border-t border-[#2E2E2E] bg-[#121212]/85 backdrop-blur-sm">
              <div className="flex flex-col">
                <div className="flex h-[30px] w-full items-center justify-between px-4">
                  <div className="flex w-1/3 items-center gap-3">
                    <div className="text-sm font-light text-zinc-400">
                      {dateTime}
                    </div>
                  </div>
                  <div className="mb-3 flex h-full w-1/3 items-center justify-center text-2xl font-extrabold text-zinc-400/80">
                    ...
                  </div>
                  <div className="flex w-1/3 items-center justify-end gap-2">
                    <div>
                      <WifiHigh size={18} weight="bold" color="#a1a1aa" />
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-xs font-light text-zinc-400">
                        87%
                      </div>
                      <BatteryCharging
                        size={20}
                        weight="fill"
                        color="#a1a1aa"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[43px]">
                  <div className="flex w-full items-center justify-center pt-4">
                    <div className="h-[32px]">
                      <div className="flex items-center gap-5 text-blue-600">
                        <Sidebar
                          size={26}
                          weight="light"
                          color="#a1a1aa"
                          className="translate-y-[-40%]"
                        />
                        <div className="flex translate-y-[-60%] items-center gap-2">
                          <CaretLeft size={18} weight="bold" color="#a1a1aa" />
                          <CaretRight size={18} weight="bold" color="#a1a1aa" />
                        </div>

                        <div className="flex h-[28px] w-[430px] translate-y-[-35%] items-center justify-center rounded-md bg-[#2E2E2E]/80 backdrop-blur-none">
                          <div className="flex flex-1 items-center justify-center gap-1">
                            <MagnifyingGlass
                              size={16}
                              weight="thin"
                              color="#52525b"
                            />
                            <div className="text-xs font-light text-zinc-400/50">
                              www.chatluccas.com.br
                            </div>
                          </div>
                          <Microphone
                            size={16}
                            weight="regular"
                            color="#52525b"
                            className="mr-1"
                          />
                        </div>
                        <div className="mr-3 flex flex-1 items-center justify-end gap-4">
                          <Export
                            size={26}
                            weight="light"
                            color="#a1a1aa"
                            className="translate-y-[-30%]"
                          />
                          <Plus
                            size={26}
                            weight="light"
                            color="#a1a1aa"
                            className="translate-y-[-30%]"
                          />
                          <Copy
                            size={26}
                            weight="light"
                            color="#a1a1aa"
                            className="translate-y-[-30%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 rounded-b-xl border-x border-b border-[#2E2E2E] bg-[#121212]">
              <div className="flex h-full w-full flex-col">
                <div
                  className={`flex-1 ${isChat ? 'overflow-hidden' : 'overflow-auto'}`}
                >
                  <div className="sticky top-0 flex items-center justify-between bg-[#121212] px-4 pt-4">
                    <div className="flex items-center gap-1 text-lg font-normal text-zinc-500">
                      <div>LuccasGPT</div>
                      <CaretDown size={10} weight="bold" color="#71717a" />
                    </div>
                    <Sidebar size={26} weight="regular" color="#71717a" />
                  </div>
                  {isChat ? (
                    <>
                      <div className="flex h-full translate-y-[-10%] flex-col items-center justify-center">
                        <div className="text-2xl font-medium text-zinc-400">
                          Ask about luccas
                        </div>
                        <div className="mt-2 flex h-[70px] w-[400px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3">
                          <input
                            type="text"
                            className="h-[40px] w-full bg-transparent text-xs font-light text-zinc-400 outline-none placeholder:text-neutral-400/70"
                            placeholder="Ask anything"
                            value={pergunta}
                            onChange={(e) => setPergunta(e.target.value)}
                          />
                          <div className="flex items-center justify-between">
                            <div></div>
                            <button
                              disabled={!pergunta.trim()}
                              onClick={handleSubmit}
                              className="w-fit rounded-full bg-zinc-500 p-1 disabled:bg-neutral-600"
                            >
                              <ArrowUp size={14} weight="bold" color="black" />
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 pt-1 text-center text-xs font-light text-zinc-400/60">
                          <div>Powerded by</div>
                          <div className="flex items-center gap-[2px]">
                            <OpenAiLogo
                              size={12}
                              weight="regular"
                              color="#52525b"
                            />
                            <span>OpenAI</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mx-auto flex w-[500px] flex-1 flex-col gap-5 pt-2">
                        <div className="max-w-[300px] self-end break-words rounded-2xl bg-[#2E2E2E]/40 px-4 py-2 text-xs font-light text-zinc-300">
                          {perguntaEmTela}
                        </div>
                        {loading ? (
                          <div className="max-h-[300px] max-w-[400px] whitespace-pre-wrap text-sm font-normal text-zinc-300">
                            <span className={`${styles.shimmerText}`}>
                              Buscando respostas...
                            </span>
                          </div>
                        ) : (
                          <div className="max-h-[300px] max-w-[400px] whitespace-pre-wrap text-xs font-light text-zinc-300">
                            {resposta}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
                {!isChat && (
                  <>
                    <div className="flex items-center justify-center border-none bg-[#121212] shadow-none">
                      <div
                        className={`mb-2 mt-2 flex h-[30px] w-[510px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3`}
                      >
                        <div className="flex items-center">
                          <input
                            type="text"
                            className="mr-[2%] h-[30px] w-[98%] bg-transparent text-xxs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                            placeholder="Ask anything"
                            value={pergunta}
                            onChange={(e) => setPergunta(e.target.value)}
                          />
                          <button
                            disabled={!pergunta.trim()}
                            onClick={handleSubmit}
                            className="h-fit w-fit rounded-full bg-zinc-300 p-1 transition-all duration-200 disabled:bg-neutral-600"
                          >
                            <ArrowUp size={14} weight="bold" color="black" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <div className="h-[20px] bg-[#121212] text-center text-xxs font-light text-zinc-400/60">
                  O LuccasGpt pode cometer erros. Considere verificar
                  informações importantes.
                </div>
                <div className="mx-auto mb-1 h-[5px] w-[50%] rounded-full bg-zinc-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[30px] w-[80px] translate-y-[563%] rounded-b-2xl border-x border-b border-[#2E2E2E]"></div>
      <div className="mx-auto h-[30px] w-[10px] translate-y-[563%] border-x border-[#2E2E2E]"></div>
      <div className="mx-auto h-[30px] w-[10px] translate-y-[563%] rounded-bl-xl border-x border-[#2E2E2E]"></div>
      <div className="mx-auto h-[10px] w-[50px] translate-x-[29px] translate-y-[1593%] border-y border-r border-[#2E2E2E] bg-[#121212]"></div>
      <div className="absolute bottom-[-159px] left-[calc(50%+50px)] h-[10px] w-[700px] border-y border-r border-[#2E2E2E] bg-[#121212]"></div>
    </div>
  )
}
