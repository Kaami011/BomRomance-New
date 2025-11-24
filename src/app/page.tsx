'use client'

import { useState, useEffect } from 'react'
import BookCard from '@/components/custom/book-card'
import { ChevronRight, TrendingUp, Flame, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import { searchBooks } from '@/lib/books'
import type { Book } from '@/lib/types'

export default function Home() {
  const [trendingBooks, setTrendingBooks] = useState<Book[]>([])
  const [risingBooks, setRisingBooks] = useState<Book[]>([])
  const [popularBooks, setPopularBooks] = useState<Book[]>([])
  const [recentBooks, setRecentBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadBooks() {
      setLoading(true)
      
      // Carregar diferentes seções
      const [trending, rising, popular, recent] = await Promise.all([
        searchBooks({ sortBy: 'trending', limit: 6 }),
        searchBooks({ sortBy: 'views', limit: 6 }),
        searchBooks({ sortBy: 'rating', limit: 12 }),
        searchBooks({ sortBy: 'recent', limit: 6 })
      ])

      setTrendingBooks(trending.books)
      setRisingBooks(rising.books)
      setPopularBooks(popular.books)
      setRecentBooks(recent.books)
      setLoading(false)
    }

    loadBooks()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubra Histórias Incríveis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Milhares de romances, fantasias e aventuras esperando por você
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explorar"
                className="px-8 py-3 bg-white text-[#FF2D55] rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Começar a Ler
              </Link>
              <Link
                href="/ranking"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition text-center"
              >
                Ver Ranking
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Trending Section */}
      {trendingBooks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-[#FF2D55]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Em Alta</h2>
            </div>
            <Link href="/explorar?sort=trending" className="flex items-center gap-1 text-[#FF2D55] hover:text-[#8B5CF6] transition">
              <span className="text-sm font-medium">Ver todos</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {trendingBooks.map((book, index) => (
              <BookCard key={book.id} book={book} rank={index + 1} showRank />
            ))}
          </div>
        </section>
      )}

      {/* Rising Section */}
      {risingBooks.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Em Ascensão</h2>
              </div>
              <Link href="/explorar?sort=views" className="flex items-center gap-1 text-[#FF2D55] hover:text-[#8B5CF6] transition">
                <span className="text-sm font-medium">Ver todos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {risingBooks.map((book, index) => (
                <BookCard key={book.id} book={book} rank={index + 4} showRank />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Section */}
      {popularBooks.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Populares</h2>
            </div>
            <Link href="/explorar?sort=rating" className="flex items-center gap-1 text-[#FF2D55] hover:text-[#8B5CF6] transition">
              <span className="text-sm font-medium">Ver todos</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {popularBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Updates */}
      {recentBooks.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#FF2D55]" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Atualizados Recentemente</h2>
              </div>
              <Link href="/explorar?sort=recent" className="flex items-center gap-1 text-[#FF2D55] hover:text-[#8B5CF6] transition">
                <span className="text-sm font-medium">Ver todos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {recentBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!loading && trendingBooks.length === 0 && risingBooks.length === 0 && popularBooks.length === 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nenhum livro disponível ainda</h2>
          <p className="text-gray-600 mb-8">Em breve teremos histórias incríveis para você!</p>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a milhares de leitores e descubra seu próximo livro favorito
          </p>
          <Link
            href="/explorar"
            className="inline-block px-8 py-3 bg-white text-[#FF2D55] rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explorar Agora
          </Link>
        </div>
      </section>
    </main>
  )
}
