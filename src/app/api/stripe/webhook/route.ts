/**
 * Stripe Webhook Endpoint
 * 
 * Processa eventos do Stripe e atualiza assinaturas no Supabase.
 * SEMPRE vincula assinaturas ao user_id através do client_reference_id.
 */

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { upsertSubscription, updateSubscriptionStatus } from '@/lib/subscriptions'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Assinatura do webhook ausente' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    // Validar assinatura do webhook
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    console.error('Erro ao validar webhook:', error)
    return NextResponse.json(
      { error: `Webhook Error: ${error.message}` },
      { status: 400 }
    )
  }

  try {
    // Processar eventos
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // IMPORTANTE: Obter userId do client_reference_id (vinculado ao Supabase)
        const userId = session.client_reference_id || session.metadata?.userId

        if (!userId) {
          console.error('userId não encontrado na sessão')
          return NextResponse.json({ error: 'userId ausente' }, { status: 400 })
        }

        const customerId = session.customer as string
        const subscriptionId = session.subscription as string
        const planType = session.metadata?.planType as 'monthly' | 'quarterly' | 'annual'

        if (!subscriptionId || !planType) {
          console.error('Dados da assinatura incompletos')
          return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 })
        }

        // Buscar detalhes da assinatura no Stripe
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)

        // Criar/atualizar assinatura no Supabase vinculada ao user_id
        await upsertSubscription({
          userId: userId,
          stripeCustomerId: customerId,
          stripeSubscriptionId: subscriptionId,
          planType: planType,
          status: subscription.status,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000),
        })

        console.log(`✅ Assinatura criada para usuário ${userId}`)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription

        await updateSubscriptionStatus(
          subscription.id,
          subscription.status,
          new Date(subscription.current_period_end * 1000)
        )

        console.log(`✅ Assinatura ${subscription.id} atualizada: ${subscription.status}`)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription

        await updateSubscriptionStatus(
          subscription.id,
          'canceled'
        )

        console.log(`✅ Assinatura ${subscription.id} cancelada`)
        break
      }

      default:
        console.log(`Evento não tratado: ${event.type}`)
    }

    return NextResponse.json({ received: true })
    
  } catch (error: any) {
    console.error('Erro ao processar webhook:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
