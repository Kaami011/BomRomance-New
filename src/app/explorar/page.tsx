'use client'

import { useState, useEffect } from 'react'
import { Search, Filter, X } from 'lucide-react'
import BookCard from '@/components/custom/book-card'
import { searchBooks, getCategories } from '@/lib/books'
import { getMockBooks, searchMockBooks, getMockBooksByCategory } from '@/data/mockBooks'
import { normalizeBook } from '@/lib/books'
import type { Book, Category } from '@/lib/types'

export default function ExplorarPage() {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  
  // Filtros
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [sortBy, setSortBy] = useState<'views' | 'rating' | 'recent' | 'trending'>('trending')
  const [showFilters, setShowFilters] = useState(false)

  // Carregar categorias
  useEffect(() => {
    async function loadCategories() {
      const { categories: cats } = await getCategories()
      setCategories(cats)
    }
    loadCategories()
  }, [])

  // Buscar livros (incluindo mockados)
  useEffect(() => {
    async function loadBooks() {
      setLoading(true)
      
      // Buscar livros do banco de dados
      const { books: dbBooks } = await searchBooks({
        query: searchQuery,
        categorySlug: selectedCategory,
        sortBy,
        limit: 50
      })
      
      // Buscar livros mockados
      let mockBooksFiltered = getMockBooks()
      
      // Aplicar filtro de busca nos mockados
      if (searchQuery) {
        mockBooksFiltered = searchMockBooks(searchQuery)
      }
      
      // Aplicar filtro de categoria nos mockados
      if (selectedCategory) {
        mockBooksFiltered = getMockBooksByCategory(selectedCategory)
      }
      
      // Normalizar livros mockados para o padrão Book
      const normalizedMockBooks = mockBooksFiltered.map((mockBook: any) => 
        normalizeBook({
          id: mockBook.id,
          title: mockBook.title,
          author: mockBook.author,
          slug: mockBook.slug || mockBook.id,
          description: mockBook.description || null,
          cover_url: mockBook.cover_url || null,  // 🔴 Usar cover_url
          total_views: mockBook.total_views || 0,
          total_chapters: mockBook.total_chapters || 0,
          status: mockBook.status || 'ongoing',
          created_at: mockBook.created_at || new Date().toISOString(),
          updated_at: mockBook.updated_at || new Date().toISOString(),
          average_rating: mockBook.average_rating,
          categories: mockBook.categories || []
        })
      )
      
      // Combinar livros do banco com mockados
      const allBooks = [...dbBooks, ...normalizedMockBooks]
      
      // Aplicar ordenação
      const sortedBooks = [...allBooks].sort((a, b) => {
        switch (sortBy) {
          case 'views':
            return b.totalViews - a.totalViews
          case 'rating':
            return (b.averageRating || 0) - (a.averageRating || 0)
          case 'recent':
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          case 'trending':
            // Trending = views + rating
            const scoreA = a.totalViews + ((a.averageRating || 0) * 100000)
            const scoreB = b.totalViews + ((b.averageRating || 0) * 100000)
            return scoreB - scoreA
          default:
            return 0
        }
      })
      
      setBooks(sortedBooks)
      setLoading(false)
    }
    
    // Debounce para busca
    const timer = setTimeout(loadBooks, 300)
    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <main className="min-h-screen bg-white">
      {/* Header com busca */}
      <div className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Explorar Livros</h1>
          
          {/* Barra de busca */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por título ou autor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtros e ordenação */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Botão de filtros mobile */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
          >
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>

          {/* Categorias */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block flex-1`}>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === ''
                    ? 'bg-[#FF2D55] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todas
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category.slug
                      ? 'bg-[#FF2D55] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Ordenação */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#FF2D55]"
            >
              <option value="trending">Em Alta</option>
              <option value="views">Mais Vistos</option>
              <option value="rating">Melhor Avaliados</option>
              <option value="recent">Recentes</option>
            </select>
          </div>
        </div>

        {/* Filtros ativos */}
        {(searchQuery || selectedCategory) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {searchQuery && (
              <div className="flex items-center gap-2 px-3 py-1 bg-[#FF2D55]/10 text-[#FF2D55] rounded-full text-sm">
                <span>Busca: "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            {selectedCategory && (
              <div className="flex items-center gap-2 px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm">
                <span>{categories.find(c => c.slug === selectedCategory)?.name}</span>
                <button onClick={() => setSelectedCategory('')}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Resultados */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
          </div>
        ) : books.length > 0 ? (
          <>
            <p className="text-gray-600 mb-6">
              {books.length} {books.length === 1 ? 'livro encontrado' : 'livros encontrados'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">Nenhum livro encontrado</p>
            <p className="text-gray-400">Tente ajustar seus filtros de busca</p>
          </div>
        )}
      </div>
    </main>
  )
}
