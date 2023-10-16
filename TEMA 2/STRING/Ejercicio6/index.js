function encontrarSubcadena(cadena, subcadena) {
    let posicion = cadena.indexOf(subcadena);
  
    if (posicion !== -1) {
      return `La subcadena '${subcadena}' se encuentra en la posición ${posicion} de la cadena '${cadena}'.`;
    } else {
      return `La subcadena '${subcadena}' no se encuentra en la cadena '${cadena}'.`;
    }
  }
  
  let resultado = encontrarSubcadena('Hola, cómo estás?', 'mo');
  
 document.write(resultado);
  