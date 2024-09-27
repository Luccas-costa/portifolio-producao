import React from 'react'
import Image from 'next/image'
import blob from 'public/assets/Blob.svg'

export default function About() {
  return (
    <div
      className={`relative flex h-[800px] w-full items-center justify-center bg-zinc-200`}
    >
      <div
        className="absolute left-0 top-0 h-[800px] w-full bg-zinc-200/70 blur-xl"
        style={{ zIndex: 3 }}
      />
      <div
        className="animate-spin-slow transition-all duration-1000"
        style={{ zIndex: 2 }}
      >
        <Image src={blob} alt="blob" width={600} height={600} />
      </div>
    </div>
  )
}
