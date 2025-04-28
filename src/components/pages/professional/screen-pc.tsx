import NewChatIcon from '@/assets/new-chat-icon'
import {
  ArrowClockwise,
  ArrowUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  Copy,
  Export,
  Globe,
  Lightbulb,
  LockKey,
  OpenAiLogo,
  Plus,
  ShieldCheck,
  Sidebar,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

import React, { useState, useRef, useEffect } from 'react'
import Folder from 'ui/folder'

import styles from '@/styles/gpt-text-effect.module.css'

export default function ScreenPc() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // Dá foco ao input assim que o componente é renderizado
    inputRef.current?.focus()
  }, [])

  const [isChat, setIsChat] = useState<boolean>(false)
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
    setIsChat(true)

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
    ]) // NOVO
    setLoading(false)
  }

  return (
    <div className="relative z-10 h-full">
      <div className="flex w-full flex-col items-end pr-3">
        <Folder name="Music" />
        <Folder name="New folder" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
        <div
          className={`flex h-[500px] ${isChat ? 'h-[454px]' : 'h-[500px]'} w-[800px] flex-col rounded-t-xl bg-[#121212]`}
        >
          <div className="h-[32px] border-b border-[#2E2E2E] p-2">
            <div className="flex items-center gap-4">
              <div className="ml-3 flex h-[26px] items-center gap-[6px] pb-3">
                <div className="size-[8px] rounded-full bg-[#2E2E2E]"></div>
                <div className="size-[8px] rounded-full bg-[#2E2E2E]"></div>
                <div className="size-[8px] rounded-full bg-[#2E2E2E]"></div>
              </div>
              <Sidebar
                size={20}
                weight="regular"
                color="#2E2E2E"
                className="translate-y-[-30%]"
              />
              <div className="flex translate-y-[-30%] items-center gap-2">
                <CaretLeft size={18} weight="bold" color="#2E2E2E" />
                <CaretRight size={18} weight="bold" color="#2E2E2E" />
              </div>
              <div className="h-[18px] w-[3px] translate-x-[-4px] translate-y-[-30%] rounded-xl bg-[#2E2E2E]/40" />
              <ShieldCheck
                size={17}
                weight="fill"
                color="#2E2E2E"
                className="translate-y-[-40%]"
              />
              <div className="flex h-[18px] w-[370px] translate-y-[-35%] items-center justify-center rounded-md bg-[#2E2E2E]/40">
                <div className="flex flex-1 items-center justify-center gap-1">
                  <LockKey size={10} weight="thin" color="#52525b" />
                  <div className="text-xxs font-light text-zinc-400/60">
                    www.chatluccas.com.br
                  </div>
                </div>
                <ArrowClockwise
                  size={12}
                  weight="bold"
                  color="#52525b"
                  className="mr-1"
                />
              </div>
              <div className="mr-3 flex flex-1 items-center justify-end gap-3">
                <Export
                  size={18}
                  weight="bold"
                  color="#2E2E2E"
                  className="translate-y-[-30%]"
                />
                <Plus
                  size={18}
                  weight="bold"
                  color="#2E2E2E"
                  className="translate-y-[-30%]"
                />
                <Copy
                  size={18}
                  weight="bold"
                  color="#2E2E2E"
                  className="translate-y-[-30%]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-auto rounded-lg pb-2 pl-3 pr-3 pt-4">
            <div className="sticky top-0 flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <NewChatIcon />
                <div className="flex items-center gap-1 text-xs font-light text-zinc-300">
                  <div>LuccasGPT</div>
                  <CaretDown size={10} weight="bold" color="#d4d4d8" />
                </div>
              </div>
              <div className="size-5 overflow-hidden rounded-full bg-[#2E2E2E]">
                <Image
                  src="/my/my1.jpg"
                  alt="foto minha"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            {isChat ? (
              <>
                <div className="mx-auto flex w-[500px] flex-1 flex-col gap-5 pt-4">
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
            ) : (
              <>
                <div className="flex flex-1 flex-col items-center justify-center gap-1">
                  <div className="text-xl font-medium text-zinc-300">
                    Ask about luccas
                  </div>
                  <div className="mt-2 flex h-[70px] w-[400px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3">
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
                        className="h-[40px] w-full bg-transparent text-xs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                        placeholder="Ask anything"
                        value={pergunta}
                        onChange={(e) => setPergunta(e.target.value)}
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="group w-fit cursor-pointer rounded-full border border-[#52525b] p-1 transition-all duration-200 hover:bg-[#52525b]">
                            <Plus
                              size={12}
                              weight="bold"
                              className="text-[#52525b] group-hover:text-white"
                            />
                          </div>
                          <div className="group flex w-fit cursor-pointer items-center gap-1 rounded-full border border-[#52525b] p-1 transition-all duration-200 hover:bg-[#52525b]">
                            <Globe
                              size={15}
                              weight="bold"
                              className="text-[#52525b] group-hover:text-white"
                            />
                            <div className="text-xs font-light text-neutral-500 group-hover:text-white">
                              Search
                            </div>
                          </div>
                          <div className="group flex w-fit cursor-pointer items-center gap-1 rounded-full border border-[#52525b] p-1 transition-all duration-200 hover:bg-[#52525b]">
                            <Lightbulb
                              size={15}
                              weight="bold"
                              className="text-[#52525b] group-hover:text-white"
                            />
                            <div className="text-xs font-light text-neutral-500 group-hover:text-white">
                              Reason
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={!pergunta.trim()}
                          className="w-fit rounded-full bg-zinc-300 p-1 disabled:bg-neutral-600"
                        >
                          <ArrowUp size={14} weight="bold" color="black" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center gap-1 text-center text-xxs font-light text-zinc-400/60">
                    <div>Powerded by</div>
                    <div className="flex items-center gap-[2px]">
                      <OpenAiLogo size={12} weight="regular" color="#52525b" />
                      <span>OpenAI</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {isChat && (
          <>
            <div className="flex w-[798px] translate-y-[-1px] items-center justify-center border-none bg-[#121212] shadow-none">
              <div
                className={`mb-2 mt-2 flex h-[30px] w-[510px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3`}
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
                    className="mr-[2%] h-[30px] w-[98%] bg-transparent text-xs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                    placeholder="Ask anything"
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={!pergunta.trim()}
                    className="h-fit w-fit rounded-full bg-zinc-300 p-1 transition-all duration-200 disabled:bg-neutral-600"
                  >
                    <ArrowUp size={14} weight="bold" color="black" />
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
        <div className="static bottom-0 h-[20px] w-[798px] translate-y-[-2px] rounded-b-2xl bg-[#121212] text-center text-xxs font-light text-zinc-400/60">
          O LuccasGpt pode cometer erros. Considere verificar informações
          importantes.
        </div>
      </div>
    </div>
  )
}
