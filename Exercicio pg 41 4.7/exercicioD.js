alert("Média com Exame");

const notaUm = parseFloat(prompt("Digite a primeira nota:"));
const notaDois = parseFloat(prompt("Digite a segunda nota:"));
const notaTres = parseFloat(prompt("Digite a terceira nota:"));
const notaQuatro = parseFloat(prompt("Digite a quarta nota:"));
let notaExame;

function media(notaUm, notaDois, notaTres, notaQuatro) {
  return (notaUm + notaDois + notaTres + notaQuatro) / 4;
}

const total = media(notaUm, notaDois, notaTres, notaQuatro);

if (total >= 7) {
  alert("Aluno Aprovado");
} else {
  notaExame = parseFloat(prompt("Digite a nota do Exame: "));
  function mediaExame(soma, notaExame) {
    return total + notaExame;
  }

  if (mediaExame(total, notaExame) >= 5) {
    alert("Aluno Aprovado");
  } else {
    alert("Aluno Reprovado");
  }
}
