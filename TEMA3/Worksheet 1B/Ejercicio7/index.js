function filtrarPorNumero(numeros, filtrar) {
    const filtrarNumeros = numeros.filter(numero => numero < filtrar);
    return filtrarNumeros;
    }

const resultado = filtrarPorNumero([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ,4);
console.log(resultado);
