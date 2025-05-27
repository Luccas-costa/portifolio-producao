export async function InsertMessage(
  name: string,
  email: string,
  message: string,
): Promise<{ message?: string; error?: string }> {
  try {
    const res = await fetch('/api/db/insert-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
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
