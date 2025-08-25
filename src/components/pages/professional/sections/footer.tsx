'use client'
import React, { useState } from 'react'

import { motion } from 'framer-motion'

interface FooterProps {
  isVisibleMenu?: boolean
}

export default function Footer({ isVisibleMenu }: FooterProps) {
  return (
    <div className="h-full w-full bg-[#141414] pt-[20px]" id="contact">
      <div className="h-full">
        <div className="flex h-full flex-col items-center justify-between">
          <div className="hidden w-full justify-around screen1000:flex">
            <ItemList
              title="Get in touch"
              subtitle="lucascomercial@gmail.com"
            />
            <ItemList
              title="Connect"
              subtitle={['Linkedin', 'Github', 'Instagram']}
            />
            <ItemList
              title="Design Services"
              subtitle={[
                'Luccas Luccas Design Services LpC',
                'Taubate Av.italia',
                '1000 Sao Paulo, Brasil',
              ]}
            />
            <ItemList
              title="Ventures"
              subtitle={[
                'Luccas Luccas Ventures LpC',
                'Taubate Av.italia',
                '1000 Sao Paulo, Brasil',
              ]}
            />
          </div>
          <div className="traslate-x-[-50%] hidden flex-col items-center gap-[50px] screen500:flex screen1000:hidden">
            <div className="flex w-full gap-[114px]">
              <ItemList
                title="Get in touch"
                subtitle="lucascomercial@gmail.com"
              />
              <ItemList
                title="Connect"
                subtitle={['Linkedin', 'Github', 'Instagram']}
              />
            </div>
            <div className="flex w-full gap-[50px]">
              <ItemList
                title="Design Services"
                subtitle={[
                  'Luccas Luccas Design Services LpC',
                  'Taubate Av.italia',
                  '1000 Sao Paulo, Brasil',
                ]}
              />
              <ItemList
                title="Ventures"
                subtitle={[
                  'Luccas Luccas Ventures LpC',
                  'Taubate Av.italia',
                  '1000 Sao Paulo, Brasil',
                ]}
              />
            </div>
          </div>
          <div className="traslate-x-[-50%] flex flex-col items-center gap-[50px] screen500:hidden">
            <ItemList
              title="Get in touch"
              subtitle="lucascomercial@gmail.com"
            />
            <ItemList
              title="Design Services"
              subtitle={[
                'Luccas Luccas Design Services LpC',
                'Taubate Av.italia',
                '1000 Sao Paulo, Brasil',
              ]}
            />
            <ItemList
              title="Ventures"
              subtitle={[
                'Luccas Luccas Ventures LpC',
                'Taubate Av.italia',
                '1000 Sao Paulo, Brasil',
              ]}
            />
          </div>
          <div
            className={`flex flex-col ${!isVisibleMenu ? 'mt-[100px]' : ''}`}
          >
            {isVisibleMenu && (
              <>
                <div className="mb-[20px] hidden w-full items-center justify-center screen500:flex">
                  <NavBar />
                </div>
                <div className="mb-[20px] mt-[20px] flex w-full items-center justify-center screen500:hidden">
                  <MobileNavBar />
                </div>
              </>
            )}
            <div className="pb-1 text-center text-sm font-medium text-neutral-600 screen500:text-base">
              <div>Typeface by Luccas | © 2025 Data Privacy Imprint</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemList = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string | string[]
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-center text-base font-medium text-neutral-600 screen500:text-start screen600:text-lg">
        {title}
      </div>
      {Array.isArray(subtitle) ? (
        subtitle.map((item, index) => (
          <div
            key={index}
            className="pl-1 text-center text-sm text-zinc-300 screen500:text-start screen600:text-base"
          >
            {item}
          </div>
        ))
      ) : (
        <div className="pl-1 text-center text-sm text-zinc-300 screen500:text-start screen600:text-base">
          {subtitle}
        </div>
      )}
    </div>
  )
}

const NavBar = () => {
  const [isChosen, setIsChosen] = useState(4)
  const items = [
    { id: 1, label: 'About' },
    { id: 2, label: 'Specialization' },
    { id: 3, label: 'Projects' },
    { id: 4, label: 'Contact' },
  ]

  return (
    <div className="mx-auto h-[70px] w-full max-w-[550px] cursor-pointer rounded-full bg-zinc-200 px-2">
      <div className="relative flex flex-wrap justify-evenly gap-1 p-1 sm:p-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative z-10 min-w-[100px] flex-1"
            onClick={() => setIsChosen(item.id)}
          >
            {isChosen === item.id && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 rounded-full bg-[#141414]"
                transition={{ type: 'spring', stiffness: 500, damping: 50 }}
              />
            )}
            <a
              href={`#${item.label.toLowerCase()}`}
              className={`relative flex h-[64px] items-center justify-center rounded-full px-4 text-sm font-medium transition-colors sm:h-[54px] sm:text-base ${
                isChosen === item.id ? 'text-zinc-200' : 'text-zinc-950'
              }`}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const MobileNavBar = () => {
  const [isChosen, setIsChosen] = useState(4)
  const items = [
    { id: 1, label: 'About' },
    { id: 2, label: 'Specialization' },
    { id: 3, label: 'Projects' },
    { id: 4, label: 'Contact' },
  ]

  return (
    <div className="mx-auto h-auto w-full max-w-xs cursor-pointer rounded-2xl bg-zinc-200 p-2 shadow-md">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative z-10"
            onClick={() => setIsChosen(item.id)}
          >
            {isChosen === item.id && (
              <motion.div
                layoutId="mobile-highlight"
                className="absolute inset-0 rounded-xl bg-[#141414]"
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              />
            )}
            <a
              href={`#${item.label.toLowerCase()}`}
              className={`relative z-10 flex h-10 items-center justify-center rounded-xl px-3 text-sm font-medium transition-colors ${
                isChosen === item.id ? 'text-zinc-200' : 'text-zinc-950'
              }`}
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
