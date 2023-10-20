class TresEnRaya {
  constructor() {
    this.tablero = Array(3).fill().map(() => Array(3).fill(' '));
    this.turno = 'X';
    this.jugadorX = 0;
    this.jugadorO = 0;
    this.juegoTerminado = false;
  }

  imprimirTablero() {
    for (let fila of this.tablero) {
      console.log(fila.join(' | '));
    }
  }

  marcarCasilla(fila, columna) {
    if (!this.juegoTerminado && this.tablero[fila][columna] === ' ') {
      this.tablero[fila][columna] = this.turno;
      this.jugadorX += this.turno === 'X' ? 1 : 0;
      this.jugadorO += this.turno === 'O' ? 1 : 0;
      this.imprimirTablero();
      if (this.verificarVictoria()) {
        console.log(`¡Jugador ${this.turno} ha ganado!`);
        this.juegoTerminado = true;
      } else if (this.jugadorX + this.jugadorO === 9) {
        console.log('¡Empate!');
        this.juegoTerminado = true;
      } else {
        this.turno = this.turno === 'X' ? 'O' : 'X';
        console.log(`Turno del jugador ${this.turno}`);
      }
    } else {
      console.log('Casilla ocupada o juego terminado. Inténtalo de nuevo.');
    }
  }

  verificarVictoria() {
    const lineasGanadoras = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const linea of lineasGanadoras) {
      const [a, b, c] = linea;
      if (
        this.tablero[a[0]][a[1]] !== ' ' &&
        this.tablero[a[0]][a[1]] === this.tablero[b[0]][b[1]] &&
        this.tablero[a[0]][a[1]] === this.tablero[c[0]][c[1]]
      ) {
        return true;
      }
    }
    return false;
  }
}

const juego = new TresEnRaya();
console.log('¡Comienza el juego de Tres en Raya!');
juego.imprimirTablero();
console.log('Turno del jugador X');

// Para jugar:
// juego.marcarCasilla(0, 0);

