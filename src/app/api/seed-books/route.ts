import { NextResponse } from 'next/server'
import { seedBooksToDatabase } from '@/scripts/seedBooks'

export async function POST() {
  try {
    const result = await seedBooksToDatabase()
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 })
  }
}
