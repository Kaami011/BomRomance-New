'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Check, X } from 'lucide-react'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isValidSession, setIsValidSession] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)
  const router = useRouter()

  // Verificar se há uma sessão válida de recuperação de senha
  useEffect(() => {
    const checkRecoverySession = async () => {
      try {
        // Verificar se há um hash na URL (token de recuperação)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const type = hashParams.get('type')

        console.log('🔍 Verificando sessão de recuperação...', { type, hasToken: !!accessToken })

        if (type === 'recovery' && accessToken) {
          // Há um token de recuperação válido
          console.log('✅ Token de recuperação detectado')
          setIsValidSession(true)
        } else {
          // Verificar se já há uma sessão ativa
          const { data: { session } } = await supabase.auth.getSession()
          
          if (session) {
            console.log('✅ Sessão ativa encontrada')
            setIsValidSession(true)
          } else {
            console.log('❌ Nenhuma sessão válida encontrada')
            setError('Link de recuperação inválido ou expirado. Solicite um novo link.')
            setIsValidSession(false)
          }
        }
      } catch (err) {
        console.error('Erro ao verificar sessão:', err)
        setError('Erro ao verificar link de recuperação.')
        setIsValidSession(false)
      } finally {
        setCheckingSession(false)
      }
    }

    checkRecoverySession()
  }, [])

  // Validação de senha
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  const hasMinLength = password.length >= 8

  const isPasswordValid = hasUpperCase && hasLowerCase && hasNumber && hasSymbol && hasMinLength
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isPasswordValid) {
      setError('A senha não atende aos requisitos.')
      return
    }

    if (!passwordsMatch) {
      setError('As senhas não coincidem.')
      return
    }

    setLoading(true)
    setError('')

    try {
      console.log('🔄 Tentando atualizar senha...')
      
      const { data, error } = await supabase.auth.updateUser({
        password: password
      })

      if (error) {
        console.error('❌ Erro ao atualizar senha:', error)
        setError('Erro ao redefinir senha. O link pode ter expirado. Solicite um novo link.')
      } else {
        console.log('✅ Senha atualizada com sucesso!')
        setSuccess(true)
        setTimeout(() => {
          router.push('/login')
        }, 2000)
      }
    } catch (err) {
      console.error('❌ Erro inesperado:', err)
      setError('Erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  // Tela de carregamento enquanto verifica sessão
  if (checkingSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF2D55] mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando link de recuperação...</p>
        </div>
      </div>
    )
  }

  // Tela de erro se sessão inválida
  if (!isValidSession) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Link Inválido</h2>
          <p className="text-gray-600 mb-6">{error || 'O link de recuperação é inválido ou expirou.'}</p>
          <Link 
            href="/login"
            className="inline-block bg-[#FF2D55] text-white py-3 px-6 rounded-lg hover:bg-[#E0254A] transition font-medium"
          >
            Voltar para o login
          </Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Senha redefinida!</h2>
          <p className="text-gray-600 mb-6">Sua senha foi alterada com sucesso.</p>
          <p className="text-sm text-gray-500">Redirecionando para o login...</p>
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
          <p className="text-gray-600">Defina sua nova senha</p>
        </div>

        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Nova Senha
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

          {/* Checklist de Requisitos */}
          {password.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-2">Requisitos da senha:</p>
              
              <div className={`flex items-center text-sm transition-colors ${hasMinLength ? 'text-green-600' : 'text-gray-500'}`}>
                {hasMinLength ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
                Mínimo de 8 caracteres
              </div>

              <div className={`flex items-center text-sm transition-colors ${hasUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
                {hasUpperCase ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
                Pelo menos 1 letra maiúscula
              </div>

              <div className={`flex items-center text-sm transition-colors ${hasLowerCase ? 'text-green-600' : 'text-gray-500'}`}>
                {hasLowerCase ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
                Pelo menos 1 letra minúscula
              </div>

              <div className={`flex items-center text-sm transition-colors ${hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                {hasNumber ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
                Pelo menos 1 número
              </div>

              <div className={`flex items-center text-sm transition-colors ${hasSymbol ? 'text-green-600' : 'text-gray-500'}`}>
                {hasSymbol ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
                Pelo menos 1 símbolo (!@#$%^&*)
              </div>
            </div>
          )}

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Nova Senha
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent transition"
              placeholder="••••••••"
            />
          </div>

          {confirmPassword.length > 0 && (
            <div className={`flex items-center text-sm ${passwordsMatch ? 'text-green-600' : 'text-red-600'}`}>
              {passwordsMatch ? <Check className="w-4 h-4 mr-2" /> : <X className="w-4 h-4 mr-2" />}
              {passwordsMatch ? 'As senhas coincidem' : 'As senhas não coincidem'}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !isPasswordValid || !passwordsMatch}
            className="w-full bg-[#FF2D55] text-white py-3 px-4 rounded-lg hover:bg-[#E0254A] transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? 'Redefinindo...' : 'Redefinir Senha'}
          </button>
        </form>
      </div>
    </div>
  )
}
