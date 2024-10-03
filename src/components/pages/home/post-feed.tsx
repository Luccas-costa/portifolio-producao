'use client'
import React from 'react'
import type { InstagramMedia } from 'types/instagram-media'
import Image from 'next/image'

interface InstagramFeedProps {
  feed: InstagramMedia[]
}

export default function InstagramFeed({ feed }: InstagramFeedProps) {
  return (
    <div className="relative mb-[150px] flex h-[800px] w-full flex-col items-center justify-center gap-4 bg-zinc-200">
      <div className="text-4xl font-bold text-zinc-700">
        Um pouco mais sobre tekobag
      </div>
      <div className="text-xl font-medium text-zinc-500">
        Clique para ver mais e conhecer nosso Instagram e nossos conteúdos
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        {feed.slice(0, 9).map((item) => (
          <div
            key={item.id}
            className="size-[200px] overflow-hidden rounded-xl bg-black shadow-xl" // Adicionei cursor-pointer
          >
            <Image
              src={item.thumbnail_url || item.media_url} // Usando thumbnail_url ou media_url
              alt={item.caption || 'Instagram media'}
              layout="responsive"
              width={200} // Ajuste conforme necessário
              height={200} // Ajuste conforme necessário
              className="object-cover" // Para cobrir o espaço do contêiner
            />
          </div>
        ))}
      </div>
    </div>
  )
}
