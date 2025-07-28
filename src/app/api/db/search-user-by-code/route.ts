// app/api/chat/search-user-by-code/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { code } = await req.json()

  // Validação
  if (!code || typeof code !== 'string' || code.length !== 6) {
    return NextResponse.json(
      { error: 'O campo "code" é obrigatório e deve ter 6 caracteres.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'SELECT name FROM users WHERE user_code = $1 LIMIT 1',
      [code],
    )

    if ((result.rowCount ?? 0) === 0) {
      return NextResponse.json(
        { error: 'Usuário não encontrado.' },
        { status: 404 },
      )
    }

    const name = result.rows[0].name
    return NextResponse.json({ exists: true, name })
  } catch (error: unknown) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar usuário.' },
      { status: 500 },
    )
  }
}
