import { SearchUserByCode } from '@/db/search-user-by-code'

// Função para capitalizar a primeira letra
function formatFirstName(fullName: string): string {
  const firstName = fullName.split(' ')[0]
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
}

export async function GetUserName(setUserName: (name: string) => void) {
  try {
    const res = await fetch('/api/token/descrypt')
    const data = await res.json()

    if (res.status === 401 || !data?.token) {
      setUserName('Usuario nao esta logado')
      return
    }

    const userCode = data.token.slice(-6)
    const dataname = await SearchUserByCode(userCode)

    if (dataname.name) {
      const formatted = formatFirstName(dataname.name)
      setUserName(formatted)
    }
  } catch (err) {
    console.error('Erro ao buscar token', err)
    setUserName('Usuario nao esta logado')
  }
}
