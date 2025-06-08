alert('somatorio de média');

let acumuladora = 0;
let i = 0;
let somatorio = 0;
let c = 0;

let primaria = parseInt(prompt('Digite um numero'));

do {
  let numero = parseInt(prompt('Digite um numero'));
  if (numero > 0) {
    i = numero;
    c++;
    somatorio = somatorio + numero;
  } else {
    break;
  }
} while (i > 0);

let valoresLidos = c + 1;

let total = somatorio + primaria;

let media = total / (c + 1);

alert(`O número total de valores lidos ${valoresLidos}`);
alert(`A soma total dos valores é ${total}`);
alert(`A média dos valores lidos é ${media}`);
