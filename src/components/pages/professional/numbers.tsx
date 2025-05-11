/* eslint-disable prettier/prettier */
import React from 'react'
import styles from '@/styles/feixe-de-luz.module.css'

export default function Numbers() {
  return (
    <div className="relative h-[500px] w-full screen670:h-[250px]">
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden bg-[#E97511]/85 text-3xl font-black screen670:flex-row screen670:text-2xl screen768:text-3xl`}
      >
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          3 anos de experiência
        </div>
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          R$ 1.200.000
        </div>
        <div className="flex h-1/3 w-full items-center justify-center px-[10px] text-center screen670:h-full screen670:w-1/3">
          + 800 mil
        </div>
        <div
          className={`pointer-events-none absolute h-[200%] w-[100px] rotate-[20deg] bg-white opacity-40 mix-blend-screen blur-2xl ${styles.feixe}`}
        ></div>
      </div>
      <div
        className={`relative flex h-[4px] w-full translate-y-[8px] items-center justify-center overflow-hidden bg-[#E97511]/85`}
      >
        <div
          className={`pointer-events-nones absolute h-[408%] w-[105px] translate-x-[-50px] rotate-[6deg] bg-white mix-blend-screen blur-2xl ${styles.feixe}`}
        />
      </div>
    </div>
  )
}
