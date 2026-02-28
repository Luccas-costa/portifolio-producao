import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import imagel from '../../../../public/portifolio/laudyF.png'
import images from '../../../../public/portifolio/testesyscare.png'
import React from 'react'
import Display from './display'

export default function Projects() {
  return (
    <div className="flex h-full w-full flex-col items-center px-[270px]">
      <div className="my-[140px] text-8xl text-[7rem] font-medium text-[black]">
        Crafted websites{' '}
        <span className="text-[#C9C9C9]">for ambitious founders</span>
      </div>
      <div className="w-full">
        <div className="w-[48%] text-2xl text-black/40">
          I help startups move from vision to reality, and beyond. One hand on
          design, the other on development.
        </div>
      </div>

      <div className="w-full">
        <div className="mr-[180px] text-end text-lg font-semibold text-green-600">
          Trusted by 40+ founders
        </div>
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-4">
          <div className="group relative flex h-[55px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-neutral-900 font-medium text-white transition-all duration-300">
            <span className="absolute top-[14px] flex items-center justify-center gap-2 transition-all duration-300 group-hover:top-[-24px]">
              Start today <ArrowRightIcon size={16} color="white" />
            </span>
            <span className="absolute bottom-[-22px] transition-all duration-300 group-hover:bottom-[14px]">
              Get a helping hand
            </span>
          </div>
          <div className="flex h-[55px] cursor-pointer items-center justify-center rounded-full border border-zinc-400/40 bg-white px-5 font-medium text-neutral-900 transition-colors duration-200 hover:bg-zinc-100">
            View Pricing
          </div>
        </div>
        <div className="flex h-[70px] w-[400px] items-center gap-6">
          <Image src={imagel} width={140} height={100} alt="logo" />
          <Image src={images} width={160} height={100} alt="logo" />
          {/* <div className="text-2xl font-light text-black">
            Mundo<span className="font-bold">Madame</span>
          </div> */}
        </div>
      </div>

      <Display />
    </div>
  )
}
