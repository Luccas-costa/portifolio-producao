'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import ChatInput from './chat-input'
import {
  ThumbsUp,
  ThumbsDown,
  Copy,
  DotsThreeOutlineVertical,
  ArrowClockwise,
} from '@phosphor-icons/react'
import Image from 'next/image'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [chatStarted, setChatStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [feedbacks, setFeedbacks] = useState<
    Record<number, 'like' | 'dislike' | null>
  >({})

  const handleStartChat = () => setChatStarted(true)

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { role: 'user', content: message }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })

      const data = await res.json()
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Erro ao chamar API:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async (index: number, question: string) => {
    setLoading(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      })

      const data = await res.json()

      setMessages((prev) => {
        const updated = [...prev]
        updated[index] = { role: 'assistant', content: data.reply }
        return updated
      })
    } catch (err) {
      console.error('Erro ao recarregar:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-end rounded-xl bg-[#202123] p-4">
      <div className="w-full max-w-3xl flex-1 space-y-4 overflow-y-auto">
        {!chatStarted ? (
          <div className="translate-y-[34vh] text-center font-montserrat text-3xl font-bold text-[#D9D9E3]">
            Pergunte algo sobre o Luccas
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex w-full flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-3">
                  {/* Círculo de imagem (somente para assistente) */}
                  {msg.role !== 'user' && (
                    <div className="mt-1 h-7 w-7 flex-shrink-0 overflow-hidden rounded-full">
                      <Image
                        src="/my/my2.jpg"
                        alt="Avatar"
                        width={28}
                        height={28}
                      />
                    </div>
                  )}

                  {/* Balão da mensagem */}
                  <div
                    className={`relative max-w-[100%] rounded-2xl px-4 pt-3 text-sm ${
                      msg.role === 'user'
                        ? 'translate-y-[2px] rounded-2xl rounded-br-none bg-zinc-700/80 text-white shadow-md'
                        : 'rounded-bl-none text-zinc-200'
                    } `}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-3 leading-relaxed text-zinc-200">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-white">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-zinc-300">{children}</em>
                        ),
                        code: ({ children }) => (
                          <code className="rounded bg-zinc-900 px-1 py-0.5 text-sm text-blue-400">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="my-3 overflow-x-auto rounded-md bg-zinc-900 p-4 text-sm text-zinc-100">
                            {children}
                          </pre>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-3 list-disc space-y-1 pl-6 text-zinc-200">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-3 list-decimal space-y-1 pl-6 text-zinc-200">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed">{children}</li>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-800 underline hover:text-indigo-600"
                          >
                            {children}
                          </a>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="my-3 border-l-4 border-zinc-500 pl-4 italic text-zinc-300">
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                </div>

                {/* Ações (like, dislike, copiar, mais) – só para o assistente */}
                {msg.role !== 'user' && (
                  <div className="ml-10 mt-1 flex translate-x-[20px] items-center gap-3 text-zinc-500">
                    <button
                      onClick={() =>
                        setFeedbacks((prev) => ({
                          ...prev,
                          [idx]: prev[idx] === 'like' ? null : 'like',
                        }))
                      }
                      className="transition hover:text-white"
                    >
                      <ThumbsUp
                        size={18}
                        weight={feedbacks[idx] === 'like' ? 'fill' : 'regular'}
                      />
                    </button>

                    <button
                      onClick={() =>
                        setFeedbacks((prev) => ({
                          ...prev,
                          [idx]: prev[idx] === 'dislike' ? null : 'dislike',
                        }))
                      }
                      className="transition hover:text-white"
                    >
                      <ThumbsDown
                        size={18}
                        weight={
                          feedbacks[idx] === 'dislike' ? 'fill' : 'regular'
                        }
                      />
                    </button>

                    <button
                      onClick={() => {
                        const lastUserMessage = messages
                          .slice(0, idx)
                          .reverse()
                          .find((m) => m.role === 'user')?.content

                        if (lastUserMessage) handleRefresh(idx, lastUserMessage)
                      }}
                      className="transition hover:text-white"
                    >
                      <ArrowClockwise size={18} />
                    </button>

                    <button
                      className="transition hover:text-white"
                      onClick={() => navigator.clipboard.writeText(msg.content)}
                    >
                      <Copy size={18} />
                    </button>

                    <button className="transition hover:text-white">
                      <DotsThreeOutlineVertical size={18} weight="regular" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex w-full flex-col items-start gap-1">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-7 w-7 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/my/my2.jpg"
                      alt="Avatar"
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="relative max-w-[80%] rounded-2xl rounded-bl-none bg-zinc-800 px-4 py-3 text-sm italic text-zinc-400">
                    Digitando...
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <ChatInput
        onStartChat={handleStartChat}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}
