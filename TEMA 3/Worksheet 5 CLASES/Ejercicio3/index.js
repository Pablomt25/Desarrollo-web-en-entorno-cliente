class Movimiento {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  

  class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.ganadas = 0;
      this.perdidas = 0;
      this.movimiento = null;
    }
  
    hacerMovimiento(movimiento) {
      this.movimiento = movimiento;
    }
  
    quitarMovimiento() {
      this.movimiento = null;
    }
  }
  

  class Juego {
    constructor(jugador1, jugador2) {
      this.jugadores = [jugador1, jugador2];
    }
  
    turno() {
      const movimiento1 = this.jugadores[0].movimiento;
      const movimiento2 = this.jugadores[1].movimiento;
  
      if (movimiento1 && movimiento2) {
        if (movimiento1.nombre === movimiento2.nombre) {
          console.log("Empate");
        } else if (
          (movimiento1.nombre === "Piedra" && movimiento2.nombre === "Tijeras") ||
          (movimiento1.nombre === "Papel" && movimiento2.nombre === "Piedra") ||
          (movimiento1.nombre === "Tijeras" && movimiento2.nombre === "Papel")
        ) {
          console.log(`${this.jugadores[0].nombre} gana!!`);
          this.jugadores[0].ganadas++;
          this.jugadores[1].perdidas++;
        } else {
          console.log(`${this.jugadores[1].nombre} gana!!`);
          this.jugadores[1].ganadas++;
          this.jugadores[0].perdidas++;
        }
  
        this.jugadores.forEach((jugador) => jugador.quitarMovimiento());
      } else {
        console.log("Los dos jugadores han hecho el mismo movimiento");
      }
    }
  }
  
  const piedra = new Movimiento("Piedra");
  const papel = new Movimiento("Papel");
  const tijeras = new Movimiento("Tijeras");
  

  const jugador1 = new Jugador("Jugador 1");
  const jugador2 = new Jugador("JUgador 2");
  

  const partida = new Game(player1, player2);
  

  player1.hacerMovimiento(piedra);
  player2.hacerMovimiento(tijeras);
  

  partida.turno();