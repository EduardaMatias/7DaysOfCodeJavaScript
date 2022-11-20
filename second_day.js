let nome = prompt("Qual é seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome} você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let likeLanguage = prompt(
  `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`
);

likeLanguage == 1
  ? alert("Muito bom! Continue estudando e você terá muito sucesso.")
  : likeLanguage == 2
  ? alert(" Ahh que pena... Já tentou aprender outras linguagens?")
  : alert("Opção invalida.");
