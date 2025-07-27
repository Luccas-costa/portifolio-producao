// app/api/decrypted-token/route.ts
import { cookies } from 'next/headers'
import { decrypt } from '@/hooks/decrypt-token'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value || ''
  let decryptedToken = ''

  try {
    if (token) decryptedToken = decrypt(token)
  } catch (e) {
    console.error('Erro ao descriptografar token:', e)
  }

  return new Response(JSON.stringify({ token: decryptedToken }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
