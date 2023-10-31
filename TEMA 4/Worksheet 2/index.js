class Libro {
    constructor(titulo, genero, autor) {
      this.titulo = titulo;
      this.genero = genero;
      this.autor = autor;
      this.leido = false;
      this.fechaLectura = null;
    }
  }
  
  class ListaDeLibros {
    constructor() {
      this.libros = [];
      this.librosLeidos = 0;
      this.librosNoLeidos = 0;
      this.libroActual = null;
      this.ultimoLibroLeido = null;
      this.proximoLibro = null;
    }
  
    añadir(libro) {
      this.libros.push(libro);
      this.librosNoLeidos++;
      if (!this.libroActual) {
        this.libroActual = libro;
        this.proximoLibro = libro;
      }
    }
  
    libroTerminado() {
      if (this.libroActual) {
        this.libroActual.leido = true;
        this.librosLeidos++;
        this.librosNoLeidos--;
  
        this.libroActual.fechaLectura = new Date();
        this.ultimoLibroLeido = this.libroActual;
  
        this.libroActual = null;
        for (const libro of this.libros) {
          if (!libro.leido) {
            this.proximoLibro = libro;
            break;
          }
        }
      }
    }
  
    mostrarEstado() {
      console.log('Libros leídos:' + this.librosLeidos);
      console.log('Libros no leídos:' + this.librosNoLeidos);
      console.log(`Libro actual: ${this.libroActual ? this.libroActual.titulo : 'Ninguno'}`);
      console.log(`Último libro leído: ${this.ultimoLibroLeido ? this.ultimoLibroLeido.titulo : 'Ninguno'}`);
      console.log(`Próximo libro a leer: ${this.proximoLibro ? this.proximoLibro.titulo : 'Ninguno'}`);
    }
  }
  

  const libro1 = new Libro('Libro 1', 'Comedia', 'Pablo');
  const libro2 = new Libro('Libro 2', 'Terror', 'Jorge');
  const libro3 = new Libro('Libro 3', 'Ficción', 'José');
  
  const listaDeLibros = new ListaDeLibros();
  listaDeLibros.añadir(libro1);
  listaDeLibros.añadir(libro2);
  listaDeLibros.añadir(libro3);
  
  listaDeLibros.libroTerminado();
  listaDeLibros.mostrarEstado();