let casa = 1;
let graosNaCasa = 1;
let totalGraos = 0;

do {
  totalGraos += graosNaCasa;
  graosNaCasa *= 2; // dobra os grãos para a próxima casa
  casa++;
} while (casa <= 64);

console.log('Total de grãos de trigo no tabuleiro:', totalGraos);
