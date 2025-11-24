/**
 * Tipos centralizados do BomRomance
 * 
 * Este arquivo contém as definições de tipos padronizadas
 * usadas em todo o front-end da aplicação.
 */

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

/**
 * Interface principal de Livro
 * 
 * 🔴 CAMPO PADRÃO: coverUrl (string | null)
 * - Sempre use coverUrl para renderizar capas
 * - Nunca use cover_image, cover_url, image diretamente
 */
export interface Book {
  id: string
  title: string
  author: string
  slug: string
  description: string
  coverUrl: string | null   // 🔴 CAMPO PADRÃO NO FRONT
  totalViews: number
  totalChapters: number
  status: 'ongoing' | 'completed'
  createdAt: string
  updatedAt: string
  averageRating?: number
  categories?: Category[]
}

/**
 * Tipo de linha do Supabase (como vem do banco)
 */
export interface BookRow {
  id: string
  title: string
  author: string
  slug: string | null
  description: string | null
  cover_url: string | null      // coluna principal no Supabase
  cover_image?: string | null   // legado, se ainda existir
  total_views: number
  total_chapters: number
  status: string
  created_at: string
  updated_at: string
  average_rating?: number
  categories?: any[]
}

export interface Chapter {
  id: string
  book_id: string
  chapter_number: number
  title: string
  content?: string
  views: number
  is_premium?: boolean
  preview_text?: string
  content_storage_path?: string
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
