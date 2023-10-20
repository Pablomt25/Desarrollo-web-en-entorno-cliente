//1
const array = [1,2,3,4,5,6,7,8,9];
console.log(Math.max(...array));

//2
const arrayString = ["Pablo","Jorge","Teodoro"];

function palabraMasLarga(array) {
    var palabraLarga = "";

    array.forEach(function(palabra) {
        if(palabra.length > palabraLarga.length) {
        palabraLarga = palabra;
        }
    });

    return palabraLarga;
    }

console.log(palabraMasLarga(arrayString));

//3
let resultadoPares = [];

for (let numero of array) {
  if (numero % 2 === 0) {
    resultadoPares.push(numero);
  }
}

console.log(resultadoPares);


//4
let resultadoImpares = [];

for (let numero of array) {
  if (numero % 2 != 0) {
    resultadoImpares.push(numero);
  }
}

console.log(resultadoImpares);


//5
const arrayIs = ["isla","anais","paco","isabel"];

var palabrasConIs = arrayIs.filter(function(palabra) {
    return palabra.includes("is");
});

console.log(palabrasConIs);

//6
let resultadoentre3 = [];

for (let numero of array) {
  if (numero % 3 === 0) {
    resultadoentre3.push(numero);
  }
}

console.log(resultadoentre3);


//7
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const resultado = array1.concat(array2);

console.log(resultado);


//8
const array3 = [1, 4, 3];
const array4 = [4, 5, 6];

const resultado8 = array3.concat(array4);

resultado.sort((a, b) => a - b);

console.log(resultado8);


//9


//10
let miMatriz = ["segunda", "tercera", "cuarta"];

miMatriz.unshift("nuevaPrimera");

console.log(miMatriz);

//11
let miMatriz2 = ["manzana", "naranja", "plátano", "uva"];

miMatriz2 = miMatriz2.map(elemento => elemento.includes("na") ? "pera" : elemento);

console.log(miMatriz2);

