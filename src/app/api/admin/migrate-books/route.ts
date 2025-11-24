/**
 * API Route: Executar migração de livros
 * 
 * POST /api/admin/migrate-books
 * 
 * Executa a migração dos livros mockados para o Supabase + Storage
 * 
 * IMPORTANTE: Esta rota deve ser protegida em produção!
 * Adicione autenticação de admin antes de usar.
 */

import { NextResponse } from 'next/server'
import { migrateBooksToStorage } from '@/lib/migrate-books-to-storage'

export async function POST() {
  try {
    console.log('🚀 Iniciando migração via API...')
    
    const result = await migrateBooksToStorage()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Migração concluída com sucesso!',
        data: {
          booksProcessed: result.booksProcessed,
          chaptersProcessed: result.chaptersProcessed,
          errors: result.errors
        }
      }, { status: 200 })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Migração concluída com erros',
        data: {
          booksProcessed: result.booksProcessed,
          chaptersProcessed: result.chaptersProcessed,
          errors: result.errors
        }
      }, { status: 207 }) // 207 Multi-Status
    }
  } catch (error: any) {
    console.error('❌ Erro fatal na migração:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Erro fatal na migração',
      error: error.message
    }, { status: 500 })
  }
}

// GET para verificar status
export async function GET() {
  return NextResponse.json({
    message: 'Rota de migração de livros',
    usage: 'POST /api/admin/migrate-books para executar a migração',
    warning: 'Esta rota deve ser protegida em produção!'
  })
}
