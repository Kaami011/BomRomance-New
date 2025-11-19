'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBook, uploadBookCover } from '@/lib/admin/books'
import AdminLayout from '@/components/admin/AdminLayout'
import { ArrowLeft, Upload, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { generateSlug } from '@/lib/supabase'

export default function NewBookPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    synopsis: '',
    category: '',
    age_rating: '',
    status: 'draft' as 'draft' | 'published'
  })

  // Auto-gerar slug quando título mudar
  useEffect(() => {
    if (formData.title && !formData.slug) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(formData.title)
      }))
    }
  }, [formData.title])

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!formData.title) {
      alert('Por favor, preencha o título do livro')
      return
    }

    try {
      setLoading(true)

      // Criar livro
      const book = await createBook({
        title: formData.title,
        slug: formData.slug,
        synopsis: formData.synopsis,
        category: formData.category,
        age_rating: formData.age_rating,
        status: formData.status
      })

      // Upload da capa se houver
      if (coverFile && book.id) {
        const coverUrl = await uploadBookCover(coverFile, book.id)
        // Atualizar livro com URL da capa
        await fetch('/api/admin/books', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: book.id, cover_url: coverUrl })
        })
      }

      alert('Livro criado com sucesso!')
      router.push(`/admin/livros/${book.id}`)
    } catch (error) {
      console.error('Erro ao criar livro:', error)
      alert('Erro ao criar livro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link
            href="/admin/livros"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Novo Livro</h1>
            <p className="text-gray-600 mt-1">Adicione um novo livro à plataforma</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
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
                  Escolher Imagem
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Recomendado: 400x600px, formato JPG ou PNG
                </p>
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
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Digite o título do livro"
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
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="slug-do-livro"
            />
            <p className="text-sm text-gray-500 mt-1">
              Gerado automaticamente a partir do título
            </p>
          </div>

          {/* Category & Age Rating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
                value={formData.age_rating}
                onChange={(e) => setFormData({ ...formData, age_rating: e.target.value })}
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
              value={formData.synopsis}
              onChange={(e) => setFormData({ ...formData, synopsis: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Escreva uma breve descrição do livro..."
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
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
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                'Criar Livro'
              )}
            </button>
            <Link
              href="/admin/livros"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
