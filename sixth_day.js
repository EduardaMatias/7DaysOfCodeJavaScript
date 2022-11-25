let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let desejaAdc = false;
let desejaRemover = false;
let indice;

function adicionar() {
  let adicionar = prompt(
    "Deseja adicionar uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
  );

  if (adicionar != 1 && adicionar != 2) {
    do {
      alert("Por favor, digite apenas (1) ou (2)");
      adicionar = prompt(
        "Deseja adicionar uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
      );
    } while (adicionar != 1 && adicionar != 2);
  }

  if (adicionar == 1) {
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
        break;
    }

    remover();
  } else if (adicionar == 2) {
    return;
  }
}

function remover() {
  let remover = prompt(
    "Deseja remover uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
  );

  if (remover != 1 && remover != 2) {
    do {
      alert("Por favor, digite apenas (1) ou (2)");
      remover = prompt(
        "Deseja remover uma comida na sua lista de compras? \n(1) - SIM \n(2) - NÃO"
      );
    } while (remover != 1 && remover != 2);
  }

  if (remover == 1) {
    let item = prompt("Qual comida você deseja remover?");
    let categoriaRemove = Number(
      prompt(
        "Em qual categoria essa comida se encaixa? \n(1) - Frutas \n(2) - Laticínios \n(3) - Congelados \n(4) - Doces"
      )
    );

    if (categoriaRemove < 1 || categoriaRemove > 4) {
      do {
        alert("Por favor, digite apenas (1), (2), (3) ou (4)");
        categoriaRemove = Number(
          prompt(
            "Em qual categoria essa comida se encaixa? \n(1) - Frutas \n(2) - Laticínios \n(3) - Congelados \n(4) - Doces"
          )
        );
      } while (categoriaRemove < 1 || categoriaRemove > 4);
    }

    switch (categoriaRemove) {
      case 1:
        indice = frutas.indexOf(item);
        if (indice < 0) {
          alert("Item não encontrado");
        } else {
          frutas.splice(indice, 1);
          alert(
            `Item removido com sucesso: \n\nLISTA DE COMPRAS \n--- \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
          );
        }
        break;
      case 2:
        indice = laticinios.indexOf(item);
        if (indice < 0) {
          alert("Item não encontrado");
        } else {
          laticinios.splice(indice, 1);
          alert(
            `Item removido com sucesso: \n\nLISTA DE COMPRAS \n--- \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
          );
        }
        break;
      case 3:
        indice = congelados.indexOf(item);

        if (indice < 0) {
          alert("Item não encontrado");
        } else {
          congelados.splice(indice, 1);
          alert(
            `Item removido com sucesso: \n\nLISTA DE COMPRAS \n--- \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
          );
        }

        break;
      case 4:
        indice = doces.indexOf(item);

        if (indice < 0) {
          alert("Item não encontrado");
        } else {
          doces.splice(indice, 1);
          alert(
            `Item removido com sucesso: \n\nLISTA DE COMPRAS \n--- \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
          );
        }
        break;
    }
    adicionar();
  } else if (remover == 2) {
    adicionar();
  }
}

adicionar();

alert(
  `LISTA DE COMPRAS \n--- \nFrutas: ${frutas} \nLaticínios: ${laticinios} \nCongelados: ${congelados} \nDoces: ${doces}`
);
