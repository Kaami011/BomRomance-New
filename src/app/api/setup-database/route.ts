import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-client'

export async function POST() {
  try {
    const supabase = createClient()

    // SQL para configurar as políticas RLS
    const setupSQL = `
      -- Habilitar RLS
      ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
      ALTER TABLE books ENABLE ROW LEVEL SECURITY;
      ALTER TABLE book_categories ENABLE ROW LEVEL SECURITY;
      ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

      -- Políticas para CATEGORIES
      DROP POLICY IF EXISTS "Permitir leitura pública de categorias" ON categories;
      CREATE POLICY "Permitir leitura pública de categorias" ON categories FOR SELECT TO public USING (true);

      DROP POLICY IF EXISTS "Permitir inserção de categorias" ON categories;
      CREATE POLICY "Permitir inserção de categorias" ON categories FOR INSERT TO public WITH CHECK (true);

      DROP POLICY IF EXISTS "Permitir atualização de categorias" ON categories;
      CREATE POLICY "Permitir atualização de categorias" ON categories FOR UPDATE TO public USING (true) WITH CHECK (true);

      -- Políticas para BOOKS
      DROP POLICY IF EXISTS "Permitir leitura pública de livros" ON books;
      CREATE POLICY "Permitir leitura pública de livros" ON books FOR SELECT TO public USING (true);

      DROP POLICY IF EXISTS "Permitir inserção de livros" ON books;
      CREATE POLICY "Permitir inserção de livros" ON books FOR INSERT TO public WITH CHECK (true);

      DROP POLICY IF EXISTS "Permitir atualização de livros" ON books;
      CREATE POLICY "Permitir atualização de livros" ON books FOR UPDATE TO public USING (true) WITH CHECK (true);

      -- Políticas para BOOK_CATEGORIES
      DROP POLICY IF EXISTS "Permitir leitura pública de book_categories" ON book_categories;
      CREATE POLICY "Permitir leitura pública de book_categories" ON book_categories FOR SELECT TO public USING (true);

      DROP POLICY IF EXISTS "Permitir inserção de book_categories" ON book_categories;
      CREATE POLICY "Permitir inserção de book_categories" ON book_categories FOR INSERT TO public WITH CHECK (true);

      DROP POLICY IF EXISTS "Permitir atualização de book_categories" ON book_categories;
      CREATE POLICY "Permitir atualização de book_categories" ON book_categories FOR UPDATE TO public USING (true) WITH CHECK (true);

      -- Políticas para CHAPTERS
      DROP POLICY IF EXISTS "Permitir leitura pública de capítulos" ON chapters;
      CREATE POLICY "Permitir leitura pública de capítulos" ON chapters FOR SELECT TO public USING (true);

      DROP POLICY IF EXISTS "Permitir inserção de capítulos" ON chapters;
      CREATE POLICY "Permitir inserção de capítulos" ON chapters FOR INSERT TO public WITH CHECK (true);

      DROP POLICY IF EXISTS "Permitir atualização de capítulos" ON chapters;
      CREATE POLICY "Permitir atualização de capítulos" ON chapters FOR UPDATE TO public USING (true) WITH CHECK (true);
    `

    // Tentar executar o SQL
    const { error } = await supabase.rpc('exec_sql', { sql: setupSQL })

    if (error) {
      // Se não tiver a função exec_sql, retornar instruções manuais
      return NextResponse.json({
        success: false,
        error: 'Configuração automática não disponível',
        message: 'Por favor, use o método manual copiando o SQL e executando no Supabase SQL Editor.'
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Banco de dados configurado com sucesso! Agora você pode usar o sistema de seed.'
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      message: 'Use o método manual copiando o SQL e executando no Supabase SQL Editor.'
    })
  }
}
