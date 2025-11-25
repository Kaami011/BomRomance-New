'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Loader2, Database, CheckCircle2, XCircle, BookOpen, FolderTree } from 'lucide-react'

export default function SeedDatabasePage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    categoriesCount?: number
    booksCount?: number
    error?: any
  } | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`])
  }

  const handleSeed = async () => {
    setLoading(true)
    setResult(null)
    setLogs([])
    
    addLog('🚀 Iniciando processo de inserção...')
    
    try {
      const response = await fetch('/api/seed-books', {
        method: 'POST'
      })
      
      const data = await response.json()
      
      if (data.success) {
        addLog('✅ Processo concluído com sucesso!')
        addLog(`📊 ${data.categoriesCount} categorias inseridas`)
        addLog(`📚 ${data.booksCount} livros inseridos`)
        addLog(`📖 Capítulos completos adicionados`)
      } else {
        addLog('❌ Erro durante o processo')
        addLog(`Detalhes: ${JSON.stringify(data.error)}`)
      }
      
      setResult(data)
    } catch (error) {
      addLog('❌ Erro fatal ao executar')
      addLog(`Erro: ${error}`)
      setResult({ success: false, error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            🗄️ Seed Database
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Popule o banco de dados com os 28 livros mockados completos
          </p>
        </div>

        {/* Action Card */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8 text-purple-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Inserir Livros no Supabase
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Este processo irá inserir todos os livros, categorias e capítulos no banco de dados
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4">
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <FolderTree className="w-6 h-6 mx-auto mb-2 text-purple-600" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Categorias</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">14 únicas</p>
            </div>
            <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-pink-600" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Livros</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">28 completos</p>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Database className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium text-gray-900 dark:text-white">Capítulos</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">~1000+ total</p>
            </div>
          </div>

          <Button
            onClick={handleSeed}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Database className="w-5 h-5 mr-2" />
                Iniciar Inserção
              </>
            )}
          </Button>
        </Card>

        {/* Result Card */}
        {result && (
          <Card className={`p-6 ${result.success ? 'border-green-500' : 'border-red-500'}`}>
            <div className="flex items-start gap-3">
              {result.success ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              )}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold ${result.success ? 'text-green-600' : 'text-red-600'}`}>
                  {result.success ? 'Sucesso!' : 'Erro'}
                </h3>
                {result.success ? (
                  <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <p>✅ {result.categoriesCount} categorias inseridas</p>
                    <p>✅ {result.booksCount} livros inseridos</p>
                    <p>✅ Capítulos completos adicionados</p>
                    <p className="mt-3 text-green-600 font-medium">
                      🎉 Todos os livros estão agora disponíveis no banco de dados!
                    </p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-red-600">
                    {JSON.stringify(result.error)}
                  </p>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Logs Card */}
        {logs.length > 0 && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📋 Logs do Processo
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 max-h-96 overflow-y-auto">
              <code className="text-sm text-green-400 font-mono">
                {logs.map((log, index) => (
                  <div key={index} className="mb-1">
                    {log}
                  </div>
                ))}
              </code>
            </div>
          </Card>
        )}

        {/* Info Card */}
        <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="text-blue-600 text-2xl">ℹ️</div>
            <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-2">Informações importantes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Este processo usa <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">upsert</code> - livros existentes serão atualizados</li>
                <li>Categorias duplicadas serão ignoradas automaticamente</li>
                <li>Capítulos completos com conteúdo serão inseridos</li>
                <li>O processo pode levar alguns minutos para completar</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
