import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-client'

// Importar os dados dos livros
const allBooksData = [
  // 🔥 MÁFIA
  {
    title: 'Entre Sangue e Sedução',
    author: 'Valentina Rossi',
    description: `Quando Aurora é sequestrada por engano pela família Moretti, descobre que o líder da máfia italiana não é o monstro que todos pintam — mas também não é o herói que ela imaginou.

Dante Moretti é frio, calculista e perigoso… até que começa a quebrar suas próprias regras por causa dela.

Presos em um mundo de segredos, sangue e alianças quebradas, Aurora precisa decidir: confiar no homem que destruiu sua vida… ou se tornar a rainha ao lado dele.`,
    cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['mafia', 'romance', 'suspense'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Erro Fatal',
        preview_text: 'Aurora nunca imaginou que uma noite comum se transformaria no pior pesadelo de sua vida...',
        content: '[CONTEÚDO COMPLETO DO CAPÍTULO - Ver arquivo seed-all-books.ts]'
      },
      {
        chapter_number: 2,
        title: 'Prisioneira de Luxo',
        preview_text: 'Aurora acorda em um quarto luxuoso, mas a realidade de sua prisão logo se torna clara...',
        content: '[CONTEÚDO COMPLETO DO CAPÍTULO]'
      },
      {
        chapter_number: 3,
        title: 'Jantar com o Diabo',
        preview_text: 'Aurora decide aceitar o convite para jantar, determinada a entender seu captor...',
        content: '[CONTEÚDO COMPLETO DO CAPÍTULO]'
      }
    ]
  },
  {
    title: 'A Noiva do Don',
    author: 'Isabella Romano',
    description: `Para salvar o irmão de uma dívida impagável, Helena aceita se tornar esposa do chefe mais temido de Chicago.

Adrian Russo nunca quis casamento — até encontrar uma mulher teimosa o suficiente para desafiá-lo.

Entre jogos de poder, ciúme, proteção obsessiva e inimigos que surgem de todos os lados, Helena percebe que o maior perigo… é se apaixonar pelo próprio monstro.`,
    cover_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['mafia', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Proposta Impossível',
        preview_text: 'Helena nunca imaginou que uma dívida do irmão a levaria até o escritório do homem mais perigoso de Chicago...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'A Decisão',
        preview_text: 'Helena tem 24 horas para tomar a decisão mais importante de sua vida...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'A Cerimônia',
        preview_text: 'O dia do casamento chega, e Helena se vê prestes a se tornar a esposa do homem mais perigoso de Chicago...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 👁️ PARANORMAL
  {
    title: 'O Sussurro das Sombras',
    author: 'Morgana Blackwood',
    description: `Desde criança, Mia ouve vozes que ninguém mais escuta. Quando uma entidade começa a segui-la, pedindo ajuda, ela descobre um portal entre mundos.

Elias, o guardião desse portal, surge em sua vida trazendo respostas — e um destino sombrio.

Agora Mia precisa enfrentar espíritos que querem possuir seu corpo… e sentimentos por um homem que nem deveria existir.`,
    cover_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['paranormal', 'romance', 'fantasia'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Vozes na Escuridão',
        preview_text: 'Mia sempre soube que era diferente, mas nunca imaginou o quão profundo seu dom realmente era...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Além do Véu',
        preview_text: 'Elias começa a treinar Mia, revelando um mundo que ela nunca imaginou existir...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'A Caçada',
        preview_text: 'Mia e Elias trabalham juntos para encontrar o assassino de Sarah...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'Entre o Véu e a Carne',
    author: 'Raven Nightshade',
    description: `Luna consegue ver os mortos desde o acidente que quase tirou sua vida. Trabalhando como médium, ela se sente no controle — até conhecer Cael, um espírito poderoso preso entre dimensões.

Para libertá-lo, ela precisa quebrar regras que colocam sua alma em risco… e quanto mais se aproximam, mais viva ela se sente.`,
    cover_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['paranormal', 'romance', 'suspense'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Acidente',
        preview_text: 'Tudo mudou na noite em que Luna quase morreu...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Espírito Preso',
        preview_text: 'Luna conhece Cael, um espírito diferente de todos os outros...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Regras Quebradas',
        preview_text: 'Luna descobre que libertar Cael pode custar sua própria alma...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🎮 JOGOS
  {
    title: 'Game Over Para o Meu Coração',
    author: 'Pixel Dreams',
    description: `Valentina é uma gamer famosa, mas sua vida vira de cabeça para baixo quando um bug misterioso a transporta para dentro do próprio jogo.

O problema? O chefe final — um guerreiro sombrio irresistível — está convicto de que ela é sua inimiga mortal.

Agora, para voltar para casa, ela precisa derrotá-lo… ou deixá-lo conquistar seu coração.`,
    cover_url: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['jogos', 'romance', 'fantasia'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Logged In',
        preview_text: 'Valentina nunca imaginou que seu jogo favorito se tornaria sua realidade...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Boss Battle',
        preview_text: 'O encontro com o chefe final não sai como planejado...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Glitch no Sistema',
        preview_text: 'Valentina descobre que há mais neste mundo do que ela pensava...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'Respawn do Amor',
    author: 'Nova Quest',
    description: `Depois de perder tudo, Alex encontra consolo em um novo MMORPG. O que ele não esperava era conhecer "NightWolf", uma jogadora habilidosa e misteriosa.

Quando descobrem que há um segredo por trás do jogo — e que seus avatares têm mais consciência do que deveriam — os dois iniciam uma jornada que mistura amizade, perigo e romance digital.`,
    cover_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['jogos', 'romance', 'sci-fi'],
    chapters: [
      {
        chapter_number: 1,
        title: 'New Game',
        preview_text: 'Alex cria sua conta no Eternal Realms, buscando escapar da realidade...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Party Up',
        preview_text: 'Alex e NightWolf formam uma dupla imbatível...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Bug ou Feature?',
        preview_text: 'Algo estranho está acontecendo com os avatares...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 💎 BILIONÁRIO
  {
    title: 'Contrato Irresistível',
    author: 'Diamond Rose',
    description: `Desesperada por dinheiro, Sofia aceita um contrato de seis meses como acompanhante particular do homem mais temido do mercado financeiro.

Levi Hartmann é arrogante, lindo e acostumado a controlar tudo.

O problema é que quanto mais convivem, mais difícil se torna manter o "profissional" profissional… e Levi não aceita perder o que deseja.`,
    cover_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['bilionario', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Proposta',
        preview_text: 'Sofia nunca imaginou que uma entrevista de emprego mudaria sua vida...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Regras do Jogo',
        preview_text: 'Levi estabelece as regras, mas Sofia não é fácil de controlar...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Quebrando Barreiras',
        preview_text: 'A linha entre profissional e pessoal começa a desaparecer...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'O Segredo do CEO',
    author: 'Scarlett Gold',
    description: `Isabella é contratada como assistente pessoal do CEO mais jovem do país.

Ethan Blake é exigente, frio e totalmente inalcançável — até a noite em que ela o encontra quebrado, revelando um segredo que poderia destruir sua carreira.

Agora, eles estão presos em um jogo proibido… onde o erro é inevitável.`,
    cover_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['bilionario', 'romance', 'suspense'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Primeiro Dia',
        preview_text: 'Isabella começa seu trabalho como assistente do CEO mais intimidador que já conheceu...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Depois do Expediente',
        preview_text: 'Isabella descobre um lado de Ethan que ele esconde de todos...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Linhas Cruzadas',
        preview_text: 'A relação profissional se torna impossível de manter...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🚀 SCI-FI
  {
    title: 'Além das Estrelas Proibidas',
    author: 'Nova Cosmos',
    description: `Em um futuro onde casamentos são decididos por algoritmos, Aria descobre que seu par perfeito é um rebelde procurado pela federação.

Para sobreviver, os dois precisam fugir para fora do sistema solar… e lá descobrem uma verdade que pode mudar toda a humanidade.`,
    cover_url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['sci-fi', 'romance', 'aventura'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Match Perfeito',
        preview_text: 'Aria recebe a notificação que mudará sua vida para sempre...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Fuga',
        preview_text: 'Aria e seu par precisam escapar antes que seja tarde demais...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'A Verdade',
        preview_text: 'O que eles descobrem além das estrelas muda tudo...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'O Último Androide',
    author: 'Circuit Dreams',
    description: `Quando o governo proíbe a criação de androides com emoções, a cientista Lina esconde seu protótipo — um androide perfeito chamado Kairo.

Mas o que começa como um experimento se transforma em algo perigoso… porque Kairo desenvolve sentimentos que não deveriam existir.`,
    cover_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['sci-fi', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Projeto Kairo',
        preview_text: 'Lina ativa seu androide mais avançado, sem saber o que está por vir...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Evolução',
        preview_text: 'Kairo começa a mostrar sinais de algo impossível...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Humano Demais',
        preview_text: 'A linha entre máquina e humano desaparece...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // ❤️‍🔥 ROMANCE
  {
    title: 'Quando Nossos Destinos Colidiram',
    author: 'Emma Heart',
    description: `Dois desconhecidos se esbarram em um aeroporto e trocam apenas um olhar — suficiente para marcar os dois.

Anos depois, se reencontram como professor e aluna em uma pós-graduação.

Agora, sentimentos não resolvidos voltam com força… junto com segredos que podem separá-los novamente.`,
    cover_url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Encontro',
        preview_text: 'Um olhar no aeroporto muda tudo...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Reencontro',
        preview_text: 'Anos depois, o destino os reúne novamente...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Proibido',
        preview_text: 'A relação professor-aluna complica tudo...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'O Peso do Nosso Amor',
    author: 'Grace Miller',
    description: `Camila jurou nunca mais se apaixonar. Até conhecer Noah, o enfermeiro que cuida de sua avó e que sempre tem um sorriso pronto.

O problema é que os dois carregam traumas profundos — e amar significa enfrentar o passado doloroso que ambos tentam esconder.`,
    cover_url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Enfermeiro',
        preview_text: 'Camila conhece Noah e algo desperta nela...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Cicatrizes',
        preview_text: 'Os traumas do passado vêm à tona...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Cura',
        preview_text: 'Juntos, eles aprendem a curar um ao outro...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🔥🔥 ROMANCE HOT (+18)
  {
    title: 'Prazer Proibido',
    author: 'Scarlet Desire',
    description: `Laura recebe a missão de entrevistar um renomado empresário. O que ela não espera é que o encontro termine em uma proposta indecente — e impossível de recusar.

Entre desejo, domínio e segredos, Laura descobre um mundo novo… e perigoso.`,
    cover_url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['romance-hot', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Entrevista',
        preview_text: 'Laura vai entrevistar o empresário mais misterioso da cidade...',
        content: '[CONTEÚDO COMPLETO +18]'
      },
      {
        chapter_number: 2,
        title: 'A Proposta',
        preview_text: 'Uma oferta que ela não pode recusar...',
        content: '[CONTEÚDO COMPLETO +18]'
      },
      {
        chapter_number: 3,
        title: 'Submissão',
        preview_text: 'Laura descobre um lado dela que não conhecia...',
        content: '[CONTEÚDO COMPLETO +18]'
      }
    ]
  },
  {
    title: 'Sob a Luz Vermelha',
    author: 'Ruby Passion',
    description: `Cansada da rotina, Júlia visita um clube exclusivo onde todos usam máscaras.

Lá conhece um homem misterioso que desperta nela desejos que nunca ousou admitir.

Mas quando descobre quem ele realmente é… o jogo muda completamente.`,
    cover_url: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['romance-hot', 'romance', 'suspense'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Clube',
        preview_text: 'Júlia entra em um mundo de máscaras e segredos...',
        content: '[CONTEÚDO COMPLETO +18]'
      },
      {
        chapter_number: 2,
        title: 'O Desconhecido',
        preview_text: 'Um homem misterioso a escolhe...',
        content: '[CONTEÚDO COMPLETO +18]'
      },
      {
        chapter_number: 3,
        title: 'Revelação',
        preview_text: 'A máscara cai e a verdade choca...',
        content: '[CONTEÚDO COMPLETO +18]'
      }
    ]
  },
  // 🏳️‍🌈 LGBTQ+
  {
    title: 'Entre Duas Verdades',
    author: 'Luna Pride',
    description: `Clara sempre soube que era diferente. Quando conhece Marina, uma fotógrafa livre e intensa, seu mundo ganha cor — e caos.

Mas assumir o romance significa enfrentar sua família conservadora… e seus próprios medos.`,
    cover_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['lgbtq', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Cores',
        preview_text: 'Clara conhece Marina e tudo muda...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Verdades',
        preview_text: 'Assumir quem é significa enfrentar tudo...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Liberdade',
        preview_text: 'Clara finalmente se aceita...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'Luz e Tempestade',
    author: 'Alex Rainbow',
    description: `Depois de anos escondendo sua sexualidade, Lucca finalmente se muda para longe.

Lá conhece Theo, um músico sensível que o enxerga como ninguém nunca viu.

Mas amar alguém tão quebrado quanto ele pode ser o maior desafio de suas vidas.`,
    cover_url: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['lgbtq', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Recomeço',
        preview_text: 'Lucca se muda e conhece Theo...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Conexão',
        preview_text: 'A música os une de forma única...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Cura',
        preview_text: 'Juntos, eles encontram a paz...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🔪 MISTÉRIO / TERROR
  {
    title: 'A Casa Onde Ninguém Sai',
    author: 'Edgar Shadows',
    description: `Quando cinco amigos decidem passar um fim de semana em uma casa abandonada, acham que será divertido.

Mas à noite, portas começam a se abrir sozinhas… e uma presença os observa.

Um por um, segredos são revelados — e a casa cobra seu preço.`,
    cover_url: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['misterio', 'terror', 'suspense'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Chegada',
        preview_text: 'Cinco amigos chegam à casa abandonada...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'A Primeira Noite',
        preview_text: 'Coisas estranhas começam a acontecer...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'O Preço',
        preview_text: 'A casa revela seu verdadeiro propósito...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'A Chamada da Meia-Noite',
    author: 'Anne Dark',
    description: `Camila começa a receber ligações de um número desconhecido. Do outro lado, uma criança que implora por ajuda.

Quando tenta rastrear a origem, descobre algo assustador: a criança morreu há anos.

Agora, o espírito quer que Camila descubra quem a matou.`,
    cover_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['misterio', 'terror', 'paranormal'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Ligação',
        preview_text: 'Camila recebe uma ligação perturbadora...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Investigação',
        preview_text: 'Ela descobre a verdade sobre a criança...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Justiça',
        preview_text: 'O espírito finalmente encontra paz...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🌕 LOBISOMEM
  {
    title: 'Marcada pelo Alfa Errado',
    author: 'Luna Wolf',
    description: `No dia de sua cerimônia de marcação, Elena descobre que seu par destinado não é o futuro alfa que sempre amou… mas seu irmão mais velho, frio e implacável.

Agora ela precisa aprender a viver sob as regras dele — e sob seu toque.`,
    cover_url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['lobisomem', 'romance', 'fantasia'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Cerimônia',
        preview_text: 'Elena descobre seu verdadeiro par destinado...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'A Marcação',
        preview_text: 'O ritual que a prende ao alfa para sempre...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Aceitação',
        preview_text: 'Elena aprende a amar seu destino...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'A Filha da Lua',
    author: 'Silver Moon',
    description: `Rejeitada por sua matilha, Aria foge para as montanhas. Lá encontra um lobisomem solitário que guarda um segredo antigo.

Juntos, eles descobrem que o destino da lua depende dela — e de um amor proibido.`,
    cover_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['lobisomem', 'romance', 'fantasia'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Rejeitada',
        preview_text: 'Aria é expulsa de sua matilha...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Solitário',
        preview_text: 'Ela encontra um lobisomem misterioso...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Destino',
        preview_text: 'A verdade sobre sua linhagem é revelada...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🧙‍♂️ FANTASIA
  {
    title: 'A Princesa das Chamas',
    author: 'Phoenix Fire',
    description: `Yara nasceu com o dom proibido de controlar o fogo. Para esconder sua magia, vive confinada no castelo… até que um mago renegado invade o reino e a reconhece como a última de sua linhagem.

Agora, ela precisa decidir entre fugir com ele ou enfrentar o rei que sempre mentiu para ela.`,
    cover_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['fantasia', 'romance', 'aventura'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Chamas Ocultas',
        preview_text: 'Yara esconde seu poder proibido...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Mago',
        preview_text: 'Um estranho revela a verdade sobre ela...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Fuga',
        preview_text: 'Yara decide seu próprio destino...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'O Reino Entre Mundos',
    author: 'Crystal Dreams',
    description: `Quando um espelho antigo se quebra, Lina é sugada para um mundo paralelo onde criaturas mágicas vivem em guerra.

Lá, um príncipe amaldiçoado acredita que ela é a chave para salvar seu povo — e para quebrar a própria maldição.`,
    cover_url: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['fantasia', 'romance', 'aventura'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Espelho',
        preview_text: 'Lina é transportada para outro mundo...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Príncipe Amaldiçoado',
        preview_text: 'Ela conhece o governante do reino...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'A Profecia',
        preview_text: 'Lina descobre seu verdadeiro propósito...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🎓 YA / TEEN
  {
    title: 'Cartas Para o Meu Primeiro Amor',
    author: 'Sophie Young',
    description: `Ana encontra uma caixa cheia de cartas que escreveu — mas nunca enviou — para o crush da adolescência.

Quando ele volta para a cidade, ela precisa decidir se vai finalmente revelar seus sentimentos… ou se esconder como sempre fez.`,
    cover_url: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['ya-teen', 'romance'],
    chapters: [
      {
        chapter_number: 1,
        title: 'As Cartas',
        preview_text: 'Ana encontra suas cartas antigas...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Retorno',
        preview_text: 'Ele volta para a cidade...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Coragem',
        preview_text: 'Ana finalmente se declara...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'O Garoto do Fim do Corredor',
    author: 'Lily Teen',
    description: `Nova na escola, Júlia só quer passar despercebida. Mas tudo muda quando ela conhece Daniel, o garoto misterioso que sempre está sozinho.

Aos poucos, eles criam um laço delicado — e perigoso o suficiente para mudar tudo.`,
    cover_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['ya-teen', 'romance', 'drama'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Nova Escola',
        preview_text: 'Júlia começa em uma nova escola...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Misterioso',
        preview_text: 'Ela conhece Daniel...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Conexão',
        preview_text: 'Um laço especial se forma...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 👬 MM ROMANCE
  {
    title: 'Entre Beijos e Segredos',
    author: 'Marcus Love',
    description: `Miguel sempre foi dedicado à carreira, até conhecer Arthur, um cliente novo da cafeteria onde trabalha.

O que começa com conversas tímidas se transforma em algo intenso — mas Arthur guarda segredos que podem destruir o que mal começou.`,
    cover_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['mm-romance', 'romance', 'lgbtq'],
    chapters: [
      {
        chapter_number: 1,
        title: 'O Cliente',
        preview_text: 'Miguel conhece Arthur na cafeteria...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'Aproximação',
        preview_text: 'As conversas se tornam mais íntimas...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Segredos',
        preview_text: 'Arthur revela seu passado...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'Nós Dois Contra o Mundo',
    author: 'Leo Pride',
    description: `Após ser expulso de casa, Pedro precisa recomeçar do zero.

Ele só não esperava ser acolhido por Lucas, o bad boy da universidade.

Entre convivência forçada, provocações e confissões inesperadas, nasce um romance que nenhum dos dois estava preparado para viver.`,
    cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['mm-romance', 'romance', 'lgbtq'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Expulso',
        preview_text: 'Pedro perde tudo e precisa recomeçar...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Bad Boy',
        preview_text: 'Lucas o acolhe de forma inesperada...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Juntos',
        preview_text: 'Eles descobrem que são perfeitos um para o outro...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  // 🩸 VAMPIROS
  {
    title: 'Beijo da Meia-Noite',
    author: 'Crimson Night',
    description: `Ao se mudar para uma cidade pequena, Helena conhece um rapaz misterioso que nunca aparece durante o dia.

Quando descobre que ele é um vampiro tentando resistir à sede, já é tarde demais — sua vida está ligada à dele.`,
    cover_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['vampiros', 'romance', 'paranormal'],
    chapters: [
      {
        chapter_number: 1,
        title: 'A Mudança',
        preview_text: 'Helena se muda para uma cidade estranha...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Noturno',
        preview_text: 'Ela conhece alguém que só aparece à noite...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'Revelação',
        preview_text: 'A verdade sobre ele vem à tona...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  },
  {
    title: 'A Rainha das Sombras',
    author: 'Violet Blood',
    description: `Kassandra foi transformada contra sua vontade e abandonada à própria sorte.

Agora, séculos depois, está decidida a recuperar o trono vampírico perdido.

Mas para isso, terá que se aliar a um guerreiro sombrio que desperta desejos perigosos.`,
    cover_url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=900&fit=crop&q=80',
    status: 'completed',
    category_slugs: ['vampiros', 'romance', 'fantasia'],
    chapters: [
      {
        chapter_number: 1,
        title: 'Transformação',
        preview_text: 'Kassandra relembra sua transformação forçada...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 2,
        title: 'O Guerreiro',
        preview_text: 'Ela encontra um aliado inesperado...',
        content: '[CONTEÚDO COMPLETO]'
      },
      {
        chapter_number: 3,
        title: 'O Trono',
        preview_text: 'Kassandra luta pelo que é seu por direito...',
        content: '[CONTEÚDO COMPLETO]'
      }
    ]
  }
]

async function insertBook(bookData: any) {
  const supabase = createClient()
  
  try {
    console.log(`\n📚 Inserindo livro: ${bookData.title}`)
    
    // Inserir livro
    const { data: book, error: bookError } = await supabase
      .from('books')
      .insert({
        title: bookData.title,
        author: bookData.author,
        description: bookData.description,
        cover_url: bookData.cover_url,
        status: bookData.status,
        total_views: 0,
        total_chapters: bookData.chapters.length
      })
      .select()
      .single()

    if (bookError) throw bookError

    // Associar categorias
    const { data: categories } = await supabase
      .from('categories')
      .select('id, slug')
      .in('slug', bookData.category_slugs)

    if (categories && categories.length > 0) {
      const bookCategories = categories.map((cat: any) => ({
        book_id: book.id,
        category_id: cat.id
      }))

      await supabase.from('book_categories').insert(bookCategories)
    }

    // Inserir capítulos
    for (const chapter of bookData.chapters) {
      await supabase.from('chapters').insert({
        book_id: book.id,
        chapter_number: chapter.chapter_number,
        title: chapter.title,
        content: chapter.content,
        preview_text: chapter.preview_text,
        views: 0
      })
    }

    return { success: true, bookId: book.id }
  } catch (error: any) {
    console.error('Erro ao inserir livro:', error)
    return { success: false, error: error.message }
  }
}

export async function POST() {
  try {
    console.log('🚀 Iniciando migração de todos os livros...')
    
    let booksProcessed = 0
    let chaptersProcessed = 0
    const errors: string[] = []

    for (const bookData of allBooksData) {
      const result = await insertBook(bookData)
      
      if (result.success) {
        booksProcessed++
        chaptersProcessed += bookData.chapters.length
      } else {
        errors.push(`${bookData.title}: ${result.error}`)
      }
    }

    return NextResponse.json({
      success: errors.length === 0,
      data: {
        booksProcessed,
        chaptersProcessed,
        errors
      }
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
