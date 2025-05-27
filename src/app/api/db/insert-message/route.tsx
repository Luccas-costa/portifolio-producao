// app/api/chat/insert-message/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Os campos "name", "email" e "message" são obrigatórios.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'INSERT INTO usersmessages (name, email, message) VALUES ($1, $2, $3) RETURNING id',
      [name, email, message],
    )

    return NextResponse.json({
      message: 'Pergunta inserida com sucesso.',
      id: result.rows[0].id,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Erro ao inserir pergunta:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
