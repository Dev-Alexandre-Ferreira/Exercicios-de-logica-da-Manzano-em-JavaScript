alert('Resultado da potência');

let base = parseInt(prompt('Digite a base da potência'));
let expoente = parseInt(prompt('Digite o expoente da potência'));
let i = 1;
let resultado = 1;

for (i; i <= expoente; i++) {
  resultado *= base;
}

alert(`${base} elevada a ${expoente} é ${resultado}`);
