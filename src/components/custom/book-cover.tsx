'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { getBookCoverPathFromTitle } from '@/lib/slug'

interface BookCoverProps {
  title: string
  className?: string
  showOverlay?: boolean
}

/**
 * Componente único para renderização de capas de livros
 * 
 * 🔴 PADRÃO ÚNICO: Use este componente em TODOS os lugares
 * - Carrega capas estáticas de /public/images/books/
 * - Nome do arquivo baseado no slug do título
 * - Fallback automático para gradiente com inicial
 * - Tratamento de erro de carregamento
 * - Overlay de hover opcional
 * - Tamanho padronizado e responsivo
 */
export function BookCover({
  title,
  className,
  showOverlay = true,
}: BookCoverProps) {
  const [hasError, setHasError] = useState(false)

  const staticCoverPath = getBookCoverPathFromTitle(title)

  return (
    <div
      className={cn(
        'relative w-full h-[260px] sm:h-[330px] md:h-[400px] overflow-hidden rounded-lg shadow-md bg-black',
        className
      )}
    >
      {!hasError ? (
        <img
          src={staticCoverPath}
          alt={title}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6] p-4">
          <span className="text-white text-4xl font-bold mb-2">
            {title[0]}
          </span>
          <span className="text-white text-xs text-center line-clamp-2">
            {title}
          </span>
        </div>
      )}

      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      )}
    </div>
  )
}
