alert(' fatorial dos números ímpares entre 1 e 10');

let i = 1;
let fatorial;
let multFatorial;

do {
  fatorial = 1;
  multFatorial = 1;

  do {
    fatorial *= multFatorial;
    multFatorial++;
  } while (multFatorial <= i);

  console.log(`O fatorial de ${i} é ${fatorial}`);
  i += 2;
} while (i <= 10);
