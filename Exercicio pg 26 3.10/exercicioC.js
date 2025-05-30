alert("Eleição Sindical");

const votosA = parseInt(prompt("Digite a quantidade de votos do candidato A"));
const votosB = parseInt(prompt("Digite a quantidade de votos do candidato B"));
const votosC = parseInt(prompt("Digite a quantidade de votos do candidato C"));
const votosBranco = parseInt(prompt("Digite a quantidade de votos branco"));
const votosNulos = parseInt(prompt("Digite a quantidade de votos nulos"));

const totalEleitores = votosA + votosB + votosC + votosBranco + votosNulos;

function candidatoA(votosA, totalEleitores) {
  return (votosA / 100) * totalEleitores;
}
function candidatoB(votosB, totalEleitores) {
  return (votosB / 100) * totalEleitores;
}
function candidatoC(votosC, totalEleitores) {
  return (votosC / 100) * totalEleitores;
}
function totalBranco(votosBranco, totalEleitores) {
  return (votosBranco / 100) * totalEleitores;
}
function totalNulos(votosNulos, totalEleitores) {
  return (votosNulos / 100) * totalEleitores;
}

const votosValidos = votosA + votosB + votosC;

alert(`Número total de Eleitores: ${totalEleitores}
  Porcentagem de votos Válidos: ${votosValidos}%
  Porcentagem de votos candidato A: ${candidatoA(votosA, totalEleitores)}%
  Porcentagem de votos candidato B: ${candidatoB(votosB, totalEleitores)}%
  Porcentagem de votos candidato C: ${candidatoC(votosC, totalEleitores)}%
  Porcentagem de votos nulos: ${totalNulos(votosNulos, totalEleitores)}%
  porcentagem de votos brancos ${totalBranco(votosNulos, totalEleitores)}%
`);
