// src/app/api/chatbot/route.ts
import { NextRequest, NextResponse } from 'next/server'
import dados from '@/utils/perguntas.json'

type PerguntaResposta = {
  pergunta: string
  resposta: string
}

type Categoria = {
  categoria: string
  perguntas_respostas: PerguntaResposta[]
}

// Junta todas as perguntas em uma lista só (independente da categoria)
function extrairTodasPerguntasRespostas(data: Categoria[]): PerguntaResposta[] {
  return data.flatMap((c) => c.perguntas_respostas)
}

function similarityScore(a: string, b: string) {
  const aWords = a.toLowerCase().split(/\W+/).filter(Boolean)
  const bWords = b.toLowerCase().split(/\W+/).filter(Boolean)
  const common = aWords.filter((word) => bWords.includes(word))
  return common.length
}

function findTopMatches(message: string, maxResults = 3): PerguntaResposta[] {
  const todas = extrairTodasPerguntasRespostas(dados)

  const scores = todas
    .map((item) => ({
      item,
      score: similarityScore(message, item.pergunta),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)

  return scores.map(({ item }) => item)
}

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  const topMatches = findTopMatches(message)

  const systemContentLines = [
    'Você é LucasGPT, um assistente inteligente que responde perguntas sobre o Lucas com base nas informações fornecidas abaixo.',
    'Escreva de forma clara, empática e envolvente. Sempre reescreva com suas próprias palavras, organizando visualmente bem a resposta.',
    'Use formatação Markdown quando fizer sentido: **negrito**, _itálico_, /n para quebras de linhas, listas com marcadores, blocos de código e links.',
    'Evite respostas genéricas. Sempre use as informações abaixo como base, e destaque os pontos principais com boa estrutura visual.',
  ]

  if (topMatches.length) {
    systemContentLines.push(
      ...topMatches.map(
        (item, i) =>
          `${i + 1}. Pergunta: "${item.pergunta}"\n   Informação: "${item.resposta}"`,
      ),
    )
  } else {
    systemContentLines.push(
      'Não há informações específicas para essa pergunta nas informações fornecidas.',
    )
  }

  const messages = [
    {
      role: 'system',
      content: systemContentLines.join('\n'),
    },
    {
      role: 'user',
      content: message,
    },
  ]

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages,
        temperature: 0.8,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenAI API error:', errorData)
      return NextResponse.json(
        { reply: 'Erro ao obter resposta da OpenAI.' },
        { status: 500 },
      )
    }

    const data = await response.json()
    const reply =
      data.choices?.[0]?.message?.content || 'Não consegui responder.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { reply: 'Erro interno no servidor.' },
      { status: 500 },
    )
  }
}
