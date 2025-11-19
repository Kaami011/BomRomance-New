'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  getBookById, 
  updateBook, 
  uploadBookCover,
  getBookChapters,
  createChapter,
  updateChapter,
  type AdminBook,
  type AdminChapter
} from '@/lib/admin/books'
import AdminLayout from '@/components/admin/AdminLayout'
import { ArrowLeft, Upload, Loader2, Plus, Edit, Trash2, Eye, Save, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EditBookPage() {
  const params = useParams()
  const router = useRouter()
  const bookId = params.id as string

  const [book, setBook] = useState<AdminBook | null>(null)
  const [chapters, setChapters] = useState<AdminChapter[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  
  // Chapter form
  const [editingChapter, setEditingChapter] = useState<AdminChapter | null>(null)
  const [showChapterForm, setShowChapterForm] = useState(false)
  const [chapterForm, setChapterForm] = useState({
    title: '',
    chapter_order: 1,
    content: '',
    is_published: false
  })

  useEffect(() => {
    loadBook()
    loadChapters()
  }, [bookId])

  async function loadBook() {
    try {
      const data = await getBookById(bookId)
      setBook(data)
      setCoverPreview(data.cover_url || null)
    } catch (error) {
      console.error('Erro ao carregar livro:', error)
      alert('Erro ao carregar livro')
      router.push('/admin/livros')
    } finally {
      setLoading(false)
    }
  }

  async function loadChapters() {
    try {
      const data = await getBookChapters(bookId)
      setChapters(data)
    } catch (error) {
      console.error('Erro ao carregar capítulos:', error)
    }
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setCoverFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  async function handleSaveBook(e: React.FormEvent) {
    e.preventDefault()
    
    if (!book) return

    try {
      setSaving(true)

      // Upload da capa se houver
      let coverUrl = book.cover_url
      if (coverFile) {
        coverUrl = await uploadBookCover(coverFile, bookId)
      }

      // Atualizar livro
      await updateBook(bookId, {
        ...book,
        cover_url: coverUrl
      })

      alert('Livro atualizado com sucesso!')
      loadBook()
    } catch (error) {
      console.error('Erro ao atualizar livro:', error)
      alert('Erro ao atualizar livro')
    } finally {
      setSaving(false)
    }
  }

  function openChapterForm(chapter?: AdminChapter) {
    if (chapter) {
      setEditingChapter(chapter)
      setChapterForm({
        title: chapter.title,
        chapter_order: chapter.chapter_order,
        content: chapter.content || '',
        is_published: chapter.is_published
      })
    } else {
      setEditingChapter(null)
      setChapterForm({
        title: '',
        chapter_order: chapters.length + 1,
        content: '',
        is_published: false
      })
    }
    setShowChapterForm(true)
  }

  function closeChapterForm() {
    setShowChapterForm(false)
    setEditingChapter(null)
    setChapterForm({
      title: '',
      chapter_order: 1,
      content: '',
      is_published: false
    })
  }

  async function handleSaveChapter(e: React.FormEvent) {
    e.preventDefault()

    try {
      if (editingChapter) {
        // Atualizar capítulo existente
        await updateChapter(editingChapter.id, chapterForm)
        alert('Capítulo atualizado com sucesso!')
      } else {
        // Criar novo capítulo
        await createChapter({
          book_id: bookId,
          ...chapterForm
        })
        alert('Capítulo criado com sucesso!')
      }

      closeChapterForm()
      loadChapters()
    } catch (error) {
      console.error('Erro ao salvar capítulo:', error)
      alert('Erro ao salvar capítulo')
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

  if (!book) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <p className="text-gray-500">Livro não encontrado</p>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/admin/livros"
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">Editar Livro</h1>
            <p className="text-gray-600 mt-1">{book.title}</p>
          </div>
          <Link
            href={`/livro/${book.slug}`}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Ver no Site
          </Link>
        </div>

        {/* Book Form */}
        <form onSubmit={handleSaveBook} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Informações do Livro</h2>

          {/* Cover Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Capa do Livro
            </label>
            <div className="flex items-start gap-6">
              {coverPreview ? (
                <Image
                  src={coverPreview}
                  alt="Preview"
                  width={160}
                  height={240}
                  className="rounded-lg object-cover border-2 border-gray-200"
                />
              ) : (
                <div className="w-40 h-60 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="hidden"
                  id="cover-upload"
                />
                <label
                  htmlFor="cover-upload"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Alterar Imagem
                </label>
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug (URL)
            </label>
            <input
              type="text"
              value={book.slug}
              onChange={(e) => setBook({ ...book, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Category & Age Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={book.category || ''}
                onChange={(e) => setBook({ ...book, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="Romance">Romance</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Bilionário">Bilionário</option>
                <option value="Erótico">Erótico</option>
                <option value="Suspense">Suspense</option>
                <option value="Drama">Drama</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Classificação Etária
              </label>
              <select
                value={book.age_rating || ''}
                onChange={(e) => setBook({ ...book, age_rating: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="+14">+14</option>
                <option value="+16">+16</option>
                <option value="+18">+18</option>
              </select>
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sinopse
            </label>
            <textarea
              value={book.synopsis || ''}
              onChange={(e) => setBook({ ...book, synopsis: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={book.status}
              onChange={(e) => setBook({ ...book, status: e.target.value as any })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Salvar Alterações
                </>
              )}
            </button>
          </div>
        </form>

        {/* Chapters Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Capítulos do Livro</h2>
            <button
              onClick={() => openChapterForm()}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Adicionar Capítulo
            </button>
          </div>

          {chapters.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-500">Nenhum capítulo adicionado ainda</p>
              <button
                onClick={() => openChapterForm()}
                className="mt-4 text-pink-600 hover:text-pink-700 font-medium"
              >
                Adicionar primeiro capítulo
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              {chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-500 w-12">
                      #{chapter.chapter_order}
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">{chapter.title}</h3>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-1 ${
                          chapter.is_published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {chapter.is_published ? 'Publicado' : 'Rascunho'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openChapterForm(chapter)}
                      className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chapter Form Modal */}
        {showChapterForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <form onSubmit={handleSaveChapter} className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {editingChapter ? 'Editar Capítulo' : 'Novo Capítulo'}
                  </h3>
                  <button
                    type="button"
                    onClick={closeChapterForm}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Título do Capítulo *
                    </label>
                    <input
                      type="text"
                      value={chapterForm.title}
                      onChange={(e) => setChapterForm({ ...chapterForm, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ordem *
                    </label>
                    <input
                      type="number"
                      value={chapterForm.chapter_order}
                      onChange={(e) => setChapterForm({ ...chapterForm, chapter_order: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      required
                      min="1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conteúdo do Capítulo
                  </label>
                  <textarea
                    value={chapterForm.content}
                    onChange={(e) => setChapterForm({ ...chapterForm, content: e.target.value })}
                    rows={15}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent font-mono text-sm"
                    placeholder="Escreva o conteúdo do capítulo aqui..."
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_published"
                    checked={chapterForm.is_published}
                    onChange={(e) => setChapterForm({ ...chapterForm, is_published: e.target.checked })}
                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="is_published" className="text-sm font-medium text-gray-700">
                    Publicar capítulo
                  </label>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    Salvar Capítulo
                  </button>
                  <button
                    type="button"
                    onClick={closeChapterForm}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
