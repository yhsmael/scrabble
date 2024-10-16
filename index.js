let nomeJogador1 = '', nomeJogador2 = '';
let primeiroJogador;
let segundoJogador;

let resultados = {
  totalVitorias: 0,
  totalPerdas: 0,
  totalPontosempates: 0,
  pontucaoJogador1: {
    nome: '',
    vitorias: 0,
    empates: 0,
    perdas: 0,
  },
  pontucaoJogador2: {
    nome: '',
    vitorias: 0,
    empates: 0,
    perdas: 0,
  },
};
let { pontos } = resultados;
let playGameStart = confirm("Let's have fun?");
if (playGameStart) {
    nomeJogador1 = prompt('Insira o nome do jogador 1: ');
    nomeJogador2 = prompt('Insira o nome do jogador 2: ');
    resultados.pontucaoJogador1.nome = nomeJogador1;
    resultados.pontucaoJogador2.nome = nomeJogador2;
    let palavraJogador1 = prompt('Digite a palavra');
    let palavraJogador2 = prompt('Digite a outra palavra');
    primeiroJogador = computeScore(palavraJogador1);
    segundoJogador = computeScore(palavraJogador2);

    console.log(primeiroJogador);
    exibirResultado();
}else {
    document.write('')
}




exibirResultado()
console.log(`A pontuação do jogador é: ${primeiroJogador}`);
console.log(`A pontuação do segundo jogador é: ${segundoJogador}`);

function computeScore(palavraJogador) {
  const pontuacaoLetras = [
    1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
    10,
  ];
  const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < palavraJogador.length; i++) {
    let letraAtual = palavraJogador[i].toUpperCase();
    for (let j = 0; j < alfabeto.length; j++) {
      if (letraAtual === alfabeto[j]) {
       let  pontos = pontuacaoLetras[j];
        console.log(`posição: ${j}`);
        console.log(pontos);
      }
    }
  }

  return pontos;
}

function exibirResultado() {
  if (primeiroJogador > segundoJogador) {
    let vitoria = (resultados.pontucaoJogador1.vitorias += 1);
    document.write(`Vitoria: </br>Jogador 1: ${resultados.pontucaoJogador1.nome}`);
    resultados.pontucaoJogador2.perdas += 1;
  } else if (segundoJogador > primeiroJogador) {
    let vitoria = resultados.pontucaoJogador2.vitorias += 1;
    document.write(`Jogador 2: ${resultados.pontucaoJogador2.nome} 
    Vitorias: ${vitoria}`);
    resultados.pontucaoJogador1.perdas += 1;
  } else if(primeiroJogador === segundoJogador){
    let tie1 = resultados.pontucaoJogador1.empates += 1;
    let tie2 = resultados.pontucaoJogador2.empates += 1 ;
    document.write(
      ` Empatarão entre: </br>jogador 1: ${resultados.pontucaoJogador1.nome}<br>jogador 2: ${resultados.pontucaoJogador2.nome}`
    );
  }
}

