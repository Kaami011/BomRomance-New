import Link from 'next/link'
import { Eye, Star } from 'lucide-react'
import type { Book } from '@/lib/types'
import { createBookSlug } from '@/lib/supabase'
import { BookCover } from './book-cover'

interface BookCardProps {
  book: Book
  rank?: number
  showRank?: boolean
}

export default function BookCard({ book, rank, showRank = false }: BookCardProps) {
  const bookSlug = createBookSlug(book.title, book.id)
  
  return (
    <Link href={`/livro/${bookSlug}`} className="group">
      <div className="relative">
        {/* Rank Badge */}
        {showRank && rank && (
          <div className="absolute -top-2 -left-2 z-10">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg
              ${rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
              ${rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' : ''}
              ${rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : ''}
              ${rank > 3 ? 'bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6]' : ''}
            `}>
              {rank}
            </div>
          </div>
        )}

        {/* Book Cover - Componente único (sem coverUrl) */}
        <div className="mb-3">
          <BookCover 
            title={book.title}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Book Info */}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#FF2D55] transition">
            {book.title}
          </h3>
          
          <p className="text-sm text-gray-600">{book.author}</p>
          
          {book.description && (
            <p className="text-xs text-gray-500 line-clamp-2">{book.description}</p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{book.totalViews.toLocaleString()}</span>
            </div>
            
            {book.averageRating && book.averageRating > 0 && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{book.averageRating.toFixed(1)}</span>
              </div>
            )}
            
            <span className="text-gray-400">•</span>
            <span>{book.totalChapters} caps</span>
          </div>

          {/* Categories */}
          {book.categories && book.categories.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {book.categories.slice(0, 2).map((category) => (
                <span
                  key={category.id}
                  className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
