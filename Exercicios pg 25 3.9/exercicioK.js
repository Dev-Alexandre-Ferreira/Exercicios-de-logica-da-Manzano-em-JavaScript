alert("Conversor de Real para Dolar");

const quantidadeReais = parseFloat(
  prompt("Digite quantos reais você deseja converter para dolares")
);
const valorDolar = parseFloat(prompt("Digite o valor do dolar hoje"));

function converter(valorDolar, quantidadeReais) {
  return quantidadeReais / valorDolar;
}

const resultado = converter(valorDolar, quantidadeReais);

alert(
  `A conversão de ${quantidadeReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })} Reais em Dolar, é de ${resultado.toLocaleString("EUA", {
    style: "currency",
    currency: "USD",
  })}`
);
