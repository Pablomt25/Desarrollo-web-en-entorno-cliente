function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return 'La cadena está formada solo por mayúsculas.' + '<br>';
    }
    else if (cadena === cadena.toLowerCase()) {
      return 'La cadena está formada solo por minúsculas.' + '<br>';
    }
    else {
      return 'La cadena es una mezcla de mayúsculas y minúsculas.';
    }
  }
  
  document.write(analizarCadena('PABLO')); 
  document.write(analizarCadena('pablo')); 
  document.write(analizarCadena('Pablo')); 
  