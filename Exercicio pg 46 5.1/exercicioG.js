let valor1 = 1;
let valor2 = 0;
let valor3 = 0;
let i = 1;

while (i < 16) {
  valor1 = valor1 + valor3;
  console.log(valor1);
  valor2 = valor1;
  valor1 = valor3;
  valor3 = valor2;
  i++;
}
