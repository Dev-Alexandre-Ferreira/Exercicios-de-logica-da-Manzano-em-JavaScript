alert("Diferença do maior para menor");

let numeroUm = parseInt(prompt("Digite o primeiro valor:"));
let numeroDois = parseInt(prompt("Digite o segundo valor:"));
let diferenca;

if (numeroUm > numeroDois) {
  diferenca = numeroUm - numeroDois;
  alert(`A diferença de ${numeroUm} pelo ${numeroDois} é de ${diferenca}`);
} else if (numeroUm < numeroDois) {
  diferenca = numeroDois - numeroUm;
  alert(`A diferença de ${numeroDois} pelo ${numeroUm} é de ${diferenca}`);
} else {
  alert(`Os dois números são iguais!`);
}
