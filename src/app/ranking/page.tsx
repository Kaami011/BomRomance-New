'use client'

import { useState, useEffect } from 'react'
import { Trophy, TrendingUp, Eye, Star } from 'lucide-react'
import Link from 'next/link'
import { getRankingBooks } from '@/lib/books'
import { BookCover } from '@/components/custom/book-cover'
import { createBookSlug } from '@/lib/supabase'
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
              {books.slice(0, 3).map((book, index) => {
                const bookSlug = createBookSlug(book.title, book.id)
                return (
                  <Link
                    key={book.id}
                    href={`/livro/${bookSlug}`}
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
                          className="h-[260px] md:h-[280px] shadow-2xl group-hover:scale-[1.03] transition-transform duration-300"
                          showOverlay={false}
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
                )
              })}
            </div>

            {/* Lista até Top #8 (4º ao 8º lugar) */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Top #4 ao #8</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {books.slice(3, 8).map((book, index) => {
                  const position = index + 4 // 4, 5, 6, 7, 8
                  const bookSlug = createBookSlug(book.title, book.id)
                  
                  return (
                    <Link
                      key={book.id}
                      href={`/livro/${bookSlug}`}
                      className="group flex items-stretch gap-4 p-4 rounded-2xl bg-white hover:bg-gray-50 transition border-b border-gray-100 last:border-b-0"
                    >
                      {/* posição (#4, #5, ...) */}
                      <div className="flex items-center justify-center w-10">
                        <span className="text-lg font-bold text-gray-700">
                          #{position}
                        </span>
                      </div>

                      {/* capa fixa do lado esquerdo */}
                      <div className="w-[96px] sm:w-[110px] md:w-[120px] flex-shrink-0">
                        <BookCover 
                          title={book.title}
                          className="h-[150px] sm:h-[170px] md:h-[190px]"
                        />
                      </div>

                      {/* textos à direita */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
                          {book.title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-1 line-clamp-1">
                          {book.author}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {book.totalViews?.toLocaleString('pt-BR') ?? 0} leituras
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            {book.averageRating?.toFixed(1) ?? '0.0'}
                          </span>
                        </div>
                      </div>

                      {/* ícone de tendência à direita (opcional) */}
                      <div className="hidden lg:flex items-center">
                        <TrendingUp className="w-5 h-5 text-[#FF2D55]" />
                      </div>
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
