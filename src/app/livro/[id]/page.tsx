'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Eye, Star, BookOpen, Clock, Heart, Share2, ChevronRight, Lock } from 'lucide-react'
import Link from 'next/link'
import { getBookById, incrementBookViews, addReview } from '@/lib/database'
import { getMockBookById } from '@/data/mockBooks'
import { getMockChapters } from '@/data/mockChapters'
import { extractIdFromSlug, createBookSlug } from '@/lib/supabase'
import type { Book } from '@/lib/supabase'

export default function LivroPage() {
  const params = useParams()
  const slugOrId = params.id as string

  const [book, setBook] = useState<Book | null>(null)
  const [reviews, setReviews] = useState<any[]>([])
  const [chapters, setChapters] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isMockBook, setIsMockBook] = useState(false)
  const [userRating, setUserRating] = useState(0)
  const [userComment, setUserComment] = useState('')
  const [submittingReview, setSubmittingReview] = useState(false)

  useEffect(() => {
    async function loadBook() {
      if (!slugOrId) return
      
      setLoading(true)
      
      // Extrair ID do slug ou usar diretamente se for UUID
      const bookId = extractIdFromSlug(slugOrId) || slugOrId
      
      // Se o ID começa com "mock-", buscar diretamente dos dados mockados
      if (bookId.startsWith('mock-')) {
        const mockBook = getMockBookById(bookId)
        if (mockBook) {
          setBook(mockBook)
          setReviews([])
          setChapters(getMockChapters(bookId))
          setIsMockBook(true)
        }
        setLoading(false)
        return
      }
      
      // Tentar buscar do banco de dados
      const { book: bookData, reviews: reviewsData, chapters: chaptersData } = await getBookById(bookId)
      
      if (bookData) {
        setBook(bookData)
        setReviews(reviewsData || [])
        setChapters(chaptersData || [])
        setIsMockBook(false)
        
        // Incrementar visualizações
        await incrementBookViews(bookId)
      } else {
        // Se não encontrou no banco, buscar nos mockados como fallback
        const mockBook = getMockBookById(bookId)
        if (mockBook) {
          setBook(mockBook)
          setReviews([])
          setChapters(getMockChapters(bookId))
          setIsMockBook(true)
        }
      }
      
      setLoading(false)
    }

    loadBook()
  }, [slugOrId])

  const handleSubmitReview = async () => {
    if (userRating === 0) {
      alert('Por favor, selecione uma avaliação de 1 a 5 estrelas')
      return
    }

    if (!book) return

    setSubmittingReview(true)
    const { review } = await addReview(book.id, null, userRating, userComment)
    
    if (review) {
      setReviews([review, ...reviews])
      setUserRating(0)
      setUserComment('')
      alert('Avaliação enviada com sucesso!')
    }
    
    setSubmittingReview(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Livro não encontrado</h2>
          <Link href="/explorar" className="text-[#FF2D55] hover:underline">
            Voltar para explorar
          </Link>
        </div>
      </div>
    )
  }

  const bookSlug = createBookSlug(book.title, book.id)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#FF2D55]">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/explorar" className="hover:text-[#FF2D55]">Explorar</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{book.title}</span>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <div className="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl mb-4">
                  {book.cover_image ? (
                    <img
                      src={book.cover_image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6]">
                      <span className="text-white text-8xl font-bold">{book.title[0]}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href={`/livro/${bookSlug}/ler/1`}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    <BookOpen className="w-5 h-5" />
                    Começar a Ler
                  </Link>
                  
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-[#FF2D55] text-[#FF2D55] rounded-lg font-semibold hover:bg-[#FF2D55] hover:text-white transition">
                    <Heart className="w-5 h-5" />
                    Adicionar à Biblioteca
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition">
                    <Share2 className="w-5 h-5" />
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">por {book.author}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 font-semibold">{book.total_views.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm">visualizações</span>
                </div>
                
                {book.average_rating && book.average_rating > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-900 font-semibold">{book.average_rating.toFixed(1)}</span>
                    <span className="text-gray-500 text-sm">({reviews.length} avaliações)</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 font-semibold">{book.total_chapters}</span>
                  <span className="text-gray-500 text-sm">capítulos</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    book.status === 'ongoing' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {book.status === 'ongoing' ? 'Em andamento' : 'Completo'}
                  </span>
                </div>
              </div>

              {/* Categories */}
              {book.categories && book.categories.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Categorias</h3>
                  <div className="flex flex-wrap gap-2">
                    {book.categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/explorar?category=${category.slug}`}
                        className="px-4 py-2 bg-gradient-to-r from-[#FF2D55]/10 to-[#8B5CF6]/10 text-[#FF2D55] rounded-lg font-medium hover:from-[#FF2D55]/20 hover:to-[#8B5CF6]/20 transition"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sinopse</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {book.description || 'Sem descrição disponível.'}
                </p>
              </div>

              {/* Chapters List */}
              {chapters.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Capítulos</h3>
                  <div className="bg-gray-50 rounded-lg divide-y divide-gray-200 max-h-96 overflow-y-auto">
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.id}
                        href={`/livro/${bookSlug}/ler/${chapter.chapter_number}`}
                        className={`flex items-center justify-between p-4 transition group ${
                          chapter.is_premium 
                            ? 'opacity-60 cursor-not-allowed' 
                            : 'hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {chapter.is_premium && (
                            <Lock className="w-4 h-4 text-gray-400" />
                          )}
                          <div>
                            <span className="text-sm text-gray-500">Capítulo {chapter.chapter_number}</span>
                            <h4 className={`font-medium ${
                              chapter.is_premium 
                                ? 'text-gray-500' 
                                : 'text-gray-900 group-hover:text-[#FF2D55]'
                            }`}>
                              {chapter.title}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{chapter.views}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avaliações</h2>

          {/* Add Review Form */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Deixe sua avaliação</h3>
            
            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= userRating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              {userRating > 0 && (
                <span className="ml-2 text-gray-600">{userRating} estrela{userRating > 1 ? 's' : ''}</span>
              )}
            </div>

            {/* Comment */}
            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Escreva seu comentário (opcional)..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] mb-4"
              rows={4}
            />

            <button
              onClick={handleSubmitReview}
              disabled={submittingReview || userRating === 0}
              className="px-6 py-2 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submittingReview ? 'Enviando...' : 'Enviar Avaliação'}
            </button>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">
                      {new Date(review.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  {review.comment && (
                    <p className="text-gray-700">{review.comment}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Seja o primeiro a avaliar este livro!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
