'use client'
import React, { useState } from 'react'
import Navbar from '@/components/pages/ask-luccas/navbar/navbar'
import Chatbot from '@/components/pages/ask-luccas/chatbot/chatbot'
import NavbarMobile from '@/components/pages/ask-luccas/navbar-mobile/navbar-mobile'

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
      <div className="absolute left-0 top-0 hidden screen600:block">
        <Navbar isOpen={isOpen} handlerToggle={handlerToggle} />
      </div>
      <div className="absolute left-0 top-0 block screen600:hidden">
        <NavbarMobile />
      </div>
      <div
        className="flex h-full w-full items-end justify-center bg-black screen600:justify-end"
        style={{ zIndex: 1 }}
      >
        <div
          className={`mx-2 mb-2 h-[calc(100%-60px)] w-[100%] screen600:mr-2 ${isOpen ? 'screen600:w-[calc(100%-250px)]' : 'screen600:w-[calc(100%-70px)]'} rounded-xl bg-[#202123] transition-all duration-200`}
          style={{ zIndex: 2 }}
        >
          <Chatbot />
        </div>
      </div>
    </div>
  )
}
