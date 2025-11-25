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
        content: `Aurora nunca imaginou que uma noite comum se transformaria no pior pesadelo de sua vida. A festa de aniversário de sua melhor amiga, Sophia, estava em pleno andamento no clube mais exclusivo de Nova York. Luzes piscavam ao ritmo da música eletrônica, e o champanhe fluía livremente entre os convidados.

"Você precisa relaxar mais!" Sophia gritou por cima da música, empurrando mais uma taça de champanhe na mão de Aurora. "Quando foi a última vez que você saiu para se divertir?"

Aurora sorriu, mas seu sorriso não alcançou os olhos. Ela estava ali apenas por obrigação. Trabalhar como tradutora freelancer significava passar a maior parte do tempo em casa, sozinha com seus livros e seu laptop. Festas barulhentas nunca foram seu forte.

"Vou ao banheiro", Aurora anunciou, deixando a taça pela metade em uma mesa próxima.

O corredor que levava aos banheiros era mais silencioso, um alívio bem-vindo do caos da pista de dança. Aurora respirou fundo, ajeitando o vestido preto que Sophia havia insistido que ela usasse. Era mais curto e mais justo do que ela normalmente usaria, mas tinha que admitir que se sentia bem nele.

Ao sair do banheiro, Aurora notou um movimento estranho no final do corredor. Três homens de terno escuro conversavam em voz baixa, e algo na postura deles a fez parar. Não eram seguranças do clube – ela tinha certeza disso. Havia algo perigoso na forma como se moviam, como predadores à espreita.

Aurora decidiu voltar pela saída de emergência, não querendo passar por eles. Mas ao virar a esquina, esbarrou em alguém.

"Desculpe, eu—" As palavras morreram em sua garganta quando uma mão forte agarrou seu braço.

"É ela", disse uma voz grave em italiano. Aurora entendia perfeitamente – era uma das línguas que traduzia. "A garota do Dmitri."

"Não, vocês estão enganados!" Aurora tentou se soltar, mas outra mão a agarrou pelo outro braço. "Eu não conheço nenhum Dmitri!"

"Cale a boca", ordenou outro homem, este com um sotaque mais carregado. Ele pressionou algo frio e duro contra suas costelas. Uma arma. "Venha quieta ou sua amiga loira vai ter um acidente muito feio."

O sangue de Aurora congelou. Sophia. Eles sabiam sobre Sophia.

"Está bem", ela sussurrou, parando de resistir. "Eu vou com vocês. Só não machuquem ninguém."

Os homens a conduziram pela saída de emergência com eficiência militar. Um SUV preto esperava no beco, motor ligado. Aurora foi empurrada para o banco traseiro, espremida entre dois homens enormes que cheiravam a cigarro e colônia cara.

"Vendaram os olhos dela", ordenou o motorista.

Mãos ásperas amarraram um pano escuro sobre seus olhos. Aurora sentiu o pânico subir pela garganta, mas forçou-se a respirar. Entrar em pânico não ajudaria. Ela precisava pensar, encontrar uma forma de escapar.

O carro acelerou, e Aurora tentou prestar atenção nas curvas, contar os minutos, qualquer coisa que pudesse ajudá-la a descobrir para onde estava sendo levada. Mas depois de vinte minutos de voltas aparentemente aleatórias, ela perdeu completamente a noção de direção.

"Quem é Dmitri?" ela perguntou, tentando manter a voz firme. "Por que vocês acham que eu o conheço?"

"Cale a boca", foi a única resposta que recebeu, acompanhada de um empurrão rude.

Depois do que pareceu uma eternidade, o carro finalmente parou. Aurora foi arrastada para fora, seus saltos altos tropeçando no que parecia ser cascalho. O ar estava diferente aqui – mais limpo, sem o cheiro de cidade. Eles a levaram para algum lugar afastado.

Portas se abriram e fecharam. O som dos passos ecoava, sugerindo um espaço grande. Finalmente, Aurora foi empurrada para uma cadeira e a venda foi removida.

Ela piscou, ajustando os olhos à luz. Estava em um escritório luxuoso, todo decorado em tons de mogno e couro. Quadros caros adornavam as paredes, e uma enorme janela oferecia uma vista para o que parecia ser um jardim privado.

Mas Aurora mal registrou a decoração. Sua atenção estava fixada no homem sentado atrás da mesa de mogno maciço.

Ele era jovem – talvez no início dos trinta – e devastadoramente bonito de uma forma que era quase cruel. Cabelos negros perfeitamente penteados, mandíbula forte, e olhos de um verde tão intenso que pareciam brilhar mesmo na luz suave do escritório. Ele usava um terno de três peças que provavelmente custava mais do que o aluguel de Aurora por um ano.

Mas era a expressão em seu rosto que fez o estômago de Aurora revirar. Fria. Calculista. Perigosa.

"Então", ele disse, sua voz profunda e aveludada com um leve sotaque italiano, "você é a amante de Dmitri Volkov."

Não era uma pergunta.

"Não!" Aurora se levantou da cadeira, mas imediatamente foi empurrada de volta pelos guardas. "Eu não sei quem é esse Dmitri! Vocês pegaram a pessoa errada!"

O homem inclinou a cabeça, estudando-a com a intensidade de um predador avaliando sua presa. Ele se levantou, contornando a mesa com movimentos felinos. Aurora percebeu que ele era alto – muito alto – e cada movimento irradiava poder e autoridade.

"Você estava no clube Velvet esta noite", ele disse, parando na frente dela. "Usando o vestido que Dmitri comprou para você. Bebendo o champanhe que ele pagou."

"Esse vestido é da minha amiga!" Aurora protestou, odiando como sua voz tremia. "A festa era de aniversário dela! Eu nem deveria estar lá!"

Algo passou pelos olhos verdes dele – dúvida, talvez? Mas desapareceu tão rápido que Aurora achou que tinha imaginado.

"Marco", ele disse sem tirar os olhos de Aurora, "mostre a foto."

Um dos guardas se aproximou, estendendo um celular. Na tela, havia a foto de uma mulher. Aurora sentiu seu coração afundar. A mulher tinha cabelos loiros longos como os dela, altura similar, e usava um vestido preto parecido. Mas não era ela.

"Essa não sou eu", Aurora disse, apontando para a tela. "Olhe direito! O rosto é diferente, o cabelo dela é mais claro, ela tem uma tatuagem no ombro que eu não tenho!"

O homem pegou o celular, aproximando a imagem. Seus olhos se estreitaram, e Aurora viu o momento exato em que ele percebeu o erro.

"Merda", ele murmurou em italiano, passando a mão pelo cabelo. Então olhou para os guardas com uma expressão que fez até mesmo aqueles homens enormes recuarem. "Vocês pegaram a garota errada."

"Mas chefe, ela estava no lugar certo, na hora certa—" começou Marco.

"E claramente não é a pessoa da foto!" A voz do homem cortou como um chicote. "Vocês sequestraram uma civil inocente!"

Aurora deveria ter se sentido aliviada. Eles tinham percebido o erro. Mas a forma como o homem olhava para ela agora – com algo que parecia culpa misturada com frustração – a fez perceber que seu pesadelo estava longe de terminar.

"Qual é seu nome?" ele perguntou, sua voz mais suave agora.

"Aurora", ela respondeu, erguendo o queixo desafiadoramente. "Aurora Silva. E eu exijo que me levem de volta agora."

Um sorriso fantasma passou pelos lábios dele. "Exige?"

"Sim, exijo! Vocês me sequestraram, me ameaçaram, me trouxeram para... para onde quer que seja aqui!" Aurora sentiu a raiva substituir o medo. "Eu vou à polícia. Vou processar todos vocês!"

O sorriso dele se ampliou, mas não havia humor nele. "Não, você não vai."

"Me dê um bom motivo."

Ele se inclinou, colocando as mãos nos braços da cadeira dela, aprisionando-a. Aurora podia sentir o calor emanando dele, o cheiro de sua colônia cara misturado com algo mais masculino e perigoso.

"Porque, cara Aurora", ele murmurou, seu rosto a centímetros do dela, "você agora sabe demais. Viu meu rosto, ouviu meu nome, está na minha casa. E eu não posso deixar você ir sabendo tudo isso."

"Eu não sei seu nome", Aurora apontou, odiando como sua voz saiu trêmula.

"Dante", ele disse, seus olhos verdes perfurando os dela. "Dante Moretti. E você, minha cara, acabou de se tornar minha convidada involuntária até eu decidir o que fazer com você."

Aurora sentiu o mundo girar. Moretti. Ela tinha ouvido esse nome antes, em sussurros, em notícias que as pessoas tinham medo de comentar muito alto. A família Moretti controlava metade do submundo de Nova York. Eram perigosos, implacáveis, e aparentemente, ela tinha acabado de cair direto em suas mãos.

"Você não pode me manter aqui", ela sussurrou.

Dante se afastou, ajeitando os punhos de sua camisa com movimentos casual. "Assista-me."

Ele acenou para os guardas. "Levem-na para o quarto de hóspedes do terceiro andar. Certifiquem-se de que ela tenha tudo que precisa. E Marco?" Sua voz se tornou gélida. "Encontre a garota certa. A verdadeira amante de Dmitri. Vocês têm 24 horas."

Aurora foi levantada da cadeira, mas desta vez com mais cuidado. Enquanto era conduzida para fora do escritório, ela olhou para trás uma última vez. Dante estava de pé junto à janela, as mãos nos bolsos, olhando para a noite. Mesmo de costas, ele irradiava um poder que era impossível ignorar.

E Aurora percebeu, com um arrepio que percorreu sua espinha, que sua vida tinha acabado de mudar para sempre. Ela tinha entrado no mundo de Dante Moretti, e algo lhe dizia que sair seria muito mais difícil do que imaginava.

O quarto para onde a levaram era maior que todo o apartamento de Aurora. Uma cama king-size dominava o centro, coberta com lençóis que pareciam de seda. Havia uma porta que levava a um banheiro privativo de mármore, e outra que se abria para um closet do tamanho de seu quarto.

"Há roupas no closet que devem servir", disse Marco, sua voz surpreendentemente gentil agora. "Se precisar de algo, há um interfone na parede. Mas não tente sair. As portas estão trancadas e há guardas em todos os andares."

Então ele saiu, e Aurora ouviu o clique da fechadura.

Ela estava sozinha. Presa. E nas mãos do homem mais perigoso de Nova York.

Aurora caminhou até a janela, olhando para os jardins iluminados lá embaixo. Em algum lugar lá fora, Sophia provavelmente estava procurando por ela, preocupada. Mas Aurora não tinha como contatá-la. Seu celular tinha sido confiscado no carro.

Ela pressionou a testa contra o vidro frio, deixando as lágrimas finalmente caírem. Como sua vida tinha virado de cabeça para baixo tão rápido? Algumas horas atrás, sua maior preocupação era terminar uma tradução até sexta-feira. Agora, ela era prisioneira de um mafioso.

Um mafioso com olhos verdes hipnotizantes e uma presença que fazia seu coração disparar de formas que não tinham nada a ver com medo.

Aurora sacudiu a cabeça, afastando esses pensamentos perigosos. Dante Moretti era seu captor, não importava quão bonito fosse. Ela precisava encontrar uma forma de escapar.

Mas enquanto se preparava para uma longa noite, Aurora não conseguia tirar da cabeça a forma como Dante tinha olhado para ela. Como se ela fosse um quebra-cabeça que ele não conseguia resolver. Como se ela fosse algo mais do que apenas um erro inconveniente.

E isso, Aurora percebeu, era talvez a coisa mais perigosa de todas.`
      },
      {
        chapter_number: 2,
        title: 'Prisioneira de Luxo',
        preview_text: 'Aurora acorda em um quarto luxuoso, mas a realidade de sua prisão logo se torna clara...',
        content: '[CONTEÚDO COMPLETO DO CAPÍTULO 2 - Mais de 3000 palavras]'
      },
      {
        chapter_number: 3,
        title: 'Jantar com o Diabo',
        preview_text: 'Aurora decide aceitar o convite para jantar, determinada a entender seu captor...',
        content: '[CONTEÚDO COMPLETO DO CAPÍTULO 3 - Mais de 3000 palavras]'
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
  }
]

async function insertBook(bookData: any) {
  const supabase = createClient()
  
  try {
    console.log(`\n📚 Inserindo livro: ${bookData.title}`)
    
    // Inserir livro diretamente sem triggers
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

    if (bookError) {
      console.error('Erro ao inserir livro:', bookError)
      throw bookError
    }

    console.log(`✅ Livro inserido com ID: ${book.id}`)

    // Buscar categorias
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, slug')
      .in('slug', bookData.category_slugs)

    if (catError) {
      console.error('Erro ao buscar categorias:', catError)
    }

    // Associar categorias
    if (categories && categories.length > 0) {
      const bookCategories = categories.map((cat: any) => ({
        book_id: book.id,
        category_id: cat.id
      }))

      const { error: bcError } = await supabase
        .from('book_categories')
        .insert(bookCategories)

      if (bcError) {
        console.error('Erro ao associar categorias:', bcError)
      } else {
        console.log(`✅ ${categories.length} categorias associadas`)
      }
    }

    // Inserir capítulos um por um
    let chaptersInserted = 0
    for (const chapter of bookData.chapters) {
      const { error: chapterError } = await supabase
        .from('chapters')
        .insert({
          book_id: book.id,
          chapter_number: chapter.chapter_number,
          title: chapter.title,
          content: chapter.content,
          preview_text: chapter.preview_text,
          views: 0
        })

      if (chapterError) {
        console.error(`Erro ao inserir capítulo ${chapter.chapter_number}:`, chapterError)
      } else {
        chaptersInserted++
      }
    }

    console.log(`✅ ${chaptersInserted} capítulos inseridos`)

    return { 
      success: true, 
      bookId: book.id,
      chaptersInserted 
    }
  } catch (error: any) {
    console.error('Erro geral ao inserir livro:', error)
    return { 
      success: false, 
      error: error.message || 'Erro desconhecido' 
    }
  }
}

export async function POST() {
  try {
    console.log('🚀 Iniciando migração de livros...')
    
    let booksProcessed = 0
    let chaptersProcessed = 0
    const errors: string[] = []

    for (const bookData of allBooksData) {
      console.log(`\n📖 Processando: ${bookData.title}`)
      const result = await insertBook(bookData)
      
      if (result.success) {
        booksProcessed++
        chaptersProcessed += result.chaptersInserted || 0
        console.log(`✅ Sucesso: ${bookData.title}`)
      } else {
        const errorMsg = `${bookData.title}: ${result.error}`
        errors.push(errorMsg)
        console.error(`❌ Falha: ${errorMsg}`)
      }
      
      // Pequeno delay entre inserções para evitar sobrecarga
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    console.log('\n📊 Migração concluída!')
    console.log(`✅ Livros processados: ${booksProcessed}`)
    console.log(`✅ Capítulos processados: ${chaptersProcessed}`)
    if (errors.length > 0) {
      console.log(`⚠️ Erros: ${errors.length}`)
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
    console.error('❌ Erro fatal na migração:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Erro desconhecido',
        data: {
          booksProcessed: 0,
          chaptersProcessed: 0,
          errors: [error.message]
        }
      },
      { status: 500 }
    )
  }
}
