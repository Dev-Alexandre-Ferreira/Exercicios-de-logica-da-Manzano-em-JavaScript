alert("Descubra o volume da caixa");

const comprimento = parseFloat(prompt("Digite o comprimento da caixa"));
const largura = parseFloat(prompt("Digite a largura da caixa"));
const altura = parseFloat(prompt("Digite a altura da caixa"));

function volume(comprimento, largura, altura) {
  return comprimento * largura * altura;
}

alert(
  `O volume da caixa que possui esses dados é de ${volume(
    comprimento,
    largura,
    altura
  )} cm³`
);
