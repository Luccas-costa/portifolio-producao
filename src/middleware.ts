import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const protectedRoutes = ['/dashboard', '/admin', '/perfil'] // rotas protegidas

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  )

  if (isProtected) {
    if (!token) {
      // Redireciona para login se não tiver token
      return NextResponse.redirect(new URL('/login', request.url))
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
  matcher: ['/dashboard/:path*', '/admin/:path*', '/perfil/:path*'], // rotas que o middleware intercepta
}
