'use client'
import React from 'react'
import type { InstagramMedia } from 'types/instagram-media'
import Image from 'next/image'

interface InstagramFeedProps {
  feed: InstagramMedia[]
}

export default function InstagramFeed({ feed }: InstagramFeedProps) {
  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center gap-4 bg-zinc-200">
      <div className="text-4xl font-bold text-zinc-700">
        Um pouco mais sobre tekobag
      </div>
      <div className="text-xl font-medium text-zinc-500">
        Clique para ver mais e conhecer nosso Instagram e nossos conteúdos
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        {feed.map((item) => (
          <a
            key={item.id}
            href={item.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="size-[200px] overflow-hidden rounded-xl bg-black shadow-xl"
          >
            {item.media_type === 'IMAGE' && (
              <Image
                src={item.media_url}
                alt={item.caption || 'Instagram image'}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            )}
            {item.media_type === 'VIDEO' && (
              <Image
                src={item.thumbnail_url || item.media_url}
                alt={item.caption || 'Instagram video thumbnail'}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            )}
            {item.media_type === 'CAROUSEL_ALBUM' && (
              <Image
                src={item.thumbnail_url || item.media_url}
                alt={item.caption || 'Instagram carousel thumbnail'}
                width={200}
                height={200}
                className="h-full w-full object-cover"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  )
}
