'use client'

import { Search, User, Menu, X, LogOut, BookOpen, UserCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/constants'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    // Escutar mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsProfileOpen(false)
    router.push('/')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/explorar?busca=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setIsSearchOpen(false)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b2fad407-19b0-49d7-aacd-17b2f99bef8a.png" 
              alt="Bom Romance Logo" 
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-[#FF2D55]">Bom Romance</span>
          </Link>

          {/* Barra de Busca Central (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar livros, autores..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#FF2D55] transition">
              Início
            </Link>
            
            {/* Dropdown Categorias */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#FF2D55] transition flex items-center">
                Categorias
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 grid grid-cols-1 gap-1">
                  {CATEGORIES.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categoria/${category.slug}`}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF2D55] transition"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/ranking" className="text-gray-700 hover:text-[#FF2D55] transition">
              Ranking
            </Link>
            
            <Link href="/explorar" className="text-gray-700 hover:text-[#FF2D55] transition">
              Explorar
            </Link>

            {/* Botão Entrar ou Ícone de Perfil */}
            {!user ? (
              <Link 
                href="/login" 
                className="bg-[#FF2D55] text-white px-6 py-2 rounded-lg hover:bg-[#E0254A] transition"
              >
                Entrar
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="text-gray-700 hover:text-[#FF2D55] transition"
                >
                  <User className="w-6 h-6" />
                </button>

                {/* Dropdown do Perfil */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="py-2">
                      <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-200">
                        {user.email}
                      </div>
                      <Link
                        href="/minhas-leituras"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF2D55] transition"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Minhas Leituras
                      </Link>
                      <hr className="my-2 border-gray-200" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side Icons (Mobile) */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-[#FF2D55] transition"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User (apenas se logado) */}
            {user && (
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-700 hover:text-[#FF2D55] transition"
              >
                <User className="w-5 h-5" />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#FF2D55] transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Mobile (expandable) */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200 md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar livros, autores..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF2D55] focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-[#FF2D55] transition">
              Início
            </Link>
            
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">Categorias</p>
              <div className="pl-4 space-y-2">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categoria/${category.slug}`}
                    className="block text-sm text-gray-700 hover:text-[#FF2D55] transition"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/ranking" className="block text-gray-700 hover:text-[#FF2D55] transition">
              Ranking
            </Link>
            
            <Link href="/explorar" className="block text-gray-700 hover:text-[#FF2D55] transition">
              Explorar
            </Link>

            {!user ? (
              <Link 
                href="/login" 
                className="block bg-[#FF2D55] text-white px-6 py-2 rounded-lg hover:bg-[#E0254A] transition text-center"
              >
                Entrar
              </Link>
            ) : (
              <>
                <Link href="/minhas-leituras" className="block text-gray-700 hover:text-[#FF2D55] transition">
                  Minhas Leituras
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-red-600 hover:text-red-700 transition"
                >
                  Sair
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Dropdown Mobile do Perfil */}
      {isProfileOpen && user && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <div className="text-sm text-gray-500 pb-2 border-b border-gray-200">
              {user.email}
            </div>
            <Link
              href="/minhas-leituras"
              onClick={() => setIsProfileOpen(false)}
              className="flex items-center text-gray-700 hover:text-[#FF2D55] transition"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Minhas Leituras
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center w-full text-red-600 hover:text-red-700 transition"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
