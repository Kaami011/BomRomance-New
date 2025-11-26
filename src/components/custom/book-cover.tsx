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
 * Componente único de capa de livro.
 * 
 * ✅ Usa SEMPRE imagem estática em /public/images/books
 * ✅ Mantém proporção de capa de livro
 * ✅ Tem fallback bonito (gradient), nunca fundo preto "bugado"
 * ✅ Pode ser reutilizado em todas as páginas (Home, Explorar, Ranking, Livro)
 */
export function BookCover({
  title,
  className,
  showOverlay = true,
}: BookCoverProps) {
  const [hasError, setHasError] = useState(false)

  const staticCoverPath = getBookCoverPathFromTitle(title)

  // Se der erro na imagem, usamos fallback ilustrado
  const src = hasError ? null : staticCoverPath

  return (
    <div
      className={cn(
        // base: proporção vertical de livro + visual padrão
        'relative w-full h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-xl shadow-md',
        'bg-gradient-to-br from-[#111827] to-[#020617]',
        className
      )}
    >
      {src && (
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      )}

      {/* Fallback visual se a imagem não existir ou falhar */}
      {(!src || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6]">
          <span className="text-white text-4xl font-bold mb-2 drop-shadow">
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
