let val1, val2, op;

function initial() {
  do {
    val1 = Number(prompt("Digite o primeiro valor: "));
    val2 = Number(prompt("Digite o segundo valor: "));
  } while (isNaN(val1) || isNaN(val2));

  op = prompt("Digite a operação que deseja realizar, para sair digite 0: ");
  operacoes();
}

function operacoes() {
  switch (op) {
    case "+":
      soma();
      break;
    case "-":
      subtracao();
      break;
    case "x":
      multiplicacao();
      break;
    case "/":
      divisao();
      break;
    case "0":
      alert("Até a próxima!");
      break;
    case "/":
      divisao();
      break;
    default:
      invalidOp();
      break;
  }
}

function soma() {
  alert(val1 + val2);
}

function subtracao() {
  alert(val1 - val2);
}

function multiplicacao() {
  alert(val1 * val2);
}

function divisao() {
  alert(val1 / val2);
}

function invalidOp() {
  alert("Opção invalída");
  op = prompt("Digite a operação que deseja realizar: ");
  operacoes();
}

initial();
