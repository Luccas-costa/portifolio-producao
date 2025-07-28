'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/pages/ask-luccas/navbar/navbar'
import Chatbot from '@/components/pages/ask-luccas/chatbot/chatbot'
import NavbarMobile from '@/components/pages/ask-luccas/navbar-mobile/navbar-mobile'
import { GetUserName } from '@/hooks/get-username'

export default function AskLuccas() {
  const [isOpen, setIsOpen] = useState(false)
  const [guidedChat, setGuidedChat] = useState(false)
  const [userName, setUserName] = useState<string>('Carregando...')

  const handlerToggle = (forceOpen?: boolean) => {
    setIsOpen(forceOpen === true ? true : !isOpen)
  }

  const handlerToggleGuidedChat = () => setGuidedChat((prev) => !prev)

  useEffect(() => {
    GetUserName(setUserName)
  }, []) // busca apenas 1 vez

  useEffect(() => {
    if (userName === 'Usuario nao esta logado') {
      setUserName('Entrar')
    }
  }, [userName]) // troca para "Entrar" se vier a mensagem

  return (
    <div className="relative h-[100dvh] w-full bg-black">
      <div className="absolute left-0 top-0 hidden screen600:block">
        <Navbar
          isOpen={isOpen}
          handlerToggle={handlerToggle}
          handlerToggleGuidedChat={handlerToggleGuidedChat}
          isGuidedChat={guidedChat}
          userName={userName}
        />
      </div>
      <div className="absolute left-0 top-0 block screen600:hidden">
        <NavbarMobile
          handlerToggleGuidedChat={handlerToggleGuidedChat}
          isGuidedChat={guidedChat}
          userName={userName}
        />
      </div>
      <div
        className="flex h-full w-full items-end justify-center bg-black screen600:justify-end"
        style={{ zIndex: 1 }}
      >
        <div
          className={`mx-2 mb-2 h-[calc(100%-60px)] w-[100%] screen600:mr-2 ${isOpen ? 'screen600:w-[calc(100%-250px)]' : 'screen600:w-[calc(100%-70px)]'} rounded-xl bg-[#202123] transition-all duration-200`}
          style={{ zIndex: 2 }}
        >
          <Chatbot
            guidedChat={guidedChat}
            handlerToggleGuidedChat={handlerToggleGuidedChat}
          />
        </div>
      </div>
    </div>
  )
}
