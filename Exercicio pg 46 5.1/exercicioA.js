alert('Tabuada');
const tabuada = parseInt(prompt('Digite o numero que você quer ver a tabuada'));
let contadora = 1;
let resultado;

while (contadora < 11) {
  resultado = tabuada * contadora;
  alert(`${tabuada} X ${contadora} = ${resultado}`);
  contadora++;
}
