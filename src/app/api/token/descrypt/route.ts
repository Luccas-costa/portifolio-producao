import { cookies } from 'next/headers'
import { decrypt } from '@/hooks/decrypt-token'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return new Response(JSON.stringify({ error: 'Usuario nao esta logado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const decryptedToken = decrypt(token)
    return new Response(JSON.stringify({ token: decryptedToken }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error('Erro ao descriptografar token:', e)
    return new Response(JSON.stringify({ error: 'Erro ao processar token' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
