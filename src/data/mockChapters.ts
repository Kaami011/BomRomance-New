import type { Chapter } from '@/lib/supabase'

// Função auxiliar para gerar conteúdo rico e extenso para cada livro
function generateChapterContent(bookId: string, chapterNum: number, title: string): string {
  const contentMap: Record<string, (num: number) => string> = {
    'mock-mafia-1': (num) => {
      if (num === 1) return `Capítulo ${num}: ${title}

A chuva caía forte sobre as ruas de Chicago quando Aurora saiu do trabalho naquela noite fatídica. Ela mal podia imaginar que sua vida estava prestes a mudar completamente. O sequestro aconteceu rápido demais - mãos fortes a puxaram para dentro de um carro preto, uma venda cobriu seus olhos, e quando ela acordou, estava em uma mansão luxuosa que parecia saída de um filme de máfia.

Dante Moretti observava a mulher amarrada à cadeira em seu escritório. Seus homens haviam cometido um erro - ela não era a filha do senador corrupto que ele pretendia usar como barganha. Era apenas uma garota comum, no lugar errado, na hora errada. Ele deveria matá-la para eliminar testemunhas, mas algo naqueles olhos assustados o fez hesitar.

"Quem é você?" Aurora perguntou, tentando manter a voz firme apesar do medo que sentia.

"Alguém que você deveria temer," Dante respondeu, sua voz profunda ecoando no escritório. "Mas parece que meus homens cometeram um erro. Você não é quem eu procurava."

Aurora sentiu um alívio momentâneo, seguido de pânico renovado. "Então... você vai me deixar ir?"

Dante deu um sorriso sombrio. "Não é tão simples assim, cara. Você viu meu rosto, conhece este lugar. Não posso simplesmente deixá-la ir e esperar que fique quieta."

Nos dias seguintes, Aurora descobriu que estava presa em um mundo que nunca soube que existia. Dante Moretti era o líder da família de máfia mais poderosa de Chicago, um homem temido por todos. Mas quanto mais tempo passava com ele, mais percebia que havia camadas naquele homem - não era apenas o monstro que todos pintavam.

Dante, por sua vez, encontrava-se cada vez mais fascinado pela prisioneira involuntária. Aurora não se curvava diante dele como todos os outros. Ela o desafiava, questionava suas decisões, e de alguma forma, fazia com que ele questionasse o próprio caminho que havia escolhido na vida.

"Por que você faz isso?" Aurora perguntou uma noite, quando Dante a encontrou na biblioteca da mansão. "Por que escolheu esta vida?"

"Eu não escolhi," Dante respondeu, servindo-se de whisky. "Nasci nela. Meu pai era o Don antes de mim. Esta é a única vida que conheço."

"Mas você poderia sair. Começar de novo."

Dante riu amargamente. "Não se sai da máfia, Aurora. Você entra para sempre, ou morre tentando sair."

O que nenhum dos dois esperava era que, em meio ao perigo e aos segredos, algo começasse a florescer entre eles. Um sentimento perigoso que poderia destruir tudo - ou salvá-los.`
      
      if (num === 2) return `Capítulo ${num}: ${title}

Três semanas haviam se passado desde o sequestro, e Aurora ainda estava na mansão Moretti. Mas agora, ela não era mais tratada como prisioneira - era mais como uma... convidada permanente. Dante havia lhe dado um quarto luxuoso, roupas caras, e liberdade para circular pela propriedade. Mas ela não podia sair. Não ainda.

"Você está me mantendo aqui como um pássaro em uma gaiola de ouro," Aurora confrontou Dante durante o café da manhã.

"Estou te mantendo viva," Dante corrigiu, seus olhos escuros fixos nela. "Você acha que é seguro para você voltar lá fora? Meus inimigos já sabem que você esteve aqui. Se eu te soltar agora, você se torna um alvo."

Aurora odiava admitir, mas ele tinha razão. Ela havia ouvido conversas, visto rostos, aprendido nomes. Sabia demais. E no mundo de Dante, conhecimento era perigoso.

Mas o que realmente a assustava não era o perigo externo - era o que estava sentindo por Dante. Ele era um criminoso, um homem que havia feito coisas terríveis. Mas também era complexo, inteligente, e surpreendentemente gentil com ela. Ele a protegia, conversava com ela até tarde da noite, e às vezes, quando seus olhares se encontravam, Aurora sentia uma eletricidade que não podia negar.

Uma noite, tudo mudou. Um ataque rival à mansão forçou Dante a proteger Aurora pessoalmente. Ele a levou para um quarto seguro, seu corpo cobrindo o dela enquanto tiros ecoavam lá fora.

"Não vou deixar nada acontecer com você," Dante sussurrou, seu rosto a centímetros do dela.

"Por quê?" Aurora perguntou, seu coração batendo descontroladamente. "Por que você se importa?"

Dante não respondeu com palavras. Em vez disso, ele a beijou - um beijo desesperado, cheio de toda a tensão que havia se acumulado entre eles nas últimas semanas. E Aurora, para sua própria surpresa, retribuiu.

Quando o perigo passou e eles finalmente se separaram, ambos sabiam que haviam cruzado uma linha da qual não havia volta. O que quer que fosse aquilo entre eles, era real, intenso, e completamente impossível.

"Isso é loucura," Aurora sussurrou.

"Eu sei," Dante concordou, mas não se afastou. "Mas eu não consigo ficar longe de você."

E assim começou um romance proibido, perigoso, que poderia destruir ambos - ou salvá-los de seus próprios demônios.`
      
      return `Capítulo ${num}: ${title}

Meses se passaram, e Aurora havia se tornado parte integral da vida de Dante. Ela não era mais a garota assustada que havia sido sequestrada - agora era a mulher ao lado do homem mais perigoso de Chicago. E surpreendentemente, ela havia encontrado seu lugar naquele mundo sombrio.

Dante havia mudado também. Por Aurora, ele começou a questionar suas escolhas, a buscar maneiras de tornar seus negócios mais legítimos. Ele ainda era o Don, ainda era temido, mas agora havia algo mais - havia esperança de redenção.

"Eu quero sair," Dante confessou uma noite, segurando Aurora em seus braços. "Quero construir uma vida onde você não precise ter medo. Onde nossos filhos não cresçam neste mundo."

Aurora se virou para olhá-lo, surpresa. "Nossos filhos?"

Dante sorriu - um sorriso genuíno que raramente aparecia. "Se você me aceitar. Se você quiser construir um futuro comigo, apesar de tudo que sou, de tudo que fiz."

"Eu te amo," Aurora disse simplesmente. "Não o Don, não o líder da máfia. Eu amo o homem que você é quando está comigo. O homem que lê poesia, que protege os fracos, que sonha com um futuro melhor."

"Então fique comigo," Dante implorou. "Seja minha rainha. Juntos, podemos mudar tudo."

E Aurora, contra toda lógica, contra todo bom senso, disse sim. Porque às vezes, o amor não faz sentido. Às vezes, ele simplesmente é - poderoso, transformador, e impossível de negar.

Eles sabiam que o caminho à frente seria difícil. Haveria inimigos, desafios, perigos. Mas juntos, eles eram mais fortes. Juntos, eles poderiam enfrentar qualquer coisa.

Esta era a história deles - de sangue e sedução, de perigo e paixão, de dois corações que encontraram um ao outro no lugar mais improvável e se recusaram a desistir, não importa o custo.`
    },

    'mock-mafia-2': (num) => {
      if (num === 1) return `Capítulo ${num}: ${title}

Helena nunca imaginou que estaria negociando sua própria vida em troca da de seu irmão. Mas ali estava ela, no escritório de Adrian Russo, o homem mais temido de Chicago, prestes a se tornar sua esposa em um casamento arranjado que salvaria seu irmão de uma dívida de jogo impagável.

"Então, você concorda com os termos?" Adrian perguntou, sua voz fria e calculista. Ele era devastadoramente bonito - cabelos escuros, olhos penetrantes, corpo atlético sob o terno impecável. Mas havia uma dureza nele que assustava Helena.

"Eu concordo," Helena respondeu, mantendo a cabeça erguida. "Mas quero que fique claro - isso é apenas um negócio. Não espere que eu seja uma esposa de verdade."

Adrian sorriu - um sorriso que não alcançou seus olhos. "Querida, eu não quero uma esposa de verdade. Quero uma parceira de negócios que possa aparecer ao meu lado em eventos sociais. Nada mais."

Mas ambos estavam mentindo para si mesmos. Desde o momento em que Helena entrou em seu escritório, Adrian sentiu algo que não esperava - atração, curiosidade, e algo mais profundo que ele não conseguia nomear. E Helena, apesar de todo seu medo e ressentimento, não podia negar que Adrian Russo era o homem mais magnético que já havia conhecido.

O casamento aconteceu uma semana depois - uma cerimônia pequena, apenas testemunhas necessárias. Quando Adrian colocou o anel no dedo de Helena, ela sentiu um arrepio percorrer sua espinha. Isto era real. Ela era agora a esposa do Don.

"Bem-vinda à família Russo," Adrian sussurrou quando se beijaram para selar o casamento. E naquele beijo, Helena sentiu uma promessa de algo mais - algo perigoso e emocionante.

A vida como esposa de Adrian era complexa. Durante o dia, ela tinha que manter as aparências, sorrir para a sociedade, fingir que era um casamento feliz. À noite, ela e Adrian mantinham uma distância respeitosa, cada um em seu próprio quarto. Mas a tensão entre eles crescia a cada dia.

"Por que você faz isso?" Helena perguntou uma noite, encontrando Adrian em seu escritório tarde da noite. "Por que escolheu esta vida?"

Adrian a olhou por um longo momento antes de responder. "Porque é a única coisa que sei fazer. Meu pai me treinou desde criança para ser o Don. Não há outra vida para mim."

"Mas você não parece feliz."

"Felicidade é um luxo que homens como eu não podem ter," Adrian respondeu, servindo-se de whisky. "Mas você... você poderia ter sido feliz. Sinto muito por ter tirado isso de você."

E naquele momento, Helena viu além da máscara fria - viu um homem solitário, preso em uma vida que não escolheu, ansiando por algo mais. E seu coração, contra sua vontade, começou a amolecer.`

      if (num === 2) return `Capítulo ${num}: ${title}

Dois meses de casamento, e a dinâmica entre Helena e Adrian havia mudado drasticamente. O que começou como um acordo frio de negócios estava se transformando em algo muito mais complicado. Eles ainda mantinham quartos separados, mas passavam cada vez mais tempo juntos - jantares que se estendiam por horas, conversas profundas sobre tudo e nada, momentos roubados onde suas mãos se tocavam e a eletricidade entre eles era inegável.

Adrian estava lutando contra seus próprios sentimentos. Ele havia jurado nunca se apaixonar, nunca se tornar vulnerável. Mas Helena estava quebrando todas as suas defesas. Ela o desafiava, o fazia rir, o fazia querer ser um homem melhor. E isso o assustava mais do que qualquer inimigo jamais poderia.

Tudo mudou na noite do ataque. Rivais tentaram sequestrar Helena para usar como barganha contra Adrian. Ele chegou a tempo, mas ver Helena em perigo despertou algo primitivo nele - uma necessidade feroz de proteger, de possuir, de nunca deixá-la ir.

"Você está bem?" Adrian perguntou depois, suas mãos tremendo enquanto verificava Helena em busca de ferimentos.

"Estou bem," Helena assegurou, mas ela também estava tremendo. "Você... você me salvou."

"Sempre," Adrian prometeu, puxando-a para seus braços. "Eu sempre vou te salvar, Helena. Você é minha esposa. Minha."

E então ele a beijou - não um beijo educado para as câmeras, mas um beijo desesperado, possessivo, cheio de todo o desejo reprimido dos últimos dois meses. Helena retribuiu com igual fervor, suas mãos agarrando a camisa dele, seu corpo pressionado contra o dele.

"Adrian," ela sussurrou quando eles finalmente se separaram. "O que estamos fazendo?"

"Parando de mentir para nós mesmos," Adrian respondeu, sua testa encostada na dela. "Eu te quero, Helena. Não como parte de um acordo de negócios. Eu te quero de verdade."

"Eu também te quero," Helena confessou. "Mas tenho medo. Medo de me machucar, medo de perder você, medo deste mundo em que você vive."

"Eu vou te proteger," Adrian prometeu. "Com minha vida, se necessário. Você é a coisa mais preciosa que já tive, Helena. E eu não vou deixar nada te machucar."

Naquela noite, eles finalmente se tornaram marido e mulher de verdade. E no processo, ambos descobriram que o amor pode florescer até nos lugares mais sombrios, entre as pessoas mais improváveis.`

      return `Capítulo ${num}: ${title}

Um ano depois, Helena e Adrian haviam construído algo belo em meio ao caos. Seu casamento, que começou como um acordo frio, havia se transformado em um amor profundo e verdadeiro. Helena não era mais apenas a esposa do Don - ela era sua parceira, sua confidente, sua rainha em todos os sentidos.

Adrian havia mudado também. Por Helena, ele começou a fazer escolhas diferentes, a buscar caminhos mais legítimos para seus negócios. Ele ainda era poderoso, ainda era temido, mas agora havia algo mais - havia amor, família, propósito além do poder.

"Eu tenho uma notícia," Helena disse uma manhã, suas mãos tremendo ligeiramente enquanto segurava um teste de gravidez positivo.

Adrian olhou para o teste, depois para Helena, e seu rosto se transformou em pura alegria. "Nós vamos ter um bebê?"

"Vamos ter um bebê," Helena confirmou, lágrimas de felicidade escorrendo por seu rosto.

Adrian a pegou nos braços, girando-a no ar antes de beijá-la profundamente. "Você me deu tudo, Helena. Amor, propósito, e agora uma família. Eu não mereço você."

"Você merece ser feliz," Helena corrigiu. "E eu vou passar o resto da minha vida te fazendo feliz."

Eles sabiam que ainda haveria desafios. O mundo de Adrian era perigoso, e agora eles tinham um filho para proteger. Mas juntos, eles eram invencíveis. Juntos, eles poderiam enfrentar qualquer coisa.

Esta era a história deles - de um casamento arranjado que se tornou o maior amor de suas vidas, de dois corações que encontraram um ao outro contra todas as probabilidades, e se recusaram a desistir, não importa o custo. Era uma história de redenção, de amor que transforma, e de esperança em meio à escuridão.`
    }
  }

  // Template genérico para livros sem conteúdo específico
  const genericContent = (bookId: string, num: number, title: string) => {
    if (num === 1) return `Capítulo ${num}: ${title}

Este é o início de uma jornada extraordinária. Nossa protagonista está prestes a descobrir que sua vida nunca mais será a mesma. O destino tem planos que ela não poderia imaginar, e tudo começa neste momento crucial.

[Conteúdo extenso do capítulo 1 - mais de 3000 palavras de desenvolvimento da história, apresentação de personagens, construção do mundo, e estabelecimento do conflito principal. A narrativa é rica em detalhes, emoções profundas, e diálogos envolventes que capturam a essência dos personagens e suas motivações.]

O capítulo termina com um gancho poderoso que deixa o leitor ansioso para descobrir o que acontecerá a seguir. As sementes do conflito foram plantadas, os personagens foram apresentados de forma memorável, e o palco está montado para uma história inesquecível.`
    
    if (num === 2) return `Capítulo ${num}: ${title}

A tensão aumenta enquanto nossa protagonista enfrenta novos desafios. As relações se aprofundam, segredos começam a ser revelados, e o conflito principal se intensifica de maneiras inesperadas.

[Conteúdo extenso do capítulo 2 - mais de 3000 palavras explorando o desenvolvimento dos relacionamentos, aprofundando o conflito, revelando camadas dos personagens, e construindo a tensão emocional. Diálogos significativos, cenas de ação quando apropriado, e momentos de vulnerabilidade que humanizam os personagens.]

O capítulo conclui com uma reviravolta que muda tudo, elevando as apostas e preparando o terreno para o clímax que está por vir. Os leitores estão completamente investidos na jornada dos personagens.`
    
    return `Capítulo ${num}: ${title}

O clímax se aproxima. Decisões cruciais precisam ser tomadas, verdades são finalmente reveladas, e nossos personagens enfrentam seus maiores medos e desafios. Este é o momento que define tudo.

[Conteúdo extenso do capítulo 3 - mais de 3000 palavras trazendo resoluções satisfatórias, momentos emocionais poderosos, e um senso de conclusão (ou preparação para mais) que deixa os leitores satisfeitos mas querendo mais. Cenas culminantes, confissões importantes, e transformações de personagens que mostram crescimento e evolução.]

O capítulo termina com uma nota de esperança, amor, ou promessa de aventuras futuras. Os personagens cresceram, mudaram, e encontraram algo precioso - seja amor, redenção, ou propósito. Esta é uma história que ficará com os leitores muito depois de terminarem de ler.`
  }

  const generator = contentMap[bookId] || ((num: number) => genericContent(bookId, num, title))
  return generator(chapterNum)
}

// Capítulos para todos os 28 livros
export const mockChapters: Record<string, Chapter[]> = {}

// Lista de todos os IDs de livros com número de capítulos
const booksConfig = [
  { id: 'mock-mafia-1', chapters: 45 },
  { id: 'mock-mafia-2', chapters: 42 },
  { id: 'mock-paranormal-1', chapters: 38 },
  { id: 'mock-paranormal-2', chapters: 35 },
  { id: 'mock-jogos-1', chapters: 40 },
  { id: 'mock-jogos-2', chapters: 37 },
  { id: 'mock-bilionario-1', chapters: 48 },
  { id: 'mock-bilionario-2', chapters: 44 },
  { id: 'mock-scifi-1', chapters: 36 },
  { id: 'mock-scifi-2', chapters: 34 },
  { id: 'mock-romance-1', chapters: 41 },
  { id: 'mock-romance-2', chapters: 39 },
  { id: 'mock-hot-1', chapters: 50 },
  { id: 'mock-hot-2', chapters: 47 },
  { id: 'mock-lgbtq-1', chapters: 38 },
  { id: 'mock-lgbtq-2', chapters: 36 },
  { id: 'mock-misterio-1', chapters: 40 },
  { id: 'mock-misterio-2', chapters: 38 },
  { id: 'mock-lobisomem-1', chapters: 46 },
  { id: 'mock-lobisomem-2', chapters: 43 },
  { id: 'mock-fantasia-1', chapters: 40 },
  { id: 'mock-fantasia-2', chapters: 37 },
  { id: 'mock-teen-1', chapters: 35 },
  { id: 'mock-teen-2', chapters: 33 },
  { id: 'mock-mm-1', chapters: 39 },
  { id: 'mock-mm-2', chapters: 37 },
  { id: 'mock-vampiro-1', chapters: 44 },
  { id: 'mock-vampiro-2', chapters: 42 }
]

// Títulos genéricos para capítulos
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

// Gerar capítulos para cada livro
booksConfig.forEach(({ id, chapters: totalChapters }) => {
  mockChapters[id] = Array.from({ length: totalChapters }, (_, i) => {
    const chapterNum = i + 1
    const title = chapterTitles[i % chapterTitles.length] || `Capítulo ${chapterNum}`
    
    return {
      id: `${id}-ch-${chapterNum}`,
      book_id: id,
      chapter_number: chapterNum,
      title,
      content: generateChapterContent(id, chapterNum, title),
      views: Math.floor(Math.random() * 50000) + 10000,
      is_premium: chapterNum > 3,
      created_at: new Date(2024, 0, 1 + i).toISOString(),
      updated_at: new Date(2024, 0, 1 + i).toISOString()
    }
  })
})

// Função para obter capítulos de um livro
export function getMockChapters(bookId: string): Chapter[] {
  return mockChapters[bookId] || []
}

// Função para obter um capítulo específico
export function getMockChapter(bookId: string, chapterNumber: number): Chapter | undefined {
  const chapters = mockChapters[bookId] || []
  return chapters.find(ch => ch.chapter_number === chapterNumber)
}
