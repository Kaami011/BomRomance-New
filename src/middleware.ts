import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🔓 Deixa /admin/migrate livre (sem exigir login)
  if (pathname === '/admin/migrate') {
    return NextResponse.next()
  }

  // 🔒 Continua protegendo o resto do /admin
  if (pathname.startsWith('/admin')) {
    const supabaseToken = request.cookies.get('sb-access-token')

    if (!supabaseToken) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

// Continua usando o matcher para /admin
export const config = {
  matcher: ['/admin/:path*']
}
