let valores = [];
let numero = parseInt(
  prompt('Informe um número positivo (ou número negativo para encerrar):'),
);

while (numero >= 0) {
  valores.push(numero);
  numero = parseInt(
    prompt('Informe outro número positivo (ou número negativo para encerrar):'),
  );
}

if (valores.length === 0) {
  alert('Nenhum valor positivo foi informado.');
} else {
  valores.sort(function (a, b) {
    return a - b;
  });

  alert(
    `O menor valor é ${valores[0]} e o maior valor é ${
      valores[valores.length - 1]
    }`,
  );
}
