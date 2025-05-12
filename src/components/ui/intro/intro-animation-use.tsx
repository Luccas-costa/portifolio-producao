'use client'
import React from 'react'
import IntroAnimation from '@/components/ui/intro/intro-animation'
import { motion } from 'framer-motion'

export default function IntroAnimationUse() {
  return (
    <motion.div
      className="min-w-screen min-h-screen overflow-hidden bg-zinc-900"
      //   initial={{ opacity: 1 }}
      //   animate={{ opacity: 0 }}
      //   transition={{ delay: 0.4, duration: 1 }}
    >
      <IntroAnimation />
    </motion.div>
  )
}
