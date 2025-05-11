/* eslint-disable prettier/prettier */
import React from 'react'
import logo from 'public/logos/logo-tranparente.png'
import Image from 'next/image'

import styles from '@/styles/menu-burger.module.css'

export default function Navbar() {
  return (
    <div
      className="screen1500:px-[270px] fixed top-0 flex h-[65px] w-full items-center justify-between bg-black/5 px-[20px] text-zinc-200/60 screen700:px-[100px]"
      style={{ zIndex: 90 }}
    >
      <div className="min-w-[100px]">
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>
      <div className="hidden items-center gap-5 font-medium screen1100:flex">
        <div className="transition-default cursor-pointer hover:text-white">
          About
        </div>
        <div className="transition-default cursor-pointer hover:text-white">
          specialization
        </div>
        <div className="transition-default cursor-pointer hover:text-white">
          Projects
        </div>
        <div className="transition-default cursor-pointer hover:text-white">
          Contact
        </div>
      </div>
      <div className="hidden min-w-[100px] items-center gap-3 screen1100:flex">
        <button className="transition-default font-medium hover:text-white">
          Login
        </button>
        <button className="transition-default rounded-lg bg-white px-2 py-1 font-medium text-zinc-900 hover:bg-white/50">
          Sign up
        </button>
      </div>
      <div className="flex size-[40px] screen1100:hidden">
        <div className="z-70 flex h-full w-full items-center justify-center">
          <button>
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
    </div>
  )
}
