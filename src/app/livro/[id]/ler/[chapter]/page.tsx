'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Lock, List, Settings, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { supabase, extractIdFromSlug, createBookSlug } from '@/lib/supabase'
import { getUserSubscription } from '@/lib/subscriptions'
import { getMockBookById } from '@/data/mockBooks'
import { getMockChapter, getMockChapters } from '@/data/mockChapters'

interface Chapter {
  id: string
  book_id: string
  chapter_number: number
  title: string
  content: string
  views: number
  is_premium?: boolean
}

interface Book {
  id: string
  title: string
  author: string
  total_chapters: number
}

export default function LerCapituloPage() {
  const params = useParams()
  const router = useRouter()
  const slugOrId = params.id as string
  const chapterNumber = parseInt(params.chapter as string)

  const [book, setBook] = useState<Book | null>(null)
  const [chapter, setChapter] = useState<Chapter | null>(null)
  const [allChapters, setAllChapters] = useState<Chapter[]>([])
  const [loading, setLoading] = useState(true)
  const [showChapterList, setShowChapterList] = useState(false)
  const [fontSize, setFontSize] = useState(18)
  const [showSettings, setShowSettings] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [hasSubscription, setHasSubscription] = useState(false)
  const [checkingSubscription, setCheckingSubscription] = useState(true)
  const [isMockBook, setIsMockBook] = useState(false)

  // Verificar usuário e assinatura
  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)

      if (session?.user) {
        const subscription = await getUserSubscription(session.user.id)
        setHasSubscription(subscription !== null && subscription.status === 'active')
      }

      setCheckingSubscription(false)
    }

    checkAuth()
  }, [])

  useEffect(() => {
    async function loadChapter() {
      setLoading(true)

      // Extrair ID do slug
      const bookId = extractIdFromSlug(slugOrId) || slugOrId

      // Se o ID começa com "mock-", buscar diretamente dos dados mockados
      if (bookId.startsWith('mock-')) {
        const mockBook = getMockBookById(bookId)
        if (mockBook) {
          setBook({
            id: mockBook.id,
            title: mockBook.title,
            author: mockBook.author,
            total_chapters: mockBook.total_chapters
          })
          setIsMockBook(true)

          const mockChapters = getMockChapters(bookId)
          setAllChapters(mockChapters)

          const mockChapter = getMockChapter(bookId, chapterNumber)
          if (mockChapter) {
            setChapter(mockChapter)
          }
        }
        setLoading(false)
        return
      }

      // Tentar buscar do banco de dados
      const { data: bookData } = await supabase
        .from('books')
        .select('id, title, author, total_chapters')
        .eq('id', bookId)
        .single()

      if (bookData) {
        setBook(bookData)
        setIsMockBook(false)

        // Buscar todos os capítulos
        const { data: chaptersData } = await supabase
          .from('chapters')
          .select('*')
          .eq('book_id', bookId)
          .order('chapter_number')

        if (chaptersData) {
          setAllChapters(chaptersData)
        }

        // Buscar capítulo atual
        const { data: chapterData } = await supabase
          .from('chapters')
          .select('*')
          .eq('book_id', bookId)
          .eq('chapter_number', chapterNumber)
          .single()

        if (chapterData) {
          setChapter(chapterData)
          
          // Incrementar views do capítulo
          await supabase
            .from('chapters')
            .update({ views: (chapterData.views || 0) + 1 })
            .eq('id', chapterData.id)
        }
      } else {
        // Se não encontrou no banco, buscar nos mockados como fallback
        const mockBook = getMockBookById(bookId)
        if (mockBook) {
          setBook({
            id: mockBook.id,
            title: mockBook.title,
            author: mockBook.author,
            total_chapters: mockBook.total_chapters
          })
          setIsMockBook(true)

          const mockChapters = getMockChapters(bookId)
          setAllChapters(mockChapters)

          const mockChapter = getMockChapter(bookId, chapterNumber)
          if (mockChapter) {
            setChapter(mockChapter)
          }
        }
      }

      setLoading(false)
    }

    loadChapter()
  }, [slugOrId, chapterNumber])

  const goToChapter = (num: number) => {
    if (!book) return
    const bookSlug = createBookSlug(book.title, book.id)
    router.push(`/livro/${bookSlug}/ler/${num}`)
    setShowChapterList(false)
  }

  // Determinar se o capítulo está bloqueado
  const isFreeChapter = chapter?.is_premium === false || chapterNumber <= 3
  const isLocked = !isFreeChapter && !hasSubscription

  if (loading || checkingSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
      </div>
    )
  }

  if (!book || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Capítulo não encontrado</h2>
          <Link href="/" className="text-[#FF2D55] hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  const bookSlug = createBookSlug(book.title, book.id)

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header fixo */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/livro/${bookSlug}`}
              className="flex items-center gap-2 text-gray-600 hover:text-[#FF2D55] transition"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Voltar</span>
            </Link>

            <div className="flex-1 text-center px-4">
              <h1 className="font-semibold text-gray-900 truncate">{book.title}</h1>
              <p className="text-sm text-gray-500">Capítulo {chapterNumber}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setShowChapterList(!showChapterList)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <List className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-t border-gray-200 bg-gray-50 py-4">
            <div className="max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Tamanho da fonte</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    A-
                  </button>
                  <span className="text-sm text-gray-600">{fontSize}px</span>
                  <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chapter List Panel */}
        {showChapterList && (
          <div className="border-t border-gray-200 bg-white max-h-96 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {allChapters.map((ch) => {
                const chapterIsFree = ch.is_premium === false || ch.chapter_number <= 3
                const chapterIsLocked = !chapterIsFree && !hasSubscription
                const isCurrentChapter = ch.chapter_number === chapterNumber
                
                return (
                  <button
                    key={ch.id}
                    onClick={() => !chapterIsLocked && goToChapter(ch.chapter_number)}
                    disabled={chapterIsLocked}
                    className={`w-full px-4 py-3 text-left border-b border-gray-100 hover:bg-gray-50 transition flex items-center justify-between ${
                      isCurrentChapter ? 'bg-[#FF2D55]/5' : ''
                    } ${chapterIsLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Cap. {ch.chapter_number}</span>
                        {chapterIsLocked && <Lock className="w-3 h-3 text-gray-400" />}
                      </div>
                      <h4 className={`font-medium ${isCurrentChapter ? 'text-[#FF2D55]' : 'text-gray-900'}`}>
                        {ch.title}
                      </h4>
                    </div>
                    {isCurrentChapter && (
                      <div className="w-1 h-8 bg-[#FF2D55] rounded-full"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </header>



      {/* Conteúdo do capítulo */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {isLocked ? (
          // Capítulo bloqueado - exige assinatura
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] p-8 text-white text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Capítulo Exclusivo para Assinantes 💗</h2>
              <p className="text-white/90">
                Assine o Bom Romance e desbloqueie todos os capítulos completos, lançamentos e conteúdo exclusivo.
              </p>
            </div>

            <div className="p-8">
              {/* Benefícios */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF2D55]" />
                  O que você ganha com a assinatura:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF2D55] rounded-full mt-2"></div>
                    <span className="text-gray-700">Acesso ilimitado a todos os capítulos de todos os livros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF2D55] rounded-full mt-2"></div>
                    <span className="text-gray-700">Novos capítulos toda semana</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF2D55] rounded-full mt-2"></div>
                    <span className="text-gray-700">Leitura sem anúncios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF2D55] rounded-full mt-2"></div>
                    <span className="text-gray-700">Conteúdo exclusivo para assinantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF2D55] rounded-full mt-2"></div>
                    <span className="text-gray-700">Suporte prioritário</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                {!user ? (
                  <>
                    <Link
                      href="/login?redirect=/assinatura"
                      className="block w-full py-4 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold text-center hover:opacity-90 transition"
                    >
                      Fazer Login e Ver Planos
                    </Link>
                    <p className="text-center text-sm text-gray-600">
                      Já tem conta?{' '}
                      <Link href="/login" className="text-[#FF2D55] hover:underline">
                        Faça login
                      </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <Link
                      href="/assinatura"
                      className="block w-full py-4 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold text-center hover:opacity-90 transition"
                    >
                      Ver Planos de Assinatura
                    </Link>
                    <p className="text-center text-sm text-gray-600">
                      A partir de R$ 19,90/mês • Cancele quando quiser
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Capítulo desbloqueado
          <article className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
            <header className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">Capítulo {chapter.chapter_number}</div>
                {isFreeChapter && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Gratuito
                  </span>
                )}
                {hasSubscription && !isFreeChapter && (
                  <span className="text-xs bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white px-2 py-1 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {chapter.title}
              </h1>
              <p className="text-gray-600">por {book.author}</p>
            </header>

            <div
              className="prose prose-lg max-w-none"
              style={{ fontSize: `${fontSize}px`, lineHeight: '1.8' }}
            >
              {chapter.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-800">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        )}

        {/* Navegação entre capítulos */}
        <div className="flex items-center justify-between mt-8 gap-4">
          {chapterNumber > 1 ? (
            <Link
              href={`/livro/${bookSlug}/ler/${chapterNumber - 1}`}
              className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#FF2D55] hover:text-[#FF2D55] transition"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Capítulo Anterior</span>
              <span className="sm:hidden">Anterior</span>
            </Link>
          ) : (
            <div></div>
          )}

          {chapterNumber < book.total_chapters && (
            <Link
              href={`/livro/${bookSlug}/ler/${chapterNumber + 1}`}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition ml-auto"
            >
              <span className="hidden sm:inline">Próximo Capítulo</span>
              <span className="sm:hidden">Próximo</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        {/* Mensagem de fim */}
        {chapterNumber === book.total_chapters && (
          <div className="mt-8 bg-gradient-to-r from-[#FF2D55]/10 to-[#8B5CF6]/10 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Você chegou ao último capítulo disponível!
            </h3>
            <p className="text-gray-600 mb-4">
              Novos capítulos em breve. Adicione à sua biblioteca para ser notificado.
            </p>
            <Link
              href={`/livro/${bookSlug}`}
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Voltar para o Livro
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
