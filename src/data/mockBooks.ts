import type { Book } from '@/lib/supabase'

// Livros mockados para demonstração (não salvos no banco de dados)
export const mockBooks: Book[] = [
  // 1. Bilionário - Romance
  {
    id: 'mock-book-1',
    title: 'Amor Inesperado do Bilionário',
    author: 'Sofia Mendes',
    description: 'Ele jurou nunca mais amaria ninguém e focaria apenas no trabalho, mas depois que viu ela pela primeira vez soube que ela seria dele para sempre.\n\nDaniel Carvalho é um bilionário implacável que construiu seu império do zero. Após uma traição devastadora, ele jurou que nunca mais deixaria o amor atrapalhar seus planos. Seu coração se tornou tão frio quanto os números em suas planilhas.\n\nMas tudo muda quando ele conhece Isabella, uma jovem arquiteta contratada para redesenhar seu escritório. Seus olhos brilhantes e sua paixão pelo trabalho despertam algo que ele pensava estar morto há anos.\n\nAgora, Daniel precisa escolher entre manter suas barreiras ou arriscar tudo por uma chance de ser feliz novamente.',
    cover_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    total_views: 125000,
    total_chapters: 85,
    status: 'ongoing',
    created_at: new Date('2024-01-15').toISOString(),
    updated_at: new Date('2024-11-15').toISOString(),
    average_rating: 4.7,
    categories: [
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor' },
      { id: 'cat-bilionario', name: 'Bilionário', slug: 'bilionario', description: 'Romances com bilionários' }
    ]
  },

  // 2. MM Romance
  {
    id: 'mock-book-2',
    title: 'A Vingança de Judy',
    author: 'Alexandre Costa',
    description: 'O destino de Judy a rejeitou para se casar com o Presidente Lycan – a filha de Gavin. Como se isso não bastasse, ele arruinou a família dela e tentou torná-la sua amante secreta! A resposta de Judy? "Prefiro dormir com seu sogro do que ficar com você!"\n\nGavin é conhecido por seu poder, riqueza e por ser o playboy supremo que nunca dorme com a mesma mulher duas vezes. Mas Judy está prestes a quebrar todas as suas regras... repetidas vezes.\n\nEm um mundo onde o poder e a riqueza ditam as regras, Judy se recusa a ser apenas mais uma vítima. Determinada a se vingar daquele que destruiu sua vida, ela embarca em um jogo perigoso de sedução e manipulação.\n\nMas o que acontece quando a vingança se transforma em algo muito mais intenso? Quando o ódio se confunde com desejo? Judy descobrirá que algumas batalhas deixam cicatrizes que nunca cicatrizam... e outras despertam paixões impossíveis de controlar.',
    cover_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    total_views: 98000,
    total_chapters: 72,
    status: 'ongoing',
    created_at: new Date('2024-02-20').toISOString(),
    updated_at: new Date('2024-11-18').toISOString(),
    average_rating: 4.5,
    categories: [
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor' },
      { id: 'cat-drama', name: 'Drama', slug: 'drama', description: 'Histórias dramáticas' }
    ]
  },

  // 3. MM Romance - Intenso
  {
    id: 'mock-book-3',
    title: 'Não Pode Fugir de Mim',
    author: 'Lucas Ferreira',
    description: '"O que está feito, está feito! Vamos esquecer isso!" Ele disse, agindo com indiferença, embora estivesse encolhido de medo, pois algo lhe dizia que o estranho à sua frente não pretendia soltá-lo.\n\nA carranca do homem se intensificou e Hayden jurou que a temperatura no quarto aumentou várias vezes. Depois de conquistar seu coração e roubar seu primeiro, esse garoto queria se esquivar da responsabilidade, o que irritou Zenos.\n\n"Você quer fugir de mim?" Ele perguntou, irritado, e de repente Hayden se viu sob o homem sem nem perceber como.\n\nZenos é um homem poderoso e possessivo que não aceita ser rejeitado. Quando Hayden tenta fugir após uma noite que mudou tudo, ele descobre que não há como escapar de alguém que já decidiu que você é dele.\n\n"Você não pode fugir de mim... Você é meu", Zenos rosnou possessivamente.\n\nUma história intensa de paixão, possessividade e um amor que não aceita limites.',
    cover_image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
    total_views: 156000,
    total_chapters: 95,
    status: 'ongoing',
    created_at: new Date('2024-03-10').toISOString(),
    updated_at: new Date('2024-11-19').toISOString(),
    average_rating: 4.8,
    categories: [
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor' },
      { id: 'cat-drama', name: 'Drama', slug: 'drama', description: 'Histórias dramáticas' }
    ]
  },

  // 4. Lobisomem
  {
    id: 'mock-book-4',
    title: 'O Alfa e Seu Destino Humano',
    author: 'Marina Silva',
    description: 'Lobisomem alfa se apaixona por uma mulher normal e faz de tudo para poder tê-la, se afastando de sua manada para ter uma vida com a mulher.\n\nKael é o Alfa mais poderoso de sua geração, respeitado e temido por todos. Sua vida sempre foi guiada pelo dever para com sua matilha – até o dia em que ele a viu.\n\nEmily é uma humana comum, sem conhecimento do mundo sobrenatural que existe nas sombras. Ela trabalha como veterinária e dedica sua vida a cuidar de animais feridos.\n\nQuando seus caminhos se cruzam, Kael sente algo que nunca imaginou ser possível: o vínculo de destino com uma humana. Mas aceitar esse amor significa escolher entre seu coração e seu dever como Alfa.\n\nDisposto a abandonar tudo por ela, Kael embarca em uma jornada que desafiará as leis ancestrais de sua espécie. Porque quando um Alfa encontra seu verdadeiro par, nem mesmo a própria natureza pode separá-los.\n\nMas o mundo dos lobisomens não perdoa facilmente aqueles que quebram as tradições...',
    cover_image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop',
    total_views: 203000,
    total_chapters: 110,
    status: 'complete',
    created_at: new Date('2023-11-05').toISOString(),
    updated_at: new Date('2024-10-30').toISOString(),
    average_rating: 4.9,
    categories: [
      { id: 'cat-lobisomem', name: 'Lobisomem', slug: 'lobisomem', description: 'Histórias de lobisomens' },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor' },
      { id: 'cat-fantasia', name: 'Fantasia', slug: 'fantasia', description: 'Mundos fantásticos' }
    ]
  },

  // 5. Lobisomem - Vingança
  {
    id: 'mock-book-5',
    title: 'A Luna Renascida',
    author: 'Beatriz Almeida',
    description: 'Amy era a luna de sua matilha, carregando um filhote em seu ventre quando o alfa a traiu e tirou sua vida e a de seu filhote. Ao acordar seis anos antes do previsto, ela decidiu mudar tudo. A vingança seria seu foco principal.\n\nTraída pelo homem que jurou protegê-la, Amy perdeu tudo: sua posição, seu filho e sua vida. Mas o destino lhe concedeu uma segunda chance.\n\nAo despertar seis anos no passado, antes de conhecer aquele que se tornaria seu algoz, Amy tem a oportunidade de reescrever sua história. Desta vez, ela não será a luna ingênua e apaixonada. Desta vez, ela será a predadora.\n\nCom o conhecimento do futuro e uma sede insaciável por vingança, Amy planeja meticulosamente a queda daquele que a traiu. Mas em sua jornada, ela descobrirá segredos obscuros sobre sua própria matilha e encontrará aliados inesperados.\n\nE talvez, apenas talvez, ela encontre um amor verdadeiro – um que não a destrua, mas que a fortaleça.\n\nA vingança é um prato que se serve frio... e Amy tem todo o tempo do mundo.',
    cover_image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
    total_views: 187000,
    total_chapters: 88,
    status: 'ongoing',
    created_at: new Date('2024-04-12').toISOString(),
    updated_at: new Date('2024-11-18').toISOString(),
    average_rating: 4.8,
    categories: [
      { id: 'cat-lobisomem', name: 'Lobisomem', slug: 'lobisomem', description: 'Histórias de lobisomens' },
      { id: 'cat-drama', name: 'Drama', slug: 'drama', description: 'Histórias dramáticas' },
      { id: 'cat-fantasia', name: 'Fantasia', slug: 'fantasia', description: 'Mundos fantásticos' }
    ]
  },

  // 6. Máfia
  {
    id: 'mock-book-6',
    title: 'Obsessão do Mafioso',
    author: 'Rafael Santos',
    description: 'Mulher finge ser prostituta para desafiar a mãe, mas acaba virando obsessão de um mafioso possessivo.\n\nIsabella sempre foi a filha perfeita – até o dia em que decidiu que não seria mais. Cansada das expectativas sufocantes de sua mãe e da vida que foi planejada para ela, Isabella toma uma decisão impulsiva: fingir ser uma prostituta de luxo por uma noite, apenas para provar que pode fazer suas próprias escolhas.\n\nO que ela não esperava era chamar a atenção de Dante Moretti, o temido chefe da máfia italiana. Um homem perigoso, poderoso e acostumado a conseguir tudo o que quer.\n\nE ele a quer.\n\nQuando Dante descobre a verdade sobre Isabella, em vez de perdê-la de vista, sua obsessão apenas cresce. Ele não se importa com quem ela é ou de onde veio – ela será dele, não importa o preço.\n\nPresa em um jogo perigoso entre desejo e perigo, Isabella descobrirá que algumas mentiras têm consequências que duram para sempre. E que quando um mafioso decide que você é dele, não há lugar no mundo onde você possa se esconder.\n\nPorque Dante Moretti sempre consegue o que quer... e ele quer Isabella.',
    cover_image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
    total_views: 245000,
    total_chapters: 102,
    status: 'ongoing',
    created_at: new Date('2024-05-08').toISOString(),
    updated_at: new Date('2024-11-19').toISOString(),
    average_rating: 4.9,
    categories: [
      { id: 'cat-mafia', name: 'Máfia', slug: 'mafia', description: 'Histórias de máfia' },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor' },
      { id: 'cat-suspense', name: 'Suspense', slug: 'suspense', description: 'Histórias de suspense' }
    ]
  }
]

// Função para obter todos os livros mockados
export function getMockBooks(): Book[] {
  return mockBooks
}

// Função para obter um livro mockado por ID
export function getMockBookById(id: string): Book | undefined {
  return mockBooks.find(book => book.id === id)
}

// Função para obter livros mockados por categoria
export function getMockBooksByCategory(categorySlug: string): Book[] {
  return mockBooks.filter(book => 
    book.categories?.some(cat => cat.slug === categorySlug)
  )
}

// Função para buscar livros mockados
export function searchMockBooks(query: string): Book[] {
  const lowerQuery = query.toLowerCase()
  return mockBooks.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.description.toLowerCase().includes(lowerQuery)
  )
}
