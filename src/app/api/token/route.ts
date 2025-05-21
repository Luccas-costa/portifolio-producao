import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const TOKEN_KEY = process.env.TOKEN_KEY

if (!TOKEN_KEY || TOKEN_KEY.length !== 64) {
  throw new Error(
    'TOKEN_KEY deve estar definida e ter exatamente 64 caracteres hex (32 bytes)!',
  )
}

const keyBuffer = Buffer.from(TOKEN_KEY, 'hex')

function encrypt(text: string): string {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv('aes-256-cbc', keyBuffer, iv)

  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return iv.toString('hex') + ':' + encrypted
}

function decrypt(encryptedText: string): string {
  const [ivHex, encrypted] = encryptedText.split(':')
  if (!ivHex || !encrypted) {
    throw new Error('Formato do token criptografado inválido')
  }
  const iv = Buffer.from(ivHex, 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv)

  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (typeof token !== 'string' || token.trim() === '') {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 })
    }

    const encrypted = encrypt(token)
    return NextResponse.json({ encrypted })
  } catch (error) {
    console.error('Erro na API /token:', error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const encryptedToken = request.nextUrl.searchParams.get('token')

    if (!encryptedToken) {
      return NextResponse.json(
        { error: 'Token criptografado não fornecido' },
        { status: 400 },
      )
    }

    const decrypted = decrypt(encryptedToken)
    return NextResponse.json({ decrypted })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}
