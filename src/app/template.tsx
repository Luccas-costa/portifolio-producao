'use client'

import Image from 'next/image'
import Imagem from '@/app/favicon.ico'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { PageTransition2 } from '@/lib/animation'

export default function Template({ children }: { children: React.ReactNode }) {
  const [showCursorNone, setShowCursorNone] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCursorNone(false)
    }, 2500) // 2.5 segundos

    return () => clearTimeout(timeout)
  }, []) // Executa apenas uma vez na montagem do componente

  return (
    <div className={`m-0 gap-0 p-0 ${showCursorNone ? 'cursor-none' : ''}`}>
      <motion.div
        id="banner-1"
        className="fixed left-0 top-0 z-[90] min-h-screen w-[21%] bg-neutral-800"
        initial="initial"
        animate="animate"
        variants={PageTransition2}
        transition={{ duration: 1.4 }}
      ></motion.div>
      <motion.div
        id="banner-1"
        className="fixed left-[20%] top-0 z-[90] min-h-screen w-[21%] bg-neutral-800"
        initial="initial"
        animate="animate"
        variants={PageTransition2}
        transition={{ duration: 1.6 }}
      ></motion.div>
      <motion.div
        id="banner-1"
        className="fixed left-[40%] top-0 z-[90] flex min-h-screen w-[21%] items-center justify-center bg-neutral-800"
        initial="initial"
        animate="animate"
        variants={PageTransition2}
        transition={{ duration: 1.8 }}
      >
        <Image src={Imagem} alt="logo" width={100} height={100} />
      </motion.div>
      <motion.div
        id="banner-1"
        className="fixed left-[60%] top-0 z-[90] min-h-screen w-[21%] bg-neutral-800"
        initial="initial"
        animate="animate"
        variants={PageTransition2}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.div
        id="banner-1"
        className="fixed left-[80%] top-0 z-[90] min-h-screen w-[21%] bg-neutral-800"
        initial="initial"
        animate="animate"
        variants={PageTransition2}
        transition={{ duration: 2.2 }}
      ></motion.div>
      {children}
    </div>
  )
}
