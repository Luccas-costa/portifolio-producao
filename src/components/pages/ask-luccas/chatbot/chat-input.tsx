'use client'

import { ArrowUp } from '@phosphor-icons/react'
import React, { useState } from 'react'

interface ChatInputProps {
  onStartChat: () => void
  onSendMessage: (message: string) => void
}

export default function ChatInput({
  onStartChat,
  onSendMessage,
}: ChatInputProps) {
  const [question, setQuestion] = useState('')

  const isDisabled = question.trim() === ''

  const handleSend = () => {
    if (!isDisabled) {
      onStartChat()
      onSendMessage(question)
      setQuestion('')
    }
  }

  return (
    <div className="mb-[20px] h-[110px] w-full max-w-[760px] rounded-[24px] border border-zinc-600">
      <div className="flex h-full w-full flex-col">
        <input
          type="text"
          placeholder="Pergunte algo sobre o Luccas"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="border-none bg-transparent p-4 text-lg text-white placeholder:text-zinc-300 focus:outline-none"
        />
        <div className="flex items-center justify-between">
          <div className="flex translate-x-[10px] translate-y-[-1px] select-none items-center gap-2">
            {['Quem é luccas?', 'Com o que você trabalha?'].map((q) => (
              <div
                key={q}
                className="hidden cursor-pointer rounded-full border border-zinc-600 px-3 py-[6px] text-zinc-400 transition-all duration-300 hover:bg-zinc-600 hover:text-[#D9D9E3] screen700:block"
                onClick={() => setQuestion(q)}
              >
                {q}
              </div>
            ))}
            <div
              className="block cursor-pointer rounded-full border border-zinc-600 px-3 py-[6px] text-zinc-400 transition-all duration-300 hover:bg-zinc-600 hover:text-[#D9D9E3] screen700:hidden"
              onClick={() => setQuestion('Quem é Luccas?')}
            >
              Quem é Luccas?
            </div>
            <div className="cursor-pointer rounded-full border border-zinc-600 px-3 py-[6px] text-zinc-400 transition-all duration-300 hover:bg-zinc-600 hover:text-[#D9D9E3]">
              Ver mais...
            </div>
          </div>
          <button
            disabled={isDisabled}
            className={`flex size-[36px] translate-x-[-13px] translate-y-[-1px] items-center justify-center rounded-full transition-all duration-300 ${
              isDisabled
                ? 'bg-zinc-700 opacity-50'
                : 'bg-zinc-600 hover:bg-zinc-500'
            }`}
            onClick={handleSend}
          >
            <ArrowUp
              size={26}
              weight="bold"
              className="h-[26px] w-[26px] text-zinc-400"
            />
          </button>
        </div>
      </div>
      <div className="traslate-x-[50vw] static bottom-0 h-[20px] translate-y-[6px] rounded-b-2xl text-center text-xxs font-light text-zinc-400/60 screen600:translate-y-[10px] screen630:text-sm">
        O LuccasGpt pode cometer erros. Considere verificar informações
        importantes.
      </div>
    </div>
  )
}
