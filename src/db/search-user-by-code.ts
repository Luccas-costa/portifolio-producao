export async function SearchUserByCode(
  code: string,
): Promise<{ name?: string; error?: string }> {
  try {
    const res = await fetch('/api/db/search-user-by-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return { error: errorData.error || 'Erro ao buscar usuário' }
    }

    const data = await res.json()
    return { name: data.name }
  } catch (error) {
    return { error: 'Erro de conexão' }
  }
}
