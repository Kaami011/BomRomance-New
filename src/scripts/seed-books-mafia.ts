/**
 * Script para popular o banco com livros de MÁFIA
 * 
 * Categoria: MÁFIA 🔥
 * Livros: 2
 * - Entre Sangue e Sedução
 * - A Noiva do Don
 */

import { createClient } from '@/lib/supabase-client'

// Tipos
interface BookData {
  title: string
  author: string
  description: string
  cover_url: string
  status: 'ongoing' | 'completed'
  category_slugs: string[]
  chapters: ChapterData[]
}

interface ChapterData {
  chapter_number: number
  title: string
  content: string
  preview_text: string
}

// ============================================
// LIVRO 1: ENTRE SANGUE E SEDUÇÃO
// ============================================

const livro1: BookData = {
  title: 'Entre Sangue e Sedução',
  author: 'Valentina Rossi',
  description: `Quando Aurora é sequestrada por engano pela família Moretti, descobre que o líder da máfia italiana não é o monstro que todos pintam — mas também não é o herói que ela imaginou.

Dante Moretti é frio, calculista e perigoso… até que começa a quebrar suas próprias regras por causa dela.

Presos em um mundo de segredos, sangue e alianças quebradas, Aurora precisa decidir: confiar no homem que destruiu sua vida… ou se tornar a rainha ao lado dele.`,
  cover_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=900&fit=crop',
  status: 'completed',
  category_slugs: ['mafia', 'romance', 'suspense'],
  chapters: [
    {
      chapter_number: 1,
      title: 'O Erro Fatal',
      preview_text: 'Aurora nunca imaginou que uma noite comum se transformaria no pior pesadelo de sua vida...',
      content: `Aurora Martinez ajustou a alça da bolsa no ombro enquanto atravessava o estacionamento mal iluminado do supermercado. Eram quase onze da noite, e ela estava exausta depois de um turno duplo no hospital onde trabalhava como enfermeira. Tudo o que queria era chegar em casa, tomar um banho quente e dormir por doze horas seguidas.

O ar frio de novembro cortava seu rosto, e ela puxou o casaco mais apertado contra o corpo. O estacionamento estava quase vazio, apenas alguns carros espalhados aqui e ali. Seus passos ecoavam no concreto, criando um ritmo solitário que a fazia acelerar o passo involuntariamente.

Ela estava a apenas alguns metros de seu carro quando ouviu o som de pneus cantando no asfalto. Aurora virou-se instintivamente, apenas para ser cegada pelos faróis de uma van preta que surgiu do nada, bloqueando seu caminho.

Antes que pudesse gritar, a porta lateral se abriu e duas figuras mascaradas saltaram para fora. Mãos fortes a agarraram pelos braços, e ela sentiu algo ser pressionado contra sua boca — um pano que cheirava a produtos químicos doces e enjoativos.

"Não! Soltem-me!" Aurora tentou gritar, mas sua voz saiu abafada. Ela chutou e se debateu com toda a força que tinha, mas seus movimentos ficavam cada vez mais lentos, mais pesados.

"Conseguimos ela, chefe," ouviu uma voz masculina dizer, distante e distorcida. "A filha do Santoro está conosco."

Filha do Santoro? Aurora tentou processar essas palavras, mas sua mente estava ficando nebulosa. Ela não conhecia nenhum Santoro. Havia um erro. Um erro terrível.

Mas antes que pudesse formar esse pensamento completamente, a escuridão a engoliu.

---

Quando Aurora recuperou a consciência, a primeira coisa que registrou foi a dor latejante em sua cabeça. A segunda foi que suas mãos estavam amarradas atrás das costas e seus tornozelos presos a uma cadeira de metal.

Ela piscou várias vezes, tentando focar a visão. Estava em algum tipo de porão — paredes de concreto nuas, uma única lâmpada pendurada no teto, sem janelas. O ar era úmido e cheirava a mofo e algo metálico que ela preferiu não identificar.

"Ela acordou," anunciou uma voz áspera à sua esquerda.

Aurora virou a cabeça bruscamente e viu dois homens encostados na parede. Ambos vestiam ternos escuros e tinham expressões duras e indiferentes. Um deles estava fumando, o cigarro brilhando vermelho na penumbra.

"Onde... onde estou?" Aurora conseguiu dizer, sua voz rouca e trêmula. "Por que fizeram isso comigo?"

Os homens trocaram olhares, mas não responderam. Em vez disso, o que estava fumando jogou o cigarro no chão e o esmagou com o sapato antes de sair pela porta de metal no fundo do porão.

Aurora sentiu o pânico subindo em sua garganta. Ela puxou as cordas que prendiam seus pulsos, mas elas apenas cortavam sua pele. Lágrimas ardiam em seus olhos, mas ela as forçou para trás. Não. Ela não ia desmoronar. Não ainda.

Minutos se passaram — ou talvez fossem horas, ela não conseguia dizer. O homem restante permaneceu em silêncio, apenas observando-a com olhos vazios.

Então a porta se abriu novamente, e Aurora sentiu o ar sair de seus pulmões.

O homem que entrou era diferente dos outros. Ele usava um terno impecável de três peças, perfeitamente ajustado ao seu corpo alto e musculoso. Seu cabelo escuro estava penteado para trás, revelando um rosto que poderia ter sido esculpido em mármore — mandíbula forte, maçãs do rosto altas, lábios cheios. Mas eram seus olhos que a prenderam: escuros como a noite, frios como gelo, e completamente desprovidos de qualquer emoção humana reconhecível.

Ele parou a alguns passos dela, as mãos nos bolsos, e a estudou com uma intensidade que a fez querer encolher-se.

"Senhorita Santoro," ele disse, sua voz profunda e controlada, com um leve sotaque italiano. "Bem-vinda."

"Eu não sou—" Aurora começou, mas ele levantou uma mão, silenciando-a.

"Não minta para mim," ele disse calmamente, mas havia uma ameaça subjacente em seu tom. "Sabemos exatamente quem você é. A filha de Marco Santoro. A princesinha que ele escondeu tão cuidadosamente de nosso mundo."

"Você está errado!" Aurora exclamou, sua voz subindo uma oitava. "Meu nome é Aurora Martinez. Meu pai morreu quando eu tinha cinco anos. Ele era contador, não... não o que quer que você pense que ele era!"

Pela primeira vez, uma emoção cruzou o rosto do homem — surpresa, talvez, ou confusão. Ele inclinou a cabeça ligeiramente, seus olhos escuros a examinando com nova intensidade.

"Martinez?" ele repetiu lentamente.

"Sim! Aurora Martinez. Trabalho no Hospital Geral de Chicago como enfermeira. Moro sozinha em um apartamento em Lincoln Park. Não tenho nada a ver com máfia ou Santoro ou qualquer coisa assim!" As palavras saíram em uma torrente desesperada.

O homem ficou em silêncio por um longo momento, e Aurora podia ver sua mente trabalhando, processando essa informação. Então ele se virou para o guarda que havia permanecido no porão.

"Marco," ele disse, sua voz baixa e perigosa. "Traga-me o arquivo. Agora."

O guarda saiu correndo, e o homem voltou sua atenção para Aurora. Ele se aproximou, agachando-se na frente dela até que seus rostos estivessem no mesmo nível. Aurora podia sentir o cheiro de seu perfume — algo caro e masculino, com notas de cedro e especiarias.

"Se você está mentindo para mim," ele disse suavemente, seus olhos perfurando os dela, "eu vou saber. E você não vai gostar das consequências."

"Eu não estou mentindo," Aurora sussurrou, lágrimas finalmente escapando e descendo por suas bochechas. "Por favor, você tem que acreditar em mim. Há um erro. Um erro terrível."

Algo piscou nos olhos dele — tão rápido que ela quase perdeu. Dúvida? Preocupação? Mas então sua expressão voltou à máscara fria e impenetrável.

O guarda voltou, carregando uma pasta de manila. Ele a entregou ao homem, que se levantou e a abriu, seus olhos percorrendo o conteúdo rapidamente.

Aurora o observou, seu coração batendo tão forte que ela tinha certeza de que ele podia ouvi-lo. Ela viu o momento exato em que ele percebeu o erro — seus ombros ficaram tensos, sua mandíbula se apertou, e ele fechou os olhos brevemente, como se estivesse lutando contra alguma emoção intensa.

Quando ele abriu os olhos novamente e olhou para ela, Aurora viu algo que não esperava: arrependimento.

"Merda," ele murmurou, passando a mão pelo cabelo, bagunçando-o pela primeira vez. "Merda."

Ele se virou para o guarda, sua voz agora cheia de uma raiva fria e controlada. "Vocês pegaram a mulher errada. A filha de Santoro tem vinte e três anos e cabelo loiro. Esta mulher tem pelo menos vinte e sete e é morena."

O guarda empalideceu. "Senhor, eu... nós seguimos as coordenadas que nos deram. Ela estava no lugar certo, na hora certa—"

"E vocês não verificaram antes de sequestrá-la?" O homem deu um passo ameaçador em direção ao guarda, que recuou. "Vocês trouxeram uma civil inocente para minha casa. Uma enfermeira, pelo amor de Deus."

Ele se virou de volta para Aurora, e por um momento, eles apenas se olharam. Ela podia ver o conflito em seus olhos — o que fazer com ela agora? Ela sabia demais. Ela tinha visto seus rostos, estava em sua propriedade, conhecia seu erro.

"Por favor," Aurora sussurrou, sua voz quebrando. "Por favor, apenas me deixe ir. Eu não vou contar a ninguém. Eu juro. Apenas... apenas me deixe ir para casa."

O homem estudou-a por um longo momento, então suspirou profundamente. Ele se aproximou e, para sua surpresa, começou a desamarrar as cordas em seus pulsos.

"Eu não posso fazer isso," ele disse calmamente, enquanto suas mãos trabalhavam nos nós. "Você viu demais. Sabe demais."

O pânico explodiu no peito de Aurora. "Então você vai me matar?" ela perguntou, sua voz mal passando de um sussurro.

Ele terminou de soltar suas mãos e se moveu para seus tornozelos. Quando ele olhou para cima, seus olhos encontraram os dela, e havia algo neles que ela não conseguia decifrar.

"Não," ele disse finalmente. "Eu não mato inocentes. Mas você também não pode ir embora. Não ainda. Não até eu descobrir o que fazer com você."

Ele terminou de libertá-la e se levantou, estendendo a mão para ajudá-la. Aurora hesitou, então aceitou, suas pernas tremendo quando ela ficou de pé.

"Meu nome é Dante," ele disse, ainda segurando sua mão. "Dante Moretti. E você, Aurora Martinez, acabou de se tornar minha convidada involuntária."

Aurora olhou para o homem à sua frente — este estranho perigoso que tinha o poder de vida e morte sobre ela — e percebeu que sua vida nunca mais seria a mesma.

"Por quanto tempo?" ela conseguiu perguntar.

Dante soltou sua mão e deu um passo para trás. "Até eu ter certeza de que você não é uma ameaça. Até eu confiar que você não vai correr para a polícia no momento em que sair daqui."

"E se eu prometer?"

Um sorriso triste tocou seus lábios. "No meu mundo, querida, promessas não significam nada. Apenas ações importam."

Ele acenou para o guarda. "Leve-a para o quarto de hóspedes no terceiro andar. Certifique-se de que ela tenha tudo o que precisa. E Marco?" Sua voz ficou dura como aço. "Se alguém encostar um dedo nela, eu pessoalmente vou arrancar cada um dos seus ossos. Entendido?"

O guarda engoliu em seco e assentiu. "Sim, senhor."

Dante olhou para Aurora uma última vez, algo indecifr ável passando por seus olhos. "Sinto muito," ele disse, e ela acreditou nele. "Mas você está presa aqui agora. Faça as pazes com isso."

E com essas palavras, ele saiu do porão, deixando Aurora sozinha com a terrível realização de que ela tinha acabado de entrar em um mundo do qual talvez nunca pudesse escapar.

Mas o que ela não sabia — o que nenhum deles sabia — era que este erro fatal seria o começo de algo que mudaria ambas as suas vidas para sempre.

Porque às vezes, os maiores amores começam com os piores erros.

E às vezes, a pessoa que você deveria temer é exatamente aquela que você acaba amando.`
    },
    {
      chapter_number: 2,
      title: 'Prisioneira de Luxo',
      preview_text: 'Aurora acorda em um quarto luxuoso, mas a realidade de sua prisão logo se torna clara...',
      content: `Aurora acordou desorientada, levando alguns segundos para lembrar onde estava. A luz suave da manhã filtrava através de cortinas de seda pesadas, iluminando um quarto que parecia ter saído de uma revista de decoração de luxo.

A cama em que ela estava deitada era enorme — provavelmente king size — com lençóis de algodão egípcio que eram mais macios do que qualquer coisa que ela já tinha tocado. O quarto era decorado em tons de creme e dourado, com móveis antigos que pareciam valer mais do que seu salário anual. Um lustre de cristal pendia do teto alto, e as paredes eram adornadas com o que pareciam ser pinturas originais.

Por um momento, Aurora se perguntou se tudo tinha sido um pesadelo terrível. Mas então ela olhou para baixo e viu que ainda estava usando as mesmas roupas da noite anterior — jeans e uma blusa de enfermagem — e a realidade voltou com força total.

Ela estava prisioneira. Em uma mansão de máfia. Por causa de um erro de identidade.

Aurora se sentou lentamente, seu corpo dolorido e rígido. Ela examinou o quarto mais cuidadosamente agora, procurando por uma saída. Havia uma porta que presumivelmente levava ao corredor, e outra que provavelmente era um banheiro. Grandes janelas francesas ocupavam uma parede inteira, e ela se levantou rapidamente, correndo até elas.

A vista tirou seu fôlego. O quarto dava para um jardim expansivo, perfeitamente cuidado, com fontes, estátuas e caminhos de pedra serpenteando entre canteiros de flores. Além do jardim, ela podia ver um muro alto — muito alto — coroado com o que parecia ser arame farpado.

Ela tentou abrir as portas francesas, mas elas estavam trancadas. É claro que estavam.

"Bom dia, senhorita Martinez."

Aurora girou, seu coração disparando. Uma mulher de meia-idade estava parada na porta que levava ao corredor, segurando uma bandeja. Ela tinha cabelos grisalhos presos em um coque elegante e usava um uniforme de empregada impecável.

"Eu... quem é você?" Aurora perguntou, sua voz ainda rouca de sono e medo.

"Meu nome é Maria," a mulher disse com um leve sotaque italiano, entrando no quarto e colocando a bandeja em uma mesa perto da janela. "Sou a governanta da casa. O Senhor Moretti me pediu para cuidar de você."

Aurora observou enquanto Maria descobria a bandeja, revelando um café da manhã completo — ovos mexidos, bacon, torradas, frutas frescas, suco de laranja e café.

"Eu não tenho fome," Aurora disse, embora seu estômago roncasse em protesto. Ela não comia desde o almoço do dia anterior.

Maria lhe deu um olhar maternal e compreensivo. "Você precisa comer, querida. Vai precisar de sua força."

"Força para quê? Para ser uma prisioneira melhor?"

A governanta suspirou. "Eu sei que isso é assustador. Mas o Senhor Moretti não é um homem mau. Ele está apenas... sendo cauteloso."

"Cauteloso?" Aurora riu sem humor. "Ele me sequestrou!"

"Foi um erro," Maria disse suavemente. "Um erro terrível, sim. Mas ele está tentando corrigi-lo da melhor maneira que pode."

"A melhor maneira seria me deixar ir embora!"

Maria não respondeu a isso. Em vez disso, ela apontou para outra porta. "Há roupas novas no closet. Pensei que você gostaria de tomar um banho e se trocar. Há também produtos de higiene no banheiro — tudo o que você possa precisar."

Aurora olhou para a porta do closet, então de volta para Maria. "Por quanto tempo ele vai me manter aqui?"

"Eu não sei, querida. Isso é entre você e ele." Maria se dirigiu à porta, então parou e olhou para trás. "Um conselho, senhorita Martinez? Não tente fugir. Os guardas têm ordens de impedi-la, e eu preferiria que você não se machucasse."

Com essas palavras inquietantes, Maria saiu, e Aurora ouviu o clique inconfundível de uma fechadura sendo trancada.

Ela ficou parada no meio do quarto por um longo momento, lutando contra o impulso de gritar ou chorar ou ambos. Mas então seu treinamento como enfermeira entrou em ação — a parte dela que era treinada para permanecer calma em crises, para avaliar a situação e fazer um plano.

Primeiro, ela precisava cuidar de suas necessidades básicas. Ela estava suja, cansada e faminta. Então ela tomaria um banho, comeria e tentaria descobrir uma maneira de sair dessa situação.

O banheiro era tão luxuoso quanto o quarto — todo em mármore branco e dourado, com uma banheira enorme que parecia mais uma pequena piscina e um chuveiro com múltiplos jatos. Havia uma pilha de toalhas macias e uma variedade de produtos de banho caros.

Aurora tomou um banho longo e quente, deixando a água lavar não apenas a sujeira, mas também um pouco do medo e da tensão. Quando finalmente saiu, envolta em um roupão de seda, ela se sentiu um pouco mais humana.

O closet, como Maria havia dito, estava cheio de roupas novas — todas em seu tamanho, ela notou com um arrepio. Como eles sabiam seu tamanho? Havia vestidos casuais, jeans, blusas, até lingerie. Tudo de alta qualidade, tudo perfeitamente adequado para ela.

Ela escolheu um par de jeans e uma blusa simples de algodão, recusando-se a usar qualquer coisa muito elaborada. Ela não ia se vestir para impressionar seus captores.

Depois de se vestir, Aurora finalmente permitiu-se comer. Ela estava faminta, e a comida estava deliciosa — muito melhor do que qualquer coisa que ela normalmente comia. Ela odiava admitir isso, mas era verdade.

Ela estava terminando seu café quando ouviu a porta sendo destrancada. Seu corpo ficou tenso automaticamente, e ela se virou para ver quem estava entrando.

Era Dante Moretti.

À luz do dia, ele era ainda mais impressionante do que ela se lembrava. Ele usava calças de alfaiataria e uma camisa branca com as mangas enroladas até os cotovelos, revelando antebraços musculosos. Seu cabelo escuro estava ligeiramente bagunçado, como se ele tivesse passado as mãos por ele várias vezes, e havia sombras sob seus olhos que sugeriam que ele não tinha dormido muito.

"Bom dia," ele disse, sua voz profunda e controlada. "Espero que tenha dormido bem."

Aurora o encarou, sem acreditar na audácia dele. "Você está brincando? Você me sequestrou, me mantém prisioneira, e está perguntando se dormi bem?"

Um músculo se contraiu em sua mandíbula. "Eu entendo que você está chateada—"

"Chateada?" Aurora se levantou, sua raiva finalmente superando seu medo. "Eu não estou chateada, Senhor Moretti. Estou aterrorizada! Tenho uma vida lá fora — um trabalho, amigos, responsabilidades. As pessoas vão estar procurando por mim!"

"Já cuidamos disso," Dante disse calmamente. "Seu hospital recebeu uma ligação esta manhã informando que você teve uma emergência familiar e precisará de algumas semanas de licença. Seus vizinhos foram informados da mesma coisa."

Aurora sentiu o sangue drenar de seu rosto. "Você... você não pode fazer isso. Isso é sequestro! Isso é ilegal!"

Um sorriso amargo tocou os lábios de Dante. "Senhorita Martinez, eu sou o chefe da família Moretti. Eu faço as leis no meu mundo. E no momento, você está no meu mundo."

Ele se aproximou, e Aurora teve que lutar contra o impulso de recuar. Havia algo nele — uma presença, um poder — que era simultaneamente aterrorizante e magnético.

"Eu não quero machucá-la," Dante continuou, sua voz mais suave agora. "Mas eu também não posso deixá-la ir. Não ainda. Você viu demais, sabe demais. Se você fosse à polícia..."

"Eu não iria!" Aurora protestou. "Eu só quero voltar para minha vida normal e esquecer que qualquer coisa disso aconteceu!"

"Você diz isso agora. Mas e quando o medo passar? Quando você começar a pensar que tem uma obrigação cívica de denunciar o que viu?" Ele balançou a cabeça. "Eu não posso arriscar isso. Há muitas vidas em jogo — não apenas a minha, mas de toda a minha família, minha organização."

Aurora sentiu lágrimas de frustração queimando em seus olhos. "Então o que você vai fazer? Me manter aqui para sempre?"

"Não. Apenas até eu ter certeza de que posso confiar em você." Ele fez uma pausa, estudando-a com aqueles olhos escuros e intensos. "Ou até encontrarmos... outra solução."

"Que tipo de solução?"

Dante não respondeu. Em vez disso, ele se virou e caminhou até a janela, olhando para o jardim lá embaixo. "Você tem liberdade para se mover pela casa e pelos jardins," ele disse finalmente. "Mas não tente sair da propriedade. Os guardas têm ordens de impedi-la, e eu preferiria que você não se machucasse."

"Quão generoso," Aurora murmurou sarcasticamente.

Ele se virou para olhá-la, e havia algo em sua expressão que ela não conseguia ler. "Eu realmente sinto muito por isso, Aurora. Se houvesse outra maneira..."

"Há," ela interrompeu. "Você pode me deixar ir."

"Não posso." Sua voz era final, sem espaço para argumentação.

Eles ficaram em silêncio por um longo momento, apenas se olhando. Aurora tentou ler algo em seus olhos — algum sinal de humanidade, de compaixão. E por um breve segundo, ela pensou que viu algo. Mas então ele piscou, e a máscara fria estava de volta.

"Maria estará disponível se você precisar de qualquer coisa," Dante disse, dirigindo-se à porta. "Jantar é às oito. Você é bem-vinda para se juntar a mim, se quiser."

"E se eu não quiser?"

Ele parou na porta e olhou para trás, um leve sorriso tocando seus lábios. "Então você comerá sozinha em seu quarto. A escolha é sua, Aurora. Eu não vou forçá-la a nada."

"Exceto a ficar aqui," ela apontou amargamente.

"Exceto isso," ele concordou. E então ele se foi, a porta se fechando atrás dele com um clique suave.

Aurora ficou parada no meio do quarto luxuoso — sua prisão dourada — e finalmente permitiu que as lágrimas caíssem. Ela chorou por sua liberdade perdida, por sua vida interrompida, pelo medo que ainda pulsava em suas veias.

Mas mesmo enquanto chorava, uma parte dela — a parte forte e resiliente que a tinha levado através da escola de enfermagem e anos de turnos difíceis — estava fazendo planos. Ela ia sobreviver a isso. Ela ia encontrar uma maneira de sair.

E talvez, apenas talvez, ela ia descobrir quem realmente era Dante Moretti por trás daquela máscara fria.

Porque se havia uma coisa que Aurora tinha aprendido em seus anos como enfermeira, era que todo mundo tinha uma história. Todo mundo tinha feridas que precisavam ser curadas.

Até mesmo chefes da máfia.

Ela só não sabia ainda que curar as feridas dele significaria abrir as suas próprias. E que o homem que a mantinha prisioneira acabaria sendo aquele que a libertaria de maneiras que ela nunca imaginou possíveis.

Mas isso viria depois. Por enquanto, ela era apenas uma prisioneira em uma gaiola dourada, tentando encontrar uma maneira de escapar.

Ou pelo menos, era isso que ela dizia a si mesma.`
    },
    {
      chapter_number: 3,
      title: 'Jantar com o Diabo',
      preview_text: 'Aurora decide aceitar o convite para jantar, determinada a entender seu captor...',
      content: `Aurora passou o resto do dia explorando sua "prisão". Como Dante havia prometido, ela tinha liberdade para se mover pela mansão, embora sempre houvesse um guarda discreto seguindo-a a uma distância respeitosa.

A casa era enorme — três andares de luxo ostensivo, com salas que pareciam nunca ter sido usadas, corredores forrados com arte que provavelmente valia milhões, e uma biblioteca que teria feito qualquer bibliófilo chorar de alegria. Aurora encontrou-se gravitando em direção à biblioteca, perdendo-se entre as prateleiras de livros antigos e novos.

Ela estava folheando uma primeira edição de "O Grande Gatsby" quando Maria a encontrou.

"Senhorita Martinez," a governanta disse suavemente, "o jantar será servido em uma hora. O Senhor Moretti gostaria de saber se você se juntará a ele."

Aurora hesitou. Parte dela queria recusar, queria ficar trancada em seu quarto como uma forma de protesto silencioso. Mas outra parte — a parte curiosa e estratégica — sabia que ela precisava entender Dante Moretti se quisesse ter alguma chance de sair dessa situação.

"Eu vou," ela disse finalmente.

Maria sorriu, parecendo genuinamente satisfeita. "Maravilhoso. Deixei um vestido em seu quarto, se quiser se trocar."

Aurora queria recusar, queria aparecer no jantar em seus jeans e blusa simples como uma declaração. Mas quando voltou ao quarto e viu o vestido que Maria havia deixado, ela não pôde evitar um suspiro de admiração.

Era um vestido de seda azul-marinho, simples mas elegante, com um corte que era ao mesmo tempo modesto e lisonjeiro. Não era o tipo de vestido que gritava "olhe para mim", mas sim o tipo que sussurrava "eu tenho classe".

Contra seu melhor julgamento, Aurora se trocou. Ela até deixou seu cabelo solto, caindo em ondas naturais sobre seus ombros, e aplicou um pouco de maquiagem dos produtos que Maria havia fornecido.

Quando se olhou no espelho, ela quase não se reconheceu. Ela parecia... diferente. Mais sofisticada. Mais confiante do que realmente se sentia.

Às oito em ponto, um guarda bateu em sua porta para escoltá-la até a sala de jantar. Aurora seguiu-o através dos corredores, seu coração batendo mais rápido a cada passo.

A sala de jantar era tão impressionante quanto o resto da casa — um espaço enorme com um lustre de cristal que parecia ter mil luzes, paredes forradas com painéis de madeira escura, e uma mesa que poderia facilmente acomodar vinte pessoas.

Mas esta noite, havia apenas dois lugares postos — um em cada extremidade da longa mesa.

Dante já estava lá, de pé perto da janela com uma taça de vinho na mão. Ele usava um terno completo agora, perfeitamente ajustado, e seu cabelo estava penteado para trás. Quando ele se virou e a viu, algo passou por seus olhos — algo que fez o estômago de Aurora dar um nó.

"Aurora," ele disse, sua voz mais suave do que ela esperava. "Você está... linda."

Ela não respondeu, não confiando em sua voz. Em vez disso, ela simplesmente ficou parada na entrada, de repente insegura.

Dante pareceu perceber seu desconforto. Ele colocou sua taça de vinho e gesticulou para a mesa. "Por favor, sente-se. Eu prometo que não mordo."

"Isso é reconfortante," Aurora murmurou, mas se moveu para a cadeira mais próxima.

Dante franziu o cenho. "Não ali. Aqui." Ele puxou a cadeira ao lado da sua própria, na cabeceira da mesa.

Aurora hesitou, então se moveu para onde ele indicava. Estar tão perto dele fazia seu coração acelerar, mas ela se recusou a mostrar medo.

Um mordomo apareceu do nada, servindo vinho para ambos e depois desaparecendo tão silenciosamente quanto havia chegado. Aurora olhou para a taça de vinho tinto na frente dela, então para Dante.

"Não está envenenado, se é isso que você está pensando," ele disse com um toque de humor.

"Como posso ter certeza?"

Para sua surpresa, Dante pegou a taça dela e tomou um gole, seus olhos nunca deixando os dela. Então ele a colocou de volta na frente dela. "Satisfeita?"

Aurora sentiu seu rosto esquentar. Ela pegou a taça e tomou um gole — era um vinho excelente, rico e complexo. É claro que era.

"Então," Dante disse, recostando-se em sua cadeira e estudando-a, "conte-me sobre você, Aurora Martinez."

"Por quê?" ela perguntou defensivamente. "Para que você possa usar contra mim?"

"Não. Porque estou curioso." Ele fez uma pausa. "E porque se você vai estar aqui por um tempo, prefiro conhecer a pessoa que está sob meu teto."

"Sob seu teto?" Aurora riu sem humor. "Você quer dizer sua prisioneira."

"Se você quiser ver dessa forma."

"Como mais eu deveria ver?"

Dante suspirou, passando a mão pelo cabelo — um gesto que ela estava começando a reconhecer como um sinal de frustração. "Olha, eu sei que isso não é ideal—"

"Não é ideal?" Aurora interrompeu, sua raiva finalmente transbordando. "Você me arrancou da minha vida! Você me mantém aqui contra minha vontade! Você ameaça minha liberdade, minha segurança, minha sanidade! E você chama isso de 'não ideal'?"

Sua voz havia subido, ecoando na grande sala. Dante não respondeu imediatamente. Em vez disso, ele apenas a observou, aqueles olhos escuros lendo cada emoção que passava por seu rosto.

"Você está certa," ele disse finalmente, sua voz baixa. "Isso é mais do que 'não ideal'. Isso é terrível. Injusto. Errado em todos os sentidos." Ele se inclinou para frente, seus olhos intensos. "Mas eu não tenho escolha, Aurora. No meu mundo, fraqueza é morte. Compaixão é fraqueza. E deixar você ir seria ambos."

"Então seu mundo é uma merda," Aurora disse sem rodeios.

Para sua surpresa, Dante riu — uma risada real, genuína, que transformou completamente seu rosto. Por um momento, ele não parecia o chefe frio e calculista da máfia. Ele parecia... humano.

"Sim," ele concordou, ainda sorrindo. "Meu mundo é uma merda. Mas é o único que eu tenho."

O mordomo voltou, desta vez trazendo o primeiro prato — uma sopa de abóbora perfeitamente apresentada. Aurora percebeu que estava faminta, e começou a comer, agradecida pela distração.

Eles comeram em silêncio por alguns minutos, e Aurora podia sentir Dante observando-a. Finalmente, ela não aguentou mais.

"O que?" ela perguntou, olhando para ele.

"Você não é o que eu esperava," ele disse pensativamente.

"O que você esperava?"

"Lágrimas. Histeria. Súplicas." Ele inclinou a cabeça. "Mas você... você está brava. Desafiadora. Forte."

"Eu sou enfermeira," Aurora disse simplesmente. "Eu lido com crises todos os dias. Aprendi a não entrar em pânico."

"Enfermeira," Dante repetiu, como se estivesse testando a palavra. "Por que você escolheu essa profissão?"

Aurora hesitou. Ela não queria compartilhar nada pessoal com ele, não queria dar-lhe munição. Mas havia algo em seus olhos — uma curiosidade genuína — que a fez responder.

"Minha mãe morreu de câncer quando eu tinha dezesseis anos," ela disse calmamente. "As enfermeiras que cuidaram dela nos últimos meses foram... incríveis. Elas não apenas cuidaram do corpo dela, mas da alma dela. E da minha também." Ela olhou para sua sopa. "Eu queria ser capaz de fazer isso por outras pessoas. Queria fazer a diferença."

Quando ela olhou para cima, viu algo em seus olhos que não esperava: compreensão. Empatia.

"Minha mãe também morreu," Dante disse suavemente. "Eu tinha doze anos. Foi... difícil."

"Como ela morreu?" Aurora perguntou antes de poder se impedir.

A expressão de Dante endureceu. "Ela foi morta. Por uma família rival. Porque meu pai se recusou a ceder território." Ele tomou um longo gole de vinho. "Foi quando eu aprendi que neste mundo, você ou é forte ou está morto. Não há meio-termo."

Aurora sentiu uma pontada de compaixão, apesar de si mesma. "Eu sinto muito."

"Não sinta." Sua voz estava fria novamente, a máscara de volta no lugar. "Foi há muito tempo."

Mas Aurora podia ver através da máscara agora. Ela podia ver a dor que ele carregava, a criança que havia perdido sua mãe muito cedo e havia sido forçado a crescer em um mundo de violência e traição.

O resto do jantar passou em uma conversa surpreendentemente agradável. Dante fez perguntas sobre sua vida, seu trabalho, seus interesses, e Aurora se viu respondendo mais honestamente do que pretendia. Havia algo nele — quando ele baixava suas defesas — que era quase... cativante.

Ele era inteligente, bem-lido, e tinha um senso de humor seco que a pegava de surpresa. Ele falou sobre arte, literatura, música — coisas que ela nunca teria associado a um chefe da máfia.

"Você não é o que eu esperava também," Aurora admitiu quando estavam no sobremesa — um tiramisu que derretia na boca.

"Não?" Dante arqueou uma sobrancelha. "O que você esperava?"

"Um monstro," ela disse honestamente. "Alguém cruel, sem coração, que se deleitava com o sofrimento dos outros."

"E agora?"

Aurora o estudou — realmente o estudou. Ela viu a inteligência em seus olhos, a tensão em seus ombros, as linhas de estresse em seu rosto. Ela viu um homem carregando o peso de responsabilidades que ela mal podia imaginar.

"Agora," ela disse lentamente, "eu vejo alguém que está preso em seu próprio tipo de prisão. Alguém que talvez não tenha mais escolhas do que eu."

Algo passou pelos olhos de Dante — surpresa, talvez, ou reconhecimento. Ele abriu a boca para responder, mas foi interrompido por um guarda que entrou apressadamente na sala.

"Senhor Moretti," o guarda disse urgentemente, "desculpe interromper, mas há uma situação que requer sua atenção imediata."

Dante se levantou imediatamente, sua postura mudando de relaxada para alerta em um segundo. "Que tipo de situação?"

"Os Santoro. Eles descobriram sobre o erro. E eles não estão felizes."

Aurora viu o rosto de Dante endurecer, seus olhos ficando frios e calculistas. Este era o chefe da máfia, ela percebeu. Este era o homem que todos temiam.

"Eu cuido disso," Dante disse, sua voz dura como aço. Ele se virou para Aurora, e por um momento, ela viu conflito em seus olhos. "Eu preciso ir. Maria vai escoltá-la de volta ao seu quarto."

"Dante," Aurora disse antes de poder se impedir, usando seu primeiro nome pela primeira vez. "Seja cuidadoso."

Ele parou, surpreso. Então, para seu espanto, ele se aproximou e pegou sua mão, levantando-a aos lábios. O beijo foi leve, quase casto, mas enviou um choque elétrico através de seu braço.

"Obrigado, cara," ele murmurou. "Mas não se preocupe comigo. Eu sempre sobrevivo."

E então ele se foi, deixando Aurora sozinha na grande sala de jantar, sua mão ainda formigando onde seus lábios haviam tocado, seu coração batendo de uma maneira que não tinha nada a ver com medo.

Ela percebeu, com um choque de horror e fascínio, que estava começando a ver Dante Moretti não como seu captor, mas como um homem. Um homem complexo, danificado, perigoso — mas ainda assim, um homem.

E isso, ela sabia, era o mais perigoso de tudo.

Porque como você escapa de alguém quando está começando a não querer mais escapar?

Como você protege seu coração quando ele já está começando a ceder?

Aurora não tinha respostas. Tudo o que ela sabia era que sua vida havia mudado irrevogavelmente naquela noite no estacionamento.

E que, de alguma forma, Dante Moretti havia se tornado mais do que seu captor.

Ele havia se tornado seu mistério. Seu enigma.

E, talvez, seu destino.`
    }
  ]
}

// ============================================
// LIVRO 2: A NOIVA DO DON
// ============================================

const livro2: BookData = {
  title: 'A Noiva do Don',
  author: 'Isabella Romano',
  description: `Para salvar o irmão de uma dívida impagável, Helena aceita se tornar esposa do chefe mais temido de Chicago.

Adrian Russo nunca quis casamento — até encontrar uma mulher teimosa o suficiente para desafiá-lo.

Entre jogos de poder, ciúme, proteção obsessiva e inimigos que surgem de todos os lados, Helena percebe que o maior perigo… é se apaixonar pelo próprio monstro.`,
  cover_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=900&fit=crop',
  status: 'completed',
  category_slugs: ['mafia', 'romance', 'drama'],
  chapters: [
    {
      chapter_number: 1,
      title: 'A Proposta Impossível',
      preview_text: 'Helena nunca imaginou que uma dívida do irmão a levaria até o escritório do homem mais perigoso de Chicago...',
      content: `Helena Costa segurava a alça de sua bolsa com tanta força que seus dedos estavam brancos. Ela estava sentada em uma sala de espera luxuosa no último andar de um arranha-céu no centro de Chicago, cercada por móveis que provavelmente custavam mais do que ela ganhava em um ano.

Ela não deveria estar ali. Ela deveria estar em casa, preparando aulas para seus alunos do ensino fundamental. Mas em vez disso, estava prestes a se encontrar com Adrian Russo — o homem que seu irmão devia uma quantia obscena de dinheiro.

O homem que, segundo os rumores, controlava metade do submundo de Chicago.

"Senhorita Costa?" Uma secretária impecável apareceu, sorrindo educadamente. "O Senhor Russo vai recebê-la agora."

Helena se levantou com pernas trêmulas e seguiu a secretária por um corredor forrado com arte moderna até uma porta dupla de mogno. A secretária bateu uma vez, depois abriu a porta.

"Senhorita Helena Costa, senhor."

Helena entrou no escritório e teve que lutar para não deixar sua mandíbula cair. O espaço era enorme, com janelas do chão ao teto oferecendo uma vista panorâmica de Chicago. A decoração era masculina e sofisticada — couro escuro, madeira rica, e mais arte que provavelmente valia milhões.

Mas foi o homem atrás da mesa que capturou toda a sua atenção.

Adrian Russo era ainda mais impressionante pessoalmente do que nas fotos que ela havia visto online. Ele tinha por volta de trinta e cinco anos, com cabelos negros perfeitamente penteados, uma mandíbula forte coberta por uma barba bem aparada, e olhos tão escuros que pareciam quase pretos. Ele usava um terno de três peças que provavelmente custava mais do que o carro dela, e havia uma aura de poder ao seu redor que era quase tangível.

Ele não se levantou quando ela entrou. Em vez disso, ele simplesmente a observou com aqueles olhos penetrantes, como um predador avaliando sua presa.

"Senhorita Costa," ele disse finalmente, sua voz profunda e levemente rouca. "Sente-se."

Não foi um convite. Foi uma ordem.

Helena se sentou na cadeira de couro em frente à sua mesa, mantendo as costas retas e o queixo erguido. Ela não ia mostrar medo, não importava o quão aterrorizada estivesse.

"Obrigada por me receber, Senhor Russo," ela disse, surpreendida com a firmeza de sua própria voz.

"Eu estava curioso," Adrian disse, recostando-se em sua cadeira e entrelaçando os dedos sobre o estômago. "Quando meus homens me disseram que a irmã de Marco Costa queria se encontrar comigo, eu tinha que saber o porquê." Ele inclinou a cabeça. "Então, senhorita Costa, por que você está aqui?"

Helena respirou fundo. "Estou aqui para falar sobre a dívida do meu irmão."

"Ah, sim. A dívida." Adrian pegou uma pasta em sua mesa e a abriu, seus olhos percorrendo o conteúdo. "Quinhentos mil dólares. Mais juros, é claro. Que agora totalizam... seiscentos e cinquenta mil."

Helena sentiu seu estômago afundar. Ela sabia que era muito, mas ouvir o número em voz alta fez tudo parecer ainda mais impossível.

"Meu irmão cometeu um erro," ela disse cuidadosamente. "Ele estava desesperado, e ele fez escolhas ruins. Mas ele está tentando consertar as coisas—"

"Tentando?" Adrian interrompeu, sua voz afiada. "Senhorita Costa, seu irmão me deve essa quantia há seis meses. Seis meses durante os quais ele não fez um único pagamento. Não tentou entrar em contato comigo. Não ofereceu nenhuma explicação." Ele se inclinou para frente, seus olhos fixos nos dela. "Na verdade, ele fugiu. Desapareceu. Deixou você para lidar com sua bagunça."

"Ele não fugiu," Helena protestou, embora não tivesse certeza se acreditava nisso. Ela não falava com Marco há semanas. "Ele está apenas... assustado."

"Ele deveria estar," Adrian disse friamente. "Porque no meu mundo, dívidas não pagas têm consequências. Consequências sérias."

O medo gelou a espinha de Helena. "Por favor," ela disse, odiando o tom de súplica em sua voz. "Deve haver algo que possamos fazer. Algum tipo de acordo. Eu posso pagar em parcelas, ou—"

"Você?" Adrian a interrompeu, arqueando uma sobrancelha. "Você é professora, não é? Ganha o quê, quarenta mil por ano? Levaria você... deixe-me ver... dezesseis anos para pagar essa dívida. E isso sem contar os juros que continuariam acumulando."

Helena sentiu lágrimas de frustração queimando em seus olhos, mas ela as forçou para trás. "Então o que você quer? Você quer sangue? Porque eu não posso dar isso a você. Tudo o que posso oferecer é minha palavra de que encontraremos uma maneira de pagar."

Adrian a estudou por um longo momento, seus olhos escuros impossíveis de ler. Então, para sua surpresa, ele se levantou e caminhou até a janela, olhando para a cidade lá embaixo.

"Você sabe quem eu sou, senhorita Costa?" ele perguntou sem olhar para ela.

"Eu sei que você é um homem de negócios," Helena disse cuidadosamente. "E eu sei que você tem... conexões."

Adrian riu — um som sem humor. "Conexões. Que maneira delicada de colocar." Ele se virou para encará-la. "Eu sou o chefe da família Russo. Eu controlo a maior parte das operações ilegais nesta cidade — jogos, empréstimos, proteção. Eu sou o homem que as pessoas temem. O homem que faz outros homens desaparecerem quando eles me cruzam."

Helena engoliu em seco, mas manteve seu olhar firme. "Por que você está me dizendo isso?"

"Porque eu quero que você entenda exatamente com quem está lidando." Ele se aproximou, parando na frente de sua cadeira e olhando para baixo. "Eu quero que você entenda que quando eu faço uma oferta, não é uma negociação. É pegar ou largar."

"Que oferta?" Helena perguntou, seu coração acelerando.

Adrian voltou para sua mesa e pegou um documento, colocando-o na frente dela. "Eu vou perdoar a dívida do seu irmão. Toda ela. Ele estará livre e claro, sem mais obrigações para comigo."

Helena olhou para o documento, depois de volta para ele, confusa. "Por quê? O que você quer em troca?"

Um sorriso lento e perigoso se espalhou pelo rosto de Adrian. "Você."

O mundo de Helena pareceu parar. "Eu? O que você quer dizer com 'você'?"

"Eu quero que você se case comigo."

Por um momento, Helena pensou que tinha ouvido errado. Ela piscou, esperando que ele risse e dissesse que era uma piada. Mas ele permaneceu sério, seus olhos fixos nos dela.

"Você está... você está brincando," ela finalmente conseguiu dizer.

"Eu nunca brinco sobre negócios," Adrian disse. "E isso é um negócio, senhorita Costa. Um acordo muito simples. Você se casa comigo, e a dívida do seu irmão desaparece."

"Mas... por quê?" Helena perguntou, completamente perdida. "Você nem me conhece. Por que diabos você quereria se casar comigo?"

Adrian se sentou na beirada de sua mesa, cruzando os braços. "Eu tenho minhas razões. Razões que não são da sua conta. Tudo o que você precisa saber é que esta é uma oferta única. Você tem vinte e quatro horas para decidir."

"Vinte e quatro horas?" Helena se levantou, sua raiva finalmente superando seu choque. "Você está me pedindo para casar com você — um completo estranho — e me dá vinte e quatro horas para decidir?"

"Eu não estou pedindo," Adrian corrigiu, sua voz fria. "Estou oferecendo. Há uma diferença."

"Isso é insano!"

"Talvez." Ele se levantou, ficando perigosamente perto dela. Helena teve que inclinar a cabeça para trás para olhar em seus olhos. "Mas é a única opção que você tem. Porque se você recusar, eu vou atrás do seu irmão. E quando eu o encontrar — e eu vou encontrá-lo — ele vai desejar que tivesse apenas me devendo dinheiro."

A ameaça era clara, e Helena sentiu o medo apertar seu peito. "Você o machucaria?"

"Eu faria o que fosse necessário para recuperar o que é meu," Adrian disse simplesmente. "Mas não precisa chegar a isso. Você pode salvá-lo. Tudo o que você tem que fazer é dizer sim."

Helena olhou para o documento na mesa — um contrato de casamento pré-nupcial, ela percebeu agora. Seu nome já estava digitado em todos os lugares apropriados, esperando apenas por sua assinatura.

"E se eu disser sim," ela perguntou lentamente, "o que exatamente esse casamento implicaria?"

"Você moraria comigo. Apareceria ao meu lado em eventos públicos. Agiria como minha esposa em todos os sentidos."

"Em todos os sentidos?" Helena repetiu, seu rosto esquentando.

Um sorriso tocou os lábios de Adrian. "Eu não vou forçá-la a nada, se é isso que você está perguntando. Mas eu espero que você cumpra seu papel convincentemente. O mundo precisa acreditar que nosso casamento é real."

"Por quanto tempo?"

"Um ano. Depois disso, podemos nos divorciar amigavelmente, e você estará livre para ir embora. Eu até vou garantir que você saia com uma quantia generosa — digamos, um milhão de dólares."

Helena sentiu sua cabeça girar. Isso era loucura. Absoluta loucura. Mas enquanto olhava para Adrian Russo — este homem perigoso e poderoso que tinha a vida de seu irmão em suas mãos — ela percebeu que não tinha escolha.

Marco era tudo o que ela tinha. Depois que seus pais morreram em um acidente de carro cinco anos atrás, eles só tinham um ao outro. Sim, ele tinha cometido erros. Sim, ele a tinha decepcionado. Mas ele ainda era seu irmão.

E ela faria qualquer coisa para salvá-lo.

Até mesmo se casar com o diabo.

"Eu preciso de garantias," Helena disse finalmente, sua voz mais firme do que se sentia. "Eu preciso de sua palavra de que meu irmão estará seguro. Que você não vai machucá-lo, não importa o que aconteça."

"Você tem minha palavra," Adrian disse sem hesitação.

"E eu quero isso por escrito. No contrato."

Adrian arqueou uma sobrancelha, parecendo quase... impressionado. "Muito bem." Ele pegou uma caneta e adicionou uma cláusula ao contrato, depois empurrou-o de volta para ela. "Mais alguma coisa?"

Helena leu a nova cláusula — estava tudo lá, em preto e branco. Marco estaria seguro. A dívida seria perdoada. Ela teria um ano de sua vida, e então seria livre.

Era um preço alto. Mas era um preço que ela estava disposta a pagar.

"Quando?" ela perguntou.

"Quando o quê?"

"Quando seria o casamento?"

"Uma semana a partir de hoje," Adrian disse. "Eu já tenho tudo arranjado. Será uma cerimônia pequena e privada, apenas família imediata e associados próximos."

"Uma semana," Helena repetiu, sentindo a realidade da situação finalmente afundando. Em uma semana, ela seria a esposa de Adrian Russo. Em uma semana, sua vida mudaria completamente.

"Você tem até amanhã a esta hora para me dar sua resposta," Adrian disse, voltando para trás de sua mesa. "Mas eu sugiro que você não demore muito. Minha paciência tem limites."

Helena pegou o contrato, suas mãos tremendo ligeiramente. "Eu vou pensar sobre isso."

"Faça isso." Adrian voltou sua atenção para o computador, efetivamente dispensando-a. "Maria vai escoltá-la para fora."

Helena estava quase na porta quando sua voz a parou.

"Senhorita Costa?"

Ela olhou para trás. Adrian estava olhando para ela, e havia algo em seus olhos que ela não conseguia decifrar.

"Eu não sou um homem bom," ele disse calmamente. "Eu não vou fingir ser. Mas eu protejo o que é meu. E se você se tornar minha esposa, você estará sob minha proteção. Ninguém vai tocá-la. Ninguém vai machucá-la. Você tem minha palavra sobre isso."

Helena não sabia se isso deveria reconfortá-la ou assustá-la ainda mais. Ela simplesmente assentiu e saiu, o contrato pesando em sua bolsa como uma sentença de morte.

Ou talvez, ela pensou enquanto entrava no elevador, como um novo começo.

Ela não sabia ainda que Adrian Russo guardava segredos que mudariam tudo. Que o casamento deles não era tão transacional quanto ele fazia parecer. Que ele tinha suas próprias razões — razões que tinham tudo a ver com ela e nada a ver com a dívida de seu irmão.

Mas ela descobriria. Oh, ela descobriria.

E quando descobrisse, seria tarde demais para voltar atrás.

Porque alguns destinos não podem ser evitados.

E alguns amores não podem ser negados.

Mesmo quando começam com uma mentira.`
    },
    {
      chapter_number: 2,
      title: 'A Decisão',
      preview_text: 'Helena tem 24 horas para tomar a decisão mais importante de sua vida...',
      content: `Helena não dormiu naquela noite. Ela ficou acordada em seu pequeno apartamento, o contrato de casamento espalhado na mesa de café à sua frente, uma xícara de chá frio esquecida ao lado.

Ela havia lido o documento pelo menos vinte vezes, procurando por brechas, por armadilhas escondidas, por qualquer coisa que pudesse tornar a situação ainda pior do que já era. Mas o contrato era surpreendentemente direto.

Ela se casaria com Adrian Russo por um ano. Durante esse tempo, ela moraria com ele, apareceria ao seu lado em eventos públicos, e agiria como sua esposa. Em troca, a dívida de Marco seria perdoada, e no final do ano, ela receberia um milhão de dólares e sua liberdade.

Parecia simples demais. E Helena tinha aprendido há muito tempo que quando algo parecia bom demais para ser verdade, geralmente era.

Seu telefone tocou, fazendo-a pular. Era Marco.

"Oi," ela atendeu, sua voz cansada.

"Lena," a voz de seu irmão veio do outro lado, tensa e preocupada. "Você está bem? Eu ouvi que você foi ver Russo."

"Como você soube?"

"Eu tenho meus contatos. Lena, por favor me diga que você não fez nada estúpido."

Helena quase riu. "Estúpido? Você quer dizer como pegar emprestado meio milhão de dólares de um chefe da máfia e depois desaparecer?"

Houve um silêncio do outro lado. "Eu sei que estraguei tudo," Marco disse finalmente, sua voz pequena. "Eu sei que você está brava comigo. Mas eu juro, Lena, eu estava tentando fazer a coisa certa. O negócio era suposto ser seguro—"

"Não era," Helena interrompeu. "E agora você me deixou para limpar sua bagunça. De novo."

"Eu sinto muito. Eu juro, eu vou consertar isso. Eu só preciso de mais tempo—"

"Não há mais tempo, Marco." Helena esfregou os olhos cansados. "Russo quer seu dinheiro. E se ele não conseguir, ele vai querer você."

"Então o que vamos fazer?"

Helena olhou para o contrato. "Ele me fez uma oferta."

"Que tipo de oferta?"

"O tipo que vai perdoar sua dívida completamente."

Ela podia ouvir a esperança na voz de Marco. "Sério? Lena, isso é incrível! O que você tem que fazer?"

Helena fechou os olhos. "Casar com ele."

Silêncio. Então: "O quê?"

"Você ouviu direito. Adrian Russo quer que eu me case com ele. Por um ano. Em troca, sua dívida desaparece."

"Não." A voz de Marco estava firme agora. "Não, Lena, você não pode fazer isso. Eu não vou deixar você sacrificar sua vida por minha causa."

"Você não tem escolha," Helena disse calmamente. "E nem eu. Não se quisermos que você continue vivo."

"Há outra maneira. Tem que haver."

"Não há." Helena se levantou e caminhou até a janela, olhando para as luzes da cidade. "E honestamente, Marco, não é tão ruim. É apenas um ano. E no final, eu recebo um milhão de dólares. Eu posso usar esse dinheiro para voltar à escola, talvez fazer mestrado. Ou viajar. Ou qualquer coisa que eu queira."

Ela estava tentando convencer a si mesma tanto quanto a ele.

"Lena," Marco disse suavemente, "você não tem que fazer isso. Eu posso fugir. Ir para outro país. Começar de novo."

"E passar o resto da sua vida olhando por cima do ombro? Sempre com medo de que ele te encontre?" Helena balançou a cabeça, embora ele não pudesse vê-la. "Não. Isso acaba agora. Eu vou fazer isso."

"Você tem certeza?"

"Não," Helena admitiu. "Mas eu vou fazer de qualquer jeito."

Depois de desligar com Marco, Helena tomou um banho longo e quente, tentando lavar a tensão de seus músculos. Mas sua mente continuava voltando para Adrian Russo.

Ele era perigoso — isso era óbvio. Mas havia algo mais nele, algo que ela havia vislumbrado brevemente em seu escritório. Uma inteligência afiada. Um controle férreo. E, talvez, uma solidão que espelhava a sua própria.

Ela se perguntou por que ele realmente queria se casar com ela. Não podia ser apenas sobre a dívida de Marco — homens como Adrian Russo não se casavam por seiscentos e cinquenta mil dólares. Eles tinham milhões, talvez bilhões.

Então o que ele realmente queria?

Helena não tinha respostas. Mas ela sabia que ia descobrir.

---

Na manhã seguinte, Helena se vestiu cuidadosamente — uma blusa branca simples e calças pretas, seu cabelo preso em um coque profissional. Ela queria parecer confiante, no controle, mesmo que por dentro estivesse se desmoronando.

Ela chegou ao escritório de Adrian exatamente às dez horas. A mesma secretária a cumprimentou, mas desta vez havia um conhecimento em seus olhos que não estava lá antes. Como se ela soubesse exatamente o que Helena estava ali para fazer.

Adrian estava de pé perto da janela quando ela entrou, falando ao telefone em italiano. Sua voz era baixa e ameaçadora, e Helena não precisava entender as palavras para saber que ele estava bravo.

Quando ele a viu, ele encerrou a ligação abruptamente e colocou o telefone no bolso.

"Senhorita Costa," ele disse, sua voz voltando ao tom controlado que ela estava começando a reconhecer. "Você tem uma resposta para mim?"

Helena respirou fundo. Isto era. O momento que mudaria tudo.

"Sim," ela disse, sua voz firme. "Eu tenho."

Adrian esperou, seus olhos escuros fixos nos dela.

"Eu vou me casar com você," Helena disse. "Mas eu tenho condições."

Uma sobrancelha se arqueou. "Condições?"

"Sim." Helena se aproximou, forçando-se a manter contato visual. "Primeiro, eu quero acesso total ao contrato. Eu quero que meu próprio advogado o revise antes de eu assinar."

"Razoável," Adrian concordou.

"Segundo, eu quero manter meu emprego. Eu amo ensinar, e não vou desistir disso."

Adrian franziu o cenho. "Isso pode ser... complicado. Como minha esposa, você terá certas obrigações—"

"Eu vou cumprir essas obrigações," Helena interrompeu. "Mas durante o dia, quando você estiver trabalhando, eu também estarei. Isso não é negociável."

Houve um longo silêncio enquanto Adrian a estudava. Então, para sua surpresa, ele assentiu. "Muito bem. Você pode manter seu emprego. Mas você terá segurança com você o tempo todo."

"Segurança?"

"Você será minha esposa," Adrian disse, como se isso explicasse tudo. "Isso faz de você um alvo. Eu não vou arriscar sua segurança."

Helena não tinha pensado nisso. É claro que ser casada com um chefe da máfia viria com perigos. "Ok," ela concordou relutantemente. "Segurança discreta."

"Discreta," Adrian repetiu, um leve sorriso tocando seus lábios. "Eu vou ver o que posso fazer."

"E terceiro," Helena continuou, "eu quero que você seja honesto comigo. Sobre por que você realmente quer esse casamento. Porque eu sei que não é sobre o dinheiro."

O sorriso de Adrian desapareceu. "Isso não faz parte do acordo."

"Então talvez devesse fazer," Helena disse, surpreendendo-se com sua própria ousadia. "Você está me pedindo para confiar em você com minha vida, com meu futuro. A menor coisa que você pode fazer é me dizer a verdade."

Adrian se virou, olhando pela janela. Por um longo momento, ele não disse nada, e Helena pensou que ele fosse recusar. Mas então ele falou, sua voz baixa.

"Eu preciso de uma esposa por razões políticas," ele disse. "No meu mundo, um homem solteiro é visto como fraco. Vulnerável. Há pessoas que estão tentando tirar meu poder, e elas estão usando minha falta de família contra mim."

"Então isso é apenas por aparências?" Helena perguntou.

"Principalmente." Adrian se virou para encará-la. "Mas também há outra razão. Uma razão mais... pessoal."

"Qual?"

Seus olhos encontraram os dela, e havia algo neles que fez o coração de Helena acelerar. "Quando eu te vi pela primeira vez, algo em mim reconheceu algo em você. Eu não sei explicar. Mas eu sabia que você era diferente. Especial."

Helena não sabia o que dizer. Isso era a última coisa que ela esperava ouvir.

"Eu sei que isso soa estranho," Adrian continuou. "E eu não espero que você entenda. Mas é a verdade. Eu escolhi você, Helena. Não por causa da dívida do seu irmão. Por causa de você."

"Mas você nem me conhece," Helena sussurrou.

"Ainda não," Adrian disse, se aproximando. "Mas eu vou. E você vai me conhecer. E talvez, no final deste ano, nós dois vamos descobrir que isso foi mais do que apenas um acordo de negócios."

Ele estava perto agora, tão perto que Helena podia sentir o calor de seu corpo, cheirar seu perfume — algo amadeirado e masculino que fazia sua cabeça girar.

"Então," Adrian disse suavemente, "você ainda quer fazer isso?"

Helena olhou para o homem à sua frente — este estranho perigoso que estava prestes a se tornar seu marido — e tomou a decisão mais louca de sua vida.

"Sim," ela disse. "Eu quero."

Um sorriso lento se espalhou pelo rosto de Adrian, transformando-o completamente. "Então vamos nos casar, Helena Costa. E vamos ver onde este caminho nos leva."

Ele estendeu a mão, e depois de apenas um momento de hesitação, Helena a pegou.

Seu aperto era firme, quente, e enviou um choque de eletricidade através de seu braço. Ela se perguntou se ele sentiu também, porque seus olhos escureceram, e ele segurou sua mão um pouco mais apertado, um pouco mais longo do que necessário.

"Uma semana," ele disse. "Em uma semana, você será minha."

E enquanto Helena olhava em seus olhos escuros e intensos, ela percebeu que talvez já fosse.

Talvez ela tivesse sido dele desde o momento em que entrou em seu escritório.

Talvez alguns destinos fossem inevitáveis.

E talvez, apenas talvez, casar com Adrian Russo não fosse o fim de sua vida.

Talvez fosse o começo de algo completamente novo.

Algo perigoso.

Algo emocionante.

Algo que mudaria ambos para sempre.`
    },
    {
      chapter_number: 3,
      title: 'A Cerimônia',
      preview_text: 'O dia do casamento chega, e Helena se vê prestes a se tornar a esposa do homem mais perigoso de Chicago...',
      content: `Uma semana passou em um borrão de preparativos. Helena mal teve tempo para processar o que estava acontecendo antes de se encontrar em uma boutique cara, sendo vestida por estilistas que tratavam seu casamento como se fosse o evento do século.

O vestido que escolheram para ela era deslumbrante — seda branca pura que fluía como água, com um decote modesto mas elegante e uma cauda que se arrastava atrás dela como uma nuvem. Era simples, mas de uma forma que gritava luxo e sofisticação.

Helena mal se reconheceu no espelho.

"Você está linda, querida," disse a estilista, ajustando o véu delicado que cobria seu rosto. "O Senhor Russo é um homem de sorte."

Helena não respondeu. Sorte não era exatamente a palavra que ela usaria para descrever a situação.

O casamento seria realizado na propriedade de Adrian — uma mansão enorme nos arredores de Chicago que Helena havia visitado apenas uma vez, brevemente, para "conhecer a casa". A propriedade era impressionante, com jardins expansivos, uma fonte central, e a própria casa que parecia mais um palácio do que uma residência.

Agora, enquanto o carro que Adrian havia enviado a levava pela longa entrada, Helena sentiu seu estômago se apertar com nervos. Isto era real. Isto estava realmente acontecendo.

Maria, a governanta que Helena havia conhecido brevemente durante sua visita, a cumprimentou na porta. A mulher mais velha tinha um sorriso caloroso que de alguma forma fez Helena se sentir um pouco menos sozinha.

"Bem-vinda, senhorita Costa," Maria disse. "Ou devo dizer, futura Senhora Russo?"

Helena tentou sorrir, mas tinha certeza de que parecia mais uma careta.

"Venha," Maria disse gentilmente, pegando sua mão. "Vamos prepará-la."

A cerimônia seria realizada no jardim, sob um gazebo decorado com milhares de rosas brancas. Havia apenas cerca de cinquenta convidados — todos associados de Adrian, ela presumiu, já que ela não conhecia nenhum deles. Marco não estava lá; Adrian havia achado melhor que ele permanecesse escondido até que tudo estivesse finalizado.

Helena estava sozinha nisso.

Ela esperou em um quarto no segundo andar, olhando pela janela para os convidados se reunindo abaixo. Todos usavam roupas caras, todos tinham aquela aura de poder e perigo que ela estava começando a associar com o mundo de Adrian.

Uma batida na porta a fez se virar.

"Entre," ela chamou, esperando que fosse Maria.

Mas era Adrian.

Ele parou na porta, e por um momento, eles apenas se olharam. Ele usava um smoking impecável que se ajustava ao seu corpo como uma segunda pele. Seu cabelo estava perfeitamente penteado, sua barba aparada, e ele parecia... devastadoramente bonito.

"Você não deveria estar aqui," Helena disse, encontrando sua voz. "Não é má sorte o noivo ver a noiva antes da cerimônia?"

"Eu não acredito em sorte," Adrian disse, entrando no quarto e fechando a porta atrás dele. "Eu acredito em fazer meu próprio destino."

Ele se aproximou, seus olhos percorrendo-a da cabeça aos pés. "Você está... perfeita," ele disse suavemente.

Helena sentiu seu rosto esquentar. "Obrigada."

Adrian pegou algo do bolso — uma pequena caixa de veludo azul. "Eu trouxe isso para você."

Ele abriu a caixa, revelando um colar de diamantes que tirou o fôlego de Helena. A peça central era um diamante enorme, cercado por pedras menores que brilhavam como estrelas.

"Adrian, eu não posso aceitar isso," Helena disse, embora seus olhos não conseguissem se afastar do colar. "É muito."

"Você é minha noiva," Adrian disse simplesmente. "E logo será minha esposa. Você vai usar as joias da família Russo." Ele tirou o colar da caixa. "Vire-se."

Helena obedeceu, e sentiu seus dedos roçarem sua nuca enquanto ele prendia o colar. O toque enviou arrepios por sua espinha.

"Pronto," Adrian murmurou, suas mãos permanecendo em seus ombros por um momento a mais. "Perfeito."

Helena se virou para encará-lo, e de repente eles estavam muito perto, apenas centímetros separando-os. Ela podia ver as manchas douradas em seus olhos escuros, a linha forte de sua mandíbula, a forma de seus lábios.

"Helena," Adrian disse, sua voz rouca, "eu quero que você saiba que eu vou cuidar de você. Não importa o que aconteça, você estará segura comigo."

"Por que isso é tão importante para você?" Helena perguntou. "Por que você se importa tanto?"

Adrian hesitou, e por um momento, ela pensou que ele fosse se afastar sem responder. Mas então ele levantou a mão e tocou seu rosto gentilmente, seus dedos traçando a linha de sua bochecha.

"Porque você é minha agora," ele disse simplesmente. "E eu protejo o que é meu."

Antes que Helena pudesse responder, houve outra batida na porta. Maria apareceu, parecendo apologética.

"Senhor Russo, está na hora. Os convidados estão esperando."

Adrian assentiu, mas seus olhos permaneceram em Helena. "Você está pronta?"

Não, Helena queria dizer. Ela não estava pronta. Ela nunca estaria pronta para isso.

Mas em vez disso, ela assentiu. "Sim."

"Então vamos fazer isso." Adrian ofereceu seu braço. "Vamos nos casar, Helena."

---

A cerimônia foi curta e surpreendentemente tradicional. Um padre que claramente conhecia Adrian há anos oficiou, e Helena se viu repetindo votos que ela nunca imaginou dizer.

"Eu, Helena Costa, te aceito, Adrian Russo, como meu legítimo esposo..."

As palavras pareciam irreais, como se ela estivesse em um sonho — ou talvez um pesadelo.

Mas quando Adrian deslizou a aliança em seu dedo — uma banda de platina com diamantes que provavelmente custava mais do que seu carro — a realidade afundou.

Isto estava acontecendo. Ela estava realmente se casando com ele.

"Eu, Adrian Russo, te aceito, Helena Costa, como minha legítima esposa..."

A voz de Adrian era firme, seus olhos fixos nos dela com uma intensidade que fez seu coração acelerar.

"Para amar e honrar, na riqueza e na pobreza, na saúde e na doença, até que a morte nos separe."

Até que a morte nos separe. As palavras ecoaram na mente de Helena. Eles tinham um acordo de um ano, mas os votos que estavam fazendo eram para a vida toda.

"Você pode beijar a noiva," o padre anunciou.

Helena sentiu seu corpo ficar tenso. Isto era. O momento que ela estava temendo e, estranhamente, antecipando.

Adrian se aproximou, suas mãos indo para sua cintura. Ele a puxou contra ele, e Helena teve que inclinar a cabeça para trás para olhar em seus olhos.

"Respire," ele murmurou, tão baixo que só ela podia ouvir.

E então ele a beijou.

O beijo foi suave no início, quase casto. Mas então Adrian aprofundou, sua mão indo para a nuca dela, segurando-a no lugar enquanto seus lábios se moviam contra os dela com uma habilidade que fez seus joelhos ficarem fracos.

Helena se viu respondendo, suas mãos indo para seu peito, sentindo o batimento forte de seu coração sob suas palmas. O mundo ao redor deles desapareceu — os convidados, o padre, tudo. Havia apenas Adrian, seu toque, seu beijo, o calor de seu corpo contra o dela.

Quando eles finalmente se separaram, ambos estavam sem fôlego. Adrian descansou sua testa contra a dela, seus olhos fechados.

"Minha," ele sussurrou. "Você é minha agora."

E Deus a ajudasse, mas naquele momento, Helena não queria ser de mais ninguém.

---

A recepção foi realizada no salão de baile da mansão — um espaço enorme com lustres de cristal, pisos de mármore, e mesas decoradas com mais rosas brancas do que Helena já tinha visto em sua vida.

Ela e Adrian sentaram-se à mesa principal, e Helena sorriu e acenou enquanto convidado após convidado vinha cumprimentá-los. Todos eram educados, respeitosos, mas havia uma corrente subjacente de medo em suas interações com Adrian.

Eles o temiam, ela percebeu. Todos eles.

"Você está bem?" Adrian perguntou baixinho, sua mão encontrando a dela sob a mesa.

"Estou sobrecarregada," Helena admitiu.

"Eu sei. Mas você está se saindo bem." Ele apertou sua mão. "Apenas mais algumas horas, e então seremos apenas nós dois."

A ideia de estar sozinha com Adrian — como sua esposa — fez o estômago de Helena dar um nó. Mas ela não tinha tempo para pensar sobre isso, porque a música começou, e Adrian se levantou, oferecendo sua mão.

"Nossa dança," ele disse.

Helena deixou-o levá-la para a pista de dança, consciente de todos os olhos sobre eles. A música era lenta e romântica, e Adrian a puxou para seus braços, uma mão em sua cintura, a outra segurando a dela.

"Eu não sou uma boa dançarina," Helena sussurrou.

"Apenas me siga," Adrian disse, e começou a movê-la pela pista com uma graça que a surpreendeu.

Eles dançaram em silêncio por alguns momentos, e Helena se viu relaxando em seus braços. Havia algo reconfortante em sua força, na maneira como ele a segurava como se ela fosse preciosa.

"Você está pensando muito alto," Adrian murmurou, seus lábios perto de seu ouvido.

"Desculpe. Eu só... ainda estou processando tudo isso."

"Eu entendo." Ele a girou, depois a puxou de volta. "Mas você não precisa processar sozinha. Nós estamos juntos nisso agora."

"Estamos?" Helena olhou para cima, encontrando seus olhos. "Porque parece que você tem todos os cartões, e eu sou apenas... aqui."

"Você não é 'apenas aqui'," Adrian disse, sua voz ficando mais intensa. "Você é minha esposa. Minha parceira. E eu vou tratá-la como tal."

"Mesmo que este seja apenas um acordo de negócios?"

"Mesmo assim." Ele fez uma pausa. "Mas Helena... eu não acho que isso vai ser apenas negócios por muito tempo."

Antes que ela pudesse perguntar o que ele queria dizer, a música terminou, e eles foram cercados por convidados querendo cumprimentá-los novamente.

O resto da noite passou em um borrão. Houve brindes, comida, mais dança. Helena sorriu até que seu rosto doeu, fez conversa fiada com pessoas cujos nomes ela esqueceu imediatamente, e tentou não pensar sobre o que viria depois.

Mas finalmente, inevitavelmente, a recepção terminou. Os convidados partiram, as luzes foram apagadas, e Helena se viu sozinha com Adrian no grande hall de entrada.

"Venha," ele disse, oferecendo sua mão. "Vou mostrar nosso quarto."

Nosso quarto. As palavras enviaram um arrepio por sua espinha.

Helena seguiu-o pelas escadas até o terceiro andar, por um corredor forrado com pinturas, até uma porta dupla no final.

Adrian abriu a porta, revelando o quarto mais luxuoso que Helena já tinha visto. Era enorme, com uma cama king-size que parecia poder acomodar cinco pessoas, janelas do chão ao teto com vista para os jardins, e uma lareira de mármore que já estava acesa, lançando uma luz quente e dourada sobre tudo.

"Isto é..." Helena começou, sem palavras.

"Seu," Adrian terminou. "Nosso," ele corrigiu. "Mas há um closet e um banheiro separados para você. E se você quiser seu próprio quarto, posso arranjar isso."

Helena olhou para ele, surpresa. "Você faria isso?"

"Eu disse que não vou forçá-la a nada," Adrian disse. "E eu quis dizer isso. Este casamento pode ser real no papel, mas o que acontece entre nós... isso é sua escolha."

Helena não sabia o que dizer. Ela havia esperado... bem, ela não sabia o que havia esperado. Mas não era isso.

"Obrigada," ela disse finalmente.

Adrian assentiu, então começou a tirar sua gravata. "É tarde. Você deve estar exausta."

Ele estava certo. Helena estava exausta — emocional e fisicamente. Tudo o que ela queria era tirar este vestido lindo mas desconfortável e dormir por doze horas.

"Eu vou... eu vou me trocar," ela disse, dirigindo-se ao closet.

Dentro, ela encontrou que todas as suas roupas já haviam sido transferidas e organizadas perfeitamente. Havia também roupas novas — muito mais do que ela possuía antes — todas em seu tamanho.

Ela escolheu um pijama simples de seda e se trocou rapidamente, lavando o rosto e escovando os dentes no banheiro luxuoso.

Quando ela voltou ao quarto, Adrian já estava na cama, usando apenas calças de pijama, seu peito nu exposto. Helena tentou não olhar, mas era impossível não notar os músculos definidos, as tatuagens que cobriam seu ombro e peito — desenhos intrincados que pareciam contar uma história.

"Você pode dormir do lado que quiser," Adrian disse, observando-a.

Helena escolheu o lado esquerdo, deslizando sob os lençóis de seda. A cama era incrivelmente confortável, mas ela estava muito consciente de Adrian ao seu lado, do calor de seu corpo, do som de sua respiração.

"Helena," Adrian disse na escuridão.

"Sim?"

"Obrigado. Por fazer isso. Por me dar uma chance."

Helena se virou para olhá-lo. Na luz fraca da lareira, ela podia ver seu perfil, a linha forte de sua mandíbula, a curva de seus lábios.

"Eu não tive muita escolha," ela apontou.

"Você sempre tem uma escolha," Adrian disse. "E você escolheu ficar. Isso significa algo para mim."

Eles ficaram em silêncio por um longo momento. Então Adrian se virou, e de repente eles estavam cara a cara, apenas centímetros separando-os.

"Boa noite, esposa," ele murmurou.

"Boa noite, marido," Helena sussurrou de volta.

E enquanto ela fechava os olhos, sentindo o calor de Adrian ao seu lado, ela percebeu que talvez, apenas talvez, este casamento não fosse o desastre que ela havia imaginado.

Talvez houvesse algo real aqui. Algo que valia a pena explorar.

Algo que poderia mudar ambas as suas vidas.

Mas apenas o tempo diria.

E eles tinham um ano inteiro para descobrir.`
    }
  ]
}

// ============================================
// FUNÇÃO PARA INSERIR NO SUPABASE
// ============================================

async function insertBook(bookData: BookData) {
  const supabase = createClient()
  
  try {
    console.log(`\n📚 Inserindo livro: ${bookData.title}`)
    
    // 1. Inserir o livro
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
      console.error('❌ Erro ao inserir livro:', bookError)
      return
    }

    console.log(`✅ Livro inserido com ID: ${book.id}`)

    // 2. Buscar categorias
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, slug')
      .in('slug', bookData.category_slugs)

    if (catError) {
      console.error('❌ Erro ao buscar categorias:', catError)
      return
    }

    // 3. Associar categorias ao livro
    if (categories && categories.length > 0) {
      const bookCategories = categories.map(cat => ({
        book_id: book.id,
        category_id: cat.id
      }))

      const { error: bcError } = await supabase
        .from('book_categories')
        .insert(bookCategories)

      if (bcError) {
        console.error('❌ Erro ao associar categorias:', bcError)
      } else {
        console.log(`✅ ${categories.length} categorias associadas`)
      }
    }

    // 4. Inserir capítulos
    console.log(`📖 Inserindo ${bookData.chapters.length} capítulos...`)
    
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
        console.error(`❌ Erro ao inserir capítulo ${chapter.chapter_number}:`, chapterError)
      } else {
        console.log(`✅ Capítulo ${chapter.chapter_number} inserido`)
      }
    }

    console.log(`\n🎉 Livro "${bookData.title}" inserido com sucesso!\n`)
    
  } catch (error) {
    console.error('❌ Erro geral:', error)
  }
}

// ============================================
// EXECUTAR INSERÇÃO
// ============================================

export async function seedMafiaBooks() {
  console.log('🔥 INICIANDO SEED DE LIVROS DE MÁFIA 🔥\n')
  
  await insertBook(livro1)
  await insertBook(livro2)
  
  console.log('✅ SEED COMPLETO!\n')
}

// Executar se chamado diretamente
if (require.main === module) {
  seedMafiaBooks()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
