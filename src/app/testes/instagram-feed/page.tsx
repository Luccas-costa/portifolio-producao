'use client'
import React, { useEffect, useState } from 'react'
import { fetchFeedInstagram } from '@/lib/fetch-feed-instagram'
import type { InstagramMedia } from 'types/instagram-media'
import InstagramFeed from '@/components/pages/testes/instagram-feed'

export default function TesteFeed() {
  const [feed, setFeed] = useState<InstagramMedia[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const data = await fetchFeedInstagram()
        setFeed(data)
      } catch (err) {
        console.error(err) // Adicione essa linha para usar o erro
        setError('Failed to load feed.')
      } finally {
        setLoading(false)
      }
    }

    fetchFeed()
  }, [])

  return (
    <div>
      {loading && <p>Loading feed...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <InstagramFeed feed={feed} />}
    </div>
  )
}