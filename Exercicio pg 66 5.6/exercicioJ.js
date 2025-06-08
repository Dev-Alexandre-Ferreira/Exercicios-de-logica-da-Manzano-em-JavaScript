let celcius = 10;

for (celcius; celcius <= 100; celcius + celcius) {
  let farenheit = (9 * celcius + 160) / 5;
  console.log(`${celcius} ºC = ${farenheit} ºF`);
  celcius += 10;
}
