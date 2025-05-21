// app/api/chat/insert-new-user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'Os campos "name", "email" e "password" são obrigatórios.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
      [name, email, password],
    )

    return NextResponse.json({
      message: 'Usuario criado com sucesso.',
      id: result.rows[0].id,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
