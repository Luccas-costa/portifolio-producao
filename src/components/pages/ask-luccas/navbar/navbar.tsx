import React from 'react'

import Vertical from './vertical'
import Horizontal from './horizontal'

interface NavbarProps {
  isOpen: boolean
  handlerToggle: () => void
}

export default function Navbar({ isOpen, handlerToggle }: NavbarProps) {
  return (
    <div>
      <Horizontal />
      <Vertical handlerToggle={handlerToggle} isOpen={isOpen} />
    </div>
  )
}
