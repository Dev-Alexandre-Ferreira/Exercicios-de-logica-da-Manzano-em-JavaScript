alert("Digite o número para converter ao positivo");

let numeroDigitado = parseInt(
  prompt("Digite um número inteiro seja ele positivo ou não")
);

if (numeroDigitado < 0) {
  numeroDigitado = numeroDigitado * -1;
  alert("A versão positiva é: " + numeroDigitado);
} else {
  alert(`O numero ${numeroDigitado} já é positivo`);
}
