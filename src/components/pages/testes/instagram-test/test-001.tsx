import { useEffect, useState } from 'react'
import type { InstagramMedia } from '@/types/instagram-media' // Importar a interface
import dotenv from 'dotenv'
import Image from 'next/image'

dotenv.config() // Carregar variáveis de ambiente

// Função para buscar o feed do Instagram
const fetchFeedInstagram = async (): Promise<InstagramMedia[]> => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) {
    throw new Error(
      'Token de acesso do Instagram não encontrado nas variáveis de ambiente.',
    )
  }

  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${token}&limit=9`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`)
    }
    const data = await response.json()
    return data.data // Supondo que o resultado está em `data.data`
  } catch (error) {
    console.error('Erro ao buscar o feed do Instagram:', error)
    throw error
  }
}

// Componente Next.js para exibir o feed do Instagram
const InstagramFeedTeste: React.FC = () => {
  const [posts, setPosts] = useState<InstagramMedia[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const feed = await fetchFeedInstagram()
        setPosts(feed)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch Instagram feed')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Erro: {error}</div>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={post.thumbnail_url || post.media_url}
            alt={post.caption || 'Instagram post'}
            className="h-auto w-full"
            width={200}
            height={200}
          />
        </a>
      ))}
    </div>
  )
}

export default InstagramFeedTeste
