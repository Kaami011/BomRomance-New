import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🔓 Libera a rota /admin/migrate sem login
  if (pathname === '/admin/migrate') {
    return NextResponse.next()
  }

  // 🔒 Protege todas as outras rotas /admin/**
  if (pathname.startsWith('/admin')) {
    const token = request.cookies.get('sb-access-token')

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
