import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Proteger rotas /admin
  if (pathname.startsWith('/admin')) {
    // Verificar se há token de sessão
    const supabaseToken = request.cookies.get('sb-access-token')
    
    if (!supabaseToken) {
      // Redirecionar para login se não estiver autenticado
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Nota: A verificação de role será feita no lado do cliente/servidor
    // pois o middleware do Next.js não tem acesso direto ao Supabase no Edge Runtime
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
