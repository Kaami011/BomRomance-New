import { supabase } from './supabase'

export type UserRole = 'admin' | 'reader'

export interface AuthUser {
  id: string
  email: string
  role: UserRole
  user_metadata?: {
    role?: UserRole
    name?: string
  }
}

/**
 * Obter usuário logado com role
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error || !user) {
      return null
    }

    const role = (user.user_metadata?.role as UserRole) || 'reader'

    return {
      id: user.id,
      email: user.email || '',
      role,
      user_metadata: user.user_metadata
    }
  } catch (error) {
    console.error('Erro ao obter usuário:', error)
    return null
  }
}

/**
 * Verificar se usuário é admin
 */
export async function isAdmin(): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === 'admin'
}

/**
 * Fazer login
 */
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error

  return data
}

/**
 * Fazer logout
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

/**
 * Registrar novo usuário
 */
export async function signUp(email: string, password: string, role: UserRole = 'reader') {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role,
      },
    },
  })

  if (error) throw error

  return data
}

/**
 * Verificar sessão e redirecionar baseado no role
 */
export async function checkAuthAndRedirect(): Promise<{ isAuthenticated: boolean; isAdmin: boolean; redirectTo: string | null }> {
  const user = await getCurrentUser()

  if (!user) {
    return {
      isAuthenticated: false,
      isAdmin: false,
      redirectTo: '/login'
    }
  }

  if (user.role === 'admin') {
    return {
      isAuthenticated: true,
      isAdmin: true,
      redirectTo: null // Já está no lugar certo
    }
  }

  return {
    isAuthenticated: true,
    isAdmin: false,
    redirectTo: '/' // Não é admin, redireciona para home
  }
}
