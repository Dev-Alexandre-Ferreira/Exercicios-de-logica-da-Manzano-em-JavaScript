alert('Resultado da divisão');

let dividendo = parseFloat(prompt('Digite o numero que será o dividendo'));
let divisor = parseFloat(prompt('Digite o numero que será o divisor'));
let quociente = 0;

do {
  if (dividendo >= divisor) {
    dividendo = dividendo - divisor;
    quociente = quociente + 1;
  }
} while (dividendo >= divisor);

alert(quociente);
