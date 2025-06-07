alert('Equação do segundo Grau');

const valorA = parseInt(prompt('Digite o valor de A:'));
const valorB = parseInt(prompt('Digite o valor de B:'));
const valorC = parseInt(prompt('Digite o valor de C:'));

if (valorA === 0) {
  alert('valor A deve ser diferente de zero.');
} else {
  let delta = valorB * valorB - 4 * valorA * valorC;

  if (delta < 0) {
    alert('A equação não possui raizes reais');
  } else {
    const x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    const x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

    alert(`\nRaiz de x1: ${x1} \nRaiz de x2: ${x2}`);
  }
}
