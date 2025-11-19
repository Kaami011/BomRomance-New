import type { Chapter } from '@/lib/supabase'

// Capítulos completos dos livros
export const mockChapters: Record<string, Chapter[]> = {
  // Livro 1: Amor Inesperado do Bilionário (85 capítulos)
  'mock-book-1': Array.from({ length: 85 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'O Encontro', 'Primeira Impressão', 'Barreiras', 'Tensão Crescente', 'O Primeiro Beijo',
      'Confusão de Sentimentos', 'Revelações do Passado', 'A Ex-Noiva', 'Ciúmes', 'Aproximação',
      'Jantar Romântico', 'Noite Inesquecível', 'Manhã Depois', 'Complicações', 'Decisões Difíceis',
      'Afastamento', 'Saudade', 'Reconciliação', 'Declaração', 'Juntos Oficialmente',
      'Conhecendo a Família', 'Desafios Profissionais', 'Apoio Mútuo', 'Viagem a Paris', 'Pedido Especial',
      'Preparativos', 'O Grande Dia', 'Lua de Mel', 'Novos Começos', 'Surpresa',
      'Notícia Inesperada', 'Expectativas', 'Preparando o Ninho', 'Medos e Ansiedades', 'Apoio Incondicional',
      'Chegada do Bebê', 'Novos Desafios', 'Equilibrando Tudo', 'Crescimento', 'Primeiro Aniversário',
      'Expansão dos Negócios', 'Parceria Perfeita', 'Crise Empresarial', 'Superando Juntos', 'Vitória',
      'Segundo Filho', 'Família Completa', 'Rotina Feliz', 'Desafios da Paternidade', 'Amor Renovado',
      'Aniversário de Casamento', 'Renovação de Votos', 'Reflexões', 'Gratidão', 'Legado',
      'Ensinando os Filhos', 'Valores Familiares', 'Primeiro Dia de Aula', 'Orgulho Paterno', 'Momentos Preciosos',
      'Férias em Família', 'Aventuras', 'Risadas e Memórias', 'Fotografias', 'Álbum de Família',
      'Crescimento dos Filhos', 'Adolescência', 'Conversas Importantes', 'Apoio Sempre', 'Formatura',
      'Ninho Vazio', 'Redescoberta', 'Viagem a Dois', 'Renovação', 'Amor Eterno',
      'Avós Orgulhosos', 'Nova Geração', 'Círculo Completo', 'Sabedoria', 'Legado de Amor',
      'Celebração da Vida', 'Gratidão Eterna', 'Juntos Para Sempre', 'Final Feliz', 'Epílogo'
    ]
    
    return {
      id: `mock-ch-1-${chapterNum}`,
      book_id: 'mock-book-1',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nDaniel e Isabella continuam sua jornada de amor, enfrentando desafios e celebrando vitórias juntos. Cada momento fortalece o vínculo entre eles, provando que o amor verdadeiro supera todas as barreiras.\n\n${chapterNum <= 20 ? 'No início de seu relacionamento, cada olhar, cada toque era uma descoberta. Daniel aprendia a abrir seu coração novamente, enquanto Isabella descobria a profundidade de seus próprios sentimentos.' : chapterNum <= 50 ? 'Construindo uma vida juntos, eles enfrentam os altos e baixos com maturidade e amor. A família cresce, os negócios prosperam, e o amor entre eles se aprofunda a cada dia.' : 'Anos se passam, e o amor entre Daniel e Isabella permanece forte. Eles construíram não apenas uma família, mas um legado de amor, respeito e dedicação que inspirará gerações futuras.'}\n\nEste capítulo marca um momento importante em sua história, mostrando como o amor verdadeiro não apenas sobrevive, mas floresce com o tempo.`,
      views: Math.floor(Math.random() * 50000) + 10000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 0, 15 + i).toISOString(),
      updated_at: new Date(2024, 0, 15 + i).toISOString()
    }
  }),

  // Livro 2: A Vingança de Judy (72 capítulos)
  'mock-book-2': Array.from({ length: 72 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'A Traição', 'Gavin', 'Quebrando Regras', 'Jogo Perigoso', 'Sentimentos Confusos',
      'Plano de Vingança', 'Aproximação Estratégica', 'Primeira Vitória', 'Complicações', 'Emoções Reais',
      'Dilema', 'Escolhas', 'Confronto', 'Revelações', 'Verdades Dolorosas',
      'Aliados Inesperados', 'Conspiração', 'Armadilha', 'Virada de Jogo', 'Poder',
      'Dominação', 'Submissão', 'Equilíbrio', 'Parceria', 'Confiança',
      'Traição Descoberta', 'Vingança Completa', 'Consequências', 'Redenção', 'Perdão',
      'Novo Começo', 'Amor Verdadeiro', 'Aceitação', 'Família', 'Futuro',
      'Desafios Juntos', 'Superação', 'Crescimento', 'Maturidade', 'Compromisso',
      'Casamento', 'Celebração', 'Lua de Mel', 'Retorno', 'Rotina',
      'Surpresa', 'Gravidez', 'Expectativa', 'Preparação', 'Nascimento',
      'Paternidade', 'Maternidade', 'Família Completa', 'Amor Multiplicado', 'Felicidade',
      'Desafios Familiares', 'Apoio Mútuo', 'Crescimento dos Filhos', 'Orgulho', 'Gratidão',
      'Aniversário', 'Renovação', 'Promessas', 'Eternidade', 'Legado',
      'Sabedoria', 'Experiência', 'Ensinamentos', 'Valores', 'Tradição',
      'Final Feliz', 'Epílogo'
    ]
    
    return {
      id: `mock-ch-2-${chapterNum}`,
      book_id: 'mock-book-2',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nA história de Judy e Gavin é uma montanha-russa de emoções, onde vingança e amor se entrelaçam de formas inesperadas.\n\n${chapterNum <= 15 ? 'Judy executa seu plano de vingança com precisão, mas não esperava que Gavin fosse tão diferente do que imaginava. Cada encontro revela uma nova camada de complexidade em ambos.' : chapterNum <= 40 ? 'O que começou como vingança se transforma em algo muito mais profundo. Judy e Gavin descobrem que às vezes, as pessoas que mais nos desafiam são aquelas que mais precisamos.' : 'Superando o passado e construindo um futuro juntos, Judy e Gavin provam que o amor verdadeiro pode nascer até das circunstâncias mais improváveis. Sua história é um testemunho de redenção e perdão.'}\n\nCada capítulo revela mais sobre a complexidade de seus sentimentos e a profundidade de sua conexão.`,
      views: Math.floor(Math.random() * 40000) + 8000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 1, 20 + i).toISOString(),
      updated_at: new Date(2024, 1, 20 + i).toISOString()
    }
  }),

  // Livro 3: Não Pode Fugir de Mim (95 capítulos)
  'mock-book-3': Array.from({ length: 95 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'A Noite Que Mudou Tudo', 'Não Há Fuga', 'Rendição', 'Possessão', 'Intensidade',
      'Desejo Incontrolável', 'Marcas', 'Pertencimento', 'Resistência', 'Quebra',
      'Aceitação', 'Submissão', 'Dominação', 'Equilíbrio', 'Confiança',
      'Vulnerabilidade', 'Proteção', 'Ciúmes', 'Obsessão', 'Amor Possessivo',
      'Limites', 'Descobertas', 'Intimidade', 'Conexão', 'Alma Gêmea',
      'Desafios', 'Superação', 'Crescimento', 'Maturidade', 'Compromisso',
      'Família', 'Aceitação Social', 'Preconceito', 'Luta', 'Vitória',
      'Casamento', 'Celebração', 'Lua de Mel', 'Retorno', 'Rotina',
      'Trabalho', 'Carreira', 'Sucesso', 'Parceria', 'Apoio',
      'Crise', 'Conflito', 'Resolução', 'Perdão', 'Renovação',
      'Viagem', 'Aventura', 'Descoberta', 'Experiências', 'Memórias',
      'Amigos', 'Família Escolhida', 'Comunidade', 'Pertencimento', 'Lar',
      'Adoção', 'Paternidade', 'Amor Paterno', 'Família Completa', 'Felicidade',
      'Crescimento Familiar', 'Desafios Paternos', 'Orgulho', 'Amor Incondicional', 'Legado',
      'Aniversário', 'Celebração da Vida', 'Gratidão', 'Reflexão', 'Futuro',
      'Sonhos', 'Realizações', 'Conquistas', 'Sucesso', 'Plenitude',
      'Amor Eterno', 'Compromisso Renovado', 'Promessas', 'Eternidade', 'Juntos Para Sempre',
      'Sabedoria', 'Experiência', 'Ensinamentos', 'Valores', 'Tradição',
      'Final Feliz', 'Epílogo', 'Agradecimentos', 'Reflexões Finais', 'Até Breve'
    ]
    
    return {
      id: `mock-ch-3-${chapterNum}`,
      book_id: 'mock-book-3',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nA história intensa de Hayden e Zenos continua, explorando as profundezas de um amor possessivo mas verdadeiro.\n\n${chapterNum <= 20 ? 'Hayden luta contra seus próprios sentimentos enquanto Zenos não aceita nada menos que tudo. A intensidade entre eles é palpável, cada momento carregado de desejo e emoção.' : chapterNum <= 60 ? 'Aceitando seus sentimentos, Hayden e Zenos constroem uma relação baseada em confiança e amor profundo. Eles enfrentam o mundo juntos, provando que o amor verdadeiro supera qualquer obstáculo.' : 'Anos depois, Hayden e Zenos olham para trás e veem uma jornada incrível. O que começou como uma noite impulsiva se transformou em um amor eterno que desafia todas as convenções.'}\n\nCada capítulo aprofunda a conexão entre eles, mostrando que o amor verdadeiro não conhece limites.`,
      views: Math.floor(Math.random() * 60000) + 15000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 2, 10 + i).toISOString(),
      updated_at: new Date(2024, 2, 10 + i).toISOString()
    }
  }),

  // Livro 4: O Alfa e Seu Destino Humano (110 capítulos - COMPLETO)
  'mock-book-4': Array.from({ length: 110 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'O Lobo Ferido', 'Revelações', 'Consequências', 'Escolha Difícil', 'Deixando a Matilha',
      'Novo Começo', 'Adaptação', 'Mundo Humano', 'Desafios', 'Amor Crescente',
      'Primeira Transformação', 'Aceitação', 'Medo', 'Confiança', 'Vínculo',
      'Perseguição', 'Perigo', 'Proteção', 'Luta', 'Vitória',
      'Paz Temporária', 'Felicidade', 'Rotina', 'Trabalho', 'Vida Normal',
      'Ameaça Retorna', 'Confronto', 'Batalha', 'Aliados', 'Família Escolhida',
      'Reconciliação', 'Perdão', 'Aceitação da Matilha', 'Novo Alfa', 'Mudanças',
      'Casamento', 'Cerimônia Dupla', 'Humana e Lobisomem', 'União', 'Celebração',
      'Lua de Mel', 'Floresta Sagrada', 'Conexão Profunda', 'Marca', 'Vínculo Eterno',
      'Retorno', 'Nova Vida', 'Gravidez', 'Surpresa', 'Alegria',
      'Preparação', 'Medos', 'Apoio', 'Amor Incondicional', 'Expectativa',
      'Nascimento', 'Bebê Híbrido', 'Milagre', 'Família Completa', 'Felicidade Plena',
      'Crescimento', 'Primeira Transformação do Bebê', 'Orgulho', 'Ensinamentos', 'Tradição',
      'Comunidade', 'Aceitação Total', 'Paz', 'Harmonia', 'Equilíbrio',
      'Segundo Filho', 'Família Crescendo', 'Amor Multiplicado', 'Desafios Paternos', 'Superação',
      'Anos Depois', 'Filhos Crescidos', 'Orgulho Paterno', 'Legado', 'Tradição Familiar',
      'Nova Geração', 'Netos', 'Avós', 'Círculo da Vida', 'Continuidade',
      'Sabedoria', 'Experiência', 'Ensinamentos', 'Valores', 'Amor Eterno',
      'Celebração', 'Aniversário de Casamento', 'Renovação', 'Promessas', 'Eternidade',
      'Reflexão', 'Gratidão', 'Jornada', 'Memórias', 'Momentos Preciosos',
      'Futuro', 'Esperança', 'Sonhos', 'Realizações', 'Plenitude',
      'Final Feliz', 'Epílogo', 'Legado de Amor', 'Até Sempre', 'Fim'
    ]
    
    return {
      id: `mock-ch-4-${chapterNum}`,
      book_id: 'mock-book-4',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nA épica história de Kael e Emily, um amor que transcende espécies e desafia todas as convenções.\n\n${chapterNum <= 30 ? 'Kael enfrenta a decisão mais difícil de sua vida: escolher entre seu dever como Alfa e seu amor por Emily. Cada momento com ela fortalece sua convicção de que fez a escolha certa.' : chapterNum <= 70 ? 'Construindo uma vida juntos, Kael e Emily provam que o amor verdadeiro supera todas as barreiras. Eles criam uma família única, mesclando dois mundos que nunca deveriam se encontrar.' : 'Décadas depois, Kael e Emily olham para sua família com orgulho. Seus filhos e netos representam a união perfeita entre dois mundos, um legado de amor que mudará ambas as espécies para sempre.'}\n\nEsta é uma história completa de amor, sacrifício e redenção que tocará seu coração.`,
      views: Math.floor(Math.random() * 70000) + 20000,
      is_premium: chapterNum > 3,
      created_at: new Date(2023, 10, 5 + i).toISOString(),
      updated_at: new Date(2023, 10, 5 + i).toISOString()
    }
  }),

  // Livro 5: A Luna Renascida (88 capítulos)
  'mock-book-5': Array.from({ length: 88 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'Renascimento', 'Mudando o Jogo', 'Aliados Inesperados', 'Plano de Vingança', 'Primeira Jogada',
      'Desmascarando Marcus', 'Revelações', 'Aliança com Damien', 'Poder Crescente', 'Respeito',
      'Confronto', 'Verdades', 'Traição Exposta', 'Julgamento', 'Justiça',
      'Nova Luna', 'Liderança', 'Mudanças', 'Reformas', 'Progresso',
      'Amor Inesperado', 'Damien', 'Sentimentos', 'Resistência', 'Rendição',
      'Novo Relacionamento', 'Confiança', 'Intimidade', 'Conexão', 'Amor Verdadeiro',
      'Desafios', 'Inimigos Externos', 'Proteção', 'Luta', 'Vitória',
      'Paz', 'Prosperidade', 'Crescimento', 'Comunidade', 'Harmonia',
      'Casamento', 'Cerimônia', 'Celebração', 'União', 'Felicidade',
      'Lua de Mel', 'Viagem', 'Descobertas', 'Momentos', 'Memórias',
      'Retorno', 'Gravidez', 'Alegria', 'Expectativa', 'Preparação',
      'Nascimento', 'Bebê', 'Família', 'Amor Multiplicado', 'Completude',
      'Crescimento do Filho', 'Primeira Transformação', 'Orgulho', 'Ensinamentos', 'Tradição',
      'Segundo Filho', 'Família Crescendo', 'Desafios Maternos', 'Equilíbrio', 'Amor',
      'Anos Depois', 'Filhos Crescidos', 'Orgulho Materno', 'Legado', 'Continuidade',
      'Nova Geração', 'Netos', 'Avós', 'Círculo Completo', 'Gratidão',
      'Sabedoria', 'Experiência', 'Ensinamentos', 'Valores', 'Tradição Familiar',
      'Final Feliz', 'Epílogo', 'Legado de Força', 'Até Sempre'
    ]
    
    return {
      id: `mock-ch-5-${chapterNum}`,
      book_id: 'mock-book-5',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nAmy usa sua segunda chance para reescrever seu destino e criar um futuro melhor para todos.\n\n${chapterNum <= 25 ? 'Com o conhecimento do futuro, Amy executa seu plano de vingança com precisão cirúrgica. Mas ao longo do caminho, ela descobre que a verdadeira força não está apenas em destruir inimigos, mas em construir aliados.' : chapterNum <= 60 ? 'Amy se torna a Luna que sempre deveria ter sido - forte, justa e amada por sua matilha. E no processo, encontra um amor verdadeiro com Damien, alguém que sempre a viu pelo que realmente era.' : 'Décadas depois, Amy olha para trás e vê não apenas vingança cumprida, mas uma vida plena de amor, família e propósito. Ela transformou sua segunda chance em um legado que inspirará gerações.'}\n\nUma história poderosa de redenção, vingança e amor verdadeiro.`,
      views: Math.floor(Math.random() * 65000) + 18000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 3, 12 + i).toISOString(),
      updated_at: new Date(2024, 3, 12 + i).toISOString()
    }
  }),

  // Livro 6: Obsessão do Mafioso (102 capítulos)
  'mock-book-6': Array.from({ length: 102 }, (_, i) => {
    const chapterNum = i + 1
    const titles = [
      'A Mentira', 'O Mafioso', 'Descoberta', 'Obsessão', 'Possessão',
      'Resistência', 'Rendição', 'Perigo', 'Proteção', 'Ciúmes',
      'Dominação', 'Submissão', 'Equilíbrio', 'Confiança', 'Vulnerabilidade',
      'Amor Perigoso', 'Mundo do Crime', 'Adaptação', 'Medo', 'Coragem',
      'Família Moretti', 'Aceitação', 'Desafios', 'Inimigos', 'Ameaças',
      'Proteção Extrema', 'Sequestro', 'Resgate', 'Vingança', 'Justiça',
      'Paz Temporária', 'Felicidade', 'Rotina Perigosa', 'Normalidade Impossível', 'Aceitação',
      'Casamento', 'Cerimônia Italiana', 'Tradição', 'União', 'Família',
      'Lua de Mel', 'Sicília', 'Raízes', 'História', 'Legado',
      'Retorno', 'Gravidez', 'Proteção Redobrada', 'Medo', 'Amor',
      'Preparação', 'Segurança', 'Família Crescendo', 'Expectativa', 'Alegria',
      'Nascimento', 'Herdeiro', 'Orgulho', 'Amor Paterno', 'Família Completa',
      'Crescimento', 'Primeiro Ano', 'Desafios Paternos', 'Equilíbrio', 'Amor Multiplicado',
      'Segundo Filho', 'Família Grande', 'Caos Feliz', 'Amor Incondicional', 'Plenitude',
      'Anos Depois', 'Filhos Crescidos', 'Tradição Familiar', 'Legado', 'Continuidade',
      'Aposentadoria', 'Novo Líder', 'Transição', 'Paz', 'Tranquilidade',
      'Netos', 'Avós', 'Círculo da Vida', 'Gratidão', 'Reflexão',
      'Sabedoria', 'Experiência', 'Ensinamentos', 'Valores', 'Tradição',
      'Amor Eterno', 'Compromisso', 'Promessas', 'Eternidade', 'Juntos Para Sempre',
      'Final Feliz', 'Epílogo', 'Legado de Amor', 'Até Sempre', 'Fim'
    ]
    
    return {
      id: `mock-ch-6-${chapterNum}`,
      book_id: 'mock-book-6',
      chapter_number: chapterNum,
      title: titles[i] || `Capítulo ${chapterNum}`,
      content: `Capítulo ${chapterNum}: ${titles[i] || `Capítulo ${chapterNum}`}\n\nA história intensa de Isabella e Dante, onde perigo e paixão se misturam de forma explosiva.\n\n${chapterNum <= 30 ? 'Isabella se vê presa em um mundo perigoso, mas descobre que Dante, apesar de sua obsessão, é capaz de um amor profundo e protetor. Cada dia revela uma nova faceta do homem por trás do mafioso.' : chapterNum <= 70 ? 'Aceitando seu amor por Dante e o mundo em que ele vive, Isabella se torna a rainha ao lado do rei. Juntos, eles constroem um império baseado não apenas em poder, mas em amor e família.' : 'Décadas depois, Isabella e Dante olham para sua família com orgulho. O que começou como uma mentira se transformou em um amor eterno que desafiou todas as probabilidades.'}\n\nUma história eletrizante de obsessão, perigo e amor verdadeiro.`,
      views: Math.floor(Math.random() * 85000) + 25000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 4, 8 + i).toISOString(),
      updated_at: new Date(2024, 4, 8 + i).toISOString()
    }
  })
}

// Função para obter capítulos de um livro
export function getMockChapters(bookId: string): Chapter[] {
  return mockChapters[bookId] || []
}

// Função para obter um capítulo específico
export function getMockChapter(bookId: string, chapterNumber: number): Chapter | undefined {
  const chapters = mockChapters[bookId] || []
  return chapters.find(ch => ch.chapter_number === chapterNumber)
}
