import { CreateToken } from '@/hooks/create-token'

export async function VerifyUser(
  email: string,
  password: string,
): Promise<{ message?: string; error?: string }> {
  try {
    const res = await fetch('/api/db/search-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return { error: errorData.error || 'Erro ao verificar usuário' }
    }

    const data = await res.json()

    if (data.exists) {
      const token = await CreateToken()
      // Retorna token para o client
      return { message: token || undefined }
    }

    return {}
  } catch (error) {
    return { error: 'Erro de conexão' }
  }
}
