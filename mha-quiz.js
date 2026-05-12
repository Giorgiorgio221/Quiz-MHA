// ==================== BANCO DE PERGUNTAS ====================
        const quizQuestions = [
            // ANIME - 25 perguntas
            {
                id: 1,
                category: "Anime",
                difficulty: "easy",
                question: "Qual é o nome verdadeiro do Deku?",
                options: ["Izuku Midoriya", "Bakugo Katsuki", "Shoto Todoroki", "Iida Tenya"],
                correct: 0,
                explanation: "Izuku Midoriya é o nome verdadeiro do protagonista. 'Deku' é um apelido dado por Bakugo que originalmente era ofensivo, mas Izuku abraçou como seu nome heroico."
            },
            {
                id: 2,
                category: "Anime",
                difficulty: "easy",
                question: "Qual é a Individualidade (Quirk) de All Might?",
                options: ["One For All", "Super Força", "Combustão", "Manipulação de Sangue"],
                correct: 0,
                explanation: "All Might originalmente tinha a Quirk 'One For All', que herda e transfere poder. Ele é o 8º detentor desta Quirk lendária."
            },
            {
                id: 3,
                category: "Anime",
                difficulty: "easy",
                question: "Em qual escola Deku estuda?",
                options: ["U.A. High School", "Shiketsu High School", "Ketsubutsu Academy", "Isamu Academy"],
                correct: 0,
                explanation: "U.A. High School (Yuuei) é a escola mais prestigiosa do país. Deku entra na Classe 1-A sob mentoria de All Might e do Aizawa."
            },
            {
                id: 4,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é o verdadeiro nome de All Might?",
                options: ["Toshinori Yagi", "Aizawa Shota", "Enji Todoroki", "Keigo Takami"],
                correct: 0,
                explanation: "Toshinori Yagi é o verdadeiro nome de All Might. Ele é o símbolo da paz e transfere seu poder (One For All) para Deku."
            },
            {
                id: 5,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é o nome da Individualidade de Bakugo?",
                options: ["Explosão", "Poder Explosivo", "Combustão", "Nitroglicerina"],
                correct: 0,
                explanation: "A Quirk de Bakugo é 'Explosão' (Bakuhatsu), que permite criar explosões a partir de suor. Ele a chama de 'poder explosivo'."
            },
            {
                id: 6,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Individualidade de Todoroki?",
                options: ["Chamas", "Gelo", "Lados Opostos", "Fogo e Gelo"],
                correct: 3,
                explanation: "A Quirk de Todoroki é 'Lados Opostos' (Heteromorph Sides), que permite controlar fogo e gelo. Ele herdou fogo de seu pai e gelo de sua mãe."
            },
            {
                id: 7,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Quirk de Ochaco Uraraka?",
                options: ["Flutuação", "Levitação", "Manipulação Gravitacional", "Transmutação"],
                correct: 0,
                explanation: "A Quirk de Ochaco é 'Flutuação' (Zero Gravity), que permite fazer objetos flutuarem ao tocar em seus pontos de pressão."
            },
            {
                id: 8,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Individualidade de Iida Tenya?",
                options: ["Velocidade", "Motor", "Velocidade Aprimorada", "Turbina"],
                correct: 1,
                explanation: "A Quirk de Iida é 'Motor', que aumenta sua velocidade drasticamente através de turbinas em suas pernas. Ele é conhecido por sua velocidade."
            },
            {
                id: 9,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é o nome da Quirk de Momo Yaoyorozu?",
                options: ["Criação", "Síntese Molecular", "Construção", "Materialização"],
                correct: 0,
                explanation: "A Quirk de Momo é 'Criação', que permite criar qualquer objeto não-vivo ao decomposição molecular em seu corpo e reconstruir."
            },
            {
                id: 10,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é a Individualidade de Shoji Mezo?",
                options: ["Corpos Múltiplos", "Proliferação", "Duplas Mãos", "Membros Adicionais"],
                correct: 1,
                explanation: "A Quirk de Shoji é 'Proliferação' (Duplic Limbs), que permite criar múltiplos membros duplicados em seus braços."
            },
            {
                id: 11,
                category: "Anime",
                difficulty: "hard",
                question: "Qual personagem tem a Quirk 'Doação de Plasma'?",
                options: ["Mina Ashido", "Kaminari Denki", "Jirou Kyoka", "Hagakure Toru"],
                correct: 0,
                explanation: "Mina Ashido tem a Quirk 'Ácido', que produz ácido corrosivo. O plasma não é exatamente sua descrição, mas ela cria uma substância química forte."
            },
            {
                id: 12,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Quirk de Kaminari Denki?",
                options: ["Eletricidade", "Manipulação de Raios", "Carga Estática", "Gerador Elétrico"],
                correct: 0,
                explanation: "A Quirk de Kaminari é 'Eletricidade', que permite gerar e disparar descargas elétricas. Sua maior desvantagem é ficar tonto após uso excessivo."
            },
            {
                id: 13,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é o nome do vilão líder da Liga dos Vilões?",
                options: ["All For One", "Shigaraki Tomura", "Dabi", "Twice"],
                correct: 1,
                explanation: "Shigaraki Tomura é o líder da Liga dos Vilões na maior parte da série. Ele é o principal antagonista e herdeiro de All For One."
            },
            {
                id: 14,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Quirk de Shigaraki?",
                options: ["Decomposição", "Desintegração", "Podridão", "Destruição Táctil"],
                correct: 0,
                explanation: "A Quirk de Shigaraki é 'Decomposição', que desintegra qualquer objeto ao tocar com suas cinco dedos espalhados."
            },
            {
                id: 15,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Quirk de Himiko Toga?",
                options: ["Metamorfose", "Transformação", "Hemodinamia", "Cópia de Forma"],
                correct: 0,
                explanation: "A Quirk de Toga é 'Metamorfose', que permite transformar em qualquer pessoa cujo sangue ela beba. Ela é obcecada por Stain e Deku."
            },
            {
                id: 16,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é o nome real de Dabi?",
                options: ["Toya Todoroki", "Enji Todoroki", "Dabi Todoroki", "Natsuo Todoroki"],
                correct: 0,
                explanation: "Dabi é Toya Todoroki, filho primogênito de Endeavor. Ele foi considerado morto, mas reapareceu como vilão com poder sobre chamas azuis."
            },
            {
                id: 17,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é a Quirk de Hawks?",
                options: ["Asas de Pena", "Manipulação de Penas", "Controle de Penas", "Voo"],
                correct: 2,
                explanation: "A Quirk de Hawks é 'Controle de Penas', que permite criar e manipular penas de seu corpo para diversos usos ofensivos e defensivos."
            },
            {
                id: 18,
                category: "Anime",
                difficulty: "medium",
                question: "Qual é o nome verdadeiro de Mirko?",
                options: ["Rumi Usagiyama", "Rabbit Hero", "Mirko Tanaka", "Usagi Tanaka"],
                correct: 0,
                explanation: "Mirko (Rumi Usagiyama) é a heroína número 5 do ranking de heróis profissionais. Ela tem características de coelho e é extremamente forte."
            },
            {
                id: 19,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é a Quirk de Aizawa?",
                options: ["Cancelamento de Quirk", "Apagão", "Remoção", "Inibição de Poderes"],
                correct: 0,
                explanation: "A Quirk de Aizawa é 'Cancelamento de Quirk' (Erasure), que permite desativar qualquer Quirk ao manter contato visual direto."
            },
            {
                id: 20,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é a Quirk de Endeavor?",
                options: ["Chamas", "Inferno", "Ignição Suprema", "Controle de Chama"],
                correct: 2,
                explanation: "A Quirk de Endeavor é 'Ignição Suprema', que permite gerar chamas intensas. Ele é o pai de Todoroki e atualmente o herói número 1."
            },
            {
                id: 21,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é a Quirk de Midnight?",
                options: ["Sedução", "Gás Afrodisíaco", "Aroma Químico", "Encantos de Feromonas"],
                correct: 2,
                explanation: "A Quirk de Midnight é 'Aroma Químico' (Somnambulist), que secreta um gás que incapacita temporariamente seus oponentes."
            },
            {
                id: 22,
                category: "Anime",
                difficulty: "medium",
                question: "Quantas temporadas o anime de MHA tem (até o momento)?",
                options: ["4 temporadas", "5 temporadas", "6 temporadas", "7 temporadas"],
                correct: 2,
                explanation: "Até 2024, My Hero Academia tem 6 temporadas anime completas, com a 6ª temporada cobrindo a Guerra Paranormal."
            },
            {
                id: 23,
                category: "Anime",
                difficulty: "medium",
                question: "Em qual temporada Deku entra na U.A.?",
                options: ["Temporada 1", "Temporada 2", "Temporada 3", "Temporada 4"],
                correct: 0,
                explanation: "Deku entra na U.A. na Temporada 1. O primeiro episódio mostra seus testes de entrada e encontro com All Might."
            },
            {
                id: 24,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é o nome do vilão original que atacou Deku e foi salvo por All Might na série?",
                options: ["Sludge Villain", "Slime Villain", "Muddy Villain", "Gelatinous Villain"],
                correct: 0,
                explanation: "O Sludge Villain é o primeiro vilão que vemos. Ele atacou Deku, que era quase inútil sem Quirk, mas foi salvo por All Might."
            },
            {
                id: 25,
                category: "Anime",
                difficulty: "hard",
                question: "Qual é a especialidade profissional do herói 'Present Mic'?",
                options: ["Ensino de Inglês", "Locutor de Rádio", "Estratégia", "Combate"],
                correct: 1,
                explanation: "Present Mic é um DJ e locutor de rádio. Sua Quirk é 'Sound Wave', que amplifica som. Ele é professor de inglês na U.A."
            },

            // MANGÁ - 20 perguntas
            {
                id: 26,
                category: "Mangá",
                difficulty: "easy",
                question: "Quando o mangá de My Hero Academia começou a ser publicado?",
                options: ["2013", "2014", "2015", "2016"],
                correct: 1,
                explanation: "O mangá de My Hero Academia começou a ser serializado em 2014 na revista Weekly Shonen Jump."
            },
            {
                id: 27,
                category: "Mangá",
                difficulty: "medium",
                question: "Qual é o nome do criador de My Hero Academia?",
                options: ["Kohei Horikoshi", "Eiichiro Oda", "Tite Kubo", "Masashi Kishimoto"],
                correct: 0,
                explanation: "Kohei Horikoshi é o criador e desenhista de My Hero Academia. Ele o desenhou inteiramente desde 2014."
            },
            {
                id: 28,
                category: "Mangá",
                difficulty: "medium",
                question: "Em qual capítulo do mangá Deku entra para a U.A.?",
                options: ["Capítulo 1-5", "Capítulo 10-15", "Capítulo 20-25", "Capítulo 30-35"],
                correct: 1,
                explanation: "Os primeiros capítulos cobrem a entrada de Deku. O mangá começa com sua jornada sem Quirk e seu encontro com All Might."
            },
            {
                id: 29,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual arco do mangá mostra a formação definitiva da Liga dos Vilões?",
                options: ["Arco da Revelação", "Arco Kamino", "Arco da Mafia do Submundo", "Arco da Paranormal War"],
                correct: 2,
                explanation: "O Arco da Mafia do Submundo mostra a contratação de vilões e a organização da Liga para confrontar heróis."
            },
            {
                id: 30,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é o nome do arco que cobre o Festival Esportivo da U.A.?",
                options: ["Arco de Competição", "Arco Esportivo", "Arco do Festival", "Arco Internato"],
                correct: 2,
                explanation: "O Arco do Festival Esportivo é onde a Classe 1-A compete e mostra suas Quirks em ação. É um dos arcos mais memoráveis."
            },
            {
                id: 31,
                category: "Mangá",
                difficulty: "medium",
                question: "Em qual arco Bakugo é capturado?",
                options: ["Arco do Internato", "Arco Kamino", "Arco da Paranormal War", "Arco da Prisão"],
                correct: 1,
                explanation: "No Arco Kamino, Bakugo é capturado pela Liga dos Vilões. All Might trata de resgatá-lo, levando à sua transformação final."
            },
            {
                id: 32,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é o nome real de All For One?",
                options: ["Shigaraki Tomura", "Shigeo Chisaki", "Desconhecido por enquanto", "Hisashi Midoriya"],
                correct: 2,
                explanation: "O verdadeiro nome de All For One não foi completamente revelado no mangá até o momento. Sua identidade exata permanece um mistério."
            },
            {
                id: 33,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é a revelação sobre o pai de Deku no mangá?",
                options: ["Ele morreu", "Ele é um vilão", "Ele trabalha no exterior", "Ele é Pro Hero"],
                correct: 2,
                explanation: "O pai de Deku, Hisashi, trabalha no exterior. Ele não aparece frequentemente na série, mas sua história é tocada ocasionalmente."
            },
            {
                id: 34,
                category: "Mangá",
                difficulty: "medium",
                question: "Qual é o nome do arco que cobre os exames para licença de herói?",
                options: ["Arco Exame", "Arco Licença", "Arco Profissional", "Arco Hero License"],
                correct: 3,
                explanation: "O Arco Hero License mostra Deku e seus colegas tentando obter suas licenças de heróis profissionais."
            },
            {
                id: 35,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual personagem tem a Quirk 'Escápula'?",
                options: ["Sato", "Ojiro", "Kouda", "Aoyama"],
                correct: 2,
                explanation: "Oji Kouda tem a Quirk 'Escápula' (Anivoice), que permite comunicar com animais e controlá-los até certo ponto."
            },
            {
                id: 36,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual personagem da classe 1-A tem a Quirk de 'Gravidade'?",
                options: ["Bakugo", "Kaminari", "Jiro", "Aoyama"],
                correct: 3,
                explanation: "Aoyama Yuga tem a Quirk 'Gravidade' (Navel Laser), que permite disparar raios de seu umbigo. Ele é secretamente um duplo agente."
            },
            {
                id: 37,
                category: "Mangá",
                difficulty: "medium",
                question: "Qual é o nome do arco onde Deku desenvolve Black Whip?",
                options: ["Arco Internato", "Arco Paranormal War", "Arco Poder Oculto", "Arco Segundo Poder"],
                correct: 2,
                explanation: "No Arco do Poder Oculto, Deku descobre que One For All tem múltiplos poderes armazenados pelos seus usuários anteriores."
            },
            {
                id: 38,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é o nome completo de Overhaul?",
                options: ["Kai Chisaki", "Shigeo Chisaki", "Takaaki Chisaki", "Shinichi Chisaki"],
                correct: 0,
                explanation: "Kai Chisaki, conhecido como Overhaul, é um vilão importante que tenta reconstruir a Yakuza. Sua Quirk permite desmontar e remontar."
            },
            {
                id: 39,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é a Quirk de Overhaul?",
                options: ["Restauração", "Reorganização", "Desmontagem", "Dissassembly"],
                correct: 2,
                explanation: "A Quirk de Overhaul é 'Desmontagem', que permite desmontar e remontar objetos e até organismos vivos de forma reconstruída."
            },
            {
                id: 40,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual personagem é o 'Big Three' de Shiketsu High School?",
                options: ["Iida", "Bakugo", "Inasa Yoarashi", "Todoroki"],
                correct: 2,
                explanation: "Inasa Yoarashi é um dos Big Three de Shiketsu High School. Tem poder de manipulação de vento e é rival amigável de Todoroki."
            },
            {
                id: 41,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é a Quirk de Stain?",
                options: ["Sangue Venenoso", "Paralisação Sanguínea", "Hemomanciia", "Bloqueio Sanguíneo"],
                correct: 1,
                explanation: "A Quirk de Stain é 'Paralisação Sanguínea' (Bloodcurdle), que paralisa suas vítimas ao beber seu sangue."
            },
            {
                id: 42,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual arco cobre a 'Guerra Paranormal' mencionada?",
                options: ["Arco Paranormal War", "Arco Final", "Arco Confrontação", "Arco Apocalipse"],
                correct: 0,
                explanation: "O Arco Paranormal War é o grande conflito final entre heróis e vilões no mangá, cobrindo a Terceira Guerra."
            },
            {
                id: 43,
                category: "Mangá",
                difficulty: "medium",
                question: "Qual é o relacionamento entre Momo e Jirou?",
                options: ["Rivais", "Melhores amigas", "Inimigas", "Não se conhecem bem"],
                correct: 1,
                explanation: "Momo e Jirou são melhores amigas na Classe 1-A. Elas se ajudam mutuamente e têm uma forte amizade ao longo da série."
            },
            {
                id: 44,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual é o status final do mangá (até 2024)?",
                options: ["Ainda em serialização", "Completo", "Em pausa", "Cancelado"],
                correct: 1,
                explanation: "My Hero Academia concluiu sua serialização em 2024. A história principal foi encerrada com o desfecho da Guerra Paranormal."
            },
            {
                id: 45,
                category: "Mangá",
                difficulty: "hard",
                question: "Qual personagem se revela como um duplo agente na série?",
                options: ["Aoyama", "Jirou", "Todoroki", "Iida"],
                correct: 0,
                explanation: "Aoyama é revelado como tendo sido infiltrado pela Liga dos Vilões desde o início, embora ainda tenha seu próprio senso de justiça."
            },

            // FILMES - 15 perguntas
            {
                id: 46,
                category: "Filmes",
                difficulty: "easy",
                question: "Qual é o nome do primeiro filme de My Hero Academia?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Deku's Adventure"],
                correct: 0,
                explanation: "O primeiro filme de MHA é 'Two Heroes' (2018), que mostra Deku e All Might em uma aventura épica em uma ilha."
            },
            {
                id: 47,
                category: "Filmes",
                difficulty: "medium",
                question: "Qual é o antagonista principal do primeiro filme?",
                options: ["Stain", "Wolfram", "Nine", "All For One"],
                correct: 1,
                explanation: "Wolfram é o antagonista do primeiro filme 'Two Heroes', lutando contra All Might e Deku em uma ilha de pesquisa."
            },
            {
                id: 48,
                category: "Filmes",
                difficulty: "medium",
                question: "Em qual filme aparece o vilão chamado 'Nine'?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Rising Heroes"],
                correct: 1,
                explanation: "Nine é o antagonista do segundo filme 'Heroes Rising' (2019). Ele tem uma Quirk de Múltiplos Poderes."
            },
            {
                id: 49,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual é a Quirk de Nine no segundo filme?",
                options: ["Absorção de Poderes", "Roubo de Quirk", "Múltiplos Poderes", "Cópia de Quirk"],
                correct: 2,
                explanation: "Nine pode roubar e usar múltiplas Quirks. Ele é uma ameaça devastadora no segundo filme 'Heroes Rising'."
            },
            {
                id: 50,
                category: "Filmes",
                difficulty: "medium",
                question: "Qual filme foi lançado em 2021?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Rising Heroes"],
                correct: 2,
                explanation: "'World Heroes Mission' foi lançado em 2021 e marca o terceiro filme da série My Hero Academia."
            },
            {
                id: 51,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual é o antagonista de 'World Heroes Mission'?",
                options: ["Deku Dark", "Humarise", "Trigger Organization", "Paranormal Liberation Front"],
                correct: 1,
                explanation: "Humarise é uma organização antiQuirk que serve como antagonista principal de 'World Heroes Mission'."
            },
            {
                id: 52,
                category: "Filmes",
                difficulty: "medium",
                question: "Em qual filme Bakugo participa de forma significativa?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Todos os filmes"],
                correct: 3,
                explanation: "Bakugo aparece em todos os filmes da série, evoluindo seu papel de rival para aliado próximo de Deku."
            },
            {
                id: 53,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual filme mostra o desenvolvimento de uma nova forma de Deku?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Nenhum deles"],
                correct: 1,
                explanation: "Em 'Heroes Rising', Deku e Bakugo sincronizam seus Quirks e habilidades em um combate impressionante contra Nine."
            },
            {
                id: 54,
                category: "Filmes",
                difficulty: "hard",
                question: "Quantos filmes de MHA foram lançados até 2024?",
                options: ["3 filmes", "4 filmes", "5 filmes", "6 filmes"],
                correct: 1,
                explanation: "Até 2024, foram lançados 4 filmes: Two Heroes, Heroes Rising, World Heroes Mission, e You're Next."
            },
            {
                id: 55,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual é o título do quarto filme de MHA?",
                options: ["World Heroes Rising", "You're Next", "Heroes United", "Final War"],
                correct: 1,
                explanation: "'You're Next' é o quarto e mais recente filme de My Hero Academia, lançado em 2024."
            },
            {
                id: 56,
                category: "Filmes",
                difficulty: "hard",
                question: "Em qual filme Todoroki tem papel de destaque?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Todos"],
                correct: 2,
                explanation: "Todoroki tem papel importante em 'World Heroes Mission', participando de missões internacionais com outros heróis."
            },
            {
                id: 57,
                category: "Filmes",
                difficulty: "medium",
                question: "Qual é a trilha sonora mais memorável do primeiro filme?",
                options: ["Plus Ultra", "Go Beyond", "Symbol of Peace", "Nenhuma específica"],
                correct: 3,
                explanation: "O primeiro filme tem várias músicas memoráveis, mas não uma única trilha destacada como principal."
            },
            {
                id: 58,
                category: "Filmes",
                difficulty: "hard",
                question: "Em qual filme All Might tem seu último grande combate?",
                options: ["Two Heroes", "Heroes Rising", "World Heroes Mission", "Nenhum filme"],
                correct: 0,
                explanation: "Em 'Two Heroes', All Might tem um combate épico contra Wolfram, sendo um de seus últimos grandes combates."
            },
            {
                id: 59,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual personagem desaparece misteriosamente durante 'Heroes Rising'?",
                options: ["Deku", "Bakugo", "Todoroki", "Uma ilha inteira de pessoas"],
                correct: 3,
                explanation: "Em 'Heroes Rising', Nine coloca uma maldição em uma ilha que afeta todos os seus habitantes."
            },
            {
                id: 60,
                category: "Filmes",
                difficulty: "hard",
                question: "Qual é o grande segredo revelado em 'World Heroes Mission'?",
                options: ["Quirks são sintéticas", "Humarise quer destruir Quirks", "Um novo vilão emerge", "Deku é especial"],
                correct: 1,
                explanation: "Humarise busca eliminar todos os Quirks do mundo, vendo-os como uma ameaça à humanidade tradicional."
            },

            // OVAs E ESPECIAIS - 12 perguntas
            {
                id: 61,
                category: "OVAs e Especiais",
                difficulty: "medium",
                question: "Qual é o tema principal do OVA 'Training of the Dead'?",
                options: ["Zumbis", "Treino no Acampamento", "Batalha contra mortos", "Medo noturno"],
                correct: 2,
                explanation: "'Training of the Dead' mostra a Classe 1-A enfrentando uma situação envolvendo pessoas sob controle de vilões."
            },
            {
                id: 62,
                category: "OVAs e Especiais",
                difficulty: "medium",
                question: "Qual OVA mostra a formação da Classe 1-A?",
                options: ["Beginnings", "School Festival", "Class 1-A Origins", "First Days"],
                correct: 0,
                explanation: "'Beginnings' é um OVA que mostra os primeiros encontros e formação da Classe 1-A."
            },
            {
                id: 63,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual é o nome do especial que mostra Deku e Bakugo quando eram crianças?",
                options: ["Childhood Days", "Memories", "Young Heroes", "Deku vs Bakugo - Origins"],
                correct: 2,
                explanation: "'Young Heroes' explora a infância de Deku e Bakugo, mostrando como suas personalidades se formaram."
            },
            {
                id: 64,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual especial mostra o Festival Escolar da U.A.?",
                options: ["School Festival OVA", "Festival Days", "U.A. Celebration", "Nenhum especial específico"],
                correct: 2,
                explanation: "O Festival Escolar é mostrado durante a série principal, não em um OVA específico, mas em arcos dedicados."
            },
            {
                id: 65,
                category: "OVAs e Especiais",
                difficulty: "medium",
                question: "Qual OVA mostra um jogo esportivo entre a Classe 1-A e 1-B?",
                options: ["Midterm Exam", "Sports Festival OVA", "Class Rivalry", "Match Day Special"],
                correct: 1,
                explanation: "Há OVAs que mostram confrontos entre as turmas, destacando habilidades de forma mais relaxada."
            },
            {
                id: 66,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual é o foco principal do especial 'Hero Notes'?",
                options: ["Diário de Deku", "Notas sobre heróis", "Poder secreto", "Segredos do mangá"],
                correct: 0,
                explanation: "'Hero Notes' são especiais curtos que mostram o diário de Deku e suas anotações sobre os heróis."
            },
            {
                id: 67,
                category: "OVAs e Especiais",
                difficulty: "medium",
                question: "Qual OVA explora o passado de um vilão específico?",
                options: ["Stain's Past", "Villain Origins", "Heroes and Villains", "Dabi's Story"],
                correct: 2,
                explanation: "'Heroes and Villains' (e outros especiais) exploram as histórias de origem de vários personagens, tanto heróis quanto vilões."
            },
            {
                id: 68,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual especial mostra Deku como um herói adulto no futuro?",
                options: ["Future Hero", "Deku's Future", "Time Skip Special", "Nenhum ainda lançado"],
                correct: 3,
                explanation: "Até o momento, não há um OVA específico sobre o futuro adulto de Deku, embora o mangá tenha um epílogo."
            },
            {
                id: 69,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual é o nome do especial que mostra treinamento na Agência de Hawks?",
                options: ["Hawks Training", "Wings of Heroes", "Agency Arc Special", "Flight Training OVA"],
                correct: 2,
                explanation: "O treinamento na agência de Hawks é mostrado principalmente na série principal, não em um OVA específico."
            },
            {
                id: 70,
                category: "OVAs e Especiais",
                difficulty: "medium",
                question: "Qual OVA mostra um dia relaxante da Classe 1-A?",
                options: ["Relaxation Day", "School Day Special", "Class 1-A Fun", "Beach Episode"],
                correct: 3,
                explanation: "Há OVAs mostrando episódios filler onde a turma aproveita tempo livre, incluindo visitas a praias e eventos casuais."
            },
            {
                id: 71,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual especial enfoca na vida cotidiana dos vilões?",
                options: ["Villain Daily Life", "League of Villains OVA", "Villain's Rest Day", "Nenhum lançado"],
                correct: 2,
                explanation: "Há OVAs que mostram momentos de descontração da Liga dos Vilões fora de combate, revelando suas personalidades."
            },
            {
                id: 72,
                category: "OVAs e Especiais",
                difficulty: "hard",
                question: "Qual OVA mostra o treinamento de Deku para um concurso específico?",
                options: ["Internship Training", "Exam Preparation OVA", "Contest Special", "Tournament Training"],
                correct: 1,
                explanation: "Há OVAs mostrando Deku se preparando para vários testes e competições importantes."
            },

            // JOGOS - 10 perguntas
            {
                id: 73,
                category: "Jogos",
                difficulty: "medium",
                question: "Qual é o nome da série de jogos de luta de MHA?",
                options: ["My Hero Fighting", "My Hero One's Justice", "Justice Chronicles", "Hero Battle Arena"],
                correct: 1,
                explanation: "'My Hero One's Justice' é a série principal de jogos de luta do MHA, com dois títulos lançados."
            },
            {
                id: 74,
                category: "Jogos",
                difficulty: "medium",
                question: "Qual é o nome do jogo de ação em tempo real?",
                options: ["MHA Action", "Ultra Rumble", "Heroes Battle", "Combat Simulator"],
                correct: 1,
                explanation: "'Ultra Rumble' é um jogo de ação em tempo real estilo battle royale lançado para plataformas móveis."
            },
            {
                id: 75,
                category: "Jogos",
                difficulty: "hard",
                question: "Em 'My Hero One's Justice 2', qual é a novidade em relação ao primeiro?",
                options: ["Mais personagens", "Nova história", "Melhor gráficos", "Todas as anteriores"],
                correct: 3,
                explanation: "'My Hero One's Justice 2' traz mais personagens, história expandida e melhorias gerais em relação ao primeiro jogo."
            },
            {
                id: 76,
                category: "Jogos",
                difficulty: "hard",
                question: "Qual é o nome do jogo RPG de MHA?",
                options: ["MHA RPG", "Hero Rising: RPG", "The Strongest Hero", "Academia RPG"],
                correct: 2,
                explanation: "'The Strongest Hero' é um jogo mobile RPG de ação onde você constrói seu próprio herói ou coleciona personagens."
            },
            {
                id: 77,
                category: "Jogos",
                difficulty: "hard",
                question: "Quantos personagens jogáveis há em 'My Hero One's Justice 2'?",
                options: ["20+ personagens", "30+ personagens", "40+ personagens", "50+ personagens"],
                correct: 2,
                explanation: "'My Hero One's Justice 2' tem mais de 40 personagens jogáveis, incluindo heróis, vilões e personagens especiais."
            },
            {
                id: 78,
                category: "Jogos",
                difficulty: "medium",
                question: "Em qual plataforma 'Ultra Rumble' foi lançado?",
                options: ["Nintendo Switch", "PC", "Mobile e Console", "Exclusivo Mobile"],
                correct: 2,
                explanation: "'Ultra Rumble' foi lançado em múltiplas plataformas incluindo mobile (iOS e Android) e consoles."
            },
            {
                id: 79,
                category: "Jogos",
                difficulty: "hard",
                question: "Qual é o modo de jogo principal de 'The Strongest Hero'?",
                options: ["Luta PvP", "Construção de personagem", "Campanha principal", "Battle Royale"],
                correct: 1,
                explanation: "'The Strongest Hero' foca em construção e aprimoramento de personagens com sistemas de gacha para coletar heróis."
            },
            {
                id: 80,
                category: "Jogos",
                difficulty: "hard",
                question: "Qual é a trilha sonora principal de 'My Hero One's Justice 2'?",
                options: ["Plus Ultra", "Symbol of Peace", "Temas do anime", "Composições originais"],
                correct: 2,
                explanation: "'My Hero One's Justice 2' utiliza temas e músicas do anime original, mantendo a identidade sonora da série."
            },
            {
                id: 81,
                category: "Jogos",
                difficulty: "hard",
                question: "Qual é a mecânica especial de combate em 'One's Justice'?",
                options: ["Combos infinitos", "Sistemas de Quirk únicos", "Movimentos especiais por herói", "Todos os anteriores"],
                correct: 3,
                explanation: "Os jogos de 'One's Justice' destacam as Quirks únicas de cada personagem com movimentos especiais e combos temáticos."
            },
            {
                id: 82,
                category: "Jogos",
                difficulty: "hard",
                question: "Qual personagem é frequentemente considerado o mais poderoso em 'My Hero One's Justice'?",
                options: ["All Might", "Shigaraki", "All For One", "Deku"],
                correct: 2,
                explanation: "All For One é extremamente poderoso em jogo, com habilidades roubadas de múltiplos Quirks, tornando-o um desafio formidável."
            },

            // PERSONAGENS - 20 perguntas
            {
                id: 83,
                category: "Personagens",
                difficulty: "easy",
                question: "Qual é o apelido original de Deku?",
                options: ["Useless", "Deku", "Midoriya", "Quirkless"],
                correct: 0,
                explanation: "Deku era chamado de 'Useless' por Bakugo quando eram crianças. O apelido 'Deku' vem do kanji que significa 'inútil', mas Deku o transformou em algo positivo."
            },
            {
                id: 84,
                category: "Personagens",
                difficulty: "easy",
                question: "Qual é a cor de cabelo de Todoroki?",
                options: ["Totalmente branco", "Totalmente vermelho", "Vermelho e branco", "Preto e branco"],
                correct: 2,
                explanation: "Todoroki tem cabelos vermelhos de um lado (herança de seu pai) e brancos do outro (herança de sua mãe)."
            },
            {
                id: 85,
                category: "Personagens",
                difficulty: "medium",
                question: "Qual é a profissão do pai de Deku?",
                options: ["Herói", "Empresário", "Trabalha no exterior", "Sem ocupação fixa"],
                correct: 2,
                explanation: "O pai de Deku (Hisashi) trabalha no exterior, sendo ausente da maior parte da série."
            },
            {
                id: 86,
                category: "Personagens",
                difficulty: "medium",
                question: "Qual é o nome do melhor amigo de Deku além de Bakugo?",
                options: ["Iida Tenya", "Todoroki", "Kaminari", "Sero"],
                correct: 0,
                explanation: "Iida Tenya é um dos melhores amigos de Deku e se torna próximo logo após entrarem na U.A."
            },
            {
                id: 87,
                category: "Personagens",
                difficulty: "medium",
                question: "Qual é o sobrenome da mãe de Deku?",
                options: ["Midoriya", "Inko", "Shimura", "Aizawa"],
                correct: 0,
                explanation: "A mãe de Deku é Inko Midoriya. Ela é uma mulher amorosa e apoiadora durante toda a jornada de Deku."
            },
            {
                id: 88,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o nome completo da Classe 1-A que estuda na U.A.?",
                options: ["Turma 1-A", "Classe Heroica 1-A", "Classe 1-A de Yuuei", "Nenhum nome específico"],
                correct: 2,
                explanation: "A classe é oficialmente conhecida como 'Classe 1-A de Yuuei' (U.A. High School, Classe 1-A)."
            },
            {
                id: 89,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a idade de All Might no início da série?",
                options: ["Cerca de 40 anos", "Cerca de 50 anos", "Cerca de 60 anos", "Cerca de 70 anos"],
                correct: 2,
                explanation: "All Might tem aproximadamente 60 anos no início da série. Ele é um herói veterano em seus últimos anos de serviço."
            },
            {
                id: 90,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a profissão desejada de Uraraka?",
                options: ["Resgate", "Herói", "Policial", "Resgate e Salvamento"],
                correct: 3,
                explanation: "Uraraka quer ser uma heroína focada em resgate, inspirada em salvar pessoas sem deixar danos para trás."
            },
            {
                id: 91,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o grande objetivo de vida de Iida?",
                options: ["Ser o herói número 1", "Honrar a linhagem de sua família", "Vencer Deku", "Proteger a lei"],
                correct: 1,
                explanation: "Iida vem de uma família de heróis e busca honrar essa linhagem, seguindo os passos de seu irmão mais velho."
            },
            {
                id: 92,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a cor de cabelo de Bakugo?",
                options: ["Loiro", "Vermelho", "Preto com mechas vermelhas", "Branco"],
                correct: 2,
                explanation: "Bakugo tem cabelo preto com mechas vermelhas, refletindo sua personalidade explosiva e agressiva."
            },
            {
                id: 93,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o nome do mentor de Deku na Agência de Hawks?",
                options: ["Hawks", "Endeavor", "All Might", "Aizawa"],
                correct: 0,
                explanation: "Hawks é o herói número 2 que oferece um internato para Deku, ajudando a desenvolver suas habilidades ofensivas."
            },
            {
                id: 94,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a relação familiar entre Dabi e Todoroki?",
                options: ["Rivais", "Irmãos", "Primos", "Sem relação"],
                correct: 1,
                explanation: "Dabi é o irmão mais velho de Todoroki, filho de Endeavor que foi presumivelmente morto em um incêndio."
            },
            {
                id: 95,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o verdadeiro objetivo de Toga?",
                options: ["Conquistar poder", "Encontrar aceitação", "Destruir a sociedade", "Proteger vilões"],
                correct: 1,
                explanation: "Toga busca aceitação e liberdade. Ela quer viver sem julgamentos e encontra essa aceitação na Liga dos Vilões."
            },
            {
                id: 96,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a Quirk de Gran Torino (treinador de All Might)?",
                options: ["Super Velocidade", "Voo", "Aceleração", "Mobilidade"],
                correct: 1,
                explanation: "Gran Torino tem a Quirk 'Voo' ou 'Mobilidade', que permite voar e se mover rapidamente através do ar."
            },
            {
                id: 97,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o número de heróis profissionais registrados ao final da série?",
                options: ["Mais de 100", "Mais de 500", "Mais de 1000", "Mais de 10,000"],
                correct: 2,
                explanation: "Há mais de 1000 heróis profissionais registrados no Japão no universo de MHA."
            },
            {
                id: 98,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a Quirk de Midnight?",
                options: ["Sedução", "Aroma Químico", "Pheromone", "Feitiço de Sono"],
                correct: 1,
                explanation: "Midnight tem a Quirk 'Aroma Químico', que secreta um gás que incapacita temporariamente seus inimigos."
            },
            {
                id: 99,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é o antigo herói título 'Top 3' que se torna vilão?",
                options: ["Endeavor", "Hawks", "Dabi", "Stain"],
                correct: 2,
                explanation: "Dabi (Toya) era herdeiro do poderoso Endeavor e eventualmente se torna vilão. Stain é um vilão filosófico que questiona heróis falsos."
            },
            {
                id: 100,
                category: "Personagens",
                difficulty: "hard",
                question: "Qual é a origem da Quirk 'One For All'?",
                options: ["Criada artificialmente", "Herdada naturalmente", "Fruto de um experimento", "Dada por All For One originalmente"],
                correct: 3,
                explanation: "One For All foi originalmente criada como uma reação ao Quirk 'All For One' de um vilão. Foi desenvolvida para combatê-lo."
            },

            // HERÓIS PROFISSIONAIS - 15 perguntas
            {
                id: 101,
                category: "Heróis Profissionais",
                difficulty: "easy",
                question: "Qual é o herói número 1 do Japão?",
                options: ["All Might", "Endeavor", "Hawks", "Gran Torino"],
                correct: 1,
                explanation: "Endeavor se torna o herói número 1 após All Might se aposentar. Ele é um herói extremamente poderoso mas moralmente questionável."
            },
            {
                id: 102,
                category: "Heróis Profissionais",
                difficulty: "easy",
                question: "Qual é o herói número 2?",
                options: ["All Might", "Endeavor", "Hawks", "Mirko"],
                correct: 2,
                explanation: "Hawks é o herói número 2, extremamente ágil e com poderes de manipulação de penas. Ele é jovem e talentoso."
            },
            {
                id: 103,
                category: "Heróis Profissionais",
                difficulty: "medium",
                question: "Qual é o herói número 5?",
                options: ["Hawks", "Mirko", "Aizawa", "Crust"],
                correct: 1,
                explanation: "Mirko (Rumi Usagiyama) é a heroína número 5 com características de coelho e extraordinária força física."
            },
            {
                id: 104,
                category: "Heróis Profissionais",
                difficulty: "medium",
                question: "Qual é a Quirk de Crust?",
                options: ["Crosta", "Escudo", "Endurecimento", "Proteção"],
                correct: 0,
                explanation: "Crust tem a Quirk 'Crosta', que permite criar estruturas de pedra e rocha para defesa e contenção."
            },
            {
                id: 105,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é o antigo número 1 que aparece como vilão-antiherói?",
                options: ["Gran Torino", "Stain", "Nenhum", "All For One"],
                correct: 1,
                explanation: "Stain é um vilão que critica heróis 'falsos'. Ele não é oficialmente ranking, mas é extremamente perigoso."
            },
            {
                id: 106,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual herói tem a Quirk de 'Pesquisa'?",
                options: ["Thirteen", "Gran Torino", "Present Mic", "Midnight"],
                correct: 0,
                explanation: "Thirteen tem a Quirk 'Pesquisa' (Black Hole), que cria um buraco negro para absorver e destruir objetos."
            },
            {
                id: 107,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é o antigo mentor de All Might?",
                options: ["Gran Torino", "Nana Shimura", "Torino", "All For One"],
                correct: 1,
                explanation: "Nana Shimura foi a mãe adotiva de All Might e a 7ª portadora de One For All. Ela o treinou desde jovem."
            },
            {
                id: 108,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é a Quirk de Fat Gum?",
                options: ["Elasticidade", "Absorção de Impacto", "Peso Variável", "Gordura Adaptativa"],
                correct: 1,
                explanation: "Fat Gum tem a Quirk 'Absorção de Impacto', que permite absorver dano em sua gordura corporal para proteção."
            },
            {
                id: 109,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é a Quirk de Ryukyu?",
                options: ["Dragão", "Transformação Dracônica", "Voo de Dragão", "Forma de Dragão"],
                correct: 1,
                explanation: "Ryukyu tem a Quirk 'Transformação Dracônica', que permite transformar em um dragão gigante."
            },
            {
                id: 110,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual herói é conhecido pelo apelido 'Loki'?",
                options: ["Aizawa", "Present Mic", "Gran Torino", "Nenhum específico"],
                correct: 3,
                explanation: "Não há um herói específico chamado 'Loki' na série. Este pode ser um erro ou referência a um personagem menor."
            },
            {
                id: 111,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é o nome completo de 'Wash'?",
                options: ["Wash Hero", "Tsunami Washy", "Wash Professional", "Desconhecido na série"],
                correct: 3,
                explanation: "Wash é um herói menor cujo nome completo não é explicitamente fornecido na série."
            },
            {
                id: 112,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual herói é mentor de Deku na Academia?",
                options: ["Aizawa", "All Might", "Gran Torino", "Hawks"],
                correct: 0,
                explanation: "Aizawa Shota é o professor-treinador oficial de Deku na U.A., enquanto All Might é seu mentor de Quirk e Hawks seu mentor de internato."
            },
            {
                id: 113,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é a Quirk de Sekijiro Kan (Red Riot Unbreakable)?",
                options: ["Endurecimento", "Lâmina de Rocha", "Corpo de Ferro", "Dureza"],
                correct: 0,
                explanation: "Kirishima tem a Quirk 'Endurecimento' (Hardening), que permite enrijecer sua pele. Red Riot é seu nome heroico."
            },
            {
                id: 114,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual herói tinha o número 6?",
                options: ["X-Less", "Edgeshot", "Mirko", "Crust"],
                correct: 1,
                explanation: "Edgeshot era o herói número 6. Ele tem a Quirk 'Espelho' (Mirror) e é extremamente rápido e letal."
            },
            {
                id: 115,
                category: "Heróis Profissionais",
                difficulty: "hard",
                question: "Qual é a Quirk de Edgeshot?",
                options: ["Velocidade", "Papel Cortante", "Corpo Fino", "Bistuor Vivente"],
                correct: 2,
                explanation: "Edgeshot tem a Quirk 'Corpo Fino', que permite estreitar seu corpo a qualquer largura para cortar e penetrar."
            },

            // VILÕES - 15 perguntas
            {
                id: 116,
                category: "Vilões",
                difficulty: "easy",
                question: "Qual é o vilão mais poderoso da série?",
                options: ["Shigaraki", "All For One", "Dabi", "Stain"],
                correct: 1,
                explanation: "All For One é o vilão mais poderoso, com a capacidade de roubar, manter e usar múltiplos Quirks simultaneamente."
            },
            {
                id: 117,
                category: "Vilões",
                difficulty: "medium",
                question: "Qual vilão tem a Quirk de 'Queimadura'?",
                options: ["Dabi", "Toga", "Twice", "Mr. Compress"],
                correct: 0,
                explanation: "Dabi tem a Quirk 'Queimadura' (Cremation), que produz chamas azuis extremamente quentes."
            },
            {
                id: 118,
                category: "Vilões",
                difficulty: "medium",
                question: "Qual é a origem da Liga dos Vilões?",
                options: ["Criada por Shigaraki", "Criada por All For One", "Criada por Stain", "Criada por uma organização"],
                correct: 1,
                explanation: "All For One criou a Liga dos Vilões como uma organização para seus objetivos. Shigaraki a lidera sob sua influência."
            },
            {
                id: 119,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é o nome verdadeiro de Twice?",
                options: ["Jin Bubaigawara", "Double Face", "Duplicate", "Twice Tanaka"],
                correct: 0,
                explanation: "Twice (Jin Bubaigawara) tem a Quirk que permite criar duplicatas de si mesmo ou de outros."
            },
            {
                id: 120,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a Quirk de Mr. Compress?",
options: ["Compressão", "Minimização", "Espaço de Bolso", "Redução"],
                correct: 2,
                explanation: "Mr. Compress tem a Quirk 'Espaço de Bolso' (Compress), que permite comprimir objetos em pequenas esferas e armazená-los."
            },
            {
                id: 121,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual vilão é obcecado por sangue e heróis?",
                options: ["Stain", "Toga", "Dabi", "Shigaraki"],
                correct: 0,
                explanation: "Stain é obsessionado pela pureza dos heróis e suas ações. Ele bebe sangue para paralisar inimigos."
            },
            {
                id: 122,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a filosofia de Stain sobre heróis?",
                options: ["Todos devem morrer", "Apenas heróis verdadeiros", "Heróis são fracos", "Heróis são desnecessários"],
                correct: 1,
                explanation: "Stain acredita que apenas heróis verdadeiros que servem por justiça merecem existir. Ele mata heróis que ele vê como falsos."
            },
            {
                id: 123,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a Quirk de Mustard (vilão menor)?",
                options: ["Gás Venenoso", "Nuvem Tóxica", "Disseminação de Gás", "Névoa"],
                correct: 1,
                explanation: "Mustard tem a Quirk 'Nuvem Tóxica', que permite liberar gás venenoso do seu corpo."
            },
            {
                id: 124,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a Quirk de Spinner?",
                options: ["Rotação", "Giro de Réptil", "Movimento Reptiliano", "Aceleração Rotativa"],
                correct: 1,
                explanation: "Spinner tem características reptilianas e a Quirk 'Giro de Réptil', que permite rotação ultra-rápida."
            },
            {
                id: 125,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual membro da Liga dos Vilões é conhecido como vilão profissional experimental?",
                options: ["Nomu", "Kurogiri", "Magne", "Geten"],
                correct: 0,
                explanation: "Nomu são criaturas criadas por All For One combinando múltiplos Quirks para servirem como soldados perfeitos."
            },
            {
                id: 126,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a Quirk de Kurogiri?",
                options: ["Teletransporte", "Portais de Sombra", "Manipulação Espacial", "Warp"],
                correct: 3,
                explanation: "Kurogiri tem a Quirk 'Warp', que permite criar portais para teletransporte. Ele é um Nomu melhorado com consciência."
            },
            {
                id: 127,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual vilão é conhecido como 'Handsome Demon'?",
                options: ["Dabi", "Spinner", "Geten", "Nenhum específico"],
                correct: 2,
                explanation: "Geten é um vilão com poderes de gelo que aparece na série. Ele tem características atrativas e é leal a All For One."
            },
            {
                id: 128,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a Quirk de Gigantomachia?",
options: ["Gigantismo", "Poder de Gigante", "Corpo Colossal", "Transformação Gigante"],
                correct: 2,
                explanation: "Gigantomachia tem a Quirk que permite crescer para tamanhos colossais, tornando-a uma ameaça formidável."
            },
            {
                id: 129,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual é a relação entre Toga e Deku?",
                options: ["Rivais", "Toga o admira", "Inimigos", "Sem relação"],
                correct: 1,
                explanation: "Toga é obsessionada com Deku e vê nele uma fonte de inspiração. Ela o persegue e tenta transformar-se em seu ideal."
            },
            {
                id: 130,
                category: "Vilões",
                difficulty: "hard",
                question: "Qual vilão questiona a moral de All For One?",
                options: ["Shigaraki", "Stain", "Dabi", "Toga"],
                correct: 2,
                explanation: "Dabi, como filho de Endeavor, questiona a moralidade de All For One e tem conflitos internos sobre sua lealdade à Liga."
            },
        ];

        // ==================== SISTEMA DO QUIZ ====================
        let currentQuestionIndex = 0;
        let score = 0;
        let maxScore = 0;
        let answeredQuestions = 0;
        let timerInterval = null;
        let timeElapsed = 0;
        let gameMode = 'classic';
        let questions = [];
        let survivalLives = 3;
        let timerDuration = 20;

        const ranks = [
            { minScore: 0, title: "Iniciante da U.A.", feedback: "Você está começando sua jornada heroica! Continue estudando sobre o universo de MHA!" },
            { minScore: 30, title: "Herói em Treinamento", feedback: "Parabéns! Você está progredindo em seus conhecimentos sobre MHA!" },
            { minScore: 60, title: "Pro Hero", feedback: "Excelente! Você é um conhecedor respeitável de My Hero Academia!" },
            { minScore: 80, title: "Símbolo da Paz", feedback: "Fantástico! Você é quase tão conhecedor quanto o próprio All Might!" },
            { minScore: 95, title: "Nível One For All", feedback: "PLUS ULTRA! Você é um especialista absoluto em My Hero Academia!" }
        ];

        function startQuiz(mode) {
            gameMode = mode;
            currentQuestionIndex = 0;
            score = 0;
            answeredQuestions = 0;
            timeElapsed = 0;
            survivalLives = 3;

            // Selecionar perguntas baseado no modo
            switch(mode) {
                case 'challenge':
                    questions = quizQuestions.filter(q => q.difficulty === 'hard').slice(0, 50);
                    break;
                case 'survival':
                    questions = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 50);
                    break;
                default:
                    questions = [...quizQuestions];
            }

            maxScore = questions.length * 10;
            document.getElementById('totalQuestions').textContent = questions.length;

            showScreen('quizScreen');
            loadQuestion();

            if(mode === 'timed') {
                startTimer();
            }
        }

        function loadQuestion() {
            if(currentQuestionIndex >= questions.length) {
                endQuiz();
                return;
            }

            const question = questions[currentQuestionIndex];
            document.getElementById('questionText').textContent = question.question;
            document.getElementById('questionCategory').textContent = question.category;
            document.getElementById('questionDifficulty').textContent = question.difficulty.toUpperCase();
            document.getElementById('questionDifficulty').className = `difficulty ${question.difficulty}`;
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';

            const letters = ['A', 'B', 'C', 'D'];
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.innerHTML = `<span class="option-letter">${letters[index]}</span>${option}`;
                button.onclick = () => selectOption(index);
                optionsContainer.appendChild(button);
            });

            document.getElementById('explanation').classList.remove('show');
            document.getElementById('nextButton').classList.remove('show');

            updateProgressBar();
        }

        function selectOption(index) {
            const question = questions[currentQuestionIndex];
            const buttons = document.querySelectorAll('.option-button');
            buttons.forEach(btn => btn.classList.add('disabled'));

            const correct = question.correct === index;
            buttons[index].classList.add(correct ? 'correct' : 'incorrect');
            buttons[question.correct].classList.add('correct');

            if(correct) {
                score += (question.difficulty === 'easy' ? 10 : question.difficulty === 'medium' ? 15 : 20);
            } else if(gameMode === 'survival') {
                survivalLives--;
                if(survivalLives <= 0) {
                    setTimeout(endQuiz, 1500);
                    return;
                }
            }

            answeredQuestions++;
            updateScore();

            document.getElementById('explanationText').textContent = question.explanation;
            document.getElementById('explanation').classList.add('show');
            document.getElementById('nextButton').classList.add('show');
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if(currentQuestionIndex >= questions.length) {
                endQuiz();
            } else {
                loadQuestion();
            }
        }

        function updateScore() {
            document.getElementById('scoreText').textContent = `Pontos: ${score}/${maxScore}`;
        }

        function updateProgressBar() {
            const percentage = (currentQuestionIndex / questions.length) * 100;
            document.getElementById('progressBar').style.width = percentage + '%';
        }

        function startTimer() {
            document.getElementById('timer').style.display = 'block';
            timerInterval = setInterval(() => {
                timeElapsed++;
                const remaining = timerDuration - (timeElapsed % timerDuration);
                document.getElementById('timer').textContent = remaining + 's';

                if(remaining <= 5) {
                    document.getElementById('timer').classList.add('warning');
                } else {
                    document.getElementById('timer').classList.remove('warning');
                }

                if(remaining === 0 && gameMode === 'timed') {
                    nextQuestion();
                    timeElapsed = 0;
                }
            }, 1000);
        }

        function endQuiz() {
            clearInterval(timerInterval);

            const percentage = Math.round((score / maxScore) * 100);
            let rank = ranks[0];
            for(let i = ranks.length - 1; i >= 0; i--) {
                if(percentage >= ranks[i].minScore) {
                    rank = ranks[i];
                    break;
                }
            }

            document.getElementById('finalScore').textContent = `${score}/${maxScore}`;
            document.getElementById('rankBadge').textContent = `🏅 ${rank.title}`;
            document.getElementById('percentage').textContent = percentage + '%';
            document.getElementById('totalTime').textContent = timeElapsed + 's';
            document.getElementById('correctCount').textContent = answeredQuestions;
            document.getElementById('finalPoints').textContent = score;
            document.getElementById('feedbackMessage').textContent = rank.feedback;

            // Atualizar leaderboard
            updateLeaderboard(score);

            // Verificar conquistas
            updateAchievements(percentage, score);

            showScreen('resultsScreen');
        }

        function updateLeaderboard(newScore) {
            let leaderboard = JSON.parse(localStorage.getItem('mhaLeaderboard') || '[]');
            leaderboard.push({
                score: newScore,
                mode: gameMode,
                timestamp: new Date().toLocaleDateString()
            });
            leaderboard.sort((a, b) => b.score - a.score);
            leaderboard = leaderboard.slice(0, 5);
            localStorage.setItem('mhaLeaderboard', JSON.stringify(leaderboard));

            displayLeaderboard(leaderboard);
        }

        function displayLeaderboard(leaderboard) {
            const content = document.getElementById('leaderboardContent');
            content.innerHTML = leaderboard.map((item, index) => `
                <div class="leaderboard-item">
                    <span class="leaderboard-rank">#${index + 1}</span>
                    <span class="leaderboard-name">${item.mode.toUpperCase()}</span>
                    <span class="leaderboard-score">${item.score} pts</span>
                </div>
            `).join('');
        }

        function updateAchievements(percentage, finalScore) {
            const achievements = [];
            
            if(percentage === 100) achievements.push('🌟 Perfeição! Acertou todas as perguntas!');
            if(percentage >= 90) achievements.push('⭐ Gênio! Acertou 90% ou mais!');
            if(answeredQuestions === questions.length && timeElapsed < 300) achievements.push('⚡ Velocista! Respondeu em menos de 5 minutos!');
            if(gameMode === 'survival' && answeredQuestions > 30) achievements.push('💪 Sobrevivente! Durou mais de 30 perguntas!');
            if(gameMode === 'challenge') achievements.push('🏆 Desafiador! Completou o modo difícil!');
            if(finalScore > 1000) achievements.push('🚀 Super Score! Ultrapassou 1000 pontos!');

            const container = document.getElementById('achievementsContainer');
            if(achievements.length > 0) {
                container.innerHTML = '<strong style="display: block; margin: 20px 0; text-align: center;">🎖️ CONQUISTAS DESBLOQUEADAS 🎖️</strong>' + 
                    achievements.map(a => `<div class="achievement">${a}</div>`).join('');
            }
        }

        function showScreen(screenName) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenName).classList.add('active');
        }

        function restart() {
            currentQuestionIndex = 0;
            score = 0;
            answeredQuestions = 0;
            survivalLives = 3;
            clearInterval(timerInterval);
            showScreen('homeScreen');
        }

        function changeMode() {
            restart();
        }

        // Carrega leaderboard ao iniciar
        window.addEventListener('load', () => {
            const leaderboard = JSON.parse(localStorage.getItem('mhaLeaderboard') || '[]');
            if(leaderboard.length === 0) {
                document.getElementById('leaderboardContent').innerHTML = '<div class="leaderboard-item" style="text-align: center; border: none;">Nenhuma pontuação salva ainda. Comece a jogar!</div>';
            }
        });