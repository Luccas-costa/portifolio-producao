export function FormatDate(): string {
  const agora = new Date()

  const pad = (n: number) => n.toString().padStart(2, '0')

  const hora = pad(agora.getHours())
  const minuto = pad(agora.getMinutes())
  const segundo = pad(agora.getSeconds())

  const dia = pad(agora.getDate())
  const mes = pad(agora.getMonth() + 1)
  const ano = agora.getFullYear()

  return `${hora}:${minuto}:${segundo} - ${dia}/${mes}/${ano}`
}

export function ShortFormatDate(): string {
  const agora = new Date()

  const pad = (n: number) => n.toString().padStart(2, '0')

  const dia = pad(agora.getDate())
  const mes = pad(agora.getMonth() + 1)
  const ano = agora.getFullYear().toString().slice(-2) // pega os dois últimos dígitos do ano

  return `${dia}${mes}${ano}`
}
