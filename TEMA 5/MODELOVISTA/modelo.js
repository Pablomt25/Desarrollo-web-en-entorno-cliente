class Libro {
    constructor(tit, autor, año){
        this.titulo = tit;
        this.autor = autor;
        this.año = año;
    }
}

class ListaLectura {
    constructor(){
        this.listaLibros = [];
    }

    addLibro(libro){
        this.listaLibros.push(libro);
    }
}
