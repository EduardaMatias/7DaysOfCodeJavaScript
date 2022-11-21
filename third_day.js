let carreira;
let aprender;
let desejo;
let tecnologia;
let loop = true;

do {
  carreira = prompt(
    "Qual carreira você deseja seguir? \n(1) Back-end \n(2) Front-end"
  );
} while (carreira != 1 && carreira != 2);

if (carreira == 2) {
  do {
    aprender = prompt("O que você deseja aprender? \n(1) Vue.js (2) React.js");
  } while (aprender != 1 && aprender != 2);
} else {
  do {
    aprender = prompt("O que você deseja aprender? \n(1) C# (2) Java");
  } while (aprender != 1 && aprender != 2);
}

do {
  desejo = prompt(
    "O que você deseja? \n(1) Seguir se especializando na área escolhida \n(2) Seguir se desenvolvendo para se tornar Fullstack."
  );
} while (desejo != 1 && desejo != 2);

desejo == 1
  ? alert("Parabéns! Você escolheu seguir se especializando na área escolhida!")
  : alert(
      "Parabéns, você escolheu seguir se desenvolvendo para se tornar Fullstack"
    );

do {
  tecnologia = prompt(
    "Quais são as tecnologias nas quais você gostaria de se especializar?"
  );
  alert(`${tecnologia} é uma boa opção!`)
  let continuarRespondendo = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? \nDigite OK se deseja continuar, caso contrário aperte qualquer tecla."
  );

  if (continuarRespondendo.toLowerCase() != "ok") {
    loop = false;
  }
} while (loop == true);

