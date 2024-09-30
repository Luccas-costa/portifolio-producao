'use client'
import { fetchFeedInstagram } from '@/lib/fetch-feed-instagram'
import { InstagramMedia } from '@/types/instagram-media'
import React, { useEffect, useState } from 'react'
import PostFeed from './post-feed'
import Loader from '@/assets/loading'

export default function GenerateFeed() {
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
      {loading && (
        <div className="flex h-[800px] items-center justify-center">
          <Loader size={100} />
        </div>
      )}
      {error && <p>{error}</p>}
      {!loading && !error && <PostFeed feed={feed} />}
    </div>
  )
}
