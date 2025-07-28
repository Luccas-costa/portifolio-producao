// hooks/create-token.ts
export const CreateToken = async (userCode: string): Promise<string | null> => {
  try {
    const response = await fetch('/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userCode }),
    })

    const data = await response.json()
    return response.ok && data.encrypted ? data.encrypted : null
  } catch (error) {
    console.error('Erro ao gerar token:', error)
    return null
  }
}
