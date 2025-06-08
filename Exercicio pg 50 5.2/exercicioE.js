alert('Soma do fatorial de 15 números');

let i = 1;
let somatorioFatorial = 0;
let fatorial;
let multFatorial;

do {
  fatorial = 1;
  multFatorial = 1;

  do {
    fatorial = fatorial + multFatorial;
    multFatorial++;
  } while (multFatorial <= i);

  somatorioFatorial += fatorial;
  i += 2;
} while (i <= 10);

alert('O somatorio do fatorial é ' + somatorioFatorial);
