/* eslint-disable prettier/prettier */
'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import logo from 'public/logos/logo-tranparente.png'
import styles from '@/styles/menu-burger.module.css'

import { motion, AnimatePresence } from 'framer-motion'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)

  const handlerToggleMenu = (e: { stopPropagation: () => void; preventDefault: () => void }) => {
  e.stopPropagation()
  e.preventDefault()
  setIsOpen((prev) => {
    console.log(!prev)
    return !prev
  })
}

  return (
    <div
      className={`screen1500:px-[270px] fixed top-0 flex h-[65px] w-full items-center justify-between ${isOpen ? 'bg-[#141414]/95' : "bg-black/5"} px-[20px] text-zinc-200/60 screen700:px-[100px] transition-all duration-200`}
      style={{ zIndex: 90 }}
    >
      <div className="min-w-[100px]">
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>
      <div className="hidden items-center gap-5 font-medium screen1100:flex">
        <a href='#about' className="transition-default cursor-pointer hover:text-white">
          About
        </a>
        <a href='#specialization' className="transition-default cursor-pointer hover:text-white">
          Specialization
        </a>
        <a href='#projects' className="transition-default cursor-pointer hover:text-white">
          Projects
        </a>
        <a href='#contact' className="transition-default cursor-pointer hover:text-white">
          Contact
        </a>
      </div>
      <div className="hidden min-w-[100px] items-center gap-3 screen1100:flex">
        <button className="transition-default font-medium hover:text-white">
          Login
        </button>
        <button className="transition-default rounded-lg bg-white px-2 py-1 font-medium text-zinc-900 hover:bg-white/50">
          Sign up
        </button>
      </div>
      <div className="flex size-[40px] screen1100:hidden" onClick={handlerToggleMenu}>
        <div className="z-70 flex h-full w-full items-center justify-center">
          <button >
            <label className={`${styles.hamburger}`} style={{ zIndex: 70 }}>
              <input type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  className={` ${styles.line} ${styles.linetopbottom}`}
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className={styles.line} d="M7 16 27 16"></path>
              </svg>
            </label>
          </button>
        </div>
      </div>
     <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-[#141414]/95 text-zinc-200/60 w-full h-[200px] absolute left-0 top-[65px] flex flex-col items-center text-lg font-semibold"
    >
      <a href='#about' className='h-1/4 border-t border-zinc-200/60 w-[80%] flex items-center justify-center'>About</a>
      <a href='#specialization' className='h-1/4 border-t border-zinc-200/60 w-[80%] flex items-center justify-center'>Specialization</a>
      <a href='#projects' className='h-1/4 border-t border-zinc-200/60 w-[80%] flex items-center justify-center'>Projects</a>
      <a href='#contact' className='h-1/4 border-t border-zinc-200/60 w-[80%] flex items-center justify-center'>Contact</a>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  )
}
