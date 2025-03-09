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

import React from 'react'
import Folder from 'ui/folder'

export default function ScreenPc() {
  return (
    <div className="relative z-10 h-full">
      <div className="flex w-full flex-col items-end pr-3">
        <Folder name="Music" />
        <Folder name="New folder" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
        <div className="flex h-[500px] w-[800px] flex-col rounded-xl bg-[#121212]">
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
          <div className="flex flex-1 flex-col rounded-lg pb-2 pl-3 pr-3 pt-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <NewChatIcon />
                <div className="flex items-center gap-1 text-xs font-light text-zinc-300">
                  <div>LuccasGPT</div>
                  <CaretDown size={10} weight="bold" color="#d4d4d8" />
                </div>
              </div>
              <div className="size-5 rounded-full bg-[#2E2E2E]"></div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1">
              <div className="text-xl font-medium text-zinc-300">
                Ask about luccas
              </div>
              <div className="mt-2 flex h-[70px] w-[400px] flex-col rounded-2xl bg-[#2E2E2E]/40 px-3">
                <input
                  type="text"
                  className="h-[40px] w-full bg-transparent text-xs font-light text-zinc-300 outline-none placeholder:text-neutral-400/70"
                  placeholder="Ask anything"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-fit rounded-full border border-[#52525b] p-1">
                      <Plus size={12} weight="bold" color="#52525b" />
                    </div>
                    <div className="flex w-fit items-center gap-1 rounded-full border border-[#52525b] p-1">
                      <Globe size={15} weight="bold" color="#52525b" />
                      <div className="text-xs font-light text-neutral-500">
                        Search
                      </div>
                    </div>
                    <div className="flex w-fit items-center gap-1 rounded-full border border-[#52525b] p-1">
                      <Lightbulb size={15} weight="bold" color="#52525b" />
                      <div className="text-xs font-light text-neutral-500">
                        Reason
                      </div>
                    </div>
                  </div>
                  <button
                    disabled
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
            <div className="text-center text-xxs font-light text-zinc-400/60">
              O LuccasGpt pode cometer erros. Considere verificar informações
              importantes.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
