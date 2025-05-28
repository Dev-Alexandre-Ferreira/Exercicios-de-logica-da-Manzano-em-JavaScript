alert("Conversor de Dolar para Real");

const valorDolar = parseFloat(prompt("Digite o valor do dolar hoje"));
const quantidadeDolar = parseFloat(
  prompt("Digite quantos dolares você quer converter")
);

function converter(valorDolar, quantidadeDolar) {
  return quantidadeDolar * valorDolar;
}

const resultado = converter(valorDolar, quantidadeDolar);

alert(
  `A conversão de ${quantidadeDolar.toLocaleString("EUA", {
    style: "currency",
    currency: "USD",
  })} dolares em reais, é de ${resultado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRl",
  })}`
);
