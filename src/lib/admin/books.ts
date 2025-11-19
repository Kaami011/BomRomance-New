import { supabase, generateSlug } from '../supabase'

export interface AdminBook {
  id: string
  title: string
  slug: string
  cover_url?: string
  synopsis?: string
  status: 'draft' | 'published'
  category?: string
  age_rating?: string
  created_at: string
  updated_at: string
}

export interface AdminChapter {
  id: string
  book_id: string
  title: string
  chapter_order: number
  content?: string
  is_published: boolean
  created_at: string
  updated_at: string
}

/**
 * Listar todos os livros
 */
export async function getAllBooks(filters?: { status?: string; search?: string }) {
  let query = supabase
    .from('books')
    .select('*')
    .order('created_at', { ascending: false })

  if (filters?.status && filters.status !== 'all') {
    query = query.eq('status', filters.status)
  }

  if (filters?.search) {
    query = query.ilike('title', `%${filters.search}%`)
  }

  const { data, error } = await query

  if (error) throw error
  return data as AdminBook[]
}

/**
 * Obter livro por ID
 */
export async function getBookById(id: string) {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as AdminBook
}

/**
 * Criar novo livro
 */
export async function createBook(book: Omit<AdminBook, 'id' | 'created_at' | 'updated_at' | 'slug'> & { slug?: string }) {
  const slug = book.slug || generateSlug(book.title)
  
  const { data, error } = await supabase
    .from('books')
    .insert({
      ...book,
      slug,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  if (error) throw error
  return data as AdminBook
}

/**
 * Atualizar livro
 */
export async function updateBook(id: string, book: Partial<AdminBook>) {
  const { data, error } = await supabase
    .from('books')
    .update({
      ...book,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as AdminBook
}

/**
 * Upload de capa do livro
 */
export async function uploadBookCover(file: File, bookId: string): Promise<string> {
  const fileExt = file.name.split('.').pop()
  const fileName = `${bookId}-${Date.now()}.${fileExt}`
  const filePath = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('book-covers')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    })

  if (uploadError) throw uploadError

  const { data } = supabase.storage
    .from('book-covers')
    .getPublicUrl(filePath)

  return data.publicUrl
}

/**
 * Obter estatísticas do dashboard
 */
export async function getDashboardStats() {
  // Total de livros
  const { count: totalBooks } = await supabase
    .from('books')
    .select('*', { count: 'exact', head: true })

  // Livros publicados
  const { count: publishedBooks } = await supabase
    .from('books')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published')

  // Total de capítulos
  const { count: totalChapters } = await supabase
    .from('chapters')
    .select('*', { count: 'exact', head: true })

  // Últimos livros
  const { data: recentBooks } = await supabase
    .from('books')
    .select('id, title, created_at, status')
    .order('created_at', { ascending: false })
    .limit(5)

  return {
    totalBooks: totalBooks || 0,
    publishedBooks: publishedBooks || 0,
    draftBooks: (totalBooks || 0) - (publishedBooks || 0),
    totalChapters: totalChapters || 0,
    recentBooks: recentBooks || []
  }
}

/**
 * Listar capítulos de um livro
 */
export async function getBookChapters(bookId: string) {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', bookId)
    .order('chapter_order', { ascending: true })

  if (error) throw error
  return data as AdminChapter[]
}

/**
 * Criar capítulo
 */
export async function createChapter(chapter: Omit<AdminChapter, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('chapters')
    .insert({
      ...chapter,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  if (error) throw error
  return data as AdminChapter
}

/**
 * Atualizar capítulo
 */
export async function updateChapter(id: string, chapter: Partial<AdminChapter>) {
  const { data, error } = await supabase
    .from('chapters')
    .update({
      ...chapter,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as AdminChapter
}

/**
 * Obter capítulo por ID
 */
export async function getChapterById(id: string) {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data as AdminChapter
}
