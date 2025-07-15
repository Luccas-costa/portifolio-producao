'use client'
import React, { useState } from 'react'
import Horizontal from '../navbar/horizontal'
import MenuMobile from './menu-mobile'

export default function NavbarMobile() {
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
      <Horizontal isOpen={isOpen} handlerToggle={() => setIsOpen(!isOpen)} />
      <MenuMobile isOpen={isOpen} handlerToggle={handlerToggle} />
    </>
  )
}
