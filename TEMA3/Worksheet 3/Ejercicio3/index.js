function buscarTesoro(matriz) {
    let filaActual = 1;
    let columnaActual = 1;
    let contadorPistas = 0;

    while (true) {
        // Obtener la pista de la celda actual
        const pista = matriz[filaActual - 1][columnaActual - 1];

        // Mostrar la celda actual
        console.log(`Visitando celda (${filaActual}, ${columnaActual}) - Pista: ${pista}`);
        
        // Incrementar el contador de pistas
        contadorPistas++;

        // Verificar si se encontró el tesoro
        if (pista === filaActual * 10 + columnaActual) {
            console.log(`Tesoro encontrado en la celda (${filaActual}, ${columnaActual})!`);
            console.log(`Número total de pistas necesarias: ${contadorPistas}`);
            break;
        }

        // Actualizar las coordenadas para la próxima celda
        [filaActual, columnaActual] = [Math.floor(pista / 10), pista % 10];
    }
}

// Definir la matriz del tesoro
const matrizTesoro = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

// Iniciar la búsqueda del tesoro
buscarTesoro(matrizTesoro);
