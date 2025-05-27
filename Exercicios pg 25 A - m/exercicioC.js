alert("Descobindo o Volume de uma lata");

let raio = parseFloat(prompt("Digite o raio da lata em cm: "));
let altura = parseFloat(prompt("Digite a altura da lata cm: "));

let volume = 3.14 * (raio * raio) * altura;

alert(`O volume da lata é ${volume} L`);
