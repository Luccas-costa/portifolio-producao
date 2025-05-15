'use client'

import React from 'react'
import styles from '@/styles/fonts.module.css'
import sliderStyle from '@/styles/slider.module.css'
import { Asterisk } from '@phosphor-icons/react/dist/ssr'

const items = [
  'App Design',
  'Website Design',
  'Dashboard',
  'API Development',
  'Database Design',
  'DevOps & Deployment',
]

export default function Skills() {
  const duplicated = [...items, ...items]

  return (
    <div className="relative h-full w-full">
      <div
        style={{ zIndex: 1 }}
        className="absolute left-1/2 top-0 h-full w-[110vw] translate-x-[-50%] rotate-[2deg] bg-[#714da6] pb-[80px]"
      ></div>

      <div
        style={{ zIndex: 2 }}
        className="relative h-[80px] w-full overflow-hidden bg-[#E97511]"
      >
        <div
          className={`flex h-full translate-x-[-14px] items-center gap-[50px] text-4xl font-semibold text-zinc-900 ${sliderStyle.sliderTrack} ${styles.monserrat}`}
        >
          {duplicated.map((text, index) => (
            <React.Fragment key={index}>
              <Asterisk size={32} weight="bold" />
              <div>{text}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
