'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface BookCoverProps {
  title: string
  coverUrl: string | null
  className?: string
  showOverlay?: boolean
}

/**
 * Componente único para renderização de capas de livros
 * 
 * 🔴 PADRÃO ÚNICO: Use este componente em TODOS os lugares
 * - Recebe coverUrl (string | null)
 * - Fallback automático para imagem padrão
 * - Tratamento de erro de carregamento
 * - Overlay de hover opcional
 */
export function BookCover({ title, coverUrl, className, showOverlay = true }: BookCoverProps) {
  const [error, setError] = useState(false)

  const finalUrl = !error && coverUrl ? coverUrl : '/images/default-book-cover.svg'

  return (
    <div className={cn("relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-200 shadow-md", className)}>
      {!error && coverUrl ? (
        <img
          src={finalUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => {
            console.error('❌ Erro ao carregar capa:', title, coverUrl)
            setError(true)
          }}
        />
      ) : (
        // Fallback visual quando não há capa ou erro
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6] p-4">
          <span className="text-white text-4xl font-bold mb-2">{title[0]}</span>
          <span className="text-white text-xs text-center line-clamp-2">{title}</span>
        </div>
      )}
      
      {/* Overlay de hover */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      )}
    </div>
  )
}
