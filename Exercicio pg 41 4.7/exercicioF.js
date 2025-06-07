alert('Números em Ordem Crescentes');

let n1 = parseInt(prompt('Digite o primeiro número'));
let n2 = parseInt(prompt('Digite o segundo número'));
let n3 = parseInt(prompt('Digite o terceiro número'));

let valores = [n1, n2, n3];

valores.sort(function (a, b) {
  return a - b;
});

alert(
  `Os números em ordem crescente são ${valores[0]}, ${valores[1]}, ${valores[2]}`,
);
