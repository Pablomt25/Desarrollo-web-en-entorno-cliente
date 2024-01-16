class Nota {
    constructor(titulo, texto, idNota) {
        this.titulo = titulo;
        this.texto = texto;
        this.fechaCreacion = Date.now();
        this.id = idNota;
    }
}

class ListaNotas {
    idNota = 0;

    constructor() {
        this.lista = [];
    }

    añadirNota(titulo, texto) {
        this.lista.push(new Nota(titulo, texto, this.idNota++));
    }

    eliminarNota(id) {
        const posicion = this.localizaNota(id);

        if (posicion >= 0) {
            this.lista.splice(posicion, 1);
        }
    }

    editarNota(id, nuevoTitulo, nuevoTexto) {
        const posicion = this.localizaNota(id);

        if (posicion >= 0) {
            this.lista[posicion].titulo = nuevoTitulo;
            this.lista[posicion].texto = nuevoTexto;
        }
    }

    // Devuelve la posición que está la nota con su id o -1 en caso contrario
    localizaNota(id) {
        let i, encontrado;
        for (i = 0, encontrado = false; !encontrado && i < this.lista.length; i++) {
            if (this.lista[i].id == id) {
                encontrado = true;
            }
        }

        if (encontrado) {
            return i;
        } else {
            return -1;
        }
    }
}