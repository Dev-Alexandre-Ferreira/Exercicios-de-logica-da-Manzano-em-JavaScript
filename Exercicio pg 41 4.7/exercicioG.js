alert('Números divisiveis por 2 e 3');

const n1 = parseInt(prompt('Digite o primeiro número'));
const n2 = parseInt(prompt('Digite o segundo número'));
const n3 = parseInt(prompt('Digite o terceiro número'));
const n4 = parseInt(prompt('Digite o quarto número'));

if (n1 % 2 == 0 && n1 % 3 == 0) {
  alert(n1);
}

if (n2 % 2 == 0 && n2 % 3 == 0) {
  alert(n2);
}

if (n3 % 2 == 0 && n3 % 3 == 0) {
  alert(n3);
}

if (n4 % 2 == 0 && n4 % 3 == 0) {
  alert(n4);
}
