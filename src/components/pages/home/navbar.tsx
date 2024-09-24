'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import styles from '@/styles/border.module.css'
import logo from 'public/logos/logo-transparente.png'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr'

export default function Navbar() {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div className="h-[65px] w-full bg-primary px-[50px] py-2 shadow-2xl">
      <div className="flex w-full items-center justify-between px-4">
        <div>
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>
        <div className="mt-2 flex items-center gap-4">
          <div>
            <ul className="flex gap-3 text-base font-semibold">
              <li className={`${styles.navItemlight}`}>Home</li>
              <li className={`${styles.navItemlight}`}>Sobre</li>
              <li className={`${styles.navItemlight}`}>Contato</li>
            </ul>
          </div>
          <div>
            <button className="items-center rounded bg-secondary/15 px-3 py-2 font-bold uppercase shadow-xl active:bg-secondary/20">
              Login
            </button>
          </div>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://www.instagram.com/tekobags/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo
                size={25}
                weight={isHovered ? 'fill' : 'regular'}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
