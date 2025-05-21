// app/api/chat/insert-question/route.ts
import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: NextRequest) {
  const { question, date } = await req.json()

  if (!question || !date) {
    return NextResponse.json(
      { error: 'Os campos "question" e "date" são obrigatórios.' },
      { status: 400 },
    )
  }

  try {
    const result = await pool.query(
      'INSERT INTO chatquestions (question, date) VALUES ($1, $2) RETURNING id',
      [question, date],
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
