'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { generateSlug } from '@/lib/slug'

interface BookCoverProps {
  title: string
  className?: string
  showOverlay?: boolean
}

/**
 * NOVO BookCover com fallback inteligente:
 *
 * 🔥 Tenta várias extensões automaticamente:
 *    - .jpg
 *    - .jpeg
 *    - .png
 *    - .webp
 *
 * 🔥 Padroniza tamanho e proporção das capas
 * 🔥 Evita fundo preto bugado
 * 🔥 Mostra fallback bonito caso não encontre nenhuma imagem
 */
export function BookCover({
  title,
  className,
  showOverlay = true,
}: BookCoverProps) {

  // Extensões suportadas (ordem de prioridade)
  const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'] as const

  const [extIndex, setExtIndex] = useState(0)
  const [hasError, setHasError] = useState(false)

  // Gera slug do título (igual ao nome esperado do arquivo)
  const slug = generateSlug(title)

  // Se ainda não deu erro definitivo, tenta extensão atual
  const currentExt = EXTENSIONS[extIndex]
  const src = hasError
    ? null
    : `/images/books/${slug}.${currentExt}`

  const handleError = () => {
    if (extIndex < EXTENSIONS.length - 1) {
      // Tenta próxima extensão (jpg → jpeg → png → webp)
      setExtIndex((prev) => prev + 1)
    } else {
      // Depois de todas falharem → ativa fallback
      setHasError(true)
    }
  }

  return (
    <div
      className={cn(
        'relative w-full h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-xl shadow-md',
        'bg-gradient-to-br from-[#111827] to-[#020617]',
        className
      )}
    >
      {/* IMAGEM PRINCIPAL - tenta várias extensões */}
      {!hasError && (
        <img
          src={src!}
          alt={title}
          className="w-full h-full object-cover"
          onError={handleError}
          loading="lazy"
        />
      )}

      {/* FALLBACK - título estilizado */}
      {(hasError || !src) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6]">
          <span className="text-white text-4xl font-bold mb-2 drop-shadow">
            {title[0]}
          </span>
          <span className="text-white text-xs text-center line-clamp-2">
            {title}
          </span>
        </div>
      )}

      {/* Overlay hover */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
      )}
    </div>
  )
}
