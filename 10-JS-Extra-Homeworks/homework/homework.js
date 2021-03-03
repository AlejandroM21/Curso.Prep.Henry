// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto); // devuelve una matriz cuyos elementos son matrices correspondientes a los
  // [key, value]pares de propiedades enumerables que se encuentran directamente object
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var contador = {};
  for (var i = 0; i < string.length; i++) {
    if (contador[string[i]] === undefined) {
      contador[string[i]] = 1;
    } else {
      contador[string[i]]++;
    }
    // otra forma de realizarlo con operador ternario
    // contador[string[i]] == undefined ? contador[string[i]] = 1 : contador[string[i]]++
  }
  return contador;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayus = "";
  var min = "";
  var invertido = "";
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayus += s[i];
      //console.log(s[i])
    } else {
      min += s[i];
    }
  }
  return (invertido = mayus + min);
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var array = [];

  for (var i = 0; i < str.length; i++) {
    array.unshift(str[i]); // se crea un array para invertir el string hola luis = ["s", "i", "u", "l", " ", "a", "l", "o", "h"]
  }
  return array.join("").split(" ").reverse().join(" ");

  // el primer join une el array convirtiendolo en un string "siul aloh"
  // el split convierte el string y crea un array separando cada palabra  ["siul", "aloh"]
  // el reverse() reversa cada elemento del array ["aloh", "siul"]
  // volvemos aplicarle el join para convertirlo en un string que es lo que piden "aloh siul"
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var invertido = 0;
  var resto = numero;
  do {
    invertido = invertido * 10 + (resto % 10); // se extrae los ultimos digitos  dividiendo en 10 y tomando el resto %
    resto = Math.floor(resto / 10); // se aproxima hacia abajo el resto para luego sacarle el %
  } while (resto > 0); // realiza una comparacion para retornar el valor de invertido
  if (invertido === numero) {
    // comparamos el valor invertido con el real
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var strModificado = "";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {
      delete cadena[i];
    } else {
      strModificado += cadena[i];
    }
  }
  return strModificado;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  function comparar (a, b){  // realiza la comparacion de dos elemento de un array
    return a.length - b.length  // retornara segun su longitud
   }
  return arr.sort(comparar)  // el metodo sort ordena un arreglo

  //arr.sort(function(a, b) {
  //  return b.length - a.length
  // });
}
  
function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí

  var intersection = [];
  var PrimerArray = new Set(arreglo1);
  var segundoArray = new Set(arreglo2);
  
  intersection = ([...PrimerArray].filter(x => segundoArray.has(x)));
  return intersection;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};


