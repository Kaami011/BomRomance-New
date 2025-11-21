import type { Chapter } from '@/lib/supabase'

// Função auxiliar para gerar conteúdo rico e extenso
function generateRichContent(bookId: string, chapterNum: number, title: string): string {
  const contentTemplates: Record<string, (num: number, title: string) => string> = {
    'mock-book-1': (num, t) => {
      if (num === 1) {
        return `Capítulo ${num}: ${t}

A chuva caía forte naquela noite de sexta-feira em São Paulo. Daniel Carvalho observava a cidade iluminada através das janelas panorâmicas de seu escritório no último andar do edifício Carvalho Enterprises. Aos 35 anos, ele havia construído um império do zero, transformando uma pequena startup em uma das maiores empresas de tecnologia do país.

Mas o sucesso tinha um preço. Seu coração estava tão frio quanto o aço e vidro que compunham seu escritório. Há cinco anos, uma traição devastadora o havia ensinado que o amor era uma fraqueza que ele não podia se permitir.

"Sr. Carvalho, a arquiteta chegou para a reunião", anunciou sua secretária pelo interfone.

Daniel suspirou. Mais uma reunião sobre a reforma do escritório. Ele mal prestava atenção nesses detalhes, mas o conselho insistia que a empresa precisava de uma imagem mais moderna e acolhedora.

"Mande entrar", respondeu ele, sem tirar os olhos dos relatórios financeiros em sua mesa.

A porta se abriu e Isabella Martinez entrou, carregando uma pasta de couro marrom e um tablet. Seus cabelos castanhos estavam levemente úmidos da chuva, e seus olhos verdes brilhavam com uma mistura de nervosismo e determinação.

"Boa noite, Sr. Carvalho. Sou Isabella Martinez, da Martinez Arquitetura. Obrigada por me receber mesmo sendo tão tarde", ela disse, estendendo a mão.

Daniel levantou os olhos dos papéis e, naquele momento, algo mudou. Não foi amor à primeira vista - ele não acreditava mais nisso. Foi algo mais profundo, mais perturbador. Como se uma parte dele que estava adormecida há anos tivesse despertado subitamente.

"Senhorita Martinez", ele disse, apertando sua mão. A pele dela era macia e quente, e ele se pegou segurando por um segundo a mais do que o necessário. "Por favor, sente-se."

Isabella abriu sua pasta e começou a apresentar suas ideias para a reforma. Ela falava com paixão sobre espaços que inspiravam criatividade, sobre como a arquitetura podia influenciar o bem-estar dos funcionários, sobre luz natural e áreas de convivência.

Daniel se pegou observando não apenas as plantas e renderizações que ela mostrava, mas a forma como seus olhos se iluminavam quando falava sobre seu trabalho, o jeito como ela gesticulava com as mãos para enfatizar um ponto, o sorriso tímido que aparecia quando ela percebia que estava falando demais.

"O que acha, Sr. Carvalho?" ela perguntou, depois de terminar sua apresentação.

"Impressionante", ele respondeu, e não estava falando apenas do projeto. "Quando você pode começar?"

"Realmente?" Isabella sorriu, e Daniel sentiu algo apertar em seu peito. "Posso começar na segunda-feira!"

"Ótimo. Você terá acesso total ao edifício. Minha secretária fornecerá todos os crachás e autorizações necessárias."

Enquanto Isabella guardava seus materiais, Daniel se pegou querendo prolongar aquele encontro. Algo que ele nunca fazia.

"Está chovendo muito lá fora", ele disse, olhando pela janela. "Posso pedir que meu motorista a leve para casa."

"Oh, não precisa, eu..." Isabella começou, mas foi interrompida por um trovão ensurdecedor que fez as janelas tremerem.

"Insisto", Daniel disse, com um meio sorriso que surpreendeu até ele mesmo. Fazia anos que não sorria genuinamente.

No elevador, enquanto desciam os 40 andares, um silêncio confortável se instalou entre eles. Daniel se pegou querendo saber mais sobre ela. De onde ela era? Por que escolheu arquitetura? Ela tinha alguém esperando por ela em casa?

Esse último pensamento o incomodou mais do que deveria.

"Obrigada pela carona, Sr. Carvalho", Isabella disse quando chegaram ao térreo. "Nos vemos na segunda-feira."

"Daniel", ele disse impulsivamente. "Pode me chamar de Daniel."

Isabella sorriu. "Então me chame de Isabella. Boa noite, Daniel."

Enquanto o carro dela se afastava na chuva, Daniel permaneceu parado no saguão, observando as luzes traseiras desaparecerem na noite. Algo havia mudado naquela noite. Algo que ele não conseguia explicar, mas que sabia que mudaria tudo.

Pela primeira vez em cinco anos, Daniel Carvalho sentiu algo além do vazio que havia se tornado sua vida. E isso o assustava mais do que qualquer negócio arriscado que já havia feito.

Ele voltou para seu escritório, mas não conseguiu se concentrar nos relatórios. Sua mente estava cheia de olhos verdes e um sorriso que iluminava a sala mais do que qualquer projeto de iluminação poderia fazer.

"Segunda-feira", ele murmurou para si mesmo. "Mal posso esperar pela segunda-feira."

E pela primeira vez em anos, Daniel Carvalho foi para casa com um sorriso no rosto, pensando não em fusões e aquisições, mas em uma arquiteta de olhos verdes que havia entrado em seu escritório e, sem saber, começado a derrubar as paredes que ele havia construído ao redor de seu coração.`
      } else if (num <= 20) {
        return `Capítulo ${num}: ${t}

Os dias se transformaram em semanas, e as semanas em meses. Isabella se tornou presença constante no edifício da Carvalho Enterprises, supervisionando cada detalhe da reforma. E Daniel encontrava cada vez mais desculpas para "verificar o progresso" do projeto.

Suas conversas começaram profissionais, mas gradualmente se tornaram mais pessoais. Daniel descobriu que Isabella havia perdido o pai quando era jovem e que sua mãe havia lutado muito para pagar sua faculdade de arquitetura. Ela descobriu que por trás do bilionário frio havia um homem que amava música clássica, que lia poesia nas madrugadas de insônia, e que tinha um senso de humor seco que a fazia rir.

"Você sabe que não precisa vir aqui todos os dias verificar o trabalho, não é?" Isabella disse um dia, com um sorriso travesso. "Eu prometo que não vou pintar tudo de rosa choque."

"Eu sei", Daniel admitiu, surpreendendo a si mesmo com sua honestidade. "Mas eu gosto de ver o progresso. E... gosto da sua companhia."

O silêncio que se seguiu foi carregado de eletricidade. Isabella corou levemente, mas não desviou o olhar.

"Eu também gosto da sua companhia, Daniel."

Naquele momento, Daniel soube que estava perdido. As paredes que ele havia construído ao redor de seu coração estavam desmoronando, tijolo por tijolo, e ele não estava fazendo nada para impedir.

Mas o medo ainda estava lá. O medo de se entregar novamente, de ser vulnerável, de arriscar seu coração. Sua ex-noiva havia o traído com seu melhor amigo e sócio, levando não apenas seu coração, mas também segredos comerciais que quase destruíram sua empresa.

"Isabella", ele começou, sua voz mais séria. "Eu preciso te contar algo sobre mim. Sobre meu passado."

E ali, no meio do escritório em reforma, cercado por lonas e latas de tinta, Daniel abriu seu coração pela primeira vez em anos. Contou sobre a traição, sobre a dor, sobre como havia jurado nunca mais se permitir amar.

Isabella ouviu em silêncio, seus olhos cheios de compreensão e compaixão.

"Daniel", ela disse suavemente quando ele terminou. "Eu entendo seu medo. Mas você não pode deixar o passado roubar seu futuro. Nem todo mundo é como ela. Algumas pessoas... algumas pessoas valem o risco."

"E você?" Daniel perguntou, sua voz quase um sussurro. "Você vale o risco?"

Isabella deu um passo em direção a ele, seus olhos verdes brilhando com emoção.

"Por que você não descobre?"

E então Daniel fez algo que não fazia há cinco anos. Ele arriscou. Ele se permitiu sentir. Ele se inclinou e beijou Isabella, suavemente no começo, depois com toda a paixão reprimida de anos de solidão.

Quando se separaram, ambos estavam sem fôlego.

"Isso foi..." Isabella começou.

"Inesperado?" Daniel sugeriu, com um sorriso.

"Perfeito", ela corrigiu. "Isso foi perfeito."

E naquele momento, no meio da bagunça da reforma, algo novo estava sendo construído. Não apenas um escritório renovado, mas um novo começo para dois corações que haviam encontrado um ao outro contra todas as probabilidades.

Daniel sabia que ainda havia desafios pela frente. Seu passado não desapareceria da noite para o dia, e Isabella teria que lidar com o mundo implacável dos negócios e da alta sociedade. Mas pela primeira vez em anos, ele estava disposto a tentar.

Porque algumas pessoas, como Isabella havia dito, valem o risco. E ela definitivamente valia.`
      } else if (num <= 50) {
        return `Capítulo ${num}: ${t}

A vida de Daniel e Isabella havia se entrelaçado de formas que nenhum dos dois poderia ter previsto. O que começou como uma atração inesperada havia florescido em um amor profundo e verdadeiro.

A reforma do escritório estava completa, mas Isabella continuava sendo parte integral da vida de Daniel. Ela havia se mudado para o apartamento dele seis meses atrás, e cada manhã Daniel acordava maravilhado por ter aquela mulher extraordinária ao seu lado.

"Bom dia, meu amor", Isabella murmurou, abrindo os olhos lentamente. O sol da manhã filtrava através das cortinas, iluminando seu rosto de uma forma que fazia o coração de Daniel acelerar.

"Bom dia, minha arquiteta favorita", ele respondeu, beijando sua testa. "Dormiu bem?"

"Sempre durmo bem quando estou nos seus braços", ela disse, se aconchegando mais perto dele.

Daniel sorriu. Quem diria que o bilionário frio e calculista se tornaria esse homem apaixonado? Seus amigos e colegas de trabalho mal reconheciam a transformação nele. Ele sorria mais, era mais paciente, mais generoso. Isabella havia trazido luz para sua vida de uma forma que ele nunca imaginou ser possível.

Mas nem tudo eram flores. A mãe de Isabella, Dona Carmen, ainda tinha reservas sobre o relacionamento. Ela temia que sua filha se machucasse, que o mundo de Daniel fosse muito diferente do deles.

"Mãe, eu amo ele", Isabella havia dito na última visita. "E ele me ama. Isso não é suficiente?"

"O amor é importante, minha filha", Dona Carmen havia respondido. "Mas o mundo dele é complicado. Há pessoas que não vão gostar de ver uma garota simples como você ao lado de um homem como ele."

E ela estava certa. A ex-noiva de Daniel, Melissa, havia retornado recentemente, tentando reconquistar seu lugar na vida dele. Ela aparecia em eventos sociais, fazia comentários sutis mas venenosos sobre Isabella, tentava semear dúvidas.

"Ela é bonita, Daniel, não vou negar", Melissa havia dito em uma gala beneficente recente. "Mas será que ela realmente entende o seu mundo? Será que ela pode ser a parceira que você precisa nos negócios?"

Daniel havia respondido pegando a mão de Isabella e olhando diretamente nos olhos de Melissa.

"Isabella é exatamente a parceira que eu preciso. Em todos os aspectos da minha vida. E eu sugiro que você aceite isso e siga em frente."

Isabella havia apertado sua mão, orgulhosa da forma como ele a defendeu. Mas ela sabia que os desafios continuariam. O mundo deles era complicado, cheio de expectativas sociais e jogos de poder.

"No que está pensando?" Daniel perguntou, notando o olhar distante de Isabella.

"Em nós", ela admitiu. "Em como chegamos até aqui. Em todos os obstáculos que superamos."

"E em todos os que ainda vamos superar", Daniel acrescentou. "Juntos."

"Juntos", Isabella repetiu, selando a promessa com um beijo.

Mais tarde naquele dia, Daniel tinha uma surpresa planejada. Ele havia comprado um terreno em um local privilegiado da cidade e queria que Isabella projetasse a casa dos sonhos deles. Não apenas uma casa, mas um lar. Um lugar onde pudessem construir seu futuro juntos.

"Você está falando sério?" Isabella perguntou, seus olhos brilhando de emoção quando ele contou sobre o terreno.

"Completamente sério", Daniel confirmou. "Quero que você projete nossa casa. Nossa família. Nosso futuro."

"Nossa família?" Isabella repetiu, seu coração acelerando.

Daniel se ajoelhou na frente dela, tirando uma pequena caixa de veludo do bolso.

"Isabella Martinez, você entrou na minha vida quando eu havia desistido do amor. Você derrubou todas as minhas defesas, curou meu coração partido, e me mostrou que vale a pena arriscar. Você me faz querer ser um homem melhor. Você me faz querer construir um futuro, ter uma família, envelhecer ao seu lado. Você quer se casar comigo?"

Lágrimas escorriam pelo rosto de Isabella enquanto ela olhava para o anel deslumbrante - um diamante cercado por esmeraldas que combinavam perfeitamente com seus olhos.

"Sim!" ela exclamou, se jogando nos braços dele. "Sim, sim, mil vezes sim!"

Daniel a girou no ar, rindo de pura alegria. Ele havia encontrado seu amor inesperado, e agora ela seria sua para sempre.

Enquanto colocava o anel no dedo de Isabella, Daniel sabia que sua vida havia mudado completamente. O bilionário que jurou nunca mais amar havia encontrado não apenas o amor, mas sua alma gêmea. E ele não poderia estar mais feliz.

"Eu te amo, Isabella", ele sussurrou.

"Eu te amo, Daniel", ela respondeu. "Para sempre."`
      } else {
        return `Capítulo ${num}: ${t}

Anos haviam se passado desde aquele primeiro encontro chuvoso. Daniel e Isabella haviam construído não apenas uma casa, mas uma vida inteira juntos. Sua família havia crescido, seus negócios prosperado, e seu amor se aprofundado de formas que nenhum dos dois poderia ter imaginado.

Sentado em sua varanda, observando o pôr do sol, Daniel refletia sobre a jornada incrível que haviam percorrido. Seus filhos brincavam no jardim que Isabella havia projetado com tanto carinho, suas risadas enchendo o ar com alegria.

"Pensando no passado?" Isabella perguntou, sentando-se ao seu lado e entrelaçando seus dedos nos dele.

"Pensando em como tive sorte", Daniel respondeu, beijando sua mão. "Naquela noite chuvosa, quando você entrou no meu escritório, eu não tinha ideia de que estava prestes a conhecer o amor da minha vida."

"Eu também não", Isabella admitiu, apoiando a cabeça em seu ombro. "Eu estava tão nervosa. Você parecia tão intimidador, tão distante. Mas então você sorriu, e eu vi o homem por trás da fachada."

"Você me salvou, Isabella", Daniel disse suavemente. "Eu estava perdido, preso em um mundo de trabalho e solidão. Você me mostrou que havia mais na vida. Você me deu uma família, um lar, um propósito além dos negócios."

"E você me deu segurança, amor, e a chance de realizar todos os meus sonhos", Isabella respondeu. "Nós nos salvamos mutuamente, Daniel."

Eles ficaram em silêncio por um momento, apenas apreciando a companhia um do outro e observando seus filhos brincarem.

"Papai! Mamãe! Olhem o que eu construí!" seu filho mais velho gritou, mostrando orgulhosamente uma estrutura elaborada de blocos.

"Ele tem seu talento para arquitetura", Daniel disse com um sorriso.

"E sua determinação para os negócios", Isabella acrescentou, rindo.

Enquanto o sol se punha, pintando o céu com tons de laranja e rosa, Daniel pensou em todas as batalhas que haviam enfrentado juntos. Os desafios profissionais, as intrigas sociais, os momentos de dúvida e medo. Mas através de tudo, eles permaneceram unidos, seu amor se fortalecendo a cada obstáculo superado.

"Você se arrepende de alguma coisa?" Isabella perguntou suavemente.

"Apenas de não ter te conhecido antes", Daniel respondeu sem hesitar. "Mas talvez não estivéssemos prontos antes. Talvez precisássemos passar por tudo que passamos para nos tornarmos as pessoas que somos hoje."

"Pessoas que merecem esse amor", Isabella concordou.

"Pessoas que vão proteger esse amor pelo resto de suas vidas", Daniel acrescentou, virando-se para olhar nos olhos de sua esposa. "Eu te amo, Isabella. Hoje, amanhã, e para sempre."

"Para sempre", Isabella ecoou, selando a promessa com um beijo.

Enquanto a noite caía e as estrelas começavam a aparecer, Daniel e Isabella permaneceram abraçados, cercados pelo amor de sua família e pela certeza de que haviam encontrado algo raro e precioso - um amor verdadeiro que resistiria ao teste do tempo.

O bilionário que havia jurado nunca mais amar havia encontrado não apenas o amor, mas a felicidade completa. E tudo começou com um encontro inesperado em uma noite chuvosa, quando uma arquiteta de olhos verdes entrou em seu escritório e mudou sua vida para sempre.

Esta era a história deles. Uma história de amor inesperado, de segundas chances, de corações curados e sonhos realizados. Uma história que eles contariam para seus netos, que inspiraria outros a acreditar no amor, e que provaria que às vezes, as melhores coisas da vida são aquelas que não planejamos.

Daniel Carvalho e Isabella Martinez haviam encontrado seu final feliz. E era apenas o começo de uma eternidade juntos.`
      }
    },
    'mock-book-2': (num, t) => `Capítulo ${num}: ${t}

${num === 1 ? 'Judy nunca imaginou que sua vida pudesse desmoronar tão completamente em uma única noite. A rejeição do destino foi como uma facada no coração - ser rejeitada para que ele pudesse se casar com a filha de Gavin, o poderoso Presidente Lycan, foi humilhante o suficiente. Mas o que veio depois foi ainda pior.' : ''}

${num <= 15 ? 'A vingança de Judy estava apenas começando. Cada movimento era calculado, cada palavra cuidadosamente escolhida. Gavin era conhecido por seu poder absoluto, sua riqueza inimaginável, e por ser o playboy supremo que nunca dormia com a mesma mulher duas vezes. Mas Judy estava prestes a quebrar todas as suas regras... repetidas vezes. O que começou como um plano de vingança fria estava se transformando em algo muito mais complicado. Cada encontro com Gavin revelava uma nova camada de complexidade - tanto nele quanto nela mesma.' : ''}

${num <= 40 ? 'Os sentimentos de Judy estavam em conflito. O ódio que ela sentia estava se misturando com algo perigosamente parecido com desejo. Gavin não era o homem que ela imaginava - por trás do playboy arrogante havia alguém com profundidade, com cicatrizes próprias, com uma história que explicava muito de seu comportamento. Mas isso não mudava o que ele havia feito à família dela. Ou mudava? A linha entre vingança e paixão estava se tornando cada vez mais tênue, e Judy se via questionando tudo que pensava saber sobre si mesma e sobre o que realmente queria.' : ''}

${num > 40 ? 'Anos depois, Judy olhava para trás e mal reconhecia a mulher que havia sido. A vingança havia dado lugar ao perdão, o ódio ao amor, e a destruição à construção de algo belo e duradouro. Gavin havia se tornado não apenas seu parceiro, mas sua alma gêmea - alguém que a entendia completamente, que a desafiava constantemente, e que a amava incondicionalmente. Juntos, eles haviam superado o passado e construído um futuro que nenhum dos dois poderia ter imaginado. Sua história era um testemunho de que às vezes, as pessoas que mais nos desafiam são aquelas que mais precisamos em nossas vidas.' : ''}

A jornada de Judy e Gavin era complexa, cheia de reviravoltas emocionais e momentos de intensa paixão. Cada capítulo revelava mais sobre a profundidade de seus sentimentos e a força de sua conexão. O que começou como um jogo perigoso de vingança se transformou em uma história de amor, redenção e segundas chances que tocaria o coração de qualquer um que acreditasse no poder transformador do amor verdadeiro.`,
    
    'mock-book-3': (num, t) => `Capítulo ${num}: ${t}

${num === 1 ? '"O que está feito, está feito! Vamos esquecer isso!" Hayden disse, tentando soar indiferente, embora estivesse encolhido de medo. Algo lhe dizia que o estranho à sua frente não pretendia soltá-lo tão facilmente. A carranca de Zenos se intensificou, e Hayden jurou que a temperatura no quarto aumentou várias vezes. Depois de conquistar seu coração e roubar seu primeiro, esse garoto queria se esquivar da responsabilidade, o que irritou Zenos profundamente.' : ''}

${num <= 20 ? '"Você quer fugir de mim?" Zenos perguntou, sua voz perigosamente baixa. De repente, Hayden se viu sob o homem sem nem perceber como havia acontecido. Zenos era um homem poderoso e possessivo que não aceitava ser rejeitado. Quando Hayden tentou fugir após uma noite que mudou tudo, ele descobriu que não havia como escapar de alguém que já havia decidido que você era dele. "Você não pode fugir de mim... Você é meu", Zenos rosnou possessivamente, seus olhos escuros queimando com uma intensidade que fez Hayden tremer - não de medo, mas de algo muito mais perturbador.' : ''}

${num <= 60 ? 'A resistência de Hayden estava desmoronando, tijolo por tijolo. Cada encontro com Zenos quebrava mais uma de suas defesas, revelava mais uma verdade sobre si mesmo que ele havia tentado negar. Zenos não era apenas possessivo - ele era atencioso, protetor, e surpreendentemente vulnerável quando baixava sua guarda. Hayden começou a entender que a possessividade de Zenos vinha de um lugar de amor profundo, de medo de perder alguém que se tornou essencial para sua existência. E Hayden, para sua própria surpresa, descobriu que não queria mais fugir. Ele queria ficar, queria explorar essa conexão intensa, queria ver onde esse caminho os levaria.' : ''}

${num > 60 ? 'Anos depois, Hayden e Zenos haviam construído uma vida juntos que desafiava todas as convenções. Seu amor era intenso, apaixonado, e inquebrantável. Eles haviam enfrentado o preconceito, superado obstáculos, e provado para o mundo - mas principalmente para si mesmos - que o amor verdadeiro não conhece limites ou regras. Zenos ainda era possessivo, mas Hayden havia aprendido que isso era apenas outra forma de amor. E Hayden ainda era teimoso, mas Zenos havia aprendido que isso era parte do que o fazia amar tanto aquele homem. Juntos, eles eram completos, equilibrados, eternos.' : ''}

A história de Hayden e Zenos era uma exploração profunda de amor, possessividade, e aceitação. Cada capítulo mergulhava mais fundo na complexidade de seus sentimentos, mostrando que o amor verdadeiro não é sempre suave e fácil - às vezes é intenso, desafiador, e transformador. Mas é exatamente essa intensidade que o torna inesquecível e eterno.`,
    
    'mock-book-4': (num, t) => `Capítulo ${num}: ${t}

${num === 1 ? 'Emily nunca imaginou que sua vida mudaria completamente ao encontrar um lobo ferido na floresta perto de sua clínica veterinária. O animal era magnífico - maior que qualquer lobo que ela já havia visto, com pelagem negra como a noite e olhos dourados que pareciam humanos demais. Ela não podia saber que estava prestes a conhecer Kael, o Alfa mais poderoso de sua geração, em sua forma animal.' : ''}

${num <= 30 ? 'Kael enfrentava a decisão mais difícil de sua vida. Como Alfa, seu dever era para com sua matilha - protegê-los, liderá-los, perpetuar a linhagem através de um casamento arranjado com outra lobisomem de sangue puro. Mas seu coração pertencia a Emily, uma humana que não tinha ideia do mundo sobrenatural que existia nas sombras. O vínculo de destino que ele sentiu no momento em que a viu era inegável, impossível de ignorar. Mas aceitar esse amor significava escolher entre seu coração e seu dever, entre sua alma gêmea e sua matilha. E a cada dia que passava com Emily, a escolha se tornava mais clara - e mais dolorosa.' : ''}

${num <= 70 ? 'A decisão de Kael de deixar sua matilha para ficar com Emily causou ondas de choque através do mundo dos lobisomens. Alguns o chamaram de traidor, outros de romântico. Mas Kael não se importava com as opiniões alheias - ele havia encontrado seu verdadeiro par, e nada o faria desistir dela. Emily, por sua vez, estava aprendendo sobre um mundo que ela nunca soube que existia. A revelação de que lobisomens eram reais, de que o homem que ela amava podia se transformar em um lobo magnífico, foi chocante. Mas o amor que ela sentia por Kael era mais forte que qualquer medo ou dúvida. Juntos, eles estavam construindo uma ponte entre dois mundos, provando que o amor verdadeiro transcende espécies, tradições e expectativas.' : ''}

${num > 70 ? 'Décadas depois, Kael e Emily olhavam para sua família com orgulho imenso. Seus filhos e netos representavam a união perfeita entre dois mundos - humanos com a capacidade de se transformar, lobisomens com compaixão humana. O que começou como uma escolha impossível havia se transformado em um legado que mudaria ambas as espécies para sempre. Kael nunca se arrependeu de sua decisão de deixar sua posição como Alfa para ficar com Emily. Ela havia lhe dado algo muito mais valioso que poder ou status - ela havia lhe dado amor, família, e um propósito maior. E Emily, que havia começado como uma simples veterinária, havia se tornado a matriarca de uma nova linhagem, uma ponte entre mundos, e a prova viva de que o amor verdadeiro pode superar qualquer obstáculo.' : ''}

A história de Kael e Emily era épica em seu escopo, abrangendo décadas e explorando temas profundos de dever versus amor, tradição versus mudança, e o poder transformador de aceitar o diferente. Cada capítulo adicionava mais uma camada a essa narrativa rica, mostrando que às vezes, as escolhas mais difíceis levam às recompensas mais gratificantes.`,
    
    
    
    
    
    
    
    'mock-book-5': (num, t) => `Capítulo ${num}: ${t}

${num === 1 ? 'Amy acordou com um grito preso na garganta, seu coração batendo descontroladamente. Mas algo estava errado - muito errado. Ela olhou ao redor, confusa. Este era seu antigo quarto, na casa de seus pais. Mas como? Ela havia morrido, ela tinha certeza disso. Marcus, o Alfa que ela havia amado e confiado, havia a traído da pior forma possível. Ele havia tirado não apenas sua vida, mas a vida do filhote que ela carregava. A dor daquela memória era tão real, tão vívida... Então ela viu o calendário na parede e seu coração parou. Seis anos. Ela havia voltado seis anos no tempo, antes de conhecer Marcus, antes da traição, antes de tudo.' : ''}

${num <= 25 ? 'Com o conhecimento do futuro, Amy executava seu plano de vingança com precisão cirúrgica. Cada movimento era calculado, cada palavra cuidadosamente escolhida. Ela sabia exatamente o que Marcus faria, quem ele trairia, como ele manipularia. E ela usava esse conhecimento para virar o jogo completamente. Mas ao longo do caminho, Amy descobriu algo surpreendente - a verdadeira força não estava apenas em destruir inimigos, mas em construir aliados. Damien, o Alfa de uma matilha rival, viu nela algo que ninguém mais via. Não a luna frágil que ela havia sido, mas a guerreira poderosa que ela se tornaria. E lentamente, uma aliança baseada em respeito mútuo começou a se transformar em algo mais profundo.' : ''}

${num <= 60 ? 'Amy se tornou a Luna que sempre deveria ter sido - forte, justa, e amada por sua matilha. Ela implementou mudanças que beneficiaram todos, não apenas os de sangue puro. Ela treinou as mulheres para serem guerreiras, não apenas companheiras. Ela desafiou tradições antiquadas e criou novas que refletiam os valores de igualdade e respeito. E no processo, ela encontrou um amor verdadeiro com Damien - alguém que sempre a viu pelo que realmente era, não pelo que outros esperavam que ela fosse. Damien não a via como uma luna frágil que precisava de proteção, mas como uma parceira igual, uma guerreira formidável, e a mulher que completava sua alma.' : ''}

${num > 60 ? 'Décadas depois, Amy olhava para trás e via não apenas vingança cumprida, mas uma vida plena de amor, família e propósito. Ela havia transformado sua segunda chance em um legado que inspiraria gerações. Suas filhas eram lunas fortes em suas próprias matilhas, seus filhos eram alfas justos e compassivos. Marcus havia sido exposto e banido, mas Amy descobriu que a melhor vingança não era sua destruição, mas sua própria felicidade. Ela havia provado que o passado não define o futuro, que segundas chances devem ser usadas não apenas para corrigir erros, mas para criar algo melhor. E ao lado de Damien, ela havia construído não apenas uma matilha, mas uma família, um legado, e uma história de amor que seria contada por gerações.' : ''}

A história de Amy era poderosa e inspiradora, uma narrativa de redenção, vingança transformada em justiça, e o poder de segundas chances. Cada capítulo mostrava sua evolução de vítima a guerreira, de luna frágil a líder poderosa, de coração partido a amor realizado. Era uma história que ressoaria com qualquer um que já desejou uma segunda chance para fazer as coisas direito.`,
    
    'mock-book-6': (num, t) => `Capítulo ${num}: ${t}

${num === 1 ? 'Isabella sempre foi a filha perfeita - até o dia em que decidiu que não seria mais. Cansada das expectativas sufocantes de sua mãe e da vida que foi planejada para ela, Isabella tomou uma decisão impulsiva que mudaria tudo. Por uma noite, ela fingiria ser uma prostituta de luxo, apenas para provar que podia fazer suas próprias escolhas. O que ela não esperava era chamar a atenção de Dante Moretti, o temido chefe da máfia italiana. Um homem perigoso, poderoso, e acostumado a conseguir tudo o que quer. E ele a queria.' : ''}

${num <= 30 ? 'Quando Dante descobriu a verdade sobre Isabella - que ela não era realmente uma prostituta, mas uma garota de boa família fingindo por uma noite - sua obsessão apenas cresceu. Ele não se importava com quem ela era ou de onde veio. Ela seria dele, não importava o preço. Isabella se viu presa em um mundo perigoso, mas descobriu que Dante, apesar de sua obsessão, era capaz de um amor profundo e protetor. Cada dia revelava uma nova faceta do homem por trás do mafioso - um homem que havia crescido em violência mas ansiava por algo real, alguém que o visse além do poder e do medo que inspirava. E Isabella, para sua própria surpresa, começou a ver não apenas o mafioso perigoso, mas o homem complexo e profundamente solitário que ele realmente era.' : ''}

${num <= 70 ? 'Aceitando seu amor por Dante e o mundo em que ele vivia, Isabella se tornou a rainha ao lado do rei. Mas ela não era uma rainha passiva - ela trouxe mudanças, humanidade, e uma perspectiva diferente para o mundo brutal da máfia. Dante descobriu que ter Isabella ao seu lado não o tornava mais fraco, como ele temia, mas mais forte. Ela era sua consciência, sua luz na escuridão, e a única pessoa que podia desafiá-lo e fazê-lo ouvir. Juntos, eles construíram um império baseado não apenas em poder e medo, mas em lealdade, respeito, e - surpreendentemente - em amor e família. Isabella provou que até mesmo no mundo mais escuro, o amor pode florescer e transformar.' : ''}

${num > 70 ? 'Décadas depois, Isabella e Dante olhavam para sua família com orgulho. O que começou como uma mentira se transformou em um amor eterno que desafiou todas as probabilidades. Seus filhos haviam crescido conhecendo tanto o amor quanto a força, tanto a compaixão quanto a determinação. Dante havia se aposentado gradualmente, passando o comando para a próxima geração, mas seu legado permaneceria - não apenas como um mafioso poderoso, mas como um homem que encontrou redenção através do amor de uma mulher extraordinária. E Isabella, que havia começado aquela noite fatídica apenas querendo provar um ponto, havia encontrado não apenas aventura, mas seu verdadeiro destino. Ao lado de Dante, ela havia vivido uma vida que nunca poderia ter imaginado - perigosa, apaixonada, e incrivelmente plena.' : ''}

A história de Isabella e Dante era eletrizante, uma exploração de obsessão transformada em amor, perigo misturado com paixão, e a ideia de que às vezes, as mentiras mais impulsivas levam às verdades mais profundas. Cada capítulo intensificava a conexão entre eles, mostrando que o amor verdadeiro pode florescer até nos lugares mais improváveis e transformar até os corações mais endurecidos.`
  }

  const template = contentTemplates[bookId]
  return template ? template(chapterNum, title) : `Capítulo ${chapterNum}: ${title}\n\nConteúdo completo e estruturado do capítulo ${chapterNum}. Este capítulo desenvolve a história de forma profunda e envolvente, explorando as emoções dos personagens e avançando a narrativa de maneira significativa.`
}

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
      content: generateRichContent('mock-book-1', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
      content: generateRichContent('mock-book-2', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
      content: generateRichContent('mock-book-3', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
      content: generateRichContent('mock-book-4', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
      content: generateRichContent('mock-book-5', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
      content: generateRichContent('mock-book-6', chapterNum, titles[i] || `Capítulo ${chapterNum}`),
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
