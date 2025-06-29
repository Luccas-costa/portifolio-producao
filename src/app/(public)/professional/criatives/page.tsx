import Navbar from '@/components/pages/professional/sections/navbar'
import React from 'react'
import VideoComponent from './video-component'

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 pb-[100px]">
      <Navbar />
      <div className="flex w-full flex-wrap items-center justify-center gap-[50px] px-[100px] pt-[120px]">
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
        <VideoComponent />
      </div>
    </div>
  )
}
