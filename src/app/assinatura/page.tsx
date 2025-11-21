'use client'

/**
 * Página de Planos de Assinatura
 *
 * Exibe os 3 planos disponíveis (mensal, trimestral, anual)
 * com design moderno seguindo a identidade Bom Romance (rosa e branco).
 */

import { useState, useEffect, Suspense } from 'react'
import { Check, Sparkles, Crown, Heart } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

type PlanType = 'monthly' | 'quarterly' | 'annual'

type Plan = {
  id: PlanType
  name: string
  price: string
  period: string
  description: string
  highlight?: boolean
  icon: typeof Heart
  features: string[]
  badge?: string
}

const PLANS: Plan[] = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: 'R$ 14,97',
    period: '/mês',
    description: 'Perfeito para começar',
    icon: Heart,
    features: [
      'Acesso ilimitado a todos os livros',
      'Novos capítulos toda semana',
      'Leitura sem anúncios',
      'Cancelamento simples e rápido',
    ],
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: 'R$ 39,90',
    period: '/3 meses',
    description: 'Melhor custo-benefício',
    icon: Sparkles,
    highlight: true,
    badge: 'Recomendado',
    features: [
      'Tudo do plano Mensal',
      'Economia especial no período',
      'Acesso antecipado a novos títulos',
      'Conteúdos e histórias exclusivas',
    ],
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 'R$ 129,90',
    period: '/ano',
    description: 'Para quem ama viver histórias',
    icon: Crown,
    badge: 'Mais vantajoso',
    features: [
      'Tudo do plano Trimestral',
      'Maior economia no longo prazo',
      'Prioridade em futuros lançamentos',
      'Brindes e benefícios especiais',
    ],
  },
]

function AssinaturaContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [loading, setLoading] = useState<PlanType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    const cancelled = searchParams.get('cancelled')
    const success = searchParams.get('success')

    if (cancelled) {
      setMessage('Você cancelou o pagamento. Se tiver dúvidas, pode tentar novamente ou falar com nosso suporte.')
    } else if (success) {
      setMessage('Assinatura realizada com sucesso! Em instantes seu acesso será atualizado.')
    }
  }, [searchParams])

  async function handleSubscribe(planType: PlanType) {
    setError(null)
    setMessage(null)
    setLoading(planType)

    try {
      console.log('🚀 Iniciando processo de assinatura para:', planType)

      // 1) Verificar autenticação no cliente
      const { data: { user } } = await supabase.auth.getUser()

      if (!user || !user.email) {
        console.log('❌ Usuário não autenticado, redirecionando para login')
        router.push(`/login?redirect=/assinatura&plan=${planType}`)
        return
      }

      console.log('✅ Usuário autenticado:', { id: user.id, email: user.email })

      // 2) Chamar API de checkout enviando também userId e userEmail
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planType,
          userId: user.id,
          userEmail: user.email,
        }),
        credentials: 'include',
      })

      console.log('📡 Resposta do servidor:', res.status, res.statusText)

      if (!res.ok) {
        let errorMessage = 'Erro ao criar sessão de checkout.'

        try {
          const errorData = await res.json()
          if (errorData?.error) {
            errorMessage = errorData.error
          }
        } catch {
          // ignore JSON parse error
        }

        if (res.status === 401) {
          console.log('❌ API retornou 401, redirecionando para login')
          router.push(`/login?redirect=/assinatura&plan=${planType}`)
          return
        }

        throw new Error(errorMessage)
      }

      const data = await res.json()
      console.log('✅ Dados recebidos:', data)

      if (data?.url) {
        console.log('🔗 Redirecionando para Stripe Checkout:', data.url)
        window.location.href = data.url
      } else {
        throw new Error('URL de checkout não recebida.')
      }
    } catch (error: any) {
      console.error('❌ Erro ao processar assinatura:', error)
      setError(error?.message || 'Erro ao processar assinatura. Tente novamente.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE5EC]">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16">
        <header className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1 text-sm text-pink-600 shadow-sm mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Planos de assinatura Bom Romance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Leia sem limites, viva cada romance
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o plano que combina com você e tenha acesso ilimitado às histórias mais envolventes,
            intensas e apaixonantes da plataforma.
          </p>
        </header>

        {message && (
          <div className="max-w-3xl mx-auto mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {message}
          </div>
        )}

        {error && (
          <div className="max-w-3xl mx-auto mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <section className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const Icon = plan.icon
            const isLoading = loading === plan.id

            return (
              <div
                key={plan.id}
                className={[
                  'relative flex flex-col rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur',
                  plan.highlight
                    ? 'border-pink-300 shadow-pink-100 scale-[1.02]'
                    : 'border-pink-100',
                ].join(' ')}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4 flex items-center justify-between gap-2">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      {plan.name}
                      {plan.highlight && (
                        <span className="inline-flex items-center rounded-full bg-pink-100 px-2 py-0.5 text-[11px] font-medium text-pink-700">
                          Popular
                        </span>
                      )}
                    </h2>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <div className="rounded-full bg-pink-50 p-3 text-pink-500">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-5">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1">{plan.period}</span>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-gray-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-pink-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isLoading}
                  className={[
                    'mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2',
                    plan.highlight
                      ? 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-500'
                      : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-50 focus:ring-pink-400',
                    isLoading ? 'opacity-70 cursor-not-allowed' : '',
                  ].join(' ')}
                >
                  {isLoading ? 'Redirecionando…' : 'Assinar agora'}
                </button>
              </div>
            )
          })}
        </section>

        <p className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          Pagamento processado com segurança pela Stripe. Você poderá cancelar sua assinatura a qualquer momento
          diretamente nas configurações da sua conta.
        </p>

        <div className="mt-4 text-center text-xs text-gray-400">
          <Link href="/" className="underline hover:text-gray-600">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function AssinaturaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE5EC] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF2D55] mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando planos...</p>
          </div>
        </div>
      }
    >
      <AssinaturaContent />
    </Suspense>
  )
}
