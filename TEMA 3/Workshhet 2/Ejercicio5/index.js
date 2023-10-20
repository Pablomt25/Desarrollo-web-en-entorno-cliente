function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crearArrayAleatorio() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(generarNumeroAleatorio(1, 1000));
    }
    return array;
}

function organizarParesImpares(array) {
    let pares = array.filter(numero => numero % 2 === 0);
    let impares = array.filter(numero => numero % 2 !== 0);
    return pares.concat(impares);
}

function paresImpares() {
    let numerosAleatorios = crearArrayAleatorio();

    console.log("Array Original:");
    console.log(numerosAleatorios);

    let arrayOrganizado = organizarParesImpares(numerosAleatorios);

    console.log("Array Organizado:");
    console.log(arrayOrganizado);
}

paresImpares();
