// app/api/chat/insert-new-user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { name, email, password, userCode } = await req.json()

  if (!name || !email || !password || !userCode) {
    return NextResponse.json(
      {
        error:
          'Os campos "name", "email", "password" e "user_code" são obrigatórios.',
      },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password, user_code) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, email, password, userCode],
    )

    return NextResponse.json({
      message: 'Usuário criado com sucesso.',
      id: result.rows[0].id,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
