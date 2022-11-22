let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let desejaAdc = false;

function adicionar() {
  let resposta = prompt(
    "Deseja adicionar uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
  );

  if (resposta != 1 && resposta != 2) {
    do {
      alert("Por favor, digite apenas (1) ou (2)");
      resposta = prompt(
        "Deseja adicionar uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
      );
    } while (resposta != 1 && resposta != 2);
  }

  if (resposta == 1) {
    desejaAdc = true;
  } else if (resposta == 2) {
    desejaAdc = false;
  }
}

adicionar();

do {
  let comida = prompt("Qual comida você deseja inserir? ");
  let categoria = Number(
    prompt(
      "Em qual categoria essa comida se encaixa? \n(1) - Frutas \n(2) - Laticínios \n(3) - Congelados \n(4) - Doces"
    )
  );

  if (categoria < 1 || categoria > 4) {
    do {
      alert("Por favor, digite apenas (1), (2), (3) ou (4)");
      categoria = Number(
        prompt(
          "Em qual categoria essa comida se encaixa? \n(1) - Frutas \n(2) - Laticínios \n(3) - Congelados \n(4) - Doces"
        )
      );
    } while (categoria < 1 || categoria > 4);
  }
  switch (categoria) {
    case 1:
      frutas.push(comida);
      break;
    case 2:
      laticinios.push(comida);
      break;
    case 3:
      congelados.push(comida);
      break;
    case 4:
      doces.push(comida);
  }
  adicionar();
} while (desejaAdc == true);

const result = `Frutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`;

alert(result);
