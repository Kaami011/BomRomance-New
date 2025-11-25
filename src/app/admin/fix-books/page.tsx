'use client'

import { useState } from 'react'
import { BookOpen, CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function FixBooksPage() {
  const [loading, setLoading] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [success, setSuccess] = useState<boolean | null>(null)

  const handleSeed = async () => {
    setLoading(true)
    setLogs([])
    setSuccess(null)

    try {
      const response = await fetch('/api/seed-specific-books', {
        method: 'POST'
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setLogs(data.logs || ['Seed concluído com sucesso!'])
      } else {
        setSuccess(false)
        setLogs([`Erro: ${data.error}`])
      }
    } catch (error) {
      setSuccess(false)
      setLogs([`Erro ao executar seed: ${error instanceof Error ? error.message : 'Erro desconhecido'}`])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#FFE5E5] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Corrigir Livros Específicos
              </h1>
              <p className="text-gray-600">
                Adicionar os 6 livros com capítulos completos ao banco de dados
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">📚 Livros que serão adicionados:</h3>
            <ul className="space-y-1 text-blue-800">
              <li>• Amor Inesperado do Bilionário (45 capítulos)</li>
              <li>• Desejo Proibido (42 capítulos)</li>
              <li>• Obsessão do Mafioso (48 capítulos)</li>
              <li>• A Luna Renascida (50 capítulos)</li>
              <li>• Não Pode Fugir de Mim (40 capítulos)</li>
              <li>• A Vingança de Judy (38 capítulos)</li>
            </ul>
          </div>

          <button
            onClick={handleSeed}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <BookOpen className="w-5 h-5" />
                Adicionar Livros ao Banco de Dados
              </>
            )}
          </button>
        </div>

        {/* Resultado */}
        {success !== null && (
          <div className={`bg-white rounded-2xl shadow-xl p-8 ${success ? 'border-2 border-green-500' : 'border-2 border-red-500'}`}>
            <div className="flex items-center gap-3 mb-4">
              {success ? (
                <>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h2 className="text-2xl font-bold text-green-900">Sucesso!</h2>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold text-red-900">Erro</h2>
                </>
              )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                {logs.join('\n')}
              </pre>
            </div>

            {success && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2">✅ Próximos passos:</p>
                <ol className="list-decimal list-inside space-y-1 text-green-700">
                  <li>Os livros agora estão disponíveis no site</li>
                  <li>Todos os capítulos podem ser lidos</li>
                  <li>Capítulos 1-3 são gratuitos, demais são premium</li>
                  <li>Acesse a página inicial para ver os livros</li>
                </ol>
              </div>
            )}
          </div>
        )}

        {/* Informações Técnicas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">ℹ️ Informações Técnicas</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>O que este processo faz:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cria ou atualiza os 6 livros específicos no banco de dados</li>
              <li>Adiciona todos os capítulos com conteúdo completo e rico</li>
              <li>Configura capítulos 1-3 como gratuitos, demais como premium</li>
              <li>Associa categorias apropriadas a cada livro</li>
              <li>Gera conteúdo narrativo extenso para cada capítulo</li>
            </ul>

            <p className="mt-4">
              <strong>Segurança:</strong> Se os livros já existirem, eles serão atualizados sem perda de dados de visualizações ou avaliações.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
