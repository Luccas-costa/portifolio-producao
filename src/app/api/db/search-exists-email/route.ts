// app/api/chat/search-exists-email/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json(
      { error: 'O campo "email" é obrigatório.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'SELECT 1 FROM users WHERE email = $1 LIMIT 1',
      [email],
    )

    const exists = (result.rowCount ?? 0) > 0

    return NextResponse.json({ exists })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Erro ao verificar e-mail:', error)
    return NextResponse.json(
      { error: 'Erro ao verificar e-mail.' },
      { status: 500 },
    )
  }
}
