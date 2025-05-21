import { FormatDate } from '@/hooks/format-date'

export async function SendQuestion(
  question: string,
): Promise<{ message?: string; error?: string }> {
  const date = FormatDate()

  try {
    const res = await fetch('/api/db/insert-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, date }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return { error: errorData.error || 'Erro ao inserir pergunta' }
    }

    return await res.json()
  } catch (error) {
    return { error: 'Erro de conexão' }
  }
}
