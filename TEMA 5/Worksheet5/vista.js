class vistaNotas{


    creaNota(nota,idDiv){
        
        let contenedor = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerHTML = nota.titulo;
        let h2 = document.createElement("h2");
        h2.innerHTML = nota.texto;
        contenedor.appendChild(h1);
        contenedor.appendChild(h2);

        contenedor.idNota  = nota.id;

        document.getElementById(idDiv).appendChild(contenedor);

    }

    borrarNota(idDiv,contenedorNota){
        contenedor.id = nota.id;
        document.getElementById(idDiv).removeChild(contenedorNota);
    }
}