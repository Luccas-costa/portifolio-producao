import { InstagramMedia } from '@/types/instagram-media'

export const fetchFeedInstagram = async (): Promise<InstagramMedia[]> => {
  const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN // Acesse com o novo nome

  // URL simplificada para retornar apenas os campos necessários
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,thumbnail_url,media_url&access_token=${token}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.data // Supondo que 'data' tenha uma propriedade 'data' com as mídias
  } catch (error) {
    console.error('Failed to fetch Instagram feed:', error)
    throw error
  }
}
