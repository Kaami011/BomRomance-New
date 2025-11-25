'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Loader2, Database, CheckCircle2, XCircle, Copy, Check } from 'lucide-react'

export default function SetupDatabasePage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message?: string
    error?: string
  } | null>(null)
  const [copied, setCopied] = useState(false)

  const sqlScript = `-- Execute este SQL no Supabase SQL Editor

-- 1. Habilitar RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;

-- 2. Políticas para CATEGORIES
DROP POLICY IF EXISTS "Permitir leitura pública de categorias" ON categories;
CREATE POLICY "Permitir leitura pública de categorias" ON categories FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Permitir inserção de categorias" ON categories;
CREATE POLICY "Permitir inserção de categorias" ON categories FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir atualização de categorias" ON categories;
CREATE POLICY "Permitir atualização de categorias" ON categories FOR UPDATE TO public USING (true) WITH CHECK (true);

-- 3. Políticas para BOOKS
DROP POLICY IF EXISTS "Permitir leitura pública de livros" ON books;
CREATE POLICY "Permitir leitura pública de livros" ON books FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Permitir inserção de livros" ON books;
CREATE POLICY "Permitir inserção de livros" ON books FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir atualização de livros" ON books;
CREATE POLICY "Permitir atualização de livros" ON books FOR UPDATE TO public USING (true) WITH CHECK (true);

-- 4. Políticas para BOOK_CATEGORIES
DROP POLICY IF EXISTS "Permitir leitura pública de book_categories" ON book_categories;
CREATE POLICY "Permitir leitura pública de book_categories" ON book_categories FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Permitir inserção de book_categories" ON book_categories;
CREATE POLICY "Permitir inserção de book_categories" ON book_categories FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir atualização de book_categories" ON book_categories;
CREATE POLICY "Permitir atualização de book_categories" ON book_categories FOR UPDATE TO public USING (true) WITH CHECK (true);

-- 5. Políticas para CHAPTERS
DROP POLICY IF EXISTS "Permitir leitura pública de capítulos" ON chapters;
CREATE POLICY "Permitir leitura pública de capítulos" ON chapters FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Permitir inserção de capítulos" ON chapters;
CREATE POLICY "Permitir inserção de capítulos" ON chapters FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir atualização de capítulos" ON chapters;
CREATE POLICY "Permitir atualização de capítulos" ON chapters FOR UPDATE TO public USING (true) WITH CHECK (true);`

  const handleCopySQL = () => {
    navigator.clipboard.writeText(sqlScript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleAutoSetup = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/setup-database', {
        method: 'POST'
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: 'Erro ao executar configuração automática'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            🔧 Configurar Banco de Dados
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Configure as permissões necessárias no Supabase para o sistema funcionar
          </p>
        </div>

        {/* Método 1: Automático */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Método 1: Configuração Automática (Recomendado)
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tenta configurar automaticamente as permissões via API
              </p>
            </div>
          </div>

          <Button
            onClick={handleAutoSetup}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Configurando...
              </>
            ) : (
              <>
                <Database className="w-5 h-5 mr-2" />
                Configurar Automaticamente
              </>
            )}
          </Button>

          {result && (
            <div className={`p-4 rounded-lg ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {result.success ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`font-medium ${result.success ? 'text-green-800' : 'text-red-800'}`}>
                    {result.success ? 'Sucesso!' : 'Erro'}
                  </p>
                  <p className={`text-sm ${result.success ? 'text-green-700' : 'text-red-700'}`}>
                    {result.message || result.error}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Método 2: Manual */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Copy className="w-8 h-8 text-indigo-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Método 2: Configuração Manual
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Copie e execute o SQL diretamente no Supabase SQL Editor
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Script SQL para configuração:
              </p>
              <Button
                onClick={handleCopySQL}
                variant="outline"
                size="sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar SQL
                  </>
                )}
              </Button>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                {sqlScript}
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
              📋 Passos para executar manualmente:
            </p>
            <ol className="text-sm text-blue-800 dark:text-blue-200 list-decimal list-inside space-y-1">
              <li>Acesse seu projeto no Supabase</li>
              <li>Vá em <strong>SQL Editor</strong> no menu lateral</li>
              <li>Clique em <strong>"New query"</strong></li>
              <li>Cole o SQL copiado acima</li>
              <li>Clique em <strong>"Run"</strong> para executar</li>
              <li>Aguarde a confirmação de sucesso</li>
            </ol>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start gap-3">
            <div className="text-yellow-600 text-2xl">⚠️</div>
            <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Por que isso é necessário?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>O Supabase usa <strong>Row Level Security (RLS)</strong> para proteger dados</li>
                <li>Por padrão, RLS bloqueia todas as operações de inserção/leitura</li>
                <li>Este script cria <strong>políticas permissivas</strong> que permitem operações públicas</li>
                <li>Após executar, o sistema de seed funcionará corretamente</li>
                <li className="text-red-600 dark:text-red-400 font-medium">
                  ⚠️ Para produção, ajuste as políticas conforme suas necessidades de segurança
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Próximos passos após configurar:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Volte para a página <a href="/admin/seed" className="text-blue-600 hover:underline font-medium">/admin/seed</a></li>
                <li>Clique em "Iniciar Inserção"</li>
                <li>Aguarde o processo completar</li>
                <li>Verifique se os livros aparecem no site</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
