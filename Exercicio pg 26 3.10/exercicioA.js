alert("Resultado do Produto e Soma");

const valorA = parseFloat(prompt("Digite o valor A"));
const valorB = parseFloat(prompt("Digite o valor B"));
const valorC = parseFloat(prompt("Digite o valor C"));
const valorD = parseFloat(prompt("Digite o valor D"));

function produto(valorA, valorC) {
  return valorA * valorC;
}

function soma(valorB, valorD) {
  return valorB + valorD;
}

alert(`O resultado do produto de ${valorA} com ${valorC} é ${produto(
  valorA,
  valorC
)}
E o resultado da soma de ${valorB} com ${valorD} é ${soma(valorB, valorD)}`);
