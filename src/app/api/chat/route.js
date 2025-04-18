export async function POST(req) {
  try {
    const { prompt } = await req.json()

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt obrigatório' }), {
        status: 400,
      })
    }

    const response = await fetch(
      'https://api.together.xyz/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TOGETHER_AI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mistral-7b-instruct', // Modelo da Together AI
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 200,
        }),
      },
    )

    const data = await response.json()

    if (!data.choices || data.choices.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Nenhuma resposta recebida da API' }),
        { status: 500 },
      )
    }

    return new Response(
      JSON.stringify({ result: data.choices[0].message.content }),
      { status: 200 },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro ao buscar resposta na Together AI' }),
      { status: 500 },
    )
  }
}
