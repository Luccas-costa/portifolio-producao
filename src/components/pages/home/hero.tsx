'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import HeroImage from 'public/background-bags.jpg'
import Link from 'next/link'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const handleImageLoad = () => {
    setLoaded(true)
  }
  return (
    <div className="h-full w-full">
      <div className="flex h-[calc(100vh-110px)] w-full justify-center bg-primary px-[50px]">
        <div className="relative mt-1 h-[96.5%] w-full overflow-hidden rounded-lg shadow-xl">
          <Image
            src={HeroImage}
            alt="Imagem de fundo principal"
            objectFit="cover"
            onLoad={handleImageLoad}
            style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col text-center text-7xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Venha conhecer sua TekoBag{"'"}s
            <div className="mt-4">
              <button className="rounded border-2 border-white px-4 py-2 text-4xl hover:bg-white hover:text-primary">
                <Link href="/">Montagem</Link>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
