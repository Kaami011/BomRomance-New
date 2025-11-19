'use client'

import { useEffect, useState } from 'react'
import { getDashboardStats } from '@/lib/admin/books'
import AdminLayout from '@/components/admin/AdminLayout'
import { BookOpen, FileText, Eye, Plus, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface DashboardStats {
  totalBooks: number
  publishedBooks: number
  draftBooks: number
  totalChapters: number
  recentBooks: Array<{
    id: string
    title: string
    created_at: string
    status: string
  }>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const data = await getDashboardStats()
      setStats(data)
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Visão geral da plataforma</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Site
            </Link>
            <Link
              href="/admin/livros/novo"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Novo Livro
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total de Livros</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats?.totalBooks || 0}</p>
              </div>
              <div className="p-3 bg-pink-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-pink-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Publicados</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats?.publishedBooks || 0}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rascunhos</p>
                <p className="text-3xl font-bold text-orange-600 mt-2">{stats?.draftBooks || 0}</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Capítulos</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats?.totalChapters || 0}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Books */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Últimos Livros Adicionados</h2>
          </div>
          <div className="p-6">
            {stats?.recentBooks && stats.recentBooks.length > 0 ? (
              <div className="space-y-4">
                {stats.recentBooks.map((book) => (
                  <Link
                    key={book.id}
                    href={`/admin/livros/${book.id}`}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{book.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {format(new Date(book.created_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        book.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {book.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">Nenhum livro cadastrado ainda</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/admin/livros"
            className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl p-8 text-white hover:from-pink-600 hover:to-purple-600 transition-colors"
          >
            <BookOpen className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Gerenciar Livros</h3>
            <p className="text-pink-100">Visualize, edite e gerencie todos os livros da plataforma</p>
          </Link>

          <Link
            href="/admin/livros/novo"
            className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-pink-500 hover:bg-pink-50 transition-colors group"
          >
            <Plus className="w-10 h-10 mb-4 text-gray-400 group-hover:text-pink-500" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Adicionar Novo Livro</h3>
            <p className="text-gray-600">Cadastre um novo livro na plataforma</p>
          </Link>
        </div>
      </div>
    </AdminLayout>
  )
}
