let contadora = 1;
let acumula = 0;

while (contadora < 11) {
  let numero = parseInt(prompt('Digite um numero: '));
  acumula = acumula + numero;
  contadora++;
}

let total = acumula / 10;

alert(total);
