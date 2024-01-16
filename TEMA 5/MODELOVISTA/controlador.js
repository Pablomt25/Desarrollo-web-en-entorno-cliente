window.onload = () => {
    miListaLibros = new ListaLectura();
    document.getElementById("btnAlta").addEventListener("click", altaLibro);
}

function altaLibro(){
    let tit = document.getElementById("inputTit").value;
    let aut = document.getElementById("inputAut").value; 
    let agn = document.getElementById("inputAño").value;

    let nuevoLibro = new Libro(tit, aut, agn);
    miListaLibros.addLibro(nuevoLibro);

    actualizarVista();
}

function actualizarVista(){
    vistaSimple("misLibros", miListaLibros.listaLibros); 
}
