import NewChatIcon from '@/assets/new-chat-icon'
import {
  ArrowClockwise,
  ArrowRight,
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

import React, { useState } from 'react'
import Folder from 'ui/folder'

export default function ScreenPc() {
  const [inputValue, setInputValue] = useState<string>('')
  const [isChat, setIsChat] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [mensage, setMensage] = useState<string>('')

  const resposta = `Aqui estão algumas ideias para introduzir o tema combate à arquitetura hostil com repertório relevante:\n\n
  1. Contextualização do Problema\n
  A arquitetura hostil é um conjunto de práticas de design urbano que busca afastar determinados grupos sociais de espaços públicos, como moradores de rua, skatistas e até mesmo jovens e idosos. Ela se manifesta em bancos com divisórias para impedir que alguém se deite, espinhos em calçadas, jatos d'água programados para expulsar pessoas e outras intervenções que limitam o uso do espaço urbano.\n\n
  2. Repertório Filosófico e Sociológico\n
  Michel Foucault: O conceito de biopolítica pode ser relacionado à arquitetura hostil, pois ela reflete o controle do Estado sobre os corpos no espaço público, determinando quem pode ou não ocupar certos lugares.\n
  David Harvey: O direito à cidade é um princípio fundamental que se opõe à arquitetura hostil. Harvey defende que todos têm o direito de usufruir dos espaços urbanos e participar da sua construção.\n\n
  3. Exemplos e Casos Reais\n
  Londres e Nova York: Essas cidades são conhecidas por práticas hostis, como bancos inclinados e barras de metal para evitar que moradores de rua se acomodem.\n
  São Paulo (2015): O caso da instalação de pedras pontiagudas embaixo de viadutos gerou revolta e levou à remoção dessas estruturas, mostrando a resistência da sociedade.\n
  Movimento "Design for All": Iniciativas que defendem a acessibilidade e o uso democrático do espaço urbano, promovendo alternativas à arquitetura hostil.\n\n
  4. Repertório Artístico e Cultural\n
  Filme "Parasita" (2019): A desigualdade social é evidenciada no contraste entre os espaços da elite e os locais marginalizados. A arquitetura hostil pode ser vista como um reflexo dessa divisão.\n
  Obra "A Cidade e as Serras" (Eça de Queirós): Critica a modernização excludente, que pode ser associada à segregação imposta pela arquitetura hostil.\n\n
  5. Tese para a Introdução\n
  Diante da crescente adoção de medidas que restringem o uso dos espaços públicos, surge um debate essencial sobre a função social da arquitetura e a necessidade de promover cidades mais inclusivas. O combate à arquitetura hostil é, portanto, um passo fundamental para garantir o direito à cidade e o respeito à dignidade humana.`

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
              <div className="size-5 rounded-full bg-[#2E2E2E]"></div>
            </div>
            {isChat ? (
              <>
                <div className="mx-auto flex w-[500px] flex-1 flex-col gap-5">
                  <div className="max-w-[300px] self-end break-words rounded-2xl bg-[#2E2E2E]/40 px-4 py-2 text-xs font-light text-zinc-300">
                    {mensage}
                  </div>
                  <div className="max-h-[300px] max-w-[400px] whitespace-pre-wrap text-xs font-light text-zinc-300">
                    {resposta}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-1 flex-col items-center justify-center gap-1">
                  <div className="text-xl font-medium text-zinc-300">
                    Ask about luccas
                  </div>
                  <div className="mt-2 flex h-[70px] w-[400px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3">
                    <input
                      type="text"
                      className="h-[40px] w-full bg-transparent text-xs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                      placeholder="Ask anything"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
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
                        disabled={!inputValue.trim()}
                        onClick={() => {
                          setMensage(inputValue)
                          setInputValue('')
                          setIsChat(true)
                        }}
                        className="w-fit rounded-full bg-zinc-300 p-1 disabled:bg-neutral-600"
                      >
                        <ArrowUp size={14} weight="bold" color="black" />
                      </button>
                    </div>
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
                className={`mb-2 mt-2 flex h-[30px] w-[470px] flex-col rounded-l-2xl bg-[#2E2E2E]/40 ${isOpen ? 'px-3' : ''}`}
              >
                {isOpen ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="mr-[2%] h-[30px] w-[98%] bg-transparent text-xxs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                      placeholder="Ask anything"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      disabled={!inputValue.trim()}
                      className="h-fit w-fit rounded-full bg-zinc-300 p-1 transition-all duration-200 disabled:bg-neutral-600"
                    >
                      <ArrowUp size={14} weight="bold" color="black" />
                    </button>
                  </div>
                ) : (
                  <div className="h-full w-full rounded-l-2xl bg-[#2E2E2E]/40 px-3">
                    <div className="flex h-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="group w-fit cursor-pointer rounded-full border border-[#52525b] p-1 transition-all duration-200 hover:bg-[#52525b]">
                          <Plus
                            size={12}
                            weight="bold"
                            className="text-[#52525b] group-hover:text-white"
                          />
                        </div>
                        <div className="group flex w-fit cursor-pointer items-center gap-1 rounded-full border border-[#52525b] px-1 py-[3px] transition-all duration-200 hover:bg-[#52525b]">
                          <Globe
                            size={13}
                            weight="bold"
                            className="text-[#52525b] group-hover:text-white"
                          />
                          <div className="text-xxs font-light text-neutral-500 group-hover:text-white">
                            Search
                          </div>
                        </div>
                        <div className="group flex w-fit cursor-pointer items-center gap-1 rounded-full border border-[#52525b] px-1 py-[3px] transition-all duration-200 hover:bg-[#52525b]">
                          <Lightbulb
                            size={13}
                            weight="bold"
                            className="text-[#52525b] group-hover:text-white"
                          />
                          <div className="text-xxs font-light text-neutral-500 group-hover:text-white">
                            Reason
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                className={`mb-2 mt-2 flex h-[28px] items-center justify-center rounded-r-2xl p-1 ${inputValue.trim() ? 'bg-zinc-300' : 'bg-zinc-400'} transition-all duration-200`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <ArrowRight size={14} weight="bold" color="black" />
              </button>
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
