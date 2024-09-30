import type { InstagramMedia } from 'types/instagram-media'
import dotenv from 'dotenv' // Importar dotenv

dotenv.config() // Carregar as variáveis de ambiente

export const fetchFeedInstagram = async (): Promise<InstagramMedia[]> => {
  // Usar a variável de ambiente
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${token}&limit=9`

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
