import { createClient } from '@/lib/supabase-client'
import { mockBooks } from '@/data/mockBooks'
import { getMockChapters } from '@/data/mockChapters'

/**
 * Script para popular o banco de dados com os 28 livros mockados
 * Inclui livros completos com capítulos e categorias
 */

export async function seedBooksToDatabase() {
  const supabase = createClient()
  
  console.log('🚀 Iniciando inserção de livros no banco de dados...')
  
  try {
    // 1. Criar categorias únicas primeiro
    const uniqueCategories = new Map<string, any>()
    
    mockBooks.forEach(book => {
      book.categories?.forEach(cat => {
        if (!uniqueCategories.has(cat.slug)) {
          uniqueCategories.set(cat.slug, {
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            description: cat.description
          })
        }
      })
    })
    
    console.log(`📁 Inserindo ${uniqueCategories.size} categorias...`)
    
    const categoryResults = []
    for (const category of uniqueCategories.values()) {
      const { data, error } = await supabase
        .from('categories')
        .upsert(category, { onConflict: 'slug' })
        .select()
      
      if (error) {
        console.error(`❌ Erro ao inserir categoria ${category.name}:`, error.message)
        categoryResults.push({ success: false, name: category.name, error: error.message })
      } else {
        console.log(`✅ Categoria inserida: ${category.name}`)
        categoryResults.push({ success: true, name: category.name })
      }
    }
    
    // 2. Inserir livros
    console.log(`\n📚 Inserindo ${mockBooks.length} livros...`)
    
    const bookResults = []
    for (const book of mockBooks) {
      // Preparar dados do livro
      const bookData = {
        id: book.id,
        title: book.title,
        slug: book.slug || book.id,
        author: book.author,
        description: book.description,
        cover_url: book.coverUrl,
        total_views: book.totalViews,
        total_chapters: book.totalChapters,
        status: book.status,
        created_at: book.createdAt,
        updated_at: book.updatedAt
      }
      
      // Inserir livro
      const { data: insertedBook, error: bookError } = await supabase
        .from('books')
        .upsert(bookData, { onConflict: 'id' })
        .select()
      
      if (bookError) {
        console.error(`❌ Erro ao inserir livro "${book.title}":`, bookError.message)
        bookResults.push({ success: false, title: book.title, error: bookError.message })
        continue
      }
      
      console.log(`✅ Livro inserido: ${book.title}`)
      
      // 3. Associar categorias ao livro
      if (book.categories && book.categories.length > 0) {
        for (const category of book.categories) {
          const { error: categoryError } = await supabase
            .from('book_categories')
            .upsert({
              book_id: book.id,
              category_id: category.id
            }, { onConflict: 'book_id,category_id' })
          
          if (categoryError) {
            console.error(`❌ Erro ao associar categoria "${category.name}" ao livro "${book.title}":`, categoryError.message)
          }
        }
      }
      
      // 4. Inserir capítulos do livro
      const chapters = getMockChapters(book.id)
      
      if (chapters.length > 0) {
        console.log(`   📖 Inserindo ${chapters.length} capítulos para "${book.title}"...`)
        
        // Inserir capítulos em lote (mais eficiente)
        const chapterBatch = chapters.map(chapter => ({
          id: chapter.id,
          book_id: chapter.book_id,
          chapter_number: chapter.chapter_number,
          title: chapter.title,
          content: chapter.content,
          views: chapter.views,
          is_premium: chapter.is_premium,
          created_at: chapter.created_at
        }))
        
        const { error: chapterError } = await supabase
          .from('chapters')
          .upsert(chapterBatch, { onConflict: 'id' })
        
        if (chapterError) {
          console.error(`   ❌ Erro ao inserir capítulos:`, chapterError.message)
        } else {
          console.log(`   ✅ ${chapters.length} capítulos inseridos`)
        }
      }
      
      bookResults.push({ success: true, title: book.title, chaptersCount: chapters.length })
    }
    
    console.log('\n✨ Processo concluído!')
    console.log(`📊 Resumo:`)
    console.log(`   - ${categoryResults.filter(r => r.success).length}/${uniqueCategories.size} categorias inseridas`)
    console.log(`   - ${bookResults.filter(r => r.success).length}/${mockBooks.length} livros inseridos`)
    
    const totalChapters = bookResults.reduce((sum, r) => sum + (r.chaptersCount || 0), 0)
    console.log(`   - ${totalChapters} capítulos inseridos`)
    
    return {
      success: true,
      categoriesCount: categoryResults.filter(r => r.success).length,
      booksCount: bookResults.filter(r => r.success).length,
      chaptersCount: totalChapters,
      details: {
        categories: categoryResults,
        books: bookResults
      }
    }
    
  } catch (error) {
    console.error('❌ Erro fatal durante o processo:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

// Executar se chamado diretamente
if (typeof window === 'undefined') {
  seedBooksToDatabase()
}
