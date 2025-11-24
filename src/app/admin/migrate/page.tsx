'use client'

import { useState } from 'react'
import { Database, Upload, CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function MigratePage() {
  const [migrating, setMigrating] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleMigrate = async () => {
    setMigrating(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/admin/migrate-books', {
        method: 'POST'
      })

      const data = await response.json()

      if (response.ok) {
        setResult(data)
      } else {
        setError(data.message || 'Erro ao executar migração')
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao conectar com o servidor')
    } finally {
      setMigrating(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Migração de Livros</h1>
              <p className="text-gray-600">Migrar livros mockados para Supabase + Storage</p>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">O que esta migração faz:</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Lê todos os livros de <code className="bg-blue-100 px-1 rounded">src/data/mockBooks.ts</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Insere/atualiza metadados na tabela <code className="bg-blue-100 px-1 rounded">public.books</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Salva conteúdo completo dos capítulos no Supabase Storage (bucket: chapters)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Insere/atualiza metadados dos capítulos na tabela <code className="bg-blue-100 px-1 rounded">public.chapters</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Gera preview de cada capítulo (primeiros 400 caracteres)</span>
              </li>
            </ul>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Atenção:</h3>
            <ul className="space-y-1 text-sm text-yellow-800">
              <li>• Esta operação pode levar alguns minutos (muitos capítulos para processar)</li>
              <li>• Certifique-se de que as migrations SQL foram executadas no Supabase</li>
              <li>• A migração é idempotente (pode ser executada múltiplas vezes)</li>
            </ul>
          </div>

          {/* Button */}
          <button
            onClick={handleMigrate}
            disabled={migrating}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {migrating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Migrando... Aguarde</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Iniciar Migração</span>
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 space-y-4">
              {result.success ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-900">Migração Concluída com Sucesso!</h3>
                  </div>
                  <div className="text-sm text-green-800 space-y-1">
                    <p>✅ Livros processados: {result.data.booksProcessed}</p>
                    <p>✅ Capítulos processados: {result.data.chaptersProcessed}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-orange-900">Migração Concluída com Avisos</h3>
                  </div>
                  <div className="text-sm text-orange-800 space-y-1">
                    <p>✅ Livros processados: {result.data.booksProcessed}</p>
                    <p>✅ Capítulos processados: {result.data.chaptersProcessed}</p>
                    <p>⚠️ Erros encontrados: {result.data.errors.length}</p>
                  </div>
                </div>
              )}

              {result.data.errors && result.data.errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Erros:</h4>
                  <div className="max-h-64 overflow-y-auto">
                    <ul className="space-y-1 text-sm text-red-800">
                      {result.data.errors.map((err: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600">•</span>
                          <span>{err}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold text-red-900">Erro na Migração</h3>
              </div>
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📋 Instruções Passo a Passo</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Execute as migrations SQL no Supabase</h3>
              <p className="text-sm text-gray-600 mb-2">
                Acesse o SQL Editor do Supabase e execute os arquivos:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• <code className="bg-gray-100 px-1 rounded">src/lib/migrations/001_optimize_chapters_schema.sql</code></li>
                <li>• <code className="bg-gray-100 px-1 rounded">src/lib/migrations/002_create_storage_buckets.sql</code></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Clique em "Iniciar Migração"</h3>
              <p className="text-sm text-gray-600">
                O processo irá migrar todos os livros e capítulos automaticamente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Verifique os resultados</h3>
              <p className="text-sm text-gray-600">
                Após a conclusão, verifique no Supabase:
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Tabela <code className="bg-gray-100 px-1 rounded">books</code> deve ter os livros</li>
                <li>• Tabela <code className="bg-gray-100 px-1 rounded">chapters</code> deve ter os capítulos</li>
                <li>• Bucket <code className="bg-gray-100 px-1 rounded">chapters</code> deve ter os arquivos JSON</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Teste o site</h3>
              <p className="text-sm text-gray-600">
                Acesse a página Explorar e teste a leitura dos capítulos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
