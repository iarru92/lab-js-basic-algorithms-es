// Ejercicio 1

//1.Nombres y entradas

let hacker1 = "Iván";
console.log("El nombre del conductor es: " + hacker1);

let hacker2 = "Adrián";
console.log("El nombre del navegante es: " + hacker2);

//2.Condicionales

if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor tiene el nombre más largo, tiene + ${hacker1.length} caracteres.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `Parece que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres.`
  );
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`
  );
}

//3.Loops

let hacker1Mayusculas = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Mayusculas += hacker1[i].toUpperCase();
  if (i !== hacker1.length - 1) {
    hacker1Mayusculas += " ";
  }
}

let hacker2Inverso = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Inverso += hacker2[i];
}

console.log(hacker2Inverso);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("El nombre del conductor va primero.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, el navegador, voy primero definitivamente.");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

let parrafos = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis magna vel sapien maximus dictum. Duis elementum enim ac tellus sollicitudin, eu suscipit tellus faucibus. Quisque ac lacus diam. Sed pharetra ex sit amet augue rutrum, sed consectetur purus molestie. Duis a condimentum orci, in pulvinar massa. Etiam in lorem vitae sem vehicula tincidunt sed vel ligula. Cras dolor orci, aliquet a nisl a, tincidunt luctus ante. Curabitur et efficitur nibh, a faucibus dolor. Ut sit amet consectetur lacus, id congue dolor. Duis id erat sapien. Nullam urna diam, egestas a rutrum at, dignissim a ante. Sed dapibus vel tellus sit amet egestas. Aliquam erat volutpat.

Ut ullamcorper semper condimentum. Nulla a mattis purus. Curabitur dapibus lacinia ex, euismod venenatis libero aliquam eget. Aliquam ac ex vitae enim porta venenatis nec a massa. Aliquam rhoncus porta viverra. Donec ac justo massa. Nam vitae nisi eu nibh accumsan porta. Morbi nec nisi eget tortor sodales finibus.

Morbi sed volutpat ligula. Curabitur imperdiet metus vel urna pulvinar mattis. Aenean volutpat, erat at rhoncus pharetra, nisi odio consectetur augue, sodales cursus enim ante id erat. Sed in purus velit. Morbi nec nibh placerat, condimentum nisi non, tristique turpis. Donec tempus vulputate volutpat. Aliquam erat volutpat. Vivamus ac semper orci. Etiam faucibus elit nulla, eget faucibus eros pharetra at. Aenean enim mauris, scelerisque sit amet ultricies eget, imperdiet at leo. Donec eu nunc nibh. Fusce ut tortor bibendum, ultricies mauris eget, feugiat velit. Phasellus dui nisl, porttitor eget ante vel, posuere consectetur urna. Phasellus eget mollis elit.`;

console.log(parrafos);

function contarPalabras(parrafos) {
  parrafos = parrafos.trim();
  let palabras = parrafos.split(/\s+/);
  let numeroPalabras = palabras.length;
  return numeroPalabras;
}
console.log("Número de palabras: " + contarPalabras(parrafos));

let expresionRegular = /\bet\b/gi;
let coincidencias = parrafos.match(expresionRegular);
let numeroApariciones = coincidencias === null ? 0 : coincidencias.length;
console.log(
  `La palabra "et" aparece ${numeroApariciones} veces en el párrafo.`
);

let phraseToCheck = "A man, a plan, a canal, Panama";

function limpiarCadena(cadena) {
  return cadena.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

function esPalindromo(cadena) {
  let cadenaLimpia = limpiarCadena(cadena);
  let longitud = cadenaLimpia.length;

  for (let i = 0; i < longitud / 2; i++) {
    if (cadenaLimpia[i] !== cadenaLimpia[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
}

if (esPalindromo(phraseToCheck)) {
  console.log(`"${phraseToCheck}" es un palíndromo.`);
} else {
  console.log(`"${phraseToCheck}" no es un palíndromo.`);
}
