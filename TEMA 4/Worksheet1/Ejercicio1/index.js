window.onload = ()=>{
    console.log("Pagina cargada")

    asociarEventos();
}

function asociarEventos(){
    const btn = document.getElementById("btn");

    btn.addEventListener("click", ()=>{
        alert("hola");
    })

}