import { createClient } from '@supabase/supabase-js'

// Obter variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Validar se as credenciais estão configuradas
const hasValidCredentials = 
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.includes('supabase.co') && 
  supabaseAnonKey.length > 20

if (!hasValidCredentials) {
  console.warn('⚠️ Credenciais do Supabase não configuradas ou inválidas.')
  console.warn('Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Criar cliente Supabase apenas se as credenciais forem válidas
export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce'
      },
      global: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
    })
  : createClient('https://placeholder.supabase.co', 'placeholder-key', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      }
    })

// Types
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

/**
 * Interface de Livro
 * 
 * 🔴 CAMPO PADRÃO: cover_url (string | undefined)
 * - Use cover_url para armazenar URLs de capas
 * - A normalização converte para coverUrl no tipo Book de types.ts
 */
export interface Book {
  id: string
  title: string
  slug?: string
  author: string
  description?: string
  cover_url?: string  // 🔴 CAMPO PADRÃO NO BANCO
  total_views: number
  total_chapters: number
  status: 'ongoing' | 'completed'
  created_at: string
  updated_at: string
  average_rating?: number
  categories?: Category[]
}

export interface Chapter {
  id: string
  book_id: string
  chapter_number: number
  title: string
  content?: string
  views: number
  is_premium: boolean
  created_at: string
}

export interface Review {
  id: string
  book_id: string
  user_id?: string
  rating: number
  comment?: string
  created_at: string
}

// Helper: Gerar slug a partir do título
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
}

// Helper: Extrair ID do slug (formato: titulo-do-livro-{id})
export function extractIdFromSlug(slug: string): string | null {
  // Se o slug contém "mock-book-", extrair o ID mockado
  const mockMatch = slug.match(/mock-book-\d+/)
  if (mockMatch) {
    return mockMatch[0]
  }
  
  // Formato esperado: "titulo-do-livro-053f703c-7e0e-4180-bd9a-e1eb9b89e20e"
  const parts = slug.split('-')
  
  // UUID tem 5 partes separadas por hífen
  if (parts.length >= 5) {
    const possibleUuid = parts.slice(-5).join('-')
    
    // Validar se é um UUID válido
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (uuidRegex.test(possibleUuid)) {
      return possibleUuid
    }
  }
  
  return null
}

// Helper: Criar slug completo (título + ID)
export function createBookSlug(title: string, id: string): string {
  const titleSlug = generateSlug(title)
  return `${titleSlug}-${id}`
}
