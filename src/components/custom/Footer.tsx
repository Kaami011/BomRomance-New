"use client";

import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[#27284B] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Coluna 1 - Logo e Redes Sociais */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BR</span>
                </div>
                <span className="text-white font-bold text-xl">Bom Romance</span>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">Siga-nos:</p>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://tiktok.com"
                    target="_blank"
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Gêneros Populares */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Gêneros Populares</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/genero/romance" className="hover:text-white transition-colors text-sm">
                    Romance
                  </Link>
                </li>
                <li>
                  <Link href="/genero/fantasia" className="hover:text-white transition-colors text-sm">
                    Fantasia
                  </Link>
                </li>
                <li>
                  <Link href="/genero/bilionarios" className="hover:text-white transition-colors text-sm">
                    Bilionários
                  </Link>
                </li>
                <li>
                  <Link href="/genero/drama" className="hover:text-white transition-colors text-sm">
                    Drama
                  </Link>
                </li>
                <li>
                  <Link href="/genero/suspense" className="hover:text-white transition-colors text-sm">
                    Suspense
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 3 - Entre em Contato */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Entre em Contato</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contato" className="hover:text-white transition-colors text-sm">
                    Entre em contato
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="hover:text-white transition-colors text-sm">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/ajuda" className="hover:text-white transition-colors text-sm">
                    Ajuda e suporte
                  </Link>
                </li>
                <li>
                  <Link href="/negocios" className="hover:text-white transition-colors text-sm">
                    Negócios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Recursos */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/autores" className="hover:text-white transition-colors text-sm">
                    Autores
                  </Link>
                </li>
                <li>
                  <Link href="/publicar" className="hover:text-white transition-colors text-sm">
                    Publicar livro
                  </Link>
                </li>
                <li>
                  <Link href="/palavras-chave" className="hover:text-white transition-colors text-sm">
                    Palavras-chave
                  </Link>
                </li>
                <li>
                  <Link href="/avaliacoes" className="hover:text-white transition-colors text-sm">
                    Avaliações
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-gray-400">
                Direitos autorais © 2025 BomRomance
              </p>
              <div className="flex gap-6">
                <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                  Termos de uso
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
