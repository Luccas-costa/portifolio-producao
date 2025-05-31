import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const protectedRoutes = ['/dashboard', '/admin', '/contact'] // rotas protegidas

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  )

  if (isProtected) {
    if (!token) {
      // Extrai o parâmetro "goingTo" da URL, se existir
      const goingTo = request.nextUrl.searchParams.get('goingTo')

      // Cria a URL de redirecionamento para /login
      const loginUrl = new URL('/login', request.url)

      // Se houver o parâmetro "goingTo", adiciona ele na URL de redirecionamento
      if (goingTo) {
        loginUrl.searchParams.set('goingTo', goingTo)
      }

      // Redireciona para /login com ou sem o parâmetro "goingTo"
      return NextResponse.redirect(loginUrl)
    }

    // Aqui você pode também descriptografar e validar o token.
    // Exemplo:
    // const valid = verifyToken(token)
    // if (!valid) return NextResponse.redirect(new URL('/login', request.url))
  }

  // Libera o acesso normalmente
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/contact/:path*'], // rotas que o middleware intercepta
}
