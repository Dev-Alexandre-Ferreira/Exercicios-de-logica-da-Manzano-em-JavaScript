alert('Potência de 3 de 0 até 15');
let i = 0;
let expoente = 0;
let resultado = 1;
console.log(resultado);
for (expoente; expoente <= 15; expoente++) {
  for (i; i <= expoente; i++) {
    resultado *= 3;
    console.log(resultado);
  }
}
