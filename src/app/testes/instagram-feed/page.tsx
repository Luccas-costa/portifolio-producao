// components/TesteFeed.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { fetchFeedInstagram } from '@/lib/fetch-feed-instagram'
import type { InstagramMedia } from '@/types/instagram-media'
import Image from 'next/image'

// Componente principal
export default function TesteFeed() {
  const [mediaItems, setMediaItems] = useState<InstagramMedia[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // Função para buscar e definir os itens da mídia
  const fetchMedia = async () => {
    try {
      const items = await fetchFeedInstagram()
      setMediaItems(items)
    } catch (err) {
      setError('Failed to fetch media.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMedia()
  }, [])

  // Renderização condicional
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-4 text-xl font-bold">Instagram Feed</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={item.thumbnail_url || item.media_url} // Usando thumbnail_url, se disponível
              alt={item.caption || 'Instagram media'}
              layout="responsive"
              width={200} // Ajuste conforme necessário
              height={200} // Ajuste conforme necessário
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
