'use client'

import { ArrowUp } from '@phosphor-icons/react'
import React, { useState } from 'react'

interface ChatInputGuiadoProps {
  onStartChat: () => void
  onSendMessage: (message: string) => void
}

export default function ChatInputGuiado({
  onStartChat,
  onSendMessage,
}: ChatInputGuiadoProps) {
  const [question, setQuestion] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState('') // <-- novo estado
  const [plusQuestion, setPlusQuestion] = useState(false)

  const isDisabled = question.trim() === ''

  const handleSend = () => {
    if (!isDisabled) {
      onStartChat()
      onSendMessage(question)
      setQuestion('')
      setSelectedQuestion('') // opcional: desmarca após enviar
    }
  }

  const handleSelectQuestion = (q: string) => {
    setQuestion(q)
    setSelectedQuestion(q)
  }

  const getClassName = (q: string) =>
    ` cursor-pointer rounded-full border border-zinc-600 px-3 py-[6px] transition-all duration-300 block ${
      selectedQuestion === q
        ? 'bg-zinc-600 text-[#D9D9E3]'
        : 'text-zinc-400 hover:bg-zinc-600 hover:text-[#D9D9E3]'
    }`

  const testClassName = `h-[302px] screen460:h-[255px] screen480:h-[203px] screen540:h-[162px] screen600:h-[165px] screen630:h-[253px] screen775:h-[210px]`

  return (
    <div
      className={`mb-[20px] ${plusQuestion ? testClassName : 'h-[68px] screen500:h-[110px]'} w-full max-w-[760px] rounded-[24px] border border-zinc-600 transition-all duration-200 ease-out`}
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex items-center justify-between px-1 py-4">
          <div className="flex max-w-[88%] translate-x-[10px] translate-y-[-1px] select-none flex-wrap items-center gap-2 screen400:max-w-[90%]">
            {!plusQuestion && (
              <>
                {[
                  'Quem é luccas?',
                  'Com o que você trabalha?',
                  'Quais suas habilidades?',
                ].map((q) => (
                  <div
                    key={q}
                    className={`hidden screen500:block ${getClassName(q)}`}
                    onClick={() => handleSelectQuestion(q)}
                  >
                    {q}
                  </div>
                ))}
                {['Quem é luccas?'].map((q) => (
                  <div
                    key={q}
                    className={`screen390:block hidden screen500:hidden ${getClassName(q)}`}
                    onClick={() => handleSelectQuestion(q)}
                  >
                    {q}
                  </div>
                ))}
              </>
            )}
            {plusQuestion && (
              <>
                {[
                  'Quem é luccas?',
                  'Com o que você trabalha?',
                  'Quais suas habilidades?',
                  'Quais são seus hobbies?',
                  'Quais são suas qualidades?',
                  'Quais são seus objetivos?',
                  'Quais são suas experiências anteriores?',
                  'O que pensa para o futuro?',
                ].map((q) => (
                  <div
                    key={q}
                    className={`hidden screen600:block ${getClassName(q)}`}
                    onClick={() => handleSelectQuestion(q)}
                  >
                    {q}
                  </div>
                ))}
              </>
            )}
            {plusQuestion && (
              <>
                {[
                  'Quem é luccas?',
                  'Com o que você trabalha?',
                  'Quais suas habilidades?',
                  'Quais são seus hobbies?',
                  'O que pensa para o futuro?',
                ].map((q) => (
                  <div
                    key={q}
                    className={`block screen600:hidden ${getClassName(q)}`}
                    onClick={() => handleSelectQuestion(q)}
                  >
                    {q}
                  </div>
                ))}
              </>
            )}
            <div
              className="cursor-pointer rounded-full border border-zinc-600 px-3 py-[6px] text-zinc-400 transition-all duration-300 hover:bg-zinc-600 hover:text-[#D9D9E3]"
              style={{ zIndex: 30 }}
              onClick={() => setPlusQuestion(!plusQuestion)}
            >
              {plusQuestion ? 'Ver menos...' : 'Ver mais...'}
            </div>
          </div>
          <button
            disabled={isDisabled}
            className={`flex size-[36px] translate-x-[-13px] ${
              plusQuestion
                ? 'screen775:translate-y-[71px] screen540:translate-y-[47px] screen535:translate-y-[90px] screen480:translate-y-[65px] screen460:translate-y-[91px] translate-y-[120px] screen600:translate-y-[117px] screen630:translate-y-[91px]'
                : 'translate-y-[-2px] screen500:translate-y-[19px]'
            } items-center justify-center rounded-full transition-all duration-300 ${
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
