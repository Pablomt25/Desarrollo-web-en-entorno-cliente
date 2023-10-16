function borraRepetidos(array) {
    const set = new Set(array);
  
    const unicoArray = [...set];
  
    return unicoArray;
  }
  const array1 = [4, 5, 10, 4, 10, 2];
  const resultado = borraRepetidos(inputArray);
  console.log(resultado);
  