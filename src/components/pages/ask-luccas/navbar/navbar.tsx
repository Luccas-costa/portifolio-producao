import React from 'react'

import Vertical from './vertical'
import Horizontal from './horizontal'

interface NavbarProps {
  isOpen: boolean
  handlerToggle: () => void
  handlerToggleGuidedChat?: () => void
  isGuidedChat?: boolean
  userName?: string
}

export default function Navbar({
  isOpen,
  handlerToggle,
  handlerToggleGuidedChat,
  isGuidedChat,
  userName,
}: NavbarProps) {
  return (
    <div>
      <Horizontal userName={userName} />
      <Vertical
        handlerToggle={handlerToggle}
        isOpen={isOpen}
        handlerToggleGuidedChat={handlerToggleGuidedChat}
        isGuidedChat={isGuidedChat}
      />
    </div>
  )
}
