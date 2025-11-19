/**
 * Subscription Helper Functions
 * 
 * Funções para gerenciar assinaturas de usuários no Supabase.
 * SEMPRE vincula assinaturas ao user_id do Supabase.
 */

import { supabase } from './supabase'

export interface Subscription {
  id: string
  user_id: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  plan_type: 'monthly' | 'quarterly' | 'annual'
  status: string
  current_period_end: string | null
  created_at: string
  updated_at: string
}

/**
 * Busca a assinatura ativa de um usuário
 * @param userId - ID do usuário no Supabase (auth.users)
 * @returns Assinatura ativa ou null
 */
export async function getUserSubscription(userId: string): Promise<Subscription | null> {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        // Nenhuma assinatura encontrada
        return null
      }
      throw error
    }

    return data
  } catch (error) {
    console.error('Erro ao buscar assinatura:', error)
    return null
  }
}

/**
 * Verifica se um usuário tem assinatura ativa
 * @param userId - ID do usuário no Supabase
 * @returns true se tem assinatura ativa, false caso contrário
 */
export async function hasActiveSubscription(userId: string): Promise<boolean> {
  const subscription = await getUserSubscription(userId)
  
  if (!subscription) return false
  
  // Verificar se a assinatura ainda está válida
  if (subscription.current_period_end) {
    const periodEnd = new Date(subscription.current_period_end)
    const now = new Date()
    return periodEnd > now
  }
  
  return subscription.status === 'active'
}

/**
 * Cria ou atualiza uma assinatura no Supabase
 * IMPORTANTE: Sempre vincula ao user_id do Supabase
 */
export async function upsertSubscription(data: {
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId: string
  planType: 'monthly' | 'quarterly' | 'annual'
  status: string
  currentPeriodEnd: Date
}) {
  const { error } = await supabase
    .from('subscriptions')
    .upsert({
      user_id: data.userId,
      stripe_customer_id: data.stripeCustomerId,
      stripe_subscription_id: data.stripeSubscriptionId,
      plan_type: data.planType,
      status: data.status,
      current_period_end: data.currentPeriodEnd.toISOString(),
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'stripe_subscription_id'
    })

  if (error) {
    console.error('Erro ao salvar assinatura:', error)
    throw error
  }
}

/**
 * Atualiza o status de uma assinatura pelo stripe_subscription_id
 */
export async function updateSubscriptionStatus(
  stripeSubscriptionId: string,
  status: string,
  currentPeriodEnd?: Date
) {
  const updateData: any = {
    status,
    updated_at: new Date().toISOString(),
  }

  if (currentPeriodEnd) {
    updateData.current_period_end = currentPeriodEnd.toISOString()
  }

  const { error } = await supabase
    .from('subscriptions')
    .update(updateData)
    .eq('stripe_subscription_id', stripeSubscriptionId)

  if (error) {
    console.error('Erro ao atualizar status da assinatura:', error)
    throw error
  }
}
