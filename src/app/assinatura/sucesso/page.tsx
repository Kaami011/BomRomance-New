'use client'

/**
 * Página de Sucesso da Assinatura
 * 
 * Exibida após o usuário completar o checkout com sucesso.
 */

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, BookOpen, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function AssinaturaSucessoPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sessionId = searchParams.get('session_id')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE5EC]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FF2D55] border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE5EC] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Assinatura Confirmada! 💗
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            Agora você tem acesso ilimitado a todos os capítulos completos, conteúdo exclusivo e muito mais!
          </p>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-[#FF2D55]/10 to-[#8B5CF6]/10 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF2D55]" />
              O que você desbloqueou:
            </h3>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#FF2D55] rounded-full"></div>
                Acesso ilimitado a todos os livros
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#FF2D55] rounded-full"></div>
                Novos capítulos toda semana
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#FF2D55] rounded-full"></div>
                Leitura sem anúncios
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#FF2D55] rounded-full"></div>
                Conteúdo exclusivo para assinantes
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#FF2D55] rounded-full"></div>
                Suporte prioritário
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              <BookOpen className="w-5 h-5" />
              Explorar Livros
            </Link>
            
            {user && (
              <Link
                href="/minhas-leituras"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#FF2D55] hover:text-[#FF2D55] transition"
              >
                Minhas Leituras
              </Link>
            )}
          </div>

          {/* Session ID (optional) */}
          {sessionId && (
            <p className="mt-8 text-xs text-gray-400">
              ID da sessão: {sessionId}
            </p>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Você receberá um email de confirmação em breve.
          </p>
          <p className="mt-2">
            Dúvidas? Entre em contato com nosso{' '}
            <a href="mailto:suporte@bomromance.com.br" className="text-[#FF2D55] hover:underline">
              suporte
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
