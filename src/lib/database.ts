import { supabase } from './supabase'
import type { Book, Category, Chapter } from './supabase'

// Buscar livros com filtros e ordenação
export async function searchBooks(params: {
  query?: string
  categorySlug?: string
  sortBy?: 'views' | 'rating' | 'recent' | 'trending'
  limit?: number
  offset?: number
}) {
  const { query, categorySlug, sortBy = 'views', limit = 20, offset = 0 } = params

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
    queryBuilder = queryBuilder
      .eq('book_categories.category.slug', categorySlug)
  }

  // Ordenação
  switch (sortBy) {
    case 'views':
      queryBuilder = queryBuilder.order('total_views', { ascending: false })
      break
    case 'rating':
      // Ordenar por média de avaliações (calculada no frontend)
      queryBuilder = queryBuilder.order('created_at', { ascending: false })
      break
    case 'recent':
      queryBuilder = queryBuilder.order('updated_at', { ascending: false })
      break
    case 'trending':
      // Trending = views recentes + rating alto
      queryBuilder = queryBuilder.order('total_views', { ascending: false })
      break
  }

  const { data, error } = await queryBuilder
    .range(offset, offset + limit - 1)

  if (error) {
    console.error('Erro ao buscar livros:', error)
    return { books: [], error }
  }

  // Processar dados e calcular média de rating
  const books: Book[] = (data || []).map((book: any) => {
    const reviews = book.reviews || []
    const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

    return {
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      cover_image: book.cover_image,
      total_views: book.total_views,
      total_chapters: book.total_chapters,
      status: book.status,
      created_at: book.created_at,
      updated_at: book.updated_at,
      average_rating: averageRating,
      categories: book.categories?.map((bc: any) => bc.category).filter(Boolean) || []
    }
  })

  return { books, error: null }
}

// Buscar livros por ranking (top views + rating)
export async function getRankingBooks(limit = 50) {
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

  if (error) {
    console.error('Erro ao buscar ranking:', error)
    return { books: [], error }
  }

  // Calcular score de ranking: views + (rating * 100000)
  const books: (Book & { rankingScore: number })[] = (data || []).map((book: any) => {
    const reviews = book.reviews || []
    const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0
    
    // Score = visualizações + (rating médio * peso)
    const rankingScore = book.total_views + (averageRating * 100000)

    return {
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      cover_image: book.cover_image,
      total_views: book.total_views,
      total_chapters: book.total_chapters,
      status: book.status,
      created_at: book.created_at,
      updated_at: book.updated_at,
      average_rating: averageRating,
      categories: book.categories?.map((bc: any) => bc.category).filter(Boolean) || [],
      rankingScore
    }
  })

  // Ordenar por ranking score
  books.sort((a, b) => b.rankingScore - a.rankingScore)

  return { books, error: null }
}

// Buscar todas as categorias
export async function getCategories() {
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

// Incrementar visualizações de um livro
export async function incrementBookViews(bookId: string) {
  const { error } = await supabase.rpc('increment_book_views', { book_id: bookId })
  
  if (error) {
    console.error('Erro ao incrementar views:', error)
  }
}

// Adicionar review
export async function addReview(bookId: string, userId: string | null, rating: number, comment?: string) {
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

// Buscar livro por ID com detalhes completos
export async function getBookById(bookId: string) {
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

  // Buscar capítulos separadamente com headers corretos
  const { data: chaptersData, error: chaptersError } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', bookId)
    .order('chapter_number', { ascending: true })

  if (chaptersError) {
    console.error('Erro ao buscar capítulos:', chaptersError)
  }

  const reviews = data.reviews || []
  const totalRating = reviews.reduce((sum: number, r: any) => sum + (r.rating || 0), 0)
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

  const book: Book = {
    id: data.id,
    title: data.title,
    author: data.author,
    description: data.description,
    cover_image: data.cover_image,
    total_views: data.total_views,
    total_chapters: data.total_chapters,
    status: data.status,
    created_at: data.created_at,
    updated_at: data.updated_at,
    average_rating: averageRating,
    categories: data.categories?.map((bc: any) => bc.category).filter(Boolean) || []
  }

  return { 
    book, 
    reviews: data.reviews || [], 
    chapters: (chaptersData || []) as Chapter[], 
    error: null 
  }
}

// Buscar capítulo específico
export async function getChapter(bookId: string, chapterNumber: number) {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', bookId)
    .eq('chapter_number', chapterNumber)
    .single()

  if (error) {
    console.error('Erro ao buscar capítulo:', error)
    return { chapter: null, error }
  }

  return { chapter: data as Chapter, error: null }
}

// Incrementar visualizações de um capítulo
export async function incrementChapterViews(chapterId: string) {
  const { error } = await supabase
    .from('chapters')
    .update({ views: supabase.raw('views + 1') })
    .eq('id', chapterId)

  if (error) {
    console.error('Erro ao incrementar views do capítulo:', error)
  }
}
