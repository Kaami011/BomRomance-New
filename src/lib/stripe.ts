/**
 * Stripe Client Configuration
 * 
 * Cliente do Stripe para processar pagamentos e assinaturas.
 * Usado nos endpoints de API para criar checkout sessions e processar webhooks.
 */

import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY não está configurada')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
})

// Price IDs dos planos de assinatura
export const STRIPE_PLANS = {
  monthly: 'price_1SV4JJ1OX1wPZ0uVT7wIAfqp',
  quarterly: 'price_1SV4Ne1OX1wPZ0uVfOPv8XK1',
  annual: 'price_1STEsv1OX1wPZ0uVB79Q3UPr',
} as const

export const STRIPE_PRODUCT_ID = 'prod_TRyFEzzjPeCdte'

export type PlanType = keyof typeof STRIPE_PLANS
