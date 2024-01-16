window.onload= ()=>{

    misNotas = new listaNotas();
    vista = new vistaNotas();


    document.getElementById("buttonAltaNota").addEventListener("click",nuevaNota);
}

function nuevaNota(){
    campoTitulo = document.getElementById("inputTitulo");
    campoTexto  = document.getElementById("inputTexto");

    misNotas.añadirNota(campoTitulo.value, campoTexto.value);

    notaActual = misNotas.lista[misNotas.lista.length-1];

    vista.crearNota(notaActual,"app");

    borradoNota.addEventListener("click",borrarNota);
}

function borrarNota(){

}

