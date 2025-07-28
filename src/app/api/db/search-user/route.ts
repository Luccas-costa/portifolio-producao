// app/api/chat/search-exists-user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Os campos "email" e "password" são obrigatórios.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'SELECT user_code FROM users WHERE email = $1 AND password = $2 LIMIT 1',
      [email, password],
    )

    if ((result.rowCount ?? 0) === 0) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos.' },
        { status: 401 },
      )
    }

    const userCode = result.rows[0].user_code
    return NextResponse.json({ exists: true, userCode })
  } catch (error: unknown) {
    console.error('Erro ao verificar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar usuário.' },
      { status: 500 },
    )
  }
}
