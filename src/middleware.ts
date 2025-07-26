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

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { decrypt } from '@/hooks/decrypt-token'

// // Pega do .env as variáveis de assinatura e keyword do token
// const TOKEN_SIGNATURE = process.env.TOKEN_SIGNATURE || 'luccas'
// const TOKEN_KEYWORD = process.env.TOKEN_KEYWORD || 'fallen'

// // Rotas protegidas que o middleware deve interceptar
// const protectedRoutes = ['/dashboard', '/admin', '/contact']

// export function middleware(request: NextRequest) {
//   // Pega o token do cookie da requisição
//   const token = request.cookies.get('token')?.value

//   // Verifica se a rota atual está na lista de rotas protegidas
//   const isProtected = protectedRoutes.some((route) =>
//     request.nextUrl.pathname.startsWith(route),
//   )

//   // Se a rota não é protegida, libera acesso sem validação
//   if (!isProtected) return NextResponse.next()

//   // Se rota protegida e não há token, redireciona para /login
//   if (!token) {
//     // Captura parâmetro goingTo, para redirecionar após login
//     const goingTo = request.nextUrl.searchParams.get('goingTo')
//     const loginUrl = new URL('/login', request.url)

//     if (goingTo) {
//       loginUrl.searchParams.set('goingTo', goingTo)
//     }

//     return NextResponse.redirect(loginUrl)
//   }

//   try {
//     // Descriptografa o token
//     const decrypted = decrypt(token)

//     // Verifica se o token descriptografado contém assinatura e keyword esperadas
//     if (
//       !decrypted.includes(TOKEN_SIGNATURE) ||
//       !decrypted.includes(TOKEN_KEYWORD)
//     ) {
//       // Se inválido, redireciona para /login sem goingTo
//       const loginUrl = new URL('/login', request.url)
//       return NextResponse.redirect(loginUrl)
//     }

//     // Token válido: libera acesso à rota protegida
//     return NextResponse.next()
//   } catch (error) {
//     // Se der erro na descriptografia, redireciona para /login sem goingTo
//     const loginUrl = new URL('/login', request.url)
//     return NextResponse.redirect(loginUrl)
//   }
// }

// // Configura o middleware para rodar somente nas rotas protegidas definidas
// export const config = {
//   matcher: ['/dashboard/:path*', '/admin/:path*', '/contact/:path*'],
// }
