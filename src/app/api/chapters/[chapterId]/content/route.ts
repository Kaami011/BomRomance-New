/**
 * API Route: Buscar conteúdo completo de um capítulo do Storage
 * 
 * GET /api/chapters/[chapterId]/content
 * 
 * Busca o conteúdo completo do capítulo no Supabase Storage
 * Valida se o usuário tem permissão para acessar (assinatura para capítulos premium)
 */

import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { getUserSubscription } from '@/lib/subscriptions'

export async function GET(
  request: NextRequest,
  { params }: { params: { chapterId: string } }
) {
  try {
    const chapterId = params.chapterId

    // 1. Buscar informações do capítulo no banco
    const { data: chapter, error: chapterError } = await supabase
      .from('chapters')
      .select('*, book:books(id, title)')
      .eq('id', chapterId)
      .single()

    if (chapterError || !chapter) {
      return NextResponse.json(
        { error: 'Capítulo não encontrado' },
        { status: 404 }
      )
    }

    // 2. Verificar se o capítulo é gratuito (primeiros 3 capítulos)
    const isFreeChapter = chapter.is_premium === false || chapter.chapter_number <= 3

    // 3. Se não for gratuito, verificar assinatura
    if (!isFreeChapter) {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session?.user) {
        return NextResponse.json(
          { error: 'Autenticação necessária para acessar este capítulo' },
          { status: 401 }
        )
      }

      const subscription = await getUserSubscription(session.user.id)
      const hasActiveSubscription = subscription !== null && 
                                    (subscription.status === 'active' || subscription.status === 'trialing')

      if (!hasActiveSubscription) {
        return NextResponse.json(
          { 
            error: 'Assinatura necessária para acessar este capítulo',
            requiresSubscription: true
          },
          { status: 403 }
        )
      }
    }

    // 4. Se não tem path do Storage, retornar conteúdo do banco (fallback)
    if (!chapter.content_storage_path) {
      return NextResponse.json({
        success: true,
        data: {
          bookId: chapter.book_id,
          chapterIndex: chapter.chapter_number,
          title: chapter.title,
          content: chapter.content || 'Conteúdo não disponível'
        }
      })
    }

    // 5. Buscar conteúdo do Storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from('chapters')
      .download(chapter.content_storage_path)

    if (storageError) {
      console.error('Erro ao buscar do Storage:', storageError)
      
      // Fallback: retornar conteúdo do banco se houver
      if (chapter.content) {
        return NextResponse.json({
          success: true,
          data: {
            bookId: chapter.book_id,
            chapterIndex: chapter.chapter_number,
            title: chapter.title,
            content: chapter.content
          }
        })
      }

      return NextResponse.json(
        { error: 'Erro ao carregar conteúdo do capítulo' },
        { status: 500 }
      )
    }

    // 6. Converter blob para texto
    const contentText = await storageData.text()
    const contentJson = JSON.parse(contentText)

    // 7. Retornar conteúdo
    return NextResponse.json({
      success: true,
      data: contentJson
    })

  } catch (error: any) {
    console.error('Erro ao buscar conteúdo do capítulo:', error)
    return NextResponse.json(
      { error: 'Erro interno ao processar requisição' },
      { status: 500 }
    )
  }
}
