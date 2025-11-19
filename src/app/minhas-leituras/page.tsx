'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BookOpen, Clock } from 'lucide-react'

interface ReadingProgress {
  id: string
  book_id: string
  chapter_number: number
  updated_at: string
  books: {
    id: string
    title: string
    cover_url: string
    author: string
  }
}

export default function MinhasLeiturasPage() {
  const [readings, setReadings] = useState<ReadingProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      router.push('/login')
      return
    }

    setUser(session.user)
    loadReadings(session.user.id)
  }

  const loadReadings = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('reading_progress')
        .select(`
          id,
          book_id,
          chapter_number,
          updated_at,
          books (
            id,
            title,
            cover_url,
            author
          )
        `)
        .eq('user_id', userId)
        .order('updated_at', { ascending: false })

      if (error) throw error

      setReadings(data || [])
    } catch (error) {
      console.error('Erro ao carregar leituras:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF2D55] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando suas leituras...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Minhas Leituras</h1>
          <p className="text-gray-600">Continue de onde parou</p>
        </div>

        {readings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Nenhuma leitura iniciada</h2>
            <p className="text-gray-600 mb-6">Explore nosso catálogo e comece a ler!</p>
            <Link
              href="/explorar"
              className="inline-block bg-[#FF2D55] text-white px-6 py-3 rounded-lg hover:bg-[#E0254A] transition"
            >
              Explorar Livros
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readings.map((reading) => (
              <Link
                key={reading.id}
                href={`/livro/${reading.book_id}/ler/${reading.chapter_number}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden group"
              >
                <div className="relative h-64">
                  <img
                    src={reading.books.cover_url}
                    alt={reading.books.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{reading.books.title}</h3>
                    <p className="text-white/80 text-sm">{reading.books.author}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>Capítulo {reading.chapter_number}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{new Date(reading.updated_at).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-[#FF2D55] text-white py-2 rounded-lg hover:bg-[#E0254A] transition">
                    Continuar Lendo
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
