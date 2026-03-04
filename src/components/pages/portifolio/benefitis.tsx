'use client'
import React, { useRef } from 'react'

import { Bolinhas } from './ui/bolinhas'
import { useInView } from 'framer-motion'

import fonts from '@/styles/globals/fonts.module.css'
import animated from '@/styles/globals/animated.module.css'

import TeamIcon from './ui/team-icon'
import BadgeIcon from './ui/badge-icon'
import EyeIcon from './ui/eye-icon'
import HighIcon from './ui/high-icon'
import PalletIcon from './ui/pallet-icon'
import KmIcon from './ui/km-icon'

export default function Benefitis() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className="relative h-full w-full border border-y border-[#2c2c2c]">
      <div className="absolute z-40 h-[26px] w-[1px] translate-y-[-13px] bg-white"></div>
      <div className="absolute z-40 h-[1px] w-[20px] bg-white"></div>
      <div className="absolute right-0 z-40 h-[26px] w-[1px] translate-y-[-13px] bg-white"></div>
      <div className="absolute right-0 z-40 h-[1px] w-[20px] bg-white"></div>

      <div className="absolute bottom-0 z-40 h-[26px] w-[1px] translate-y-[13px] bg-white"></div>
      <div className="absolute bottom-0 z-40 h-[1px] w-[20px] bg-white"></div>
      <div className="absolute bottom-0 right-0 z-40 h-[26px] w-[1px] translate-y-[13px] bg-white"></div>
      <div className="absolute bottom-0 right-0 z-40 h-[1px] w-[20px] bg-white"></div>

      <div className="my-[115px] flex flex-col gap-5 px-[60px]">
        <div className="inline-block">
          <div
            ref={ref}
            className={`${fonts.geistmono} ${animated.typewriter} ${isInView ? animated['typewriter-animate4'] : ''} font-medium text-[#f63a22]`}
          >
            Benefits
          </div>
        </div>

        <div className="w-[65%] text-5xl text-[3.5rem] font-medium text-white">
          <span className="text-white/40">Websites that make</span> small teams{' '}
          <span className="text-white/40">look like</span> big deals.
        </div>

        <div className="pt-[3rem]">
          <div
            className="relative rounded-[1rem] border border-white/10 bg-white/10"
            style={{ boxShadow: '0 1px 2px #00000012' }}
          >
            <Bolinhas />

            <div
              className={`${fonts.geistmono} absolute right-[3.5rem] top-[-0.5rem] flex rotate-[4deg] items-center justify-center gap-2 rounded-[4px] border border-black/10 bg-[#f63a22] px-[6px] py-[2px] text-white transition-all duration-300 hover:rotate-0`}
              style={{ boxShadow: '0 0 1px #0000001a' }}
            >
              <div className="size-[6px] rounded-full border-[0.5px] border-white/10 bg-white/40 shadow-sm shadow-black/10"></div>
              <div>Available now</div>
              <div className="size-[6px] rounded-full border-[0.5px] border-white/10 bg-white/40 shadow-sm shadow-black/10"></div>
            </div>

            <div className="absolute bottom-0 left-1/3 z-40 h-[20px] w-[1px] bg-white"></div>
            <div className="absolute bottom-0 left-1/3 z-40 h-[1px] w-[26px] translate-x-[-13px] bg-white"></div>
            <div className="absolute right-1/3 top-0 z-40 h-[20px] w-[1px] bg-white"></div>
            <div className="absolute right-1/3 top-0 z-40 h-[1px] w-[26px] translate-x-[13px] bg-white"></div>

            <div className="flex">
              <div className="flex h-full w-1/3 flex-col border-r border-white/10">
                <Card
                  title="Look 10x bigger"
                  description="Professional design that makes you feel established from day one."
                  borderbottom
                  icon={TeamIcon}
                />
                <Card
                  title="Thoughtful design"
                  description="I focus on clear, intuitive design that makes your product easy to understand."
                  icon={PalletIcon}
                />
              </div>
              <div className="flex h-full w-1/3 flex-col border-r border-white/10">
                <Card
                  title="Transparent pricing"
                  description="All projects are fixed scope with upfront pricing, so there's no surprises."
                  borderbottom
                  icon={EyeIcon}
                />
                <Card
                  title="Industry experience"
                  description="I have been working in the field creating and developing projects for over 4 years."
                  icon={HighIcon}
                />
              </div>
              <div className="flex h-full w-1/3 flex-col">
                <Card
                  title="Reliable timelines"
                  description="Webflow streamlines development, so most projects launch in 4–6 weeks."
                  borderbottom
                  icon={KmIcon}
                />
                <Card
                  title="Satisfaction guaranteed"
                  description="Satisfaction guaranteed
More than 50 testimonials about my work are available for your review."
                  icon={BadgeIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  description: string
  borderbottom?: boolean
  icon: React.ElementType
}

export const Card = ({
  title,
  description,
  borderbottom,
  icon: Icon,
}: CardProps) => {
  return (
    <div
      className={`flex min-h-64 flex-col items-start justify-between px-12 py-8 ${
        borderbottom ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="flex size-[3rem] items-center justify-center rounded-[0.5rem] border border-white/10 bg-white/10">
        <Icon size={32} />
      </div>

      <div>
        <div className="text-xl font-medium text-white">{title}</div>
        <div className="text-white/60">{description}</div>
      </div>
    </div>
  )
}
