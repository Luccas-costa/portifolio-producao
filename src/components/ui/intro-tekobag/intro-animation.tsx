'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function IntroAnimation() {
  return (
    <div className="font-montserrat fixed left-1/2 top-1/2 flex h-[160px] max-h-36 w-[900px] -translate-x-1/2 -translate-y-[70%] items-center justify-center gap-0 overflow-hidden text-[160px] font-black text-zinc-200">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -320 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[240px]">T</div>
        <div className="translate-y-[160px]">T</div>
        <div className="translate-y-[80px]">T</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 155 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-35px]">E</div>
        <div className="translate-y-[-120px]">E</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 480 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-120px]">K</div>
        <div className="translate-y-[-200px]">K</div>
        <div className="translate-y-[-280px]">K</div>
        <div className="translate-y-[-360px]">K</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -320 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[240px]">O</div>
        <div className="translate-y-[160px]">O</div>
        <div className="translate-y-[80px]">O</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -480 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[360px]">B</div>
        <div className="translate-y-[280px]">B</div>
        <div className="translate-y-[200px]">B</div>
        <div className="translate-y-[120px]">B</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 155 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-35px]">A</div>
        <div className="translate-y-[-120px]">A</div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 480 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-120px]">G</div>
        <div className="translate-y-[-200px]">G</div>
        <div className="translate-y-[-280px]">G</div>
        <div className="translate-y-[-360px]">G</div>
      </motion.div>
    </div>
  )
}
