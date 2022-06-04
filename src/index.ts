let edades: number[] = new Array(270);
let indice: number;
let menorValor: number = 19;
let mayorValor: number = 40;
let menoresDe21: number = 0;
let mayoresDe21: number = 0;

function getRandomArbitrary(): number {
  return Math.random() * (mayorValor - menorValor) + menorValor;
  // el random da valores de 0 a 1, sin incluir al uno. Entonces los de 40 quedarian afuera. Pero es un detalle menor
}

for (indice = 0; indice < 270; indice++) {
  edades[indice] = getRandomArbitrary();
  if (edades[indice] <= 21) {
    menoresDe21++;
  } else {
    mayoresDe21++;
  }
}

console.log("Cantidad de personas menores de 21 años es:  " + menoresDe21);
console.log("Cantidad de personas mayores de 21 años es: " + mayoresDe21);
console.log("Total de personas que ingresaron: " + edades.length);
//esta muy bien tu solucion
