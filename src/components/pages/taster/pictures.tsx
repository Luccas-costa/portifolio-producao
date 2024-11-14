/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import React from 'react'

interface PicturesProps {
  image: string
  variantImages: string[]
}

export default function Pictures({ image, variantImages }: PicturesProps) {
  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
        <div className="flex h-[500px] w-[400px] items-center justify-center rounded border border-zinc-400">
          <Image src={image} alt="Image1" width={400} height={500} />
        </div>
        <div className="flex h-[500px] w-[400px] items-center justify-center rounded border border-zinc-400">
          <iframe
            src="https://www.youtube.com/embed/vzNDzq2OXIU?mute=1&loop=1&playlist=vzNDzq2OXIU&playsinline=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            // controlsList="nodownload"
            title="YouTube Video"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
        <div className="flex h-[500px] w-[400px] items-center justify-center rounded border border-zinc-400">
          <Image src={variantImages[0]} alt="Image2" width={400} height={500} />
        </div>
        <div className="flex h-[500px] w-[400px] items-center justify-center rounded border border-zinc-400">
          <Image src={variantImages[1]} alt="Image3" width={400} height={500} />
        </div>
      </div>
    </div>
  )
}
