alert("Soma dos quadrados");
const valor1 = parseInt(prompt("Digite o primeiro valor"));
const valor2 = parseInt(prompt("Digite o segundo valor"));
const valor3 = parseInt(prompt("Digite o terceiro valor"));

function somaQuadrado(valor1, valor2, valor3) {
  return valor1 * valor1 + valor2 * valor2 + valor3 * valor3;
}

const resultado = somaQuadrado(valor1, valor2, valor3);

alert(
  `A soma dos quadrados de ${valor1} , ${valor2} e ${valor3} é ${resultado}`
);
