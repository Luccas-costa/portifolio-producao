import React from 'react'

import Vertical from './vertical'
import Horizontal from './horizontal'

interface NavbarProps {
  isOpen: boolean
  handlerToggle: () => void
  handlerToggleGuidedChat?: () => void
  isGuidedChat?: boolean
}

export default function Navbar({
  isOpen,
  handlerToggle,
  handlerToggleGuidedChat,
  isGuidedChat,
}: NavbarProps) {
  return (
    <div>
      <Horizontal />
      <Vertical
        handlerToggle={handlerToggle}
        isOpen={isOpen}
        handlerToggleGuidedChat={handlerToggleGuidedChat}
        isGuidedChat={isGuidedChat}
      />
    </div>
  )
}
