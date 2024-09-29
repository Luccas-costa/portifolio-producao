import type { InstagramMedia } from 'types/instagram-media'

export const fetchFeedInstagram = async (): Promise<InstagramMedia[]> => {
  const token =
    'IGQWROQzA0eUt3YVNFcWhiUHBGV3VOWVpmUlduM1JiSkxfZAmd3WnRMdmNRNkJMTHphclA2TnowNmpxb2h3aGdwVkNmTi1vRWRYU1FTS0N6LURsYlZAmcjc3cl9nRmxzSTRNSVhxLWhIVmo5VnpRWEc4Xy1XUDBWeEEZD'
  const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${token}`

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
