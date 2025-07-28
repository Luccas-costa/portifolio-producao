import { SearchUserByCode } from '@/db/search-user-by-code'

// Função para capitalizar a primeira letra
function formatFirstName(fullName: string): string {
  const firstName = fullName.split(' ')[0] // Pega só o primeiro nome
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
}

// Função principal
export async function GetUserName(setUserName: (name: string) => void) {
  try {
    const res = await fetch('/api/token/descrypt')
    const data = await res.json()

    if (!data?.token) return 'Usuario nao esta logado'

    const userCode = data.token.slice(-6)
    const dataname = await SearchUserByCode(userCode)

    if (dataname.name) {
      const formatted = formatFirstName(dataname.name)
      setUserName(formatted)
    }
  } catch (err) {
    console.error('Erro ao buscar token', err)
  }
}
