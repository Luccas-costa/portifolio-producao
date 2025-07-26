import crypto from 'crypto'

const TOKEN_KEY = process.env.TOKEN_KEY

if (!TOKEN_KEY || TOKEN_KEY.length !== 64) {
  throw new Error(
    'TOKEN_KEY deve estar definida e ter exatamente 64 caracteres hex (32 bytes)!',
  )
}

const keyBuffer = Buffer.from(TOKEN_KEY, 'hex')

export function decrypt(token: string): string {
  const [ivHex, encrypted] = token.split(':')
  if (!ivHex || !encrypted) {
    throw new Error('Formato do token criptografado inválido')
  }
  const iv = Buffer.from(ivHex, 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv)

  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}
