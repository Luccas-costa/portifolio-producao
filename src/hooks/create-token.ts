import { ShortFormatDate } from './format-date'

export const CreateToken = async (): Promise<string | null> => {
  const date = ShortFormatDate()

  const signature = process.env.TOKEN_SIGNATURE || 'defaultSignature'
  const keyword = process.env.TOKEN_KEYWORD || 'defaultKeyword'

  const token = `${signature}-${date}-${keyword}`

  try {
    const response = await fetch('/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })

    const data = await response.json()

    if (response.ok && data.encrypted) {
      // Retorna o token encriptado
      return data.encrypted
    } else {
      console.error('Erro ao encriptar token:', data.error)
      return null
    }
  } catch (error) {
    console.error('Erro na requisição para encriptar token:', error)
    return null
  }
}
