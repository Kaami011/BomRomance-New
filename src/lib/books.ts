/**
 * Funções centralizadas para manipulação de livros
 * 
 * Este arquivo contém a lógica de normalização e busca de livros,
 * garantindo que todos os dados sigam o padrão Book com coverUrl.
 */

import { createClient } from './supabase-client'
import type { Book, BookRow, Category } from './types'
import { getMockBooks, getMockBooksByCategory, searchMockBooks } from '@/data/mockBooks'
import { getMockChapters } from '@/data/mockChapters'

/**
 * Normaliza uma linha do Supabase para o formato Book padrão
 * 
 * 🔴 REGRA ÚNICA DE CAPA:
 * - Prioridade 1: cover_url (novo padrão)
 * - Prioridade 2: cover_image (legado)
 * - Fallback: null
 * 
 * @param row - Linha do banco de dados
 * @returns Book normalizado com coverUrl
 */
export function normalizeBook(row: BookRow): Book {
  // Regra única de prioridade para capa
  const rawCover =
    row.cover_url ||           // novo padrão no banco
    (row as any).cover_image || // legado, se ainda existir
    null

  return {
    id: row.id,
    title: row.title,
    author: row.author,
    slug: row.slug ?? row.id,
    description: row.description ?? '',
    coverUrl: rawCover,  // 🔴 CAMPO PADRÃO
    totalViews: row.total_views ?? 0,
    totalChapters: row.total_chapters ?? 0,
    status: (row.status === 'completed' ? 'completed' : 'ongoing'),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    averageRating: row.average_rating,
    categories: row.categories || []
  }
}

/**
 * Busca livros com filtros e ordenação
 * Combina dados do Supabase com dados mockados
 */
export async function searchBooks(params: {
  query?: string
  categorySlug?: string
  sortBy?: 'views' | 'rating' | 'recent' | 'trending'
  limit?: number
  offset?: number
}): Promise<{ books: Book[], error: any }> {
  const { query, categorySlug, sortBy = 'views', limit = 20, offset = 0 } = params

  const supabase = createClient()
  let queryBuilder = supabase
    .from('books')
    .select(`
      *,
      categories:book_categories(
        category:categories(*)
      ),
      reviews(rating)
    `)

  // Filtro por busca de texto
  if (query) {
    queryBuilder = queryBuilder.or(`title.ilike.%${query}%,author.ilike.%${query}%`)
  }

  // Filtro por categoria
  if (categorySlug) {
    queryBuilder = queryBuilder.eq('book_categories.category.slug', categorySlug)
  }

  // Ordenação
  switch (sortBy) {
    case 'views':
      queryBuilder = queryBuilder.order('total_views', { ascending: false })
      break
    case 'rating':
      queryBuilder = queryBuilder.order('created_at', { ascending: false })
      break
    case 'recent':
      queryBuilder = queryBuilder.order('updated_at', { ascending: false })
      break
    case 'trending':
      queryBuilder = queryBuilder.order('total_views', { ascending: false })
      break
  }

  const { data, error } = await queryBuilder.range(offset, offset + limit - 1)

  // Processar dados do Supabase
  const supabaseBooks: Book[] = (data || []).map((book: any) => {
    const reviews = book.reviews || []
    const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

    const categories = book.categories?.map((bc: any) => bc.category).filter(Boolean) || []

    return normalizeBook({
      ...book,
      average_rating: averageRating,
      categories
    })
  })

  // Buscar dados mockados
  let mockBooks: Book[] = []
  
  if (query) {
    mockBooks = searchMockBooks(query)
  } else if (categorySlug) {
    mockBooks = getMockBooksByCategory(categorySlug)
  } else {
    mockBooks = getMockBooks()
  }

  // Ordenar dados mockados
  switch (sortBy) {
    case 'views':
      mockBooks.sort((a, b) => b.totalViews - a.totalViews)
      break
    case 'rating':
      mockBooks.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0))
      break
    case 'recent':
      mockBooks.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      break
    case 'trending':
      mockBooks.sort((a, b) => b.totalViews - a.totalViews)
      break
  }

  // Combinar livros do Supabase com mockados
  const allBooks = [...supabaseBooks, ...mockBooks]
  
  // Aplicar paginação
  const paginatedBooks = allBooks.slice(offset, offset + limit)

  return { books: paginatedBooks, error: null }
}

/**
 * Busca livros por ranking (top views + rating)
 */
export async function getRankingBooks(limit = 50): Promise<{ books: (Book & { rankingScore: number })[], error: any }> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('books')
    .select(`
      *,
      categories:book_categories(
        category:categories(*)
      ),
      reviews(rating)
    `)
    .order('total_views', { ascending: false })
    .limit(limit)

  // Processar dados do Supabase
  const supabaseBooks = (data || []).map((book: any) => {
    const reviews = book.reviews || []
    const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0
    
    // Score = visualizações + (rating médio * peso)
    const rankingScore = book.total_views + (averageRating * 100000)

    const categories = book.categories?.map((bc: any) => bc.category).filter(Boolean) || []

    const normalizedBook = normalizeBook({
      ...book,
      average_rating: averageRating,
      categories
    })

    return {
      ...normalizedBook,
      rankingScore
    }
  })

  // Adicionar livros mockados
  const mockBooks = getMockBooks().map(book => ({
    ...book,
    rankingScore: book.totalViews + ((book.averageRating || 0) * 100000)
  }))

  // Combinar e ordenar
  const allBooks = [...supabaseBooks, ...mockBooks]
  allBooks.sort((a, b) => b.rankingScore - a.rankingScore)

  // Limitar resultado
  const limitedBooks = allBooks.slice(0, limit)

  return { books: limitedBooks, error: null }
}

/**
 * Busca livro por ID com detalhes completos
 * Suporta livros mockados (IDs começando com "mock-")
 */
export async function getBookById(bookId: string): Promise<{ 
  book: Book | null
  reviews: any[]
  chapters: any[]
  error: any 
}> {
  // Se o ID começa com "mock-", buscar nos dados mockados
  if (bookId.startsWith('mock-')) {
    const { getMockBookById } = await import('@/data/mockBooks')
    const book = getMockBookById(bookId)
    
    if (!book) {
      return { book: null, reviews: [], chapters: [], error: 'Livro não encontrado' }
    }

    const chapters = getMockChapters(bookId)
    
    return { 
      book, 
      reviews: [], 
      chapters: chapters.map(ch => ({
        id: ch.id,
        book_id: ch.book_id,
        chapter_number: ch.chapter_number,
        title: ch.title,
        views: ch.views,
        preview_text: ch.content.substring(0, 200),
        content_storage_path: null,
        created_at: ch.created_at,
        is_premium: ch.is_premium
      })), 
      error: null 
    }
  }

  const supabase = createClient()

  const { data, error } = await supabase
    .from('books')
    .select(`
      *,
      categories:book_categories(
        category:categories(*)
      ),
      reviews(rating, comment, created_at)
    `)
    .eq('id', bookId)
    .single()

  if (error) {
    console.error('Erro ao buscar livro:', error)
    return { book: null, reviews: [], chapters: [], error }
  }

  // Buscar capítulos separadamente
  const { data: chaptersData, error: chaptersError } = await supabase
    .from('chapters')
    .select('id, book_id, chapter_number, title, views, preview_text, content_storage_path, created_at')
    .eq('book_id', bookId)
    .order('chapter_number', { ascending: true })

  if (chaptersError) {
    console.error('Erro ao buscar capítulos:', chaptersError)
  }

  const reviews = data.reviews || []
  const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

  const categories = data.categories?.map((bc: any) => bc.category).filter(Boolean) || []

  const book = normalizeBook({
    ...data,
    average_rating: averageRating,
    categories
  })

  return { 
    book, 
    reviews: data.reviews || [], 
    chapters: chaptersData || [], 
    error: null 
  }
}

/**
 * Incrementar visualizações de um livro
 */
export async function incrementBookViews(bookId: string): Promise<void> {
  // Se o ID começa com "mock-", não incrementar no Supabase
  if (bookId.startsWith('mock-')) {
    return
  }

  const supabase = createClient()
  const { error } = await supabase.rpc('increment_book_views', { book_id: bookId })
  
  if (error) {
    console.error('Erro ao incrementar views:', error)
  }
}

/**
 * Adicionar review
 */
export async function addReview(
  bookId: string, 
  userId: string | null, 
  rating: number, 
  comment?: string
): Promise<{ review: any, error: any }> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('reviews')
    .insert({
      book_id: bookId,
      user_id: userId,
      rating,
      comment
    })
    .select()
    .single()

  if (error) {
    console.error('Erro ao adicionar review:', error)
    return { review: null, error }
  }

  return { review: data, error: null }
}

/**
 * Buscar todas as categorias
 */
export async function getCategories(): Promise<{ categories: Category[], error: any }> {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) {
    console.error('Erro ao buscar categorias:', error)
    return { categories: [], error }
  }

  return { categories: data as Category[], error: null }
}
