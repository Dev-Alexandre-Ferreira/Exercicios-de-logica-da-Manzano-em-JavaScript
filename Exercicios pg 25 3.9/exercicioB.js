alert("Convertendo Fahrenheit em Celcius");

let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenhei"));

let celcius = (fahrenheit - 32) * (5 / 9);

alert(`A conversão de ${fahrenheit}ºF em Celcius é de ${celcius}ºC`);
