class Juego {
    constructor(dimension) {
        this.dimension = dimension;
        this.tablero = this.crearTablero();
        this.posicionVacia = this.encontrarPosicionVacia();
    }

crearTablero() {
    const tablero = [];
    let contador = 1;

    for (let i = 0; i < this.dimension; i++) {
        const fila = [];
        for (let j = 0; j < this.dimension; j++) {
            fila.push(contador++);
        }
        tablero.push(fila);
    }

        tablero[this.dimension - 1][this.dimension - 1] = null;

        return tablero;
    }



    imprimirTablero() {
        for (let i = 0; i < this.dimension; i++) {
            console.log(this.tablero[i].join("\t"));
        }
    }

    encontrarPosicionVacia() {
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (this.tablero[i][j] === null) {
                    return { fila: i, columna: j };
                }
            }
        }
    }


    intercambiarPosiciones(fila1, columna1, fila2, columna2) {
        const temp = this.tablero[fila1][columna1];
        this.tablero[fila1][columna1] = this.tablero[fila2][columna2];
        this.tablero[fila2][columna2] = temp;
        this.posicionVacia = { fila: fila2, columna: columna2 };
    }

    moverNullArriba() {
        const { fila, columna } = this.posicionVacia;
        if (fila > 0) {
            this.intercambiarPosiciones(fila, columna, fila - 1, columna);
        }
    }

    moverNullAbajo() {
        const { fila, columna } = this.posicionVacia;
        if (fila < this.dimension - 1) {
            this.intercambiarPosiciones(fila, columna, fila + 1, columna);
        }
    }

    moverNullIzquierda() {
        const { fila, columna } = this.posicionVacia;
        if (columna > 0) {
            this.intercambiarPosiciones(fila, columna, fila, columna - 1);
        }
    }

    moverNullDerecha() {
        const { fila, columna } = this.posicionVacia;
        if (columna < this.dimension - 1) {
            this.intercambiarPosiciones(fila, columna, fila, columna + 1);
        }
    }
}


const juego = new Juego(4);
console.log("Solución del tablero");
juego.imprimirTablero();

console.log("");

console.log("Tablero mezclado");
juego.moverNullIzquierda();
juego.moverNullIzquierda();
juego.moverNullArriba();
juego.moverNullIzquierda();
juego.moverNullArriba();
juego.moverNullDerecha();
juego.moverNullArriba();
juego.moverNullDerecha();
juego.moverNullAbajo();
juego.imprimirTablero();

console.log("");
console.log("Intenta hacer el tablero");



juego.imprimirTablero();


