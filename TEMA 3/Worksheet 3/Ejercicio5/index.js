function encontrarPuntos(matriz) {
    let puntosDeSilla = [];

    for (let i = 0; i < 5; i++) {
        let maxEnFila = Math.max(...matriz[i]);

        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] === maxEnFila) {
                let minEnColumna = Math.min(...matriz.map(row => row[j]));
                if (matriz[i][j] === minEnColumna) {
                    puntosDeSilla.push([i, j]);
                }
            }
        }
    }

    return puntosDeSilla;
}

function imprimirPuntos(puntosDeSilla) {
    if (puntosDeSilla.length > 0) {
        console.log("Puntos encontrados en las coordenadas:");
        puntosDeSilla.forEach(punto => console.log(punto));
    } else {
        console.log("Sin puntos");
    }
}

const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const puntosDeSilla = encontrarPuntos(matriz);
imprimirPuntos(puntosDeSilla);
