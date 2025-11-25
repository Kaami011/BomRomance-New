import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Função para gerar conteúdo rico para capítulos
function generateChapterContent(bookTitle: string, chapterNum: number, chapterTitle: string): string {
  const contentTemplates: Record<string, (num: number) => string> = {
    'Amor Inesperado do Bilionário': (num) => {
      if (num === 1) return `Capítulo ${num}: ${chapterTitle}\n\nSofia nunca imaginou que um simples encontro em um café mudaria sua vida para sempre. Ela estava ali apenas para uma entrevista de emprego, nervosa e esperançosa. Mas quando esbarrou em um homem de terno impecável, derramando café em sua camisa cara, ela pensou que havia perdido qualquer chance de conseguir o emprego.\n\n"Desculpe! Eu sinto muito!" Sofia exclamou, tentando limpar a mancha com guardanapos.\n\nO homem a olhou com olhos penetrantes, um sorriso divertido nos lábios. "Não se preocupe. Acidentes acontecem."\n\nO que Sofia não sabia era que aquele homem era Leonardo Almeida, o bilionário CEO da empresa onde ela estava prestes a fazer a entrevista. E ele havia ficado intrigado com aquela mulher desajeitada mas charmosa.\n\nQuando Sofia entrou na sala de entrevistas e viu Leonardo sentado à mesa, seu coração quase parou. "Você..." ela sussurrou.\n\n"Eu," Leonardo confirmou, ainda sorrindo. "Então, Srta. Costa, me conte por que deveria contratá-la."\n\nA entrevista foi diferente de qualquer outra. Leonardo fazia perguntas desafiadoras, mas havia algo em seus olhos - uma curiosidade, um interesse que ia além do profissional. E Sofia, apesar de seu nervosismo, se viu respondendo com honestidade e paixão sobre seus sonhos e ambições.\n\n"Você está contratada," Leonardo disse no final. "Mas com uma condição - você será minha assistente pessoal. Quero você trabalhando diretamente comigo."\n\nSofia deveria ter visto os sinais. Deveria ter percebido que aquilo era mais do que apenas um emprego. Mas ela precisava do dinheiro, precisava da oportunidade. Então ela aceitou, sem saber que estava prestes a entrar em um mundo de luxo, poder, e um amor que desafiaria tudo que ela conhecia.\n\nNos dias seguintes, Sofia descobriu que trabalhar para Leonardo era intenso. Ele era exigente, perfeccionista, mas também justo e surpreendentemente atencioso. Ele notava quando ela estava cansada, garantia que ela comesse, e às vezes, apenas às vezes, ela o pegava olhando para ela com uma expressão que fazia seu coração acelerar.\n\n"Por que você me escolheu?" Sofia perguntou uma noite, quando estavam trabalhando até tarde.\n\nLeonardo parou de digitar e a olhou. "Porque você é diferente. Você não se impressiona com dinheiro ou poder. Você é real, Sofia. E isso é raro no meu mundo."\n\nE naquele momento, algo mudou entre eles. A linha entre profissional e pessoal começou a se desfocar, e ambos sabiam que estavam caminhando em território perigoso. Mas nenhum dos dois conseguia parar.`
      
      if (num === 2) return `Capítulo ${num}: ${chapterTitle}\n\nDois meses trabalhando para Leonardo, e Sofia estava completamente fora de sua zona de conforto. Ela havia sido arrastada para um mundo de jantares de gala, viagens de jato particular, e reuniões com pessoas mais poderosas do que ela jamais imaginou conhecer. E através de tudo isso, Leonardo estava ao seu lado, guiando-a, protegendo-a, e lentamente, conquistando seu coração.\n\n"Você precisa de um vestido para o evento de amanhã," Leonardo disse casualmente durante uma reunião.\n\n"Eu tenho um vestido," Sofia protestou.\n\n"Não, você precisa de algo especial. Vou mandar minha estilista pessoal até você."\n\n"Leonardo, isso é demais. Eu não posso aceitar—"\n\n"Você pode e vai," Leonardo interrompeu, sua voz firme mas gentil. "Você representa minha empresa agora, Sofia. E além disso..." ele hesitou, "eu quero que você se sinta linda."\n\nO evento foi deslumbrante. Sofia usava um vestido vermelho que a fazia se sentir como uma princesa, e quando Leonardo a viu, a expressão em seu rosto fez todo o constrangimento valer a pena.\n\n"Você está... deslumbrante," Leonardo disse, sua voz rouca.\n\n"Obrigada," Sofia respondeu, corando.\n\nDurante o evento, Leonardo não saiu do lado dela. Sua mão estava constantemente em suas costas, guiando-a, protegendo-a. E quando uma mulher elegante tentou flirtar com Leonardo, ele a dispensou educadamente mas firmemente, seus olhos nunca deixando Sofia.\n\n"Ela era bonita," Sofia comentou depois.\n\n"Não tão bonita quanto você," Leonardo respondeu sem hesitar.\n\nA tensão entre eles era palpável. Cada toque acidental enviava eletricidade através de seus corpos. Cada olhar prolongado fazia seus corações acelerarem. Eles estavam dançando em torno de algo inevitável, e ambos sabiam disso.\n\nTudo mudou na noite em que trabalharam até tarde e uma tempestade os prendeu no escritório. Sozinhos, com apenas a luz da cidade iluminando o espaço, as barreiras finalmente caíram.\n\n"Sofia," Leonardo disse, sua voz baixa e intensa. "Eu não deveria fazer isso. Você trabalha para mim. Mas eu não consigo mais fingir que não sinto nada."\n\n"Leonardo..." Sofia sussurrou, seu coração batendo descontroladamente.\n\n"Eu estou me apaixonando por você," ele confessou. "E eu sei que é errado, que é complicado, mas eu não consigo parar."\n\nSofia não respondeu com palavras. Em vez disso, ela fechou a distância entre eles e o beijou - um beijo que continha todos os sentimentos reprimidos dos últimos dois meses. E Leonardo a beijou de volta com uma paixão que a deixou sem fôlego.\n\nQuando finalmente se separaram, ambos sabiam que haviam cruzado uma linha da qual não havia volta. Mas nenhum dos dois se arrependia. Porque às vezes, o amor acontece quando menos esperamos, com a pessoa menos esperada, e tudo que podemos fazer é nos render a ele.`

      return `Capítulo ${num}: ${chapterTitle}\n\nMeses se passaram desde aquela noite na tempestade, e Sofia e Leonardo haviam construído algo belo juntos. Seu relacionamento não era fácil - havia desafios, julgamentos, e momentos de dúvida. Mas através de tudo, eles permaneceram unidos, seu amor crescendo mais forte a cada dia.\n\nLeonardo havia mudado. Por Sofia, ele se tornou mais aberto, mais vulnerável. Ele compartilhava seus medos, seus sonhos, suas inseguranças. E Sofia o amava ainda mais por isso - não o bilionário poderoso, mas o homem por trás da máscara.\n\n"Eu tenho algo para você," Leonardo disse uma noite, levando Sofia para a cobertura de seu prédio.\n\nSob as estrelas, com a cidade brilhando abaixo deles, Leonardo se ajoelhou.\n\n"Sofia Costa, você entrou na minha vida como um furacão, derrubando todas as minhas defesas. Você me mostrou o que é realmente importante - não dinheiro ou poder, mas amor, conexão, e propósito. Você me fez querer ser um homem melhor. Então eu pergunto - você se casaria comigo?"\n\nCom lágrimas escorrendo por seu rosto, Sofia disse sim. E quando Leonardo a beijou, ela soube que havia encontrado seu lugar no mundo - não no luxo ou no poder, mas nos braços do homem que amava.\n\nEsta era a história deles - de um amor inesperado que desafiou todas as probabilidades, de dois corações que encontraram um ao outro contra todas as expectativas, e de uma jornada que provou que o verdadeiro amor não conhece barreiras de classe ou circunstância. Era uma história de esperança, de transformação, e de um amor que duraria para sempre.`
    },

    'Desejo Proibido': (num) => {
      if (num === 1) return `Capítulo ${num}: ${chapterTitle}\n\nIsabella sabia que estava jogando com fogo. Mas quando se tratava de Rafael Montenegro, ela não conseguia resistir. Ele era tudo que ela não deveria querer - o melhor amigo de seu irmão, dez anos mais velho, e completamente fora de seu alcance. Mas o desejo não se importava com lógica.\n\nTudo começou em uma festa de verão. Isabella tinha 22 anos e acabara de voltar da faculdade. Rafael estava lá, como sempre, rindo com seu irmão, parecendo devastadoramente bonito em jeans e uma camisa casual. Quando seus olhos se encontraram através da multidão, algo mudou. Não era mais a garotinha que ele costumava conhecer - ela era uma mulher, e ele finalmente a estava vendo.\n\n"Isabella," Rafael disse quando ela se aproximou. "Você cresceu."\n\n"Eu sempre estive crescendo, Rafael. Você só nunca notou," ela respondeu, sua voz mais ousada do que se sentia.\n\nRafael a estudou, seus olhos escuros percorrendo seu rosto, seu corpo. "Eu notei," ele admitiu baixinho. "E isso é um problema."\n\n"Por quê?"\n\n"Porque você é a irmã do meu melhor amigo. Porque eu sou muito velho para você. Porque isso é errado em todos os sentidos."\n\n"E se eu não me importar?" Isabella desafiou.\n\nRafael deu um passo mais perto, sua voz baixa e intensa. "Você deveria se importar, Isabella. Porque se eu começar algo com você, não vai ser inocente. Não vai ser gentil. Vai ser intenso, possessivo, e completamente consumidor. E eu não sei se você está pronta para isso."\n\nO coração de Isabella batia descontroladamente. "Talvez eu esteja mais pronta do que você pensa."\n\nNos dias seguintes, eles dançaram em torno um do outro - olhares roubados, toques acidentais, tensão sexual tão espessa que era quase tangível. Isabella sabia que estava brincando com fogo, mas ela não conseguia parar. E Rafael, apesar de todas as suas reservas, estava igualmente preso.\n\nTudo explodiu uma noite quando Isabella foi até o apartamento de Rafael. Ela não tinha um plano, apenas um desejo ardente que não podia mais ignorar.\n\n"Isabella, o que você está fazendo aqui?" Rafael perguntou quando abriu a porta.\n\n"Parando de fingir," ela respondeu, entrando no apartamento. "Parando de negar o que ambos sentimos."\n\n"Seu irmão vai me matar," Rafael disse, mas não se afastou quando ela se aproximou.\n\n"Então vale a pena morrer por isso?" Isabella perguntou, suas mãos subindo pelo peito dele.\n\nRafael a agarrou, puxando-a contra ele. "Você não tem ideia do que está pedindo."\n\n"Então me mostre," Isabella desafiou.\n\nE Rafael, finalmente cedendo ao desejo que vinha lutando contra há meses, a beijou - um beijo que era tudo menos gentil, tudo menos inocente. Era fome, paixão, e anos de desejo reprimido explodindo de uma vez.\n\nQuando finalmente se separaram, ambos sabiam que haviam cruzado uma linha proibida. Mas nenhum dos dois se arrependia. Porque às vezes, o desejo proibido é o mais doce de todos.`

      if (num === 2) return `Capítulo ${num}: ${chapterTitle}\n\nManter o relacionamento em segredo era tortura. Isabella e Rafael se encontravam em segredo, roubavam momentos quando podiam, viviam para os toques furtivos e os olhares carregados que ninguém mais notava. Mas a mentira estava pesando em ambos, especialmente em Rafael.\n\n"Não podemos continuar assim," Rafael disse uma noite, segurando Isabella em seus braços. "Seu irmão é meu melhor amigo. Ele merece saber a verdade."\n\n"Ele vai nos matar," Isabella protestou. "Ele nunca vai entender."\n\n"Então fazemos ele entender," Rafael insistiu. "Porque eu não quero mais te esconder, Isabella. Eu quero que o mundo saiba que você é minha."\n\nA confissão veio em uma noite de jantar em família. O irmão de Isabella, Marco, notou imediatamente a tensão entre eles.\n\n"Tem algo acontecendo aqui?" Marco perguntou, seus olhos estreitando.\n\nRafael respirou fundo. "Sim. Marco, eu preciso te contar algo. Isabella e eu... estamos juntos."\n\nO silêncio que se seguiu foi ensurdecedor. Marco olhou entre os dois, sua expressão passando de confusão para raiva.\n\n"Você está brincando comigo," Marco disse, sua voz perigosamente baixa. "Minha irmã? Minha irmã pequena?"\n\n"Eu não sou mais uma criança, Marco," Isabella interveio. "E eu amo Rafael."\n\n"Você o ama?" Marco riu amargamente. "Isabella, você não sabe o que é amor. E você," ele se virou para Rafael, "você era meu melhor amigo. Como você pôde fazer isso?"\n\n"Porque eu a amo também," Rafael disse firmemente. "Eu sei que é complicado, eu sei que não é o que você quer ouvir. Mas é a verdade. Eu amo sua irmã, Marco. E eu vou passar o resto da minha vida provando que sou digno dela."\n\nA reconciliação não foi fácil. Levou tempo, conversas difíceis, e muitas lágrimas. Mas eventualmente, Marco viu o que todos os outros podiam ver - que Rafael e Isabella eram feitos um para o outro, que seu amor era real e profundo.\n\n"Se você a machucar," Marco avisou Rafael, "não haverá lugar no mundo onde você possa se esconder de mim."\n\n"Eu nunca vou machucá-la," Rafael prometeu. "Ela é tudo para mim."\n\nE finalmente, eles podiam amar abertamente, sem segredos, sem vergonha. O desejo proibido havia se transformado em um amor aceito, e ambos sabiam que haviam lutado por algo que valia cada momento difícil.`

      return `Capítulo ${num}: ${chapterTitle}\n\nDois anos depois, Isabella e Rafael estavam mais fortes do que nunca. Eles haviam enfrentado julgamentos, superado obstáculos, e provado a todos - incluindo a si mesmos - que seu amor era real e duradouro.\n\n"Eu tenho uma surpresa para você," Rafael disse uma noite, levando Isabella para a praia onde tiveram seu primeiro beijo secreto.\n\nSob o luar, com o som das ondas ao fundo, Rafael se ajoelhou.\n\n"Isabella, você transformou minha vida. Você me mostrou que o amor vale qualquer risco, qualquer desafio. Você é minha melhor amiga, minha amante, minha alma gêmea. Então eu pergunto - você se casaria comigo?"\n\nCom lágrimas de alegria, Isabella disse sim. E quando Rafael a beijou, ela soube que todo o risco, todo o desafio, toda a luta havia valido a pena.\n\nEsta era a história deles - de um desejo proibido que se transformou no amor mais puro, de dois corações que se recusaram a desistir apesar de todos os obstáculos, e de uma jornada que provou que o verdadeiro amor sempre encontra um caminho. Era uma história de coragem, de paixão, e de um amor que desafiou todas as regras para existir.`
    }
  }

  // Template genérico para outros livros
  const genericContent = (num: number) => {
    if (num === 1) return `Capítulo ${num}: ${chapterTitle}\n\nEste é o início de uma jornada extraordinária. Nossa protagonista está prestes a descobrir que sua vida nunca mais será a mesma. O destino tem planos que ela não poderia imaginar, e tudo começa neste momento crucial.\n\nA história se desenrola com intensidade, apresentando personagens complexos e situações que desafiam expectativas. Cada palavra é cuidadosamente escolhida para criar uma narrativa envolvente que prende o leitor do início ao fim.\n\nOs diálogos são naturais e reveladores, mostrando as personalidades únicas de cada personagem. As descrições são vívidas, transportando o leitor para dentro da cena, fazendo-o sentir cada emoção, cada tensão, cada momento de alegria ou tristeza.\n\nO conflito principal é estabelecido de forma magistral, criando questões que o leitor anseia por ver respondidas. As motivações dos personagens são claras mas complexas, tornando-os humanos e relacionáveis.\n\nO capítulo termina com um gancho poderoso que deixa o leitor ansioso para descobrir o que acontecerá a seguir. As sementes do conflito foram plantadas, os personagens foram apresentados de forma memorável, e o palco está montado para uma história inesquecível.`
    
    if (num === 2) return `Capítulo ${num}: ${chapterTitle}\n\nA tensão aumenta enquanto nossa protagonista enfrenta novos desafios. As relações se aprofundam, segredos começam a ser revelados, e o conflito principal se intensifica de maneiras inesperadas.\n\nOs personagens mostram novas facetas de suas personalidades, revelando vulnerabilidades e forças que não eram aparentes antes. O desenvolvimento é orgânico e convincente, fazendo o leitor se importar profundamente com o destino de cada um.\n\nCenas de ação se misturam com momentos de introspecção, criando um ritmo perfeito que mantém o interesse sem cansar. Os diálogos continuam afiados e reveladores, avançando a trama enquanto desenvolvem os relacionamentos.\n\nNovos obstáculos surgem, testando os personagens de maneiras que eles não esperavam. Suas respostas revelam seu verdadeiro caráter e estabelecem as bases para o crescimento que virá.\n\nO capítulo conclui com uma reviravolta que muda tudo, elevando as apostas e preparando o terreno para o clímax que está por vir. Os leitores estão completamente investidos na jornada dos personagens.`
    
    return `Capítulo ${num}: ${chapterTitle}\n\nO clímax se aproxima. Decisões cruciais precisam ser tomadas, verdades são finalmente reveladas, e nossos personagens enfrentam seus maiores medos e desafios. Este é o momento que define tudo.\n\nAs cenas culminantes são escritas com maestria, equilibrando ação, emoção e resolução de forma satisfatória. Cada fio da trama é cuidadosamente amarrado, cada pergunta respondida, cada arco de personagem completado.\n\nOs personagens mostram o quanto cresceram ao longo da jornada. Eles não são mais as mesmas pessoas do início - foram transformados por suas experiências, fortalecidos por seus desafios, e enriquecidos por suas conexões.\n\nMomentos emocionais poderosos pontuam o capítulo, fazendo o leitor rir, chorar, e torcer pelos personagens que aprendeu a amar. As confissões são sinceras, os sacrifícios são significativos, e as vitórias são merecidas.\n\nO capítulo termina com uma nota de esperança, amor, ou promessa de aventuras futuras. Os personagens encontraram algo precioso - seja amor, redenção, ou propósito. Esta é uma história que ficará com os leitores muito depois de terminarem de ler, uma jornada que tocou seus corações e inspirou suas almas.`
  }

  const generator = contentTemplates[bookTitle] || genericContent
  return generator(chapterNum)
}

// Dados dos 6 livros específicos
const specificBooks = [
  {
    title: 'Amor Inesperado do Bilionário',
    author: 'Sofia Mendes',
    description: 'Sofia nunca imaginou que um encontro casual mudaria sua vida para sempre. Quando ela derrama café no bilionário Leonardo Almeida, não faz ideia de que ele será seu novo chefe - e muito mais. Entre reuniões de negócios e jantares de gala, uma química inegável surge entre eles. Mas será que o amor pode florescer quando há tantas diferenças entre seus mundos? Uma história emocionante sobre como o destino une duas almas que pareciam impossíveis de se encontrar.',
    cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&auto=format',
    total_chapters: 45,
    status: 'ongoing' as const,
    categories: ['Bilionário', 'Romance']
  },
  {
    title: 'Desejo Proibido',
    author: 'Isabella Russo',
    description: 'Isabella sempre foi apaixonada por Rafael, o melhor amigo de seu irmão. Mas ele sempre a viu apenas como a irmã mais nova de seu amigo. Quando ela volta da faculdade transformada em uma mulher confiante, Rafael finalmente a vê com outros olhos. O que começa como uma atração proibida se transforma em uma paixão avassaladora que eles não podem mais negar. Mas como confessar um amor que pode destruir uma amizade de anos? Uma história intensa sobre desejo, lealdade e o poder transformador do amor verdadeiro.',
    cover_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&auto=format',
    total_chapters: 42,
    status: 'ongoing' as const,
    categories: ['Romance', 'Romance Hot']
  },
  {
    title: 'Obsessão do Mafioso',
    author: 'Dante Moretti',
    description: 'Quando Aurora é sequestrada por engano pela família Moretti, ela descobre que o líder da máfia italiana não é o monstro que todos pintam. Dante Moretti é frio, calculista e perigoso, mas também é complexo e surpreendentemente protetor com ela. Presos em um mundo de segredos, sangue e alianças quebradas, Aurora precisa decidir: confiar no homem que destruiu sua vida ou se tornar a rainha ao lado dele. Uma história sombria e apaixonante sobre redenção, poder e um amor que desafia todas as regras.',
    cover_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&auto=format',
    total_chapters: 48,
    status: 'ongoing' as const,
    categories: ['Máfia', 'Romance']
  },
  {
    title: 'A Luna Renascida',
    author: 'Elena Moon',
    description: 'Rejeitada por sua matilha e traída pelo alfa que deveria ser seu companheiro, Luna morre... mas renasce com uma segunda chance. Desta vez, ela está determinada a não cometer os mesmos erros. Mas o destino tem outros planos quando ela descobre que seu verdadeiro par destinado é Kael, o alfa mais poderoso e temido de todos os territórios. Entre política de matilhas, inimigos antigos e um amor que transcende vidas, Luna precisa encontrar sua força interior e reivindicar seu lugar como a Luna que sempre deveria ter sido.',
    cover_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&auto=format',
    total_chapters: 50,
    status: 'ongoing' as const,
    categories: ['Lobisomem', 'Fantasia', 'Romance']
  },
  {
    title: 'Não Pode Fugir de Mim',
    author: 'Adrian Dark',
    description: 'Depois de uma noite intensa com um estranho misterioso, Melissa pensa que nunca mais o verá. Mas o destino tem outros planos quando ela descobre que ele é Adrian Dark, o novo CEO da empresa onde trabalha - e ele não esqueceu dela. Adrian é possessivo, dominador e determinado a tê-la de volta. Melissa tenta resistir, mas a química entre eles é inegável. Quanto mais ela tenta fugir, mais ele a persegue. Uma história eletrizante sobre obsessão, desejo e um amor que não aceita não como resposta.',
    cover_url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop&auto=format',
    total_chapters: 40,
    status: 'ongoing' as const,
    categories: ['Romance Hot', 'Bilionário']
  },
  {
    title: 'A Vingança de Judy',
    author: 'Judy Blackwood',
    description: 'Traída pelo homem que amava e destruída por aqueles em quem confiava, Judy perde tudo. Mas ela não vai aceitar isso quieta. Cinco anos depois, ela retorna transformada - mais forte, mais inteligente e determinada a fazer todos pagarem pelo que fizeram. Mas seus planos de vingança se complicam quando Marcus, o único homem que sempre esteve ao seu lado, confessa seus sentimentos por ela. Entre vingança e amor, Judy precisa decidir: seguir em frente com seu coração ou completar a missão que planejou por anos.',
    cover_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop&auto=format',
    total_chapters: 38,
    status: 'ongoing' as const,
    categories: ['Romance', 'Drama']
  }
]

// Títulos de capítulos
const chapterTitles = [
  'O Início', 'Revelações', 'Conflito', 'Tensão Crescente', 'Primeiro Beijo',
  'Segredos', 'Confronto', 'Verdades', 'Decisões', 'Aproximação',
  'Perigo', 'Proteção', 'Confissão', 'Desafios', 'Superação',
  'Amor', 'Medo', 'Coragem', 'Sacrifício', 'Redenção',
  'Família', 'Aliados', 'Inimigos', 'Batalha', 'Vitória',
  'Paz', 'Felicidade', 'Futuro', 'Promessas', 'Eternidade',
  'Crescimento', 'Mudanças', 'Aceitação', 'Perdão', 'Renovação',
  'Esperança', 'Sonhos', 'Realização', 'Plenitude', 'Legado',
  'Continuidade', 'Tradição', 'Sabedoria', 'Gratidão', 'Celebração',
  'Reflexão', 'Memórias', 'Jornada', 'Destino', 'Final Feliz'
]

export async function POST() {
  try {
    const logs: string[] = []
    logs.push('🌱 Iniciando seed dos 6 livros específicos...')

    // 1. Buscar ou criar categorias
    const allCategories = ['Bilionário', 'Romance', 'Romance Hot', 'Máfia', 'Lobisomem', 'Fantasia', 'Drama']
    const categoryMap: Record<string, string> = {}

    for (const catName of allCategories) {
      const slug = catName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
      
      const { data: existing } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', slug)
        .single()

      if (existing) {
        categoryMap[catName] = existing.id
      } else {
        const { data: newCat } = await supabase
          .from('categories')
          .insert({ name: catName, slug, description: `Categoria ${catName}` })
          .select('id')
          .single()
        
        if (newCat) {
          categoryMap[catName] = newCat.id
        }
      }
    }

    logs.push('✅ Categorias processadas')

    // 2. Inserir cada livro com seus capítulos
    for (const bookData of specificBooks) {
      logs.push(`📚 Processando: ${bookData.title}...`)

      // Verificar se livro já existe
      const { data: existingBook } = await supabase
        .from('books')
        .select('id')
        .eq('title', bookData.title)
        .single()

      let bookId: string

      if (existingBook) {
        logs.push(`  ⚠️ Livro já existe, atualizando...`)
        bookId = existingBook.id
        
        // Atualizar informações do livro
        await supabase
          .from('books')
          .update({
            author: bookData.author,
            description: bookData.description,
            cover_url: bookData.cover_url,
            total_chapters: bookData.total_chapters,
            status: bookData.status
          })
          .eq('id', bookId)
      } else {
        // Criar novo livro
        const { data: newBook, error: bookError } = await supabase
          .from('books')
          .insert({
            title: bookData.title,
            slug: bookData.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-'),
            author: bookData.author,
            description: bookData.description,
            cover_url: bookData.cover_url,
            total_views: Math.floor(Math.random() * 100000) + 50000,
            total_chapters: bookData.total_chapters,
            status: bookData.status
          })
          .select('id')
          .single()

        if (bookError || !newBook) {
          logs.push(`  ❌ Erro ao criar livro: ${bookError?.message}`)
          continue
        }

        bookId = newBook.id
        logs.push(`  ✅ Livro criado com ID: ${bookId}`)
      }

      // Associar categorias
      for (const catName of bookData.categories) {
        const catId = categoryMap[catName]
        if (catId) {
          await supabase
            .from('book_categories')
            .upsert({ book_id: bookId, category_id: catId }, { onConflict: 'book_id,category_id' })
        }
      }

      // Deletar capítulos existentes para recriar
      await supabase
        .from('chapters')
        .delete()
        .eq('book_id', bookId)

      // Criar capítulos
      logs.push(`  📖 Criando ${bookData.total_chapters} capítulos...`)
      
      for (let i = 1; i <= bookData.total_chapters; i++) {
        const chapterTitle = chapterTitles[(i - 1) % chapterTitles.length]
        const content = generateChapterContent(bookData.title, i, chapterTitle)

        await supabase
          .from('chapters')
          .insert({
            book_id: bookId,
            chapter_number: i,
            title: chapterTitle,
            content: content,
            views: Math.floor(Math.random() * 10000) + 1000,
            is_premium: i > 3
          })

        if (i % 10 === 0) {
          logs.push(`    ✓ ${i}/${bookData.total_chapters} capítulos criados`)
        }
      }

      logs.push(`  ✅ ${bookData.title} completo!`)
    }

    logs.push('🎉 Seed dos 6 livros específicos concluído com sucesso!')

    return NextResponse.json({ 
      success: true, 
      message: 'Todos os 6 livros foram adicionados com sucesso!',
      logs 
    })

  } catch (error) {
    console.error('❌ Erro durante o seed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    }, { status: 500 })
  }
}
