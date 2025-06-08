let i = 1;
let somatoria = 0;
do {
  if (i % 2 == 0) {
    somatoria = somatoria + i;
    console.log(somatoria);
  }
  i++;
} while (i < 501);
