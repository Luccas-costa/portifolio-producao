import { NextResponse } from 'next/server'
import perguntas from '@/utils/perguntas.json'
import stringSimilarity from 'string-similarity'

export async function POST(req: Request) {
  const { pergunta } = await req.json()

  if (!pergunta) {
    return NextResponse.json(
      { error: 'Pergunta não fornecida' },
      { status: 400 },
    )
  }

  const perguntasArray = perguntas.map((p) => p.pergunta)
  const bestMatch = stringSimilarity.findBestMatch(
    pergunta,
    perguntasArray,
  ).bestMatch

  const resposta =
    perguntas.find((p) => p.pergunta === bestMatch.target)?.resposta ||
    'Não encontrei uma resposta adequada.'

  return NextResponse.json({ resposta })
}
