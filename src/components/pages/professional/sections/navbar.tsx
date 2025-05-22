'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'public/logos/logo-tranparente.png'
import styles from '@/styles/menu-burger.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handlerToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={`fixed top-0 flex h-[65px] w-full items-center justify-between screen1500:px-[270px] ${
        isOpen ? 'bg-[#141414]/95' : 'bg-black/5'
      } px-[20px] text-zinc-200/60 transition-all duration-200 screen700:px-[100px]`}
      style={{ zIndex: 90 }}
    >
      <div className="min-w-[100px]">
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>

      {/* Menu Desktop */}
      <div className="hidden items-center gap-5 font-medium screen1100:flex">
        <a
          href="#about"
          className="transition-default cursor-pointer hover:text-white"
        >
          About
        </a>
        <a
          href="#specialization"
          className="transition-default cursor-pointer hover:text-white"
        >
          Specialization
        </a>
        <a
          href="#projects"
          className="transition-default cursor-pointer hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-default cursor-pointer hover:text-white"
        >
          Contact
        </a>
      </div>

      {/* Ações Desktop */}
      <div className="hidden min-w-[100px] items-center gap-3 screen1100:flex">
        <Link
          href={'/login'}
          className="transition-default font-medium hover:text-white"
        >
          Login
        </Link>
        <Link
          href={'/register'}
          className="transition-default rounded-lg bg-white px-2 py-1 font-medium text-zinc-900 hover:bg-white/50"
        >
          Sign up
        </Link>
      </div>

      {/* Menu Mobile */}
      <div className="flex size-[40px] screen1100:hidden">
        <div className="z-70 flex h-full w-full items-center justify-center">
          <label className={styles.hamburger} style={{ zIndex: 70 }}>
            <input
              type="checkbox"
              checked={isOpen}
              onChange={handlerToggleMenu}
            />
            <svg viewBox="0 0 32 32">
              <path
                className={`${styles.line} ${styles.linetopbottom}`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className={styles.line} d="M7 16 27 16" />
            </svg>
          </label>
        </div>
      </div>

      {/* Menu deslizante animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute left-0 top-[65px] flex h-[200px] w-full flex-col items-center bg-[#141414]/95 text-lg font-semibold text-zinc-200/60"
            onClick={handlerToggleMenu}
          >
            <a
              href="#about"
              className="flex h-1/4 w-[80%] items-center justify-center"
            >
              About
            </a>
            <a
              href="#specialization"
              className="flex h-1/4 w-[80%] items-center justify-center border-t border-zinc-200/60"
            >
              Specialization
            </a>
            <a
              href="#projects"
              className="flex h-1/4 w-[80%] items-center justify-center border-t border-zinc-200/60"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="flex h-1/4 w-[80%] items-center justify-center border-t border-zinc-200/60"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
