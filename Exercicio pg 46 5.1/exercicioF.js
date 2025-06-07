alert('Potência');

let base = parseInt(prompt('Digite a base da potência'));
let expoente = parseInt(prompt('Digite o expoente da potência'));
let resultado = 1;
let i = 0;

while (i < expoente) {
  resultado *= base;
  i++;
}

alert(`O resultado da potência é ${resultado}.`);
