'use client'
import React, { useState } from 'react'
import Navbar from '@/components/pages/ask-luccas/navbar/navbar'
import Chatbot from '@/components/pages/ask-luccas/chatbot/chatbot'

export default function AskLuccas() {
  const [isOpen, setIsOpen] = useState(false)

  const handlerToggle = (forceOpen?: boolean) => {
    if (forceOpen === true) {
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="relative h-[100dvh] w-full bg-black">
      <div className="absolute left-0 top-0">
        <Navbar isOpen={isOpen} handlerToggle={handlerToggle} />
      </div>
      <div
        className="flex h-full w-full items-end justify-end bg-black"
        style={{ zIndex: 1 }}
      >
        <div
          className={`mb-2 mr-2 h-[calc(100%-60px)] ${isOpen ? 'w-[calc(100%-250px)]' : 'w-[calc(100%-70px)]'} rounded-xl bg-[#202123] transition-all duration-200`}
          style={{ zIndex: 2 }}
        >
          <Chatbot />
        </div>
      </div>
    </div>
  )
}
