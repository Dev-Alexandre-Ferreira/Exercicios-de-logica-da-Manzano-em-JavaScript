alert('Soma os pares de 1 a 500');
let n1 = 1;
let soma = 0;

while (n1 <= 500) {
  if (n1 % 2 == 0) {
    soma = soma + n1;
  }
  n1++;
}

alert('A soma dos numeros pares de 1 a 500 é: ' + soma);
