// app/api/chat/insert-reviews/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { reviews, message } = await req.json()

  if (!reviews || !message) {
    return NextResponse.json(
      { error: 'Os campos "reviews" e "message" são obrigatórios.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'INSERT INTO usersreviews (message, reviews) VALUES ($1, $2) RETURNING id',
      [message, reviews],
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
