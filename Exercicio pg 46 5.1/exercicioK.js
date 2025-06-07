alert('Calculo area de uma residência');

let nome = prompt('Digite o comodo a ser calculado');
let largura = parseFloat(prompt('Digite a largura do comodo'));
let comprimento = parseFloat(prompt('Digite o comprimento do comodo'));
let novo = prompt('Deseja inserir um novo comodo?');
let area = largura * comprimento;
let novaArea = 0;
let acumuladora = 0;

if (novo === 'Não' || novo === 'não' || novo === 'N' || novo === 'n') {
  alert(`A area total do cômodo ${nome} é de ${area} m².`);
} else if (novo === 'Sim' || novo === 'sim' || novo === 'S' || novo === 's') {
  while (novo === 'Sim' || novo === 'sim' || novo === 'S' || novo === 's') {
    nome = prompt('Digite o comodo a ser calculado');
    largura = parseFloat(prompt('Digite a largura do comodo'));
    comprimento = parseFloat(prompt('Digite o comprimento do comodo'));
    novo = prompt('Deseja inserir um novo comodo?');
    novaArea = largura * comprimento;

    acumuladora = acumuladora + novaArea;
  }

  let total = area + acumuladora;

  alert(`A area total da casa é de ${total} m²`);
}
