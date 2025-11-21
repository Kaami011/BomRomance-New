import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { stripe, STRIPE_PLANS, PlanType } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    // 🔐 1. Obter user logado do Supabase com cookies (ESSENCIAL!)
    const supabase = createRouteHandlerClient({ cookies })

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("❌ Erro de autenticação no checkout:", authError)
      return NextResponse.json(
        { error: "Não autenticado" },
        { status: 401 }
      )
    }

    // 🔎 2. Ler o corpo (planType enviado pelo front / Lasy)
    const body = await request.json()
    const planType = body.planType as PlanType

    if (!planType || !STRIPE_PLANS[planType]) {
      return NextResponse.json(
        { error: "Plano inválido" },
        { status: 400 }
      )
    }

    const priceId = STRIPE_PLANS[planType]

    // 🎯 3. Criar sessão de checkout com Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: user.email || undefined,
      client_reference_id: user.id,
      metadata: {
        userId: user.id,
        userEmail: user.email || "",
        planType,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/assinatura/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/assinatura?cancelled=1`,
    })

    // 🔗 4. Retornar URL do checkout
    return NextResponse.json(
      { url: session.url },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ Erro no endpoint de checkout:", error)

    let errorMessage = "Erro ao criar checkout"

    if (error?.type === "StripeInvalidRequestError") {
      errorMessage = "Erro na configuração do Stripe. Verifique Price IDs."
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
