function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[ai].style.display="list-item";                 
        }
    }
}

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Prepare-se para descobrir curiosidades fascinantes sobre seres que TALVEZ não existam...",
        alternativas: [
            {
                texto: "Começar ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/b6/9e/27/b69e272483a5c765f6e7edd4e1c9489c.jpg"
    },
    {
        enunciado: "Essas majestosas criaturas são imponentes, com corpos cobertos por escamas que variam em cores, desde o verde esmeralda até o vermelho rubi. Suas asas são enormes e membranosas, permitindo que voem por longas distâncias, cortando os céus com graça e poder. Os dragões têm uma presença imponente, com cabeças grandes adornadas por chifres e olhos penetrantes que parecem brilhar com sabedoria antiga. Eles são conhecidos por sua capacidade de respirar fogo, um dom que os torna temidos por muitos. No entanto, além dessa ferocidade, os dragões também possuem uma inteligência aguçada e uma conexão profunda com a natureza. Alguns dragões são guardiões de tesouros, protegendo valiosos objetos em cavernas escondidas, enquanto outros são vistos como sábios conselheiros, oferecendo orientação a aqueles que se mostram dignos de sua atenção. Eles podem viver por séculos, acumulando conhecimento e experiências, e muitos acreditam que têm o poder de influenciar elementos da natureza, como tempestades e ventos. Em algumas lendas, os dragões têm a capacidade de se transformar em seres humanos, permitindo que interajam com os mortais de maneiras inesperadas. Sua presença é frequentemente associada a grandes aventuras, desafios e a busca por tesouros não apenas materiais, mas também de sabedoria e coragem. Essas criaturas, com sua combinação de beleza, poder e mistério, continuam a cativar a imaginação de todos que sonham com mundos fantásticos.",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            },
         
        ],
        imagem: "https://i.pinimg.com/474x/3e/68/9a/3e689a8b4c2ec1cbd05413e70882df9c.jpg" 
    },
    {
        enunciado: "Os vampiros, seres enigmáticos e fascinantes da mitologia e do folclore, são frequentemente descritos como criaturas da noite, com características marcantes que os tornam únicos. Comumente retratados como humanoides, eles possuem uma aparência cativante, mas sinistra, que esconde sua verdadeira natureza predadora. Uma das características mais icônicas dos vampiros são suas longas e afiadas presas, que se destacam quando se preparam para morder suas vítimas. Esses dentes não são apenas um símbolo de sua sede insaciável por sangue, mas também uma ferramenta essencial para sua sobrevivência. Além disso, muitos vampiros são descritos como tendo a capacidade de se transformar em morcegos, o que lhes confere uma habilidade sobrenatural de voar e se esgueirar pela noite, tornando-se praticamente invisíveis. Os vampiros também são conhecidos por sua pele pálida e fria, resultado de sua ausência de vida humana. Além disso, a imortalidade é uma das características mais fascinantes dos vampiros. Eles não envelhecem como os seres humanos e, assim, podem viver por séculos, acumulando conhecimento e experiências ao longo do tempo. Contudo, essa eternidade vem com suas próprias maldições, como a necessidade de se alimentar de sangue humano para sustentar sua existência. Os vampiros são frequentemente associados à escuridão e ao mistério, habitando castelos sombrios e cemitérios abandonados. No entanto, apesar de sua natureza aterrorizante, eles também despertam um certo fascínio, refletindo os medos e desejos humanos mais profundos. Assim, os vampiros permanecem como criaturas intrigantes que capturam a imaginação, simbolizando tanto o medo do desconhecido quanto a busca por poder e imortalidade. SE VER UM, NÃO ADIANTA CORRER, SE ESCONDA.",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/ed/d3/c6/edd3c67342a98ff66190c78b57e9bd5e.jpg" 
    },
    {
        enunciado: "As sereias, criaturas míticas que habitam as profundezas do oceano, são conhecidas por sua beleza hipnotizante e seu canto encantador. Com o corpo de uma mulher e a cauda de um peixe, elas possuem escamas brilhantes que refletem a luz do sol em mil cores, tornando-as quase etéreas. Seus longos cabelos flutuam como algas marinhas, e seus olhos, profundos e misteriosos, parecem esconder segredos do mar. Apesar de sua aparência deslumbrante, as sereias são também reconhecidas por sua natureza perigosa. O canto melodioso que emitem é uma arma poderosa, capaz de atrair marinheiros e navegantes para as águas traiçoeiras. Muitos relatos contam que aqueles que se deixaram levar pela música encantadora acabaram se afogando ou se perdendo em tempestades, atraídos pela promessa de um amor eterno ou aventuras em mares desconhecidos. Além disso, as sereias são protetoras de seus domínios aquáticos e não hesitam em usar sua astúcia para enganar os intrusos. Elas podem se esconder entre as rochas ou nas profundezas, aguardando o momento certo para atacar. Algumas lendas falam de sereias que, em um acesso de fúria, podem transformar-se em monstros marinhos, defendendo seu território contra qualquer ameaça. Assim, as sereias são uma combinação fascinante de beleza e perigo, simbolizando as forças misteriosas e muitas vezes incontroláveis da natureza. Ao mesmo tempo que nos atraem com seu encanto, nos alertam sobre os riscos de nos aventurarmos em seu mundo.",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/be/74/62/be74623d96b0edec9fb07a020b620ef6.jpg"
    },
    {
        enunciado: "Os unicórnios, seres lendários que habitam a imaginação de muitas culturas, são frequentemente descritos como cavalos majestosos com um único chifre espiralado na testa. Sua aparência é frequentemente associada à pureza e à graça; suas pelagens podem variar entre tons de branco, prateado e até mesmo em cores vibrantes, dependendo da lenda. Os olhos dos unicórnios são profundos e sábios, refletindo a inteligência e a bondade que se espera dessas criaturas místicas. Além de sua beleza, os unicórnios são muitas vezes considerados portadores de poderes mágicos. Seu chifre, chamado de alicorn, é acreditado ter propriedades curativas e purificadoras. Dizem que a presença de um unicórnio pode curar doenças, purificar águas contaminadas e até mesmo trazer sorte e prosperidade. Muitas histórias falam sobre a capacidade dos unicórnios de se esconder em florestas encantadas, aparecendo apenas para aqueles que têm um coração puro e um espírito inocente. Embora sejam geralmente vistos como criaturas benevolentes, algumas tradições também mencionam que os unicórnios podem ser protetores ferozes de seu território. Eles não toleram a maldade e podem se mostrar agressivos contra aqueles que ameaçam a natureza ou os inocentes. Nesse sentido, os unicórnios representam um equilíbrio entre a bondade e a força, simbolizando a luta pela justiça em um mundo muitas vezes caótico. Em essência, os unicórnios são muito mais do que apenas criaturas míticas; eles são símbolos de esperança, pureza e a magia que reside na natureza. Sua presença nas histórias nos lembra da importância da bondade e da conexão com o mundo ao nosso redor.",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/d7/3d/50/d73d50c38c48f2464f4c5d041d386859.jpg" 
    },
    {
        enunciado: "Os trolls, criaturas lendárias que habitam as florestas sombrias e as montanhas inóspitas, são frequentemente descritos como seres grandes e grotescos, com pele áspera e características deformadas. Eles são conhecidos por sua força descomunal e comportamento agressivo, sendo considerados uma das ameaças mais perigosas do folclore. Comumente retratados como criaturas solitárias, os trolls se escondem em cavernas ou debaixo de pontes, aguardando a oportunidade de atacar os viajantes incautos. Uma das características mais temidas dos trolls é sua natureza imprevisível. Enquanto alguns podem ser apenas brutais, outros são astutos e engenhosos, capazes de armar emboscadas para pegar suas vítimas desprevenidas. Eles são conhecidos por comer carne humana, e muitos contos falam sobre como capturavam viajantes para satisfazer sua fome insaciável. Além da força física, a sua capacidade de se camuflar no ambiente torna-os ainda mais perigosos, permitindo que se aproximem sem serem notados. Os trolls também têm uma fraqueza peculiar: a luz do sol. Muitas lendas dizem que, ao serem expostos à luz solar, eles se transformam em pedra, o que os torna ainda mais astutos ao evitar a luz durante o dia. Isso os leva a se tornar criaturas noturnas, aumentando o perigo que representam durante a escuridão. Além de sua força e ferocidade, os trolls são frequentemente associados a um comportamento territorial. Eles defendem ferozmente suas áreas de domínio e não hesitam em atacar qualquer um que se atreva a invadir seu espaço. Essa natureza protetora, combinada com sua brutalidade, faz dos trolls uma presença temível nas histórias e mitos. Em suma, os trolls são simbolizados como criaturas perigosas e implacáveis, representando os medos primordiais do desconhecido e da força da natureza. Sua imagem perdura na cultura popular como um aviso sobre os perigos que podem se ocultar nas sombras, além de serem um lembrete das consequências de se aventurar em territórios desconhecidos. ",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            },
        ],
        imagem: "https://i.pinimg.com/474x/c7/6d/1d/c76d1d77c89b4864ab8f21a4757e5049.jpg" 
    },
    {
        enunciado: "A bruxa comum do pântano é uma figura fascinante e aterrorizante do folclore, frequentemente associada a ambientes sombrios e úmidos, onde a vegetação densa e os nevoeiros densos criam uma atmosfera de mistério e medo. Essas bruxas são muitas vezes descritas como mulheres idosas, com aparência desgastada, cabelos desgrenhados e vestes feitas de peles e tecidos rústicos. Seus olhos, muitas vezes descritos como penetrantes e maliciosos, parecem saber mais do que deveriam. O perigo que as bruxas do pântano representam não está apenas em sua aparência, mas em suas habilidades mágicas e conhecimentos ocultos. Elas são frequentemente vistas como praticantes de magia negra, capazes de conjurar feitiços e maldições. Diz-se que podem manipular as forças da natureza, invocando tempestades ou causando doenças a quem cruzar seu caminho. Os ingredientes que usam em seus caldeirões muitas vezes incluem ervas venenosas e elementos encontrados apenas nas profundezas do pântano, tornando suas poções e feitiços ainda mais temíveis. Além de sua magia, as bruxas do pântano são conhecidas por serem astutas e manipuladoras. Elas podem enganar os incautos com encantos e ilusões, levando-os a acreditar que estão em segurança, enquanto, na verdade, estão sendo levados para uma armadilha. Muitas histórias falam sobre viajantes que, atraídos por promessas de conhecimento ou poder, acabaram se tornando prisioneiros de suas garras. As bruxas também estão profundamente ligadas à natureza e aos espíritos que habitam os pântanos. Essa conexão pode torná-las ainda mais perigosas, pois muitas vezes têm a capacidade de invocar criaturas sombrias, como serpentes, sapos e até mesmo espíritos vingativos, para ajudá-las em suas maldades. Em resumo, a bruxa comum do pântano é uma figura que encapsula o medo do desconhecido e do sobrenatural. Sua combinação de sabedoria, astúcia e poder mágico as torna criaturas verdadeiramente perigosas, simbolizando os riscos que podem advir da curiosidade e da busca por poder em um mundo repleto de mistérios.",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/c1/19/ad/c119ade82167ad1b82af2cd7c6b9e576.jpg"
    },
    {
        enunciado: "O Wendigo é uma criatura lendária oriunda do folclore dos povos indígenas da América do Norte, especialmente entre as tribos algonquinas. Assim como as lendas que o cercam, o Wendigo é envolto em mistério e terror, representando o medo do desespero, da fome e da perda de controle. Descrito como um ser alto e esquelético, com pele pálida e ressecada, o Wendigo possui características grotescas que evocam uma sensação de nojo e pavor. Seus olhos, frequentemente descritos como vazios e famintos, transmitem uma fome insaciável que é tanto física quanto espiritual. A natureza do Wendigo é profundamente perturbadora: ele é associado à canibalismo e à insanidade. Diz-se que um ser humano que cede à tentação de devorar a carne de outro durante tempos de extrema necessidade pode ser transformado em um Wendigo, perdendo sua humanidade e se tornando uma criatura monstruosa. Essa transformação simboliza a perda de controle e a corrupção do espírito, tornando o Wendigo um alerta sombrio sobre as consequências da avareza e da desumanização. O Wendigo é uma criatura horripilante, capaz de se mover rapidamente através das florestas e do gelo, muitas vezes aparecendo em momentos de solidão e desespero. Ele emite um som sobrenatural, que lembra um uivo ou um grito agonizante, que ecoa pela noite, trazendo um terror indescritível para aqueles que o ouvem. Sua presença é frequentemente associada a uma sensação de frio intenso, como se a própria vida estivesse sendo drenada do ambiente ao seu redor. Além de seu aspecto físico e de suas origens aterrorizantes, o Wendigo é também uma figura que simboliza a perda de controle sobre os instintos humanos e a transformação em algo que não é mais humano. Ele representa os perigos do egoísmo e da desumanidade, mostrando como essas características podem levar a consequências devastadoras. Em suma, o Wendigo é uma figura que evoca um profundo medo, simbolizando não apenas uma ameaça física, mas também os temores psicológicos que surgem quando se perde a conexão com a própria humanidade. Sua imagem permanece como um aviso sombrio sobre os limites que não devemos cruzar e os perigos que podem emergir do desespero e da solidão.",
        alternativas: [
            {
                texto: "Terminei ♡︎",
                afirmacao: "",
            },
        ],
        imagem: "https://i.pinimg.com/474x/ef/bd/25/efbd25ab8bda1cb8d05446e44d7934ac.jpg" 
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 
   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
   
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por ter acessado nosso site, espero que tenha gostado das curiosidades apresentadas!! Em breve traremos mais seres enigmáticos ♡︎♡︎";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 

   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
  
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        img.style.width = "280px"; 
        img.style.height = "auto"; 
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
