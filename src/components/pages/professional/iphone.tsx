import {
  ArrowClockwise,
  ArrowUp,
  BatteryCharging,
  BookOpen,
  CaretDown,
  CaretLeft,
  CaretRight,
  Copy,
  Export,
  OpenAiLogo,
  Sidebar,
  WifiHigh,
} from '@phosphor-icons/react/dist/ssr'
import { GalleryHorizontalEnd } from 'lucide-react'
import React, { useEffect, useState, useRef } from 'react'

import styles from '@/styles/gpt-text-effect.module.css'

export default function Iphone() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // Dá foco ao input assim que o componente é renderizado
    inputRef.current?.focus()
  }, [])

  const [time, setTime] = useState('')
  const [isChat, setIsChat] = useState<boolean>(true)
  const [pergunta, setPergunta] = useState('')
  const [, setResposta] = useState('')
  const [loading, setLoading] = useState(false)
  const [perguntaEmTela, setPerguntaEmTela] = useState('')
  const [mensagens, setMensagens] = useState<
    { pergunta: string; resposta: string }[]
  >([])

  const handleSubmit = async () => {
    setLoading(true)
    const perguntaAtual = pergunta
    setPerguntaEmTela(perguntaAtual)
    setPergunta('')
    setIsChat(false)

    const res = await fetch('/api/pergunta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pergunta }),
    })

    const data = await res.json()
    setResposta(data.resposta)
    setMensagens((prev) => [
      ...prev,
      { pergunta: perguntaAtual, resposta: data.resposta },
    ])
    setLoading(false)
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="translate-y-[160px]">
      <div className="mx-auto flex h-[650px] w-[350px] translate-y-[170px] flex-col items-center justify-center rounded-2xl border border-[#2E2E2E] p-2">
        <div className="absolute left-[-6px] top-[105px] h-[24px] w-[5px] rounded-l-md border border-[#2E2E2E]"></div>
        <div className="absolute left-[-8px] top-[140px] h-[50px] w-[7px] rounded-l-md border border-[#2E2E2E]"></div>
        <div className="absolute left-[-8px] top-[200px] h-[50px] w-[7px] rounded-l-md border border-[#2E2E2E]"></div>
        <div className="h-full w-full rounded-xl border border-[#2E2E2E]">
          <div className="absolute left-1/2 top-[8px] h-[33px] w-[110px] translate-x-[-50%] rounded-b-2xl border-x border-b border-[#2E2E2E] bg-[#121212]"></div>
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full items-center justify-between pt-[2px]">
              <div className="flex h-[30px] w-full items-center justify-between px-4">
                <div className="flex w-1/3 items-center gap-3">
                  <div className="text-sm font-light text-zinc-400">{time}</div>
                </div>
                <div className="flex w-1/3 items-center justify-end gap-2">
                  <div>
                    <WifiHigh size={18} weight="bold" color="#a1a1aa" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="text-xs font-light text-zinc-400">87%</div>
                    <BatteryCharging size={20} weight="fill" color="#a1a1aa" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 ${isChat ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'}`}
            >
              <div className="sticky top-0 z-10 flex h-[40px] items-center justify-between bg-[#121212] px-4 pt-4">
                <div className="flex w-full translate-y-[-1px] items-center gap-1 font-normal text-zinc-500">
                  <div>LuccasGPT</div>
                  <CaretDown size={10} weight="bold" color="#71717a" />
                </div>
                <Sidebar size={22} weight="regular" color="#71717a" />
              </div>
              <div className="flex h-full translate-y-[-5%] flex-col items-center justify-center">
                {isChat ? (
                  <>
                    <div className="text-2xl font-medium text-zinc-400">
                      Ask about luccas
                    </div>
                    <div className="mt-2 flex h-[70px] w-[300px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault() // previne o comportamento padrão de recarregar a página
                          if (pergunta.trim()) handleSubmit()
                        }}
                        className="flex w-full flex-col"
                      >
                        <input
                          ref={inputRef}
                          type="text"
                          className="h-[40px] w-full bg-transparent text-base font-light text-zinc-400 outline-none placeholder:text-neutral-400/70"
                          placeholder="Ask anything"
                          value={pergunta}
                          onChange={(e) => setPergunta(e.target.value)}
                        />
                        <div className="flex items-center justify-between">
                          <div></div>
                          <button
                            type="submit"
                            disabled={!pergunta.trim()}
                            className="w-fit rounded-full bg-zinc-500 p-1 disabled:bg-neutral-600"
                          >
                            <ArrowUp size={14} weight="bold" color="black" />
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="flex items-center gap-1 pt-1 text-center text-xs font-light text-zinc-400/60">
                      <div>Powered by</div>
                      <div className="flex items-center gap-[2px]">
                        <OpenAiLogo
                          size={12}
                          weight="regular"
                          color="#52525b"
                        />
                        <span>OpenAI</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto flex w-[500px] flex-1 flex-col gap-5 pl-4 pr-[190px] pt-10">
                      {mensagens.map((m, index) => (
                        <React.Fragment key={index}>
                          <div className="max-w-[300px] self-end break-words rounded-2xl bg-[#2E2E2E]/40 px-4 py-2 text-xs font-light text-zinc-300">
                            {m.pergunta}
                          </div>
                          <div className="max-h-[300px] max-w-[400px] whitespace-pre-wrap rounded-2xl bg-[#2E2E2E]/40 px-4 py-2 text-xs font-light text-zinc-300">
                            {m.resposta}
                          </div>
                        </React.Fragment>
                      ))}
                      {loading && (
                        <>
                          <div className="max-w-[300px] self-end break-words rounded-2xl bg-[#2E2E2E]/40 px-4 py-2 text-xs font-light text-zinc-300">
                            {perguntaEmTela}
                          </div>
                          <div className="max-h-[300px] max-w-[400px] whitespace-pre-wrap text-sm font-normal text-zinc-300">
                            <span className={`${styles.shimmerText}`}>
                              Buscando respostas...
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
            {!isChat && (
              <>
                <div className="flex items-center justify-center border-none bg-[#121212] shadow-none">
                  <div
                    className={`mb-2 mt-2 flex h-[40px] w-[300px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3`}
                  >
                    <form
                      onSubmit={(e) => {
                        e.preventDefault() // previne o comportamento padrão de recarregar a página
                        if (pergunta.trim()) handleSubmit()
                      }}
                      className="flex items-center"
                    >
                      <input
                        ref={inputRef}
                        type="text"
                        className="mr-[2%] h-[40px] w-[98%] bg-transparent text-base font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                        placeholder="Ask anything"
                        value={pergunta}
                        onChange={(e) => setPergunta(e.target.value)}
                      />
                      <button
                        type="submit"
                        disabled={!pergunta.trim()}
                        className="h-fit w-fit rounded-full bg-zinc-300 p-1 transition-all duration-200 disabled:bg-neutral-600"
                      >
                        <ArrowUp size={18} weight="bold" color="black" />
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
            <div className="h-[20px] bg-[#121212] text-center text-xxs font-light text-zinc-400/60">
              O LuccasGpt comete erros. verifique informações importantes.
            </div>
            <div className="h-[110px] rounded-b-xl">
              <div
                className="relative h-full w-full rounded-b-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/backgrounds/chatbot-background.webp')",
                }}
              >
                <div className="rounded-b-xl bg-[#121212]/85 backdrop-blur-sm">
                  <div className="flex h-full flex-col">
                    <div className="flex h-[105px] flex-col items-center">
                      <div className="mt-2 flex h-[40px] w-[90%] items-center justify-between rounded-xl bg-[#2E2E2E]/80 px-[10px] backdrop-blur-none">
                        <GalleryHorizontalEnd
                          size={20}
                          color="#52525b"
                          className="-rotate-90"
                        />
                        <div className="text-xs font-light text-zinc-400/50">
                          chatluccas.com
                        </div>
                        <ArrowClockwise
                          size={22}
                          weight="regular"
                          color="#52525b"
                          className="mr-1"
                        />
                      </div>
                      <div className="flex h-[50px] w-[90%] items-center justify-around">
                        <CaretLeft size={26} weight="regular" color="#a1a1aa" />
                        <CaretRight
                          size={26}
                          weight="regular"
                          color="#a1a1aa"
                        />
                        <Export size={26} weight="regular" color="#a1a1aa" />
                        <BookOpen size={26} weight="regular" color="#a1a1aa" />
                        <Copy size={26} weight="regular" color="#a1a1aa" />
                      </div>
                    </div>
                    <div className="mx-auto mb-1 h-[5px] w-[50%] rounded-full bg-zinc-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[30px] w-[40px] translate-y-[563%] rounded-b-lg border-x border-b border-[#2E2E2E]"></div>
      <div className="mx-auto h-[30px] w-[10px] translate-y-[563%] border-x border-[#2E2E2E]"></div>
      <div className="mx-auto h-[30px] w-[10px] translate-y-[563%] rounded-bl-xl border-x border-[#2E2E2E]"></div>
      <div className="mx-auto h-[10px] w-[50px] translate-x-[29px] translate-y-[1593%] border-y border-r border-[#2E2E2E] bg-[#121212]"></div>
      <div className="absolute bottom-[-159px] left-[calc(50%+50px)] h-[10px] w-[700px] border-y border-r border-[#2E2E2E] bg-[#121212]"></div>
    </div>
  )
}
