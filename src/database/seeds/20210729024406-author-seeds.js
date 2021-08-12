'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('authors',[ 
    {
      id:1,
      name: 'Neil Gaiman',
      description: 'Neil Gaiman é considerado um dos maiores escritores vivos. Tem mais de vinte livros\
      publicados e já foi agraciado com inúmeros prêmios literários, incluindo o Hugo, o Bram\
      Stoker e a Newbery Medal. Começou a carreira como jornalista, mas logo ingressou no\
      mundo dos quadrinhos, com a aclamada série Sandman, e em seguida conquistou a\
      ficção adulta e a literatura infantojuvenil, publicando obras memoráveis. Algumas delas\
      foram adaptadas para o cinema e para a tevê. Nasceu em Hampshire, Inglaterra, e hoje\
      mora nos Estados Unidos.\
      Chris Riddell é um ilustrador e cartunista aclamado. Seu traço único lhe rendeu inúmeros\
      prêmios, como o Nestlé Gold Award e por duas vezes a Kate Greenway Medal. Gaiman\
      e Riddell são parceiros de longa data, tendo trabalhado juntos em muitas outras obras.\
      Riddell mora com a família em Brighton, na Inglaterra.',
      created_at: new Date(),
      updated_at: new Date(),
      
    
    },
    {
      id:2,
      name: 'W. Timothy Gallwey',
      description: 'Tim Gallwey o precursor do coaching através do Inner Game, o Jogo Interior\
      W. Timothy Gallwey, mais conhecido como Tim Gallwey, nascido em 1938 em San Francisco, Califórnia,\
      é um dos precursores da metodologia de Coaching. Gallwey era um tenista profissional, desde a juventude, \
      e em 1960 tornou-se capitão do time de tênis da Universidade de Harvard. O final da década marcou uma virada súbita em sua vida e em sua carreira. \
      Tim passou a atuar também como treinador de tênis, e logo se deu conta de que os treinamentos convencionais não davam conta de questões motivacionais e \
      de comportamento que comprometiam a performance dos tenistas.',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:3,
      name: 'Tim Harford',
      description: 'Tim Harford é membro do quadro editorial do Financial Times. \
      Tem uma coluna de opinião chamada «O Economista Disfarçado», onde expõe os princípios \
      económicos subjacentes às escolhas que fazemos e à vida que levamos. É o único \
      economista no mundo a ter uma página de aconselhamento, chamada Querido Economista. \
      Além de ter vários programas na televisão e rádio inglesas e de colaborar frequentemente com a \
      Esquire, a Forbes, a New York Magazine, o Washington Post e o New York Times, Tim é o autor dos \
      bestsellers O economista disfarçado, O economista disfarçado contra-ataca, A lógica oculta da vida, \
      Adapte-se e Messy. Em 2017, publica o seu sexto livro, 50 coisas que mudaram o mundo, um relato \
      surpreendente e memorável das cinquenta invenções que, pelo impacto que tiveram na economia, mudaram \
      o curso da História. Em 2020, é lançado o segundo volume desta série, The Next Fifhty Things that made \
      the modern economy. Em 2006, foi galardoado com o prémio Bastiat de jornalismo económico; em 2014, foi \
      reconhecido como «Comentador económico do ano» e, em 2015, recebeu o prémio de excelência jornalística da \
      Royal Statistical Society e da Society of Business Economists. No final de 2020, é publicado o muito aguardado O que os números escondem – \
      10 regras para aprender a decifrar informação e compreender melhor o mundo, um livro indispensável para aprender a interpretar os números com que somos bombardeados diariamente.',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:4,
      name: 'Benjamin Moser',
      description: ' Nasceu em 1954, no Novo México, Estados Unidos. Foi chefe\
      do departamento de escrita criativa da Universidade do Texas em El Paso e hoje\
      se dedica exclusivamente a escrever prosa e poesia para jovens e adultos. Seu\
      primeiro livro de poemas, Calendar of Dust, ganhou o American Book Award em\
      1992. Em 2013, Aristóteles e Dante descobrem os segredos do Universo foi\
      escolhido livro de honra do Michael L. Printz Award e recebeu o Stonewall Book\
      Award, entre vários outros prêmios.\
      ',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:5,
      name: 'Gil do Vigor',
      description: ' Gilberto Nogueira realizou seu maior sonho ao entrar para o Big Brother\
      Brasil 21 e, quando saiu do programa, sua vida estava transformada. A começar pelo nome:\
      pelo carisma, alegria e intensidade, virou Gil do Vigor, um dos participantes mais\
      carismáticos que já passou pelo reality show. Com seus bordões, Gil conquistou milhões de\
      brasileiros, se tornou uma das figuras mais queridas do país e o homem com mais\
      seguidores nas redes sociais de toda a história do programa',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:6,
      name: 'Dani Atkins',
      description: ' Dani Atkins nasceu e foi criada em Cockfosters, Londres.\
      Somente quando seus dois filhos estavam crescidos e saíram de casa, ela\
      decidiu se dedicar ao sonho de ser escritora. Uma curva no tempo é seu\
      primeiro romance.\
      ',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:7,
      name: 'Victoria Aveyard',
      description: 'Aveyard nasceu em East Longmeadow, Massachusetts, uma pequena cidade nos\
      Estados Unidos Seus pais são professores de escolas públicas, hoje ela mora em Los\
      Angeles, Califórnia Ela desenvolveu um interesse por escrever bem cedo, "escrevo\
      desde que fisicamente posso escrever.” Frequentou a Universidade do Sul da Califórnia,\
      em Los Angeles. Formou-se como roteirista e tenta combinar seu amor por história,\
      explosões e heroínas fortes na sua escrita. Seus hobbies incluem a tarefa impossível de\
      prever o que vai acontecer em As Crônicas de Gelo e Fogo, viajar e assistir a Netflix.',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:8,
      name: 'Guillherme del Toro e Cornelia Funke',
      description: 'Guillermo del Toro é um dos escritores e cineastas de maior destaque na indústria cultural\
      americana. É roteirista e diretor do sombrio e fascinante O Labirinto do Fauno, de Hellboy,\
      Círculo de Fogo e A Forma da Água, filme ganhador de quatro Oscar, incluindo Melhor Filme e\
      Melhor Diretor. Del Toro é também coautor da série de livros Trilogia da escuridão. Pela\
      Intrínseca, publicou A forma da água, obra que expande o universo do filme, e Caçadores de Trolls, adaptado para as telas pela Netflix',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:9,
      name: 'David Levithan',
      description: 'David Levithan é autor de vários livros aclamados pela\
      crítica, inclusive Will & Will – Um nome, um destino, escrito em parceria com\
      John Green, o\
      primeiro livro jovem adulto gay a entrar na lista do New York Times. Nesta\
      nova obra, ele leva a criatividade a um novo patamar. Com uma trama\
      aparentemente simples, consegue abordar os mais relevantes assuntos\
      cotidianos, nos fazendo questionar a real importância de grande parte dos\
      conceitos e ideais estabelecidos pela nossa sociedade.',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
    {
      id:10,
      name: 'Wendy Leigh',
      description: 'resumo da autora: Wendy Leigh, jornalista e escritora, ficou conhecida por ter escrito\
      biografias de artistas como David Bowie e Arnold Schwarzenegger.\
      A biógrafa é autora de mais de 16 livros e retratou a vida de personalidades como Bowie\
      (publicado no Brasil pela Editora BestSeller), Schwarzenegger, John F. Kennedy, e Patrick\
      Swayze. O ator de O Exterminador do Futuro, inclusive, tentou processar a jornalista por\
      causa da biografia não-autorizada que ela escreveu sobre ele. No livro, ela afirmava que ele\
      possuía inclinações nazistas durante a juventude.\
      Wendy também ficou conhecida por ter um romance com Robert Maxwell, dono do Mirror\
      Group, um dos maiores grupos de comunicação do mundo.',
      created_at: new Date(),
      updated_at: new Date(),
      
    },
]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('authors', null,{
   
  })
};
