alert("Média Escolar");

const notaUm = parseFloat(prompt("Digite a primeira nota:"));
const notaDois = parseFloat(prompt("Digite a segunda nota:"));
const notaTres = parseFloat(prompt("Digite a terceira nota:"));
const notaQuatro = parseFloat(prompt("Digite a quarta nota:"));

function media(notaUm, notaDois, notaTres, notaQuatro) {
  return (notaUm + notaDois + notaTres + notaQuatro) / 4;
}

const total = media(notaUm, notaDois, notaTres, notaQuatro);

if (total >= 5) {
  alert(`Aluno aprovado, sua média foi de ${total}`);
} else {
  alert(`Aluno reprovado, sua média foi de ${total}`);
}
