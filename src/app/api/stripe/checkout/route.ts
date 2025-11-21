import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_PLANS, PlanType } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    // 1) Ler dados enviados pelo front
    const body = await request.json()

    const planType = body.planType as PlanType
    const userId = body.userId as string | undefined
    const userEmail = body.userEmail as string | undefined

    if (!planType || !(planType in STRIPE_PLANS)) {
      return NextResponse.json(
        { error: 'Plano inválido.' },
        { status: 400 }
      )
    }

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: 'Usuário não informado.' },
        { status: 400 }
      )
    }

    const priceId = STRIPE_PLANS[planType]

    // 2) Criar cliente no Stripe (ou reaproveitar o email)
    const customer = await stripe.customers.create({
      email: userEmail,
      metadata: {
        supabaseUserId: userId,
        planType,
      },
    })

    const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin

    // 3) Criar sessão de checkout de assinatura
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer: customer.id,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        planType,
        userEmail,
        userId,
      },
      success_url: `${origin}/assinatura/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/assinatura?cancelled=1`,
    })

    // 4) Retornar URL do checkout
    return NextResponse.json(
      { url: session.url },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Erro no endpoint de checkout:', error)

    let errorMessage = 'Erro ao criar checkout'

    if (error?.type === 'StripeInvalidRequestError') {
      errorMessage = 'Erro na configuração do Stripe. Verifique os Price IDs.'
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
