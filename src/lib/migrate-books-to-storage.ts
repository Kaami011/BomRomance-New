/**
 * Script de migração: Livros mockados → Supabase + Storage
 * 
 * Este script:
 * 1. Lê os livros mockados de src/data/mockBooks.ts
 * 2. Faz upsert em public.books com metadados
 * 3. Para cada capítulo:
 *    - Salva conteúdo completo no Storage (bucket: chapters)
 *    - Gera preview_text (primeiros 400 caracteres)
 *    - Faz upsert em public.chapters com metadados + path do Storage
 * 
 * Uso: Chamar via API route /api/admin/migrate-books
 */

import { supabase } from './supabase'
import { mockBooks } from '@/data/mockBooks'
import { mockChapters } from '@/data/mockChapters'

interface MigrationResult {
  success: boolean
  booksProcessed: number
  chaptersProcessed: number
  errors: string[]
}

export async function migrateBooksToStorage(): Promise<MigrationResult> {
  const result: MigrationResult = {
    success: true,
    booksProcessed: 0,
    chaptersProcessed: 0,
    errors: []
  }

  console.log('🚀 Iniciando migração de livros para Supabase + Storage...')

  for (const book of mockBooks) {
    try {
      console.log(`📚 Processando livro: ${book.title}`)

      // 1. Preparar dados do livro
      const bookData = {
        id: book.id,
        title: book.title,
        author: book.author,
        slug: book.id, // Será gerado automaticamente pelo trigger
        description: book.description,
        cover_url: book.cover_image,
        total_views: book.total_views,
        total_chapters: book.total_chapters,
        status: book.status,
        is_original: false, // Livros mockados não são originais
        is_premium: true, // Por padrão, livros são premium
        created_at: book.created_at,
        updated_at: book.updated_at
      }

      // 2. Upsert do livro
      const { error: bookError } = await supabase
        .from('books')
        .upsert(bookData, { onConflict: 'id' })

      if (bookError) {
        result.errors.push(`Erro ao inserir livro ${book.title}: ${bookError.message}`)
        continue
      }

      result.booksProcessed++
      console.log(`✅ Livro ${book.title} inserido/atualizado`)

      // 3. Processar capítulos
      const chapters = mockChapters[book.id] || []
      console.log(`📖 Processando ${chapters.length} capítulos...`)

      for (const chapter of chapters) {
        try {
          // 3.1. Gerar preview (primeiros 400 caracteres)
          const previewText = chapter.content
            ? chapter.content.substring(0, 400) + '...'
            : ''

          // 3.2. Preparar conteúdo completo para o Storage
          const chapterContent = {
            bookId: book.id,
            chapterIndex: chapter.chapter_number,
            title: chapter.title,
            content: chapter.content
          }

          // 3.3. Definir path no Storage
          const storagePath = `${book.id}/chapter_${chapter.chapter_number}.json`

          // 3.4. Upload para o Storage
          const { error: uploadError } = await supabase.storage
            .from('chapters')
            .upload(storagePath, JSON.stringify(chapterContent, null, 2), {
              contentType: 'application/json',
              upsert: true // Sobrescrever se já existir
            })

          if (uploadError) {
            result.errors.push(
              `Erro ao fazer upload do capítulo ${chapter.chapter_number} do livro ${book.title}: ${uploadError.message}`
            )
            continue
          }

          // 3.5. Preparar dados do capítulo para o banco
          const chapterData = {
            id: chapter.id,
            book_id: book.id,
            chapter_number: chapter.chapter_number,
            title: chapter.title,
            content: null, // Não salvar conteúdo completo no Postgres
            preview_text: previewText,
            content_storage_path: storagePath,
            views: chapter.views,
            is_premium: chapter.is_premium,
            created_at: chapter.created_at,
            updated_at: chapter.created_at
          }

          // 3.6. Upsert do capítulo
          const { error: chapterError } = await supabase
            .from('chapters')
            .upsert(chapterData, { onConflict: 'id' })

          if (chapterError) {
            result.errors.push(
              `Erro ao inserir capítulo ${chapter.chapter_number} do livro ${book.title}: ${chapterError.message}`
            )
            continue
          }

          result.chaptersProcessed++
          
          // Log a cada 10 capítulos
          if (chapter.chapter_number % 10 === 0) {
            console.log(`  ✅ ${chapter.chapter_number} capítulos processados...`)
          }
        } catch (chapterError: any) {
          result.errors.push(
            `Erro ao processar capítulo ${chapter.chapter_number} do livro ${book.title}: ${chapterError.message}`
          )
        }
      }

      console.log(`✅ Todos os capítulos de ${book.title} processados`)
    } catch (bookError: any) {
      result.errors.push(`Erro ao processar livro ${book.title}: ${bookError.message}`)
      result.success = false
    }
  }

  console.log('\n📊 Resumo da migração:')
  console.log(`✅ Livros processados: ${result.booksProcessed}/${mockBooks.length}`)
  console.log(`✅ Capítulos processados: ${result.chaptersProcessed}`)
  console.log(`❌ Erros: ${result.errors.length}`)

  if (result.errors.length > 0) {
    console.log('\n❌ Erros encontrados:')
    result.errors.forEach((error, index) => {
      console.log(`${index + 1}. ${error}`)
    })
    result.success = false
  }

  return result
}
