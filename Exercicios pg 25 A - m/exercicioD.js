alert("Descubra a quantidade de litros Gastos");
const velocidade = parseFloat(prompt("Digite a velocidade média"));
const tempo = parseFloat(prompt("Digite o tempo gasto"));

function distancia(velocidade, tempo) {
  return tempo * velocidade;
}
function litrosCombustivel(velocidade, tempo) {
  return (velocidade * tempo) / 12;
}

const litros = litrosCombustivel(velocidade, tempo);

alert(`A velocidade média do carro foi de ${velocidade} Km/h.
O tempo gasto foi de ${tempo} horas. 
A distância percorrida foi de ${distancia(velocidade, tempo)} Km. 
E a quantidade de combustivel usados foi de ${litros.toFixed(2)} Litros`);
