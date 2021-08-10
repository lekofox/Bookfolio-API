'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [
      {
        id:1,
        title: 'Coraline',
        author: 'Neil Gaiman',
        author_id: 1,
        synopsis: "Certas portas não devem ser abertas. E Coraline descobre isso pouco tempo depois \
        de chegar com os pais à sua nova casa, um apartamento em um casarão antigo \
        ocupado por vizinhos excêntricos e envolto por uma névoa insistente, um mundo de \
        estranhezas e magia, o tipo de universo que apenas Neil Gaiman pode criar.\
        Ao abrir uma porta misteriosa na sala de casa, a menina se depara com um lugar\
        macabro e fascinante.\
        Ali, naquele outro mundo, seus outros pais são criaturas muito pálidas, com botões\
        negros no lugar dos olhos, sempre dispostos a lhe dar atenção, fazer suas comidas\
        preferidas e mostrar os brinquedos mais divertidos. Coraline enfim se sente... em\
        casa. Mas essa sensação logo desaparece, quando ela descobre que o lugar guarda\
        mistérios e perigos, e a menina se dá conta de que voltar para sua verdadeira casa\
        vai ser muito mais difícil ― e assustador ― do que imaginava.",
        image: 'https://i.ibb.co/7n85NfJ/coraline.jpg',
        buy_link: "https://www.amazon.com.br/Coraline-Acompanha-marcador-p%C3%A1ginas-especial/dp/8551006754/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3N787DN5YU7NI&dchild=1&keywords=livros+de+fantasia&qid=1627668685&s=books&sprefix=livros+de+fantas%2Cstripbooks%2C313&sr=1-1",
        language: 'Português',
        publish_date: new Date(),
        page_number: 320,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:2,
        title: 'O jogo interior do Tênis',
        author: 'W. Timothy Gallwey',
        author_id: 2,
        synopsis: "A filosofia aqui apresentada transcende o mundo esportivo e se \
        estende para os negócios, para melhoria de performance, para um novo estilo de vida.\
        Neste livro você verá como é possível:\
        ● concentrar a mente para dominar o nervosismo, a insegurança e as distrações;\
        ● descobrir o estado de “concentração relaxada”, que proporciona o seu melhor\
        desempenho;\
        ● aprimorar sua técnica por meio da prática inteligente, e utilizar os conhecimentos\
        adquiridos durante um jogo e assim, vencer dentro e fora das quadras.",
        image: 'https://i.ibb.co/4YBsnH3/download-2.jpg',
        buy_link: 'https://www.amazon.com.br/Interior-T%C3%AAnis-Cl%C3%A1ssico-Excel%C3%AA\
        ncia-Desempenho/dp/8569371012/ref=sr_1_7?dchild=1&qid=1627671653&refineme\
        nts=p_72%3A17833786011&rnid=5560472011&s=books&sr=1-7\
        ',
        language: 'Português',
        publish_date: new Date(),
        page_number: 160,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:3,
        title: 'A garota que bebeu a lua',
        author: 'Neil Gaiman',
        author_id: 1,
        synopsis: 'Uma fábula sobre aceitação, amor, amadurecimento e o poder da memória. Da autora\
        de O filho da feiticeira, considerado o Livro do Ano pelo Washington Post Todo ano o\
        povo do Protetorado deixa um bebê como oferenda para a Bruxa que vive na floresta, na\
        esperança de que o sacrifício a impeça de aterrorizar sua pequena cidade protegida\
        pelos muros e pela Torre das Irmãs da Guarda. Mas, Xan, a Bruxa na floresta, ao\
        contrário do que eles acreditam, é bondosa. Ela vive em paz com um Monstro do\
        Pântano muito inteligente e um Dragão Perfeitamente Minúsculo.Todo ano ela resgata o\
        bebê deixado pelos Anciãos e o leva em segurança para uma família adotiva em uma\
        das Cidades Livres do outro lado da floresta. Durante a longa viagem, quando a comida\
        acaba, Xan alimenta os bebês com luz estelar. Em uma dessas ocasiões ela\
        acidentalmente oferece a um deles a luz do luar, dotando a menininha de uma magia\
        extraordinária.A bruxa então decide criar a menina “embruxada”, a quem chama de\
        Luna. Conforme o aniversário de treze anos da menina se aproxima, sua magia começa\
        a aflorar – e pode colocar em perigo a própria Luna e todos à sua volta.“A garota que\
        bebeu a lua é empolgante e denso como os clássicos Peter Pan e O Mágico de Oz.” –\
        The New York Times Book Review',
        image: 'https://i.ibb.co/QJ3bMnN/515p-NEQAJRL.jpg',
        buy_link: 'https://www.amazon.com.br/Garota-que-Bebeu-Lua/dp/8501110078/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3N787DN5YU7NI&dchild=1&keywords=livros+de+fantasia&qid=1627669835&s=books&sprefix=livros+de+fantas%2Cstripbooks%2C313&sr=1-7',
        language: 'Português',
        publish_date: new Date(),
        page_number: 308,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:4,
        title: 'Caos Criativo',
        author: 'Tim Harford',
        author_id: 3,
        synopsis: ': Apoiado às mais recentes pesquisas em neurociência, psicologia e\
        ciência social – com exemplos cativantes de pessoas bem-sucedidas que fizeram coisas\
        extraordinárias – Tim Harford nos prova que as qualidades que nós valorizamos são, na\
        verdade, produzidas pela desordem, pela confusão e pelo desarranjo das coisas.',
        image: 'https://i.ibb.co/NtzWBVT/caos-criativo.png',
        buy_link: 'https://www.amazon.com.br/Caos-criativo-resiliente-mundo-arruma%C3%A7%C3%A\
        3o/dp/8581745083?ref_=Oct_d_omwf_d_7841722011&pd_rd_w=D32tD&pf_rd_p=ff1\
        89d57-1a2d-4ee9-963a-61cd7aa22374&pf_rd_r=BEAZ4K0GVMS3A0NQXEMQ&pd_\
        rd_r=fc45e2d2-fb60-4d2f-8c45-f8efefa1e695&pd_rd_wg=KyzZ0&pd_rd_i=8581745083\
        ',
        language: 'Português',
        publish_date: new Date(),
        page_number: 352,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:5,
        title: 'Sontag: vida e obra',
        author: 'Benjamin Moser',
        author_id: 4,
        synopsis: 'Susan Sontag é uma escritora que representa como ninguém o século XX americano.\
        Envolta em mitos e incompreendida, louvada e detestada, ela foi uma menina dos subúrbios\
        que se tornou símbolo do cosmopolitismo. Sontag deixou um legado intelectual que\
        abrange uma imensidade de temas, como arte e política, feminismo e homossexualidade,\
        medicina e drogas, radicalismos e fascismo, e que é uma chave indispensável para entender\
        a cultura da modernidade.',
        image: 'https://i.ibb.co/T0W98XB/Sontag.jpg',
        buy_link: 'https://www.amazon.com.br/Sontag-Vida-obra-Benjamin-Moser/dp/8535932836/ref=asc_df_8535932836/?tag=googleshopp00-20&linkCode=df0&hvadid=379800300389&hvpos=&hvnetw=g&hvrand=11800833083220109012&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001773&hvtargid=pla-873882336634&psc=1',
        language: 'Português',
        publish_date: new Date(),
        page_number: 704,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:6,
        title: 'Tem que Vigorar!',
        author: 'Gil do Vigor',
        author_id: 5,
        synopsis: 'Em Tem que vigorar!, Gil conta seus momentos preferidos no BBB, da\
        infância pobre em Pernambuco e revela as dificuldades que passou na vida, como quando\
        teve que morar na rua. Fala também dos momentos de violência do pai contra a mãe, sua\
        relação com a fé e a igreja, de como a educação o salvou e a descoberta da sexualidade e\
        seu processo de autoconhecimento e aceitação.',
        image: 'https://i.ibb.co/R30K6x3/tem-que-vigorar.jpg',
        buy_link: 'https://www.amazon.com.br/Tem-que-vigorar-aceitei-realizei/dp/6588132042?ref_=Oct_d_oup_d_7841759011&pd_rd_w=Y3iKV&pf_rd_p=4363facb-f26e-4204-b790-09dd2dba71a5&pf_rd_r=DXCD3JG3Z5AZA495ZHP4&pd_rd_r=b88020ce-f06d-48f0-9611-05d26257bbb0&pd_rd_wg=hjagh&pd_rd_i=6588132042',
        language: 'Português',
        publish_date: new Date(),
        page_number: 128,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:7,
        title: 'A História de  Nós Dois',
        author: 'Dani Atkins',
        author_id: 6,
        synopsis: 'Emma sofre um acidente e é salva por um estranho minutos antes\
        que o carro em que ela viajava explodisse. Abalada, ela decide adiar o casamento. E\
        nesse meio-tempo descobre segredos que a fazem questionar as pessoas nas quais\
        sempre confiara – a ponto de duvidar se deve se casar afinal.',
        image: 'https://i.ibb.co/pxLqwnP/nos-dois.jpg',
        buy_link: 'https://www.amazon.com.br/hist%C3%B3ria-n%C3%B3s-dois-Dani-Atkins/dp/8580415403',
        language: 'Português',
        publish_date: new Date(),
        page_number: 352,
        rating: 4,  
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:8,
        title: 'A Rainha Vermelha',
        author: 'Victoria Aveyard',
        author_id: 7,
        synopsis: 'O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua\
        família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos\
        poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua\
        família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora.\
        Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real,\
        onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas\
        como isso seria possível, se seu sangue é vermelho? Em meio às intrigas dos nobres\
        prateados, as ações da garota vão desencadear uma dança violenta e fatal, que\
        colocará príncipe contra príncipe - e Mare contra seu próprio coração.',
        image: 'https://i.ibb.co/dcM7s2p/rainha-vermelha.jpg',
        buy_link: 'https://www.amazon.com.br/rainha-vermelha-Victoria-Aveyard/dp/8565765695/ref=sr_1_21_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3N787DN5YU7NI&dchild=1&keywords=livros+de+fantasia&qid=1627669835&s=books&sprefix=livros+de+fantas%2Cstripbooks%2C313&sr=1-21-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSEQ3VDQxV0RBVjlBJmVuY3J5cHRlZElkPUEwODcwNjYzMVBCSDZTOEVYMzROUCZlbmNyeXB0ZWRBZElkPUEwNjQ2NzA3NVRGNUswUThTTU9TJndpZGdldE5hbWU9c3BfYnRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
        language: 'Português',
        publish_date: new Date(),
        page_number: 424,
        rating: 4,  
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:9,
        title: 'Labirinto do Fauno',
        author: 'Guilherme del Toro e Cornelia Funke',
        author_id: 8,
        synopsis: 'No ano de 1944, Ofélia e a mãe cruzam uma estrada de terra que corta uma floresta longínqua\
        ao norte da Espanha, um lugar que guarda histórias já esquecidas pelos homens. O novo lar é\
        um moinho de vento tomado pela escuridão e pela crueldade do capitão Vidal e seus soldados,\
        dispostos a tudo para exterminar os rebeldes que se escondem na mata.\
        Mas o que eles não sabem é que a floresta que tanto odeiam também abriga criaturas mágicas\
        e poderosas, habitantes de um reino subterrâneo repleto de encantos e horrores, súditos em\
        busca de sua princesa há muito perdida. Uma princesa que, segundo os sussurros das árvores,\
        finalmente retornou ao lar.\
        No livro, a narrativa de Ofélia é intercalada com ilustrações e contos de fadas inéditos, baseados\
        em elementos-chave de O Labirinto do Fauno. A obra é uma impactante ode ao poder das\
        histórias, seja em imagens ou palavras, e a sua capacidade de transformar a realidade a nossa\
        volta.\
        ',
        image: 'https://i.ibb.co/27jr1Hb/download-1.jpg',
        buy_link: 'https://www.amazon.com.br/Labirinto-Fauno-Guillermo-Del-Toro/dp/8551005197/ref=sr_1_17?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3N787DN5YU7NI&dchild=1&keywords=livros+de+fantasia&qid=1627669835&s=books&sprefix=livros+de+fantas%2Cstripbooks%2C313&sr=1-17',
        language: 'Português',
        publish_date: new Date(),
        page_number: 320,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:10,
        title: 'Clarice',
        author: 'Benjamin Moser',
        author_id: 4,
        synopsis: 'Este livro, lançado originalmente em 2009, deu aos brasileiros uma nova\
        imagem de Clarice Lispector e consagrou sua obra no exterior. Se hoje Clarice é uma figura\
        mítica das letras brasileiras - bela, misteriosa e brilhante -, sua vida foi recheada de\
        percalços que a tornam mais complexa do que mostra a imagem oficial. Ao empreender\
        uma síntese inédita entre vida e obra de uma autora clássica, Benjamin Moser deu uma\
        contribuição de extrema importância para a cultura brasileira.',
        image: 'https://i.ibb.co/c1xsJKF/Clarice.jpg',
        buy_link: 'https://www.amazon.com.br/Clarice-Benjamin-Moser/dp/8535928502/ref=sr_1_2?dch\
        ild=1&qid=1627661473&refinements=p_27%3ABenjamin+Moser&s=books&sr=1-2&t\
        ext=Benjamin+Moser',
        language: 'Português',
        publish_date: new Date(),
        page_number: 584,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:11,
        title: 'Dois garoto se Beijando',
        author: 'David Levithan',
        author_id: 9,
        synopsis: 'Baseado em fatos reais e em parte narrado por uma geração que morreu em\
        decorrência da Aids, o livro segue os passos de Harry e Craig, dois jovens de 17\
        anos que estão prestes a participar de um desafio: 32 horas se beijando para figurar\
        no Livro dos Recordes. Enquanto tentam cumprir sua meta — e quebrar alguns\
        tabus —, os dois chamam a atenção de outros jovens que também precisam lidar\
        com questões universais como amor, identidade e a sensação de pertencer.\
        ',
        image: 'https://i.ibb.co/JH8tJtJ/dois-garotos.jpg',
        buy_link: 'https://www.amazon.com.br/Dois-garotos-beijando-David-Levithan/dp/8501102091/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Dois+garotos+se+beijando&qid=1627658308&s=books&sr=1-1',
        language: 'Português',
        publish_date: new Date(),
        page_number: 224,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      },
      {
        id:12,
        title: 'Bowie',
        author: 'Wendy Leigh',
        author_id: 10,
        synopsis: ':A biografia que revela facetas desconhecidas do ídolo pop David Bowie\
        Leigh traça toda a trajetória do músico, desde a infância em sua família problemática,\
        passando pela juventude desvairada em busca do sucesso, até atingir o estrelato e se tornar\
        uma entidade única e inigualável da cultura popular contemporânea. Ao analisar a\
        pluralidade de personagens que o cantor incorporou, examinando sua recusa a se submeter\
        a qualquer padrão sexual, a autora também aponta para uma falta de ortodoxia sem\
        precedentes, chave para a desconstrução de tabus e estopim de uma revolução dos\
        costumes de gênero.',
        image: 'https://i.ibb.co/8zVqKWr/david-bowie.jpg',
        buy_link: 'https://www3.livrariacultura.com.br/bowie-46284328/p?utmi_cp=8787&adtype=pla&utmi_cp=8102&gclid=CjwKCAjwxo6IBhBKEiwAXSYBsw-FE1He-78Myptnl2kDCfaq6QPilWFGqEztdJXvfmmN04vTYW-wvxoCZwwQAvD_BwE',
        language: 'Português',
        publish_date: new Date(),
        page_number: 321,
        rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      
      },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};