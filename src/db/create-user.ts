export async function CreateUser(
  name: string,
  email: string,
  password: string,
): Promise<{ message?: string; error?: string }> {
  try {
    // Primeiro verifica se o email já existe
    const searchRes = await fetch('/api/db/search-exists-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (!searchRes.ok) {
      const errorData = await searchRes.json()
      return { error: errorData.error || 'Erro ao verificar e-mail' }
    }

    const { exists } = await searchRes.json()

    // Se o e-mail já existe, não cria o usuário
    if (exists) {
      return { error: 'Ja existe um usuário com esse e-mail' }
    }

    // Só cria o usuário se o e-mail NÃO existir
    const res = await fetch('/api/db/insert-new-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    if (!res.ok) {
      const errorData = await res.json()
      return { error: errorData.error || 'Erro ao inserir usuário' }
    }

    return await res.json()
  } catch (error) {
    return { error: 'Erro de conexão' }
  }
}
