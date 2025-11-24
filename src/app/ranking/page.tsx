'use client'

import { useState, useEffect } from 'react'
import { Trophy, TrendingUp, Eye, Star } from 'lucide-react'
import Link from 'next/link'
import { getRankingBooks } from '@/lib/books'
import { BookCover } from '@/components/custom/book-cover'
import type { Book } from '@/lib/types'

export default function RankingPage() {
  const [books, setBooks] = useState<(Book & { rankingScore: number })[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRanking() {
      setLoading(true)
      const { books: results } = await getRankingBooks(100)
      setBooks(results)
      setLoading(false)
    }
    loadRanking()
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="w-10 h-10" />
            <h1 className="text-3xl md:text-5xl font-bold">Ranking de Livros</h1>
          </div>
          <p className="text-xl text-white/90">
            Os livros mais populares baseados em visualizações e avaliações
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Top 3 Destaque */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {books.slice(0, 3).map((book, index) => (
                <Link
                  key={book.id}
                  href={`/livro/${book.id}`}
                  className="group relative"
                >
                  <div className={`
                    relative rounded-2xl overflow-hidden p-6
                    ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
                    ${index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500' : ''}
                    ${index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : ''}
                  `}>
                    {/* Rank Badge */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">#{index + 1}</span>
                    </div>

                    {/* Book Cover - Componente único */}
                    <div className="mb-4">
                      <BookCover 
                        title={book.title}
                        coverUrl={book.coverUrl}
                        className="shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Book Info */}
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{book.title}</h3>
                      <p className="text-white/90 mb-4">{book.author}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{book.totalViews.toLocaleString()}</span>
                        </div>
                        {book.averageRating && book.averageRating > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-white" />
                            <span>{book.averageRating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Lista completa */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Ranking Completo</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {books.slice(3).map((book, index) => {
                  const rank = index + 4
                  return (
                    <Link
                      key={book.id}
                      href={`/livro/${book.id}`}
                      className="flex items-center gap-4 p-4 hover:bg-gray-50 transition group"
                    >
                      {/* Rank Number */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">#{rank}</span>
                      </div>

                      {/* Book Cover - Componente único */}
                      <div className="flex-shrink-0 w-16">
                        <BookCover 
                          title={book.title}
                          coverUrl={book.coverUrl}
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#FF2D55] transition line-clamp-1">
                          {book.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                        
                        {/* Categories */}
                        {book.categories && book.categories.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {book.categories.slice(0, 3).map((category) => (
                              <span
                                key={category.id}
                                className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                              >
                                {category.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="hidden md:flex flex-col items-end gap-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Eye className="w-4 h-4" />
                          <span className="font-medium">{book.totalViews.toLocaleString()}</span>
                        </div>
                        {book.averageRating && book.averageRating > 0 && (
                          <div className="flex items-center gap-2 text-yellow-500">
                            <Star className="w-4 h-4 fill-yellow-500" />
                            <span className="font-medium">{book.averageRating.toFixed(1)}</span>
                          </div>
                        )}
                        <div className="text-gray-500 text-xs">
                          {book.totalChapters} capítulos
                        </div>
                      </div>

                      {/* Trending indicator */}
                      {rank <= 10 && (
                        <div className="hidden lg:block">
                          <TrendingUp className="w-5 h-5 text-[#FF2D55]" />
                        </div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
