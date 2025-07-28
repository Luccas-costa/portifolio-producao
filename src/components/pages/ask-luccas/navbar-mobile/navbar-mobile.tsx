'use client'
import React, { useState } from 'react'
import Horizontal from '../navbar/horizontal'
import MenuMobile from './menu-mobile'

interface NavbarMobileProps {
  handlerToggleGuidedChat: () => void
  isGuidedChat: boolean
  userName?: string
}

export default function NavbarMobile({
  handlerToggleGuidedChat,
  isGuidedChat,
  userName,
}: NavbarMobileProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handlerToggle = (forceOpen?: boolean) => {
    if (forceOpen === true) {
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
  }
  return (
    <>
      <Horizontal
        isOpen={isOpen}
        handlerToggle={() => setIsOpen(!isOpen)}
        userName={userName}
      />
      <MenuMobile
        isOpen={isOpen}
        handlerToggle={handlerToggle}
        handlerToggleGuidedChat={handlerToggleGuidedChat}
        isGuidedChat={isGuidedChat}
      />
    </>
  )
}
