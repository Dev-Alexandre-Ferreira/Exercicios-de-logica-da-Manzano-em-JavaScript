alert('Número maior e menor');

let n1 = parseInt(prompt('Digite o primeiro número'));
let n2 = parseInt(prompt('Digite o segundo número'));
let n3 = parseInt(prompt('Digite o terceiro número'));
let n4 = parseInt(prompt('Digite o quarto número'));
let n5 = parseInt(prompt('Digite o quinto número'));

let valores = [n1, n2, n3, n4, n5];

valores.sort(function (a, b) {
  return a - b;
});

alert(`O maior número é ${valores[4]} e o menor ${valores[0]}`);
