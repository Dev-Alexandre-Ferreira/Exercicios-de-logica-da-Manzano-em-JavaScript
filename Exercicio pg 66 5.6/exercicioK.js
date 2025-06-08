let num = 1;
let fatorial = 1;
let i = 1;

for (num; num <= 10; num += 2) {
  for (i; i <= num; i++) {
    fatorial *= i;
  }

  console.log(`Fatorial de ${num} = ${fatorial}`);
}
