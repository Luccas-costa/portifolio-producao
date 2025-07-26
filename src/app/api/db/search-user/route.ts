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

    const exists = (result.rowCount ?? 0) > 0
    const userCode = exists ? result.rows[0].user_code : null

    return NextResponse.json({ exists, userCode })
  } catch (error: unknown) {
    console.error('Erro ao verificar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar usuário.' },
      { status: 500 },
    )
  }
}
