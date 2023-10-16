function esPalindromo(cadena) {
    const cadenaProcesada = cadena.replace(/\s/g, '').toLowerCase();
  
    const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
    
    return cadenaProcesada === cadenaInvertida;
  }
  
  const resultado = esPalindromo("ala");
  
  document.write(resultado);
  