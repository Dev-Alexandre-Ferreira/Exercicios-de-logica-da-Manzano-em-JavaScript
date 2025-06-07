alert('Boas Vindas!');
const nome = prompt('Digite seu Nome:');
const sexo = prompt('Digite o seu Sexo sendo M: Masculino e F: Feminino');
const idade = parseInt(prompt('Digite a sua idade'));

if (
  sexo == 'Masculino' ||
  sexo == 'masculino' ||
  sexo == 'M' ||
  sexo == 'm' ||
  sexo == 'Homem' ||
  sexo == 'homem'
) {
  alert(`Seja Bem-vindo Ilmo Sr. ${nome}`);
} else if (
  sexo == 'Feminino' ||
  sexo == 'feminino' ||
  sexo == 'F' ||
  sexo == 'f' ||
  sexo == 'Mulher' ||
  sexo == 'mulher'
) {
  alert(`Seja Bem-vinda Ilma Sra. ${nome}`);
}
