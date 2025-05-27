export async function InsertReviews(
  message: string,
  reviews: string,
): Promise<{ message?: string; error?: string }> {
  try {
    const res = await fetch('/api/db/insert-reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, reviews }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return { error: errorData.error || 'Erro ao inserir mensagem' }
    }

    return await res.json()
  } catch (error) {
    return { error: 'Erro de conexão' }
  }
}
