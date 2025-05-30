alert("Reajuste salarial");

const salarioMensal = parseFloat(
  prompt("Digite o valor do seu salario mensal")
);
const percentualReajuste = parseFloat(
  prompt("Digite quantos porcento será o reajsute")
);

function novoSalario(salarioMensal, percentualReajuste) {
  return salarioMensal * (percentualReajuste / 100) + salarioMensal;
}

let reajuste = novoSalario(salarioMensal, percentualReajuste);

alert(
  `O seu novo salario é de ${reajuste.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
