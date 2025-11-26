/**
 * Utilitário para geração de slugs a partir de títulos de livros
 * 
 * Padrão:
 * - Tudo minúsculo
 * - Sem acentos
 * - Sem caracteres especiais
 * - Espaços viram hífens
 * - Múltiplos hífens viram apenas um
 */

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * Retorna o caminho completo para a capa de um livro
 * baseado no título transformado em slug
 * 
 * @param title - Título do livro
 * @returns Caminho da imagem (ex: /images/books/desejo-proibido.jpg)
 */
export function getBookCoverPath(title: string, ext: string): string {
  const slug = generateSlug(title)
  return `/images/books/${slug}.${ext}`
}
