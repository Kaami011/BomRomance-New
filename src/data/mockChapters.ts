import type { Chapter } from '@/lib/supabase'

// Capítulos mockados para os livros de demonstração
export const mockChapters: Record<string, Chapter[]> = {
  // Livro 1: Amor Inesperado do Bilionário
  'mock-book-1': [
    {
      id: 'mock-ch-1-1',
      book_id: 'mock-book-1',
      chapter_number: 1,
      title: 'O Encontro',
      content: `Daniel Carvalho observava a cidade de seu escritório no último andar. Cinco anos desde que jurou nunca mais se apaixonar. Cinco anos de sucesso absoluto nos negócios e vazio completo no coração.

"Sr. Carvalho, a nova arquiteta chegou para a reunião", anunciou sua secretária.

Ele nem se virou. Mais uma reunião de negócios, mais um dia comum.

Mas quando Isabella entrou naquela sala, tudo mudou. Seus olhos encontraram os dele, e pela primeira vez em anos, Daniel sentiu seu coração acelerar.

"Prazer, Sr. Carvalho. Sou Isabella Martins, e tenho algumas ideias revolucionárias para seu escritório."

Ela não sabia, mas estava prestes a revolucionar muito mais do que apenas seu escritório.`,
      views: 45000,
      is_premium: false,
      created_at: new Date('2024-01-15').toISOString(),
      updated_at: new Date('2024-01-15').toISOString()
    },
    {
      id: 'mock-ch-1-2',
      book_id: 'mock-book-1',
      chapter_number: 2,
      title: 'Primeira Impressão',
      content: `Isabella não podia negar que estava nervosa. Daniel Carvalho tinha a reputação de ser implacável nos negócios. Mas quando seus olhos se encontraram, ela viu algo diferente – uma vulnerabilidade escondida por trás daquela fachada fria.

"Suas credenciais são impressionantes, Srta. Martins", ele disse, folheando seu portfólio. "Mas o que me garante que você pode lidar com um projeto desta magnitude?"

"Porque eu não tenho medo de desafios, Sr. Carvalho. E pelo que ouvi falar, o senhor também não."

Um sorriso quase imperceptível tocou os lábios dele. Quase.

"Você está contratada. Comece amanhã."

Isabella saiu daquela sala com um contrato assinado e uma sensação estranha no peito. Algo lhe dizia que sua vida estava prestes a mudar completamente.`,
      views: 42000,
      is_premium: false,
      created_at: new Date('2024-01-16').toISOString(),
      updated_at: new Date('2024-01-16').toISOString()
    },
    {
      id: 'mock-ch-1-3',
      book_id: 'mock-book-1',
      chapter_number: 3,
      title: 'Barreiras',
      content: `Nas semanas seguintes, Isabella e Daniel trabalharam lado a lado. Ela apresentava ideias ousadas, ele as questionava com rigor. Mas em cada debate, em cada olhar prolongado, a tensão entre eles crescia.

"Por que você é tão resistente a mudanças?" Isabella perguntou um dia, frustrada.

"Porque mudanças trazem riscos", ele respondeu, sua voz mais baixa do que o normal. "E eu aprendi da pior forma possível que alguns riscos não valem a pena."

Foi a primeira vez que ela viu uma rachadura em sua armadura. E foi a primeira vez que Daniel percebeu que talvez, apenas talvez, alguns riscos valessem a pena sim.`,
      views: 38000,
      is_premium: true,
      created_at: new Date('2024-01-17').toISOString(),
      updated_at: new Date('2024-01-17').toISOString()
    }
  ],

  // Livro 2: A Vingança de Judy
  'mock-book-2': [
    {
      id: 'mock-ch-2-1',
      book_id: 'mock-book-2',
      chapter_number: 1,
      title: 'A Traição',
      content: `"Você nunca foi boa o suficiente para ser minha Luna", foram as palavras que destruíram o mundo de Judy.

Seu destino, aquele que deveria protegê-la e amá-la, a rejeitou publicamente para se casar com a filha do Presidente Lycan. E como se isso não bastasse, ele destruiu sua família, deixando-os na miséria.

"Mas você ainda pode ser útil", ele sussurrou em seu ouvido dias depois. "Seja minha amante secreta. É tudo o que você merece."

Judy olhou nos olhos do homem que um dia amou e sentiu apenas desprezo.

"Prefiro dormir com seu sogro do que ficar com você."

A expressão de choque no rosto dele foi quase satisfatória. Quase.

Porque Judy estava apenas começando sua vingança.`,
      views: 35000,
      is_premium: false,
      created_at: new Date('2024-02-20').toISOString(),
      updated_at: new Date('2024-02-20').toISOString()
    },
    {
      id: 'mock-ch-2-2',
      book_id: 'mock-book-2',
      chapter_number: 2,
      title: 'Gavin',
      content: `Gavin era tudo o que diziam e mais. Poderoso, rico, perigosamente atraente. E com uma reputação de nunca dormir com a mesma mulher duas vezes.

Quando Judy o encontrou naquela festa, ela tinha um plano. Seduzi-lo, usá-lo para se vingar de seu ex-destino, e depois descartá-lo.

Simples.

Mas Gavin não era um homem simples.

"Você é diferente", ele disse, seus olhos escuros fixos nela. "Todas as outras mulheres querem algo de mim. Mas você... você age como se eu fosse apenas mais um obstáculo em seu caminho."

"Porque você é", Judy respondeu, erguendo o queixo desafiadoramente.

Ele sorriu. Um sorriso perigoso que fez o coração dela acelerar.

"Interessante. Muito interessante."`,
      views: 33000,
      is_premium: false,
      created_at: new Date('2024-02-21').toISOString(),
      updated_at: new Date('2024-02-21').toISOString()
    },
    {
      id: 'mock-ch-2-3',
      book_id: 'mock-book-2',
      chapter_number: 3,
      title: 'Quebrando Regras',
      content: `Uma noite se tornou duas. Duas se tornaram uma semana. E de repente, Judy percebeu que estava quebrando a única regra de Gavin: ele estava voltando para ela.

"Isso não deveria estar acontecendo", ela sussurrou enquanto ele a puxava para mais perto.

"Eu sei", ele respondeu, sua voz rouca. "Mas não consigo ficar longe de você."

O plano de vingança de Judy estava se complicando. Porque quanto mais tempo passava com Gavin, mais difícil ficava lembrar por que tinha começado tudo isso.

E pior ainda: ela estava começando a se importar.`,
      views: 31000,
      is_premium: true,
      created_at: new Date('2024-02-22').toISOString(),
      updated_at: new Date('2024-02-22').toISOString()
    }
  ],

  // Livro 3: Não Pode Fugir de Mim
  'mock-book-3': [
    {
      id: 'mock-ch-3-1',
      book_id: 'mock-book-3',
      chapter_number: 1,
      title: 'A Noite Que Mudou Tudo',
      content: `Hayden não deveria estar ali. Aquela festa, aquele homem, aquele momento – tudo foi um erro.

Mas quando Zenos o beijou, quando suas mãos o tocaram com uma possessividade que deveria assustá-lo mas apenas o fez querer mais, Hayden perdeu toda a razão.

Uma noite. Apenas uma noite, ele prometeu a si mesmo.

Mas quando acordou na manhã seguinte e viu Zenos observando-o com aqueles olhos escuros e intensos, Hayden soube que tinha cometido um erro terrível.

"O que está feito, está feito! Vamos esquecer isso!" ele disse, tentando soar casual enquanto se vestia às pressas.

A expressão de Zenos endureceu.

"Esquecer?" ele repetiu, sua voz perigosamente baixa. "Você acha que pode simplesmente esquecer?"`,
      views: 52000,
      is_premium: false,
      created_at: new Date('2024-03-10').toISOString(),
      updated_at: new Date('2024-03-10').toISOString()
    },
    {
      id: 'mock-ch-3-2',
      book_id: 'mock-book-3',
      chapter_number: 2,
      title: 'Não Há Fuga',
      content: `"Você quer fugir de mim?" Zenos perguntou, e de repente Hayden se viu preso contra a parede, sem nem perceber como tinha acontecido.

"Eu só... precisamos ser racionais sobre isso", Hayden tentou argumentar, mas sua voz saiu trêmula.

"Racionais?" Zenos riu, mas não havia humor em seu riso. "Você me deu seu primeiro beijo, sua primeira noite, e agora quer ser racional?"

Antes que Hayden pudesse responder, Zenos o beijou. Não foi um beijo gentil – foi dominante, possessivo, uma marca de propriedade.

"Você não pode fugir de mim", Zenos rosnou contra seus lábios. "Você é meu."

E pela primeira vez, Hayden percebeu que talvez não quisesse fugir.`,
      views: 49000,
      is_premium: false,
      created_at: new Date('2024-03-11').toISOString(),
      updated_at: new Date('2024-03-11').toISOString()
    },
    {
      id: 'mock-ch-3-3',
      book_id: 'mock-book-3',
      chapter_number: 3,
      title: 'Rendição',
      content: `Hayden tentou resistir. Tentou manter distância. Mas Zenos estava em todos os lugares – em seus pensamentos, em seus sonhos, em cada batida acelerada de seu coração.

"Por que você não desiste?" Hayden perguntou uma noite, exausto de lutar contra si mesmo.

"Porque você é meu", Zenos respondeu simplesmente, como se fosse a coisa mais óbvia do mundo. "E eu não desisto do que é meu."

Ele puxou Hayden para seus braços, e desta vez, Hayden não resistiu.

"Meu", Zenos sussurrou contra seu pescoço, e Hayden sentiu um arrepio percorrer toda sua espinha.

Talvez, apenas talvez, pertencer a alguém assim não fosse tão ruim quanto ele pensava.`,
      views: 47000,
      is_premium: true,
      created_at: new Date('2024-03-12').toISOString(),
      updated_at: new Date('2024-03-12').toISOString()
    }
  ],

  // Livro 4: O Alfa e Seu Destino Humano
  'mock-book-4': [
    {
      id: 'mock-ch-4-1',
      book_id: 'mock-book-4',
      chapter_number: 1,
      title: 'O Lobo Ferido',
      content: `Emily estava acostumada com animais feridos. Era seu trabalho como veterinária cuidar deles. Mas quando encontrou aquele lobo enorme na floresta, sangrando e quase inconsciente, algo dentro dela soube que ele era diferente.

"Calma, garoto", ela sussurrou, aproximando-se cuidadosamente. "Vou te ajudar."

O lobo a observou com olhos dourados inteligentes – inteligentes demais para um animal comum. Mas Emily estava focada demais em salvar sua vida para questionar.

Ela o levou para sua clínica, tratou seus ferimentos, e ficou ao seu lado a noite toda.

Quando acordou na manhã seguinte, o lobo tinha desaparecido. Em seu lugar, havia um homem nu em sua clínica.

Um homem muito, muito atraente.

"Obrigado por salvar minha vida", ele disse, sua voz profunda fazendo algo estranho com o coração dela. "Meu nome é Kael."`,
      views: 68000,
      is_premium: false,
      created_at: new Date('2023-11-05').toISOString(),
      updated_at: new Date('2023-11-05').toISOString()
    },
    {
      id: 'mock-ch-4-2',
      book_id: 'mock-book-4',
      chapter_number: 2,
      title: 'Revelações',
      content: `"Você é um... lobisomem?" Emily perguntou, ainda processando tudo o que Kael tinha acabado de revelar.

"Alfa", ele corrigiu. "Líder de minha matilha. Ou era, até..."

Ele parou, seus olhos dourados fixos nela com uma intensidade que a fez tremer.

"Até o quê?" ela pressionou.

"Até encontrar você", Kael respondeu, dando um passo em sua direção. "Você é meu destino, Emily. Minha companheira predestinada."

Emily riu nervosamente. "Isso é loucura. Nós mal nos conhecemos!"

"Eu sei", ele disse suavemente. "Mas meu lobo reconheceu você no momento em que nossos olhos se encontraram. E agora... agora eu preciso escolher entre meu dever para com minha matilha e meu coração."

"E o que você vai escolher?" Emily perguntou, sua voz mal passando de um sussurro.

Kael sorriu. "Você. Sempre você."`,
      views: 65000,
      is_premium: false,
      created_at: new Date('2023-11-06').toISOString(),
      updated_at: new Date('2023-11-06').toISOString()
    },
    {
      id: 'mock-ch-4-3',
      book_id: 'mock-book-4',
      chapter_number: 3,
      title: 'Consequências',
      content: `A decisão de Kael de deixar sua matilha por Emily não foi sem consequências. Sua família o considerou traidor. Seu Beta tentou desafiá-lo. E as leis ancestrais dos lobisomens foram claras: um Alfa que abandona sua matilha por uma humana perde seu título e sua proteção.

"Você não precisa fazer isso por mim", Emily disse, vendo a dor em seus olhos.

"Eu não estou fazendo por você", Kael respondeu, puxando-a para seus braços. "Estou fazendo por nós. Porque uma vida sem você não é vida."

Ele a beijou então, e Emily sentiu algo mudar dentro dela. Como se uma parte dela que sempre esteve adormecida finalmente tivesse despertado.

"Eu te amo", ela sussurrou contra seus lábios.

"E eu te amo", Kael respondeu. "Mais do que qualquer título, mais do que qualquer matilha. Você é meu lar agora."

E juntos, eles enfrentariam qualquer consequência que viesse.`,
      views: 62000,
      is_premium: true,
      created_at: new Date('2023-11-07').toISOString(),
      updated_at: new Date('2023-11-07').toISOString()
    }
  ],

  // Livro 5: A Luna Renascida
  'mock-book-5': [
    {
      id: 'mock-ch-5-1',
      book_id: 'mock-book-5',
      chapter_number: 1,
      title: 'Renascimento',
      content: `Amy acordou com um grito preso na garganta. Sua mão voou para seu ventre, esperando encontrar a barriga de grávida que carregava antes de...

Mas seu ventre estava liso. E quando olhou ao redor, percebeu que estava em seu antigo quarto. O quarto que não via há seis anos.

"Não pode ser", ela sussurrou, correndo para o espelho.

O reflexo que a encarou era seis anos mais jovem. Antes da traição. Antes da dor. Antes da morte.

Amy caiu de joelhos, lágrimas escorrendo por seu rosto. Mas não eram lágrimas de tristeza. Eram lágrimas de raiva.

"Desta vez", ela jurou para si mesma, "desta vez eu vou destruí-lo antes que ele me destrua."

O destino lhe deu uma segunda chance. E ela não ia desperdiçá-la.`,
      views: 61000,
      is_premium: false,
      created_at: new Date('2024-04-12').toISOString(),
      updated_at: new Date('2024-04-12').toISOString()
    },
    {
      id: 'mock-ch-5-2',
      book_id: 'mock-book-5',
      chapter_number: 2,
      title: 'Mudando o Jogo',
      content: `"Amy, você está bem?" Marcus, seu futuro traidor, perguntou com falsa preocupação.

Na linha do tempo anterior, ela teria se derretido com sua atenção. Teria acreditado em cada palavra doce, em cada promessa vazia.

Mas agora, vendo-o com os olhos de quem conhece seu verdadeiro caráter, Amy sentiu apenas nojo.

"Estou ótima", ela respondeu com um sorriso frio. "Na verdade, nunca estive melhor."

Ela se afastou dele, ignorando seu olhar confuso. Havia muito trabalho a fazer. Alianças para formar, inimigos para identificar, e uma vingança para planejar.

Marcus pensava que ela seria sua Luna dócil e obediente. Mas Amy tinha outros planos.

Ela seria a Luna mais poderosa que a matilha já viu. E quando terminasse, Marcus imploraria pela misericórdia que ele nunca lhe deu.`,
      views: 58000,
      is_premium: false,
      created_at: new Date('2024-04-13').toISOString(),
      updated_at: new Date('2024-04-13').toISOString()
    },
    {
      id: 'mock-ch-5-3',
      book_id: 'mock-book-5',
      chapter_number: 3,
      title: 'Aliados Inesperados',
      content: `"Você mudou", uma voz profunda disse atrás dela.

Amy se virou e encontrou Damien, o Beta da matilha. Na linha do tempo anterior, ele tinha sido um dos poucos que tentou defendê-la. E pagou caro por isso.

"As pessoas mudam", ela respondeu cautelosamente.

"Não assim", Damien disse, seus olhos estudando-a intensamente. "É como se... como se você soubesse de algo que ninguém mais sabe."

Amy considerou suas opções. Damien poderia ser um aliado valioso. Ou uma ameaça.

"E se eu dissesse que sei exatamente o que Marcus está planejando?" ela perguntou. "Que sei que ele vai trair a matilha e destruir tudo o que amamos?"

Damien não pareceu surpreso. "Então eu diria que finalmente encontrei alguém que vê através de suas mentiras."

Ele estendeu a mão. "Deixe-me ajudá-la, Amy. Juntos, podemos salvá-la matilha."

Amy olhou para sua mão estendida. Na vida passada, ela tinha estado sozinha. Mas desta vez...

Ela apertou sua mão. "Juntos."`,
      views: 55000,
      is_premium: true,
      created_at: new Date('2024-04-14').toISOString(),
      updated_at: new Date('2024-04-14').toISOString()
    }
  ],

  // Livro 6: Obsessão do Mafioso
  'mock-book-6': [
    {
      id: 'mock-ch-6-1',
      book_id: 'mock-book-6',
      chapter_number: 1,
      title: 'A Mentira',
      content: `"Você está louca, Isabella!" sua melhor amiga gritou. "Fingir ser uma prostituta? Para quê?"

"Para provar um ponto", Isabella respondeu, aplicando mais batom vermelho. "Minha mãe acha que controla minha vida. Bem, esta noite vou mostrar a ela que estou no controle."

Era um plano estúpido, ela sabia. Mas estava cansada de ser a filha perfeita, de seguir todas as regras, de viver a vida que outros planejaram para ela.

Uma noite. Apenas uma noite de liberdade.

Ela entrou no clube mais exclusivo da cidade, fingindo uma confiança que não sentia. E foi quando o viu.

Dante Moretti.

Até Isabella, que evitava o mundo do crime, sabia quem ele era. O chefe da máfia italiana. Perigoso. Poderoso. Mortal.

E ele estava olhando diretamente para ela.`,
      views: 82000,
      is_premium: false,
      created_at: new Date('2024-05-08').toISOString(),
      updated_at: new Date('2024-05-08').toISOString()
    },
    {
      id: 'mock-ch-6-2',
      book_id: 'mock-book-6',
      chapter_number: 2,
      title: 'O Mafioso',
      content: `"Quanto?" Dante perguntou quando se aproximou dela no bar.

Isabella piscou, confusa por um momento, antes de lembrar seu papel. "Desculpe, acho que você me confundiu com outra pessoa."

"Não confundi", ele disse, seus olhos escuros percorrendo seu corpo de uma forma que a fez tremer. "Você é nova aqui. E muito mais interessante do que as outras."

Isabella deveria ter ido embora. Deveria ter admitido o erro. Mas havia algo em Dante – algo perigoso e emocionante – que a fez querer continuar o jogo.

"Talvez eu seja", ela respondeu, erguendo o queixo desafiadoramente.

Dante sorriu. Um sorriso que prometia perigo e prazer em medidas iguais.

"Interessante. Muito interessante."

Ele pegou sua mão. "Venha comigo."

E Isabella, contra todo seu bom senso, foi.`,
      views: 79000,
      is_premium: false,
      created_at: new Date('2024-05-09').toISOString(),
      updated_at: new Date('2024-05-09').toISOString()
    },
    {
      id: 'mock-ch-6-3',
      book_id: 'mock-book-6',
      chapter_number: 3,
      title: 'Descoberta',
      content: `Dante descobriu a verdade mais rápido do que Isabella esperava. Claro que descobriu – ele não era o chefe da máfia à toa.

"Você mentiu para mim", ele disse, sua voz perigosamente calma enquanto a prendia contra a parede de seu escritório.

"Eu... eu posso explicar", Isabella gaguejou.

"Pode?" Dante inclinou a cabeça, estudando-a. "Então me diga, principessa, por que uma garota de boa família fingiria ser uma prostituta?"

"Para provar um ponto", ela admitiu, sua voz saindo mais fraca do que pretendia.

"E provou?" ele perguntou, seu rosto perigosamente próximo do dela.

"Eu... sim?"

Dante riu, mas não havia humor em seu riso. "Não, você não provou. Mas sabe o que provou? Que é minha."

"Eu não sou sua!" Isabella protestou.

"Ainda não", Dante concordou, seus lábios roçando sua orelha. "Mas será. Porque agora que te encontrei, Isabella, não vou deixar você ir."

E Isabella percebeu, com um arrepio de medo e excitação, que ele estava falando sério.`,
      views: 76000,
      is_premium: true,
      created_at: new Date('2024-05-10').toISOString(),
      updated_at: new Date('2024-05-10').toISOString()
    }
  ]
}

// Função para obter capítulos de um livro mockado
export function getMockChapters(bookId: string): Chapter[] {
  return mockChapters[bookId] || []
}

// Função para obter um capítulo específico
export function getMockChapter(bookId: string, chapterNumber: number): Chapter | undefined {
  const chapters = mockChapters[bookId] || []
  return chapters.find(ch => ch.chapter_number === chapterNumber)
}
