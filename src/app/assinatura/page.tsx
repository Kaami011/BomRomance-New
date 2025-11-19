'use client'

/**
 * Página de Planos de Assinatura
 * 
 * Exibe os 3 planos disponíveis (mensal, trimestral, anual)
 * com design moderno seguindo a identidade Bom Romance (rosa e branco).
 */

import { useState } from 'react'
import { Check, Sparkles, Crown, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type PlanType = 'monthly' | 'quarterly' | 'annual'

interface Plan {
  id: PlanType
  name: string
  price: string
  pricePerMonth?: string
  period: string
  description: string
  badge?: string
  badgeColor?: string
  icon: any
  features: string[]
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
      'Suporte prioritário',
      'Cancele quando quiser',
    ],
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: 'R$ 38,91',
    pricePerMonth: 'R$ 12,97/mês',
    period: '/3 meses',
    description: 'Mais popular',
    badge: 'Mais Popular',
    badgeColor: 'from-[#FF2D55] to-[#FF6B9D]',
    icon: Sparkles,
    features: [
      'Todos os benefícios do plano mensal',
      'Economize 17% no valor total',
      'Conteúdo exclusivo trimestral',
      'Acesso antecipado a novos livros',
      'Badge especial no perfil',
    ],
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 'R$ 131,64',
    pricePerMonth: 'R$ 10,97/mês',
    period: '/ano',
    description: 'Melhor custo-benefício',
    badge: 'Melhor Oferta',
    badgeColor: 'from-[#8B5CF6] to-[#A78BFA]',
    icon: Crown,
    features: [
      'Todos os benefícios anteriores',
      'Economize 33% no valor total',
      'Conteúdo exclusivo anual',
      'Participação em eventos VIP',
      'Badge premium no perfil',
      'Brindes exclusivos',
    ],
  },
]

export default function AssinaturaPage() {
  const [loading, setLoading] = useState<PlanType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubscribe(planType: PlanType) {
    setError(null)
    setLoading(planType)

    try {
      console.log('🚀 Iniciando processo de assinatura para:', planType)
      
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planType }),
        credentials: 'include', // IMPORTANTE: Garante que cookies sejam enviados
      })

      console.log('📡 Resposta do servidor:', res.status, res.statusText)

      if (!res.ok) {
        if (res.status === 401) {
          console.log('❌ Não autenticado, redirecionando para login')
          router.push('/login?redirect=/assinatura')
          return
        }
        
        const errorData = await res.json()
        console.error('❌ Erro do servidor:', errorData)
        throw new Error(errorData.error || 'Erro ao criar checkout')
      }

      const data = await res.json()
      console.log('✅ Dados recebidos:', data)
      
      if (data.url) {
        console.log('🔗 Redirecionando para Stripe:', data.url)
        window.location.href = data.url
      } else {
        throw new Error('URL de checkout não recebida')
      }
    } catch (error: any) {
      console.error('❌ Erro ao processar assinatura:', error)
      setError(error.message || 'Erro ao processar assinatura. Tente novamente.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE5EC]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Assinatura <span className="text-[#FF2D55]">Bom Romance</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Desbloqueie acesso ilimitado a todos os capítulos, conteúdo exclusivo e muito mais
          </p>
          
          {/* Error Message */}
          {error && (
            <div className="mt-4 max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const Icon = plan.icon
            const isPopular = plan.id === 'quarterly'
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isPopular ? 'ring-2 ring-[#FF2D55]' : ''
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-0 right-0 bg-gradient-to-r ${plan.badgeColor} text-white px-4 py-1 rounded-bl-lg text-sm font-semibold`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${plan.badgeColor || 'from-[#FF2D55] to-[#FF6B9D]'} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    {plan.pricePerMonth && (
                      <p className="text-sm text-gray-500 mt-1">{plan.pricePerMonth}</p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={loading !== null}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#FF2D55] to-[#FF6B9D] text-white hover:opacity-90'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loading === plan.id ? 'Processando...' : 'Assinar Agora'}
                  </button>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#FF2D55] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ / Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h4>
                <p className="text-gray-600">Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Como funciona o período gratuito?</h4>
                <p className="text-gray-600">Os primeiros 3 capítulos de cada livro são gratuitos para todos os usuários.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quais formas de pagamento são aceitas?</h4>
                <p className="text-gray-600">Aceitamos cartões de crédito e débito através do Stripe, com total segurança.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#FF2D55] hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  )
}
