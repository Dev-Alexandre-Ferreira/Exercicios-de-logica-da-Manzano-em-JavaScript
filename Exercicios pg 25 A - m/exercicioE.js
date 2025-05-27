alert("Pagamento de Prestação");

const divida = parseFloat(prompt("Digite o valor da sua prestação"));
const taxa = parseFloat(prompt("Digite o percentual da taxa a ser cobrado"));
const diasEmAtraso = parseInt(prompt("Digite a quantos dias está trasado"));

function resultado(divida, taxa, diasEmAtraso) {
  return divida + ((divida * taxa) / 100) * diasEmAtraso;
}

const valorFinal = resultado(divida, taxa, diasEmAtraso);

alert(
  `O valor total a ser pago é de ${valorFinal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
