let inputPlayer1, inputPlayer2 = '';
let resultados = {
  pontucaoJogador1: {
    nomePlayer1: '',
    vitorias: 0,
    empates: 0,
    perdas: 1,
  },

  pontucaoJogador2: {
    nomeplayer2: '',
    vitorias: 0,
    empates: 0,
    perdas: 0,

  },
};


nPlayer1 = prompt('Digite o seu nome, meu caro  amigo!');
nPlayer2 =  prompt('Digite o  nome do outro  amigo!');
let palavraOne = prompt('Digite a sua palavra');
let palavrTwo = prompt('A vez do seu amigo, digitar')
let scorePlayer1 = computeScore(palavraOne);
let scorePlayer2  = computeScore(palavrTwo)
exibirResultado()


function computeScore(palavraJogador) {
  let pontos = 0;
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
        pontos += pontuacaoLetras[j];
      }
    }
  }

  return pontos;
}


function exibirResultado() {
  let {nomePlayer1} = resultados.pontucaoJogador1;
  let {nomeplayer2} = resultados.pontucaoJogador2;
  if (scorePlayer1 > scorePlayer2) {
    nomePlayer1 = nPlayer1;
    console.log(`Vitoria do jogador ${nomePlayer1}`)
  } else if (scorePlayer1 < scorePlayer2) {
    nomeplayer2 = nPlayer2 
    console.log(`Vitoria do jogador ${nomeplayer2}`)
  } else if(scorePlayer1 === scorePlayer2){
    console.log(`${nPlayer1} e ${nPlayer2} empataram`)
  }
}

