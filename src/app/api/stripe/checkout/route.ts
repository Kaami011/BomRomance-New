/**
 * Stripe Checkout API Endpoint
 * 
 * Cria uma sessão de checkout do Stripe para assinatura.
 * SEMPRE vincula a assinatura ao user_id do usuário logado no Supabase.
 */

import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_PLANS, PlanType } from '@/lib/stripe'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    // 1. Obter usuário logado do Supabase usando cookies (server-side)
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set() {},
          remove() {},
        },
      }
    )

    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error('❌ Erro de autenticação:', authError)
      return NextResponse.json(
        { error: 'Usuário não autenticado. Por favor, faça login novamente.' },
        { status: 401 }
      )
    }

    console.log('✅ Usuário autenticado:', user.id, user.email)

    // 2. Obter planType do body
    const body = await request.json()
    const { planType } = body as { planType: PlanType }

    if (!planType || !STRIPE_PLANS[planType]) {
      console.error('❌ Plano inválido:', planType)
      return NextResponse.json(
        { error: 'Plano inválido' },
        { status: 400 }
      )
    }

    // 3. Obter price ID do plano
    const priceId = STRIPE_PLANS[planType]
    console.log('📦 Plano selecionado:', planType, '- Price ID:', priceId)

    // 4. Verificar variáveis de ambiente necessárias
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      console.error('❌ NEXT_PUBLIC_SITE_URL não configurada')
      return NextResponse.json(
        { error: 'Configuração do servidor incompleta' },
        { status: 500 }
      )
    }

    // 5. Criar checkout session no Stripe
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/assinatura/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/assinatura`,
      
      // IMPORTANTE: Vincular ao user_id do Supabase
      client_reference_id: user.id,
      customer_email: user.email,
      
      // Metadata para identificar o usuário no webhook
      metadata: {
        userId: user.id,
        planType: planType,
        userEmail: user.email || '',
      },
    })

    console.log('✅ Checkout session criada:', session.id)
    console.log('🔗 User ID vinculado:', user.id)

    // 6. Retornar URL da sessão
    return NextResponse.json({ url: session.url })
    
  } catch (error: any) {
    console.error('❌ Erro ao criar checkout:', error)
    
    // Mensagens de erro mais específicas
    let errorMessage = 'Erro ao criar checkout'
    
    if (error.type === 'StripeInvalidRequestError') {
      errorMessage = 'Erro na configuração do Stripe. Verifique os price IDs.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
