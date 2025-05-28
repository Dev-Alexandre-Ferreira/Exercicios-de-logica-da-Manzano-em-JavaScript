alert("Soma e Produto dos números");

const valorA = parseInt(prompt("Digite o valor de A"));
const valorB = parseInt(prompt("Digite o valor de B"));
const valorC = parseInt(prompt("Digite o valor de C"));
const valorD = parseInt(prompt("Digite o valor de D"));

let soma1 = valorA + valorB;
let soma2 = valorA + valorC;
let soma3 = valorA + valorD;
let soma4 = valorB + valorC;
let soma5 = valorB + valorD;
let soma6 = valorC + valorD;

let mult1 = valorA * valorB;
let mult2 = valorA * valorC;
let mult3 = valorA * valorD;
let mult4 = valorB * valorC;
let mult5 = valorB * valorD;
let mult6 = valorC * valorD;

alert(`A soma de A + B é: ${soma1}
  A soma de A + C é: ${soma2}
  A soma de A + D é: ${soma3}
  A soma de B + C é: ${soma4}
  A soma de B + D é: ${soma5}
  A soma de C + D é: ${soma6}`);

alert(`O produto de A com B é: ${mult1}
  O produto de A com C é: ${mult2}
  O produto de A com D é: ${mult3}
  O produto de B com C é: ${mult4}
  O produto de B com D é: ${mult5}
  O produto de C com D é: ${mult6}`);
