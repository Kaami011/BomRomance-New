'use client'

import { Search, User, Menu, X, LogOut, BookOpen, UserCircle, Crown } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/constants'
import { supabase } from '@/lib/supabase'
import { getUserSubscription } from '@/lib/subscriptions'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [subscription, setSubscription] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Verificar sessão atual
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setUser(session?.user ?? null)
      
      // Buscar assinatura se usuário logado
      if (session?.user) {
        const sub = await getUserSubscription(session.user.id)
        setSubscription(sub)
      }
    })

    // Escutar mudanças de autenticação
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null)
      
      if (session?.user) {
        const sub = await getUserSubscription(session.user.id)
        setSubscription(sub)
      } else {
        setSubscription(null)
      }
    })

    return () => authSubscription.unsubscribe()
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

  const getPlanName = (planType: string) => {
    const plans: Record<string, string> = {
      monthly: 'Mensal',
      quarterly: 'Trimestral',
      annual: 'Anual',
    }
    return plans[planType] || planType
  }

  const hasActiveSubscription = subscription && subscription.status === 'active'

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
                  className="flex items-center gap-2 text-gray-700 hover:text-[#FF2D55] transition"
                >
                  {hasActiveSubscription ? (
                    <div className="flex items-center gap-1 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                      <Crown className="w-4 h-4" />
                      <span className="hidden lg:inline">Premium</span>
                    </div>
                  ) : (
                    <User className="w-6 h-6" />
                  )}
                </button>

                {/* Dropdown do Perfil */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="text-sm text-gray-500 mb-1">{user.email}</div>
                        {hasActiveSubscription ? (
                          <div className="flex items-center gap-2 text-xs">
                            <Crown className="w-3 h-3 text-[#FF2D55]" />
                            <span className="text-[#FF2D55] font-semibold">
                              Assinante {getPlanName(subscription.plan_type)} 💖
                            </span>
                          </div>
                        ) : (
                          <div className="text-xs text-gray-500">Conta gratuita</div>
                        )}
                      </div>

                      <Link
                        href="/minhas-leituras"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#FF2D55] transition"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Minhas Leituras
                      </Link>

                      {!hasActiveSubscription && (
                        <Link
                          href="/assinatura"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-[#FF2D55] hover:bg-[#FF2D55]/5 transition font-semibold"
                        >
                          <Crown className="w-4 h-4 mr-2" />
                          Assinar Agora
                        </Link>
                      )}

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
                {hasActiveSubscription ? (
                  <Crown className="w-5 h-5 text-[#FF2D55]" />
                ) : (
                  <User className="w-5 h-5" />
                )}
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
                {!hasActiveSubscription && (
                  <Link href="/assinatura" className="block text-[#FF2D55] hover:text-[#E0254A] transition font-semibold">
                    Assinar Agora
                  </Link>
                )}
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
            <div className="pb-3 border-b border-gray-200">
              <div className="text-sm text-gray-500 mb-1">{user.email}</div>
              {hasActiveSubscription ? (
                <div className="flex items-center gap-2 text-xs">
                  <Crown className="w-3 h-3 text-[#FF2D55]" />
                  <span className="text-[#FF2D55] font-semibold">
                    Assinante {getPlanName(subscription.plan_type)} 💖
                  </span>
                </div>
              ) : (
                <div className="text-xs text-gray-500">Conta gratuita</div>
              )}
            </div>

            <Link
              href="/minhas-leituras"
              onClick={() => setIsProfileOpen(false)}
              className="flex items-center text-gray-700 hover:text-[#FF2D55] transition"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Minhas Leituras
            </Link>

            {!hasActiveSubscription && (
              <Link
                href="/assinatura"
                onClick={() => setIsProfileOpen(false)}
                className="flex items-center text-[#FF2D55] hover:text-[#E0254A] transition font-semibold"
              >
                <Crown className="w-4 h-4 mr-2" />
                Assinar Agora
              </Link>
            )}

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
