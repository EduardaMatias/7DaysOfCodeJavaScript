let numero = Math.floor(Math.random() * 11);
let opcao;
let erros = 0;

opcao = prompt(
  "Qual o valor que você deseja chutar? \nDICA: É um número inteiro de 0 a 10"
);

if (opcao != numero) {
  alert(`Você tem mais DUAS tentativa(s)`);
  for (var i = 0; i < 2; i++) {
    opcao = prompt(
      "Qual o valor que você deseja chutar? \nDICA: É um número inteiro de 0 a 10"
    );

    if (opcao == numero) {
      alert("PARABÉNS! Você acertou.");
      break;
    }

    if( i == 1 ) {
        alert(`Não foi dessa vez, a resposta era ${numero}`)
    }
  }
} else {
  alert("PARABÉNS! Você acertou.");
}
