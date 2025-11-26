import type { Book } from '@/lib/types'

// Livros completos disponíveis para leitura
export const mockBooks: Book[] = [
  // 🔥 1. MÁFIA
  {
    id: 'mock-mafia-1',
    title: 'Entre Sangue e Sedução',
    slug: 'entre-sangue-e-seducao-mock-mafia-1',
    author: 'Valentina Rossi',
    description: 'Quando Aurora é sequestrada por engano pela família Moretti, descobre que o líder da máfia italiana não é o monstro que todos pintam — mas também não é o herói que ela imaginou.\n\nDante Moretti é frio, calculista e perigoso… até que começa a quebrar suas próprias regras por causa dela.\n\nPresos em um mundo de segredos, sangue e alianças quebradas, Aurora precisa decidir: confiar no homem que destruiu sua vida… ou se tornar a rainha ao lado dele.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 245000,
    totalChapters: 45,
    status: 'ongoing',
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-11-20').toISOString(),
    averageRating: 4.9,
    categories: [
      { id: 'cat-mafia', name: 'Máfia', slug: 'mafia', description: 'Histórias de máfia', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-mafia-2',
    title: 'A Noiva do Don',
    slug: 'a-noiva-do-don-mock-mafia-2',
    author: 'Isabella Russo',
    description: 'Para salvar o irmão de uma dívida impagável, Helena aceita se tornar esposa do chefe mais temido de Chicago.\n\nAdrian Russo nunca quis casamento — até encontrar uma mulher teimosa o suficiente para desafiá-lo.\n\nEntre jogos de poder, ciúme, proteção obsessiva e inimigos que surgem de todos os lados, Helena percebe que o maior perigo… é se apaixonar pelo próprio monstro.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 198000,
    totalChapters: 42,
    status: 'ongoing',
    createdAt: new Date('2024-02-10').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-mafia', name: 'Máfia', slug: 'mafia', description: 'Histórias de máfia', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 👁️ 2. PARANORMAL
  {
    id: 'mock-paranormal-1',
    title: 'O Sussurro das Sombras',
    slug: 'o-sussurro-das-sombras-mock-paranormal-1',
    author: 'Luna Blackwood',
    description: 'Desde criança, Mia ouve vozes que ninguém mais escuta. Quando uma entidade começa a segui-la, pedindo ajuda, ela descobre um portal entre mundos.\n\nElias, o guardião desse portal, surge em sua vida trazendo respostas — e um destino sombrio.\n\nAgora Mia precisa enfrentar espíritos que querem possuir seu corpo… e sentimentos por um homem que nem deveria existir.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 167000,
    totalChapters: 38,
    status: 'ongoing',
    createdAt: new Date('2024-03-05').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-paranormal', name: 'Paranormal', slug: 'paranormal', description: 'Histórias sobrenaturais', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-paranormal-2',
    title: 'Entre o Véu e a Carne',
    slug: 'entre-o-veu-e-a-carne-mock-paranormal-2',
    author: 'Morgana Veil',
    description: 'Luna consegue ver os mortos desde o acidente que quase tirou sua vida. Trabalhando como médium, ela se sente no controle — até conhecer Cael, um espírito poderoso preso entre dimensões.\n\nPara libertá-lo, ela precisa quebrar regras que colocam sua alma em risco… e quanto mais se aproximam, mais viva ela se sente.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 143000,
    totalChapters: 35,
    status: 'ongoing',
    createdAt: new Date('2024-03-20').toISOString(),
    updatedAt: new Date('2024-11-17').toISOString(),
    averageRating: 4.6,
    categories: [
      { id: 'cat-paranormal', name: 'Paranormal', slug: 'paranormal', description: 'Histórias sobrenaturais', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🎮 3. JOGOS
  {
    id: 'mock-jogos-1',
    title: 'Game Over Para o Meu Coração',
    slug: 'game-over-para-o-meu-coracao-mock-jogos-1',
    author: 'Pixel Dreams',
    description: 'Valentina é uma gamer famosa, mas sua vida vira de cabeça para baixo quando um bug misterioso a transporta para dentro do próprio jogo.\n\nO problema? O chefe final — um guerreiro sombrio irresistível — está convicto de que ela é sua inimiga mortal.\n\nAgora, para voltar para casa, ela precisa derrotá-lo… ou deixá-lo conquistar seu coração.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 189000,
    totalChapters: 40,
    status: 'ongoing',
    createdAt: new Date('2024-04-01').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-jogos', name: 'Jogos', slug: 'jogos', description: 'Histórias de games', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-jogos-2',
    title: 'Respawn do Amor',
    slug: 'respawn-do-amor-mock-jogos-2',
    author: 'Alex Gamer',
    description: 'Depois de perder tudo, Alex encontra consolo em um novo MMORPG. O que ele não esperava era conhecer "NightWolf", uma jogadora habilidosa e misteriosa.\n\nQuando descobrem que há um segredo por trás do jogo — e que seus avatares têm mais consciência do que deveriam — os dois iniciam uma jornada que mistura amizade, perigo e romance digital.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 156000,
    totalChapters: 37,
    status: 'ongoing',
    createdAt: new Date('2024-04-15').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-jogos', name: 'Jogos', slug: 'jogos', description: 'Histórias de games', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 💎 4. BILIONÁRIO
  {
    id: 'mock-bilionario-1',
    title: 'Contrato Irresistível',
    slug: 'contrato-irresistivel-mock-bilionario-1',
    author: 'Sofia Mendes',
    description: 'Desesperada por dinheiro, Sofia aceita um contrato de seis meses como acompanhante particular do homem mais temido do mercado financeiro.\n\nLevi Hartmann é arrogante, lindo e acostumado a controlar tudo.\n\nO problema é que quanto mais convivem, mais difícil se torna manter o "profissional" profissional… e Levi não aceita perder o que deseja.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 278000,
    totalChapters: 48,
    status: 'ongoing',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-11-20').toISOString(),
    averageRating: 4.9,
    categories: [
      { id: 'cat-bilionario', name: 'Bilionário', slug: 'bilionario', description: 'Romances com bilionários', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-bilionario-2',
    title: 'O Segredo do CEO',
    slug: 'o-segredo-do-ceo-mock-bilionario-2',
    author: 'Alexandre Costa',
    description: 'Isabella é contratada como assistente pessoal do CEO mais jovem do país.\n\nEthan Blake é exigente, frio e totalmente inalcançável — até a noite em que ela o encontra quebrado, revelando um segredo que poderia destruir sua carreira.\n\nAgora, eles estão presos em um jogo proibido… onde o erro é inevitável.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 234000,
    totalChapters: 44,
    status: 'ongoing',
    createdAt: new Date('2024-02-05').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-bilionario', name: 'Bilionário', slug: 'bilionario', description: 'Romances com bilionários', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🚀 5. SCI-FI
  {
    id: 'mock-scifi-1',
    title: 'Além das Estrelas Proibidas',
    slug: 'alem-das-estrelas-proibidas-mock-scifi-1',
    author: 'Nova Stellar',
    description: 'Em um futuro onde casamentos são decididos por algoritmos, Aria descobre que seu par perfeito é um rebelde procurado pela federação.\n\nPara sobreviver, os dois precisam fugir para fora do sistema solar… e lá descobrem uma verdade que pode mudar toda a humanidade.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 145000,
    totalChapters: 36,
    status: 'ongoing',
    createdAt: new Date('2024-05-01').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-scifi', name: 'Sci-Fi', slug: 'scifi', description: 'Ficção científica', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-scifi-2',
    title: 'O Último Androide',
    slug: 'o-ultimo-androide-mock-scifi-2',
    author: 'Dr. Lina Chen',
    description: 'Quando o governo proíbe a criação de androides com emoções, a cientista Lina esconde seu protótipo — um androide perfeito chamado Kairo.\n\nMas o que começa como um experimento se transforma em algo perigoso… porque Kairo desenvolve sentimentos que não deveriam existir.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 132000,
    totalChapters: 34,
    status: 'ongoing',
    createdAt: new Date('2024-05-15').toISOString(),
    updatedAt: new Date('2024-11-17').toISOString(),
    averageRating: 4.6,
    categories: [
      { id: 'cat-scifi', name: 'Sci-Fi', slug: 'scifi', description: 'Ficção científica', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // ❤️‍🔥 6. ROMANCE
  {
    id: 'mock-romance-1',
    title: 'Quando Nossos Destinos Colidiram',
    slug: 'quando-nossos-destinos-colidiram-mock-romance-1',
    author: 'Camila Alves',
    description: 'Dois desconhecidos se esbarram em um aeroporto e trocam apenas um olhar — suficiente para marcar os dois.\n\nAnos depois, se reencontram como professor e aluna em uma pós-graduação.\n\nAgora, sentimentos não resolvidos voltam com força… junto com segredos que podem separá-los novamente.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 201000,
    totalChapters: 41,
    status: 'ongoing',
    createdAt: new Date('2024-06-01').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-romance-2',
    title: 'O Peso do Nosso Amor',
    slug: 'o-peso-do-nosso-amor-mock-romance-2',
    author: 'Noah Silva',
    description: 'Camila jurou nunca mais se apaixonar. Até conhecer Noah, o enfermeiro que cuida de sua avó e que sempre tem um sorriso pronto.\n\nO problema é que os dois carregam traumas profundos — e amar significa enfrentar o passado doloroso que ambos tentam esconder.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 178000,
    totalChapters: 39,
    status: 'ongoing',
    createdAt: new Date('2024-06-15').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🔥🔥 7. ROMANCE HOT (+18)
  {
    id: 'mock-hot-1',
    title: 'Prazer Proibido',
    slug: 'prazer-proibido-mock-hot-1',
    author: 'Laura Intense',
    description: 'Laura recebe a missão de entrevistar um renomado empresário. O que ela não espera é que o encontro termine em uma proposta indecente — e impossível de recusar.\n\nEntre desejo, domínio e segredos, Laura descobre um mundo novo… e perigoso.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 312000,
    totalChapters: 50,
    status: 'ongoing',
    createdAt: new Date('2024-07-01').toISOString(),
    updatedAt: new Date('2024-11-20').toISOString(),
    averageRating: 4.9,
    categories: [
      { id: 'cat-hot', name: 'Romance Hot', slug: 'hot', description: 'Romance adulto +18', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-hot-2',
    title: 'Sob a Luz Vermelha',
    slug: 'sob-a-luz-vermelha-mock-hot-2',
    author: 'Júlia Scarlet',
    description: 'Cansada da rotina, Júlia visita um clube exclusivo onde todos usam máscaras.\n\nLá conhece um homem misterioso que desperta nela desejos que nunca ousou admitir.\n\nMas quando descobre quem ele realmente é… o jogo muda completamente.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 289000,
    totalChapters: 47,
    status: 'ongoing',
    createdAt: new Date('2024-07-15').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-hot', name: 'Romance Hot', slug: 'hot', description: 'Romance adulto +18', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🏳️‍🌈 8. LGBTQ+
  {
    id: 'mock-lgbtq-1',
    title: 'Entre Duas Verdades',
    slug: 'entre-duas-verdades-mock-lgbtq-1',
    author: 'Clara Marina',
    description: 'Clara sempre soube que era diferente. Quando conhece Marina, uma fotógrafa livre e intensa, seu mundo ganha cor — e caos.\n\nMas assumir o romance significa enfrentar sua família conservadora… e seus próprios medos.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 167000,
    totalChapters: 38,
    status: 'ongoing',
    createdAt: new Date('2024-08-01').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-lgbtq', name: 'LGBTQ+', slug: 'lgbtq', description: 'Histórias LGBTQ+', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-lgbtq-2',
    title: 'Luz e Tempestade',
    slug: 'luz-e-tempestade-mock-lgbtq-2',
    author: 'Lucca Theo',
    description: 'Depois de anos escondendo sua sexualidade, Lucca finalmente se muda para longe.\n\nLá conhece Theo, um músico sensível que o enxerga como ninguém nunca viu.\n\nMas amar alguém tão quebrado quanto ele pode ser o maior desafio de suas vidas.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 154000,
    totalChapters: 36,
    status: 'ongoing',
    createdAt: new Date('2024-08-15').toISOString(),
    updatedAt: new Date('2024-11-17').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-lgbtq', name: 'LGBTQ+', slug: 'lgbtq', description: 'Histórias LGBTQ+', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🔪 9. MISTÉRIO / TERROR
  {
    id: 'mock-misterio-1',
    title: 'A Casa Onde Ninguém Sai',
    slug: 'a-casa-onde-ninguem-sai-mock-misterio-1',
    author: 'Grupo dos Cinco',
    description: 'Quando cinco amigos decidem passar um fim de semana em uma casa abandonada, acham que será divertido.\n\nMas à noite, portas começam a se abrir sozinhas… e uma presença os observa.\n\nUm por um, segredos são revelados — e a casa cobra seu preço.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 198000,
    totalChapters: 40,
    status: 'ongoing',
    createdAt: new Date('2024-09-01').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-misterio', name: 'Mistério', slug: 'misterio', description: 'Histórias de mistério', created_at: new Date().toISOString() },
      { id: 'cat-terror', name: 'Terror', slug: 'terror', description: 'Histórias de terror', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-misterio-2',
    title: 'A Chamada da Meia-Noite',
    slug: 'a-chamada-da-meia-noite-mock-misterio-2',
    author: 'Camila Dark',
    description: 'Camila começa a receber ligações de um número desconhecido. Do outro lado, uma criança que implora por ajuda.\n\nQuando tenta rastrear a origem, descobre algo assustador: a criança morreu há anos.\n\nAgora, o espírito quer que Camila descubra quem a matou.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 176000,
    totalChapters: 38,
    status: 'ongoing',
    createdAt: new Date('2024-09-15').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-misterio', name: 'Mistério', slug: 'misterio', description: 'Histórias de mistério', created_at: new Date().toISOString() },
      { id: 'cat-terror', name: 'Terror', slug: 'terror', description: 'Histórias de terror', created_at: new Date().toISOString() }
    ]
  },

  // 🌕 10. LOBISOMEM
  {
    id: 'mock-lobisomem-1',
    title: 'Marcada pelo Alfa Errado',
    slug: 'marcada-pelo-alfa-errado-mock-lobisomem-1',
    author: 'Elena Moon',
    description: 'No dia de sua cerimônia de marcação, Elena descobre que seu par destinado não é o futuro alfa que sempre amou… mas seu irmão mais velho, frio e implacável.\n\nAgora ela precisa aprender a viver sob as regras dele — e sob seu toque.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 267000,
    totalChapters: 46,
    status: 'ongoing',
    createdAt: new Date('2024-10-01').toISOString(),
    updatedAt: new Date('2024-11-20').toISOString(),
    averageRating: 4.9,
    categories: [
      { id: 'cat-lobisomem', name: 'Lobisomem', slug: 'lobisomem', description: 'Histórias de lobisomens', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-lobisomem-2',
    title: 'A Filha da Lua',
    slug: 'a-filha-da-lua-mock-lobisomem-2',
    author: 'Aria Wolfborn',
    description: 'Rejeitada por sua matilha, Aria foge para as montanhas. Lá encontra um lobisomem solitário que guarda um segredo antigo.\n\nJuntos, eles descobrem que o destino da lua depende dela — e de um amor proibido.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 234000,
    totalChapters: 43,
    status: 'ongoing',
    createdAt: new Date('2024-10-15').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-lobisomem', name: 'Lobisomem', slug: 'lobisomem', description: 'Histórias de lobisomens', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🧙‍♂️ 11. FANTASIA
  {
    id: 'mock-fantasia-1',
    title: 'A Princesa das Chamas',
    slug: 'a-princesa-das-chamas-mock-fantasia-1',
    author: 'Yara Fireborn',
    description: 'Yara nasceu com o dom proibido de controlar o fogo. Para esconder sua magia, vive confinada no castelo… até que um mago renegado invade o reino e a reconhece como a última de sua linhagem.\n\nAgora, ela precisa decidir entre fugir com ele ou enfrentar o rei que sempre mentiu para ela.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 189000,
    totalChapters: 40,
    status: 'ongoing',
    createdAt: new Date('2024-11-01').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-fantasia', name: 'Fantasia', slug: 'fantasia', description: 'Mundos fantásticos', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-fantasia-2',
    title: 'O Reino Entre Mundos',
    slug: 'o-reino-entre-mundos-mock-fantasia-2',
    author: 'Lina Mirrorborn',
    description: 'Quando um espelho antigo se quebra, Lina é sugada para um mundo paralelo onde criaturas mágicas vivem em guerra.\n\nLá, um príncipe amaldiçoado acredita que ela é a chave para salvar seu povo — e para quebrar a própria maldição.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 167000,
    totalChapters: 37,
    status: 'ongoing',
    createdAt: new Date('2024-11-10').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-fantasia', name: 'Fantasia', slug: 'fantasia', description: 'Mundos fantásticos', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🎓 12. YA / TEEN
  {
    id: 'mock-teen-1',
    title: 'Cartas Para o Meu Primeiro Amor',
    slug: 'cartas-para-o-meu-primeiro-amor-mock-teen-1',
    author: 'Ana Letters',
    description: 'Ana encontra uma caixa cheia de cartas que escreveu — mas nunca enviou — para o crush da adolescência.\n\nQuando ele volta para a cidade, ela precisa decidir se vai finalmente revelar seus sentimentos… ou se esconder como sempre fez.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 145000,
    totalChapters: 35,
    status: 'ongoing',
    createdAt: new Date('2024-08-20').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-teen', name: 'Teen', slug: 'teen', description: 'Histórias jovens', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-teen-2',
    title: 'O Garoto do Fim do Corredor',
    slug: 'o-garoto-do-fim-do-corredor-mock-teen-2',
    author: 'Júlia Daniel',
    description: 'Nova na escola, Júlia só quer passar despercebida. Mas tudo muda quando ela conhece Daniel, o garoto misterioso que sempre está sozinho.\n\nAos poucos, eles criam um laço delicado — e perigoso o suficiente para mudar tudo.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 132000,
    totalChapters: 33,
    status: 'ongoing',
    createdAt: new Date('2024-09-05').toISOString(),
    updatedAt: new Date('2024-11-17').toISOString(),
    averageRating: 4.6,
    categories: [
      { id: 'cat-teen', name: 'Teen', slug: 'teen', description: 'Histórias jovens', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 👬 13. MM ROMANCE
  {
    id: 'mock-mm-1',
    title: 'Entre Beijos e Segredos',
    slug: 'entre-beijos-e-segredos-mock-mm-1',
    author: 'Miguel Arthur',
    description: 'Miguel sempre foi dedicado à carreira, até conhecer Arthur, um cliente novo da cafeteria onde trabalha.\n\nO que começa com conversas tímidas se transforma em algo intenso — mas Arthur guarda segredos que podem destruir o que mal começou.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 178000,
    totalChapters: 39,
    status: 'ongoing',
    createdAt: new Date('2024-07-20').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-mm', name: 'MM Romance', slug: 'mm', description: 'Romance masculino', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-mm-2',
    title: 'Nós Dois Contra o Mundo',
    slug: 'nos-dois-contra-o-mundo-mock-mm-2',
    author: 'Pedro Lucas',
    description: 'Após ser expulso de casa, Pedro precisa recomeçar do zero.\n\nEle só não esperava ser acolhido por Lucas, o bad boy da universidade.\n\nEntre convivência forçada, provocações e confissões inesperadas, nasce um romance que nenhum dos dois estava preparado para viver.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 165000,
    totalChapters: 37,
    status: 'ongoing',
    createdAt: new Date('2024-08-05').toISOString(),
    updatedAt: new Date('2024-11-17').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-mm', name: 'MM Romance', slug: 'mm', description: 'Romance masculino', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },

  // 🩸 14. VAMPIROS
  {
    id: 'mock-vampiro-1',
    title: 'Beijo da Meia-Noite',
    slug: 'beijo-da-meia-noite-mock-vampiro-1',
    author: 'Helena Nightborn',
    description: 'Ao se mudar para uma cidade pequena, Helena conhece um rapaz misterioso que nunca aparece durante o dia.\n\nQuando descobre que ele é um vampiro tentando resistir à sede, já é tarde demais — sua vida está ligada à dele.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 223000,
    totalChapters: 44,
    status: 'ongoing',
    createdAt: new Date('2024-09-20').toISOString(),
    updatedAt: new Date('2024-11-19').toISOString(),
    averageRating: 4.8,
    categories: [
      { id: 'cat-vampiro', name: 'Vampiros', slug: 'vampiro', description: 'Histórias de vampiros', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  },
  {
    id: 'mock-vampiro-2',
    title: 'A Rainha das Sombras',
    slug: 'a-rainha-das-sombras-mock-vampiro-2',
    author: 'Kassandra Darkborn',
    description: 'Kassandra foi transformada contra sua vontade e abandonada à própria sorte.\n\nAgora, séculos depois, está decidida a recuperar o trono vampírico perdido.\n\nMas para isso, terá que se aliar a um guerreiro sombrio que desperta desejos perigosos.',
    coverUrl: null, // ✅ Usa getBookCoverPathFromTitle(title) no componente
    totalViews: 201000,
    totalChapters: 42,
    status: 'ongoing',
    createdAt: new Date('2024-10-05').toISOString(),
    updatedAt: new Date('2024-11-18').toISOString(),
    averageRating: 4.7,
    categories: [
      { id: 'cat-vampiro', name: 'Vampiros', slug: 'vampiro', description: 'Histórias de vampiros', created_at: new Date().toISOString() },
      { id: 'cat-romance', name: 'Romance', slug: 'romance', description: 'Histórias de amor', created_at: new Date().toISOString() }
    ]
  }
]

// Função para obter todos os livros
export function getMockBooks(): Book[] {
  return mockBooks
}

// Função para obter um livro por ID
export function getMockBookById(id: string): Book | undefined {
  return mockBooks.find(book => book.id === id)
}

// Função para obter livros por categoria
export function getMockBooksByCategory(categorySlug: string): Book[] {
  return mockBooks.filter(book => 
    book.categories?.some(cat => cat.slug === categorySlug)
  )
}

// Função para buscar livros
export function searchMockBooks(query: string): Book[] {
  const lowerQuery = query.toLowerCase()
  return mockBooks.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.description.toLowerCase().includes(lowerQuery)
  )
}
