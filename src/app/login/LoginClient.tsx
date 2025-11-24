'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginClient() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const [showResetForm, setShowResetForm] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || '/'
  const planType = searchParams.get('plan')

  // Verificar se usuário já está logado ao carregar a página
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        // Usuário já está logado, redirecionar
        let finalRedirectUrl = redirectUrl
        if (planType && redirectUrl.includes('/assinatura')) {
          finalRedirectUrl = `${redirectUrl}?plan=${planType}`
        }
        router.push(finalRedirectUrl)
        router.refresh()
      }
    }
    checkSession()
  }, [redirectUrl, planType, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError('Email ou senha incorretos.')
        setLoading(false)
      } else if (data.session) {
        // Login bem-sucedido, aguardar sessão ser estabelecida
        console.log('✅ Login bem-sucedido, sessão estabelecida')
        
        // Construir URL de redirecionamento com o plano se existir
        let finalRedirectUrl = redirectUrl
        if (planType && redirectUrl.includes('/assinatura')) {
          finalRedirectUrl = `${redirectUrl}?plan=${planType}`
        }
        
        console.log('✅ Redirecionando para:', finalRedirectUrl)
        
        // Aguardar um pouco para garantir que a sessão foi estabelecida
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Redireciona para a URL especificada
        router.push(finalRedirectUrl)
        router.refresh()
      }
    } catch (err) {
      console.error('Erro no login:', err)
      setError('Erro inesperado. Tente novamente.')
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validar email
    if (!email || !email.includes('@')) {
      setError('Por favor, insira um email válido.')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) {
        console.error('Erro ao enviar email de recuperação:', error)
        setError('Erro ao enviar email de recuperação. Verifique se o email está correto.')
      } else {
        setResetSent(true)
        console.log('✅ Email de recuperação enviado com sucesso para:', email)
      }
    } catch (err) {
      console.error('Erro inesperado:', err)
      setError('Erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  if (showResetForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Link href="/">
              <h1 className="text-3xl font-bold text-[#FF2D55] mb-2 cursor-pointer hover:text-[#E0254A] transition">
                Bom Romance
              </h1>
            </Link>
            <p className="text-gray-600">Recuperar senha</p>
          </div>

          {!resetSent ? (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent transition"
                  placeholder="seu@email.com"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Enviaremos um link de recuperação para este email.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF2D55] text-white py-3 px-4 rounded-lg hover:bg-[#E0254A] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {loading ? 'Enviando...' : 'Enviar link de recuperação'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowResetForm(false)
                  setError('')
                  setResetSent(false)
                }}
                className="w-full text-gray-600 hover:text-[#FF2D55] transition text-sm"
              >
                Voltar para o login
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                <p className="font-medium mb-1">Link de recuperação enviado!</p>
                <p>Verifique seu email <strong>{email}</strong> e clique no link para redefinir sua senha.</p>
                <p className="mt-2 text-xs">Não esqueça de verificar a caixa de spam.</p>
              </div>
              <button
                onClick={() => {
                  setShowResetForm(false)
                  setResetSent(false)
                  setError('')
                }}
                className="w-full bg-[#FF2D55] text-white py-3 px-4 rounded-lg hover:bg-[#E0254A] transition font-medium"
              >
                Voltar para o login
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-3xl font-bold text-[#FF2D55] mb-2 cursor-pointer hover:text-[#E0254A] transition">
              Bom Romance
            </h1>
          </Link>
          <p className="text-gray-600">Entre na sua conta</p>
          {planType && (
            <p className="text-sm text-[#FF2D55] mt-2">
              Faça login para continuar com sua assinatura
            </p>
          )}
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent transition"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              onClick={() => {
                setShowResetForm(true)
                setError('')
              }}
              className="text-sm text-[#FF2D55] hover:underline"
            >
              Esqueci minha senha
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF2D55] text-white py-3 px-4 rounded-lg hover:bg-[#E0254A] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Não tem conta?{' '}
            <Link href="/register" className="text-[#FF2D55] hover:underline font-medium">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
