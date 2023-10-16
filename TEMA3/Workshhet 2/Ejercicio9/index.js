function simularLanzamientos(iteraciones) {

    let frecuencias = Array.from({ length: 6 }, () => Array(6).fill(0));


for (let i = 0; i < iteraciones; i++) {

        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;

        let suma = dado1 + dado2;

        frecuencias[dado1 - 1][dado2 - 1]++;
    }

    console.log("Frecuencia de combinaciones:");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            console.log(`(${i + 1}, ${j + 1}): ${frecuencias[i][j]}`);
        }
    }

    return frecuencias;
}

let tablaFrecuencias = simularLanzamientos(36000);

function mostrarTablaBidimensional(tabla) {
    console.log("Tabla Bidimensional de Combinaciones:");
    for (let i = 0; i < tabla.length; i++) {
        console.log(tabla[i].join('\t'));
    }
}

mostrarTablaBidimensional(tablaFrecuencias);
