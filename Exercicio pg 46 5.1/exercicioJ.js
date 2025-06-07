let minimo = 50;
let somatoria = 0;
let contadora = 0;

while (minimo <= 70) {
  if (minimo % 2 == 0) {
    somatoria = somatoria + minimo;
    contadora++;
  }
  minimo++;
}
let media = somatoria / contadora;

alert(`A soma total dos numeros pares é de ${somatoria} e a média é ${media}`);
