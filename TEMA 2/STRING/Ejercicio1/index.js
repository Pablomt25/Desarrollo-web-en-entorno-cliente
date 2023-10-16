function invertirCadena(cad) {
  var nuevaCadena = "";
  for (var i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i];
  }
  return nuevaCadena;
}

document.write(invertirCadena('pablo moreno') + '<br>');


function invertirPalabra(palabra) {
  var nuevaPalabra = "";
  for (var i = palabra.length - 1; i >= 0; i--) {
    nuevaPalabra += palabra[i];
  }
  return nuevaPalabra;
}

document.write(invertirPalabra("hola") + '<br>');



function encuentraPalabraMasLarga(cadena) {
  let palabras = cadena.split(' ');

  let longitudMasLarga = 0;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > longitudMasLarga) {
      longitudMasLarga = palabras[i].length;
    }
  }

  return longitudMasLarga;
}


document.write(encuentraPalabraMasLarga('Hola soy Pablo') + ('<br>'));


function filtraPalabrasMasLargas(cad_arg, i) {
  const palabras = cad_arg.split(/\s+/);
  const palabrasMasLargas = palabras.filter(palabra => palabra.length > i);

  return palabrasMasLargas.length;
}
const cadena = "Hola mundo, esta es una cadena de ejemplo.";
const longitudMinima = 4;

const resultado = filtraPalabrasMasLargas(cadena, longitudMinima);
document.write(`Número de palabras con longitud mayor a ${longitudMinima}: ${resultado}`);




function convertir(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.write(convertir("pablo"));