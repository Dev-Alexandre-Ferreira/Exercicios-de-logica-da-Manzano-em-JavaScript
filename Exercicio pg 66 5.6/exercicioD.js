alert('Soma dos números pares de 1 a 500');

let i = 1;
let soma = 0;

for (i; i <= 500; i++) {
  if (i % 2 == 0) {
    soma = soma + i;
  }
}
console.log(soma);
